#!/usr/bin/env node

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const checks = [];

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

function pass(name) {
  checks.push({ name, ok: true });
}

function fail(name, detail) {
  checks.push({ name, ok: false, detail });
}

function assertFile(path, name = path) {
  if (existsSync(join(root, path))) pass(`${name} existe`);
  else fail(`${name} existe`, `No encontré ${path}`);
}

function assertIncludes(path, expected, name) {
  const content = read(path);
  if (content.includes(expected)) pass(name || `${path} contiene ${expected}`);
  else fail(name || `${path} contiene ${expected}`, `Falta: ${expected}`);
}

function assertNotIncludes(path, forbidden, name) {
  const content = read(path);
  if (!content.includes(forbidden)) pass(name || `${path} no contiene ${forbidden}`);
  else fail(name || `${path} no contiene ${forbidden}`, `Encontré texto sensible: ${forbidden}`);
}

function assertApiProtected(path, name) {
  const content = read(path);
  if (content.includes("requireActiveAccess")) pass(`${name} exige sesión/licencia`);
  else fail(`${name} exige sesión/licencia`, `${path} no llama requireActiveAccess`);
}

function assertNoSecretNamesInFrontend() {
  const frontendFiles = ["index.html", "app.js", "styles.css", "src/main.js", "src/supabase-runtime.js", "src/letterhead-catalog.js"];
  const forbidden = [
    "SUPABASE_SERVICE_ROLE_KEY",
    "OPENAI_API_KEY",
    "RESEND_API_KEY",
    "BACKUP_S3_SECRET_ACCESS_KEY",
    "BACKUP_S3_ACCESS_KEY_ID",
    "DROPBOX_SIGN_API_KEY",
    "DROPBOX_SIGN_TEST_MODE",
    ["demo", "interno"].join("-"),
    ["usuario", "demo"].join(".")
  ];

  for (const file of frontendFiles) {
    const content = read(file);
    for (const token of forbidden) {
      if (content.includes(token)) {
        fail(`Frontend sin ${token}`, `${file} contiene ${token}`);
      }
    }
  }
  if (!checks.some((check) => check.name.startsWith("Frontend sin") && !check.ok)) {
    pass("Frontend sin nombres de llaves secretas ni credenciales demo");
  }
}

function assertServerSecretUseOnly() {
  const allowedFiles = [
    ".env.example",
    "README.md",
    "docs/production-runbook.md",
    "docs/security-checklist.md",
    "api/admin-backup.js",
    "api/cron-s3-backup.js",
    "api/extract-party-data.js",
    "api/admin-templates.js",
    "api/admin-users.js",
    "src/server-auth.js",
    "scripts/backup-supabase-to-s3.mjs",
    "scripts/security-smoke-test.mjs"
  ];
  const checkedFiles = [
    ".env.example",
    "README.md",
    "docs/production-runbook.md",
    "docs/security-checklist.md",
    "api/admin-backup.js",
    "api/cron-s3-backup.js",
    "api/admin-templates.js",
    "api/admin-users.js",
    "api/contact.js",
    "api/extract-party-data.js",
    "api/registration-notify.js",
    "api/review-contract.js",
    "app.js",
    "index.html",
    "src/main.js",
    "src/server-auth.js",
    "src/supabase-runtime.js",
    "scripts/backup-supabase-to-s3.mjs"
  ];

  for (const file of checkedFiles) {
    const content = read(file);
    if (content.includes("SUPABASE_SERVICE_ROLE_KEY") && !allowedFiles.includes(file)) {
      fail("Service role sólo en servidor/documentación", `${file} menciona SUPABASE_SERVICE_ROLE_KEY`);
      return;
    }
  }
  pass("Service role sólo en servidor/documentación");
}

assertFile("supabase/harden-security.sql", "Migración de endurecimiento");
assertFile("supabase/roles-superadmin.sql", "Migración de super administración");
assertFile("scripts/backup-supabase-to-s3.mjs", "Script de respaldo externo");
assertFile("api/cron-s3-backup.js", "Ruta de respaldo automatico");

assertIncludes(".gitignore", ".env", ".env excluido de Git");
assertIncludes(".gitignore", "lexcontratos-respaldo-*.json", "Respaldos locales excluidos de Git");
assertIncludes(".env.example", "BACKUP_S3_BUCKET=", "Variables de respaldo externo documentadas");
assertIncludes(".env.example", "CRON_SECRET=", "Secreto de cron documentado");
assertIncludes("vercel.json", "\"crons\"", "Respaldo diario programado en Vercel");
assertIncludes("vercel.json", "Content-Security-Policy", "Headers de seguridad: CSP");
assertIncludes("vercel.json", "X-Frame-Options", "Headers de seguridad: anti-clickjacking");
assertIncludes("vercel.json", "X-Content-Type-Options", "Headers de seguridad: nosniff");
assertIncludes("vercel.json", "Referrer-Policy", "Headers de seguridad: referrer policy");
assertIncludes("api/cron-s3-backup.js", "CRON_SECRET", "Ruta de cron protegida con secreto");
assertIncludes("api/contact.js", "checkRateLimit", "Formulario de contacto con limite basico");
assertIncludes("api/contact.js", "assertAllowedOrigin", "Formulario de contacto valida origen");
assertIncludes("api/contact.js", "website", "Formulario de contacto con campo anti-spam");

assertApiProtected("api/extract-party-data.js", "Extracción documental");
assertApiProtected("api/review-contract.js", "Revisión crítica IA");
assertApiProtected("api/admin-users.js", "Administración de usuarios");
assertApiProtected("api/admin-backup.js", "Respaldo administrativo");
assertApiProtected("api/admin-templates.js", "Catálogo general");

assertIncludes("api/admin-backup.js", "superadmin", "Respaldo limitado a admin/superadmin");
assertIncludes("api/admin-users.js", "superadmin", "Panel reconoce super administración");
assertIncludes("supabase/storage-policies.sql", "storage.foldername(name))[1] = (select auth.uid())::text", "Storage separado por usuario");
assertIncludes("supabase/harden-security.sql", "prevent_profile_privilege_escalation", "Bloqueo de escalamiento de privilegios");

assertNoSecretNamesInFrontend();
assertServerSecretUseOnly();

assertNotIncludes("index.html", "Dropbox", "UI sin Dropbox");
assertNotIncludes("app.js", "DROPBOX_SIGN", "App sin variables Dropbox");

const failed = checks.filter((check) => !check.ok);
for (const check of checks) {
  const prefix = check.ok ? "OK" : "FALTA";
  console.log(`${prefix}: ${check.name}${check.detail ? ` — ${check.detail}` : ""}`);
}

if (failed.length) {
  console.error(`\nPreauditoría con ${failed.length} punto(s) por atender.`);
  process.exitCode = 1;
} else {
  console.log("\nPreauditoría básica OK: secretos, APIs protegidas, storage y respaldos revisados.");
}
