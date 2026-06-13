# LexContratos: salida a producción, fase 1

Esta fase deja la base productiva lista sin romper el demo local.

## Qué queda implementado

- Build moderno con Vite.
- Conexión opcional a Supabase mediante variables `VITE_SUPABASE_URL` y `VITE_SUPABASE_PUBLISHABLE_KEY`.
- Autenticación real con Supabase Auth cuando Supabase está configurado.
- Recuperación de contraseña por correo usando Supabase Auth.
- Esquema SQL para usuarios, licencias, carpetas, expedientes, contratos, versiones, documentos, datos extraídos y catálogo general.
- Row Level Security para separar información por usuario.
- Storage privado para documentos en el bucket `contract-documents`.
- Endpoint de contacto con Resend y respuesta automatica.
- Notificación automática al administrador cuando alguien se registra.
- Panel de administración para activar licencias, suspender usuarios y asignar roles `user`, `admin` y `superadmin`.
- Catálogo general de formatos editable por administración y visible para usuarios autorizados.
- Endpoint seguro para extraccion documental con IA.
- Endpoints sensibles protegidos por sesión y licencia activa.
- Migración de endurecimiento para evitar que un usuario cambie su propio rol, estado de cuenta o licencia.
- Sin Supabase configurado, la app sigue funcionando como demo local.

## Dónde vive la información

En producción, la fuente de verdad debe ser Supabase. El modo local/demo sirve para probar la interfaz, pero no debe considerarse respaldo ni almacenamiento productivo.

### Usuarios, contraseñas y licencias

- Los usuarios y contraseñas viven en Supabase Auth.
- LexContratos no guarda ni puede ver las contraseñas de los usuarios.
- Los perfiles, roles, estado de cuenta y licencias viven en tablas de Supabase: `profiles` y `licenses`.
- El panel de administración usa una API de servidor para activar, suspender, hacer admin o eliminar usuarios.

### Contratos, expedientes y carpetas

- Las carpetas se guardan en `folders`.
- Los expedientes contractuales se guardan en `contract_matters`.
- Los contratos editables se guardan en `contracts`.
- Las versiones relevantes se guardan en `contract_versions`.
- Los datos extraídos o capturados se guardan en `extracted_data`.
- La firma se opera de forma externa: LexContratos exporta Word editable o PDF para enviarlo por la herramienta de firma elegida.
- Los formatos base compartidos se guardan en `master_templates` con `is_shared = true`.

### Documentos subidos

- Los archivos reales se guardan en Supabase Storage, dentro del bucket privado `contract-documents`.
- La tabla `contract_documents` guarda la ficha del documento: usuario, ruta, nombre, tipo, tamaño, rol/parte y estado de extracción.
- La ruta de almacenamiento se organiza así:

```text
usuario / folio del expediente / rol o parte / archivo
```

Ejemplo:

```text
<user_id>/COCEI-DETECATL-2026-PS-001/cliente/acta-constitutiva.pdf
```

Esto permite separar documentos por usuario, expediente y rol contractual.

### Carpetas raíz visibles en Expedientes

La app muestra carpetas raíz fijas para ordenar el archivo:

- Clientes
- Proveedores
- Empresas del Grupo
- Personales
- Documentos de las partes

## Pasos para activar Supabase

1. Crear un proyecto en Supabase.
2. Abrir el SQL Editor y ejecutar `supabase/schema-safe.sql`. Esta es la versión recomendada para primera instalación porque no borra políticas, triggers, tablas ni datos.
3. Ejecutar `supabase/harden-security.sql` para cerrar permisos de perfiles y licencias.
4. Si la base ya existía antes del rol `superadmin`, ejecutar `supabase/roles-superadmin.sql`.
5. Si Supabase muestra un aviso/error en la parte de Storage, crear manualmente un bucket privado llamado `contract-documents` en Storage y después ejecutar `supabase/storage-policies.sql`.
6. Crear una cuenta desde LexContratos o desde Supabase Auth.
7. Activar la licencia del usuario en SQL:

Usar `supabase/activate-first-admin.sql` y cambiar `TU_CORREO_AQUI` por el correo registrado.

8. Crear un archivo `.env` local:

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

8. Instalar dependencias y correr la app:

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

## Capacidad recomendada

Para producción no conviene operar en plan gratuito. El plan gratuito sirve para pruebas, pero puede ser insuficiente para documentos reales porque tiene cuotas pequeñas y no debe tratarse como almacenamiento operativo.

Como referencia, el plan Pro de Supabase incluye:

- 8 GB de base de datos por proyecto.
- 100 GB de almacenamiento de archivos.
- 250 GB de egreso mensual.
- Respaldos diarios de base de datos con retención de 7 días.

La configuración actual del bucket limita cada archivo a 50 MB. Esto es razonable para documentos legales, PDFs, Word, Excel e identificaciones. Si se van a subir carpetas con muchos PDFs escaneados o imágenes pesadas, conviene optimizar los documentos o revisar el límite.

Estimación práctica de 100 GB de almacenamiento:

- Si el archivo promedio pesa 5 MB: aproximadamente 20,000 documentos.
- Si el archivo promedio pesa 10 MB: aproximadamente 10,000 documentos.
- Si el archivo promedio pesa 25 MB: aproximadamente 4,000 documentos.
- Si el archivo promedio pesa 50 MB: aproximadamente 2,000 documentos.

Para una prueba interna con pocos usuarios, 100 GB debe ser suficiente. Para operación amplia con muchos documentos escaneados, se debe monitorear el uso mensual desde Supabase.

## Respaldos

Hay que distinguir entre base de datos y archivos.

### Base de datos

Supabase realiza respaldos diarios de la base de datos en planes de pago. Esto cubre tablas como usuarios, licencias, expedientes, contratos, versiones, metadatos y datos extraídos.

### Archivos de Storage

Los respaldos de base de datos no sustituyen un respaldo completo de los archivos subidos a Supabase Storage. La base de datos conserva metadatos de los archivos, pero los objetos de Storage deben respaldarse con una estrategia separada.

Política recomendada:

1. Mantener Supabase Pro para respaldos diarios de base de datos.
2. Ejecutar respaldo administrativo diario o semanal de la base de datos.
3. Sincronizar el bucket `contract-documents` a una copia externa controlada por la empresa.
4. Guardar esa copia externa en una carpeta restringida, cifrada o en servidor interno.
5. Probar restauración al menos una vez por trimestre.

Para una primera fase, basta con un respaldo local diario descargado por administración y una revisión semanal de uso. Para una fase más robusta, conviene automatizar la copia de Storage con herramientas compatibles con S3 o con un script programado.

### Respaldo externo a S3 o bucket compatible

El proyecto incluye un script de respaldo externo para copiar:

- Tablas principales de Supabase en archivos JSON.
- Archivos reales del bucket privado `contract-documents`.
- Un `manifest.json` con conteo de tablas, archivos subidos, archivos omitidos y tamaño respaldado.

Script:

```bash
npm run backup:s3
```

Variables necesarias en el entorno donde se ejecute:

```bash
SUPABASE_URL=https://TU-PROYECTO.supabase.co
SUPABASE_SERVICE_ROLE_KEY=TU_SERVICE_ROLE_KEY
BACKUP_S3_BUCKET=nombre-del-bucket
BACKUP_S3_REGION=us-east-1
BACKUP_S3_ACCESS_KEY_ID=...
BACKUP_S3_SECRET_ACCESS_KEY=...
BACKUP_S3_PREFIX=lexcontratos
BACKUP_SUPABASE_STORAGE_BUCKET=contract-documents
```

Si el destino no es AWS S3 puro, sino un bucket compatible como Cloudflare R2, MinIO o storage interno, configurar además:

```bash
BACKUP_S3_ENDPOINT=https://endpoint-del-proveedor
BACKUP_S3_FORCE_PATH_STYLE=true
```

Recomendación operativa:

- Ejecutar diariamente al cierre de la operación o como tarea programada.
- Guardar las llaves del bucket sólo en el equipo/servidor que haga respaldos.
- Probar una restauración con documentos ficticios antes de usarlo como respaldo real.
- Mantener el respaldo externo con acceso restringido y, si el proveedor lo permite, cifrado en reposo y versionado.

## Correos e IA

- Guia de correo: `docs/email-setup.md`.
- Guia de extraccion documental: `docs/ai-extraction.md`.

## Pendientes de fase 2

- Migrar contratos existentes de localStorage a Supabase.
- Probar extraccion real de PDF, Word, Excel e imagenes ya desplegada en Vercel con `OPENAI_API_KEY`.
- Conectar un modulo de consulta normativa oficial para que la revision legal pueda contrastar cada contrato contra fuentes vigentes del pais aplicable, sin presentarlo como dictamen automatico.
- Generar `.docx` real en backend.
- Probar el flujo externo de firma: exportar Word/PDF, enviarlo por la herramienta elegida y subir el documento firmado al expediente.
- Personalizar plantillas de correo en Supabase Auth.
- Integrar pagos y licencias automáticas.
