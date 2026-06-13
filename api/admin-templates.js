export const config = {
  runtime: "edge"
};

import { jsonResponse, requireActiveAccess } from "../src/server-auth.js";

function requireEnv(env) {
  const supabaseUrl = env.SUPABASE_URL || env.VITE_SUPABASE_URL;
  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) return null;
  return {
    supabaseUrl: supabaseUrl.replace(/\/+$/, ""),
    serviceKey
  };
}

async function supabaseJson({ supabaseUrl, serviceKey }, path, options = {}) {
  const response = await fetch(`${supabaseUrl}${path}`, {
    method: options.method || "GET",
    headers: {
      apikey: serviceKey,
      authorization: `Bearer ${serviceKey}`,
      "content-type": "application/json",
      ...(options.prefer ? { prefer: options.prefer } : {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) throw new Error(data?.message || data?.error || "No se pudo actualizar el catálogo.");
  return data;
}

function isCatalogAdmin(profile) {
  return profile?.role === "admin" || profile?.role === "superadmin";
}

function normalizeTemplatePayload(body = {}) {
  const key = String(body.key || "").trim().slice(0, 160);
  const template = body.template || {};
  if (!key) throw new Error("Formato incompleto.");
  return {
    key,
    title: String(template.title || "Formato sin nombre").trim().slice(0, 240),
    category: String(template.catalogPath || template.category || "Formatos generales").trim().slice(0, 240),
    body: String(template.body || ""),
    language: String(template.language || "es").slice(0, 8),
    metadata: {
      ...template,
      key,
      master: true,
      shared: true,
      updatedByAdmin: true,
      updatedAt: new Date().toISOString()
    }
  };
}

async function listSharedTemplates(config) {
  const rows = await supabaseJson(
    config,
    "/rest/v1/master_templates?is_shared=eq.true&select=id,title,category,body,language,metadata,updated_at&order=updated_at.desc&limit=500"
  );
  const templates = {};
  (rows || []).filter((row) => row.metadata?.hidden !== true).forEach((row) => {
    const key = row.metadata?.key || row.id;
    templates[key] = {
      ...(row.metadata || {}),
      backendId: row.id,
      title: row.title,
      category: row.category,
      catalogPath: row.metadata?.catalogPath || row.category,
      body: row.body || "",
      language: row.language || "es",
      master: true,
      shared: true
    };
  });
  return templates;
}

async function upsertSharedTemplate(config, payload) {
  const current = await supabaseJson(
    config,
    `/rest/v1/master_templates?is_shared=eq.true&select=id,metadata&limit=500`
  );
  const existing = (current || []).find((row) => row.metadata?.key === payload.key);
  if (existing?.id) {
    return supabaseJson(config, `/rest/v1/master_templates?id=eq.${encodeURIComponent(existing.id)}`, {
      method: "PATCH",
      prefer: "return=representation",
      body: {
        title: payload.title,
        category: payload.category,
        body: payload.body,
        language: payload.language,
        is_shared: true,
        metadata: payload.metadata
      }
    });
  }

  return supabaseJson(config, "/rest/v1/master_templates", {
    method: "POST",
    prefer: "return=representation",
    body: {
      title: payload.title,
      category: payload.category,
      body: payload.body,
      language: payload.language,
      is_shared: true,
      metadata: payload.metadata
    }
  });
}

export default async function handler(request) {
  const env = typeof process !== "undefined" ? process.env : {};
  const access = await requireActiveAccess(request, env);
  if (!access.ok) return access.response;

  const config = requireEnv(env);
  if (!config) return jsonResponse({ error: "Catálogo general no configurado." }, 503);

  try {
    if (request.method === "GET") {
      return jsonResponse({ templates: await listSharedTemplates(config) });
    }

    if (!isCatalogAdmin(access.profile)) return jsonResponse({ error: "Solo administración puede modificar el catálogo general." }, 403);

    if (request.method !== "POST") {
      return jsonResponse({ error: "Metodo no permitido." }, 405);
    }

    const body = await request.json().catch(() => ({}));
    const action = String(body.action || "save");
    const payload = normalizeTemplatePayload(body);
    if (action === "hide") payload.metadata.hidden = true;
    else payload.metadata.hidden = false;
    await upsertSharedTemplate(config, payload);
    return jsonResponse({ ok: true, templates: await listSharedTemplates(config) });
  } catch (error) {
    console.warn("LexContratos admin templates error", error);
    return jsonResponse({ error: "No se pudo actualizar el catálogo general." }, 500);
  }
}
