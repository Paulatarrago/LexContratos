# Checklist de seguridad para producción

## Ya preparado en fase 1

- Row Level Security por usuario.
- Storage privado por usuario.
- Separación de expedientes, contratos, versiones y documentos.
- Acceso mediante Supabase Auth.
- Estructura de licencias.
- Las APIs de extracción documental y revisión crítica requieren sesión válida y licencia activa.
- El panel de administración requiere usuario con rol `admin` o `superadmin`.
- `admin`: puede operar usuarios, licencias y catálogo general de formatos.
- `superadmin`: debe reservarse para configuración, seguridad, respaldos y cambios de permisos críticos.
- Existe una migración de endurecimiento en `supabase/harden-security.sql` para impedir que un usuario cambie su propio rol, estado de cuenta o licencia.

## Revisión inmediata antes de pruebas reales

1. Ejecutar `supabase/harden-security.sql` en Supabase SQL Editor.
2. Ejecutar `supabase/roles-superadmin.sql` si la base ya existía antes de agregar el rol `superadmin`.
3. Confirmar en Vercel que `SUPABASE_SERVICE_ROLE_KEY` existe solo como variable secreta de servidor y no como variable `VITE_`.
4. Probar con dos usuarios:
   - Usuario A no debe poder ver contratos, carpetas ni documentos de Usuario B.
   - Usuario sin licencia no debe poder usar extracción documental ni revisión crítica.
   - Usuario normal no debe poder abrir el panel de administración.
5. Confirmar que el bucket `contract-documents` está privado.
6. Confirmar que las rutas `/app`, `/dashboard`, `/login` y `/demo` siguen con `noindex`.

## Antes de vender licencias

- Activar MFA para administradores.
- Definir política de contraseñas y recuperación.
- Configurar dominios autorizados en Supabase Auth.
- Revisar políticas RLS con pruebas de usuarios cruzados.
- Activar backups de Supabase.
- Preparar aviso de privacidad, términos y consentimiento de tratamiento de datos.
- Definir retención y eliminación de documentos.
- Evitar que documentos sensibles pasen por servicios externos sin consentimiento.
- Usar Edge Functions o backend propio para Resend y cualquier llave secreta.
- Agregar límites de uso por usuario para IA y correos.
- Revisar el aviso de privacidad con especialista en datos personales.
- Hacer revisión de seguridad por un especialista antes de abrir acceso comercial.

## Promesa comercial segura

Se puede comunicar que LexContratos está diseñado para operar con cuentas separadas, controles de acceso, storage privado y trazabilidad. No conviene prometer cifrado de extremo a extremo o cumplimiento certificado hasta implementar y auditar esas capas formalmente.
