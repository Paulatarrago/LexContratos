async function loadOptionalLocalConfig() {
  const isProductionHost =
    /(^|\.)lexcontratos\.com$/i.test(window.location.hostname) ||
    /\.vercel\.app$/i.test(window.location.hostname);
  const hasBuildConfig = Boolean(
    import.meta.env?.VITE_SUPABASE_URL && import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY
  );

  if (window.location.protocol === "file:") {
    window.lexBackend = { enabled: false, reason: "Acceso privado no disponible en esta vista local." };
    return;
  }

  if (isProductionHost && !hasBuildConfig && !window.lexSupabaseConfig) {
    window.lexBackend = { enabled: false, locked: true, reason: "Acceso privado en configuración." };
    return;
  }

  if (isProductionHost || hasBuildConfig || window.lexSupabaseConfig) return;

  await new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "./lexconfig.local.js";
    script.onload = resolve;
    script.onerror = resolve;
    document.head.append(script);
  });
}

await loadOptionalLocalConfig();
await import("./supabase-runtime.js");
await import("./letterhead-catalog.js");
await import("../template-prestacion-demanda.js");
await import("./ok-tony-templates.js");
await import("../app.js");
