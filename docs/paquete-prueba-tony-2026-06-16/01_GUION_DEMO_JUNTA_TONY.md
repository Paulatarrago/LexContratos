# Guion de demo - LexContratos

Objetivo de la junta: mostrar a Tony una versión ya más pensada, clara y usable de LexContratos, y pedirle comentarios concretos para cerrar la siguiente ronda de ajustes.

## 1. Apertura

Tony, la idea de esta versión es que ya no se sienta como un prototipo, sino como una herramienta de trabajo más clara. Quiero mostrarte tres cosas:

1. Cómo se toma un formato del sistema.
2. Cómo se cargan documentos de cada parte para extraer datos.
3. Cómo se archiva, se usa membrete y se exporta el documento.

También quiero que nos digas qué no se entiende, qué se siente lento o confuso, y qué necesitarías para que tus abogados la usen con confianza.

## 2. Acceso y pantalla principal

Mostrar:

- Login.
- Entrada a la app.
- Barra principal.
- Botón `Mis Documentos`.
- Botón `Seleccionar formato`.
- Botón `Importar draft propio`.
- Botón `Nuevo formato`.
- Idioma ES/EN.

Mensaje a explicar:

La app separa tus documentos, formatos, expedientes y carpetas por usuario. Las administradoras pueden modificar catálogos del sistema; los usuarios trabajan sobre copias.

## 3. Mis Documentos

Abrir `Mis Documentos`.

Mostrar:

- Mis Documentos.
- Clientes.
- Proveedores.
- Empresas del Grupo.
- Documentos de las partes.
- Otros.
- Formatos del sistema.
- Catálogos del sistema.

Explicar:

Las carpetas normales son para trabajo diario. Las carpetas rojas de sistema son especiales: ahí viven los formatos y membretes base.

Probar:

- Clic para seleccionar.
- Shift + clic para seleccionar varios.
- Cmd/Ctrl + clic para seleccionar varios salteados.
- Doble clic para abrir.
- Botones superiores: nueva carpeta, subir, vista lista, búsqueda.

## 4. Formatos del sistema

Entrar a `Formatos del sistema`.

Mostrar:

- Lista plana de formatos.
- No hay subcarpetas.
- Cada formato puede abrirse con doble clic.
- Como administradora, Tony puede editar/renombrar/quitar formatos con confirmación.

Mensaje:

Los formatos del sistema no se trabajan directamente como contratos finales. Se usan para crear copias de trabajo, para no dañar la base.

## 5. Flujo normal del contrato

Seleccionar un formato.

Seguir el orden:

1. Detectar campos editables.
2. Datos y documentos.
3. Integrar faltantes.
4. Revisión crítica IA.
5. Exportar Word o PDF para firma.

Mensaje:

El paso 1 es obligatorio porque LexContratos necesita saber qué campos siguen existiendo en el contrato antes de integrar datos.

## 6. Carga de documentos por parte

Abrir `2. Datos y documentos`.

Usar los documentos ficticios de este paquete:

Cliente contratante:

- `01_constancia_fiscal_cliente_demo.txt`
- `02_poder_representante_cliente_demo.txt`

Proveedor contraparte:

- `01_acta_constitutiva_proveedor_demo.txt`
- `02_identificacion_representante_proveedor_demo.txt`

Documento adicional:

- `correo_instrucciones_servicio_demo.eml`
- `datos_generales_partes_demo.csv`

Mostrar:

- Que los documentos se cargan por rol.
- Que no se mezclan las partes.
- Que después se usa extraer e integrar.

Mensaje:

La idea es reducir captura manual y evitar errores, pero el usuario siempre valida.

## 7. Datos faltantes

Abrir `3. Integrar faltantes`.

Mostrar:

- Campos completados.
- Campos pendientes.
- Integrar completados.
- Captura manual solo de lo que falte.

Mensaje:

No se trata de llenar todo campo por campo. Primero se integra lo que se pudo extraer y solo queda lo pendiente.

## 8. Revisión crítica IA

Abrir `4. Revisión crítica IA`.

Mostrar:

- Observaciones.
- Cambios sugeridos.
- Que no es todo o nada; se busca revisar y decidir.

Mensaje:

La IA no reemplaza criterio jurídico. Ayuda a detectar errores, faltantes, contradicciones y detalles de forma.

## 9. Membretes

Mostrar la lista de membretes.

Usar archivos de `membretes-demo`:

- `logo_grupo_demo.svg`
- `logo_empresa_operativa_demo.svg`

Explicar:

Por ahora el membrete funciona como logo/imagen más pie de página o domicilio de empresa. No se sube un Word o PDF completo como hoja membretada, porque eso complicaría el contrato editable.

## 10. Exportación

Mostrar:

- Exportar Word.
- Exportar PDF para firma.

Mensaje:

Por ahora se exporta y se manda a firma por el medio externo que el equipo prefiera. La integración API de firma puede dejarse para una fase posterior si realmente justifica el costo.

## 11. Cierre

Pedirle a Tony:

- Que haga una prueba con un contrato real no sensible o con datos anonimizados.
- Que nos diga dónde se atora.
- Que indique qué nombres de botones o carpetas no entiende.
- Que valide si los formatos OK Tony están bien identificados.
- Que indique qué ajustes necesita antes de usarlo con más abogados.

