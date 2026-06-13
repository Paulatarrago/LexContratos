#!/usr/bin/env node

import { createHash, createHmac } from "node:crypto";
import { pathToFileURL } from "node:url";

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

const DEFAULT_BUCKET = "contract-documents";
const DEFAULT_TABLE_PAGE_SIZE = 1000;
const DEFAULT_STORAGE_PAGE_SIZE = 1000;
const DEFAULT_MAX_STORAGE_BYTES = 20 * 1024 * 1024 * 1024;

let env = process.env;

function required(name) {
  const value = env[name];
  if (!value) throw new Error(`Falta la variable ${name}.`);
  return value;
}

function optional(name, fallback = "") {
  return env[name] || fallback;
}

function timestampForPath(date = new Date()) {
  return date.toISOString().replace(/[:.]/g, "-");
}

function trimSlashes(value) {
  return String(value || "").replace(/^\/+|\/+$/g, "");
}

function bytesHuman(bytes) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let value = Number(bytes || 0);
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return `${value.toFixed(unit ? 2 : 0)} ${units[unit]}`;
}

function sha256Hex(value) {
  return createHash("sha256").update(value).digest("hex");
}

function hmac(key, value) {
  return createHmac("sha256", key).update(value).digest();
}

function hmacHex(key, value) {
  return createHmac("sha256", key).update(value).digest("hex");
}

function signingKey(secretAccessKey, dateStamp, region, service) {
  const dateKey = hmac(`AWS4${secretAccessKey}`, dateStamp);
  const regionKey = hmac(dateKey, region);
  const serviceKey = hmac(regionKey, service);
  return hmac(serviceKey, "aws4_request");
}

function amzDates(date = new Date()) {
  const iso = date.toISOString().replace(/[:-]|\.\d{3}/g, "");
  return {
    amzDate: iso,
    dateStamp: iso.slice(0, 8)
  };
}

function awsEncode(segment) {
  return encodeURIComponent(segment).replace(/[!'()*]/g, (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`);
}

function s3Target(key) {
  const bucket = required("BACKUP_S3_BUCKET");
  const region = optional("BACKUP_S3_REGION", "us-east-1");
  const endpoint = optional("BACKUP_S3_ENDPOINT").replace(/\/+$/, "");
  const forcePathStyle = optional("BACKUP_S3_FORCE_PATH_STYLE", endpoint ? "true" : "false") === "true";
  const keySegments = trimSlashes(key).split("/").filter(Boolean);

  if (endpoint) {
    const parsed = new URL(endpoint);
    const host = forcePathStyle ? parsed.host : `${bucket}.${parsed.host}`;
    const pathSegments = forcePathStyle ? [bucket, ...keySegments] : keySegments;
    return {
      region,
      host,
      url: `${parsed.protocol}//${host}/${pathSegments.map(awsEncode).join("/")}`,
      canonicalUri: `/${pathSegments.map(awsEncode).join("/")}`
    };
  }

  const host = `${bucket}.s3.${region}.amazonaws.com`;
  return {
    region,
    host,
    url: `https://${host}/${keySegments.map(awsEncode).join("/")}`,
    canonicalUri: `/${keySegments.map(awsEncode).join("/")}`
  };
}

async function putS3Object(key, body, contentType = "application/octet-stream") {
  const accessKeyId = required("BACKUP_S3_ACCESS_KEY_ID");
  const secretAccessKey = required("BACKUP_S3_SECRET_ACCESS_KEY");
  const target = s3Target(key);
  const bodyBuffer = Buffer.isBuffer(body) ? body : Buffer.from(body);
  const payloadHash = sha256Hex(bodyBuffer);
  const { amzDate, dateStamp } = amzDates();
  const service = "s3";
  const credentialScope = `${dateStamp}/${target.region}/${service}/aws4_request`;
  const signedHeaders = "content-type;host;x-amz-content-sha256;x-amz-date";
  const canonicalHeaders = [
    `content-type:${contentType}`,
    `host:${target.host}`,
    `x-amz-content-sha256:${payloadHash}`,
    `x-amz-date:${amzDate}`
  ].join("\n") + "\n";
  const canonicalRequest = [
    "PUT",
    target.canonicalUri,
    "",
    canonicalHeaders,
    signedHeaders,
    payloadHash
  ].join("\n");
  const stringToSign = [
    "AWS4-HMAC-SHA256",
    amzDate,
    credentialScope,
    sha256Hex(canonicalRequest)
  ].join("\n");
  const signature = hmacHex(signingKey(secretAccessKey, dateStamp, target.region, service), stringToSign);
  const authorization = `AWS4-HMAC-SHA256 Credential=${accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  const response = await fetch(target.url, {
    method: "PUT",
    headers: {
      authorization,
      "content-type": contentType,
      host: target.host,
      "x-amz-content-sha256": payloadHash,
      "x-amz-date": amzDate
    },
    body: bodyBuffer
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`S3 no aceptó ${key}: ${response.status} ${text.slice(0, 500)}`);
  }
}

function supabaseConfig() {
  const url = (env.SUPABASE_URL || env.VITE_SUPABASE_URL || "").replace(/\/+$/, "");
  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) throw new Error("Faltan SUPABASE_URL/VITE_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY.");
  return {
    url,
    serviceKey,
    storageBucket: env.BACKUP_SUPABASE_STORAGE_BUCKET || env.VITE_SUPABASE_STORAGE_BUCKET || DEFAULT_BUCKET
  };
}

async function supabaseRequest(config, path, options = {}) {
  const response = await fetch(`${config.url}${path}`, {
    ...options,
    headers: {
      apikey: config.serviceKey,
      authorization: `Bearer ${config.serviceKey}`,
      ...(options.body ? { "content-type": "application/json" } : {}),
      ...(options.headers || {})
    }
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Supabase respondió ${response.status} en ${path}: ${text.slice(0, 500)}`);
  }
  return response;
}

async function readTable(config, table) {
  const pageSize = Number(env.BACKUP_TABLE_PAGE_SIZE || DEFAULT_TABLE_PAGE_SIZE);
  const rows = [];
  for (let offset = 0; ; offset += pageSize) {
    const response = await supabaseRequest(config, `/rest/v1/${table}?select=*&limit=${pageSize}&offset=${offset}`);
    const page = await response.json();
    rows.push(...page);
    if (page.length < pageSize) break;
  }
  return rows;
}

async function listStorage(config, prefix = "") {
  const pageSize = Number(env.BACKUP_STORAGE_PAGE_SIZE || DEFAULT_STORAGE_PAGE_SIZE);
  const objects = [];
  for (let offset = 0; ; offset += pageSize) {
    const response = await supabaseRequest(config, `/storage/v1/object/list/${encodeURIComponent(config.storageBucket)}`, {
      method: "POST",
      body: JSON.stringify({
        prefix,
        limit: pageSize,
        offset,
        sortBy: { column: "name", order: "asc" }
      })
    });
    const page = await response.json();
    for (const item of page) {
      const path = prefix ? `${prefix}/${item.name}` : item.name;
      const looksLikeFile = Boolean(item.id || item.metadata?.mimetype || Number.isFinite(item.metadata?.size));
      if (looksLikeFile) {
        objects.push({ ...item, path });
      } else {
        objects.push(...await listStorage(config, path));
      }
    }
    if (page.length < pageSize) break;
  }
  return objects;
}

function encodeStoragePath(path) {
  return String(path || "")
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
}

async function downloadStorageObject(config, path) {
  const response = await supabaseRequest(config, `/storage/v1/object/${encodeURIComponent(config.storageBucket)}/${encodeStoragePath(path)}`);
  return Buffer.from(await response.arrayBuffer());
}

export async function runSupabaseToS3Backup(options = {}) {
  const previousEnv = env;
  env = options.env || process.env;
  const log = options.log || console.log;
  const startedAt = new Date();
  try {
    const config = supabaseConfig();
    const rootPrefix = trimSlashes(optional("BACKUP_S3_PREFIX", "lexcontratos"));
    const runPrefix = `${rootPrefix}/${timestampForPath(startedAt)}`;
    const maxStorageBytes = Number(env.BACKUP_MAX_STORAGE_BYTES || DEFAULT_MAX_STORAGE_BYTES);
    const manifest = {
      product: "LexContratos",
      type: "supabase-to-s3-backup",
      startedAt: startedAt.toISOString(),
      finishedAt: null,
      supabaseUrl: config.url,
      storageBucket: config.storageBucket,
      runPrefix,
      tables: {},
      storage: {
        discovered: 0,
        uploaded: 0,
        uploadedBytes: 0,
        skipped: []
      }
    };

    log(`Iniciando respaldo externo en ${runPrefix}`);

    for (const table of TABLES) {
      const rows = await readTable(config, table);
      manifest.tables[table] = rows.length;
      await putS3Object(`${runPrefix}/database/${table}.json`, JSON.stringify(rows, null, 2), "application/json; charset=utf-8");
      log(`Tabla ${table}: ${rows.length} registros`);
    }

    const objects = await listStorage(config);
    manifest.storage.discovered = objects.length;
    for (const object of objects) {
      const estimatedSize = Number(object.metadata?.size || 0);
      if (estimatedSize && manifest.storage.uploadedBytes + estimatedSize > maxStorageBytes) {
        manifest.storage.skipped.push({
          path: object.path,
          reason: "Límite de tamaño del respaldo alcanzado"
        });
        continue;
      }

      const file = await downloadStorageObject(config, object.path);
      if (manifest.storage.uploadedBytes + file.byteLength > maxStorageBytes) {
        manifest.storage.skipped.push({
          path: object.path,
          reason: "Límite de tamaño del respaldo alcanzado"
        });
        continue;
      }

      await putS3Object(
        `${runPrefix}/storage/${config.storageBucket}/${object.path}`,
        file,
        object.metadata?.mimetype || "application/octet-stream"
      );
      manifest.storage.uploaded += 1;
      manifest.storage.uploadedBytes += file.byteLength;
      log(`Archivo ${object.path}: ${bytesHuman(file.byteLength)}`);
    }

    manifest.finishedAt = new Date().toISOString();
    await putS3Object(`${runPrefix}/manifest.json`, JSON.stringify(manifest, null, 2), "application/json; charset=utf-8");
    log(`Respaldo terminado. Archivos: ${manifest.storage.uploaded}/${manifest.storage.discovered}. Tamaño: ${bytesHuman(manifest.storage.uploadedBytes)}.`);
    return manifest;
  } finally {
    env = previousEnv;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runSupabaseToS3Backup().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
