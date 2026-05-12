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
    return jsonResponse({ error: "Falta RESEND_API_KEY en el backend." }, 503);
  }

  const body = await request.json().catch(() => ({}));
  const name = String(body.name || "").trim().slice(0, 120);
  const email = String(body.email || "").trim().toLowerCase();
  const message = String(body.message || "").trim().slice(0, 4000);

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
