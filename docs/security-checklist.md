# Checklist de seguridad para producción

## Ya preparado en fase 1

- Row Level Security por usuario.
- Storage privado por usuario.
- Separación de expedientes, contratos, versiones y documentos.
- Acceso mediante Supabase Auth.
- Estructura de licencias.

## Antes de vender licencias

- Activar MFA para administradores.
- Definir política de contraseñas y recuperación.
- Configurar dominios autorizados en Supabase Auth.
- Revisar políticas RLS con pruebas de usuarios cruzados.
- Activar backups de Supabase.
- Preparar aviso de privacidad, términos y consentimiento de tratamiento de datos.
- Definir retención y eliminación de documentos.
- Evitar que documentos sensibles pasen por servicios externos sin consentimiento.
- Usar Edge Functions o backend propio para Dropbox Sign, Resend y cualquier llave secreta.

## Promesa comercial segura

Se puede comunicar que LexContratos está diseñado para operar con cuentas separadas, controles de acceso, storage privado y trazabilidad. No conviene prometer cifrado de extremo a extremo o cumplimiento certificado hasta implementar y auditar esas capas formalmente.
