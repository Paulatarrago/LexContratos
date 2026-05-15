# LexContratos: salida a producción, fase 1

Esta fase deja la base productiva lista sin romper el demo local.

## Qué queda implementado

- Build moderno con Vite.
- Conexión opcional a Supabase mediante variables `VITE_SUPABASE_URL` y `VITE_SUPABASE_PUBLISHABLE_KEY`.
- Autenticación real con Supabase Auth cuando Supabase está configurado.
- Recuperación de contraseña por correo usando Supabase Auth.
- Esquema SQL para usuarios, licencias, carpetas, expedientes, contratos, versiones, documentos, datos extraídos y paquetes de firma.
- Row Level Security para separar información por usuario.
- Storage privado para documentos en el bucket `contract-documents`.
- Endpoint de contacto con Resend y respuesta automatica.
- Notificación automática al administrador cuando alguien se registra.
- Panel de administración para activar licencias, suspender usuarios y marcar administradores.
- Endpoint seguro para extraccion documental con IA.
- Sin Supabase configurado, la app sigue funcionando como demo local.

## Pasos para activar Supabase

1. Crear un proyecto en Supabase.
2. Abrir el SQL Editor y ejecutar `supabase/schema-safe.sql`. Esta es la versión recomendada para primera instalación porque no borra políticas, triggers, tablas ni datos.
3. Si Supabase muestra un aviso/error en la parte de Storage, crear manualmente un bucket privado llamado `contract-documents` en Storage y después ejecutar `supabase/storage-policies.sql`.
4. Crear una cuenta desde LexContratos o desde Supabase Auth.
5. Activar la licencia del usuario en SQL:

Usar `supabase/activate-first-admin.sql` y cambiar `TU_CORREO_AQUI` por el correo registrado.

6. Crear un archivo `.env` local:

```bash
VITE_SUPABASE_URL=https://TU-PROYECTO.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=TU_LLAVE_PUBLICA
VITE_SUPABASE_STORAGE_BUCKET=contract-documents
SUPABASE_SERVICE_ROLE_KEY=TU_LLAVE_PRIVADA_SERVICE_ROLE
OPENAI_API_KEY=TU_LLAVE_PRIVADA_OPENAI
OPENAI_MODEL=gpt-4.1-mini
RESEND_API_KEY=TU_LLAVE_RESEND
RESEND_FROM=LexContratos <no-reply@lexcontratos.com>
RESEND_REPLY_TO=contacto@lexcontratos.com
CONTACT_TO=contacto@lexcontratos.com
```

7. Instalar dependencias y correr la app:

```bash
npm install
npm run dev
```

## Producción en Vercel

1. Subir el repositorio a GitHub.
2. Crear proyecto en Vercel.
3. Configurar las mismas variables de entorno.
4. Build command: `npm run build`.
5. Output: `dist`.
6. Conectar `lexcontratos.com` como dominio.

La variable `SUPABASE_SERVICE_ROLE_KEY` solo debe vivir en Vercel o en un entorno servidor. No debe agregarse a variables `VITE_`, `index.html`, `app.js` ni `lexconfig.local.js`.

## Correos e IA

- Guia de correo: `docs/email-setup.md`.
- Guia de extraccion documental: `docs/ai-extraction.md`.

## Pendientes de fase 2

- Migrar contratos existentes de localStorage a Supabase.
- Probar extraccion real de PDF, Word, Excel e imagenes ya desplegada en Vercel con `OPENAI_API_KEY`.
- Generar `.docx` real en backend.
- Probar Dropbox Sign de punta a punta con usuarios internos.
- Personalizar plantillas de correo en Supabase Auth.
- Integrar pagos y licencias automáticas.
