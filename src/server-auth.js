export function jsonResponse(body, status = 200) {
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

function requireSupabaseConfig(env) {
  const supabaseUrl = env.SUPABASE_URL || env.VITE_SUPABASE_URL;
  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
  const publicKey = env.VITE_SUPABASE_PUBLISHABLE_KEY || serviceKey;
  if (!supabaseUrl || !serviceKey) return null;
  return {
    supabaseUrl: supabaseUrl.replace(/\/+$/, ""),
    serviceKey,
    publicKey
  };
}

async function currentUserFromToken(config, token) {
  const response = await fetch(`${config.supabaseUrl}/auth/v1/user`, {
    headers: {
      apikey: config.publicKey,
      authorization: `Bearer ${token}`
    }
  });
  if (!response.ok) return null;
  return response.json();
}

async function supabaseJson(config, path) {
  const response = await fetch(`${config.supabaseUrl}${path}`, {
    headers: {
      apikey: config.serviceKey,
      authorization: `Bearer ${config.serviceKey}`,
      "content-type": "application/json"
    }
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) throw new Error(data?.message || data?.error || "No se pudo validar el acceso.");
  return data;
}

export async function requireActiveAccess(request, env) {
  const config = requireSupabaseConfig(env);
  if (!config) {
    return {
      ok: false,
      response: jsonResponse({ error: "El acceso privado no está configurado temporalmente." }, 503)
    };
  }

  const token = bearerToken(request);
  if (!token) {
    return {
      ok: false,
      response: jsonResponse({ error: "Inicia sesión para usar esta función." }, 401)
    };
  }

  const user = await currentUserFromToken(config, token);
  if (!user?.id) {
    return {
      ok: false,
      response: jsonResponse({ error: "Tu sesión no está disponible. Vuelve a iniciar sesión." }, 401)
    };
  }

  const [profiles, licenses] = await Promise.all([
    supabaseJson(
      config,
      `/rest/v1/profiles?id=eq.${encodeURIComponent(user.id)}&select=id,email,role,account_status,license_status&limit=1`
    ),
    supabaseJson(
      config,
      `/rest/v1/licenses?user_id=eq.${encodeURIComponent(user.id)}&select=user_id,status,plan,ends_at&limit=1`
    )
  ]);

  const profile = profiles?.[0];
  const license = licenses?.[0];
  const status = license?.status || profile?.license_status || "inactive";
  const accountActive = profile?.account_status === "active";
  const expiresAt = license?.ends_at ? Date.parse(license.ends_at) : null;
  const licenseCurrent = !expiresAt || Number.isNaN(expiresAt) || expiresAt >= Date.now();
  const hasLicense = ["active", "trial"].includes(status) && licenseCurrent;
  const isAdmin = profile?.role === "admin" || profile?.role === "superadmin";

  if (!profile || !accountActive || (!isAdmin && !hasLicense)) {
    return {
      ok: false,
      response: jsonResponse({ error: "Tu cuenta no tiene licencia activa para usar esta función." }, 403)
    };
  }

  return { ok: true, user, profile, license, status };
}
