import { jsonResponse } from "../src/server-auth.js";
import { runSupabaseToS3Backup } from "../scripts/backup-supabase-to-s3.mjs";

export const config = {
  maxDuration: 300
};

function requireCronSecret(request, env) {
  const secret = env.CRON_SECRET;
  if (!secret) {
    return {
      ok: false,
      response: jsonResponse({ error: "El respaldo automatico no esta configurado." }, 503)
    };
  }

  const authorization = request.headers.get("authorization") || "";
  if (authorization !== `Bearer ${secret}`) {
    return {
      ok: false,
      response: jsonResponse({ error: "No autorizado." }, 401)
    };
  }

  return { ok: true };
}

export default async function handler(request) {
  const env = typeof process !== "undefined" ? process.env : {};
  if (!["GET", "POST"].includes(request.method)) {
    return jsonResponse({ error: "Metodo no permitido." }, 405);
  }

  const access = requireCronSecret(request, env);
  if (!access.ok) return access.response;

  try {
    const logs = [];
    const manifest = await runSupabaseToS3Backup({
      env,
      log: (line) => logs.push(line)
    });

    return jsonResponse({
      ok: true,
      message: "Respaldo automatico terminado.",
      runPrefix: manifest.runPrefix,
      tables: manifest.tables,
      storage: manifest.storage,
      logs: logs.slice(-20)
    });
  } catch (error) {
    console.warn("LexContratos automatic backup error", error);
    return jsonResponse({ error: "No se pudo completar el respaldo automatico." }, 500);
  }
}
