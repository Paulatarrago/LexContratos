export const config = {
  runtime: "edge"
};

import { requireActiveAccess } from "../src/server-auth.js";

const MAX_FILES = 8;
const MAX_FILE_BYTES = 12 * 1024 * 1024;

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8"
    }
  });
}

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    const chunk = bytes.subarray(index, index + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return btoa(binary);
}

function outputTextFromResponse(response) {
  if (response.output_text) return response.output_text;
  return (response.output || [])
    .flatMap((item) => item.content || [])
    .map((content) => content.text || "")
    .join("\n")
    .trim();
}

function parseJsonObject(text) {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return null;
    return JSON.parse(match[0]);
  }
}

function normalizeFields(value) {
  try {
    const parsed = JSON.parse(value || "[]");
    return Array.isArray(parsed) ? parsed.filter((field) => field?.name && field?.label) : [];
  } catch {
    return [];
  }
}

export default async function handler(request) {
  const env = typeof process !== "undefined" ? process.env : {};
  const apiKey = env.OPENAI_API_KEY;

  if (request.method === "GET") {
    return jsonResponse({
      configured: Boolean(apiKey),
      model: apiKey ? env.OPENAI_MODEL || "gpt-4.1-mini" : null
    });
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Metodo no permitido." }, 405);
  }

  if (!apiKey) {
    return jsonResponse({ error: "La extracción documental no está disponible temporalmente." }, 503);
  }

  const access = await requireActiveAccess(request, env);
  if (!access.ok) return access.response;

  const formData = await request.formData();
  const roleLabel = String(formData.get("roleLabel") || "Parte contractual");
  const side = String(formData.get("side") || "");
  const fields = normalizeFields(formData.get("fields"));
  const sourceTexts = formData.getAll("sourceText").map(String).filter(Boolean);
  const files = formData
    .getAll("files")
    .filter((file) => typeof file?.arrayBuffer === "function")
    .slice(0, MAX_FILES);

  if (!fields.length) {
    return jsonResponse({ values: {}, missing: [], warnings: ["No hay campos solicitados para este rol."] });
  }

  const oversized = files.filter((file) => file.size > MAX_FILE_BYTES).map((file) => file.name);
  const usableFiles = files.filter((file) => file.size <= MAX_FILE_BYTES);

  const content = [
    {
      type: "input_text",
      text: [
        `Rol contractual: ${roleLabel}`,
        `Identificador interno de parte: ${side}`,
        "Extrae unicamente datos expresamente soportados por los documentos de esta misma parte.",
        "No mezcles datos de otras partes. No inventes datos. Si un dato no aparece con claridad, dejalo vacio.",
        "Devuelve solo JSON valido con esta forma:",
        '{"values":{"campo":{"value":"texto","confidence":0.0,"source":"documento o fragmento breve"}},"missing":["campo"],"warnings":["nota breve"]}',
        "Campos esperados:",
        JSON.stringify(fields)
      ].join("\n")
    },
    ...sourceTexts.map((text, index) => ({
      type: "input_text",
      text: `Texto auxiliar ${index + 1}:\n${text.slice(0, 24000)}`
    }))
  ];

  for (const file of usableFiles) {
    const base64 = arrayBufferToBase64(await file.arrayBuffer());
    const dataUrl = `data:${file.type || "application/octet-stream"};base64,${base64}`;
    if ((file.type || "").startsWith("image/")) {
      content.push({
        type: "input_image",
        image_url: dataUrl,
        detail: "high"
      });
    } else {
      content.push({
        type: "input_file",
        filename: file.name,
        file_data: dataUrl
      });
    }
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: env.OPENAI_MODEL || "gpt-4.1-mini",
      temperature: 0,
      max_output_tokens: 1800,
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: "Eres un asistente de extraccion documental para contratos mexicanos. Tu tarea es identificar datos corporativos, fiscales, notariales y de representacion legal para revision de un abogado. Responde exclusivamente JSON valido."
            }
          ]
        },
        {
          role: "user",
          content
        }
      ]
    })
  });

  const data = await response.json();
  if (!response.ok) {
    return jsonResponse({ error: data?.error?.message || "No se pudo consultar el modelo de IA." }, response.status);
  }

  const parsed = parseJsonObject(outputTextFromResponse(data));
  if (!parsed) {
    return jsonResponse({ error: "La IA no devolvio JSON valido." }, 502);
  }

  return jsonResponse({
    values: parsed.values || parsed.fields || {},
    missing: parsed.missing || [],
    warnings: [...(parsed.warnings || []), ...oversized.map((name) => `Archivo omitido por tamano: ${name}`)]
  });
}
