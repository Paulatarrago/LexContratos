# Respaldo y restauración de LexContratos

Esta guía describe la estrategia mínima recomendada para proteger la información de LexContratos antes de auditoría y uso interno con documentos reales.

## Qué información existe

LexContratos guarda información en dos lugares:

1. **Base de datos de Supabase**
   - Usuarios.
   - Perfiles y roles.
   - Licencias.
   - Carpetas.
   - Catálogo general de formatos.
   - Expedientes.
   - Contratos.
   - Versiones.
   - Metadatos de documentos.
   - Datos extraídos.

2. **Supabase Storage**
   - Archivos cargados por los usuarios.
   - Documentos soporte de las partes.
   - PDFs, Word, Excel, imágenes, correos u otros documentos legales cargados.

Los respaldos de base de datos no sustituyen los respaldos de Storage. Deben cuidarse ambos.

## Capas de respaldo

### 1. Respaldo automático de Supabase Pro

Supabase Pro debe mantenerse activo para contar con respaldos automáticos de base de datos.

Este respaldo cubre tablas y metadatos, pero no debe considerarse suficiente por sí solo para todos los archivos cargados.

### 2. Respaldo local administrativo

Desde el panel de administración de LexContratos existe la opción **Descargar respaldo**.

Uso recomendado:

- Descargarlo diario durante pruebas con usuarios reales.
- Guardarlo fuera de la carpeta del proyecto.
- Guardarlo en una carpeta restringida.
- No subirlo a GitHub.

Este respaldo es útil como control rápido, pero tiene límites de tamaño y no sustituye la copia completa del Storage.

### 3. Respaldo externo automatico a S3 o bucket compatible

El proyecto tiene una tarea programada diaria en Vercel. La tarea llama internamente:

```text
/api/cron-s3-backup
```

La agenda esta en `vercel.json`:

```text
0 8 * * *
```

El horario esta en UTC. En Mexico normalmente equivale a la madrugada, que es un buen horario para no interrumpir el trabajo normal.

Cada ejecucion crea una carpeta nueva en el bucket externo, por ejemplo:

```text
lexcontratos/2026-06-12T08-00-00-000Z/
```

Dentro debe contener:

```text
database/
storage/
manifest.json
```

Variables necesarias en Vercel:

```bash
CRON_SECRET=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
BACKUP_S3_BUCKET=
BACKUP_S3_REGION=
BACKUP_S3_ACCESS_KEY_ID=
BACKUP_S3_SECRET_ACCESS_KEY=
BACKUP_S3_PREFIX=lexcontratos
BACKUP_SUPABASE_STORAGE_BUCKET=contract-documents
BACKUP_MAX_STORAGE_BYTES=21474836480
```

`CRON_SECRET` debe ser un valor largo y privado. Vercel lo usa para llamar la ruta del respaldo; cualquier llamada sin ese secreto se rechaza.

El mismo respaldo tambien puede ejecutarse manualmente desde una terminal segura con:

```bash
npm run backup:s3
```

El respaldo copia:

- Tablas principales en formato JSON.
- Archivos reales del bucket `contract-documents`.
- Un `manifest.json` con conteos y archivos omitidos.

Debe ejecutarse desde un equipo o servidor autorizado con variables privadas cargadas en el entorno.

Variables:

```bash
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
BACKUP_S3_BUCKET=
BACKUP_S3_REGION=
BACKUP_S3_ACCESS_KEY_ID=
BACKUP_S3_SECRET_ACCESS_KEY=
BACKUP_S3_PREFIX=lexcontratos
BACKUP_SUPABASE_STORAGE_BUCKET=contract-documents
BACKUP_MAX_STORAGE_BYTES=21474836480
```

Para storage compatible con S3:

```bash
BACKUP_S3_ENDPOINT=
BACKUP_S3_FORCE_PATH_STYLE=true
```

## Frecuencia recomendada

Para prueba interna:

- Base de datos: respaldo automático de Supabase Pro.
- Respaldo local: diario al cierre de jornada si hubo uso real.
- Respaldo externo S3: diario automático desde Vercel.

Para operación con documentos sensibles:

- Respaldo externo diario.
- Retención mínima sugerida: 30 días.
- Prueba de restauración trimestral.

## Restauración

Para restaurar no basta con tener el archivo; hay que probar que se puede recuperar.

Prueba mínima con datos ficticios:

1. Crear un usuario de prueba.
2. Subir documentos ficticios.
3. Crear un contrato de prueba.
4. Ejecutar respaldo externo.
5. Confirmar que el bucket externo contiene:
   - `manifest.json`
   - carpeta `database`
   - carpeta `storage`
6. Descargar un archivo del respaldo externo.
7. Abrirlo localmente y confirmar que no está corrupto.
8. Confirmar que el `manifest.json` incluye el conteo esperado.

Restauración completa:

- Requiere crear o usar un proyecto Supabase destino.
- Reinsertar tablas respetando dependencias.
- Reponer archivos en el bucket `contract-documents`.
- Verificar políticas RLS y permisos.
- Probar acceso con usuario administrador y usuario normal.

La restauración completa debe probarse con datos ficticios antes de depender de ella para información real.

## Seguridad de los respaldos

Los respaldos pueden contener información sensible y documentos legales. Deben tratarse como información confidencial.

Reglas:

- No enviarlos por WhatsApp ni correo no cifrado.
- No guardarlos en escritorio personal sin control.
- No subirlos a GitHub.
- No compartir llaves de S3 por chat.
- Limitar acceso a super administración o responsable técnico autorizado.
- Activar MFA en Supabase, Vercel y el proveedor del bucket.
- Usar versionado/cifrado del bucket si el proveedor lo permite.

## Estado actual

Preparado:

- Bucket privado en Supabase.
- Políticas por usuario.
- Botón de respaldo local administrativo.
- Script de respaldo externo a S3 o compatible.
- Cron diario de Vercel para respaldo externo automatico.
- `.gitignore` evita subir respaldos locales.
- Prueba `npm run test:security` para verificar puntos básicos antes de auditoría.

Pendiente antes de considerarlo cerrado:

- Confirmar que `CRON_SECRET` y las llaves de S3 estan cargadas en Vercel.
- Ejecutar respaldo con documentos ficticios.
- Confirmar lectura de `manifest.json`.
- Probar descarga de al menos un archivo respaldado.
- Documentar quien revisa periodicamente que el respaldo se este generando.
