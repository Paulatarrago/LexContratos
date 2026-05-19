# LexContratos: correo de contacto y respuestas automaticas

## Correos recomendados

- `contacto@lexcontratos.com`: contacto comercial y solicitudes de licencia.
- `soporte@lexcontratos.com`: soporte a usuarios.
- `no-reply@lexcontratos.com`: correos automaticos de la app.
- `legal@lexcontratos.com`: avisos legales, privacidad y terminos.

Para recibir correo real en bandeja de entrada conviene usar Google Workspace, Microsoft 365, Zoho, Fastmail u otro proveedor de correo. Resend se usara principalmente para envio automatico.

## Resend

1. Crear cuenta en Resend.
2. Agregar y verificar el dominio `lexcontratos.com`.
3. Copiar los registros DNS que Resend indique en el proveedor donde compraste el dominio.
4. Crear API key.
5. Agregar variables en Vercel:

```bash
RESEND_API_KEY=...
RESEND_FROM=LexContratos <no-reply@lexcontratos.com>
RESEND_REPLY_TO=contacto@lexcontratos.com
CONTACT_TO=contacto@lexcontratos.com
SUPPORT_EMAIL=soporte@lexcontratos.com
```

## Formulario de contacto

La pagina inicial ya tiene formulario de contacto. En produccion enviara:

- Correo interno a `CONTACT_TO`.
- Respuesta automatica al interesado.

En local puede mostrar que el formulario se activara en produccion porque el endpoint `/api/contact` vive en Vercel.

## Aviso automatico de licencia activa

Cuando una administradora entra al panel de usuarios y usa **Activar licencia** o **Hacer admin**, LexContratos intenta enviar automaticamente un correo al usuario con el asunto:

`Tu acceso a LexContratos ya está activo`

El correo le indica que ya puede entrar a `https://lexcontratos.com/login` con el correo y contraseña que registró.

Si la licencia ya estaba activa o el correo no llegó, el panel de administración permite usar **Reenviar correo de acceso** sin cambiar la licencia del usuario.

Si Resend no está configurado o falla el envío, la licencia se activa de todos modos y el panel avisa que conviene notificar manualmente al usuario.

## Supabase Auth

Supabase puede enviar correos de confirmacion, recuperacion de contrasena e invitacion de usuarios. Para marca propia, configurar SMTP personalizado en Supabase usando el servicio SMTP de Resend o el proveedor elegido.

## Cuidado de seguridad

Nunca poner `RESEND_API_KEY` en `index.html`, `app.js`, `lexconfig.local.js` ni variables que empiecen con `VITE_`. Debe vivir solo en Vercel o en un backend seguro.
