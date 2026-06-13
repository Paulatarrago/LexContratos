# LexContratos

Prototipo web para organizar, importar, editar y replicar formatos o drafts de contratos, con enfoque en flujos legales para Mexico.

## Uso local

Sirve la carpeta con un servidor local para probar la landing publica, el acceso privado y los flujos de app. Las cuentas reales deben crearse desde el formulario de registro y activarse por un administrador.

## Archivos principales

- `index.html`: estructura de la app.
- `styles.css`: estilos visuales.
- `app.js`: logica de interaccion, catalogo, versiones y exportacion.
- `template-prestacion-demanda.js`: formato importado de prestacion de servicios bajo demanda.
- `src/supabase-runtime.js`: conexion opcional a Supabase para modo productivo.
- `api/admin-users.js`: acciones seguras de administracion de usuarios, licencias y roles.
- `api/admin-templates.js`: lectura del catalogo general y publicacion segura de cambios de administracion.
- `api/registration-notify.js`: aviso automatico por correo cuando alguien se registra.
- `supabase/schema.sql`: base de datos, RLS y storage para produccion.

## Modulos preparados

- Autenticacion y licencia: prototipo local con usuario, sesion, recuperacion y licencia activa/inactiva.
- Administracion: panel para activar licencias, suspender accesos y asignar roles.
- Roles: `user` trabaja contratos propios; `admin` gestiona usuarios, licencias, catalogo general y membretes operativos; `superadmin` conserva control total de configuracion, seguridad y respaldos.
- Catalogo general: una administradora puede renombrar, mover u ocultar formatos base para su equipo. Los usuarios normales usan los formatos sin alterar la base.
- Membretes por empresa: el usuario puede seleccionar un membrete precargado o subir uno nuevo con nombre de empresa y pie/domicilio para integrarlo a Word/PDF.
- Supabase: base productiva opcional para auth, usuarios, licencias, expedientes, contratos, versiones y storage privado.
- Firma externa: exportación a Word editable o PDF para enviar el contrato por la vía de firma que decida la empresa.
- Licencias/pagos: la app ya bloquea el editor si el usuario no tiene licencia activa; falta conectar proveedor de cobro.

## Modo productivo fase 1

1. Ejecuta `supabase/schema.sql` en Supabase.
   - Si ya existe la base, ejecuta tambien `supabase/roles-superadmin.sql` para habilitar el rol `superadmin` sin borrar usuarios.
2. Copia `.env.example` a `.env` y llena `VITE_SUPABASE_URL` y `VITE_SUPABASE_PUBLISHABLE_KEY`.
3. Corre `npm install`.
4. Corre `npm run dev`.

Consulta [docs/production-runbook.md](docs/production-runbook.md) y [docs/security-checklist.md](docs/security-checklist.md).
