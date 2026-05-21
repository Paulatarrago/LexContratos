export const config = {
  runtime: "edge"
};

import { requireActiveAccess } from "../src/server-auth.js";

const MAX_CONTRACT_CHARS = 70000;
const MAX_RELATED_DOCS = 8;
const MAX_RELATED_DOC_CHARS = 14000;
const MAX_FILE_BYTES = 12 * 1024 * 1024;

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" }
  });
}

function outputTextFromResponse(response) {
  if (response.output_text) return response.output_text;
  return (response.output || [])
    .flatMap((item) => item.content || [])
    .map((content) => content.text || "")
    .join("\n")
    .trim();
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

function parseJsonObject(text) {
  try {
    return JSON.parse(text);
  } catch {
    const match = String(text || "").match(/\{[\s\S]*\}/);
    if (!match) return null;
    return JSON.parse(match[0]);
  }
}

function parseJsonValue(value, fallback) {
  try {
    return JSON.parse(value || "");
  } catch {
    return fallback;
  }
}

export default async function handler(request) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Metodo no permitido." }, 405);
  }

  const env = typeof process !== "undefined" ? process.env : {};
  const apiKey = env.OPENAI_API_KEY;
  if (!apiKey) {
    return jsonResponse({ error: "La revisión crítica no está disponible temporalmente." }, 503);
  }

  const access = await requireActiveAccess(request, env);
  if (!access.ok) return access.response;

  const contentType = request.headers.get("content-type") || "";
  let body = {};
  let files = [];
  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    body = {
      title: formData.get("title"),
      mode: formData.get("mode"),
      country: formData.get("country"),
      contract: formData.get("contract"),
      missingFields: parseJsonValue(formData.get("missingFields"), []),
      partyData: parseJsonValue(formData.get("partyData"), {}),
      relatedDocuments: parseJsonValue(formData.get("relatedDocuments"), [])
    };
    files = formData
      .getAll("files")
      .filter((file) => typeof file?.arrayBuffer === "function")
      .slice(0, MAX_RELATED_DOCS);
  } else {
    body = await request.json().catch(() => ({}));
  }
  const title = String(body.title || "Contrato").slice(0, 200);
  const mode = body.mode === "propose" ? "propose" : body.mode === "congruence" ? "congruence" : body.mode === "legal" ? "legal" : "observations";
  const country = String(body.country || "México").slice(0, 120);
  const contract = String(body.contract || "").slice(0, MAX_CONTRACT_CHARS);
  const missingFields = Array.isArray(body.missingFields) ? body.missingFields : [];
  const partyData = body.partyData && typeof body.partyData === "object" ? body.partyData : {};
  const relatedDocuments = Array.isArray(body.relatedDocuments)
    ? body.relatedDocuments.slice(0, MAX_RELATED_DOCS).map((document) => ({
        role: String(document.role || "").slice(0, 120),
        name: String(document.name || "").slice(0, 240),
        type: String(document.type || "").slice(0, 120),
        text: String(document.text || "").slice(0, MAX_RELATED_DOC_CHARS)
      }))
    : [];

  if (!contract.trim()) {
    return jsonResponse({ error: "Documento no disponible para revisión." }, 400);
  }

  const oversized = files.filter((file) => file.size > MAX_FILE_BYTES).map((file) => file.name);
  const usableFiles = files.filter((file) => file.size <= MAX_FILE_BYTES);
  const userContent = [
    {
      type: "input_text",
      text: [
        `Titulo: ${title}`,
        `Pais o jurisdiccion principal: ${country}`,
        `Modo: ${mode === "propose" ? "proponer ajustes integrables" : mode === "congruence" ? "revisar congruencia contrato/anexos/documentos soporte" : mode === "legal" ? "revisar legislacion aplicable vigente por pais y tipo contractual" : "solo observaciones"}`,
        "Campos pendientes detectados por la app:",
        JSON.stringify(missingFields),
        "Datos capturados de partes:",
        JSON.stringify(partyData),
        "Anexos y documentos soporte cargados para comparacion:",
        JSON.stringify(relatedDocuments.map(({ text, ...metadata }) => metadata)),
        "Contrato:",
        contract
      ].join("\n\n")
    },
    ...relatedDocuments
      .filter((document) => document.text)
      .map((document, index) => ({
        type: "input_text",
        text: `Texto extraido de documento ${index + 1} (${document.role || "parte"} · ${document.name || "documento"} · ${document.type || "archivo"}):\n${document.text}`
      }))
  ];

  for (const file of usableFiles) {
    const base64 = arrayBufferToBase64(await file.arrayBuffer());
    const dataUrl = `data:${file.type || "application/octet-stream"};base64,${base64}`;
    if ((file.type || "").startsWith("image/")) {
      userContent.push({
        type: "input_image",
        image_url: dataUrl,
        detail: "high"
      });
    } else {
      userContent.push({
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
      model: env.OPENAI_MODEL || "gpt-4.1",
      temperature: 0.1,
      max_output_tokens: mode === "propose" ? 9000 : mode === "congruence" || mode === "legal" ? 3200 : 2400,
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: [
                "Eres un asistente de revision contractual para usuarios legales.",
                "Tu revision debe ser directa, precisa y util, sin sustituir el criterio profesional del usuario.",
                mode === "congruence"
                  ? "En este modo revisa especificamente congruencia entre contrato, anexos y documentos soporte: partes, representantes, firmantes, fechas, vigencias, montos, moneda, objeto, servicios, anexos, folios, poderes, fedatarios, roles y condiciones comerciales."
                  : mode === "legal"
                    ? `En este modo revisa si el contrato parece corresponder con la legislacion aplicable del pais indicado (${country}) y su tipo contractual. Identifica disposiciones, formalidades, clausulas o enfoques que podrian no corresponder, estar incompletos o requerir validacion local vigente. No afirmes certeza absoluta de vigencia si no puedes verificarla; senala cuando debe validarse contra fuente oficial actualizada.`
                  : "Identifica datos faltantes, contradicciones, ambiguedades, riesgos de redaccion, problemas de forma, ortografia y clausulas usuales ausentes.",
                "No inventes hechos, poderes, datos notariales, montos ni fechas.",
                "Si la evidencia no alcanza para concluir, dilo claramente como dato no verificable.",
                "Si se pidio proponer ajustes, NO hagas una propuesta de todo o nada como unica salida.",
                "Devuelve cambios granulares para que el usuario pueda aceptar o descartar cada cambio.",
                mode === "congruence" || mode === "legal" ? "En este modo, deja changes como arreglo vacio salvo que haya una correccion textual puntual indispensable." : "",
                "Para cambios de reemplazo, el campo original debe copiar un fragmento exacto del contrato para poder ubicarlo y reemplazarlo.",
                "Para inserciones nuevas, deja original vacio y pon en replacement el texto sugerido.",
                "Responde exclusivamente JSON valido con la forma:",
                '{"summary":"texto breve","findings":[{"severity":"Alta|Media|Baja","section":"seccion","observation":"observacion concreta","recommendation":"accion sugerida"}],"changes":[{"section":"seccion","type":"replace|insert|delete","original":"fragmento exacto del contrato o vacio si es insercion","replacement":"texto sugerido o vacio si se propone eliminar","reason":"por que conviene"}],"revisedBody":"contrato completo solo si no puedes separar cambios; en otro caso vacio"}'
              ].join("\n")
            }
          ]
        },
        {
          role: "user",
          content: userContent
        }
      ]
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    return jsonResponse({ error: "No se pudo completar la revisión crítica." }, response.status);
  }

  const parsed = parseJsonObject(outputTextFromResponse(data));
  if (!parsed) {
    return jsonResponse({ error: "No se pudo interpretar la revisión crítica." }, 502);
  }

  return jsonResponse({
    summary: parsed.summary || "Revisión crítica preliminar.",
    findings: [
      ...(Array.isArray(parsed.findings) ? parsed.findings : []),
      ...oversized.map((name) => ({
        severity: "Media",
        section: "Documento omitido",
        observation: `El archivo ${name} no se revisó porque supera el tamaño permitido.`,
        recommendation: "Sube una versión más ligera o separa el documento en archivos más pequeños."
      }))
    ],
    changes: mode === "propose" && Array.isArray(parsed.changes) ? parsed.changes : [],
    revisedBody: mode === "propose" ? String(parsed.revisedBody || "") : ""
  });
}
