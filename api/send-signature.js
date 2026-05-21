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

function pdfText(value) {
  const winAnsi = {
    "á": 0xe1, "é": 0xe9, "í": 0xed, "ó": 0xf3, "ú": 0xfa, "ñ": 0xf1, "ü": 0xfc,
    "Á": 0xc1, "É": 0xc9, "Í": 0xcd, "Ó": 0xd3, "Ú": 0xda, "Ñ": 0xd1, "Ü": 0xdc,
    "¿": 0xbf, "¡": 0xa1, "°": 0xb0
  };
  return String(value || "")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[–—]/g, "-")
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      const byte = code < 128 ? code : winAnsi[char];
      if (!byte) return "";
      if (char === "\\" || char === "(" || char === ")") return `\\${char}`;
      if (byte < 32 || byte > 126) return `\\${byte.toString(8).padStart(3, "0")}`;
      return char;
    })
    .join("");
}

function wrapTextLine(text, maxLength = 92) {
  const words = String(text || "").split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";
  words.forEach((word) => {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxLength && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  });
  if (current) lines.push(current);
  return lines.length ? lines : [""];
}

function contractLines({ title, folio, body }) {
  const lines = [];
  if (folio) lines.push(`Folio: ${folio}`, "");
  lines.push(String(title || "Contrato LexContratos").toUpperCase(), "");
  String(body || "")
    .split(/\n{2,}/)
    .forEach((paragraph) => {
      paragraph.split(/\n/).forEach((line) => lines.push(...wrapTextLine(line.trim())));
      lines.push("");
    });
  return lines;
}

function bytesToHex(bytes) {
  return Array.from(bytes).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function bytesFromBase64(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes;
}

function jpegDimensions(bytes) {
  if (!bytes || bytes[0] !== 0xff || bytes[1] !== 0xd8) return null;
  let offset = 2;
  while (offset < bytes.length) {
    if (bytes[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = bytes[offset + 1];
    offset += 2;
    if (marker === 0xda || marker === 0xd9) break;
    const length = (bytes[offset] << 8) + bytes[offset + 1];
    if (!length || offset + length > bytes.length) break;
    if ((marker >= 0xc0 && marker <= 0xc3) || (marker >= 0xc5 && marker <= 0xc7) || (marker >= 0xc9 && marker <= 0xcb) || (marker >= 0xcd && marker <= 0xcf)) {
      return {
        height: (bytes[offset + 3] << 8) + bytes[offset + 4],
        width: (bytes[offset + 5] << 8) + bytes[offset + 6],
        components: bytes[offset + 7] || 3
      };
    }
    offset += length;
  }
  return null;
}

function letterheadImageFromPayload(letterheadLogo) {
  const dataUrl = String(letterheadLogo?.dataUrl || "");
  const match = dataUrl.match(/^data:image\/jpe?g;base64,(.+)$/i);
  if (!match) return null;
  const bytes = bytesFromBase64(match[1]);
  const size = jpegDimensions(bytes);
  if (!size?.width || !size?.height) return null;
  const maxWidth = 150;
  const maxHeight = 46;
  const scale = Math.min(maxWidth / size.width, maxHeight / size.height, 1);
  return {
    bytes,
    width: size.width,
    height: size.height,
    drawWidth: Math.round(size.width * scale),
    drawHeight: Math.round(size.height * scale),
    colorSpace: size.components === 1 ? "/DeviceGray" : size.components === 4 ? "/DeviceCMYK" : "/DeviceRGB"
  };
}

function normalizeLetterheadLines(...values) {
  return values
    .flatMap((value) => Array.isArray(value) ? value : [value])
    .map((value) => String(value || "").replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .slice(0, 5);
}

function letterheadFooterLinesFromPayload(letterheadLogo) {
  if (!letterheadLogo) return [];
  const lines = normalizeLetterheadLines(
    letterheadLogo.companyName,
    letterheadLogo.addressLines,
    letterheadLogo.address,
    letterheadLogo.footerLines,
    letterheadLogo.footer
  );
  return lines.flatMap((line) => wrapTextLine(line, 112)).slice(0, 4);
}

function contractDocumentPdf({ title, folio, body, letterheadLogo }) {
  const encoder = new TextEncoder();
  const logo = letterheadImageFromPayload(letterheadLogo);
  const footerLines = letterheadFooterLinesFromPayload(letterheadLogo);
  const lines = contractLines({ title, folio, body });
  const linesPerPage = logo ? (footerLines.length ? 45 : 48) : (footerLines.length ? 49 : 52);
  const pages = [];
  for (let index = 0; index < lines.length; index += linesPerPage) {
    pages.push(lines.slice(index, index + linesPerPage));
  }
  const objects = [];
  const addObject = (content) => {
    objects.push(content);
    return objects.length;
  };

  const catalogId = addObject("<< /Type /Catalog /Pages 2 0 R >>");
  const pagesId = addObject("");
  const fontId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman /Encoding /WinAnsiEncoding >>");
  const logoId = logo
    ? addObject(`<< /Type /XObject /Subtype /Image /Width ${logo.width} /Height ${logo.height} /ColorSpace ${logo.colorSpace} /BitsPerComponent 8 /Filter [/ASCIIHexDecode /DCTDecode] /Length ${bytesToHex(logo.bytes).length + 1} >>\nstream\n${bytesToHex(logo.bytes)}>\nendstream`)
    : null;
  const pageIds = [];

  pages.forEach((pageLines) => {
    const logoCommands = logoId
      ? [`q`, `${logo.drawWidth} 0 0 ${logo.drawHeight} 72 ${746 - logo.drawHeight} cm`, `/Logo Do`, `Q`]
      : [];
    const footerCommands = footerLines.map((line, lineIndex) => {
      const approximateWidth = Math.min(468, line.length * 3.5);
      const x = Math.max(54, Math.round((612 - approximateWidth) / 2));
      const y = 28 + ((footerLines.length - lineIndex - 1) * 9);
      return ["BT", "/F1 7 Tf", `${x} ${y} Td`, `(${pdfText(line)}) Tj`, "ET"].join("\n");
    });
    const textStartY = logoId ? 690 : 742;
    const stream = [
      ...logoCommands,
      "BT",
      "/F1 11 Tf",
      "14 TL",
      `72 ${textStartY} Td`,
      ...pageLines.map((line) => `(${pdfText(line)}) Tj T*`),
      "ET",
      ...footerCommands
    ].join("\n");
    const contentId = addObject(`<< /Length ${encoder.encode(stream).length} >>\nstream\n${stream}\nendstream`);
    const xObjectResource = logoId ? `/XObject << /Logo ${logoId} 0 R >>` : "";
    const pageId = addObject(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 ${fontId} 0 R >> ${xObjectResource} >> /Contents ${contentId} 0 R >>`);
    pageIds.push(pageId);
  });

  objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(encoder.encode(pdf).length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset = encoder.encode(pdf).length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return encoder.encode(pdf);
}

function dropboxErrorMessage(data) {
  const raw = data?.error?.error_msg || data?.error?.message || data?.message || "";
  if (/test mode/i.test(raw) && /own domain/i.test(raw)) {
    return "Dropbox Sign está en modo prueba y por ahora solo permite enviar solicitudes a correos del mismo dominio de tu cuenta. Para probar con Hotmail, Outlook u otros dominios, solicita a Dropbox Sign que levante la restricción o usa un plan/API que permita envíos externos.";
  }
  return raw || "Dropbox Sign no pudo procesar el documento.";
}

export default async function handler(request) {
  const env = typeof process !== "undefined" ? process.env : {};
  const apiKey = env.DROPBOX_SIGN_API_KEY;

  if (request.method === "GET") {
    return jsonResponse({
      configured: Boolean(apiKey),
      testMode: env.DROPBOX_SIGN_TEST_MODE !== "false"
    });
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Metodo no permitido." }, 405);
  }

  if (!apiKey) {
    return jsonResponse({ error: "La firma electrónica aún no está configurada." }, 503);
  }

  const access = await requireActiveAccess(request, env);
  if (!access.ok) return access.response;

  const payload = await request.json().catch(() => ({}));
  const title = String(payload.title || "Contrato LexContratos").trim().slice(0, 255);
  const folio = String(payload.folio || "").trim().slice(0, 120);
  const body = String(payload.body || "").trim();
  const letterheadLogo = payload.letterheadLogo?.dataUrl ? payload.letterheadLogo : null;
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
    return jsonResponse({ error: "Dropbox Sign necesita un contrato y nombre/correo válido de cada firmante para poder enviar la solicitud." }, 400);
  }

  const formData = new FormData();
  const file = new Blob([contractDocumentPdf({ title, folio, body, letterheadLogo })], {
    type: "application/pdf"
  });
  formData.append("files[0]", file, `${folio || "contrato"}-${Date.now()}.pdf`);
  formData.append("title", title);
  formData.append("subject", `Firma de ${title}`);
  formData.append("message", "Te compartimos este contrato para revisión y firma electrónica.");
  formData.append("test_mode", env.DROPBOX_SIGN_TEST_MODE === "false" ? "0" : "1");
  formData.append("signing_options[draw]", "1");
  formData.append("signing_options[type]", "1");
  formData.append("signing_options[upload]", "1");
  formData.append("signing_options[phone]", "0");
  formData.append("signing_options[default_type]", "draw");
  formData.append("field_options[date_format]", "DD - MM - YYYY");
  formData.append("allow_decline", "1");
  if (env.DROPBOX_SIGN_USE_CLIENT_ID === "true" && env.DROPBOX_SIGN_CLIENT_ID) {
    formData.append("client_id", env.DROPBOX_SIGN_CLIENT_ID);
  }
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
    console.warn("Dropbox Sign rechazó el envío", {
      status: response.status,
      message: dropboxErrorMessage(data)
    });
    return jsonResponse({ error: `Dropbox Sign no pudo enviar la firma: ${dropboxErrorMessage(data)}` }, response.status);
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
