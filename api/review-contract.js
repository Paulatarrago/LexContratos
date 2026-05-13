export const config = {
  runtime: "edge"
};

const MAX_CONTRACT_CHARS = 70000;

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

function parseJsonObject(text) {
  try {
    return JSON.parse(text);
  } catch {
    const match = String(text || "").match(/\{[\s\S]*\}/);
    if (!match) return null;
    return JSON.parse(match[0]);
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

  const body = await request.json().catch(() => ({}));
  const title = String(body.title || "Contrato").slice(0, 200);
  const mode = body.mode === "propose" ? "propose" : "observations";
  const contract = String(body.contract || "").slice(0, MAX_CONTRACT_CHARS);
  const missingFields = Array.isArray(body.missingFields) ? body.missingFields : [];
  const partyData = body.partyData && typeof body.partyData === "object" ? body.partyData : {};

  if (!contract.trim()) {
    return jsonResponse({ error: "Documento no disponible para revisión." }, 400);
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
      max_output_tokens: mode === "propose" ? 9000 : 2400,
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: [
                "Eres un asistente de revision contractual para usuarios legales en Mexico.",
                "Tu revision debe ser directa, precisa y util, sin sustituir el criterio profesional del usuario.",
                "Identifica datos faltantes, contradicciones, ambiguedades, riesgos de redaccion, problemas de forma, ortografia y clausulas usuales ausentes.",
                "No inventes hechos, poderes, datos notariales, montos ni fechas.",
                "Responde exclusivamente JSON valido con la forma:",
                '{"summary":"texto breve","findings":[{"severity":"Alta|Media|Baja","section":"seccion","observation":"observacion concreta","recommendation":"accion sugerida"}],"revisedBody":"contrato completo solo si se pidio proponer ajustes; en otro caso vacio"}'
              ].join("\n")
            }
          ]
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: [
                `Titulo: ${title}`,
                `Modo: ${mode === "propose" ? "proponer ajustes integrables" : "solo observaciones"}`,
                "Campos pendientes detectados por la app:",
                JSON.stringify(missingFields),
                "Datos capturados de partes:",
                JSON.stringify(partyData),
                "Contrato:",
                contract
              ].join("\n\n")
            }
          ]
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
    findings: Array.isArray(parsed.findings) ? parsed.findings : [],
    revisedBody: mode === "propose" ? String(parsed.revisedBody || "") : ""
  });
}
