export const config = {
  runtime: "edge"
};

import { jsonResponse, requireActiveAccess } from "../src/server-auth.js";

const TABLES = [
  "profiles",
  "licenses",
  "folders",
  "master_templates",
  "contract_matters",
  "contracts",
  "contract_versions",
  "contract_documents",
  "extracted_data",
  "signature_packets"
];

const STORAGE_BUCKET = "contract-documents";
const MAX_STORAGE_FILES = 80;
const MAX_FILE_BYTES = 5 * 1024 * 1024;
const MAX_TOTAL_FILE_BYTES = 25 * 1024 * 1024;

function requireEnv(env) {
  const supabaseUrl = env.SUPABASE_URL || env.VITE_SUPABASE_URL;
  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) return null;
  return {
    supabaseUrl: supabaseUrl.replace(/\/+$/, ""),
    serviceKey
  };
}

async function supabaseJson({ supabaseUrl, serviceKey }, path) {
  const response = await fetch(`${supabaseUrl}${path}`, {
    headers: {
      apikey: serviceKey,
      authorization: `Bearer ${serviceKey}`,
      "content-type": "application/json"
    }
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) throw new Error(data?.message || data?.error || "No se pudo leer Supabase.");
  return data;
}

function bytesToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  return btoa(binary);
}

function encodeStoragePath(path) {
  return String(path || "")
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
}

async function storageFileBackup(config, documentRows = []) {
  const files = [];
  const skipped = [];
  let totalBytes = 0;
  const candidates = documentRows.filter((row) => row?.storage_path).slice(0, MAX_STORAGE_FILES);

  for (const row of candidates) {
    const size = Number(row.file_size || 0);
    if (size > MAX_FILE_BYTES || totalBytes + size > MAX_TOTAL_FILE_BYTES) {
      skipped.push({
        file_name: row.file_name,
        storage_path: row.storage_path,
        reason: size > MAX_FILE_BYTES ? "Archivo mayor al límite del respaldo piloto" : "Límite total del respaldo piloto alcanzado"
      });
      continue;
    }

    const bucket = row.storage_bucket || STORAGE_BUCKET;
    const response = await fetch(`${config.supabaseUrl}/storage/v1/object/${encodeURIComponent(bucket)}/${encodeStoragePath(row.storage_path)}`, {
      headers: {
        apikey: config.serviceKey,
        authorization: `Bearer ${config.serviceKey}`
      }
    });

    if (!response.ok) {
      skipped.push({
        file_name: row.file_name,
        storage_path: row.storage_path,
        reason: "No se pudo descargar desde Storage"
      });
      continue;
    }

    const buffer = await response.arrayBuffer();
    totalBytes += buffer.byteLength;
    files.push({
      id: row.id,
      user_id: row.user_id,
      file_name: row.file_name,
      mime_type: row.mime_type || "application/octet-stream",
      storage_bucket: bucket,
      storage_path: row.storage_path,
      size: buffer.byteLength,
      base64: bytesToBase64(buffer)
    });
  }

  if (documentRows.length > MAX_STORAGE_FILES) {
    skipped.push({
      reason: `Se incluyeron los primeros ${MAX_STORAGE_FILES} documentos. Los demás quedan listados en contract_documents.`
    });
  }

  return { files, skipped, includedBytes: totalBytes };
}

export default async function handler(request) {
  const env = typeof process !== "undefined" ? process.env : {};
  if (request.method !== "GET") return jsonResponse({ error: "Metodo no permitido." }, 405);

  const access = await requireActiveAccess(request, env);
  if (!access.ok) return access.response;
  if (!["admin", "superadmin"].includes(access.profile?.role)) return jsonResponse({ error: "Solo administración puede descargar respaldos." }, 403);

  const config = requireEnv(env);
  if (!config) return jsonResponse({ error: "El respaldo no está configurado en producción." }, 503);

  try {
    const tables = {};
    const backupWarnings = [];
    for (const table of TABLES) {
      const rows = await supabaseJson(config, `/rest/v1/${table}?select=*&limit=1000`);
      tables[table] = rows;
      if (rows.length >= 1000) {
        backupWarnings.push(`La tabla ${table} alcanzó el límite de 1,000 registros del respaldo local. Puede requerir respaldo paginado antes de restaurar.`);
      }
    }

    const storage = await storageFileBackup(config, tables.contract_documents || []);
    const storageWarnings = (storage.skipped || []).map((item) => item.reason || `Archivo omitido: ${item.file_name || item.storage_path || "sin nombre"}`);
    const warnings = [...backupWarnings, ...storageWarnings];
    const generatedAt = new Date().toISOString();
    const backup = {
      product: "LexContratos",
      type: "admin-local-backup",
      generatedAt,
      generatedBy: {
        id: access.user.id,
        email: access.profile.email
      },
      notes: [
        "Respaldo local de administración para prueba piloto.",
        "Incluye tablas de Supabase y, dentro de límites razonables de tamaño, archivos de Storage codificados en base64.",
        "Si hay archivos omitidos por tamaño, aparecen en storage.skipped y se pueden recuperar desde Supabase Storage con storage_path."
      ],
      warnings,
      counts: Object.fromEntries(Object.entries(tables).map(([table, rows]) => [table, rows.length])),
      tables,
      storage
    };

    const filename = `lexcontratos-respaldo-${generatedAt.slice(0, 10)}${warnings.length ? "-revisar-advertencias" : ""}.json`;
    return new Response(JSON.stringify(backup, null, 2), {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "content-disposition": `attachment; filename="${filename}"`,
        "x-lex-backup-filename": filename,
        "x-lex-backup-warnings": String(warnings.length)
      }
    });
  } catch (error) {
    console.warn("LexContratos backup error", error);
    return jsonResponse({ error: "No se pudo generar el respaldo local." }, 500);
  }
}
