# LexContratos

Prototipo web para organizar, importar, editar y replicar machotes de contratos, con enfoque en flujos legales para Mexico.

## Uso local

Abre `index.html` en el navegador o sirve la carpeta con un servidor local.

Demo local de acceso:

- Usuario: `paula.tarrago`
- Contraseña: `demo123`

## Archivos principales

- `index.html`: estructura de la app.
- `styles.css`: estilos visuales.
- `app.js`: logica de interaccion, catalogo, versiones y exportacion.
- `template-prestacion-demanda.js`: machote importado de prestacion de servicios bajo demanda.

## Modulos preparados

- Autenticacion y licencia: prototipo local con usuario, sesion, recuperacion y licencia activa/inactiva.
- Dropbox Sign: flujo visual y paquete de firma preparado. Para produccion se debe conectar un backend con las variables de `.env.example`.
- Licencias/pagos: la app ya bloquea el editor si el usuario no tiene licencia activa; falta conectar proveedor de cobro.
