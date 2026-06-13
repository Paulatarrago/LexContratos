export const config = {
  runtime: "edge"
};

import { requireActiveAccess } from "../src/server-auth.js";

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" }
  });
}

function bearerToken(request) {
  const header = request.headers.get("authorization") || "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match?.[1] || "";
}

function requireEnv(env) {
  const supabaseUrl = env.SUPABASE_URL || env.VITE_SUPABASE_URL;
  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
  const publicKey = env.VITE_SUPABASE_PUBLISHABLE_KEY || serviceKey;
  if (!supabaseUrl || !serviceKey) {
    throw new Error("Administracion no configurada.");
  }
  return {
    supabaseUrl: supabaseUrl.replace(/\/+$/, ""),
    serviceKey,
    publicKey
  };
}

async function supabaseJson({ supabaseUrl, serviceKey }, path, options = {}) {
  const response = await fetch(`${supabaseUrl}${path}`, {
    method: options.method || "GET",
    headers: {
      apikey: serviceKey,
      authorization: `Bearer ${serviceKey}`,
      "content-type": "application/json",
      ...(options.prefer ? { prefer: options.prefer } : {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    throw new Error(data?.message || data?.error_description || data?.error || "Supabase no pudo completar la operación.");
  }
  return data;
}

async function currentUserFromToken(config, token) {
  if (!token) return null;
  const response = await fetch(`${config.supabaseUrl}/auth/v1/user`, {
    headers: {
      apikey: config.publicKey,
      authorization: `Bearer ${token}`
    }
  });
  if (!response.ok) return null;
  return response.json();
}

async function assertAdmin(request, env) {
  const access = await requireActiveAccess(request, env);
  if (!access.ok) return { error: access.response };
  if (!["admin", "superadmin"].includes(access.profile?.role)) {
    return { error: jsonResponse({ error: "No tienes permisos de administrador." }, 403) };
  }
  return { user: access.user, profile: access.profile };
}

async function listAuthUsers(config) {
  const response = await fetch(`${config.supabaseUrl}/auth/v1/admin/users?per_page=100&page=1`, {
    headers: {
      apikey: config.serviceKey,
      authorization: `Bearer ${config.serviceKey}`
    }
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data?.message || data?.error_description || "No se pudieron leer los usuarios.");
  return data.users || [];
}

function userNameFromAuth(user) {
  return user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email || "Usuario";
}

async function listUsers(config) {
  const [authUsers, profiles, licenses] = await Promise.all([
    listAuthUsers(config),
    supabaseJson(config, "/rest/v1/profiles?select=id,email,full_name,role,account_status,license_status,created_at,updated_at&order=created_at.desc"),
    supabaseJson(config, "/rest/v1/licenses?select=user_id,status,plan,starts_at,ends_at,updated_at")
  ]);
  const profilesById = new Map((profiles || []).map((profile) => [profile.id, profile]));
  const licensesByUser = new Map((licenses || []).map((license) => [license.user_id, license]));

  return authUsers.map((user) => {
    const profile = profilesById.get(user.id) || {};
    const license = licensesByUser.get(user.id) || {};
    const status = license.status || profile.license_status || "inactive";
    return {
      id: user.id,
      email: user.email || profile.email || "",
      full_name: profile.full_name || userNameFromAuth(user),
      role: profile.role || "user",
      account_status: profile.account_status || "active",
      license_status: status,
      plan: license.plan || "",
      created_at: user.created_at || profile.created_at || "",
      last_sign_in_at: user.last_sign_in_at || "",
      email_confirmed_at: user.email_confirmed_at || ""
    };
  });
}

async function upsertProfile(config, payload) {
  return supabaseJson(config, "/rest/v1/profiles?on_conflict=id", {
    method: "POST",
    prefer: "resolution=merge-duplicates,return=representation",
    body: payload
  });
}

async function upsertLicense(config, payload) {
  return supabaseJson(config, "/rest/v1/licenses?on_conflict=user_id", {
    method: "POST",
    prefer: "resolution=merge-duplicates,return=representation",
    body: payload
  });
}

async function deleteAuthUser(config, userId) {
  const response = await fetch(`${config.supabaseUrl}/auth/v1/admin/users/${encodeURIComponent(userId)}`, {
    method: "DELETE",
    headers: {
      apikey: config.serviceKey,
      authorization: `Bearer ${config.serviceKey}`
    }
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data?.message || data?.error_description || data?.error || "No se pudo eliminar el usuario.");
  }
  return data;
}

async function createAuthUser(config, { email, password, fullName }) {
  const response = await fetch(`${config.supabaseUrl}/auth/v1/admin/users`, {
    method: "POST",
    headers: {
      apikey: config.serviceKey,
      authorization: `Bearer ${config.serviceKey}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        full_name: fullName
      }
    })
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data?.message || data?.error_description || data?.error || "No se pudo crear el usuario.");
  }
  return data?.user || data;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendEmail(apiKey, payload) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data?.message || data?.error?.message || "No se pudo enviar el correo.");
  return data;
}

async function notifyLicenseActivated(env, { email, fullName, role = "user" }) {
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) return { sent: false, skipped: true, reason: "Resend no configurado." };

  const from = env.RESEND_FROM || "LexContratos <no-reply@lexcontratos.com>";
  const replyTo = env.RESEND_REPLY_TO || env.SUPPORT_EMAIL || env.CONTACT_TO || "contacto@lexcontratos.com";
  const appUrl = (env.APP_BASE_URL || "https://lexcontratos.com").replace(/\/+$/, "");
  const safeName = escapeHtml(fullName || email);
  const safeAppUrl = escapeHtml(`${appUrl}/login`);
  const roleLine = role === "superadmin"
    ? "Tu cuenta quedó marcada como super administradora para gestionar usuarios, licencias, configuración y respaldos."
    : role === "admin"
      ? "Tu cuenta también quedó marcada como administradora para gestionar usuarios, licencias y catálogo de formatos."
      : "Tu licencia quedó activa para trabajar en LexContratos.";

  await sendEmail(apiKey, {
    from,
    to: [email],
    reply_to: replyTo,
    subject: "Tu acceso a LexContratos ya está activo",
    text: [
      `Hola ${fullName || email},`,
      "",
      roleLine,
      "",
      `Ya puedes entrar a ${appUrl}/login con el correo y contraseña que registraste.`,
      "",
      "Si tienes algún problema para entrar, responde este correo para pedir ayuda.",
      "",
      "LexContratos"
    ].join("\n"),
    html: `
      <p>Hola ${safeName},</p>
      <p>${escapeHtml(roleLine)}</p>
      <p>Ya puedes entrar con el correo y contraseña que registraste:</p>
      <p><a href="${safeAppUrl}">${safeAppUrl}</a></p>
      <p>Si tienes algún problema para entrar, responde este correo para pedir ayuda.</p>
      <p>LexContratos</p>
    `
  });

  return { sent: true };
}

export default async function handler(request) {
  const env = typeof process !== "undefined" ? process.env : {};
  let config;
  try {
    config = requireEnv(env);
  } catch (error) {
    return jsonResponse({ error: "Administración de usuarios no configurada." }, 503);
  }

  const admin = await assertAdmin(request, env);
  if (admin.error) return admin.error;

  try {
    if (request.method === "GET") {
      return jsonResponse({
        currentAdmin: {
          id: admin.user.id,
          email: admin.profile.email || admin.user.email || "",
          role: admin.profile.role || "user"
        },
        users: await listUsers(config)
      });
    }

    if (request.method !== "POST") {
      return jsonResponse({ error: "Metodo no permitido." }, 405);
    }

    const body = await request.json().catch(() => ({}));
    const action = String(body.action || "");
    const userId = String(body.userId || "");
    const email = String(body.email || "").trim().toLowerCase();
    const fullName = String(body.fullName || email || "Usuario").trim();
    const allowedRoles = new Set(["user", "admin", "superadmin"]);
    const currentRole = allowedRoles.has(body.currentRole) ? body.currentRole : "user";
    const targetIsSuperAdmin = currentRole === "superadmin";

    if (targetIsSuperAdmin && admin.profile.role !== "superadmin") {
      return jsonResponse({ error: "Solo super administración puede modificar otra cuenta superadmin." }, 403);
    }

    if (action === "create_user") {
      const password = String(body.password || "");
      const requestedRole = allowedRoles.has(body.role) ? body.role : "user";
      if (!email || !fullName || password.length < 8) {
        return jsonResponse({ error: "Completa nombre, correo y una contraseña temporal de al menos 8 caracteres." }, 400);
      }
      if (requestedRole === "superadmin" && admin.profile.role !== "superadmin") {
        return jsonResponse({ error: "Solo super administración puede crear otra cuenta superadmin." }, 403);
      }

      const created = await createAuthUser(config, { email, password, fullName });
      await upsertProfile(config, {
        id: created.id,
        email,
        full_name: fullName,
        role: requestedRole,
        account_status: "active",
        license_status: "active"
      });
      await upsertLicense(config, {
        user_id: created.id,
        status: "active",
        plan: "internal",
        starts_at: new Date().toISOString()
      });
      let activationEmail = { sent: false };
      try {
        activationEmail = await notifyLicenseActivated(env, { email, fullName, role: requestedRole });
      } catch (emailError) {
        console.warn("LexContratos no pudo enviar correo de usuario creado", emailError);
      }
      return jsonResponse({ ok: true, userId: created.id, activationEmailSent: Boolean(activationEmail.sent) });
    }

    if (!userId || !email) {
      return jsonResponse({ error: "Usuario incompleto." }, 400);
    }

    if (action === "delete_user") {
      if (userId === admin.user.id) {
        return jsonResponse({ error: "No puedes eliminar tu propia cuenta administradora desde este panel." }, 400);
      }
      await deleteAuthUser(config, userId);
      return jsonResponse({ ok: true });
    }

    if (action === "notify_access") {
      let activationEmail = { sent: false };
      try {
        activationEmail = await notifyLicenseActivated(env, { email, fullName, role: currentRole });
      } catch (emailError) {
        console.warn("LexContratos no pudo reenviar correo de acceso", emailError);
        return jsonResponse({ ok: false, error: "El usuario conserva su acceso, pero no se pudo enviar el correo automático." }, 502);
      }
      return jsonResponse({ ok: true, activationEmailSent: Boolean(activationEmail.sent) });
    }

    if (action === "activate") {
      await upsertProfile(config, {
        id: userId,
        email,
        full_name: fullName,
        role: currentRole,
        account_status: "active",
        license_status: "active"
      });
      await upsertLicense(config, {
        user_id: userId,
        status: "active",
        plan: "internal",
        starts_at: new Date().toISOString()
      });
      let activationEmail = { sent: false };
      try {
        activationEmail = await notifyLicenseActivated(env, { email, fullName, role: currentRole });
      } catch (emailError) {
        console.warn("LexContratos no pudo enviar correo de activacion", emailError);
      }
      return jsonResponse({ ok: true, activationEmailSent: Boolean(activationEmail.sent) });
    }

    if (action === "suspend") {
      await upsertProfile(config, {
        id: userId,
        email,
        full_name: fullName,
        role: currentRole,
        account_status: "inactive",
        license_status: "inactive"
      });
      await upsertLicense(config, {
        user_id: userId,
        status: "cancelled",
        plan: "internal"
      });
      return jsonResponse({ ok: true });
    }

    if (action === "make_admin") {
      await upsertProfile(config, {
        id: userId,
        email,
        full_name: fullName,
        role: "admin",
        account_status: "active",
        license_status: "active"
      });
      await upsertLicense(config, {
        user_id: userId,
        status: "active",
        plan: "internal",
        starts_at: new Date().toISOString()
      });
      let activationEmail = { sent: false };
      try {
        activationEmail = await notifyLicenseActivated(env, { email, fullName, role: "admin" });
      } catch (emailError) {
        console.warn("LexContratos no pudo enviar correo de activacion admin", emailError);
      }
      return jsonResponse({ ok: true, activationEmailSent: Boolean(activationEmail.sent) });
    }

    if (action === "make_superadmin") {
      if (admin.profile.role !== "superadmin") {
        return jsonResponse({ error: "Solo super administración puede asignar este permiso." }, 403);
      }
      await upsertProfile(config, {
        id: userId,
        email,
        full_name: fullName,
        role: "superadmin",
        account_status: "active",
        license_status: "active"
      });
      await upsertLicense(config, {
        user_id: userId,
        status: "active",
        plan: "internal",
        starts_at: new Date().toISOString()
      });
      let activationEmail = { sent: false };
      try {
        activationEmail = await notifyLicenseActivated(env, { email, fullName, role: "superadmin" });
      } catch (emailError) {
        console.warn("LexContratos no pudo enviar correo de activacion superadmin", emailError);
      }
      return jsonResponse({ ok: true, activationEmailSent: Boolean(activationEmail.sent) });
    }

    if (action === "make_user") {
      if (admin.profile.role !== "superadmin") {
        return jsonResponse({ error: "Solo super administración puede cambiar administradores a usuarios." }, 403);
      }
      if (userId === admin.user.id) {
        return jsonResponse({ error: "No puedes quitarte tus propios permisos desde este panel." }, 400);
      }
      await upsertProfile(config, {
        id: userId,
        email,
        full_name: fullName,
        role: "user",
        account_status: "active",
        license_status: "active"
      });
      await upsertLicense(config, {
        user_id: userId,
        status: "active",
        plan: "internal",
        starts_at: new Date().toISOString()
      });
      return jsonResponse({ ok: true });
    }

    return jsonResponse({ error: "Acción no reconocida." }, 400);
  } catch (error) {
    console.warn("LexContratos admin users error", error);
    return jsonResponse({ error: "No se pudo actualizar usuarios. Revisa la configuración de administración." }, 500);
  }
}
