export const config = {
  runtime: "edge"
};

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

async function assertAdmin(request, config) {
  const user = await currentUserFromToken(config, bearerToken(request));
  if (!user?.id) return { error: jsonResponse({ error: "Inicia sesión para administrar usuarios." }, 401) };
  const profiles = await supabaseJson(
    config,
    `/rest/v1/profiles?id=eq.${encodeURIComponent(user.id)}&select=id,email,role,account_status,license_status&limit=1`
  );
  const profile = profiles?.[0];
  if (profile?.role !== "admin") {
    return { error: jsonResponse({ error: "No tienes permisos de administrador." }, 403) };
  }
  return { user, profile };
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

export default async function handler(request) {
  let config;
  try {
    config = requireEnv(typeof process !== "undefined" ? process.env : {});
  } catch (error) {
    return jsonResponse({ error: "Administración de usuarios no configurada." }, 503);
  }

  const admin = await assertAdmin(request, config);
  if (admin.error) return admin.error;

  try {
    if (request.method === "GET") {
      return jsonResponse({ users: await listUsers(config) });
    }

    if (request.method !== "POST") {
      return jsonResponse({ error: "Metodo no permitido." }, 405);
    }

    const body = await request.json().catch(() => ({}));
    const action = String(body.action || "");
    const userId = String(body.userId || "");
    const email = String(body.email || "").trim().toLowerCase();
    const fullName = String(body.fullName || email || "Usuario").trim();
    const currentRole = body.currentRole === "admin" ? "admin" : "user";

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
      return jsonResponse({ ok: true });
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
      return jsonResponse({ ok: true });
    }

    return jsonResponse({ error: "Acción no reconocida." }, 400);
  } catch (error) {
    console.warn("LexContratos admin users error", error);
    return jsonResponse({ error: "No se pudo actualizar usuarios. Revisa la configuración de administración." }, 500);
  }
}
