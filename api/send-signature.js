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

function contractDocumentHtml({ title, folio, body }) {
  const paragraphs = String(body || "")
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br />")}</p>`)
    .join("\n");

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(title)}</title>
    <style>
      @page { margin: 0.75in; }
      body { font-family: "Times New Roman", serif; font-size: 12pt; line-height: 1.5; color: #111827; }
      h1 { text-align: center; font-size: 14pt; text-transform: uppercase; margin: 0 0 24pt; }
      p { margin: 0 0 10pt; text-align: justify; }
      .folio { text-align: right; font-size: 9pt; color: #4b5563; margin-bottom: 18pt; }
    </style>
  </head>
  <body>
    <div class="folio">${escapeHtml(folio || "")}</div>
    <h1>${escapeHtml(title)}</h1>
    ${paragraphs}
  </body>
</html>`;
}

export default async function handler(request) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Metodo no permitido." }, 405);
  }

  const env = typeof process !== "undefined" ? process.env : {};
  const apiKey = env.DROPBOX_SIGN_API_KEY;
  if (!apiKey) {
    return jsonResponse({ error: "La firma electrónica aún no está configurada." }, 503);
  }

  const payload = await request.json().catch(() => ({}));
  const title = String(payload.title || "Contrato LexContratos").trim().slice(0, 255);
  const folio = String(payload.folio || "").trim().slice(0, 120);
  const body = String(payload.body || "").trim();
  const signers = Array.isArray(payload.signers) ? payload.signers : [];
  const cleanSigners = signers
    .map((signer, index) => ({
      name: String(signer.name || "").trim().slice(0, 120),
      email: String(signer.email || "").trim().toLowerCase(),
      role: String(signer.role || "").trim().slice(0, 80),
      order: Number.isFinite(Number(signer.order)) ? Number(signer.order) : index + 1
    }))
    .filter((signer) => signer.name && isEmail(signer.email));

  if (!body || !cleanSigners.length || cleanSigners.length !== signers.length) {
    return jsonResponse({ error: "Completa contrato, nombre y correo válido de cada firmante." }, 400);
  }

  const formData = new FormData();
  const file = new Blob([contractDocumentHtml({ title, folio, body })], {
    type: "application/msword"
  });
  formData.append("files[0]", file, `${folio || "contrato"}-${Date.now()}.doc`);
  formData.append("title", title);
  formData.append("subject", `Firma de ${title}`);
  formData.append("message", "Te compartimos este contrato para revisión y firma electrónica.");
  formData.append("test_mode", env.DROPBOX_SIGN_TEST_MODE === "false" ? "0" : "1");
  formData.append("signing_options[draw]", "1");
  formData.append("signing_options[type]", "1");
  formData.append("signing_options[upload]", "1");
  formData.append("signing_options[phone]", "0");
  formData.append("signing_options[default_type]", "draw");
  formData.append("field_options[date_format]", "DD/MM/YYYY");
  if (env.DROPBOX_SIGN_CLIENT_ID) formData.append("client_id", env.DROPBOX_SIGN_CLIENT_ID);
  if (folio) formData.append("metadata[folio]", folio.slice(0, 1000));

  cleanSigners
    .sort((a, b) => a.order - b.order)
    .forEach((signer, index) => {
      formData.append(`signers[${index}][email_address]`, signer.email);
      formData.append(`signers[${index}][name]`, signer.name);
      formData.append(`signers[${index}][order]`, String(index));
    });

  const response = await fetch("https://api.hellosign.com/v3/signature_request/send", {
    method: "POST",
    headers: {
      authorization: `Basic ${btoa(`${apiKey}:`)}`
    },
    body: formData
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    return jsonResponse({ error: "No se pudo enviar el contrato a firma." }, response.status);
  }

  const signatureRequest = data.signature_request || {};
  return jsonResponse({
    ok: true,
    signatureRequestId: signatureRequest.signature_request_id,
    title: signatureRequest.title,
    detailsUrl: signatureRequest.details_url,
    signingUrl: signatureRequest.signing_url,
    isComplete: Boolean(signatureRequest.is_complete),
    testMode: Boolean(signatureRequest.test_mode),
    signatures: signatureRequest.signatures || []
  });
}
