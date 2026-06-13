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

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function requestIp(request) {
  const forwarded = request.headers.get("x-forwarded-for") || "";
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-real-ip") ||
    forwarded.split(",")[0].trim() ||
    "unknown"
  );
}

function allowedContactOrigins(env) {
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

function assertAllowedOrigin(request, env) {
  const origin = originFromRequest(request);
  if (!origin) return false;
  return allowedContactOrigins(env).has(origin);
}

function rateLimitStore() {
  if (!globalThis.__lexContactRateLimit) globalThis.__lexContactRateLimit = new Map();
  return globalThis.__lexContactRateLimit;
}

function checkRateLimit(request) {
  const now = Date.now();
  const key = requestIp(request);
  const store = rateLimitStore();
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
  if (!response.ok) {
    throw new Error(data?.message || data?.error?.message || "No se pudo enviar el correo.");
  }
  return data;
}

export default async function handler(request) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Metodo no permitido." }, 405);
  }

  const env = typeof process !== "undefined" ? process.env : {};
  const apiKey = env.RESEND_API_KEY;
  const from = env.RESEND_FROM || "LexContratos <no-reply@lexcontratos.com>";
  const replyTo = env.RESEND_REPLY_TO || env.CONTACT_TO || "contacto@lexcontratos.com";
  const contactTo = env.CONTACT_TO || "contacto@lexcontratos.com";

  if (!apiKey) {
    return jsonResponse({ error: "El envío de solicitudes no está disponible temporalmente." }, 503);
  }

  if (!assertAllowedOrigin(request, env)) {
    return jsonResponse({ error: "No se pudo validar el origen de la solicitud." }, 403);
  }

  if (!checkRateLimit(request)) {
    return jsonResponse({ error: "Recibimos demasiadas solicitudes. Intenta nuevamente más tarde." }, 429);
  }

  const body = await request.json().catch(() => ({}));
  const name = String(body.name || "").trim().slice(0, 120);
  const email = String(body.email || "").trim().toLowerCase();
  const message = String(body.message || "").trim().slice(0, 4000);
  const website = String(body.website || body.companyWebsite || "").trim();

  if (website) {
    return jsonResponse({ ok: true });
  }

  if (!name || !isEmail(email) || !message) {
    return jsonResponse({ error: "Completa nombre, correo y mensaje." }, 400);
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  await sendEmail(apiKey, {
    from,
    to: [contactTo],
    reply_to: email,
    subject: `Nuevo contacto LexContratos: ${name}`,
    html: `
      <h2>Nuevo mensaje desde LexContratos</h2>
      <p><strong>Nombre:</strong> ${safeName}</p>
      <p><strong>Correo:</strong> ${safeEmail}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${safeMessage}</p>
    `
  });

  await sendEmail(apiKey, {
    from,
    to: [email],
    reply_to: replyTo,
    subject: "Recibimos tu mensaje en LexContratos",
    html: `
      <p>Hola ${safeName},</p>
      <p>Recibimos tu mensaje sobre LexContratos. Te responderemos pronto para ayudarte con acceso, licencias o una demo.</p>
      <p>Mientras tanto, puedes responder directamente a este correo si quieres agregar informacion.</p>
      <p>LexContratos</p>
    `
  });

  return jsonResponse({ ok: true });
}
