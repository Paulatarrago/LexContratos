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

  const body = await request.json().catch(() => ({}));
  const name = String(body.name || "").trim().slice(0, 120);
  const email = String(body.email || "").trim().toLowerCase();

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
