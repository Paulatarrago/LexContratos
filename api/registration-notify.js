export const config = {
  runtime: "edge"
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" }
  });
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;

function requestIp(request) {
  const forwarded = request.headers.get("x-forwarded-for") || "";
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-real-ip") ||
    forwarded.split(",")[0].trim() ||
    "unknown"
  );
}

function allowedOrigins(env) {
  const appBase = env.APP_BASE_URL || "https://lexcontratos.com";
  return new Set([
    "https://lexcontratos.com",
    "https://www.lexcontratos.com",
    "http://localhost:4173",
    "http://localhost:4174",
    "http://localhost:4175",
    "http://localhost:4176",
    "http://localhost:4180",
    "http://127.0.0.1:4173",
    "http://127.0.0.1:4174",
    "http://127.0.0.1:4175",
    "http://127.0.0.1:4176",
    "http://127.0.0.1:4180",
    appBase.replace(/\/+$/, "")
  ]);
}

function originFromRequest(request) {
  const origin = request.headers.get("origin");
  if (origin) return origin.replace(/\/+$/, "");
  const referer = request.headers.get("referer");
  if (!referer) return "";
  try {
    return new URL(referer).origin;
  } catch {
    return "";
  }
}

function isAllowedOrigin(request, env) {
  const origin = originFromRequest(request);
  if (!origin) return false;
  return allowedOrigins(env).has(origin);
}

function rateLimitStore() {
  if (!globalThis.__lexRegistrationRateLimit) globalThis.__lexRegistrationRateLimit = new Map();
  return globalThis.__lexRegistrationRateLimit;
}

function checkRateLimit(request) {
  const now = Date.now();
  const store = rateLimitStore();
  const key = requestIp(request);
  for (const [entryKey, entry] of store.entries()) {
    if (now - entry.startedAt > RATE_LIMIT_WINDOW_MS) store.delete(entryKey);
  }
  const entry = store.get(key) || { count: 0, startedAt: now };
  if (now - entry.startedAt > RATE_LIMIT_WINDOW_MS) {
    entry.count = 0;
    entry.startedAt = now;
  }
  entry.count += 1;
  store.set(key, entry);
  return entry.count <= RATE_LIMIT_MAX_REQUESTS;
}

function csvSet(value) {
  return new Set(
    String(value || "")
      .split(",")
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean)
  );
}

function emailDomain(email) {
  return String(email || "").split("@").pop()?.toLowerCase() || "";
}

function isAllowedRegistrationEmail(email, env) {
  const allowedEmails = csvSet(env.REGISTRATION_ALLOWED_EMAILS);
  const allowedDomains = csvSet(env.REGISTRATION_ALLOWED_DOMAINS || "grupococei.com");
  if (!allowedEmails.size && !allowedDomains.size) return true;
  return allowedEmails.has(email) || allowedDomains.has(emailDomain(email));
}

function isBlockedRegistrationEmail(email, env) {
  const blockedEmails = csvSet(env.REGISTRATION_BLOCKED_EMAILS);
  const blockedDomains = csvSet(env.REGISTRATION_BLOCKED_DOMAINS);
  return blockedEmails.has(email) || blockedDomains.has(emailDomain(email));
}

function looksAutomatedName(name) {
  const value = String(name || "").trim();
  if (/https?:\/\//i.test(value)) return true;
  if (/[^a-záéíóúüñ\s.'-]/i.test(value)) return true;
  const compact = value.replace(/\s+/g, "");
  if (compact.length >= 12 && !/[aeiouáéíóú]/i.test(compact)) return true;
  return false;
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

export default async function handler(request) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Metodo no permitido." }, 405);
  }

  const env = typeof process !== "undefined" ? process.env : {};
  const apiKey = env.RESEND_API_KEY;
  const from = env.RESEND_FROM || "LexContratos <no-reply@lexcontratos.com>";
  const contactTo = env.CONTACT_TO || env.SUPPORT_EMAIL || "contacto@lexcontratos.com";

  if (!apiKey) {
    return jsonResponse({ ok: false, error: "Notificacion no configurada." }, 503);
  }

  if (!isAllowedOrigin(request, env)) {
    return jsonResponse({ error: "No se pudo validar el origen de la solicitud." }, 403);
  }

  if (!checkRateLimit(request)) {
    return jsonResponse({ error: "Recibimos demasiados registros. Intenta nuevamente más tarde." }, 429);
  }

  const body = await request.json().catch(() => ({}));
  const name = String(body.name || "").trim().slice(0, 120);
  const email = String(body.email || "").trim().toLowerCase();
  const website = String(body.website || body.companyWebsite || "").trim();

  if (website || isBlockedRegistrationEmail(email, env) || !isAllowedRegistrationEmail(email, env) || looksAutomatedName(name)) {
    return jsonResponse({ ok: true });
  }

  if (!name || !isEmail(email)) {
    return jsonResponse({ error: "Registro incompleto." }, 400);
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const appUrl = escapeHtml(env.APP_BASE_URL || "https://lexcontratos.com");

  await sendEmail(apiKey, {
    from,
    to: [contactTo],
    reply_to: email,
    subject: `Nuevo usuario pendiente de licencia: ${name}`,
    html: `
      <h2>Nuevo registro en LexContratos</h2>
      <p>Un usuario creó cuenta y quedó pendiente de activación.</p>
      <p><strong>Nombre:</strong> ${safeName}</p>
      <p><strong>Correo:</strong> ${safeEmail}</p>
      <p><strong>Siguiente paso:</strong> entra al panel de administración de LexContratos para activar, suspender o revisar la licencia.</p>
      <p><a href="${appUrl}/app">Abrir LexContratos</a></p>
    `
  });

  return jsonResponse({ ok: true });
}
