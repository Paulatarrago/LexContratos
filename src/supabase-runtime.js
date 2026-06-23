const env = import.meta.env || {};

const config = {
  url: env.VITE_SUPABASE_URL || window.lexSupabaseConfig?.supabaseUrl || "",
  publishableKey: env.VITE_SUPABASE_PUBLISHABLE_KEY || window.lexSupabaseConfig?.supabasePublishableKey || "",
  bucket: env.VITE_SUPABASE_STORAGE_BUCKET || window.lexSupabaseConfig?.storageBucket || "contract-documents"
};

function announceBackend(runtime) {
  window.lexBackend = runtime;
  window.dispatchEvent(new CustomEvent("lexbackendready", { detail: runtime }));
}

function normalizePathPart(value) {
  return String(value || "sin-nombre")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "sin-nombre";
}

if (!config.url || !config.publishableKey) {
  announceBackend({
    enabled: false,
    locked: Boolean(window.lexBackend?.locked),
    reason: "Acceso privado no configurado."
  });
} else {
  let createClient;
  try {
    ({ createClient } = await import("@supabase/supabase-js"));
  } catch (error) {
    ({ createClient } = await import("https://esm.sh/@supabase/supabase-js@2"));
  }

  const supabase = createClient(config.url, config.publishableKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });

  async function ensureProfile(user) {
    if (!user) return null;
    const { data: existing, error: selectError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle();
    if (selectError) throw selectError;
    if (existing) return existing;

    const { data, error } = await supabase
      .from("profiles")
      .insert({
        id: user.id,
        email: user.email,
        full_name: user.user_metadata?.full_name || user.email,
        account_status: "active"
      })
      .select()
      .single();
    if (error) throw error;
    return data;
  }

  async function getAccessState() {
    const {
      data: { user },
      error
    } = await supabase.auth.getUser();
    if (error || !user) return { user: null, profile: null, license: null, hasAccess: false };

    const profile = await ensureProfile(user);
    const { data: license } = await supabase
      .from("licenses")
      .select("*")
      .eq("user_id", user.id)
      .maybeSingle();

    const status = license?.status || profile?.license_status || "inactive";
    const expiresAt = license?.ends_at ? Date.parse(license.ends_at) : null;
    const licenseCurrent = !expiresAt || Number.isNaN(expiresAt) || expiresAt >= Date.now();
    const hasAccess = profile?.account_status === "active" && (["admin", "superadmin"].includes(profile?.role) || (["active", "trial"].includes(status) && licenseCurrent));
    return { user, profile, license, hasAccess, status };
  }

  async function signIn(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  }

  async function signUp(email, password, fullName) {
    const website = document.querySelector("#register-website")?.value?.trim() || "";
    if (website) return { user: null, session: null };
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName }
      }
    });
    if (error) throw error;
    await fetch("/api/registration-notify", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, name: fullName || email, website })
    }).catch((notifyError) => console.warn("LexContratos registro sin notificación", notifyError));
    if (data?.user && data?.session) await ensureProfile(data.user);
    return data;
  }

  async function resetPassword(email) {
    const redirectTo = `${window.location.origin}/`;
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
    if (error) throw error;
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function saveFolders(folders) {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    if (!user) return;
    const rows = folders.map((path) => ({
      user_id: user.id,
      path,
      root: String(path).split("/")[0] || "Clientes"
    }));
    if (rows.length) {
      const { error } = await supabase.from("folders").upsert(rows, { onConflict: "user_id,path" });
      if (error) throw error;
    }
  }

  async function saveContract(contract) {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    if (!user || !contract) return;

    const matter = contract.matter || {};
    const folio = matter.folio || contract.folio || `SIN-FOLIO-${contract.id}`;
    const { data: matterRow, error: matterError } = await supabase
      .from("contract_matters")
      .upsert(
        {
          user_id: user.id,
          folio,
          title: matter.contractTitle || contract.title,
          folder_path: contract.folder || matter.folder || "Clientes",
          contract_type: contract.template || "",
          status: matter.status || contract.status || "En preparación",
          metadata: matter
        },
        { onConflict: "user_id,folio" }
      )
      .select()
      .single();
    if (matterError) throw matterError;

    const { error: contractError } = await supabase.from("contracts").upsert(
      {
        id: contract.id,
        user_id: user.id,
        matter_id: matterRow.id,
        title: contract.title,
        template_key: contract.template,
        language: contract.language || "es",
        body: contract.body || "",
        status: contract.status || "Borrador",
        metadata: contract
      },
      { onConflict: "id" }
    );
    if (contractError) throw contractError;
  }

  async function saveVersion(version) {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    if (!user || !version) return;
    const folio = version.matter?.folio || null;
    let matterId = null;
    if (folio) {
      const { data: matterRow } = await supabase
        .from("contract_matters")
        .select("id")
        .eq("user_id", user.id)
        .eq("folio", folio)
        .maybeSingle();
      matterId = matterRow?.id || null;
    }

    const { error } = await supabase.from("contract_versions").upsert(
      {
        id: version.id,
        user_id: user.id,
        matter_id: matterId,
        title: version.title,
        body: version.body || "",
        language: version.language || "es",
        metadata: version
      },
      { onConflict: "id" }
    );
    if (error) throw error;
  }

  async function deleteContract(contract, { deleteVersions = true } = {}) {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    if (!user || !contract) return;

    const folio = contract.matter?.folio || contract.folio || "";
    let matterId = null;
    if (folio) {
      const { data: matterRow } = await supabase
        .from("contract_matters")
        .select("id")
        .eq("user_id", user.id)
        .eq("folio", folio)
        .maybeSingle();
      matterId = matterRow?.id || null;
    }

    if (deleteVersions && matterId) {
      const { error: versionsError } = await supabase
        .from("contract_versions")
        .delete()
        .eq("user_id", user.id)
        .eq("matter_id", matterId);
      if (versionsError) throw versionsError;
    }

    const { error } = await supabase.from("contracts").delete().eq("user_id", user.id).eq("id", contract.id);
    if (error) throw error;
  }

  async function deleteVersion(version) {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    if (!user || !version) return;
    const { error } = await supabase.from("contract_versions").delete().eq("user_id", user.id).eq("id", version.id);
    if (error) throw error;
  }

  async function uploadSupportDocuments({ folio, roleLabel, files }) {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    if (!user || !files?.length) return [];
    const safeFolio = normalizePathPart(folio || "sin-folio");
    const safeRole = normalizePathPart(roleLabel || "parte");
    const uploaded = [];

    for (const file of files) {
      const path = `${user.id}/${safeFolio}/${safeRole}/${Date.now()}-${normalizePathPart(file.name)}`;
      const { data, error } = await supabase.storage.from(config.bucket).upload(path, file, {
        upsert: false,
        contentType: file.type || "application/octet-stream"
      });
      if (error) throw error;
      const { error: documentError } = await supabase.from("contract_documents").insert({
        user_id: user.id,
        role_label: roleLabel || "parte",
        storage_bucket: config.bucket,
        storage_path: data.path,
        file_name: file.name,
        mime_type: file.type || null,
        file_size: file.size || null
      });
      if (documentError) throw documentError;
      uploaded.push({ path: data.path, bucket: config.bucket, fileName: file.name, size: file.size, type: file.type });
    }
    return uploaded;
  }

  async function extractPartyData({ roleLabel, side, fields, files, sourceTexts, storageDocuments }) {
    const formData = new FormData();
    formData.append("roleLabel", roleLabel || "Parte");
    formData.append("side", side || "");
    formData.append("fields", JSON.stringify(fields || []));
    (sourceTexts || []).forEach((text) => {
      if (text?.trim()) formData.append("sourceText", text);
    });
    if (storageDocuments?.length) formData.append("storageDocuments", JSON.stringify(storageDocuments));
    (files || []).forEach((file) => formData.append("files", file, file.name));

    const response = await fetch("/api/extract-party-data", {
      method: "POST",
      headers: await authHeaders(),
      body: formData
    });
    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || "No se pudo extraer información con IA.");
    }
    return response.json();
  }

  async function generateSignatureCode(companyCode, year = new Date().getFullYear()) {
    const cleanCompanyCode = String(companyCode || "CGC")
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "") || "CGC";
    const cleanYear = Number(year) || new Date().getFullYear();
    const { data, error } = await supabase.rpc("generate_signature_code", {
      p_company_code: cleanCompanyCode,
      p_year: cleanYear
    });
    if (error) throw error;
    if (!data) throw new Error("No se recibió código de firma.");
    return String(data);
  }

  async function authHeaders() {
    const {
      data: { session }
    } = await supabase.auth.getSession();
    if (!session?.access_token) throw new Error("Sesión no disponible.");
    return { authorization: `Bearer ${session.access_token}` };
  }

  async function listAdminUsers() {
    const response = await fetch("/api/admin-users", {
      headers: await authHeaders()
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.error || "No se pudieron cargar usuarios.");
    }
    return response.json();
  }

  async function updateAdminUser(payload) {
    const response = await fetch("/api/admin-users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(await authHeaders())
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.error || "No se pudo actualizar el usuario.");
    }
    return response.json();
  }

  async function downloadAdminBackup() {
    const response = await fetch("/api/admin-backup", {
      headers: await authHeaders()
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.error || "No se pudo generar el respaldo.");
    }
    return {
      blob: await response.blob(),
      filename: response.headers.get("x-lex-backup-filename") || `lexcontratos-respaldo-${new Date().toISOString().slice(0, 10)}.json`
    };
  }

  async function listSharedTemplates() {
    const response = await fetch("/api/admin-templates", {
      headers: await authHeaders()
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.error || "No se pudo cargar el catálogo general.");
    }
    return response.json();
  }

  async function updateSharedTemplate(payload) {
    const response = await fetch("/api/admin-templates", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(await authHeaders())
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.error || "No se pudo actualizar el catálogo general.");
    }
    return response.json();
  }

  announceBackend({
    enabled: true,
    supabase,
    getAccessState,
    signIn,
    signUp,
    resetPassword,
    signOut,
    saveFolders,
    saveContract,
    saveVersion,
    deleteContract,
    deleteVersion,
    uploadSupportDocuments,
    extractPartyData,
    generateSignatureCode,
    listAdminUsers,
    updateAdminUser,
    downloadAdminBackup,
    listSharedTemplates,
    updateSharedTemplate
  });
}
