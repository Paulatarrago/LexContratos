 # Prompt para auditoria profunda de LexContratos

## Contexto

LexContratos es una aplicacion privada para uso interno de una empresa y sus abogados. No es un SaaS publico abierto. La herramienta ayuda a preparar contratos a partir de formatos o drafts, extraer datos de documentos soporte, integrar datos faltantes, revisar contratos con IA, organizar documentos en un archivo flexible y exportar versiones en Word/PDF para firma externa.

El criterio juridico permanece en el usuario. La IA no debe presentarse como sustituto del abogado ni como fuente autonoma de cumplimiento legal.

## Objetivo de la auditoria

Revisar de forma profunda la aplicacion antes de produccion real, con enfoque en:

1. Seguridad de datos.
2. Roles, permisos y licencias.
3. Separacion entre landing publica y app privada.
4. Flujos de usuarios, administradoras y super administradora.
5. Control de catalogos de formatos y membretes.
6. Extraccion de datos e IA critica.
7. Archivo flexible de documentos.
8. Respaldos locales y respaldos automaticos a S3.
9. Riesgos de exposicion de secretos.
10. Claridad de interfaz y proceso para usuarios no tecnicos.

## Stack relevante

- Frontend: HTML, CSS y JavaScript con Vite.
- Backend/API: Vercel serverless/edge functions en la carpeta `api/`.
- Autenticacion y base de datos: Supabase Auth + Supabase Postgres.
- Storage: Supabase Storage, bucket `contract-documents`.
- IA: OpenAI API para extraccion y revision critica.
- Correos: Resend.
- Respaldos externos: AWS S3 mediante script y Vercel Cron.
- Firma electronica: por ahora se desactivo la integracion API directa; el flujo actual es exportar Word/PDF para firma externa.

## Variables de entorno que existen

Revisar que solo se usen en servidor cuando corresponda. No se incluyen valores.

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_STORAGE_BUCKET`
- `SUPABASE_SERVICE_ROLE_KEY`
- `OPENAI_API_KEY`
- `OPENAI_MODEL`
- `RESEND_API_KEY`
- `RESEND_FROM`
- `RESEND_REPLY_TO`
- `CONTACT_TO`
- `SUPPORT_EMAIL`
- `APP_BASE_URL`
- `CRON_SECRET`
- `BACKUP_S3_BUCKET`
- `BACKUP_S3_REGION`
- `BACKUP_S3_ACCESS_KEY_ID`
- `BACKUP_S3_SECRET_ACCESS_KEY`
- `BACKUP_S3_PREFIX`

## Roles esperados

### Usuario

Debe poder:
- Entrar solo si tiene cuenta activa y licencia activa o trial.
- Usar editor privado.
- Crear, editar, guardar y exportar contratos propios.
- Subir documentos de soporte propios.
- Extraer datos de sus propios documentos.
- Usar IA critica sobre sus propios contratos.
- Usar carpetas y subcarpetas propias.
- Usar formatos del catalogo como copia de trabajo.

No debe poder:
- Ver documentos de otros usuarios.
- Ver carpetas de otros usuarios.
- Modificar catalogo general compartido.
- Crear, eliminar, activar o suspender usuarios.
- Asignar roles.
- Descargar respaldos administrativos.
- Acceder a secretos o variables privadas.

### Administradora

Debe poder:
- Todo lo de Usuario.
- Ver panel de administracion.
- Crear usuarios internos con licencia activa.
- Activar o suspender licencias.
- Reenviar correos de acceso.
- Gestionar usuarios normales.
- Gestionar catalogo general de formatos y membretes.
- Descargar respaldo local administrativo.

No debe poder:
- Convertirse a si misma en super administradora.
- Modificar, suspender o eliminar una super administradora.
- Cambiar una super administradora a usuaria.
- Ver secretos.
- Ejecutar respaldo automatico sin `CRON_SECRET`.

### Super administradora

Debe poder:
- Todo lo de Administradora.
- Asignar o quitar rol de administradora.
- Asignar rol de super administradora.
- Crear otras super administradoras.
- Conservar control sobre configuracion, seguridad y respaldos.

No debe poder:
- Eliminarse a si misma desde el panel.
- Quitarse sus propios permisos desde el panel.
- Ver contrasenas de usuarios, porque las contrasenas deben vivir en Supabase Auth.

## Archivos prioritarios para revisar

- `src/server-auth.js`
- `src/supabase-runtime.js`
- `api/admin-users.js`
- `api/admin-templates.js`
- `api/admin-backup.js`
- `api/cron-s3-backup.js`
- `api/extract-party-data.js`
- `api/review-contract.js`
- `api/contact.js`
- `api/registration-notify.js`
- `scripts/security-smoke-test.mjs`
- `scripts/extraction-smoke-test.mjs`
- `scripts/backup-supabase-to-s3.mjs`
- `supabase/schema-safe.sql`
- `supabase/harden-security.sql`
- `supabase/storage-policies.sql`
- `supabase/roles-superadmin.sql`
- `index.html`
- `app.js`
- `styles.css`
- `docs/backup-and-restore.md`
- `docs/production-runbook.md`

## Pruebas esperadas

1. Revisar que una persona sin sesion no pueda usar APIs privadas.
2. Revisar que una cuenta sin licencia activa no pueda usar editor, extraccion, revision ni respaldos.
3. Revisar que un Usuario activo no pueda llamar APIs de administracion.
4. Revisar que una Administradora no pueda modificar una Super administradora.
5. Revisar que solo la Super administradora pueda asignar rol de super administradora.
6. Revisar que los endpoints con `SUPABASE_SERVICE_ROLE_KEY` nunca se llamen desde frontend directamente.
7. Revisar que RLS limite documentos, contratos, versiones, folders y datos extraidos por `user_id`.
8. Revisar que Storage limite objetos al folder del usuario autenticado.
9. Revisar que no existan llaves reales en codigo, HTML, JS, docs o ejemplos.
10. Revisar que los respaldos a S3 esten protegidos por `CRON_SECRET` y no sean publicos.
11. Revisar que el ZIP de auditoria no incluya `.env`, `lexconfig.local.js`, respaldos JSON, documentos reales ni llaves privadas.
12. Revisar que los mensajes al usuario no expongan errores tecnicos crudos.
13. Revisar que la interfaz de archivo flexible sea clara para guardar, renombrar, mover, copiar, eliminar, buscar y crear carpetas.
14. Revisar que catalogo de formatos y catalogo de membretes queden bajo permisos administrativos.
15. Revisar que el flujo de extraccion sea claro: detectar campos editables, cargar documentos de partes, extraer e integrar, capturar faltantes, revision critica, exportar.

## Entregable solicitado a Claude

Entregar un reporte estructurado con:

1. Resumen ejecutivo.
2. Riesgos criticos, altos, medios y bajos.
3. Hallazgos por archivo y linea cuando aplique.
4. Matriz de permisos por rol.
5. Observaciones de interfaz y proceso.
6. Observaciones de privacidad y tratamiento de documentos.
7. Observaciones de respaldos y recuperacion.
8. Pruebas manuales recomendadas antes de produccion.
9. Cambios concretos sugeridos, priorizados.
10. Lista de preguntas pendientes para Paula/Tony.

Usar lenguaje claro, directo y practico. No asumir certificaciones, cifrados, cumplimientos legales ni capacidades no verificadas en codigo.

## Criterio final

La aplicacion debe poder usarse por una empresa en piloto interno sin exponer datos de otros usuarios, secretos, respaldos, documentos reales ni funciones administrativas a usuarios sin permiso. Si algo aun no esta listo, marcarlo como bloqueo o riesgo antes de produccion.
