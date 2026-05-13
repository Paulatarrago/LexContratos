# LexContratos

Prototipo web para organizar, importar, editar y replicar machotes de contratos, con enfoque en flujos legales para Mexico.

## Uso local

Sirve la carpeta con un servidor local para probar la landing publica, el acceso privado y los flujos de app. Las cuentas reales deben crearse desde el formulario de registro y activarse por un administrador.

## Archivos principales

- `index.html`: estructura de la app.
- `styles.css`: estilos visuales.
- `app.js`: logica de interaccion, catalogo, versiones y exportacion.
- `template-prestacion-demanda.js`: machote importado de prestacion de servicios bajo demanda.
- `src/supabase-runtime.js`: conexion opcional a Supabase para modo productivo.
- `supabase/schema.sql`: base de datos, RLS y storage para produccion.

## Modulos preparados

- Autenticacion y licencia: prototipo local con usuario, sesion, recuperacion y licencia activa/inactiva.
- Supabase: base productiva opcional para auth, usuarios, licencias, expedientes, contratos, versiones y storage privado.
- Firma electronica: flujo visual y paquete de firma preparado. Para produccion se debe conectar un backend seguro con las variables de `.env.example`.
- Licencias/pagos: la app ya bloquea el editor si el usuario no tiene licencia activa; falta conectar proveedor de cobro.

## Modo productivo fase 1

1. Ejecuta `supabase/schema.sql` en Supabase.
2. Copia `.env.example` a `.env` y llena `VITE_SUPABASE_URL` y `VITE_SUPABASE_PUBLISHABLE_KEY`.
3. Corre `npm install`.
4. Corre `npm run dev`.

Consulta [docs/production-runbook.md](docs/production-runbook.md) y [docs/security-checklist.md](docs/security-checklist.md).
