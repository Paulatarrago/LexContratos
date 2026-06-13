# LexContratos: extracción documental con IA

## Por qué no funciona desde file://

La extracción real de PDF, Word, Excel e imágenes necesita un backend seguro. No debe ponerse una llave de IA dentro del navegador porque cualquier usuario podría verla.

## Flujo productivo

1. El usuario selecciona o duplica un formato o draft.
2. Sube documentos en la caja de cada parte.
3. LexContratos manda esos documentos al endpoint seguro `/api/extract-party-data`.
4. El backend consulta OpenAI con los documentos y los campos esperados para esa parte.
5. La app recibe datos estructurados, los coloca en “Datos de partes” y el abogado valida antes de completar el contrato.

## Variables necesarias

En Vercel, agregar:

```bash
OPENAI_API_KEY=tu_llave_privada
OPENAI_MODEL=gpt-4.1-mini
```

La llave de OpenAI nunca debe ir en `index.html`, `app.js`, `lexconfig.local.js` ni variables que empiecen con `VITE_`.

## Archivos soportados

El endpoint acepta archivos subidos desde las cajas de cada parte. Está pensado para PDF, Word, Excel, correos, CSV, texto e imágenes. Para archivos muy grandes, se recomienda dividirlos o subir versiones reducidas.

## Importante para abogados

La IA no decide ni sustituye la revisión jurídica. Solo extrae posibles datos de documentos soporte y los presenta para validación manual antes de completar el contrato.
