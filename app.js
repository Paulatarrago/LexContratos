const baseTemplates = {
  services: {
    category: "Servicios",
    title: "Prestación de servicios",
    description: "Servicios profesionales, entregables, honorarios, confidencialidad y responsabilidad.",
    fields: 24,
    body: `CONTRATO DE PRESTACIÓN DE SERVICIOS

QUE CELEBRAN, POR UNA PARTE, {{parteA}}, {{tipoA}}, REPRESENTADA POR {{repA}}, CUYA PERSONALIDAD CONSTA EN {{poderA}}, OTORGADA ANTE {{notarioA}}, A QUIEN EN LO SUCESIVO SE LE DENOMINARÁ "EL CLIENTE"; Y POR LA OTRA, {{parteB}}, {{tipoB}}, REPRESENTADA POR {{repB}}, CUYA PERSONALIDAD CONSTA EN {{poderB}}, OTORGADA ANTE {{notarioB}}, A QUIEN EN LO SUCESIVO SE LE DENOMINARÁ "EL PRESTADOR".

DECLARACIONES

I. Declara EL CLIENTE que fue constituido mediante {{escrituraA}}, inscrito en el Registro Público de Comercio bajo el folio mercantil {{folioA}}, con RFC {{rfcA}} y domicilio en {{domicilio}}.

II. Declara EL PRESTADOR que fue constituido mediante {{escrituraB}}, inscrito en el Registro Público de Comercio bajo el folio mercantil {{folioB}}, con RFC {{rfcB}}.

CLÁUSULAS

PRIMERA. Objeto. EL PRESTADOR se obliga a prestar los servicios descritos en el anexo de alcance, conforme a los estándares profesionales aplicables.

SEGUNDA. Honorarios. EL CLIENTE pagará los honorarios pactados contra entrega de factura fiscal válida y aceptación de los entregables.

TERCERA. Confidencialidad. Las partes protegerán la información técnica, comercial, fiscal, financiera, legal y operativa que reciban.

CUARTA. Propiedad intelectual. Los entregables serán propiedad de EL CLIENTE una vez pagados, salvo herramientas, metodologías o materiales preexistentes de EL PRESTADOR.

QUINTA. Jurisdicción. Para la interpretación y cumplimiento del presente contrato, las partes se someten a las leyes federales mexicanas y a los tribunales competentes pactados por escrito.`
  },
  nda: {
    category: "Operación",
    title: "NDA bilateral",
    description: "Confidencialidad para intercambio de información comercial y corporativa.",
    fields: 18,
    body: `ACUERDO DE CONFIDENCIALIDAD BILATERAL

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, Y {{parteB}}, REPRESENTADA POR {{repB}}.

DECLARACIONES

I. {{parteA}} declara estar constituida mediante {{escrituraA}}, inscrita bajo el folio mercantil {{folioA}}, con RFC {{rfcA}}.

II. {{parteB}} declara estar constituida mediante {{escrituraB}}, inscrita bajo el folio mercantil {{folioB}}, con RFC {{rfcB}}.

CLÁUSULAS

PRIMERA. Información confidencial. Las partes protegerán toda información técnica, comercial, financiera, legal, fiscal y operativa.

SEGUNDA. Uso permitido. La información solo podrá utilizarse para evaluar, negociar o ejecutar la relación comercial.

TERCERA. Vigencia. Las obligaciones de confidencialidad permanecerán vigentes por cinco años contados a partir de la firma.

CUARTA. Excepciones. No será confidencial la información pública, recibida legítimamente de terceros o desarrollada de manera independiente.`
  },
  supply: {
    category: "Mercantil",
    title: "Suministro mercantil",
    description: "Abasto periódico de bienes, niveles de servicio, pedidos y penalizaciones.",
    fields: 22,
    body: `CONTRATO DE SUMINISTRO

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "EL COMPRADOR", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "EL PROVEEDOR".

DECLARACIONES. Las partes declaran su existencia legal, facultades de representación, RFC, domicilio e inscripción registral conforme a los datos: {{escrituraA}}, {{folioA}}, {{escrituraB}} y {{folioB}}.

CLÁUSULAS

PRIMERA. Objeto. EL PROVEEDOR suministrará los bienes descritos en las órdenes de compra aceptadas.

SEGUNDA. Pedidos. Cada pedido indicará cantidades, precio, fecha y lugar de entrega.

TERCERA. Calidad. Los bienes deberán cumplir especificaciones, normas aplicables y muestras aprobadas.

CUARTA. Incumplimiento. Las partes podrán pactar penalizaciones, reposición de bienes y terminación anticipada.`
  },
  distribution: {
    category: "Mercantil",
    title: "Distribución comercial",
    description: "Distribuidor, territorio, metas, exclusividad y uso de marca.",
    fields: 25,
    body: `CONTRATO DE DISTRIBUCIÓN COMERCIAL

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "EL FABRICANTE", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "EL DISTRIBUIDOR".

DECLARACIONES. Las partes acreditan existencia y facultades con {{escrituraA}}, {{poderA}}, {{escrituraB}} y {{poderB}}.

CLÁUSULAS

PRIMERA. Territorio. EL DISTRIBUIDOR comercializará los productos en el territorio pactado.

SEGUNDA. Metas. Las partes podrán fijar mínimos de compra, reportes y planes comerciales.

TERCERA. Marca. EL DISTRIBUIDOR usará marcas y materiales únicamente conforme a los lineamientos autorizados.

CUARTA. Terminación. La relación podrá terminar por incumplimiento, insolvencia, uso indebido de marca o aviso previo.`
  },
  commission: {
    category: "Mercantil",
    title: "Comisión mercantil",
    description: "Encargo mercantil, instrucciones, rendición de cuentas y comisión.",
    fields: 20,
    body: `CONTRATO DE COMISIÓN MERCANTIL

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "EL COMITENTE", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "EL COMISIONISTA".

CLÁUSULAS

PRIMERA. Encargo. EL COMITENTE confiere a EL COMISIONISTA el encargo mercantil descrito en el anexo.

SEGUNDA. Instrucciones. EL COMISIONISTA actuará conforme a las instrucciones recibidas y rendirá cuentas documentadas.

TERCERA. Comisión. EL COMISIONISTA tendrá derecho a la comisión pactada una vez cumplido el encargo.

CUARTA. Gastos. Los gastos autorizados y comprobados serán reembolsados conforme al procedimiento pactado.`
  },
  mandate: {
    category: "Civil",
    title: "Mandato civil",
    description: "Actos por cuenta del mandante, facultades, rendición de cuentas y revocación.",
    fields: 18,
    body: `CONTRATO DE MANDATO

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "EL MANDANTE", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "EL MANDATARIO".

CLÁUSULAS

PRIMERA. Mandato. EL MANDANTE encomienda a EL MANDATARIO la realización de los actos jurídicos descritos en este contrato.

SEGUNDA. Facultades. EL MANDATARIO solo podrá actuar dentro de las facultades conferidas.

TERCERA. Rendición de cuentas. EL MANDATARIO deberá informar y entregar documentación soporte.

CUARTA. Revocación. EL MANDANTE podrá revocar el mandato conforme a la legislación civil aplicable.`
  },
  lease: {
    category: "Civil",
    title: "Arrendamiento comercial",
    description: "Local, oficina o bodega, renta, depósito, mantenimiento y garantías.",
    fields: 24,
    body: `CONTRATO DE ARRENDAMIENTO COMERCIAL

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "ARRENDADOR", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "ARRENDATARIO".

DECLARACIONES. Las partes acreditan personalidad con {{poderA}} y {{poderB}}, y señalan como domicilio contractual {{domicilio}}.

CLÁUSULAS

PRIMERA. Inmueble. El arrendamiento recae sobre el inmueble descrito en el anexo.

SEGUNDA. Renta. EL ARRENDATARIO pagará la renta mensual pactada, impuestos y accesorios aplicables.

TERCERA. Uso. El inmueble se destinará exclusivamente al giro autorizado.

CUARTA. Garantías. Las partes acuerdan depósito, obligado solidario, fianza u otra garantía permitida.`
  },
  purchase: {
    category: "Civil",
    title: "Compraventa de activos",
    description: "Venta de bienes muebles o activos empresariales, precio, entrega y saneamiento.",
    fields: 20,
    body: `CONTRATO DE COMPRAVENTA DE ACTIVOS

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "VENDEDOR", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "COMPRADOR".

CLÁUSULAS

PRIMERA. Objeto. EL VENDEDOR transmite a EL COMPRADOR los activos descritos en el anexo.

SEGUNDA. Precio. EL COMPRADOR pagará el precio en los términos pactados.

TERCERA. Entrega. La entrega física y jurídica se realizará contra pago y firma del acta correspondiente.

CUARTA. Saneamiento. EL VENDEDOR responderá por evicción y vicios ocultos conforme a la legislación aplicable.`
  },
  loan: {
    category: "Civil",
    title: "Mutuo empresarial",
    description: "Préstamo entre empresas, intereses, vencimiento, garantías y mora.",
    fields: 22,
    body: `CONTRATO DE MUTUO CON INTERÉS

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "MUTUANTE", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "MUTUARIO".

CLÁUSULAS

PRIMERA. Monto. EL MUTUANTE entrega a EL MUTUARIO la cantidad pactada.

SEGUNDA. Intereses. EL MUTUARIO pagará intereses ordinarios y, en su caso, moratorios conforme al anexo financiero.

TERCERA. Pago. El capital e intereses serán pagados en las fechas pactadas.

CUARTA. Garantías. EL MUTUARIO otorgará las garantías descritas en el anexo.`
  },
  software: {
    category: "Servicios",
    title: "Desarrollo de software",
    description: "Alcance técnico, entregables, propiedad intelectual, soporte y aceptación.",
    fields: 28,
    body: `CONTRATO DE DESARROLLO DE SOFTWARE

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "EL CLIENTE", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "EL DESARROLLADOR".

CLÁUSULAS

PRIMERA. Alcance. EL DESARROLLADOR construirá los módulos descritos en el anexo técnico.

SEGUNDA. Aceptación. Cada entregable será revisado por EL CLIENTE dentro del periodo pactado.

TERCERA. Propiedad intelectual. El código desarrollado a la medida será transmitido a EL CLIENTE contra pago total, salvo componentes preexistentes o de terceros.

CUARTA. Seguridad. EL DESARROLLADOR deberá proteger credenciales, datos e información confidencial.`
  },
  data: {
    category: "Operación",
    title: "Encargado de tratamiento de datos",
    description: "Cláusulas para tratamiento de datos personales por proveedor.",
    fields: 24,
    body: `CONVENIO DE TRATAMIENTO DE DATOS PERSONALES

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "EL RESPONSABLE", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "EL ENCARGADO".

CLÁUSULAS

PRIMERA. Instrucciones. EL ENCARGADO tratará datos personales únicamente conforme a instrucciones documentadas de EL RESPONSABLE.

SEGUNDA. Seguridad. EL ENCARGADO implementará medidas administrativas, técnicas y físicas razonables.

TERCERA. Subencargados. EL ENCARGADO no podrá subcontratar tratamiento sin autorización previa.

CUARTA. Devolución o supresión. Al terminar la relación, EL ENCARGADO devolverá o suprimirá los datos conforme a instrucciones.`
  },
  work_order: {
    category: "Servicios",
    title: "Orden de trabajo",
    description: "Formato corto para anexar alcance, fechas, precio y responsables.",
    fields: 16,
    body: `ORDEN DE TRABAJO

DERIVADA DEL CONTRATO CELEBRADO ENTRE {{parteA}} Y {{parteB}}.

1. Servicio o entregable:
2. Responsable de {{parteA}}:
3. Responsable de {{parteB}}:
4. Fecha de inicio:
5. Fecha de entrega:
6. Honorarios:
7. Criterios de aceptación:
8. Observaciones legales o comerciales:`
  }
};

const extendedTemplates = {
  trust: {
    category: "Mercantil",
    title: "Fideicomiso",
    description: "Constitución, fiduciario, fideicomitente, fideicomisario, patrimonio y fines.",
    body: `CONTRATO DE FIDEICOMISO

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "FIDEICOMITENTE", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "FIDUCIARIO".

DECLARACIONES

I. Las partes declaran su existencia, facultades, RFC, domicilio y autorizaciones conforme a {{escrituraA}}, {{poderA}}, {{escrituraB}} y {{poderB}}.

CLÁUSULAS

PRIMERA. Constitución. EL FIDEICOMITENTE transmite al FIDUCIARIO los bienes, derechos o recursos descritos en el anexo patrimonial para destinarlos a los fines del fideicomiso.

SEGUNDA. Fines. El patrimonio fideicomitido se administrará exclusivamente conforme a los fines, instrucciones, limitaciones y reglas de inversión pactadas.

TERCERA. Fideicomisarios. Los beneficiarios, derechos económicos, reglas de distribución y sustitución serán los previstos en el anexo correspondiente.

CUARTA. Responsabilidad fiduciaria. EL FIDUCIARIO responderá por el cumplimiento de sus obligaciones conforme al contrato, la legislación aplicable y las instrucciones lícitas recibidas.`
  },
  association: {
    category: "Civil",
    title: "Asociación en participación",
    description: "Aportaciones, gestión, utilidades, pérdidas, información y terminación.",
    body: `CONTRATO DE ASOCIACIÓN EN PARTICIPACIÓN

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "ASOCIANTE", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "ASOCIADO".

CLÁUSULAS

PRIMERA. Objeto. EL ASOCIANTE concede al ASOCIADO participación en los resultados del negocio descrito en este contrato.

SEGUNDA. Aportaciones. Las aportaciones, recursos, bienes, servicios, derechos y obligaciones de cada parte se detallan en el anexo económico.

TERCERA. Administración. EL ASOCIANTE conservará la gestión frente a terceros, sin perjuicio de los reportes, auditorías y controles pactados.

CUARTA. Utilidades y pérdidas. La distribución se realizará conforme a los porcentajes, fechas, reservas, impuestos y deducciones autorizadas.`
  },
  agency: {
    category: "Mercantil",
    title: "Agencia comercial",
    description: "Promoción de negocios, territorio, comisiones, no exclusividad y reportes.",
    body: `CONTRATO DE AGENCIA COMERCIAL

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "EL PRINCIPAL", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "EL AGENTE".

CLÁUSULAS

PRIMERA. Agencia. EL AGENTE promoverá operaciones comerciales de EL PRINCIPAL en el territorio y canales autorizados.

SEGUNDA. Alcance. EL AGENTE no tendrá facultades para obligar a EL PRINCIPAL salvo autorización expresa y por escrito.

TERCERA. Comisión. Las comisiones se devengarán conforme a operaciones efectivamente cobradas, reglas de atribución y comprobación pactadas.

CUARTA. Cumplimiento. EL AGENTE cumplirá políticas comerciales, anticorrupción, confidencialidad, protección de datos y uso autorizado de marca.`
  },
  work_contract: {
    category: "Civil",
    title: "Obra a precio alzado",
    description: "Ejecución de obra, precio, calendario, cambios, garantías y entrega.",
    body: `CONTRATO DE OBRA A PRECIO ALZADO

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "EL CONTRATANTE", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "EL CONTRATISTA".

CLÁUSULAS

PRIMERA. Obra. EL CONTRATISTA ejecutará la obra descrita en planos, especificaciones, calendario y anexos técnicos.

SEGUNDA. Precio. El precio será cerrado salvo cambios aprobados por escrito, trabajos extraordinarios, fuerza mayor o ajustes expresamente pactados.

TERCERA. Supervisión. EL CONTRATANTE podrá verificar avances, calidad, seguridad, permisos, cumplimiento normativo y documentación soporte.

CUARTA. Entrega y garantías. La recepción, vicios ocultos, correcciones, garantías y penalizaciones se sujetarán a las reglas del contrato.`
  },
  professional_services: {
    category: "Servicios",
    title: "Prestación de servicios profesionales",
    description: "Servicios especializados, independencia, entregables, honorarios y confidencialidad.",
    body: `CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "EL CLIENTE", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "EL PROFESIONISTA".

CLÁUSULAS

PRIMERA. Servicios. EL PROFESIONISTA prestará servicios profesionales con autonomía técnica, diligencia y apego a la regulación aplicable.

SEGUNDA. Entregables. Los informes, dictámenes, análisis, documentos o resultados se entregarán conforme al alcance y calendario pactados.

TERCERA. Honorarios. EL CLIENTE pagará honorarios contra factura y evidencia de prestación, sin que exista relación laboral.

CUARTA. Responsabilidad. EL PROFESIONISTA responderá por dolo, negligencia grave, confidencialidad, conflicto de interés y obligaciones fiscales propias.`
  },
  promise: {
    category: "Civil",
    title: "Promesa de contrato",
    description: "Promesa bilateral, contrato definitivo, condiciones, plazo y penalidad.",
    body: `CONTRATO DE PROMESA

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, Y {{parteB}}, REPRESENTADA POR {{repB}}.

CLÁUSULAS

PRIMERA. Promesa. Las partes se obligan a celebrar el contrato definitivo descrito en este instrumento.

SEGUNDA. Elementos. El objeto, precio, condiciones esenciales, anexos y documentos del contrato definitivo se tendrán por incorporados.

TERCERA. Plazo. La firma del contrato definitivo deberá realizarse dentro del plazo pactado y sujeto al cumplimiento de condiciones.

CUARTA. Incumplimiento. La parte incumplida podrá exigir cumplimiento, pena convencional, daños o terminación conforme a derecho.`
  },
  rights_assignment: {
    category: "Civil",
    title: "Cesión de derechos",
    description: "Cesión, contraprestación, legitimidad, notificación y saneamiento.",
    body: `CONTRATO DE CESIÓN DE DERECHOS

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "CEDENTE", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "CESIONARIO".

CLÁUSULAS

PRIMERA. Cesión. EL CEDENTE transmite a EL CESIONARIO los derechos descritos en el anexo, con sus accesorios y limitaciones.

SEGUNDA. Titularidad. EL CEDENTE declara ser titular legítimo de los derechos y que no existen gravámenes, litigios o restricciones no reveladas.

TERCERA. Notificación. Las partes realizarán las notificaciones, registros, consentimientos o formalidades necesarias para que la cesión surta efectos.

CUARTA. Saneamiento. EL CEDENTE responderá por existencia, legitimidad y alcance de los derechos cedidos en los términos pactados.`
  },
  license_use: {
    category: "Mercantil",
    title: "Licencia de uso",
    description: "Uso de software, marca, contenido o tecnología, restricciones y soporte.",
    body: `CONTRATO DE LICENCIA DE USO

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "LICENCIANTE", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "LICENCIATARIO".

CLÁUSULAS

PRIMERA. Licencia. EL LICENCIANTE otorga una licencia limitada, no exclusiva, revocable o temporal conforme a los alcances pactados.

SEGUNDA. Restricciones. EL LICENCIATARIO no podrá sublicenciar, transferir, modificar, copiar, explotar o usar fuera del alcance autorizado.

TERCERA. Propiedad intelectual. La titularidad de derechos, mejoras, marcas, desarrollos, documentación y materiales permanecerá conforme al anexo.

CUARTA. Terminación. El incumplimiento de uso, pago, confidencialidad o propiedad intelectual será causa de terminación y cese inmediato de uso.`
  },
  franchise: {
    category: "Mercantil",
    title: "Franquicia",
    description: "Marca, know-how, manuales, territorio, cuotas, asistencia y terminación.",
    body: `CONTRATO DE FRANQUICIA

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "FRANQUICIANTE", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "FRANQUICIATARIO".

CLÁUSULAS

PRIMERA. Franquicia. EL FRANQUICIANTE autoriza el uso de marca, sistema, know-how, manuales y elementos operativos conforme al contrato.

SEGUNDA. Territorio y operación. EL FRANQUICIATARIO operará en el territorio, estándares, imagen, proveedores y manuales autorizados.

TERCERA. Cuotas. Las cuotas iniciales, regalías, fondos de publicidad, pagos recurrentes e impuestos se cubrirán conforme al anexo económico.

CUARTA. Protección del sistema. La confidencialidad, secretos industriales, propiedad intelectual, auditorías y terminación se regirán por reglas reforzadas.`
  },
  partnership: {
    category: "Mercantil",
    title: "Sociedad",
    description: "Bases para sociedad, aportaciones, gobierno, derechos corporativos y salida.",
    body: `CONTRATO DE SOCIEDAD

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO SOCIOS.

CLÁUSULAS

PRIMERA. Sociedad. Las partes acuerdan constituir o regular una sociedad conforme al tipo, denominación, objeto, domicilio y duración pactados.

SEGUNDA. Aportaciones. Las aportaciones de capital, bienes, industria, derechos, tecnología o servicios se documentarán y valuarán conforme al anexo.

TERCERA. Gobierno. La administración, asambleas, derechos de voto, transmisión de partes sociales o acciones y materias reservadas se sujetarán al convenio.

CUARTA. Salida. La separación, exclusión, compra forzosa, tag along, drag along, valuación y solución de controversias se pactarán expresamente.`
  },
  amendment: {
    category: "Operación",
    title: "Convenio modificatorio",
    description: "Modificación de contrato existente, ratificación, vigencia y prevalencia.",
    body: `CONVENIO MODIFICATORIO

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, Y {{parteB}}, REPRESENTADA POR {{repB}}.

CLÁUSULAS

PRIMERA. Antecedente. Las partes celebraron previamente el contrato identificado en el anexo de antecedentes.

SEGUNDA. Modificaciones. Las cláusulas, anexos, precios, plazos, obligaciones o alcances señalados se modifican en los términos de este convenio.

TERCERA. Ratificación. Todo lo no modificado expresamente permanece vigente, válido y obligatorio para las partes.

CUARTA. Prevalencia. En caso de contradicción, este convenio prevalecerá respecto del contrato original únicamente sobre las materias modificadas.`
  },
  termination_agreement: {
    category: "Operación",
    title: "Convenio de terminación",
    description: "Terminación, finiquito, obligaciones pendientes, confidencialidad y liberación.",
    body: `CONVENIO DE TERMINACIÓN

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, Y {{parteB}}, REPRESENTADA POR {{repB}}.

CLÁUSULAS

PRIMERA. Terminación. Las partes acuerdan terminar el contrato identificado en antecedentes a partir de la fecha pactada.

SEGUNDA. Finiquito. Las obligaciones pendientes de pago, entrega, devolución, documentación, impuestos o garantías se liquidarán conforme al anexo.

TERCERA. Liberación. Una vez cumplidas las obligaciones pendientes, las partes se otorgan el finiquito y liberación en los términos pactados.

CUARTA. Supervivencia. Confidencialidad, datos personales, propiedad intelectual, indemnidades, jurisdicción y obligaciones por naturaleza sobreviviente continuarán vigentes.`
  },
  debt_acknowledgment: {
    category: "Civil",
    title: "Reconocimiento de adeudo",
    description: "Adeudo, calendario de pago, intereses, garantías, incumplimiento y jurisdicción.",
    body: `CONVENIO DE RECONOCIMIENTO DE ADEUDO

QUE CELEBRAN {{parteA}}, REPRESENTADA POR {{repA}}, COMO "ACREEDOR", Y {{parteB}}, REPRESENTADA POR {{repB}}, COMO "DEUDOR".

CLÁUSULAS

PRIMERA. Reconocimiento. EL DEUDOR reconoce adeudar a EL ACREEDOR la cantidad de {{importeNumero}} ({{importeLetra}}).

SEGUNDA. Pago. EL DEUDOR pagará el adeudo conforme al calendario, cuenta, referencias y comprobantes pactados.

TERCERA. Incumplimiento. La falta de pago dará lugar a vencimiento anticipado, intereses, gastos de cobranza, penas o ejecución de garantías.

CUARTA. Garantías. Las garantías personales, reales, títulos de crédito o documentos soporte se describen en el anexo correspondiente.`
  }
};

const roleLabels = {
  prestacionDemandaEjemplo: ["Cliente", "Prestador de servicios"],
  services: ["Cliente", "Prestador de servicios"],
  software: ["Cliente", "Desarrollador"],
  data: ["Responsable", "Encargado"],
  lease: ["Arrendatario", "Arrendador"],
  purchase: ["Comprador", "Vendedor"],
  loan: ["Mutuario", "Mutuante"],
  supply: ["Comprador", "Proveedor"],
  distribution: ["Distribuidor", "Fabricante"],
  commission: ["Comitente", "Comisionista"],
  mandate: ["Mandante", "Mandatario"],
  nda: ["Parte receptora", "Parte reveladora"],
  work_order: ["Cliente", "Prestador de servicios"],
  trust: ["Fideicomitente", "Fiduciario"],
  association: ["Asociante", "Asociado"],
  agency: ["Principal", "Agente"],
  work_contract: ["Contratante", "Contratista"],
  professional_services: ["Cliente", "Profesionista"],
  promise: ["Promitente comprador", "Promitente vendedor"],
  rights_assignment: ["Cesionario", "Cedente"],
  license_use: ["Licenciatario", "Licenciante"],
  franchise: ["Franquiciatario", "Franquiciante"],
  partnership: ["Socio inversionista", "Socio operativo"],
  amendment: ["Cliente o contratante", "Proveedor o prestador"],
  termination_agreement: ["Cliente o contratante", "Proveedor o prestador"],
  debt_acknowledgment: ["Deudor", "Acreedor"],
  ...(window.lexImportedRoleLabels || {})
};

const defaultValues = {
  parteA: "Servicios Delta, S.A. de C.V.",
  tipoA: "Sociedad Anónima de Capital Variable",
  repA: "Ana Lucía Romero",
  tipoInstrumentoConstitutivoA: "Escritura pública",
  tipoFedatarioConstitutivoA: "Notario Público",
  poderA: "Instrumento público 18,245",
  tipoInstrumentoPoderA: "Escritura pública",
  tipoFedatarioPoderA: "Notario Público",
  notarioA: "Notario Público 214 de la Ciudad de México",
  rfcA: "SDE240102AB1",
  escrituraA: "Instrumento público 12,845",
  folioA: "N-2024018842",
  fechaConstitucionA: "2 de enero de 2024",
  parteB: "Grupo Norte Capital, S. de R.L. de C.V.",
  tipoB: "Sociedad de Responsabilidad Limitada de Capital Variable",
  repB: "Carlos Medina Torres",
  tipoInstrumentoConstitutivoB: "Escritura pública",
  tipoFedatarioConstitutivoB: "Notario Público",
  poderB: "Instrumento público 31,902",
  tipoInstrumentoPoderB: "Escritura pública",
  tipoFedatarioPoderB: "Notario Público",
  notarioB: "Notario Público 89 de Nuevo León",
  rfcB: "GNC190811QL2",
  escrituraB: "Instrumento público 22,410",
  folioB: "M-2019081149",
  fechaConstitucionB: "11 de agosto de 2019",
  domicilioPrestador: "Av. Insurgentes Sur 1458, Col. Actipan, Ciudad de México",
  domicilioCliente: "Av. Constitución 2400, Monterrey, Nuevo León",
  domicilio: "Av. Insurgentes Sur 1458, Col. Actipan, Ciudad de México",
  importeNumero: "$85,000.00",
  importeLetra: "ochenta y cinco mil pesos 00/100 M.N.",
  diaFirma: "11",
  mesFirma: "mayo",
  anioFirma: "2026",
  servicioContratado: "Servicios bajo demanda",
  folioInterno: "A04004",
  grupoServicio: "Administración",
  tipoServicio: "Servicios fiscales",
  areaServicio: "Impuestos"
};

const OTHER_SERVICE_VALUE = "__otro__";
const MATERIALIDAD_SERVICE_VALUE = "__materialidad__";
const serviceCatalog = [
  { folio: "A01001", name: "Servicio Integral de Administración", scheme: "Recurrente" },
  { folio: "A02002", name: "Servicio Integral de Contabilidad", scheme: "Recurrente" },
  { folio: "A03003", name: "Servicio Integral de Control Interno y Cumplimiento de Políticas", scheme: "Recurrente" },
  { folio: "A04004", name: "Gestión administrativa y atención a requerimientos en materia fiscal", scheme: "Bajo demanda" },
  { folio: "A05005", name: "Asesoría fiscal", scheme: "Recurrente" },
  { folio: "A04006", name: "Asesoría en materia de seguridad social", scheme: "Recurrente" },
  { folio: "A05007", name: "Elaboración, revisión y adecuación de contratos", scheme: "Bajo demanda" },
  { folio: "A06008", name: "Gestión y seguimiento de asuntos legales", scheme: "Bajo demanda" },
  { folio: "A05009", name: "Servicio de asesoría jurídica corporativa", scheme: "Recurrente" },
  { folio: "A06010", name: "Consultoría, supervisión y acompañamiento estratégico en recursos humanos", scheme: "Recurrente" },
  { folio: "A06011", name: "Administración de nómina y obligaciones patronales", scheme: "Recurrente" },
  { folio: "A06012", name: "Gestión integral de atracción, selección e incorporación de talento", scheme: "Recurrente" },
  { folio: "A06013", name: "Administración de personal y compensaciones", scheme: "Recurrente" },
  { folio: "A06014", name: "Servicio de formación y desarrollo organizacional", scheme: "Recurrente" },
  { folio: "A06015", name: "Servicio de relaciones laborales y blindaje laboral", scheme: "Recurrente" },
  { folio: "A07016", name: "Gestión bancaria", scheme: "Bajo demanda" },
  { folio: "A07017", name: "Gestión de caja y liquidez", scheme: "Recurrente" },
  { folio: "A07018", name: "Gestión de pagos y cobros", scheme: "Recurrente" },
  { folio: "A07019", name: "Gestión financiera de financiamiento e inversión", scheme: "Recurrente" },
  { folio: "A08020", name: "Coordinación técnica y administrativa para la implementación de proyectos", scheme: "Bajo demanda" },
  { folio: "S08021", name: "Gestión y administración de equipo biomédico", scheme: "Recurrente" },
  { folio: "S08022", name: "Capacitación técnica-operativa en el uso y manejo de equipo biomédico", scheme: "Recurrente" },
  { folio: "S09023", name: "Servicio de administración y supervisión del sistema de gestión", scheme: "Recurrente" },
  { folio: "S10024", name: "Gestión administrativa de flotilla vehicular", scheme: "Recurrente" },
  { folio: "S10025", name: "Servicio de control y administración de combustible", scheme: "Recurrente" },
  { folio: "S11026", name: "Producción de material audiovisual corporativo", scheme: "Bajo demanda" },
  { folio: "S11027", name: "Diseño para campañas y eventos", scheme: "Bajo demanda" },
  { folio: "S11028", name: "Diseño y actualización de imagen corporativa", scheme: "Recurrente" },
  { folio: "S12029", name: "Planeación, coordinación y puesta en marcha de laboratorio", scheme: "Bajo demanda" },
  { folio: "S12030", name: "Supervisión operativa y cumplimiento normativo de laboratorio", scheme: "Recurrente" },
  { folio: "S12031", name: "Gestión y administración de equipos de laboratorio", scheme: "Recurrente" },
  { folio: "S13032", name: "Servicio de gestión integral para la participación en licitaciones", scheme: "Recurrente" },
  { folio: "S14033", name: "Gestión y coordinación de capacitación técnica para personal", scheme: "Bajo demanda" },
  { folio: "S14034", name: "Gestión y supervisión de mantenimiento preventivo y correctivo", scheme: "Recurrente" },
  { folio: "S15035", name: "Gestión de compras y abastecimiento", scheme: "Recurrente" },
  { folio: "S16036", name: "Atención y seguimiento a verificaciones sanitarias", scheme: "Bajo demanda" },
  { folio: "S16037", name: "Gestión y supervisión del cumplimiento normativo sanitario", scheme: "Recurrente" },
  { folio: "S16038", name: "Supervisión normativa de servicios auxiliares de diagnóstico", scheme: "Recurrente" },
  { folio: "S16039", name: "Supervisión y control normativo de expediente clínico y sistemas", scheme: "Recurrente" },
  { folio: "S16040", name: "Gestión normativa en bioseguridad y manejo de RPBI", scheme: "Recurrente" },
  { folio: "S17041", name: "Asesoría y dirección de operación médica", scheme: "Recurrente" },
  { folio: "S18042", name: "Planeación y coordinación de arranque operativo de unidad médica", scheme: "Bajo demanda" },
  { folio: "S18043", name: "Gestión operativa y supervisión de unidades médicas", scheme: "Recurrente" },
  { folio: "C19044", name: "Gestión de concursos, licitaciones y propuestas económicas", scheme: "Bajo demanda" },
  { folio: "C19045", name: "Servicio integral de dirección y supervisión de proyectos de construcción", scheme: "Recurrente" },
  { folio: "C19046", name: "Planeación, control presupuestal y administración de costos", scheme: "Recurrente" }
];

const commonProtectionsEs = `\n\nCLÁUSULAS DE PROTECCIÓN REFORZADA\n\nPRIMERA. Cumplimiento normativo. LAS PARTES se obligan a cumplir con las leyes mexicanas aplicables, incluyendo disposiciones civiles, mercantiles, fiscales, laborales, de seguridad social, protección de datos personales, anticorrupción y prevención de operaciones con recursos de procedencia ilícita, en la medida que correspondan al objeto del contrato.\n\nSEGUNDA. Independencia de las partes. Nada en este contrato crea sociedad, asociación, joint venture, mandato distinto del expresamente pactado, representación general, subordinación laboral o relación obrero-patronal entre LAS PARTES o su personal.\n\nTERCERA. Declaraciones corporativas. Cada parte declara que su constitución, existencia, representación, poderes, autorizaciones internas y capacidad para contratar son válidas y suficientes, y se obliga a informar cualquier revocación, limitación o modificación relevante.\n\nCUARTA. Información y documentos. Cada parte responde por la veracidad, integridad, licitud y oportunidad de la información, documentos, instrucciones, accesos y materiales que proporcione.\n\nQUINTA. Confidencialidad y secreto industrial. La información técnica, comercial, financiera, fiscal, operativa, legal, estratégica, metodológica o de negocio será confidencial y solo podrá utilizarse para cumplir este contrato.\n\nSEXTA. Datos personales. Si una parte accede a datos personales de la otra, deberá tratarlos únicamente conforme a instrucciones lícitas, aplicar medidas de seguridad razonables y suscribir el anexo de tratamiento que corresponda cuando sea necesario.\n\nSÉPTIMA. Responsabilidad e indemnidad. La parte que incumpla sacará en paz y a salvo a la parte cumplida frente a reclamaciones, multas, daños, gastos, honorarios, contingencias o responsabilidades que deriven directa y comprobablemente de su incumplimiento, dolo, negligencia grave o actos de su personal, proveedores o subcontratistas.\n\nOCTAVA. Anticorrupción. Ninguna parte ofrecerá, prometerá, solicitará, recibirá o entregará beneficios indebidos para obtener una ventaja relacionada con este contrato. El incumplimiento será causa de terminación inmediata.\n\nNOVENA. Terminación y supervivencia. La terminación no libera obligaciones pendientes de pago, confidencialidad, datos personales, propiedad intelectual, indemnidad, impuestos, jurisdicción ni cualquier obligación que por su naturaleza deba sobrevivir.\n\nDÉCIMA. Ley aplicable y jurisdicción. El contrato se interpretará conforme a las leyes aplicables de los Estados Unidos Mexicanos, sin perjuicio de las formalidades o reglas locales que resulten aplicables por domicilio, inmueble, operación o materia.`;

const commonProtectionsEn = `\n\nENHANCED PROTECTIVE CLAUSES\n\nFIRST. Compliance. The parties shall comply with applicable Mexican law, including civil, commercial, tax, labor, social security, personal data protection, anti-corruption and anti-money laundering provisions, to the extent applicable to the transaction.\n\nSECOND. Independent parties. Nothing in this agreement creates a partnership, joint venture, employment relationship, general agency or representation other than what is expressly agreed in writing.\n\nTHIRD. Corporate authority. Each party represents that its existence, authority, powers of attorney, internal approvals and capacity to execute this agreement are valid and sufficient, and shall notify any relevant revocation or limitation.\n\nFOURTH. Information and documents. Each party is responsible for the truthfulness, completeness, lawfulness and timely delivery of all information, documents, instructions, access credentials and materials it provides.\n\nFIFTH. Confidentiality. Technical, commercial, financial, tax, operational, legal, strategic, methodological and business information shall be treated as confidential and used solely to perform this agreement.\n\nSIXTH. Personal data. If a party accesses personal data controlled by the other party, it shall process such data only under lawful documented instructions and apply reasonable administrative, technical and physical safeguards.\n\nSEVENTH. Liability and indemnity. The breaching party shall hold the non-breaching party harmless from claims, fines, damages, costs, expenses and liabilities directly arising from its breach, willful misconduct, gross negligence or acts of its personnel, suppliers or subcontractors.\n\nEIGHTH. Anti-corruption. No party shall offer, promise, request, receive or deliver any undue benefit to obtain an advantage related to this agreement. Breach of this clause shall be cause for immediate termination.\n\nNINTH. Survival. Termination shall not release pending payment, confidentiality, personal data, intellectual property, indemnity, tax, governing law or dispute resolution obligations that by their nature should survive.\n\nTENTH. Mexican law. This agreement shall be interpreted under the applicable laws of Mexico, without prejudice to local formalities or mandatory rules that may apply due to domicile, real estate, subject matter or transaction type.`;

const editor = document.querySelector("#contract-editor");
const editorTitle = document.querySelector("#editor-title");
const selectedCategory = document.querySelector("#selected-category");
const selectedDescription = document.querySelector("#selected-description");
const partyForm = document.querySelector("#party-form");
const toast = document.querySelector("#toast");
const templateImport = document.querySelector("#template-import");
const templateGrid = document.querySelector("#template-grid");
const templateSearch = document.querySelector("#template-search");
const templateCount = document.querySelector("#template-count");
const templateFolderFilter = document.querySelector("#template-folder-filter");
const templateNewFolderButton = document.querySelector("#template-new-folder");
const requirementsList = document.querySelector("#requirements-list");
const customFields = document.querySelector("#custom-fields");
const dynamicFields = document.querySelector("#dynamic-fields");
const roleDropGrid = document.querySelector("#role-drop-grid");
const folderList = document.querySelector("#folder-list");
const finderPath = document.querySelector("#finder-path");
const folderContextMenu = document.querySelector("#folder-context-menu");
const archiveNewFolderButton = document.querySelector("#archive-new-folder");
const archiveUploadDocumentsButton = document.querySelector("#archive-upload-documents");
const archiveUploadFolderButton = document.querySelector("#archive-upload-folder");
const archiveDocumentUpload = document.querySelector("#archive-document-upload");
const archiveFolderUpload = document.querySelector("#archive-folder-upload");
const archiveDeleteSelectedButton = document.querySelector("#archive-delete-selected");
const archiveSearch = document.querySelector("#archive-search");
const archiveViewButtons = document.querySelectorAll("[data-archive-view]");
const contractFolderSelect = document.querySelector("#contract-folder-select");
const savedContractsList = document.querySelector("#saved-contracts");
const versionList = document.querySelector("#version-list");
const autosaveStatus = document.querySelector("#autosave-status");
const formatFont = document.querySelector("#format-font");
const formatSize = document.querySelector("#format-size");
const formatMargin = document.querySelector("#format-margin");
const formatLineHeight = document.querySelector("#format-line-height");
const formatJustify = document.querySelector("#format-justify");
const saveVersionButton = document.querySelector("#save-version");
const saveCatalogTemplateButton = document.querySelector("#save-catalog-template");
const letterheadLogoSelect = document.querySelector("#letterhead-logo-select");
const letterheadLogoInput = document.querySelector("#letterhead-logo-input");
const addLetterheadLogoButton = document.querySelector("#add-letterhead-logo");
const removeLetterheadLogoButton = document.querySelector("#remove-letterhead-logo");
const letterheadCatalogDialog = document.querySelector("#letterhead-catalog-dialog");
const letterheadCatalogList = document.querySelector("#letterhead-catalog-list");
const letterheadUploadButton = document.querySelector("#letterhead-upload-button");
const letterheadClearSelectionButton = document.querySelector("#letterhead-clear-selection");
const currentUserLabel = document.querySelector("#current-user-label");
const switchUserButton = document.querySelector("#switch-user");
const renameTemplateButton = document.querySelector("#rename-template");
const aiInsights = document.querySelector("#ai-insights");
const appShell = document.querySelector("#app-shell");
const authShell = document.querySelector("#auth-shell");
const authLogin = document.querySelector("#auth-login");
const authRegister = document.querySelector("#auth-register");
const authRecover = document.querySelector("#auth-recover");
const licenseRequired = document.querySelector("#license-required");
const licenseStatus = document.querySelector("#license-status");
const licensePill = document.querySelector("#license-pill");
const authMessage = document.querySelector("#auth-message");
const templatePicker = document.querySelector("#template-picker");
const openTemplatePicker = document.querySelector("#open-template-picker");
const userGuideDialog = document.querySelector("#user-guide-dialog");
const openUserGuide = document.querySelector("#open-user-guide");
const openAdminUsers = document.querySelector("#open-admin-users");
const adminUsersDialog = document.querySelector("#admin-users-dialog");
const adminUsersSummary = document.querySelector("#admin-users-summary");
const adminPermissionNote = document.querySelector("#admin-permission-note");
const adminToggleCreateUserButton = document.querySelector("#admin-toggle-create-user");
const adminOpenTemplateCatalogButton = document.querySelector("#admin-open-template-catalog");
const adminOpenLetterheadCatalogButton = document.querySelector("#admin-open-letterhead-catalog");
const adminCreateUserForm = document.querySelector("#admin-create-user-form");
const adminCreateRoleSelect = document.querySelector("#admin-create-role");
const adminUsersList = document.querySelector("#admin-users-list");
const adminBackupStatus = document.querySelector("#admin-backup-status");
const downloadAdminBackupButton = document.querySelector("#download-admin-backup");
const reviewFieldsButton = document.querySelector("#review-fields");
const partyDocumentsButton = document.querySelector("#party-documents");
const partyDocumentsDialog = document.querySelector("#party-documents-dialog");
const archiveDrawer = document.querySelector("#archive-drawer");
const assistantPane = document.querySelector("#assistant-pane");
const saveLocationDialog = document.querySelector("#save-location-dialog");
const saveLocationTitle = document.querySelector("#save-location-title");
const saveLocationBrowser = document.querySelector("#save-location-browser");
const saveLocationSelected = document.querySelector("#save-location-selected");
const saveLocationFileName = document.querySelector("#save-location-file-name");
const saveLocationContextMenu = document.querySelector("#save-location-context-menu");
const saveLocationCancel = document.querySelector("#save-location-cancel");
const saveLocationConfirm = document.querySelector("#save-location-confirm");
const saveLocationExpandButton = document.querySelector("#save-location-expand");
const criticalReviewDialog = document.querySelector("#critical-review-dialog");
const criticalReviewOutput = document.querySelector("#critical-review-output");
const applyCriticalReviewButton = document.querySelector("#apply-critical-review");
const quickFolderButton = document.querySelector("#quick-folder");
const matterFolio = document.querySelector("#matter-folio");
const matterTree = document.querySelector("#matter-tree");
const matterHistory = document.querySelector("#matter-history");

let activeUser = loadCurrentUser();
let templates = loadMasterTemplates();
let templateCatalogFolders = loadTemplateCatalogFolders();
let activeTemplateCatalogFolder = "Todos";
let pendingTemplateImportCatalogPath = "";
let activeTemplate = null;
let activeSourceMaster = null;
let activeCatalogEditKey = null;
let activeBackendRole = "";
let isWorkingCopy = false;
let activeCategory = "Todos";
let activeLanguage = "es";
let partyDataStore = {};
let sourceTextsBySide = { A: [], B: [] };
let partyDocumentsStepVisited = false;
const baseRootFolders = ["Mis Documentos", "Clientes", "Proveedores", "Empresas del Grupo", "Otros", "Documentos de las partes"];
const systemRootFolders = ["Formatos del sistema", "Catálogos del sistema"];
let rootFolders = computeRootFolders();
let folders = loadFolders();
let activeFolder = folders[0] || "Mis Documentos";
let savedContracts = loadSavedContracts();
let versions = loadVersions();
let supportDocuments = loadSupportDocuments();
let legalFormat = loadLegalFormat();
let letterheadLogos = loadLetterheadLogos();
let selectedLetterheadLogoId = loadSelectedLetterheadLogoId();
let masterInsights = loadMasterInsights();
let activeMatterFolio = null;
let activeMatterDraftId = "";
let matterHistoryEvents = [];
let toastTimer;
let autosaveTimer;
let contextMenuFolder = "";
let saveLocationResolve = null;
let saveLocationState = { folder: "Mis Documentos", confirmLabel: "Guardar aquí", defaultName: "", requireName: false };
let saveContextFolder = "";
let archiveViewMode = localStorage.getItem("lexcontratos_archive_view") || "details";
let archiveSearchTerm = "";
let selectedArchiveItems = new Set();
let hoveredArchiveItem = null;
let archiveSortKey = localStorage.getItem("lexcontratos_archive_sort_key") || "name";
let archiveSortDirection = localStorage.getItem("lexcontratos_archive_sort_direction") || "asc";
let pendingCriticalReviewBody = "";
let pendingCriticalChanges = [];
let lastCriticalReviewFindings = [];
let restoringDraft = false;
let draftRestoredForUser = "";
let fieldsReviewed = false;
let criticalReviewDone = false;

const backendRoleLabels = {
  user: "Usuario",
  admin: "Administradora",
  superadmin: "Super administradora"
};

function isAdminBackendRole(role) {
  return role === "admin" || role === "superadmin";
}

function accountRoleLabel(role) {
  return backendRoleLabels[role] || "Usuario";
}

function loadUsers() {
  return readJson("lexcontratos_users", {});
}

function saveUsers(users) {
  localStorage.setItem("lexcontratos_users", JSON.stringify(users));
}

function normalizeArchiveFolderPath(folder) {
  const value = String(folder || "").trim();
  if (!value) return "Mis Documentos";
  if (value === "General") return "Mis Documentos/General";
  if (value === "Personales") return "Otros";
  if (value.startsWith("Personales/")) return `Otros/${value.slice("Personales/".length)}`;
  return value;
}

function loadSession() {
  return readJson("lexcontratos_session", null) || readJson("lexcontratos_session_once", null);
}

function saveSession(email, remember = true) {
  const session = JSON.stringify({ email, date: new Date().toISOString() });
  if (remember) {
    localStorage.setItem("lexcontratos_session", session);
    sessionStorage.removeItem("lexcontratos_session_once");
  } else {
    sessionStorage.setItem("lexcontratos_session_once", session);
    localStorage.removeItem("lexcontratos_session");
  }
  localStorage.setItem("lexcontratos_current_user", email);
  localStorage.setItem("lexcontratos_last_login_email", email);
}

function clearSession() {
  activeBackendRole = "";
  localStorage.removeItem("lexcontratos_session");
  sessionStorage.removeItem("lexcontratos_session_once");
}

function normalizeUserKey(value) {
  return removeAccents(value || "despacho")
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "") || "despacho";
}

function loadCurrentUser() {
  const session = loadSession();
  return session?.email || localStorage.getItem("lexcontratos_current_user") || "usuario-local";
}

function saveCurrentUser(user) {
  localStorage.setItem("lexcontratos_current_user", user);
}

function userStorageKey(name) {
  return `lexcontratos_${normalizeUserKey(activeUser)}_${name}`;
}

function readJson(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (error) {
    return fallback;
  }
}

function loadMasterTemplates() {
  const imported = window.lexImportedTemplates || {};
  const availableTemplates = { ...imported, ...baseTemplates, ...extendedTemplates };
  const shared = readJson("lexcontratos_shared_master_templates", {});
  const legacy = readJson("lexcontratos_master_templates", {});
  const personal = readJson(userStorageKey("master_templates"), legacy);
  const combined = { ...shared, ...personal };
  const keys = new Set([...Object.keys(availableTemplates), ...Object.keys(combined)]);

  return Object.fromEntries(
    Array.from(keys).flatMap((key) => {
      const template = availableTemplates[key] || combined[key] || {};
      const merged = { ...template, ...(combined[key] || {}), master: true };
      if (merged.hidden) return [];
      const prepared = prepareTemplateFields(merged.body || "", merged.customFields || []);
      return [[
        key,
        {
          ...merged,
          body: prepared.body,
          customFields: prepared.fields,
          fields: prepared.fields.length || merged.fields || 0,
          master: true
        }
      ]];
    })
  );
}

function saveMasterTemplates() {
  const masters = {};
  Object.entries(templates).forEach(([key, template]) => {
    if (template.master && !template.shared) masters[key] = template;
  });
  localStorage.setItem(userStorageKey("master_templates"), JSON.stringify(masters));
}

function saveSharedMasterTemplate(templateKey, template, action = "save") {
  const shared = readJson("lexcontratos_shared_master_templates", {});
  shared[templateKey] = {
    ...template,
    master: true,
    shared: true,
    catalogPath: templateCatalogPath(template),
    updatedAt: new Date().toISOString()
  };
  localStorage.setItem("lexcontratos_shared_master_templates", JSON.stringify(shared));
  const backend = productionBackend();
  if (backend?.updateSharedTemplate) {
    backend
      .updateSharedTemplate({ action, key: templateKey, template: shared[templateKey] })
      .then((data) => {
        if (data?.templates) localStorage.setItem("lexcontratos_shared_master_templates", JSON.stringify(data.templates));
      })
      .catch((error) => reportBackendError("actualizar catálogo general", error));
  }
}

async function syncSharedTemplatesFromBackend() {
  const backend = productionBackend();
  if (!backend?.listSharedTemplates) return;
  try {
    const data = await backend.listSharedTemplates();
    if (data?.templates) {
      localStorage.setItem("lexcontratos_shared_master_templates", JSON.stringify(data.templates));
      templates = loadMasterTemplates();
      templateCatalogFolders = loadTemplateCatalogFolders();
      renderTemplates();
    }
  } catch (error) {
    reportBackendError("leer catálogo general", error);
  }
}

function loadFolders() {
  refreshRootFolders();
  const saved = readJson(userStorageKey("folders"), readJson("lexcontratos_folders", rootFolders));
  const normalized = (Array.isArray(saved) ? saved : rootFolders)
    .map(normalizeArchiveFolderPath)
    .filter(Boolean)
    .filter(folderAllowedForCurrentUser);
  return Array.from(new Set([...rootFolders, ...normalized]));
}

function saveFolders() {
  localStorage.setItem(userStorageKey("folders"), JSON.stringify(folders));
  const backend = productionBackend();
  if (backend) backend.saveFolders(folders).catch((error) => reportBackendError("guardar carpetas", error));
}

function loadSavedContracts() {
  const saved = readJson(userStorageKey("saved_contracts"), readJson("lexcontratos_saved_contracts", []));
  return saved.map((contract) => ({
    ...contract,
    folder: normalizeArchiveFolderPath(contract.folder || "Mis Documentos")
  }));
}

function saveSavedContracts(contractToSync = null, { syncLatest = true } = {}) {
  localStorage.setItem(userStorageKey("saved_contracts"), JSON.stringify(savedContracts));
  if (!syncLatest) return;
  const backend = productionBackend();
  const latest = contractToSync || savedContracts[savedContracts.length - 1];
  if (backend && latest) backend.saveContract(latest).catch((error) => reportBackendError("guardar contrato", error));
}

function loadVersions() {
  const saved = readJson(userStorageKey("versions"), readJson("lexcontratos_versions", []));
  return saved.map((version) => ({
    ...version,
    folder: normalizeArchiveFolderPath(version.folder || "Mis Documentos")
  }));
}

function saveVersions() {
  localStorage.setItem(userStorageKey("versions"), JSON.stringify(versions));
}

function loadSupportDocuments() {
  return readJson(userStorageKey("support_documents"), []).map((document) => ({
    ...document,
    folder: normalizeArchiveFolderPath(document.folder || "Mis Documentos")
  }));
}

function saveSupportDocuments() {
  localStorage.setItem(userStorageKey("support_documents"), JSON.stringify(supportDocuments));
}

function activeDraftKey() {
  return userStorageKey("active_draft");
}

function setPartyData(values = {}) {
  partyDataStore = { ...partyDataStore, ...values };
  partyForm.querySelectorAll("input, textarea, select").forEach((field) => {
    if (Object.prototype.hasOwnProperty.call(partyDataStore, field.name)) field.value = partyDataStore[field.name] || "";
  });
}

function serializableSourceFiles() {
  return {
    A: (sourceTextsBySide.A || []).map(({ name, size, type, text }) => ({ name, size, type, text: text || "" })),
    B: (sourceTextsBySide.B || []).map(({ name, size, type, text }) => ({ name, size, type, text: text || "" }))
  };
}

function saveActiveDraft(reason = "Borrador en curso") {
  if (restoringDraft || !isWorkingCopy || !activeTemplate || !editor.value.trim()) return;
  const template = templates[activeTemplate] || {};
  const draft = {
    id: readJson(activeDraftKey(), {})?.id || `draft-${Date.now()}`,
    title: editorTitle.textContent,
    folder: activeFolder,
    template: activeTemplate,
    sourceMaster: activeSourceMaster,
    language: activeLanguage,
    userInitials: currentUserInitials(),
    letterheadLogoId: selectedLetterheadLogoId,
    body: editor.value,
    partyData: getPartyData(),
    sourceTextsBySide: serializableSourceFiles(),
    partyDocumentsStepVisited,
    draftId: ensureDraftMatterId(),
    matter: matterSnapshot(reason, false),
    history: matterHistoryEvents.slice(),
    templateSnapshot: {
      ...template,
      body: editor.value,
      master: false,
      sourceMaster: activeSourceMaster || template.sourceMaster || null
    },
    reason,
    updatedAt: Date.now(),
    date: new Date().toLocaleString("es-MX")
  };
  localStorage.setItem(activeDraftKey(), JSON.stringify(draft));
}

function restoreActiveDraft({ silent = false } = {}) {
  const draft = readJson(activeDraftKey(), null);
  if (!draft?.body || !draft?.template) return false;
  if (Date.now() - Number(draft.updatedAt || 0) > 1000 * 60 * 60 * 24 * 30) return false;

  restoringDraft = true;
  if (!templates[draft.template]) {
    templates[draft.template] = {
      ...(draft.templateSnapshot || {}),
      title: draft.title || "Borrador recuperado",
      category: draft.templateSnapshot?.category || "Borradores",
      description: "Borrador recuperado automáticamente.",
      body: draft.body,
      customFields: draft.templateSnapshot?.customFields || [],
      fields: draft.templateSnapshot?.fields || 0,
      master: false,
      sourceMaster: draft.sourceMaster || draft.templateSnapshot?.sourceMaster || null
    };
  }
  activeFolder = ensureFolderPath(draft.folder || activeFolder);
  loadTemplate(draft.template);
  setCatalogEditMode(null);
  isWorkingCopy = true;
  activeSourceMaster = draft.sourceMaster || templates[draft.template]?.sourceMaster || activeSourceMaster;
  activeLanguage = draft.language || activeLanguage;
  selectedLetterheadLogoId = draft.letterheadLogoId && letterheadLogos.some((logo) => logo.id === draft.letterheadLogoId) ? draft.letterheadLogoId : selectedLetterheadLogoId;
  saveSelectedLetterheadLogoId();
  renderLetterheadLogos();
  editorTitle.textContent = draft.title || editorTitle.textContent;
  editor.value = draft.body;
  editor.readOnly = false;
  setPartyData(draft.partyData || {});
  sourceTextsBySide = draft.sourceTextsBySide || { A: [], B: [] };
  partyDocumentsStepVisited = Boolean(draft.partyDocumentsStepVisited || Object.values(sourceTextsBySide).some((files) => files?.length));
  activeMatterFolio = draft.matter?.folio || null;
  activeMatterDraftId = draft.draftId || draft.matter?.draftId || "";
  matterHistoryEvents = draft.history || draft.matter?.history || [];
  autosaveStatus.textContent = `Borrador recuperado · ${draft.date || ""}`.trim();
  autosaveStatus.classList.add("autosave-highlight");
  renderTemplates();
  renderFolderSelector();
  renderFolders();
  renderDynamicFields();
  renderCustomFields();
  renderRoleDrops();
  renderRequirements();
  renderMatterPanel();
  restoringDraft = false;
  if (!silent) showToast("Borrador recuperado automáticamente.");
  return true;
}

function loadLegalFormat() {
 const saved = readJson(
    userStorageKey("legal_format"),
    readJson("lexcontratos_legal_format", {
      font: "Georgia",
      size: "12",
      margin: "54pt",
      lineHeight: "1.5",
      justify: true
    })
  );
  if (saved.margin === "72pt") saved.margin = "54pt";
  if (!saved.formatVersion && saved.font === "Times New Roman") saved.font = "Georgia";
  saved.formatVersion = "georgia-default";
  saved.justify = true;
  return saved;
}

function saveLegalFormat() {
  localStorage.setItem(userStorageKey("legal_format"), JSON.stringify(legalFormat));
}

function loadLetterheadLogos() {
  const catalog = defaultLetterheadLogos();
  if (letterheadCatalogLocked()) return catalog;
  const personal = readJson(userStorageKey("letterhead_logos"), [])
    .filter((logo) => logo?.id && logo?.dataUrl && logo?.name)
    .map((logo) => ({ ...logo, source: logo.source || "personal" }));
  const byId = new Map([...catalog, ...personal].map((logo) => [logo.id, logo]));
  return Array.from(byId.values());
}

function saveLetterheadLogos() {
  if (letterheadCatalogLocked()) return;
  localStorage.setItem(userStorageKey("letterhead_logos"), JSON.stringify(letterheadLogos.filter((logo) => logo.source !== "catalog").slice(-20)));
}

function loadSelectedLetterheadLogoId() {
  return localStorage.getItem(userStorageKey("selected_letterhead_logo")) || "";
}

function saveSelectedLetterheadLogoId() {
  localStorage.setItem(userStorageKey("selected_letterhead_logo"), selectedLetterheadLogoId || "");
}

function selectedLetterheadLogo() {
  return letterheadLogos.find((logo) => logo.id === selectedLetterheadLogoId) || null;
}

function normalizeLetterheadLines(...values) {
  return values
    .flatMap((value) => Array.isArray(value) ? value : [value])
    .map((value) => String(value || "").replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .slice(0, 5);
}

function letterheadFooterLines(logo = selectedLetterheadLogo()) {
  if (!logo) return [];
  return normalizeLetterheadLines(logo.companyName, logo.addressLines, logo.address, logo.footerLines, logo.footer);
}

function letterheadCatalogLocked() {
  return Boolean(window.lexLetterheadCatalogLocked);
}

function defaultLetterheadLogos() {
  return (Array.isArray(window.lexLetterheadCatalog) ? window.lexLetterheadCatalog : [])
    .filter((logo) => logo?.id && logo?.dataUrl && logo?.name)
    .map((logo) => ({ ...logo, source: "catalog" }));
}

function renderLetterheadLogos() {
  if (!letterheadLogoSelect) return;
  letterheadLogos = loadLetterheadLogos();
  const activeExists = !selectedLetterheadLogoId || letterheadLogos.some((logo) => logo.id === selectedLetterheadLogoId);
  if (!activeExists) {
    selectedLetterheadLogoId = "";
    saveSelectedLetterheadLogoId();
  }
  const catalog = letterheadLogos.filter((logo) => logo.source === "catalog");
  const personal = letterheadLogos.filter((logo) => logo.source !== "catalog");
  const optionMarkup = (logo) => {
    const detail = logo.companyName && logo.companyName !== logo.name ? ` · ${logo.companyName}` : "";
    return `<option value="${escapeHtml(logo.id)}">${escapeHtml(`${logo.name}${detail}`)}</option>`;
  };
  letterheadLogoSelect.innerHTML = `
    <option value="">Sin membrete</option>
    ${catalog.length ? `<optgroup label="Membretes precargados">${catalog.map(optionMarkup).join("")}</optgroup>` : ""}
    ${personal.length ? `<optgroup label="Membretes propios">${personal.map(optionMarkup).join("")}</optgroup>` : ""}
  `;
  letterheadLogoSelect.value = selectedLetterheadLogoId || "";
  if (addLetterheadLogoButton) addLetterheadLogoButton.hidden = letterheadCatalogLocked();
  if (removeLetterheadLogoButton) {
    removeLetterheadLogoButton.hidden = letterheadCatalogLocked();
    removeLetterheadLogoButton.disabled = !selectedLetterheadLogoId;
  }
  renderLetterheadCatalogList();
}

function renderLetterheadCatalogList() {
  if (!letterheadCatalogList) return;
  letterheadLogos = loadLetterheadLogos();
  if (!letterheadLogos.length) {
    letterheadCatalogList.innerHTML = `<div class="empty-state"><strong>No hay membretes guardados.</strong><span>Sube el primero para que aparezca en la lista desplegable del contrato.</span></div>`;
    return;
  }
  letterheadCatalogList.innerHTML = letterheadLogos
    .map((logo) => {
      const selected = logo.id === selectedLetterheadLogoId;
      const lines = letterheadFooterLines(logo);
      return `
        <article class="letterhead-catalog-item ${selected ? "active" : ""}">
          <div class="letterhead-preview">${logo.dataUrl ? `<img src="${escapeHtml(logo.dataUrl)}" alt="${escapeHtml(logo.name)}" />` : `<span>LX</span>`}</div>
          <div>
            <strong>${escapeHtml(logo.name)}</strong>
            <small>${escapeHtml(lines.join(" · ") || "Sin pie de página capturado")}</small>
            <em>${logo.source === "catalog" ? "Precargado" : "Propio"}${selected ? " · En uso" : ""}</em>
          </div>
          <div class="letterhead-item-actions">
            <button class="secondary-action mini-action" type="button" data-letterhead-action="select" data-letterhead-id="${escapeHtml(logo.id)}">${selected ? "Seleccionado" : "Usar"}</button>
            ${logo.source === "catalog" ? "" : `<button class="secondary-action mini-action danger-action" type="button" data-letterhead-action="delete" data-letterhead-id="${escapeHtml(logo.id)}">Eliminar</button>`}
          </div>
        </article>
      `;
    })
    .join("");
}

function cleanLogoName(file) {
  return String(file?.name || "Logo")
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 55) || "Logo";
}

function addLetterheadLogo(file) {
  if (!file) return;
  if (!/^image\/(png|jpe?g|webp|svg\+xml)$/i.test(file.type)) {
    showToast("Usa un archivo de imagen para el membrete: PNG, JPG, WebP o SVG.");
    return;
  }
  if (file.size > 1_500_000) {
    showToast("Ese logo pesa demasiado. Usa una versión ligera, idealmente menor a 1.5 MB.");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const defaultName = cleanLogoName(file);
    const companyName = window.prompt("Empresa o razón social para este membrete", defaultName);
    if (!companyName || !companyName.trim()) {
      showToast("Membrete cancelado. No se guardó sin nombre de empresa.");
      return;
    }
    const footer = window.prompt("Domicilio, sitio web o pie de página que debe aparecer en el documento. Puedes separar líneas con punto y coma.", "");
    const addressLines = normalizeLetterheadLines(String(footer || "").split(";"));
    const logo = {
      id: `logo-${Date.now()}`,
      name: companyName.trim(),
      companyName: companyName.trim(),
      addressLines,
      footerLines: addressLines,
      dataUrl: String(reader.result || ""),
      type: file.type,
      source: "personal",
      date: new Date().toLocaleString("es-MX")
    };
    letterheadLogos = [...letterheadLogos.filter((item) => item.name !== logo.name), logo].slice(-20);
    selectedLetterheadLogoId = logo.id;
    saveLetterheadLogos();
    saveSelectedLetterheadLogoId();
    renderLetterheadLogos();
    renderLetterheadCatalogList();
    saveActiveDraft("Membrete actualizado");
    showToast(`Membrete "${logo.name}" agregado.`);
  };
  reader.readAsDataURL(file);
}

function clearSelectedLetterheadLogo() {
  selectedLetterheadLogoId = "";
  saveSelectedLetterheadLogoId();
  renderLetterheadLogos();
  saveActiveDraft("Contrato sin membrete");
  showToast("Este contrato queda sin membrete.");
}

function deleteLetterheadLogo(id) {
  const logo = letterheadLogos.find((item) => item.id === id);
  if (!logo) {
    showToast("No encontré ese membrete.");
    return;
  }
  if (logo.source === "catalog") {
    showToast("Este membrete pertenece al catálogo aprobado y no puede eliminarse desde la cuenta.");
    return;
  }
  const confirmed = window.confirm(`¿Seguro que quieres eliminar este membrete de tu biblioteca?\n\n${logo.name}`);
  if (!confirmed) return;
  letterheadLogos = letterheadLogos.filter((item) => item.id !== logo.id);
  if (selectedLetterheadLogoId === logo.id) selectedLetterheadLogoId = "";
  saveLetterheadLogos();
  saveSelectedLetterheadLogoId();
  renderLetterheadLogos();
  renderLetterheadCatalogList();
  saveActiveDraft("Membrete eliminado");
  showToast("Membrete eliminado de la biblioteca.");
}

function renameLetterheadLogo(id) {
  const logo = letterheadLogos.find((item) => item.id === id);
  if (!logo) {
    showToast("No encontré ese membrete.");
    return;
  }
  if (logo.source === "catalog") {
    showToast("Ese membrete es precargado. Para cambiarlo, sube una nueva versión aprobada al catálogo.");
    return;
  }
  const name = window.prompt("Nuevo nombre del membrete", logo.name || "Membrete");
  if (!name || !name.trim()) return;
  const confirmed = window.confirm(`¿Seguro que quieres renombrar este membrete como "${name.trim()}"?`);
  if (!confirmed) return;
  logo.name = name.trim();
  logo.companyName = logo.companyName || logo.name;
  saveLetterheadLogos();
  renderLetterheadLogos();
  renderFolders();
  showToast("Membrete renombrado.");
}

function letterheadLogoForSignature() {
  const logo = selectedLetterheadLogo();
  if (!logo?.dataUrl) return Promise.resolve(null);
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      const maxWidth = 600;
      const maxHeight = 180;
      const scale = Math.min(maxWidth / image.naturalWidth, maxHeight / image.naturalHeight, 1);
      const width = Math.max(1, Math.round(image.naturalWidth * scale));
      const height = Math.max(1, Math.round(image.naturalHeight * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, width, height);
      context.drawImage(image, 0, 0, width, height);
      resolve({
        name: logo.name,
        companyName: logo.companyName || logo.name,
        address: logo.address || "",
        addressLines: normalizeLetterheadLines(logo.addressLines),
        footer: logo.footer || "",
        footerLines: normalizeLetterheadLines(logo.footerLines),
        dataUrl: canvas.toDataURL("image/jpeg", 0.92)
      });
    };
    image.onerror = () => resolve(null);
    image.src = logo.dataUrl;
  });
}

function loadMasterInsights() {
  return readJson("lexcontratos_master_insights", []);
}

function saveMasterInsights() {
  localStorage.setItem("lexcontratos_master_insights", JSON.stringify(masterInsights.slice(-20)));
}

function renderUserSession() {
  const account = loadUsers()[activeUser];
  currentUserLabel.textContent = account?.name || activeUser;
  if (licensePill) {
    licensePill.textContent = isLocalAdminAccount(account)
      ? account.role
      : account?.licenseStatus === "active"
        ? "Licencia activa"
        : "Licencia pendiente";
  }
}

function renderMasterInsights() {
  const visible = masterInsights.slice(-3).reverse();
  aiInsights.innerHTML = visible.length
    ? visible
        .map((item) => `
          <article>
            <strong>${item.title}</strong>
            <span>${item.status} · ${item.date}</span>
          </article>
        `)
        .join("")
    : `<span>Cuando reemplaces un formato base, LexContratos registrará mejoras anonimizadas para nutrir la biblioteca.</span>`;
}

function clearWorkspaceState() {
  activeTemplate = null;
  activeSourceMaster = null;
  setCatalogEditMode(null);
  isWorkingCopy = false;
  partyDataStore = {};
  sourceTextsBySide = { A: [], B: [] };
  partyDocumentsStepVisited = false;
  activeMatterFolio = null;
  activeMatterDraftId = "";
  matterHistoryEvents = [];
  selectedCategory.textContent = "Inicio";
  editorTitle.textContent = "Selecciona o importa un formato";
  selectedDescription.textContent = "El contrato aparecerá aquí cuando elijas un formato base o importes un draft propio.";
  editor.value = "";
  editor.readOnly = true;
  autosaveStatus.textContent = "Sin contrato seleccionado";
  autosaveStatus.classList.remove("autosave-highlight");
  if (renameTemplateButton) {
    renameTemplateButton.textContent = "Nombre protegido";
    renameTemplateButton.title = "Selecciona un formato y crea una copia editable.";
  }
  criticalReviewDone = false;
  setFieldsReviewedState(false);
  renderTemplates();
  renderDynamicFields();
  renderCustomFields();
  renderRoleDrops();
  renderRequirements();
  renderMatterPanel();
}

function scrubKnownPartyData(text) {
  let scrubbed = text;
  const values = getPartyData();
  Object.entries(values)
    .filter(([, value]) => String(value || "").trim().length > 2)
    .sort((a, b) => String(b[1]).length - String(a[1]).length)
    .forEach(([name, value]) => {
      const escaped = String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      scrubbed = scrubbed.replace(new RegExp(escaped, "g"), `{{${name}}}`);
    });
  return scrubbed;
}

function recordMasterImprovement(masterKey, prepared) {
  const title = cleanWorkingTitle(editorTitle.textContent);
  const isSharedBase = Boolean(baseTemplates[masterKey] || extendedTemplates[masterKey] || (window.lexImportedTemplates || {})[masterKey]);
  masterInsights.push({
    id: Date.now().toString(),
    user: activeUser,
    masterKey,
    title,
    fields: prepared.fields.length,
    date: new Date().toLocaleString("es-MX"),
    status: isSharedBase ? "Formato base enriquecido" : "Mejora privada registrada"
  });
  saveMasterInsights();

  if (isSharedBase) {
    const shared = readJson("lexcontratos_shared_master_templates", {});
    shared[masterKey] = {
      ...(templates[masterKey] || {}),
      body: scrubKnownPartyData(prepared.body),
      customFields: prepared.fields,
      fields: prepared.fields.length,
      master: true,
      description: "Formato base enriquecido con mejoras anonimizadas de usuarios."
    };
    localStorage.setItem("lexcontratos_shared_master_templates", JSON.stringify(shared));
  }

  renderMasterInsights();
}

function switchActiveUser(user, announce = true) {
  activeUser = user;
  saveCurrentUser(user);
  refreshRootFolders();
  templates = loadMasterTemplates();
  activeTemplate = null;
  activeSourceMaster = null;
  setCatalogEditMode(null);
  isWorkingCopy = false;
  sourceTextsBySide = { A: [], B: [] };
  partyDocumentsStepVisited = false;
  activeMatterFolio = null;
  activeMatterDraftId = "";
  folders = loadFolders();
  activeFolder = folders[0] || "Mis Documentos";
  savedContracts = loadSavedContracts();
  versions = loadVersions();
  legalFormat = loadLegalFormat();
  letterheadLogos = loadLetterheadLogos();
  selectedLetterheadLogoId = loadSelectedLetterheadLogoId();
  renderUserSession();
  syncFormatControls();
  renderLetterheadLogos();
  renderFolders();
  renderSavedContracts();
  renderVersions();
  clearWorkspaceState();
  if (draftRestoredForUser !== activeUser && restoreActiveDraft({ silent: true })) draftRestoredForUser = activeUser;
  if (announce) showToast(`Sesión cambiada a ${activeUser}. Biblioteca personal cargada.`);
}

function currentAccount() {
  const session = loadSession();
  if (!session?.email) return null;
  return loadUsers()[session.email] || null;
}

function initialsFromName(value) {
  const clean = removeAccents(String(value || ""))
    .replace(/@.*$/, "")
    .replace(/[^a-zA-ZÁÉÍÓÚÑáéíóúñüÜ\s._-]+/g, " ")
    .replace(/[._-]+/g, " ")
    .trim();
  const words = clean
    .split(/\s+/)
    .filter((word) => word && !/^(de|del|la|las|los|y|sa|cv|sapi|rl)$/i.test(word));
  const initials = words.slice(0, 4).map((word) => word[0]).join("").toUpperCase();
  return initials || "LC";
}

function currentUserInitials() {
  const account = currentAccount();
  const label = currentUserLabel?.textContent || "";
  return initialsFromName(account?.name || label || activeUser);
}

function isLocalAdminAccount(account = currentAccount()) {
  return ["Administrador", "Administradora", "Super administradora", "Superadministradora"].includes(account?.role);
}

function isCurrentSuperAdmin() {
  return currentAccount()?.role === "Super administradora" || currentAccount()?.role === "Superadministradora";
}

function canSeeSystemCatalogs() {
  return isLocalAdminAccount() || isAdminBackendRole(activeBackendRole);
}

function computeRootFolders() {
  return canSeeSystemCatalogs() ? [...baseRootFolders, ...systemRootFolders] : baseRootFolders.slice();
}

function refreshRootFolders() {
  rootFolders = computeRootFolders();
  return rootFolders;
}

function folderRoot(path) {
  return String(path || "").split("/").filter(Boolean)[0] || "Mis Documentos";
}

function isSystemRoot(path) {
  return systemRootFolders.includes(folderRoot(path));
}

function saveDialogRootFolders() {
  return baseRootFolders.slice();
}

function folderAllowedForCurrentUser(folder) {
  return rootFolders.includes(folderRoot(folder));
}

function hasActiveAccess(account) {
  return Boolean(account && account.accountStatus === "active" && (account.licenseStatus === "active" || isLocalAdminAccount(account)));
}

function syncBackendAccount(access) {
  if (!access?.user?.email) return;
  const backendRole = access.profile?.role || "user";
  activeBackendRole = backendRole;
  const users = loadUsers();
  users[access.user.email] = {
    email: access.user.email,
    password: "",
    name: access.profile?.full_name || access.user.email,
    role: accountRoleLabel(backendRole),
    accountStatus: access.profile?.account_status || "active",
    licenseStatus: ["active", "trial"].includes(access.status) || isAdminBackendRole(backendRole) ? "active" : access.status || "inactive",
    licenseEndsAt: access.license?.ends_at || ""
  };
  saveUsers(users);
}

function showAuthPanel(panel) {
  [authLogin, authRegister, authRecover, licenseRequired].forEach((item) => item.classList.add("is-hidden"));
  authShell.classList.toggle("production-auth", Boolean(productionBackend()));
  authShell.classList.toggle("demo-auth", !productionBackend() || backendAccessLocked());
  setAuthMessage("");
  panel.classList.remove("is-hidden");
}

function normalizedRoute() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/privacy" || path === "/aviso-privacidad") return "privacy";
  if (path === "/terms" || path === "/terminos") return "terms";
  if (path === "/login") return "login";
  if (path === "/app" || path === "/dashboard") return "app";
  return "home";
}

function normalizedRouteName(path) {
  if (path === "/privacy" || path === "/aviso-privacidad") return "privacy";
  if (path === "/terms" || path === "/terminos") return "terms";
  if (path === "/login") return "login";
  if (path === "/app" || path === "/dashboard") return "app";
  return "home";
}

function routePath(route) {
  return {
    home: "/",
    privacy: "/aviso-privacidad",
    terms: "/terminos",
    login: "/login",
    app: "/app"
  }[route] || "/";
}

function setRoute(route, replace = false) {
  const path = routePath(route);
  if (window.location.pathname === path) return;
  const method = replace ? "replaceState" : "pushState";
  window.history[method]({}, "", path);
}

function applyRouteShell(route) {
  document.body.classList.remove("route-home", "route-login", "route-app", "route-privacy", "route-terms", "route-pending");
  document.body.classList.add(`route-${route}`);
  const robots = document.querySelector("#robots-meta");
  if (robots) robots.setAttribute("content", route === "app" || route === "login" || route === "pending" ? "noindex,nofollow" : "index,follow");
}

function showPublicRoute(route) {
  applyRouteShell(route);
  appShell.classList.add("is-hidden");
  authShell.classList.remove("is-hidden");
  setAdminAccessVisible(false);
}

function showLoginRoute(panel = authLogin, route = "login") {
  applyRouteShell(route);
  appShell.classList.add("is-hidden");
  authShell.classList.remove("is-hidden");
  setAdminAccessVisible(false);
  showAuthPanel(panel);
}

function setAuthMessage(message, type = "") {
  if (!authMessage) return;
  authMessage.textContent = message || "";
  authMessage.className = `auth-message${message ? " visible" : ""}${type ? ` ${type}` : ""}`;
}

function readableAuthError(error) {
  const message = String(error?.message || error || "");
  if (/invalid login credentials/i.test(message)) {
    return "Correo o contraseña incorrectos. Usa el correo completo con el que te registraste.";
  }
  if (/email not confirmed/i.test(message)) {
    return "Tu correo aún no está confirmado. Revisa tu bandeja de entrada y correo no deseado.";
  }
  if (/rate limit|too many/i.test(message)) {
    return "El acceso está temporalmente limitado por seguridad. Espera unos minutos y vuelve a probar.";
  }
  return "Hubo un problema al iniciar sesión. Intenta nuevamente o contacta al administrador.";
}

async function renderAccessState() {
  const route = normalizedRoute();
  if (["home", "privacy", "terms"].includes(route)) {
    showPublicRoute(route);
    return;
  }

  loadUsers();
  const backend = productionBackend();

  if (backend) {
    try {
      const access = await backend.getAccessState();
      if (!access.user) {
        if (route === "app") setRoute("login", true);
        showLoginRoute(authLogin);
        return;
      }

      if (!access.hasAccess) {
        licenseStatus.innerHTML = `
          <span>Cuenta: ${access.user.email}</span>
          <span>Estado: pendiente de activación</span>
        `;
        showLoginRoute(licenseRequired, "pending");
        return;
      }

      if (route !== "app") setRoute("app", true);
      applyRouteShell("app");
      authShell.classList.add("is-hidden");
      appShell.classList.remove("is-hidden");
      syncBackendAccount(access);
      switchActiveUser(access.user.email, false);
      const isAdmin = isAdminBackendRole(access.profile?.role);
      setAdminAccessVisible(isAdmin);
      licensePill.textContent = isAdmin ? accountRoleLabel(access.profile?.role) : "Licencia activa";
      currentUserLabel.textContent = access.profile?.full_name || access.user.email;
      syncSharedTemplatesFromBackend();
      return;
    } catch (error) {
      reportBackendError("validar el acceso", error);
    }
  }

  if (backendAccessLocked()) {
    if (route === "app") setRoute("login", true);
    showLoginRoute(authLogin);
    return;
  }

  const account = currentAccount();

  if (!account) {
    if (route === "app") setRoute("login", true);
    showLoginRoute(authLogin);
    return;
  }

  if (!hasActiveAccess(account)) {
    licenseStatus.innerHTML = `
      <span>Cuenta: ${account.email}</span>
      <span>Estado: pendiente de activación</span>
    `;
    showLoginRoute(licenseRequired, "pending");
    return;
  }

  if (route !== "app") setRoute("app", true);
  applyRouteShell("app");
  authShell.classList.add("is-hidden");
  appShell.classList.remove("is-hidden");
  setAdminAccessVisible(isLocalAdminAccount(account) && Boolean(productionBackend()));
  licensePill.textContent = isLocalAdminAccount(account) ? account.role : "Licencia activa";
  currentUserLabel.textContent = account.name || account.email;
  switchActiveUser(account.email, false);
}

async function signOut() {
  const backend = productionBackend();
  if (backend) {
    try {
      await backend.signOut();
    } catch (error) {
      reportBackendError("cerrar sesión", error);
    }
  }
  clearSession();
  setRoute("login", true);
  showLoginRoute(authLogin);
  showToast("Sesión cerrada.");
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 3000);
}

function setFieldsReviewedState(reviewed) {
  fieldsReviewed = Boolean(reviewed);
  if (!fieldsReviewed) criticalReviewDone = false;
  if (!reviewFieldsButton) return;
  reviewFieldsButton.classList.toggle("needs-review", !fieldsReviewed);
  reviewFieldsButton.classList.toggle("review-complete", fieldsReviewed);
  reviewFieldsButton.textContent = fieldsReviewed ? "1. Campos editables revisados" : "1. Detectar campos editables (obligatorio)";
  reviewFieldsButton.title = fieldsReviewed
    ? "Campos revisados. Si modificas o importas otro contrato, vuelve a detectar campos antes de integrar datos."
    : "Paso obligatorio antes de subir, extraer o integrar datos. Detecta los campos rellenables que siguen presentes en el contrato.";
  updateWorkflowStepState();
}

function requireFieldsReviewed(actionLabel = "seguir") {
  if (fieldsReviewed) return true;
  setFieldsReviewedState(false);
  showToast(`Primero detecta los campos editables. Es obligatorio antes de ${actionLabel}.`);
  reviewFieldsButton?.focus();
  return false;
}

function setAdminAccessVisible(isAdmin) {
  openAdminUsers?.classList.toggle("is-hidden", !isAdmin);
  refreshRootFolders();
  if (folderList) renderFolders();
}

function adminStatusText(user) {
  if (user.role === "superadmin") return "Super administradora";
  if (user.role === "admin") return "Administrador";
  if (user.account_status === "inactive") return "Suspendido";
  if (user.license_status === "active" || user.license_status === "trial") return "Licencia activa";
  return "Pendiente de licencia";
}

function renderAdminUsers(users = [], currentAdmin = {}) {
  const pending = users.filter((user) => !["active", "trial"].includes(user.license_status) && !isAdminBackendRole(user.role)).length;
  const active = users.filter((user) => ["active", "trial"].includes(user.license_status) || isAdminBackendRole(user.role)).length;
  const currentBackendRole = currentAdmin?.role || "";
  const currentEmail = String(currentAdmin?.email || currentAccount()?.email || activeUser || "").toLowerCase();
  const currentIsSuperAdmin = currentBackendRole === "superadmin" || isCurrentSuperAdmin();
  const currentRole = currentBackendRole ? accountRoleLabel(currentBackendRole) : currentIsSuperAdmin ? "Super administradora" : isLocalAdminAccount(currentAccount()) ? "Administradora" : "Usuario";
  if (adminUsersSummary) {
    adminUsersSummary.textContent = `${users.length} usuario${users.length === 1 ? "" : "s"} registrado${users.length === 1 ? "" : "s"} · ${pending} pendiente${pending === 1 ? "" : "s"} · ${active} activo${active === 1 ? "" : "s"} · Tu rol: ${currentRole}`;
  }
  if (adminPermissionNote) {
    adminPermissionNote.textContent = currentIsSuperAdmin
      ? "Tienes control de super administración: puedes asignar o retirar administradoras, gestionar usuarios, configuración y respaldos. Los formatos y membretes del sistema se administran desde Mis Documentos."
      : "Estás entrando como administradora. Los formatos y membretes del sistema se administran desde Mis Documentos; la super administración conserva permisos avanzados.";
    adminPermissionNote.classList.toggle("is-superadmin", currentIsSuperAdmin);
  }
  if (adminCreateRoleSelect) {
    adminCreateRoleSelect.querySelector('option[value="superadmin"]').disabled = !currentIsSuperAdmin;
    if (!currentIsSuperAdmin && adminCreateRoleSelect.value === "superadmin") adminCreateRoleSelect.value = "user";
  }
  if (!adminUsersList) return;
  adminUsersList.innerHTML = users.length
    ? users
        .map((user) => {
          const status = adminStatusText(user);
          const created = user.created_at ? new Date(user.created_at).toLocaleDateString("es-MX") : "Sin fecha";
          const lastSignIn = user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString("es-MX") : "Sin ingreso";
          const payload = `data-user-id="${escapeHtml(user.id)}" data-email="${escapeHtml(user.email)}" data-full-name="${escapeHtml(user.full_name || user.email)}" data-current-role="${escapeHtml(user.role || "user")}"`;
          const isCurrentUser = currentEmail && String(user.email || "").toLowerCase() === currentEmail;
          const hasAccess = ["active", "trial"].includes(user.license_status) || isAdminBackendRole(user.role);
          const isSuperAdminTarget = user.role === "superadmin";
          return `
            <article class="admin-user-card">
              <div>
                <strong>${escapeHtml(user.full_name || user.email)}</strong>
                <span>${escapeHtml(user.email)}</span>
              </div>
              <div class="admin-user-meta">
                <span class="admin-status">${escapeHtml(status)}</span>
                <span>${escapeHtml(user.plan || "Sin plan")}</span>
                <span>Registro: ${escapeHtml(created)}</span>
                <span>Último acceso: ${escapeHtml(lastSignIn)}</span>
              </div>
              <div class="admin-user-actions">
                <button class="secondary-action mini-action" type="button" data-admin-action="activate" ${payload}>Activar licencia</button>
                <button class="secondary-action mini-action" type="button" data-admin-action="notify_access" ${payload} ${hasAccess ? "" : "disabled title=\"Activa primero la licencia\""}>Reenviar correo de acceso</button>
                <button class="secondary-action mini-action" type="button" data-admin-action="suspend" ${payload} ${isSuperAdminTarget && !currentIsSuperAdmin ? "disabled title=\"Solo super administración puede suspender otra super administradora\"" : ""}>Suspender</button>
                <button class="secondary-action mini-action" type="button" data-admin-action="make_admin" ${payload}>Hacer admin</button>
                ${currentIsSuperAdmin ? `<button class="secondary-action mini-action" type="button" data-admin-action="make_superadmin" ${payload}>Hacer super administradora</button>` : ""}
                ${currentIsSuperAdmin ? `<button class="secondary-action mini-action" type="button" data-admin-action="make_user" ${payload} ${isCurrentUser ? "disabled title=\"No puedes quitarte permisos desde aquí\"" : ""}>Hacer usuario</button>` : ""}
                <button class="secondary-action mini-action danger-action" type="button" data-admin-action="delete_user" ${payload} ${isCurrentUser || (isSuperAdminTarget && !currentIsSuperAdmin) ? "disabled title=\"No puedes eliminar esta cuenta desde aquí\"" : ""}>Eliminar</button>
              </div>
            </article>
          `;
        })
        .join("")
    : `<div class="empty-state"><strong>No hay usuarios registrados todavía.</strong></div>`;
}

async function loadAdminUsers() {
  const backend = productionBackend();
  if (!backend?.listAdminUsers) {
    showToast("El panel de administración requiere Supabase en producción.");
    return;
  }
  renderAdminBackupStatus();
  if (adminUsersSummary) adminUsersSummary.textContent = "Cargando usuarios...";
  if (adminUsersList) adminUsersList.innerHTML = "";
  try {
    const data = await backend.listAdminUsers();
    renderAdminUsers(data.users || [], data.currentAdmin || {});
  } catch (error) {
    console.warn("LexContratos admin usuarios no disponible", error);
    if (adminUsersSummary) adminUsersSummary.textContent = "No se pudieron cargar usuarios.";
    if (adminUsersList) adminUsersList.innerHTML = `<div class="empty-state"><strong>No se pudo cargar la administración.</strong><span>Revisa la configuración privada del servidor o contacta a la super administradora.</span></div>`;
  }
}

function adminBackupStorageKey() {
  return userStorageKey("last_admin_backup_date");
}

function renderAdminBackupStatus() {
  if (!adminBackupStatus) return;
  const last = localStorage.getItem(adminBackupStorageKey());
  const today = new Date().toISOString().slice(0, 10);
  adminBackupStatus.textContent = last === today
    ? "Respaldo de hoy descargado. Puedes repetirlo si hiciste cambios importantes."
    : "Pendiente de hoy: descarga una copia local de control antes de cerrar el día.";
}

async function runAdminBackup() {
  const backend = productionBackend();
  if (!backend?.downloadAdminBackup) {
    showToast("El respaldo local requiere Supabase en producción.");
    return;
  }
  if (!downloadAdminBackupButton) return;
  downloadAdminBackupButton.disabled = true;
  const originalText = downloadAdminBackupButton.textContent;
  downloadAdminBackupButton.textContent = "Preparando respaldo...";
  try {
    const { blob, filename } = await backend.downloadAdminBackup();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
    localStorage.setItem(adminBackupStorageKey(), new Date().toISOString().slice(0, 10));
    renderAdminBackupStatus();
    showToast("Respaldo local descargado. Guárdalo en una carpeta segura.");
  } catch (error) {
    console.warn("LexContratos respaldo admin no disponible", error);
    showToast("No se pudo generar el respaldo local. Revisa la configuración de administración.");
  } finally {
    downloadAdminBackupButton.disabled = false;
    downloadAdminBackupButton.textContent = originalText;
  }
}

async function runAdminCreateUser(event) {
  event.preventDefault();
  const backend = productionBackend();
  if (!backend?.updateAdminUser || !adminCreateUserForm) {
    showToast("La creación de usuarios requiere Supabase en producción.");
    return;
  }
  const payload = {
    action: "create_user",
    fullName: document.querySelector("#admin-create-name")?.value.trim(),
    email: document.querySelector("#admin-create-email")?.value.trim().toLowerCase(),
    password: document.querySelector("#admin-create-password")?.value,
    role: document.querySelector("#admin-create-role")?.value || "user"
  };
  if (!payload.fullName || !payload.email || !payload.password || payload.password.length < 8) {
    showToast("Completa nombre, correo y una contraseña temporal de al menos 8 caracteres.");
    return;
  }
  const submitButton = adminCreateUserForm.querySelector('button[type="submit"]');
  const originalText = submitButton?.textContent || "Crear usuario";
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Creando...";
  }
  try {
    const result = await backend.updateAdminUser(payload);
    adminCreateUserForm.reset();
    adminCreateUserForm.classList.add("is-hidden");
    if (adminToggleCreateUserButton) adminToggleCreateUserButton.textContent = "Crear usuario";
    await loadAdminUsers();
    showToast(
      result.activationEmailSent
        ? `Usuario creado y correo enviado a ${payload.email}.`
        : `Usuario creado. Comparte la contraseña temporal con ${payload.email} por un canal seguro.`
    );
  } catch (error) {
    console.warn("LexContratos no pudo crear usuario admin", error);
    showToast(error.message || "No se pudo crear el usuario desde administración.");
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  }
}

function toggleAdminCreateUserForm() {
  if (!adminCreateUserForm) return;
  const willOpen = adminCreateUserForm.classList.contains("is-hidden");
  adminCreateUserForm.classList.toggle("is-hidden", !willOpen);
  if (adminToggleCreateUserButton) adminToggleCreateUserButton.textContent = willOpen ? "Ocultar alta" : "Crear usuario";
  if (willOpen) document.querySelector("#admin-create-name")?.focus();
}

function openAdminTemplateCatalog() {
  adminUsersDialog?.close();
  if (!canSeeSystemCatalogs()) {
    showToast("Solo administración puede modificar los formatos del sistema.");
    return;
  }
  syncSharedTemplatesFromBackend();
  openArchiveFolder("Formatos del sistema", { announce: false });
  archiveDrawer.classList.add("open");
}

function openAdminLetterheadCatalog() {
  adminUsersDialog?.close();
  if (!canSeeSystemCatalogs()) {
    showToast("Solo administración puede modificar los membretes del sistema.");
    return;
  }
  openArchiveFolder("Catálogos del sistema/Membretes", { announce: false });
  archiveDrawer.classList.add("open");
}

async function runAdminUserAction(button) {
  const action = button.dataset.adminAction;
  const payload = {
    action,
    userId: button.dataset.userId,
    email: button.dataset.email,
    fullName: button.dataset.fullName,
    currentRole: button.dataset.currentRole
  };
  const labels = {
    activate: "activar la licencia de",
    suspend: "suspender el acceso de",
    make_admin: "hacer administrador a",
    make_superadmin: "hacer superadministradora a",
    make_user: "cambiar a usuario a",
    delete_user: "eliminar a",
    notify_access: "reenviar el correo de acceso a"
  };
  if (action === "suspend" && !window.confirm(`¿Seguro que quieres suspender el acceso de ${payload.email}?`)) return;
  if (action === "make_admin" && !window.confirm(`¿Seguro que quieres hacer administrador a ${payload.email}?`)) return;
  if (action === "make_superadmin" && !window.confirm(`¿Seguro que quieres dar permisos de super administración a ${payload.email}? Tendrá control total de usuarios y configuración.`)) return;
  if (action === "make_user" && !window.confirm(`¿Seguro que quieres dejar a ${payload.email} como usuario estándar?`)) return;
  if (action === "delete_user") {
    const confirmation = window.prompt(`Eliminar a ${payload.email} borrará su cuenta, licencia y datos asociados.\n\nPara confirmar, escribe ELIMINAR:`);
    if (confirmation !== "ELIMINAR") return;
  }

  const backend = productionBackend();
  if (!backend?.updateAdminUser) return;
  button.disabled = true;
  try {
    const result = await backend.updateAdminUser(payload);
    if (action === "delete_user") {
      showToast(`Usuario eliminado: ${payload.email}.`);
    } else if (["activate", "make_admin", "notify_access"].includes(action)) {
      showToast(
        result.activationEmailSent
          ? `Listo: ${payload.email} recibió el correo de acceso.`
          : `Listo: ${payload.email} ya tiene acceso. No se envió correo automático; avísale manualmente.`
      );
    } else {
      showToast(`Listo: se actualizó el usuario ${payload.email}.`);
    }
    await loadAdminUsers();
  } catch (error) {
    console.warn("LexContratos no pudo actualizar usuario", error);
    showToast(`No se pudo ${labels[action] || "actualizar"} ${payload.email}.`);
  } finally {
    button.disabled = false;
  }
}

function setWorkflowButtonState(button, state) {
  if (!button) return;
  ["step-current", "step-done", "step-locked", "step-ready"].forEach((className) => button.classList.remove(className));
  if (state) button.classList.add(state);
  if (state === "step-current") button.setAttribute("aria-current", "step");
  else button.removeAttribute("aria-current");
}

function updateWorkflowStepState() {
  const fillButton = document.querySelector("#fill-contract");
  const criticalButton = document.querySelector("#critical-review");
  const exportButton = document.querySelector("#export-word");
  const pdfButton = document.querySelector("#export-pdf-signature");
  const missingCount = fieldsReviewed ? missingFieldsForActiveTemplate().length : 0;
  const dataComplete = fieldsReviewed && missingCount === 0;

  setWorkflowButtonState(reviewFieldsButton, fieldsReviewed ? "step-done" : "step-current");
  setWorkflowButtonState(partyDocumentsButton, !fieldsReviewed ? "step-locked" : dataComplete || partyDocumentsStepVisited ? "step-done" : "step-current");
  setWorkflowButtonState(fillButton, !fieldsReviewed || (!partyDocumentsStepVisited && !dataComplete) ? "step-locked" : dataComplete ? "step-done" : "step-current");
  setWorkflowButtonState(criticalButton, !dataComplete ? "step-locked" : criticalReviewDone ? "step-done" : "step-current");
  setWorkflowButtonState(exportButton, criticalReviewDone ? "step-ready" : "");
  setWorkflowButtonState(pdfButton, criticalReviewDone ? "step-ready" : "");
}

function productionBackend() {
  return window.lexBackend?.enabled ? window.lexBackend : null;
}

function isLocalStaticPreview() {
  return window.location.protocol === "file:" || /^(127\.0\.0\.1|localhost)$/i.test(window.location.hostname);
}

function documentNeedsAiExtraction(entry) {
  return /\.(xlsx?|pdf|docx?|jpe?g|png|webp|tiff?)$/i.test(entry?.name || "") && !entry?.text;
}

function uploadedDocumentsNeedingAi() {
  return Object.values(sourceTextsBySide).flat().filter(documentNeedsAiExtraction);
}

function backendAccessLocked() {
  return Boolean(window.lexBackend?.locked);
}

async function activeApiHeaders() {
  const backend = productionBackend();
  if (!backend?.supabase?.auth) return {};
  const {
    data: { session }
  } = await backend.supabase.auth.getSession();
  return session?.access_token ? { authorization: `Bearer ${session.access_token}` } : {};
}

function reportBackendError(action, error) {
  console.error(`LexContratos ${action}`, error);
  showToast(`No se pudo completar ${action}. Intenta nuevamente o contacta al administrador.`);
}

document.querySelector("#contact-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const submitButton = form.querySelector("button[type='submit']");
  const payload = Object.fromEntries(new FormData(form).entries());
  if (!String(payload.email || "").includes("@")) {
    showToast("Ingresa un correo válido para poder contactarte.");
    return;
  }
  try {
    if (submitButton) submitButton.disabled = true;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error(await response.text());
    form.reset();
    showToast("Recibimos tu solicitud. Revisaremos tu acceso y te contactaremos.");
  } catch (error) {
    console.warn("LexContratos contacto no disponible", error);
    showToast("No pudimos enviar la solicitud. Intenta nuevamente o escribe a contacto@lexcontratos.com.");
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
});

function sanitizeFilename(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "contrato";
}

function cleanWorkingTitle(title) {
  return title.replace(/\s+-\s+copia(?:\s+de\s+trabajo)?$/i, "").trim();
}

function codeFromParty(value, fallback) {
  const source = removeAccents(value || fallback || "PARTE")
    .toUpperCase()
    .replace(/\b(SA|SAPI|SAS|SRL|SC|AC|CV|DE|DEL|LA|EL|Y|THE|INC|LLC|SOCIEDAD|ANONIMA|CAPITAL|VARIABLE|RESPONSABILIDAD|LIMITADA)\b/g, " ")
    .replace(/[^A-Z0-9\s]/g, " ")
    .trim();
  const words = source.split(/\s+/).filter(Boolean);
  if (!words.length) return "PARTE";
  if (words.length === 1) return words[0].slice(0, 8);
  return words.map((word) => word.slice(0, 2)).join("").slice(0, 8);
}

function typeCodeForTemplate(key = activeTemplate) {
  const title = removeAccents(cleanWorkingTitle(templates[key]?.title || editorTitle.textContent || "")).toUpperCase();
  const map = {
    prestacionDemandaEjemplo: "PS",
    services: "PS",
    professional_services: "PSP",
    lease: "AR",
    purchase: "CV",
    nda: "NDA",
    trust: "FID",
    supply: "SM",
    commission: "CM",
    mandate: "MAN",
    loan: "MT",
    distribution: "DIS",
    agency: "AG",
    work_contract: "OB",
    rights_assignment: "CD",
    license_use: "LU",
    franchise: "FR",
    partnership: "SOC",
    association: "AP",
    amendment: "MOD",
    termination_agreement: "TER",
    debt_acknowledgment: "RA"
  };
  if (map[key]) return map[key];
  if (title.includes("PRESTACION")) return "PS";
  if (title.includes("ARRENDAMIENTO") || title.includes("RENTA")) return "AR";
  if (title.includes("COMPRAVENTA")) return "CV";
  if (title.includes("CONFIDENCIALIDAD") || title.includes("NDA")) return "NDA";
  if (title.includes("FIDEICOMISO")) return "FID";
  if (title.includes("SUMINISTRO")) return "SM";
  if (title.includes("MUTUO")) return "MT";
  return toCamelCase(title).slice(0, 3).toUpperCase() || "CON";
}

function matterBaseCode() {
  const values = getPartyData();
  const roles = getRoles();
  const partA = codeFromParty(values.parteA, roles[0]?.label || "Contratante");
  const partB = codeFromParty(values.parteB, roles[1]?.label || "Contraparte");
  const year = new Date().getFullYear();
  return `${partA}-${partB}-${year}-${typeCodeForTemplate()}`;
}

function nextMatterSequence(base) {
  const existing = savedContracts
    .map((contract) => contract.matter?.folio || contract.folio || "")
    .filter((folio) => folio.startsWith(`${base}-`));
  const max = existing.reduce((current, folio) => {
    const number = Number(folio.split("-").pop());
    return Number.isFinite(number) ? Math.max(current, number) : current;
  }, 0);
  return String(max + 1).padStart(3, "0");
}

function ensureDraftMatterId() {
  if (!activeMatterDraftId) activeMatterDraftId = `BORRADOR-${Date.now().toString(36).toUpperCase()}`;
  return activeMatterDraftId;
}

function visibleMatterCode() {
  return activeMatterFolio || "Borrador sin folio final";
}

function previewMatterFolio() {
  if (activeMatterFolio) return activeMatterFolio;
  const base = matterBaseCode();
  return `${base}-${nextMatterSequence(base)}`;
}

function ensureMatterFolio() {
  if (!activeMatterFolio) activeMatterFolio = previewMatterFolio();
  return activeMatterFolio;
}

function classifySupportDocument(fileName) {
  const clean = removeAccents(fileName).toLowerCase();
  if (clean.includes("acta")) return "Acta constitutiva";
  if (clean.includes("constancia") || clean.includes("csf") || clean.includes("situacion fiscal")) return "Constancia de situación fiscal";
  if (clean.includes("poder")) return "Poder del representante legal";
  if (clean.includes("ine") || clean.includes("identificacion") || clean.includes("id")) return "Identificación oficial";
  if (clean.includes("domicilio")) return "Comprobante de domicilio";
  if (clean.includes("correo") || clean.includes("mail") || clean.endsWith(".eml")) return "Correo o comunicación";
  if (clean.endsWith(".xls") || clean.endsWith(".xlsx") || clean.endsWith(".csv")) return "Base de datos o Excel";
  if (clean.endsWith(".pdf")) return "PDF soporte";
  if (clean.endsWith(".doc") || clean.endsWith(".docx")) return "Word soporte";
  if (clean.endsWith(".jpg") || clean.endsWith(".jpeg") || clean.endsWith(".png") || clean.endsWith(".webp")) return "Imagen soporte";
  return "Documento soporte";
}

function addMatterEvent(label) {
  matterHistoryEvents.push({
    label,
    date: new Date().toLocaleString("es-MX")
  });
  matterHistoryEvents = matterHistoryEvents.slice(-8);
  renderMatterPanel();
}

function matterSnapshot(status = "En preparación", lock = false) {
  const values = getPartyData();
  const required = requiredFieldsForActiveTemplate();
  const completed = required.filter(([name]) => String(values[name] || "").trim()).length;
  return {
    folio: lock ? ensureMatterFolio() : (activeMatterFolio || ""),
    draftId: ensureDraftMatterId(),
    displayCode: lock ? ensureMatterFolio() : visibleMatterCode(),
    status,
    folder: activeFolder,
    contractTitle: cleanWorkingTitle(editorTitle.textContent),
    roles: getRoles().map((role) => ({
      label: role.label,
      party: values[role.part] || role.label,
      documents: (sourceTextsBySide[role.side] || []).map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type || classifySupportDocument(file.name)
      }))
    })),
    validatedData: {
      completed,
      total: required.length,
      missing: Math.max(required.length - completed, 0)
    },
    history: matterHistoryEvents.slice()
  };
}

function renderMatterPanel() {
  if (!matterFolio || !matterTree || !matterHistory) return;
  const folio = visibleMatterCode();
  matterFolio.textContent = folio;
  const values = getPartyData();
  const required = requiredFieldsForActiveTemplate();
  const completed = required.filter(([name]) => String(values[name] || "").trim()).length;
  const events = matterHistoryEvents.map((event) => event.label).join(" ");
  const contractFiles = [
    "Contrato editable",
    events.includes("Word") ? "Contrato exportado Word" : "Word pendiente",
    activeMatterFolio ? `Folio final: ${activeMatterFolio}` : "Folio final pendiente",
    events.includes("firma") || events.includes("Firma") ? "Paquete de firma preparado" : "Firma pendiente",
    "Contrato firmado pendiente"
  ];

  matterTree.innerHTML = `
    <strong>Contenido del expediente</strong>
    <span>Los documentos que cargues para cada parte se guardarán dentro del expediente de este contrato, clasificados por rol.</span>
    ${getRoles()
      .map((role) => {
        const files = sourceTextsBySide[role.side] || [];
        const docs = files.length
          ? files.map((file) => `<li>${file.type || classifySupportDocument(file.name)} · ${file.name}</li>`).join("")
          : `<li>Documentos soporte pendientes</li>`;
        return `<span>/${role.label}</span><ul>${docs}</ul>`;
      })
      .join("")}
    <span>/Contrato</span>
    <ul>${contractFiles.map((item) => `<li>${item}</li>`).join("")}</ul>
    <span>Datos extraídos: ${completed}/${required.length} validados</span>
  `;

  matterHistory.innerHTML = `
    <strong>Historial</strong>
    <ul>${
      matterHistoryEvents.length
        ? matterHistoryEvents.map((event) => `<li>${event.date} · ${event.label}</li>`).join("")
        : `<li>Expediente en preparación</li>`
    }</ul>
  `;
}

function getPartyData() {
  const visibleValues = Object.fromEntries(new FormData(partyForm).entries());
  const safeValues = {};
  Object.entries(visibleValues).forEach(([name, value]) => {
    const cleanValue = String(value || "").trim();
    if (cleanValue || !String(partyDataStore[name] || "").trim()) safeValues[name] = value;
  });
  partyDataStore = { ...partyDataStore, ...safeValues };
  return { ...partyDataStore };
}

function normalizeSignatureNameFields(body) {
  return String(body || "").replace(
    /Nombre:\s*\{\{nombreFirma\}\}\s*\nRepresentante legal\s*\n\s*Nombre:\s*\{\{nombreFirma\}\}\s*\nRepresentante legal/gi,
    "Nombre: {{repA}}\nRepresentante legal\n\nNombre: {{repB}}\nRepresentante legal"
  );
}

function fillPlaceholders(text) {
  const values = getPartyData();
  return normalizeSignatureNameFields(text).replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] || `{{${key}}}`);
}

function integrateKnownDataIntoContract(reason = "Datos integrados al contrato") {
  if (!isWorkingCopy || !editor.value.trim()) return 0;
  criticalReviewDone = false;
  const values = getPartyData();
  const filledKeys = new Set(
    Array.from(editor.value.matchAll(/\{\{(\w+)\}\}/g))
      .map((match) => match[1])
      .filter((key) => String(values[key] || "").trim())
  );
  if (!filledKeys.size) return 0;
  editor.value = fillPlaceholders(editor.value);
  renderDynamicFields();
  renderCustomFields();
  renderRequirements();
  renderMatterPanel();
  if (!missingFieldsForActiveTemplate().length) assistantPane.classList.remove("open");
  autoSaveVersion("manual");
  saveActiveDraft(reason);
  return filledKeys.size;
}

function roleLabelIsGeneric(label) {
  const clean = removeAccents(String(label || ""))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
  return !clean || /^parte\s*[ab]$/.test(clean) || clean === "parte";
}

function roleLabelFromAlias(alias) {
  const clean = String(alias || "")
    .replace(/[“”"']/g, "")
    .replace(/\b(el|la|los|las)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!clean) return "";
  return clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase();
}

function contractSearchText(key) {
  const template = templates[key] || baseTemplates[key] || {};
  return [template.title, template.category, template.description, template.body].filter(Boolean).join("\n");
}

function aliasForSide(text, marker) {
  const patterns = [
    new RegExp(`\\{\\{${marker}\\}\\}[\\s\\S]{0,220}?COMO\\s+[“"']?\\s*(?:EL|LA|LOS|LAS)?\\s*([A-ZÁÉÍÓÚÑa-záéíóúñ ]{3,60})`, "i"),
    new RegExp(`\\{\\{${marker}\\}\\}[\\s\\S]{0,260}?DENOMINAR(?:A|Á)\\s+[“"']?\\s*(?:EL|LA|LOS|LAS)?\\s*([A-ZÁÉÍÓÚÑa-záéíóúñ ]{3,60})`, "i")
  ];
  for (const pattern of patterns) {
    const match = text.match(pattern);
    const label = roleLabelFromAlias(match?.[1] || "");
    if (label && !/representada|representante|caracter|sucesivo|conjunto|parte/i.test(label)) return label;
  }
  return "";
}

const roleKeywordPairs = [
  { left: "Cliente", right: "Prestador de servicios", leftRx: /\bcliente\b/, rightRx: /\bprestador(?:a)?(?:\s+de\s+servicios)?\b/ },
  { left: "Cliente", right: "Proveedor", leftRx: /\bcliente\b/, rightRx: /\bproveedor(?:a)?\b/ },
  { left: "Comprador", right: "Vendedor", leftRx: /\bcomprador(?:a)?\b/, rightRx: /\bvendedor(?:a)?\b/ },
  { left: "Arrendatario", right: "Arrendador", leftRx: /\barrendatario\b/, rightRx: /\barrendador\b/ },
  { left: "Comodatario", right: "Comodante", leftRx: /\bcomodatari[oa]\b/, rightRx: /\bcomodante\b/ },
  { left: "Mutuario", right: "Mutuante", leftRx: /\bmutuario\b/, rightRx: /\bmutuante\b/ },
  { left: "Mandante", right: "Mandatario", leftRx: /\bmandante\b/, rightRx: /\bmandatario\b/ },
  { left: "Contratante", right: "Contratista", leftRx: /\bcontratante\b/, rightRx: /\bcontratista\b/ },
  { left: "Comitente", right: "Comisionista", leftRx: /\bcomitente\b/, rightRx: /\bcomisionista\b/ },
  { left: "Distribuidor", right: "Fabricante", leftRx: /\bdistribuidor(?:a)?\b/, rightRx: /\bfabricante\b/ },
  { left: "Licenciatario", right: "Licenciante", leftRx: /\blicenciatario\b/, rightRx: /\blicenciante\b/ },
  { left: "Franquiciatario", right: "Franquiciante", leftRx: /\bfranquiciatario\b/, rightRx: /\bfranquiciante\b/ },
  { left: "Cesionario", right: "Cedente", leftRx: /\bcesionario\b/, rightRx: /\bcedente\b/ },
  { left: "Deudor", right: "Acreedor", leftRx: /\bdeudor(?:a)?\b/, rightRx: /\bacreedor(?:a)?\b/ },
  { left: "Parte receptora", right: "Parte reveladora", leftRx: /\bparte\s+receptora\b|\breceptor(?:a)?\b/, rightRx: /\bparte\s+reveladora\b|\brevelador(?:a)?\b/ },
  { left: "Poderdante", right: "Apoderado", leftRx: /\bpoderdante\b/, rightRx: /\bapoderad[oa]\b/ },
  { left: "Titular de datos", right: "Responsable", leftRx: /\btitular(?:\s+de\s+datos)?\b/, rightRx: /\bresponsable\b/ }
];

function roleLabelsFromKeywords(text) {
  const clean = removeAccents(String(text || "")).toLowerCase();
  const exactPair = roleKeywordPairs.find((pair) => pair.leftRx.test(clean) && pair.rightRx.test(clean));
  if (exactPair) return [exactPair.left, exactPair.right];
  return [];
}

function inferredRoleLabels(key) {
  const text = contractSearchText(key);
  const aliasA = aliasForSide(text, "parteA");
  const aliasB = aliasForSide(text, "parteB");
  if (aliasA && aliasB) return [aliasA, aliasB];

  const keywordLabels = roleLabelsFromKeywords(text);
  if (keywordLabels.length) return keywordLabels;

  const clean = removeAccents(text).toLowerCase();
  if (/prestacion de servicios|servicios profesionales|servicio bajo demanda|logistica|almacenamiento|garantia de servicios/.test(clean)) {
    return ["Cliente", "Prestador de servicios"];
  }
  if (/compraventa|compra venta|venta de bienes|venta de mercancia|automovil|medicamento/.test(clean)) {
    return ["Vendedor", "Comprador"];
  }
  if (/arrendamiento|renta/.test(clean)) return ["Arrendador", "Arrendatario"];
  if (/comodato/.test(clean)) return ["Comodante", "Comodatario"];
  if (/mandato/.test(clean)) return ["Mandante", "Mandatario"];
  if (/mutuo|prestamo/.test(clean)) return ["Mutuante", "Mutuario"];
  if (/reconocimiento de adeudo|adeudo|cesion de derechos de cobro/.test(clean)) return ["Acreedor", "Deudor"];
  if (/suministro/.test(clean)) return ["Comprador", "Proveedor"];
  if (/distribucion/.test(clean)) return ["Fabricante", "Distribuidor"];
  if (/comision mercantil/.test(clean)) return ["Comitente", "Comisionista"];
  if (/confidencialidad|nda/.test(clean)) return ["Parte reveladora", "Parte receptora"];
  if (/franquicia/.test(clean)) return ["Franquiciante", "Franquiciatario"];
  if (/licencia de uso/.test(clean)) return ["Licenciante", "Licenciatario"];
  if (/obra/.test(clean)) return ["Contratante", "Contratista"];
  return ["Parte izquierda", "Parte derecha"];
}

function roleLabelsForTemplate(key) {
  const template = templates[key] || baseTemplates[key] || {};
  const explicit = template.roleLabels || template.roles || template.partyRoles || [];
  if (explicit.length >= 2 && !explicit.some(roleLabelIsGeneric)) return explicit.slice(0, 2);
  const configured = roleLabels[key] || [];
  if (configured.length >= 2 && !configured.some(roleLabelIsGeneric)) return configured;
  return inferredRoleLabels(key);
}

function getRoles(key = activeTemplate) {
  const [labelA, labelB] = roleLabelsForTemplate(key);
  return [
    { side: "A", label: labelA, part: "parteA" },
    { side: "B", label: labelB, part: "parteB" }
  ];
}

function roleUploadPriority(role) {
  const label = removeAccents(role?.label || "").toLowerCase();
  if (
    /cliente|comprador|arrendatario|contratante|comitente|mandante|principal|responsable|fideicomitente|mutuario|distribuidor|licenciatario|franquiciatario|cesionario|deudor|comodatario|parte receptora|promitente comprador|socio inversionista/.test(label)
  ) {
    return 0;
  }
  if (
    /prestador|proveedor|vendedor|desarrollador|profesionista|arrendador|contratista|comisionista|mandatario|encargado|fiduciario|fabricante|agente|licenciante|franquiciante|cedente|acreedor|comodante|parte reveladora|promitente vendedor|socio operativo/.test(label)
  ) {
    return 1;
  }
  return role?.side === "B" ? 0 : 1;
}

function documentUploadRoles() {
  return getRoles()
    .map((role, index) => ({ ...role, originalIndex: index }))
    .sort((left, right) => roleUploadPriority(left) - roleUploadPriority(right) || left.originalIndex - right.originalIndex);
}

function documentRoleHint(role) {
  const priority = roleUploadPriority(role);
  return priority === 0
    ? "Parte que recibe, compra, contrata, usa o paga según este formato."
    : "Parte que entrega, vende, presta, arrienda, representa o cobra según este formato.";
}

function domicileFieldForRole(role) {
  return roleUploadPriority(role) === 0 ? "domicilioCliente" : "domicilioPrestador";
}

function domicileFieldForSide(side) {
  const role = getRoles().find((item) => item.side === side);
  return domicileFieldForRole(role || { side });
}

function fieldsForRole(role) {
  const side = role.side;
  const domicileField = domicileFieldForRole(role);
  const fields = [
    [`parte${side}`, `Razón social o nombre de ${role.label}`],
    [`tipo${side}`, `Tipo societario de ${role.label}`],
    [`rep${side}`, `Representante legal de ${role.label}`],
    [`rfc${side}`, `RFC de ${role.label}`],
    [`tipoInstrumentoConstitutivo${side}`, `Tipo de instrumento constitutivo de ${role.label}`],
    [`escritura${side}`, `Instrumento constitutivo de ${role.label} (escritura, póliza o acta)`],
    [`tipoFedatarioConstitutivo${side}`, `Tipo de fedatario constitutivo de ${role.label}`],
    [`folio${side}`, `Folio mercantil de ${role.label}`],
    [`fechaConstitucion${side}`, `Fecha de constitución de ${role.label}`],
    [`tipoInstrumentoPoder${side}`, `Tipo de instrumento de poderes de ${role.label}`],
    [`poder${side}`, `Instrumento de poderes de ${role.label} (escritura, póliza o acta)`],
    [`tipoFedatarioPoder${side}`, `Tipo de fedatario de poderes de ${role.label}`],
    [`notario${side}`, `Fedatario de poderes de ${role.label} (notario o corredor)`],
    [domicileField, `Domicilio de ${role.label}`]
  ];
  const names = fieldNamesInText(editor?.value || templates[activeTemplate]?.body || "");
  const roleFields = fields.filter(([name]) => names.has(name));
  const customRoleFields = (templates[activeTemplate]?.customFields || [])
    .filter((field) => field?.roleSide === side && names.has(field.name))
    .map((field) => [field.name, field.label]);
  return [...roleFields, ...customRoleFields].filter(
    ([name], index, list) => list.findIndex(([candidate]) => candidate === name) === index
  );
}

function requiredFieldsForActiveTemplate() {
  const roleFields = getRoles().flatMap(fieldsForRole);
  const templateNames = fieldNamesInText(editor?.value || templates[activeTemplate]?.body || "");
  const customRequired = (templates[activeTemplate]?.customFields || [])
    .filter((field) => templateNames.has(field.name))
    .map((field) => [field.name, field.label]);
  return [...roleFields, ...customRequired].filter(
    ([name], index, list) => list.findIndex(([candidate]) => candidate === name) === index
  );
}

function missingFieldsForActiveTemplate() {
  const values = getPartyData();
  return requiredFieldsForActiveTemplate().filter(([name]) => !String(values[name] || "").trim());
}

function removeAccents(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function toCamelCase(value) {
  const words = removeAccents(value)
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  if (!words.length) return "campo";
  return words[0] + words.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
}

function labelFromName(name) {
  return name
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase())
    .trim();
}

function fieldNameFromLabel(label) {
  const clean = removeAccents(label).toUpperCase();
  const side = clean.includes("PRESTADOR") || clean.includes("PROVEEDOR") || clean.includes("ARRENDADOR") || clean.includes("VENDEDOR") || clean.includes("MUTUANTE") || clean.includes("DESARROLLADOR") || clean.includes("COMITENTE") || clean.includes("MANDANTE") ? "A" : clean.includes("CLIENTE") || clean.includes("CONTRATANTE") || clean.includes("ARRENDATARIO") || clean.includes("COMPRADOR") || clean.includes("MUTUARIO") || clean.includes("DISTRIBUIDOR") || clean.includes("COMISIONISTA") || clean.includes("MANDATARIO") ? "B" : "";

  if (side && (clean.includes("DENOMINACION SOCIAL") || clean.includes("RAZON SOCIAL"))) return `parte${side}`;
  if (side && clean.includes("REPRESENTANTE LEGAL")) return `rep${side}`;
  if (side && clean.includes("RFC")) return `rfc${side}`;
  if (side && clean.includes("DOMICILIO")) return side === "A" ? "domicilioPrestador" : "domicilioCliente";
  if (side && clean.includes("TIPO DE INSTRUMENTO CONSTITUTIVO")) return `tipoInstrumentoConstitutivo${side}`;
  if (side && (clean.includes("ESCRITURA CONSTITUTIVA") || clean.includes("INSTRUMENTO CONSTITUTIVO") || clean.includes("POLIZA") || clean.includes("ACTA"))) return `escritura${side}`;
  if (side && clean.includes("TIPO DE FEDATARIO CONSTITUTIVO")) return `tipoFedatarioConstitutivo${side}`;
  if (side && clean.includes("FECHA DE CONSTITUCION")) return `fechaConstitucion${side}`;
  if (side && clean.includes("FOLIO MERCANTIL")) return `folio${side}`;
  if (side && clean.includes("TIPO DE INSTRUMENTO DE PODER")) return `tipoInstrumentoPoder${side}`;
  if (side && (clean.includes("ESCRITURA DE PODER") || clean.includes("INSTRUMENTO DE PODER"))) return `poder${side}`;
  if (side && clean.includes("TIPO DE FEDATARIO DE PODER")) return `tipoFedatarioPoder${side}`;
  if (side && (clean.includes("NOTARIO DE PODER") || clean.includes("FEDATARIO DE PODER") || clean.includes("CORREDOR"))) return `notario${side}`;
  if (side && clean.includes("CORREO")) return side === "A" ? "correoPrestador" : "correoCliente";
  if (clean.includes("IMPORTE EN NUMERO")) return "importeNumero";
  if (clean.includes("IMPORTE EN LETRA")) return "importeLetra";
  if (clean === "DIA") return "diaFirma";
  if (clean === "MES") return "mesFirma";
  if (clean === "ANO") return "anioFirma";

  return toCamelCase(label);
}

function fieldNamesInText(text) {
  return new Set(Array.from(normalizeSignatureNameFields(text).matchAll(/\{\{(\w+)\}\}/g)).map((match) => match[1]));
}

function prepareTemplateFields(body, existingFields = []) {
  const fieldMap = new Map(existingFields.map((field) => [field.name, field]));
  let preparedBody = normalizeSignatureNameFields(body).replace(/\[([^\]]{1,100})\]/g, (match, rawLabel) => {
    const label = rawLabel.trim();
    if (!label || label === "●") return match;
    const name = fieldNameFromLabel(label);
    if (!fieldMap.has(name)) fieldMap.set(name, { name, label: label.charAt(0).toUpperCase() + label.slice(1).toLowerCase() });
    return `{{${name}}}`;
  });

  Array.from(preparedBody.matchAll(/\{\{(\w+)\}\}/g)).forEach((match) => {
    const name = match[1];
    if (!fieldMap.has(name)) fieldMap.set(name, { name, label: labelFromName(name) });
  });

  const names = fieldNamesInText(preparedBody);
  const fields = Array.from(fieldMap.values()).filter((field) => names.has(field.name));
  return { body: preparedBody, fields };
}

function normalizeTemplateCatalogPath(value, fallback = "Formatos generales") {
  const clean = String(value || "")
    .split("/")
    .map((part) => part.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join(" / ");
  return clean || fallback;
}

function templateCatalogPath(template = {}) {
  return normalizeTemplateCatalogPath(template.catalogPath || template.folder || template.category || "Formatos generales");
}

function loadTemplateCatalogFolders() {
  const saved = readJson(userStorageKey("template_catalog_folders"), []);
  const existing = Object.values(templates || {})
    .filter((template) => template?.master)
    .map(templateCatalogPath);
  return Array.from(new Set([...saved, ...existing, "Arrendamientos", "NDA", "Prestación de servicios"]))
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, "es"));
}

function saveTemplateCatalogFolders() {
  localStorage.setItem(userStorageKey("template_catalog_folders"), JSON.stringify(templateCatalogFolders));
}

function catalogPathToSystemFolder(path) {
  return "Formatos del sistema";
}

function systemFolderToCatalogPath(folder) {
  return String(folder || "") === "Formatos del sistema" ? "Formatos generales" : "";
}

function syncSystemCatalogFolders() {
  refreshRootFolders();
  if (!canSeeSystemCatalogs()) {
    folders = folders.filter((folder) => !isSystemRoot(folder));
    return;
  }
  templateCatalogFolders = loadTemplateCatalogFolders();
  const dynamicFolders = ["Formatos del sistema", "Catálogos del sistema", "Catálogos del sistema/Membretes"];
  folders = Array.from(new Set([...folders.filter((folder) => !folder.startsWith("Formatos del sistema/")), ...dynamicFolders]));
}

function ensureTemplateCatalogFolder(path) {
  const clean = normalizeTemplateCatalogPath(path);
  if (!templateCatalogFolders.includes(clean)) {
    templateCatalogFolders.push(clean);
    templateCatalogFolders.sort((a, b) => a.localeCompare(b, "es"));
    saveTemplateCatalogFolders();
  }
  return clean;
}

function promptTemplateCatalogPath(defaultPath = "Formatos generales") {
  const examples = "Ejemplos: Arrendamientos / Maquinaria, NDA / Proveedores, Prestación de servicios / Persona moral";
  const path = window.prompt(`Carpeta del catálogo de formatos.\n\n${examples}`, defaultPath);
  if (!path || !path.trim()) return null;
  return ensureTemplateCatalogFolder(path);
}

function isCatalogBaseTemplate(templateKey) {
  return Boolean(baseTemplates[templateKey] || extendedTemplates[templateKey] || (window.lexImportedTemplates || {})[templateKey]);
}

function canManageSharedCatalog() {
  return canSeeSystemCatalogs();
}

function canManageTemplateCatalog(templateKey) {
  const template = templates[templateKey];
  if (!template?.master) return false;
  return Boolean(template.personal || template.shared || !isCatalogBaseTemplate(templateKey) || canManageSharedCatalog());
}

function requiresSystemTemplateConfirmation(templateKey) {
  const template = templates[templateKey];
  return Boolean(template?.shared || isCatalogBaseTemplate(templateKey));
}

function confirmSystemTemplateChange(action, templateKey) {
  if (!requiresSystemTemplateConfirmation(templateKey)) return true;
  const title = templates[templateKey]?.title || "este formato";
  return window.confirm(`¿Estás segura de que quieres ${action} un archivo del sistema?\n\n${title}\n\nEste cambio puede afectar los formatos base que usará el equipo.`);
}

function setCatalogEditMode(templateKey = null) {
  activeCatalogEditKey = templateKey;
  saveCatalogTemplateButton?.classList.toggle("is-hidden", !templateKey);
  saveVersionButton?.classList.toggle("is-hidden", Boolean(templateKey));
  editor?.classList.toggle("catalog-edit-mode", Boolean(templateKey));
}

function persistManagedTemplate(templateKey, action = "save") {
  const template = templates[templateKey];
  if (!template) return;
  if (canManageSharedCatalog() && (template.shared || isCatalogBaseTemplate(templateKey))) {
    template.shared = true;
    template.personal = false;
    saveSharedMasterTemplate(templateKey, template, action);
    return;
  }
  saveMasterTemplates();
}

function renderTemplateFolderFilter() {
  if (!templateFolderFilter) return;
  templateCatalogFolders = loadTemplateCatalogFolders();
  if (activeTemplateCatalogFolder !== "Todos" && !templateCatalogFolders.includes(activeTemplateCatalogFolder)) {
    activeTemplateCatalogFolder = "Todos";
  }
  templateFolderFilter.innerHTML = `
    <option value="Todos">Todos</option>
    ${templateCatalogFolders.map((folder) => `<option value="${escapeHtml(folder)}">${escapeHtml(folder)}</option>`).join("")}
  `;
  templateFolderFilter.value = activeTemplateCatalogFolder;
}

function createTemplateCatalogFolder() {
  const path = promptTemplateCatalogPath(activeTemplateCatalogFolder === "Todos" ? "Arrendamientos / Maquinaria" : `${activeTemplateCatalogFolder} / Nueva subcarpeta`);
  if (!path) return;
  activeTemplateCatalogFolder = path;
  renderTemplates();
  showToast(`Carpeta de formatos creada: ${path}.`);
}

function renameMasterTemplate(templateKey) {
  const template = templates[templateKey];
  if (!template?.master) return;
  if (!canManageTemplateCatalog(templateKey)) {
    showToast("Solo una administradora puede renombrar formatos del catálogo general.");
    return;
  }
  if (!confirmSystemTemplateChange("renombrar", templateKey)) return;
  const name = window.prompt("Nuevo nombre del formato", template.title || "Formato");
  if (!name || !name.trim()) return;
  template.title = name.trim();
  template.personal = template.personal || !baseTemplates[templateKey];
  persistManagedTemplate(templateKey);
  syncSystemCatalogFolders();
  renderFolders();
  renderTemplates();
  showToast("Nombre del formato actualizado en tu catálogo.");
}

function editMasterTemplate(templateKey) {
  const template = templates[templateKey];
  if (!template?.master) return;
  if (!canManageTemplateCatalog(templateKey)) {
    showToast("Solo una administradora puede editar formatos del catálogo general.");
    return;
  }
  if (!confirmSystemTemplateChange("editar", templateKey)) return;
  if (templatePicker.open) templatePicker.close();
  activeTemplate = templateKey;
  activeSourceMaster = templateKey;
  isWorkingCopy = false;
  setCatalogEditMode(templateKey);
  editorTitle.textContent = template.title;
  selectedCategory.textContent = templateCatalogPath(template);
  selectedDescription.textContent = "Editando formato base del catálogo. Los cambios afectarán las próximas copias que se creen desde este formato.";
  editor.value = normalizeSignatureNameFields(template.body || "");
  editor.readOnly = false;
  autosaveStatus.textContent = "Editando formato base";
  autosaveStatus.classList.remove("autosave-highlight");
  if (renameTemplateButton) {
    renameTemplateButton.textContent = "Renombrar formato";
    renameTemplateButton.title = "Cambia el nombre del formato base del catálogo.";
  }
  setFieldsReviewedState(false);
  sourceTextsBySide = { A: [], B: [] };
  partyDocumentsStepVisited = false;
  renderTemplates();
  renderDynamicFields();
  renderCustomFields();
  renderRoleDrops();
  renderRequirements();
  showToast("Edita el formato base y usa “Guardar cambios al catálogo” al terminar.");
}

function saveCatalogTemplateEdits() {
  if (!activeCatalogEditKey) {
    showToast("Primero abre un formato del catálogo en modo edición.");
    return;
  }
  const template = templates[activeCatalogEditKey];
  if (!template?.master || !canManageTemplateCatalog(activeCatalogEditKey)) {
    showToast("No tienes permisos para guardar cambios en este formato base.");
    return;
  }
  if (!confirmSystemTemplateChange("guardar cambios en", activeCatalogEditKey)) return;
  const body = editor.value.trim();
  if (!body) {
    showToast("El formato no puede quedar vacío.");
    return;
  }
  const prepared = prepareTemplateFields(body, template.customFields || []);
  template.body = prepared.body;
  template.customFields = prepared.fields;
  template.fields = prepared.fields.length;
  template.category = templateCatalogPath(template);
  template.catalogPath = templateCatalogPath(template);
  template.master = true;
  persistManagedTemplate(activeCatalogEditKey);
  editor.value = prepared.body;
  setFieldsReviewedState(true);
  syncSystemCatalogFolders();
  renderFolders();
  renderTemplates();
  renderDynamicFields();
  renderCustomFields();
  renderRequirements();
  autosaveStatus.textContent = "Formato base guardado";
  autosaveStatus.classList.add("autosave-highlight");
  showToast(`Formato actualizado en el catálogo con ${prepared.fields.length} campo${prepared.fields.length === 1 ? "" : "s"} editable${prepared.fields.length === 1 ? "" : "s"}.`);
}

function moveMasterTemplate(templateKey) {
  const template = templates[templateKey];
  if (!template?.master) return;
  if (!canManageTemplateCatalog(templateKey)) {
    showToast("Solo una administradora puede mover formatos del catálogo general.");
    return;
  }
  if (!confirmSystemTemplateChange("mover", templateKey)) return;
  const path = promptTemplateCatalogPath(templateCatalogPath(template));
  if (!path) return;
  template.catalogPath = path;
  template.category = path;
  template.personal = template.personal || !baseTemplates[templateKey];
  persistManagedTemplate(templateKey);
  activeTemplateCatalogFolder = path;
  syncSystemCatalogFolders();
  activeFolder = catalogPathToSystemFolder(path);
  renderFolders();
  renderTemplates();
  showToast(`Formato movido a ${path}.`);
}

function deleteMasterTemplate(templateKey) {
  const template = templates[templateKey];
  if (!template?.master) return;
  if (!canManageTemplateCatalog(templateKey)) {
    showToast("Solo una administradora puede quitar formatos del catálogo general.");
    return;
  }
  if (!confirmSystemTemplateChange("quitar", templateKey)) return;
  const confirmed = window.confirm(`¿Seguro que quieres quitar este formato del catálogo?\n\n${template.title}\n\nNo se borran contratos ya guardados con base en este formato.`);
  if (!confirmed) return;
  if (canManageSharedCatalog() && isCatalogBaseTemplate(templateKey)) {
    templates[templateKey] = { ...template, hidden: true, shared: true };
    saveSharedMasterTemplate(templateKey, templates[templateKey], "hide");
  } else {
    delete templates[templateKey];
    saveMasterTemplates();
  }
  if (activeTemplate === templateKey) clearWorkspaceState();
  syncSystemCatalogFolders();
  renderFolders();
  renderTemplates();
  showToast("Formato quitado del catálogo.");
}

function renderTemplates() {
  const query = templateSearch.value.trim().toLowerCase();
  activeTemplateCatalogFolder = "Todos";
  const filtered = Object.entries(templates).filter(([, template]) => {
    if (!template.master) return false;
    const haystack = `${template.title} ${template.description} ${template.category} ${templateCatalogPath(template)}`.toLowerCase();
    return haystack.includes(query);
  });

  templateGrid.innerHTML = filtered
    .map(([key, template]) => {
      const canManage = canManageTemplateCatalog(key);
      const catalogLabel = template.validatedLabel
        ? `Formato validado · ${escapeHtml(template.validatedLabel)}`
        : template.shared
          ? "Catálogo general editable"
          : template.personal
            ? "Documento base propio"
            : canManageSharedCatalog()
              ? "Formato del catálogo general"
              : "Formato base del catálogo";
      return `
      <article class="template-card ${key === activeTemplate ? "selected" : ""}" data-template="${key}">
        <h2>${template.title}</h2>
        <p>Formato del sistema · ${template.fields} campos</p>
        <footer>
          <span>${catalogLabel}</span>
          <div class="template-card-actions">
            <button class="ghost-button use-template" type="button" data-template-action="use" title="Crear una copia de trabajo desde este formato.">Usar</button>
            ${canManage ? `<button class="ghost-button" type="button" data-template-action="edit" title="Editar el texto y los campos del formato base.">Editar</button>` : ""}
            ${canManage ? `<button class="ghost-button" type="button" data-template-action="rename" title="Cambiar el nombre del formato en el catálogo.">Renombrar</button>` : ""}
            ${canManage ? `<button class="ghost-button danger-action" type="button" data-template-action="delete" title="Quitar este formato del catálogo sin borrar contratos ya guardados.">Quitar</button>` : ""}
          </div>
        </footer>
      </article>
    `;
    })
    .join("");

  templateCount.textContent = `${Object.values(templates).filter((template) => template.master).length} formatos`;
}

function buildEnglishTemplate(template) {
  const [roleA, roleB] = getRoles().map((role) => role.label);
  return `${template.title.toUpperCase()} - ENGLISH WORKING DRAFT

This agreement is entered into by and between {{parteA}}, represented by {{repA}}, as "${roleA.toUpperCase()}", and {{parteB}}, represented by {{repB}}, as "${roleB.toUpperCase()}". Each party represents that it is duly organized, validly existing and authorized to execute this agreement under Mexican law.

RECITALS

I. {{parteA}} states that it was incorporated under {{escrituraA}}, registered under commercial folio {{folioA}}, with tax ID {{rfcA}}, and that its representative's authority is evidenced by {{poderA}} before {{notarioA}}.

II. {{parteB}} states that it was incorporated under {{escrituraB}}, registered under commercial folio {{folioB}}, with tax ID {{rfcB}}, and that its representative's authority is evidenced by {{poderB}} before {{notarioB}}.

CLAUSES

FIRST. Purpose. The parties agree to perform the transaction, services or obligations described in the applicable statement of work, purchase order, annex or written instruction accepted by both parties.

SECOND. Consideration. Fees, prices, payment terms, taxes, reimbursable expenses and invoicing requirements shall be those agreed in writing.

THIRD. Deliverables and acceptance. Any deliverables shall be reviewed within the agreed term. Lack of timely written objections may be treated as acceptance if expressly agreed.

FOURTH. Changes. Scope changes, urgent requests, additional services, extraordinary costs or changes in priority shall require written approval and may generate adjustments in fees and timing.

FIFTH. Documentation. Corporate, tax, operational and legal documents used to prepare this agreement shall be provided by the party to which they correspond, so the automation does not mix party information.${commonProtectionsEn}`;
}

function bodyForTemplate(key) {
  const template = templates[key];
  if (!template) return "";
  if (activeLanguage === "en") return normalizeSignatureNameFields(template.bodyEn || buildEnglishTemplate(template));
  const body = template.body || "";
  if (template.master || body.includes("CLÁUSULAS DE PROTECCIÓN REFORZADA") || body.includes("DÉCIMA")) return normalizeSignatureNameFields(body);
  return normalizeSignatureNameFields(`${body}${commonProtectionsEs}`);
}

function createWorkingCopy(sourceKey, customBody, { announce = true } = {}) {
  const source = templates[sourceKey];
  if (!source) {
    showToast("Primero selecciona un formato.");
    return;
  }
  const key = `work-${Date.now()}`;
  const body = customBody || bodyForTemplate(sourceKey);
  const prepared = prepareTemplateFields(body, source.customFields || []);
  templates[key] = {
    ...source,
    title: `${source.title} - copia de trabajo`,
    description: "Copia editable. El formato base queda protegido.",
    body: prepared.body,
    fields: prepared.fields.length,
    customFields: prepared.fields,
    master: false,
    sourceMaster: sourceKey
  };
  loadTemplate(key);
  editor.readOnly = false;
  addMatterEvent("Documento de trabajo creado");
  saveActiveDraft("Documento de trabajo creado");
  if (announce) showToast("Documento creado. Ahora puedes editar sin tocar el formato base.");
  return true;
}

async function startContractFromTemplate(sourceKey) {
  const source = templates[sourceKey];
  if (!source) {
    showToast("Primero selecciona un formato.");
    return false;
  }
  const destination = await openSaveLocationDialog({
    title: `Guardar como: ${source.title}`,
    initialFolder: activeFolder || "Mis Documentos",
    confirmLabel: "Guardar aquí",
    defaultName: cleanWorkingTitle(source.title),
    requireName: true
  });
  if (!destination) {
    showToast("Selección cancelada. No se creó el documento de trabajo.");
    return false;
  }
  activeFolder = ensureFolderPath(destination.folder, activeFolder.split("/")[0] || "Mis Documentos");
  renderFolders();
  renderSavedContracts();
  renderVersions();
  createWorkingCopy(sourceKey, bodyForTemplate(sourceKey), { announce: false });
  if (destination.fileName) {
    templates[activeTemplate].title = destination.fileName;
    editorTitle.textContent = destination.fileName;
  }
  renderFolderSelector();
  saveActiveDraft("Contrato iniciado desde formato");
  showToast(`Documento de trabajo creado y listo en ${activeFolder}.`);
  return true;
}

function ensureEditableWorkspace(actionLabel = "trabajar este contrato") {
  if (isWorkingCopy) return true;
  if (!activeTemplate) {
    showToast("Primero selecciona o importa un formato.");
    return false;
  }
  const sourceKey = activeSourceMaster || activeTemplate;
  createWorkingCopy(sourceKey, editor.value || bodyForTemplate(sourceKey), { announce: false });
  showToast(`Documento de trabajo creado para ${actionLabel}.`);
  return true;
}

function saveAsPersonalBaseTemplate() {
  if (!activeTemplate || !editor.value.trim()) {
    showToast("Primero selecciona o importa un contrato para guardarlo como formato base.");
    return;
  }
  if (!isWorkingCopy) {
    showToast("Los formatos base están protegidos. Trabaja una copia antes de guardar una versión limpia en la matriz de formatos.");
    return;
  }

  const defaultName = cleanWorkingTitle(editorTitle.textContent).replace(/\s+-\s+copia(?:\s+de\s+trabajo)?$/i, "");
  const name = window.prompt("Nombre para guardar la versión limpia en el catálogo de formatos base. Ejemplo: Contrato marco de prestación de servicios", defaultName);
  if (!name || !name.trim()) {
    showToast("Guardado cancelado. La copia sigue editable.");
    return;
  }
  const catalogPath = promptTemplateCatalogPath(templateCatalogPath(templates[activeSourceMaster] || templates[activeTemplate] || {}));
  if (!catalogPath) {
    showToast("Guardado cancelado. La copia sigue editable.");
    return;
  }

  const key = `personal-base-${Date.now()}`;
  const cleanBody = scrubKnownPartyData(editor.value);
  const prepared = prepareTemplateFields(cleanBody, templates[activeTemplate]?.customFields || []);
  templates[key] = {
    ...(templates[activeSourceMaster] || templates[activeTemplate] || {}),
    title: name.trim(),
    category: catalogPath,
    catalogPath,
    description: "Formato propio guardado en tu biblioteca personal de documentos base.",
    fields: prepared.fields.length,
    body: prepared.body,
    master: true,
    personal: true,
    customFields: prepared.fields
  };
  saveMasterTemplates();
  activeTemplateCatalogFolder = catalogPath;
  renderTemplates();
  autoSaveVersion("manual");
  showToast("Versión limpia guardada como formato base. La copia actual sigue editable con sus datos.");
}

function renderVersions() {
  const visible = versions
    .filter((version) => version.folder === activeFolder)
    .filter((version) => version.kind === "manual" || !/autosave/i.test(version.title || ""))
    .slice(-6)
    .reverse();
  versionList.innerHTML = visible.length
    ? visible
        .map((version) => `
          <article class="saved-contract" data-version-id="${version.id}">
            <button class="saved-contract-open open-version" type="button" data-version-id="${version.id}">
              <strong>${version.title}</strong>
              <span>${version.matter?.folio || version.matter?.displayCode || "Borrador sin folio final"} · ${(version.language || "es").toUpperCase()} · ${version.date}</span>
            </button>
            <div class="saved-contract-actions">
              <button class="folder-action move-version" type="button" data-version-id="${version.id}">Mover</button>
              <button class="folder-action copy-version" type="button" data-version-id="${version.id}">Copiar</button>
              <button class="folder-action danger delete-version" type="button" data-version-id="${version.id}">Eliminar</button>
            </div>
          </article>
        `)
        .join("")
    : `<span>El autoguardado protege el borrador en segundo plano. Aquí aparecerán solo versiones manuales o relevantes.</span>`;
}

function autoSaveVersion(reason = "auto") {
  const body = editor.value.trim();
  if (!body) return;
  const matter = matterSnapshot(reason === "manual" ? "Versión manual" : "Autosave", false);

  const last = versions[versions.length - 1];
  if (last && last.template === activeTemplate && last.body === body && last.folder === activeFolder && last.matter?.folio === matter.folio) {
    saveActiveDraft(reason === "manual" ? "Versión manual" : "Autosave");
    autosaveStatus.textContent = "Guardado";
    autosaveStatus.classList.add("autosave-highlight");
    return;
  }

  versions.push({
    id: Date.now().toString(),
    title: `${templates[activeTemplate]?.title || editorTitle.textContent} · ${reason === "manual" ? "versión manual" : "autosave"}`,
    kind: reason === "manual" ? "manual" : "auto",
    folder: activeFolder,
    template: activeTemplate,
    language: activeLanguage,
    userInitials: currentUserInitials(),
    letterheadLogoId: selectedLetterheadLogoId,
    date: new Date().toLocaleString("es-MX"),
    body,
    matter
  });
  versions = versions.slice(-60);
  saveVersions();
  saveActiveDraft(reason === "manual" ? "Versión manual" : "Autosave");
  renderVersions();
  autosaveStatus.textContent = "Guardado";
  autosaveStatus.classList.add("autosave-highlight");
  if (reason === "manual") {
    addMatterEvent("Versión editable guardada");
    const backend = productionBackend();
    const latest = versions[versions.length - 1];
    if (backend && latest) backend.saveVersion(latest).catch((error) => reportBackendError("guardar versión", error));
  }
}

function scheduleAutoSave() {
  clearTimeout(autosaveTimer);
  if (activeCatalogEditKey) {
    autosaveStatus.textContent = "Edición de catálogo sin guardar";
    autosaveStatus.classList.remove("autosave-highlight");
    return;
  }
  if (!isWorkingCopy) {
    autosaveStatus.textContent = "Formato protegido";
    autosaveStatus.classList.remove("autosave-highlight");
    return;
  }
  saveActiveDraft("Borrador en curso");
  autosaveStatus.textContent = "Guardando...";
  autosaveStatus.classList.remove("autosave-highlight");
  autosaveTimer = setTimeout(() => autoSaveVersion(), 900);
}

function loadTemplate(key) {
  if (!templates[key]) {
    clearWorkspaceState();
    return;
  }
  activeTemplate = key;
  activeSourceMaster = templates[key]?.sourceMaster || (templates[key]?.master ? key : null);
  setCatalogEditMode(null);
  isWorkingCopy = !templates[key]?.master;
  partyDataStore = {};
  const template = templates[key];
  editorTitle.textContent = template.title;
  selectedCategory.textContent = template.category;
  selectedDescription.textContent = template.description;
  editor.value = bodyForTemplate(key);
  editor.readOnly = !isWorkingCopy;
  autosaveStatus.textContent = isWorkingCopy ? "Copia de trabajo" : "Formato protegido";
  if (renameTemplateButton) {
    renameTemplateButton.textContent = isWorkingCopy ? "Renombrar copia" : "Nombre protegido";
    renameTemplateButton.title = isWorkingCopy ? "Cambiar nombre de esta copia de trabajo" : "Los formatos base se protegen; crea una copia para renombrar.";
  }
  setFieldsReviewedState(false);
  autosaveStatus.classList.remove("autosave-highlight");
  sourceTextsBySide = { A: [], B: [] };
  partyDocumentsStepVisited = false;
  activeMatterFolio = null;
  activeMatterDraftId = "";
  matterHistoryEvents = [];
  renderTemplates();
  renderDynamicFields();
  renderCustomFields();
  renderRoleDrops();
  renderRequirements();
  renderMatterPanel();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return map[character];
  });
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function syncFormatControls() {
  formatFont.value = legalFormat.font;
  formatSize.value = legalFormat.size;
  formatMargin.value = legalFormat.margin;
  formatLineHeight.value = legalFormat.lineHeight;
  formatJustify.checked = Boolean(legalFormat.justify);
  applyEditorFormat();
}

function readFormatControls() {
  legalFormat = {
    font: formatFont.value,
    size: formatSize.value,
    margin: formatMargin.value,
    lineHeight: formatLineHeight.value,
    justify: true
  };
  saveLegalFormat();
  applyEditorFormat();
}

function applyEditorFormat() {
  editor.style.fontFamily = `"${legalFormat.font}", ${["Georgia", "Times New Roman"].includes(legalFormat.font) ? "serif" : "sans-serif"}`;
  editor.style.fontSize = `${legalFormat.size}pt`;
  editor.style.lineHeight = legalFormat.lineHeight;
  editor.style.textAlign = legalFormat.justify ? "justify" : "left";
}

function applyDefaultLegalFormat() {
  legalFormat = {
    font: "Georgia",
    size: "12",
    margin: "54pt",
    lineHeight: "1.5",
    justify: true
  };
  saveLegalFormat();
  syncFormatControls();
  showToast("Formato legal aplicado: Georgia 12, margen moderado e interlineado 1.5.");
}

function normalizeExportText(value) {
  return removeAccents(String(value || "").trim()).toUpperCase();
}

function legalUppercase(value) {
  return String(value || "").trim().toLocaleUpperCase("es-MX");
}

function parseCurrencyAmount(value) {
  const raw = String(value || "")
    .replace(/\b(MXN|M\.?N\.?|PESOS?|IVA|MAS|MÁS)\b/gi, "")
    .replace(/[^\d.,-]/g, "")
    .trim();
  if (!raw) return null;
  const lastDot = raw.lastIndexOf(".");
  const lastComma = raw.lastIndexOf(",");
  let normalized = raw;
  if (lastDot > -1 && lastComma > -1) {
    const decimalSeparator = lastDot > lastComma ? "." : ",";
    const thousandsSeparator = decimalSeparator === "." ? "," : ".";
    normalized = raw.replace(new RegExp(`\\${thousandsSeparator}`, "g"), "").replace(decimalSeparator, ".");
  } else if (lastComma > -1) {
    const decimals = raw.length - lastComma - 1;
    normalized = decimals === 2 ? raw.replace(/\./g, "").replace(",", ".") : raw.replace(/,/g, "");
  } else {
    const decimals = raw.length - lastDot - 1;
    normalized = lastDot > -1 && decimals === 2 ? raw.replace(/,/g, "") : raw.replace(/[,.]/g, "");
  }
  const amount = Number(normalized);
  if (!Number.isFinite(amount) || amount < 0) return null;
  const pesos = Math.floor(amount);
  const cents = Math.round((amount - pesos) * 100);
  return {
    pesos: cents === 100 ? pesos + 1 : pesos,
    cents: cents === 100 ? 0 : cents
  };
}

function hundredsToSpanish(number) {
  const units = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
  const teens = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
  const tens = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  const hundreds = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];
  if (number === 0) return "";
  if (number === 100) return "cien";
  if (number < 10) return units[number];
  if (number < 20) return teens[number - 10];
  if (number === 20) return "veinte";
  if (number < 30) return `veinti${units[number - 20]}`;
  if (number < 100) {
    const unit = number % 10;
    return unit ? `${tens[Math.floor(number / 10)]} y ${units[unit]}` : tens[number / 10];
  }
  const rest = number % 100;
  return rest ? `${hundreds[Math.floor(number / 100)]} ${hundredsToSpanish(rest)}` : hundreds[number / 100];
}

function apocopateSpanishNumber(value) {
  return value
    .replace(/veintiuno\b/g, "veintiún")
    .replace(/ y uno\b/g, " y un")
    .replace(/\buno\b/g, "un");
}

function integerToSpanish(number) {
  if (number === 0) return "cero";
  const billions = Math.floor(number / 1000000000);
  const millions = Math.floor((number % 1000000000) / 1000000);
  const thousands = Math.floor((number % 1000000) / 1000);
  const rest = number % 1000;
  const parts = [];
  if (billions) parts.push(billions === 1 ? "mil millones" : `${apocopateSpanishNumber(integerToSpanish(billions))} mil millones`);
  if (millions) parts.push(millions === 1 ? "un millón" : `${apocopateSpanishNumber(integerToSpanish(millions))} millones`);
  if (thousands) parts.push(thousands === 1 ? "mil" : `${apocopateSpanishNumber(hundredsToSpanish(thousands))} mil`);
  if (rest) parts.push(hundredsToSpanish(rest));
  return parts.join(" ");
}

function amountToSpanishCurrency(value) {
  const parsed = parseCurrencyAmount(value);
  if (!parsed) return "";
  const pesosText = apocopateSpanishNumber(integerToSpanish(parsed.pesos));
  const currency = parsed.pesos === 1 ? "peso" : "pesos";
  const cents = String(parsed.cents).padStart(2, "0");
  return `${pesosText} ${currency} ${cents}/100 M.N.`;
}

function syncAmountInWords({ force = false } = {}) {
  const amount = partyForm.elements.importeNumero?.value || partyDataStore.importeNumero || "";
  const amountInWords = amountToSpanishCurrency(amount);
  if (!amountInWords) return false;
  const input = partyForm.elements.importeLetra;
  const current = input?.value || partyDataStore.importeLetra || "";
  if (!force && current.trim()) return false;
  partyDataStore.importeLetra = amountInWords;
  if (input) input.value = amountInWords;
  return true;
}

const spanishMonths = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre"
];

function monthNumberFromValue(value) {
  const clean = removeAccents(String(value || "").trim().toLowerCase());
  const numeric = Number(clean);
  if (Number.isInteger(numeric) && numeric >= 1 && numeric <= 12) return numeric;
  const index = spanishMonths.findIndex((month) => removeAccents(month) === clean);
  return index >= 0 ? index + 1 : 0;
}

function datePartsFromValue(value) {
  const raw = String(value || "").trim();
  if (!raw) return null;
  let day = 0;
  let month = 0;
  let year = 0;
  const isoMatch = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  const slashMatch = raw.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})$/);
  const longMatch = removeAccents(raw.toLowerCase()).match(/^(\d{1,2})\s+(?:de\s+)?([a-z]+)\s+(?:de\s+)?(\d{4})$/);
  if (isoMatch) {
    [, year, month, day] = isoMatch.map(Number);
  } else if (slashMatch) {
    [, day, month, year] = slashMatch.map(Number);
    if (year < 100) year += 2000;
  } else if (longMatch) {
    day = Number(longMatch[1]);
    month = monthNumberFromValue(longMatch[2]);
    year = Number(longMatch[3]);
  } else {
    return null;
  }
  const daysInMonth = new Date(year, month, 0).getDate();
  if (!year || !month || !day || month < 1 || month > 12 || day < 1 || day > daysInMonth) return null;
  return { day, month, year };
}

function isoFromDateValue(value) {
  const parts = datePartsFromValue(value);
  if (!parts) return "";
  return `${String(parts.year).padStart(4, "0")}-${String(parts.month).padStart(2, "0")}-${String(parts.day).padStart(2, "0")}`;
}

function dateTextFromIso(iso) {
  const parts = datePartsFromValue(iso);
  if (!parts) return "";
  return `${String(parts.day).padStart(2, "0")}/${String(parts.month).padStart(2, "0")}/${String(parts.year).padStart(4, "0")}`;
}

function legalDateFromIso(iso) {
  const parts = datePartsFromValue(iso);
  if (!parts) return "";
  return `${parts.day} de ${spanishMonths[parts.month - 1]} de ${parts.year}`;
}

function manualDateStorageValue(value) {
  const iso = isoFromDateValue(value);
  return iso ? legalDateFromIso(iso) : String(value || "").trim();
}

function displayDateText(value) {
  const iso = isoFromDateValue(value);
  return iso ? dateTextFromIso(iso) : String(value || "").trim();
}

function signatureDateIsoFromValues(values = getPartyData()) {
  const day = Number(String(values.diaFirma || "").replace(/\D/g, ""));
  const month = monthNumberFromValue(values.mesFirma);
  const year = Number(String(values.anioFirma || "").replace(/\D/g, ""));
  if (!day || !month || !year) return "";
  return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function syncSignatureDateFields(value) {
  if (!String(value || "").trim()) {
    const updates = { diaFirma: "", mesFirma: "", anioFirma: "" };
    partyDataStore = { ...partyDataStore, ...updates };
    Object.keys(updates).forEach((name) => {
      const input = partyForm.elements[name];
      if (input) input.value = "";
    });
    partyForm.querySelectorAll("[data-signature-date], [data-signature-date-text]").forEach((input) => {
      input.value = "";
    });
    return true;
  }
  const parts = datePartsFromValue(value);
  if (!parts) return false;
  const updates = {
    diaFirma: String(parts.day),
    mesFirma: spanishMonths[parts.month - 1],
    anioFirma: String(parts.year)
  };
  partyDataStore = { ...partyDataStore, ...updates };
  Object.entries(updates).forEach(([name, fieldValue]) => {
    const input = partyForm.elements[name];
    if (input) input.value = fieldValue;
  });
  const iso = isoFromDateValue(value);
  partyForm.querySelectorAll("[data-signature-date]").forEach((input) => {
    input.value = iso;
  });
  partyForm.querySelectorAll("[data-signature-date-text]").forEach((input) => {
    input.value = dateTextFromIso(iso);
  });
  return true;
}

function roleHeadingAliases() {
  const baseAliases = [
    "EL CLIENTE",
    "LA CLIENTE",
    "EL PRESTADOR",
    "LA PRESTADORA",
    "EL PROVEEDOR",
    "LA PROVEEDORA",
    "EL ARRENDADOR",
    "LA ARRENDADORA",
    "EL ARRENDATARIO",
    "LA ARRENDATARIA",
    "EL COMPRADOR",
    "LA COMPRADORA",
    "EL VENDEDOR",
    "LA VENDEDORA",
    "EL MANDANTE",
    "EL MANDATARIO",
    "LAS PARTES",
    "AMBAS PARTES"
  ];
  const dynamicAliases = getRoles().flatMap((role) => {
    const normalized = normalizeExportText(role.label);
    const short = normalized.split(/\s+/)[0];
    return [`EL ${normalized}`, `LA ${normalized}`, `EL ${short}`, `LA ${short}`];
  });
  return [...new Set([...baseAliases, ...dynamicAliases].filter(Boolean))].sort((a, b) => b.length - a.length);
}

function formatEmailLinks(html) {
  return html.replace(
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi,
    (email) => `<a class="email-link" href="mailto:${email}">${email}</a>`
  );
}

function formatInlineLegalText(html) {
  let formatted = html.replace(/\bDenominaci[oó]n social\s*:/gi, "Parte:");
  roleHeadingAliases().forEach((alias) => {
    formatted = formatted.replace(new RegExp(`\\b${escapeRegExp(alias)}\\b`, "gi"), "<strong>$&</strong>");
  });

  const values = getPartyData();
  const uppercaseFields = new Set(["parteA", "parteB", "repA", "repB", "rfcA", "rfcB"]);
  const boldFields = new Set([...uppercaseFields, "domicilioPrestador", "domicilioCliente"]);
  Object.entries(values)
    .filter(([name, value]) => boldFields.has(name) && String(value || "").trim().length > 2)
    .sort((a, b) => String(b[1]).length - String(a[1]).length)
    .forEach(([name, value]) => {
      const display = uppercaseFields.has(name) ? legalUppercase(value) : String(value).trim();
      formatted = formatted.replace(
        new RegExp(escapeRegExp(escapeHtml(value)), "gi"),
        `<strong>${escapeHtml(display)}</strong>`
      );
    });

  return formatEmailLinks(formatted);
}

function listItemInfo(paragraph) {
  const match = paragraph.match(/^\s*(?:(\d+)[.)]|([a-zA-Z])[.)]|([-*•]))\s+([\s\S]+)/);
  if (!match) return null;
  if (match[1]) return { type: "number", body: match[4] };
  if (match[2]) return { type: "alpha", body: match[4] };
  return { type: "bullet", body: match[4] };
}

function listBlockFrom(paragraphs, startIndex) {
  const first = listItemInfo(paragraphs[startIndex]);
  if (!first) return null;
  const items = [];
  let endIndex = startIndex;
  while (endIndex < paragraphs.length) {
    const item = listItemInfo(paragraphs[endIndex]);
    if (!item || item.type !== first.type) break;
    items.push(item.body);
    endIndex += 1;
  }
  if (items.length < 2) return null;

  const tag = first.type === "bullet" ? "ul" : "ol";
  const typeAttr = first.type === "alpha" ? ' type="a"' : "";
  const html = items
    .map((item) => `<li>${formatInlineLegalText(escapeHtml(item).replace(/\n/g, "<br>"))}</li>`)
    .join("");
  return {
    html: `<${tag}${typeAttr} class="legal-list">${html}</${tag}>`,
    endIndex: endIndex - 1
  };
}

function isAnnexHeading(paragraph) {
  return /^(ANEXO|ANNEX|SCHEDULE|EXHIBIT)\b/.test(normalizeExportText(paragraph));
}

function isRoleHeadingParagraph(paragraph) {
  const plain = normalizeExportText(paragraph).replace(/^POR\s+/, "");
  return roleHeadingAliases().some((alias) => normalizeExportText(alias) === plain);
}

function signatureRoleTitle(role) {
  const label = normalizeExportText(role.label);
  const explicitTitles = [
    ["PRESTADOR", "EL PRESTADOR"],
    ["CLIENTE", "EL CLIENTE"],
    ["PROVEEDOR", "EL PROVEEDOR"],
    ["ARRENDADOR", "EL ARRENDADOR"],
    ["ARRENDATARIO", "EL ARRENDATARIO"],
    ["COMPRADOR", "EL COMPRADOR"],
    ["VENDEDOR", "EL VENDEDOR"],
    ["MANDANTE", "EL MANDANTE"],
    ["MANDATARIO", "EL MANDATARIO"],
    ["COMITENTE", "EL COMITENTE"],
    ["COMISIONISTA", "EL COMISIONISTA"],
    ["MUTUANTE", "EL MUTUANTE"],
    ["MUTUARIO", "EL MUTUARIO"],
    ["CEDENTE", "EL CEDENTE"],
    ["CESIONARIO", "EL CESIONARIO"],
    ["LICENCIANTE", "EL LICENCIANTE"],
    ["LICENCIATARIO", "EL LICENCIATARIO"],
    ["FRANQUICIANTE", "EL FRANQUICIANTE"],
    ["FRANQUICIATARIO", "EL FRANQUICIATARIO"],
    ["FIDUCIARIO", "EL FIDUCIARIO"],
    ["FIDEICOMITENTE", "EL FIDEICOMITENTE"]
  ];
  const match = explicitTitles.find(([needle]) => label.includes(needle));
  if (match) return match[1];
  if (/^PARTE\s+[A-Z]$/.test(label)) return "";
  return label;
}

function cleanRepresentativeCandidate(value) {
  const clean = String(value || "")
    .replace(/\{\{[^}]+\}\}/g, "")
    .replace(/^nombre\s*:?\s*/i, "")
    .replace(/\s+/g, " ")
    .replace(/\b(?:quien|con|en su car[aá]cter|cuya personalidad|facultades|titular)\b.*$/i, "")
    .replace(/[,:;.\s]+$/g, "")
    .trim();
  if (!isLikelyPersonName(clean)) return "";
  return clean;
}

function isLikelyPersonName(value) {
  const clean = String(value || "").trim();
  if (!clean || clean.length < 5 || clean.length > 95) return false;
  if (/[:{}]|\d/.test(clean)) return false;
  if (!/^[A-Za-zÁÉÍÓÚÑÜáéíóúñü.' -]+$/.test(clean)) return false;
  const normalized = removeAccents(clean).toLowerCase();
  const blockedTerms = [
    "sociedad",
    "mercantil",
    "constituida",
    "leyes",
    "estados unidos",
    "mexicanos",
    "registro federal",
    "rfc",
    "domicilio",
    "correo",
    "escritura",
    "poliza",
    "acta",
    "notaria",
    "notario",
    "corredor",
    "fedatario",
    "folio",
    "cliente",
    "prestador",
    "proveedor",
    "parte",
    "contrato",
    "firma",
    "denominacion",
    "representante legal",
    "cuenta con",
    "tiene interes"
  ];
  if (blockedTerms.some((term) => normalized.includes(term))) return false;
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length < 2 || words.length > 9) return false;
  return words.some((word) => /^[A-ZÁÉÍÓÚÑÜ]/.test(word));
}

function uniqueNonEmpty(items) {
  const seen = new Set();
  return items.filter((item) => {
    const clean = String(item || "").trim();
    const key = removeAccents(clean).toLowerCase();
    if (!clean || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function signatureRepresentativeLines(text) {
  const lines = String(text || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
  const names = [];
  lines.forEach((line, index) => {
    const sameLineLabel = /representante\s+legal/i.test(line);
    const splitLineLabel = /representante/i.test(line) && /legal/i.test(lines[index + 1] || "");
    if (!sameLineLabel && !splitLineLabel) return;
    const labelLine = sameLineLabel ? line : lines[index + 1] || "";
    const afterLabel = labelLine.includes(":")
      ? labelLine.slice(labelLine.indexOf(":") + 1)
      : labelLine.replace(/^.*representante\s*legal\s*/i, "");
    const sameLineCandidate = cleanRepresentativeCandidate(afterLabel);
    if (sameLineCandidate) names.push(sameLineCandidate);
    const firstCandidateOffset = splitLineLabel ? 2 : 1;
    for (let offset = firstCandidateOffset; offset <= firstCandidateOffset + 3; offset += 1) {
      const nextCandidate = cleanRepresentativeCandidate(lines[index + offset]);
      if (nextCandidate) {
        names.push(nextCandidate);
        break;
      }
    }
  });
  return names;
}

function representativesFromContractText() {
  const text = normalizeSignatureNameFields(editor?.value || "");
  const declarationMatches = Array.from(text.matchAll(/representad[ao]\s+(?:en\s+este\s+acto\s+)?por\s+([^,.;\n]{5,110})/gi)).map((match) => cleanRepresentativeCandidate(match[1]));
  const signatureMatches = Array.from(text.matchAll(/representante\s+legal\s*:?\s*\n\s*([^\n]{5,110})/gi)).map((match) => cleanRepresentativeCandidate(match[1]));
  return uniqueNonEmpty([...declarationMatches, ...signatureMatches, ...signatureRepresentativeLines(text)]);
}

function emailsFromContractText() {
  const matches = (editor?.value || "").match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi) || [];
  return uniqueNonEmpty(matches.map((email) => email.toLowerCase()));
}

function representativeForSide(side, values = getPartyData()) {
  const key = `rep${side}`;
  const current = cleanRepresentativeCandidate(values[key] || partyDataStore[key] || "");
  if (current) return current;
  if (partyDataStore[key] && !cleanRepresentativeCandidate(partyDataStore[key])) {
    partyDataStore[key] = "";
  }
  const fallback = representativesFromContractText()[side === "A" ? 0 : 1] || "";
  if (fallback) partyDataStore[key] = fallback;
  return fallback;
}

function signatureEmailForSide(side, values = getPartyData()) {
  const key = side === "A" ? "correoPrestador" : "correoCliente";
  const current = String(values[key] || partyDataStore[key] || "").trim();
  if (current) return current;
  const fallback = emailsFromContractText()[side === "A" ? 0 : 1] || "";
  if (fallback) partyDataStore[key] = fallback;
  return fallback;
}

function signatureCellHtml(role) {
  if (!role) return `<td class="signature-empty">&nbsp;</td>`;
  const values = getPartyData();
  const party = values[role.part] || role.label;
  const representative = representativeForSide(role.side, values) || "Representante legal";
  const roleTitle = signatureRoleTitle(role);
  return `
    <td>
      ${roleTitle ? `<p class="signature-role">${escapeHtml(roleTitle)}</p>` : ""}
      <div class="signature-space">&nbsp;</div>
      <div class="signature-line">&nbsp;</div>
      <p class="signature-entity"><strong>${escapeHtml(legalUppercase(party))}</strong></p>
      <p class="signature-label">Por conducto de su representante legal:</p>
      <p class="signature-representative"><strong>${escapeHtml(legalUppercase(representative))}</strong></p>
    </td>
  `;
}

function signatureBlockHtml() {
  const roles = getRoles();
  const rows = [];
  for (let index = 0; index < roles.length; index += 2) {
    rows.push(`<tr>${signatureCellHtml(roles[index])}${signatureCellHtml(roles[index + 1])}</tr>`);
  }
  return `<table class="signature-table" role="presentation" border="0" cellspacing="0" cellpadding="0">${rows.join("")}</table>`;
}

function letterheadHeaderHtml() {
  const logo = selectedLetterheadLogo();
  if (!logo?.dataUrl) return "";
  return `
    <div class="header" id="header1">
      <p><img src="${logo.dataUrl}" alt="${escapeHtml(logo.name)}" /></p>
    </div>
  `;
}

function letterheadFooterHtml(footerInitials) {
  const lines = letterheadFooterLines();
  const letterheadLines = lines.length
    ? `<p class="letterhead-address">${lines.map((line) => escapeHtml(line)).join("<br />")}</p>`
    : "";
  return `
    <div class="footer" id="footer1">
      ${letterheadLines}
      <p class="footer-initials">${escapeHtml(footerInitials)}</p>
    </div>
  `;
}

function isSignatureBlockStart(paragraphs, index) {
  return isRoleHeadingParagraph(paragraphs[index]) && isRoleHeadingParagraph(paragraphs[index + 1] || "");
}

function formatContractParagraph(paragraph, index) {
  const escaped = formatInlineLegalText(escapeHtml(paragraph).replace(/\n/g, "<br>"));
  const plain = normalizeExportText(paragraph);
  const isShortHeading = paragraph.length < 95 && /^[A-ZÁÉÍÓÚÑ0-9 .,:;()/"“”_-]+$/.test(paragraph);
  const isMainTitle = index === 0;
  const isSectionHeading = isShortHeading || /^(DECLARACIONES|CLAUSULAS|ANEXO|RECITALES|RECITALS|CLAUSES|SCHEDULE|EXHIBIT)\b/.test(plain);
  if (isMainTitle) return `<h1>${escaped}</h1>`;
  if (isAnnexHeading(paragraph)) return `<h2 class="annex-title">${escaped}</h2>`;
  if (isSectionHeading) return `<h2>${escaped}</h2>`;

  const clausePattern = /^((?:PRIMERA|SEGUNDA|TERCERA|CUARTA|QUINTA|SEXTA|SÉPTIMA|SEPTIMA|OCTAVA|NOVENA|DÉCIMA|DECIMA|VIGÉSIMA|VIGESIMA|FIRST|SECOND|THIRD|FOURTH|FIFTH|SIXTH|SEVENTH|EIGHTH|NINTH|TENTH)[^.<\n]{0,90}\.)/i;
  const withBoldClause = escaped.replace(clausePattern, "<strong>$1</strong>");
  return `<p>${withBoldClause}</p>`;
}

function formattedContractHtml(text) {
  const paragraphs = normalizeSignatureNameFields(text).split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean);
  const output = [];
  for (let index = 0; index < paragraphs.length; index += 1) {
    if (isSignatureBlockStart(paragraphs, index)) {
      output.push(signatureBlockHtml());
      while (index + 1 < paragraphs.length && !isAnnexHeading(paragraphs[index + 1])) index += 1;
      continue;
    }
    const listBlock = listBlockFrom(paragraphs, index);
    if (listBlock) {
      output.push(listBlock.html);
      index = listBlock.endIndex;
      continue;
    }
    output.push(formatContractParagraph(paragraphs[index], index));
  }
  return output.join("");
}

function confirmExportReadiness(actionLabel) {
  const missing = missingFieldsForActiveTemplate();
  if (missing.length) {
    const list = missing.slice(0, 12).map(([, label]) => `- ${label}`).join("\n");
    const extra = missing.length > 12 ? `\n- ${missing.length - 12} dato${missing.length - 12 === 1 ? "" : "s"} más` : "";
    const proceed = window.confirm(`Antes de exportar faltan estos datos generales:\n\n${list}${extra}\n\n¿Quieres exportar de todos modos?`);
    if (!proceed) {
      showToast("Exportación detenida para completar datos de partes.");
      return false;
    }
  }
  if (!confirmCriticalFindingsBefore(actionLabel)) {
    showToast("Exportación detenida para revisar observaciones.");
    return false;
  }
  return true;
}

function exportWordDocument() {
  if (!confirmExportReadiness("exportar a Word")) return;
  const title = cleanWorkingTitle(editorTitle.textContent);
  const folio = ensureMatterFolio();
  readFormatControls();
  const documentBody = formattedContractHtml(editor.value);
  const footerInitials = currentUserInitials();
  const letterheadHtml = letterheadHeaderHtml();
  const letterheadFooter = letterheadFooterHtml(footerInitials);
  const hasLetterhead = Boolean(letterheadHtml);
  const html = `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <style>
        @page WordSection1 { margin: ${legalFormat.margin}; mso-footer: footer1; ${hasLetterhead ? "mso-header: header1;" : ""} }
        div.WordSection1 { page: WordSection1; }
        div.header { mso-element: header; }
        div.footer { mso-element: footer; }
        .header p { margin: 0; text-align: left; }
        .header img { max-width: 180pt; max-height: 52pt; width: auto; height: auto; }
        .footer p { margin: 0; font-size: 8pt; color: #6b7280; }
        .footer .letterhead-address { text-align: center; font-size: 7.5pt; color: #374151; line-height: 1.2; }
        .footer .footer-initials { text-align: right; margin-top: 2pt; }
        body { font-family: "${legalFormat.font}", serif; color: #111827; line-height: ${legalFormat.lineHeight}; margin: 0; font-size: ${legalFormat.size}pt; }
        h1 { font-size: ${Number(legalFormat.size) + 2}pt; text-align: center; font-weight: 700; margin: 0 0 24pt; text-transform: uppercase; }
        h2 { font-size: ${legalFormat.size}pt; text-align: justify; font-weight: 700; margin: 18pt 0 10pt; text-transform: uppercase; }
        h2.annex-title { text-align: center; margin-top: 0; page-break-before: always; break-before: page; }
        p { margin: 0 0 10pt; text-align: justify; }
        a.email-link { color: #1155cc; text-decoration: underline; }
        ol.legal-list, ul.legal-list { margin: 0 0 10pt 24pt; padding-left: 18pt; text-align: justify; }
        ol.legal-list li, ul.legal-list li { margin: 0 0 8pt; padding-left: 4pt; }
        .signature-table { width: 100%; border-collapse: collapse; border: 0; table-layout: fixed; margin: 34pt 0 18pt; page-break-inside: avoid; }
        .signature-table td { width: 50%; border: 0; padding: 0 22pt 0; text-align: center; vertical-align: top; }
        .signature-table p { margin: 0 0 5pt; text-align: center; line-height: 1.25; }
        .signature-role { font-weight: 700; text-transform: uppercase; min-height: 16pt; }
        .signature-space { height: 46pt; line-height: 46pt; }
        .signature-line { border-top: 1pt solid #111827; height: 1pt; line-height: 1pt; margin: 0 0 10pt; }
        .signature-entity, .signature-representative { text-transform: uppercase; }
        .signature-label { color: #111827; }
        .signature-empty { visibility: hidden; }
        strong { font-weight: 700; }
      </style>
    </head>
    <body>
      <div class="WordSection1">${documentBody || `<h1>${escapeHtml(title)}</h1>`}</div>
      ${letterheadHtml}
      ${letterheadFooter}
    </body>
  </html>`;
  const blob = new Blob(["\ufeff", html], { type: "application/msword" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${sanitizeFilename(folio)}-${sanitizeFilename(title)}.doc`;
  link.click();
  URL.revokeObjectURL(link.href);
  addMatterEvent("Versión exportada a Word");
  autoSaveVersion("manual");
  showToast("Contrato exportado en formato compatible con Word.");
}

function printContractHtml(printTitle) {
  const title = cleanWorkingTitle(printTitle || editorTitle.textContent);
  const documentBody = formattedContractHtml(editor.value) || `<h1>${escapeHtml(title)}</h1>`;
  const logo = selectedLetterheadLogo();
  const footerLines = letterheadFooterLines();
  const headerHtml = logo?.dataUrl
    ? `<div class="print-letterhead"><img src="${logo.dataUrl}" alt="${escapeHtml(logo.name)}" /></div>`
    : "";
  const footerHtml = footerLines.length || currentUserInitials()
    ? `<footer class="print-footer">${footerLines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}<p class="footer-initials">${escapeHtml(currentUserInitials())}</p></footer>`
    : "";

  return `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>${escapeHtml(title)}</title>
      <style>
        @page { margin: ${legalFormat.margin}; }
        * { box-sizing: border-box; }
        body {
          font-family: "${legalFormat.font}", ${["Georgia", "Times New Roman"].includes(legalFormat.font) ? "serif" : "sans-serif"};
          color: #111827;
          line-height: ${legalFormat.lineHeight};
          margin: 0;
          font-size: ${legalFormat.size}pt;
          background: white;
        }
        .print-letterhead { margin: 0 0 22pt; text-align: left; }
        .print-letterhead img { max-width: 180pt; max-height: 52pt; width: auto; height: auto; }
        h1 { font-size: ${Number(legalFormat.size) + 2}pt; text-align: center; font-weight: 700; margin: 0 0 24pt; text-transform: uppercase; }
        h2 { font-size: ${legalFormat.size}pt; text-align: justify; font-weight: 700; margin: 18pt 0 10pt; text-transform: uppercase; }
        h2.annex-title { text-align: center; margin-top: 0; page-break-before: always; break-before: page; }
        p { margin: 0 0 10pt; text-align: justify; }
        a.email-link { color: #1155cc; text-decoration: underline; }
        ol.legal-list, ul.legal-list { margin: 0 0 10pt 24pt; padding-left: 18pt; text-align: justify; }
        ol.legal-list li, ul.legal-list li { margin: 0 0 8pt; padding-left: 4pt; }
        .signature-table { width: 100%; border-collapse: collapse; border: 0; table-layout: fixed; margin: 34pt 0 18pt; page-break-inside: avoid; }
        .signature-table td { width: 50%; border: 0; padding: 0 22pt 0; text-align: center; vertical-align: top; }
        .signature-table p { margin: 0 0 5pt; text-align: center; line-height: 1.25; }
        .signature-role { font-weight: 700; text-transform: uppercase; min-height: 16pt; }
        .signature-space { height: 46pt; line-height: 46pt; }
        .signature-line { border-top: 1pt solid #111827; height: 1pt; line-height: 1pt; margin: 0 0 10pt; }
        .signature-entity, .signature-representative { text-transform: uppercase; }
        .signature-label { color: #111827; }
        .signature-empty { visibility: hidden; }
        .print-footer { margin-top: 24pt; padding-top: 7pt; border-top: 0.5pt solid #d1d5db; color: #374151; font-size: 7.5pt; line-height: 1.2; page-break-inside: avoid; }
        .print-footer p { margin: 0; text-align: center; }
        .print-footer .footer-initials { text-align: right; margin-top: 3pt; color: #6b7280; }
        strong { font-weight: 700; }
      </style>
    </head>
    <body>
      ${headerHtml}
      <main>${documentBody}</main>
      ${footerHtml}
      <script>
        window.addEventListener("load", () => {
          setTimeout(() => {
            window.focus();
            window.print();
          }, 250);
        });
      </script>
    </body>
  </html>`;
}

function exportPdfForSignature() {
  if (!confirmExportReadiness("exportar PDF para firma")) return;
  const title = cleanWorkingTitle(editorTitle.textContent);
  ensureMatterFolio();
  readFormatControls();
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    showToast("No se pudo abrir la ventana de PDF. Permite ventanas emergentes e intenta de nuevo.");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(printContractHtml(title));
  printWindow.document.close();
  addMatterEvent("Versión exportada a PDF para firma");
  autoSaveVersion("manual");
  showToast("PDF listo: usa Guardar como PDF en la ventana de impresión y envíalo a firma externa.");
}

function comparisonDocumentsForCriticalReview() {
  return getRoles().flatMap((role) =>
    (sourceTextsBySide[role.side] || []).map((file) => ({
      role: role.label,
      name: file.name,
      type: file.type || classifySupportDocument(file.name),
      text: file.text || ""
    }))
  );
}

function comparisonFileEntriesForCriticalReview() {
  return getRoles().flatMap((role) =>
    (sourceTextsBySide[role.side] || [])
      .filter((entry) => entry.file)
      .map((entry) => ({
        role: role.label,
        file: entry.file
      }))
  );
}

function uniqueTextMatches(text, regex) {
  return Array.from(new Set(Array.from(String(text || "").matchAll(regex)).map((match) => match[0].trim()))).slice(0, 18);
}

function buildLocalCongruenceReview() {
  const body = editor.value || "";
  const relatedDocuments = comparisonDocumentsForCriticalReview();
  const documentsWithText = relatedDocuments.filter((document) => String(document.text || "").trim());
  const findings = [];

  if (!relatedDocuments.length) {
    findings.push({
      severity: "Alta",
      section: "Documentos para comparar",
      observation: "No hay anexos o documentos soporte cargados para comparar contra el contrato.",
      recommendation: "Carga el anexo, propuesta, orden de servicio o documento soporte que quieras contrastar y vuelve a ejecutar esta revisión."
    });
  } else if (!documentsWithText.length) {
    findings.push({
      severity: "Media",
      section: "Texto documental",
      observation: "Hay documentos cargados, pero esta revisión local no tiene texto extraído suficiente para comparar fechas, montos, partes o firmantes.",
      recommendation: "En producción, ejecuta la revisión con IA documental o carga un archivo de texto/correo/CSV para una comparación preliminar."
    });
  }

  const contractDates = uniqueTextMatches(body, /\b\d{1,2}(?:\/|-|\s+de\s+)[A-Za-zÁÉÍÓÚÑáéíóúñ0-9]+(?:\/|-|\s+de\s+)\d{2,4}\b/g);
  const supportDates = uniqueTextMatches(documentsWithText.map((document) => document.text).join("\n"), /\b\d{1,2}(?:\/|-|\s+de\s+)[A-Za-zÁÉÍÓÚÑáéíóúñ0-9]+(?:\/|-|\s+de\s+)\d{2,4}\b/g);
  const contractAmounts = uniqueTextMatches(body, /\$\s?[\d,]+(?:\.\d{2})?|\b\d{1,3}(?:,\d{3})+(?:\.\d{2})?\s?(?:MXN|pesos|USD|d[oó]lares)\b/gi);
  const supportAmounts = uniqueTextMatches(documentsWithText.map((document) => document.text).join("\n"), /\$\s?[\d,]+(?:\.\d{2})?|\b\d{1,3}(?:,\d{3})+(?:\.\d{2})?\s?(?:MXN|pesos|USD|d[oó]lares)\b/gi);

  if (contractDates.length && supportDates.length && !contractDates.some((date) => supportDates.includes(date))) {
    findings.push({
      severity: "Media",
      section: "Fechas y vigencias",
      observation: `El contrato y los documentos cargados contienen fechas, pero no hay coincidencia evidente. Contrato: ${contractDates.slice(0, 3).join(", ")}. Documentos: ${supportDates.slice(0, 3).join(", ")}.`,
      recommendation: "Verifica fecha de firma, vigencia, fecha de anexo, inicio de servicios y vencimiento antes de circular la versión final."
    });
  }
  if (contractAmounts.length && supportAmounts.length && !contractAmounts.some((amount) => supportAmounts.includes(amount))) {
    findings.push({
      severity: "Media",
      section: "Montos",
      observation: `El contrato y los documentos cargados contienen importes que no coinciden de forma evidente. Contrato: ${contractAmounts.slice(0, 3).join(", ")}. Documentos: ${supportAmounts.slice(0, 3).join(", ")}.`,
      recommendation: "Revisa honorarios, moneda, periodicidad, IVA, anexos de servicio y condiciones comerciales."
    });
  }

  if (!findings.length) {
    findings.push({
      severity: "Baja",
      section: "Congruencia documental",
      observation: "No se detectaron diferencias evidentes en la revisión local básica.",
      recommendation: "Usa la revisión avanzada para comparar anexos, firmantes, montos, vigencias y alcance con mayor precisión."
    });
  }

  return {
    source: "revisión local",
    summary: "Revisión preliminar de congruencia entre contrato, anexos y documentos cargados. No sustituye la revisión profesional.",
    findings,
    revisedBody: ""
  };
}

function buildLocalLegalReview(country = "México") {
  const body = editor.value || "";
  const findings = [];
  const normalizedCountry = removeAccents(country).toLowerCase();
  const partyData = getPartyData();

  if (!body.trim()) {
    findings.push({
      severity: "Alta",
      section: "Documento",
      observation: "No hay contrato cargado para revisar contra legislación aplicable.",
      recommendation: "Selecciona o importa un formato, carga una copia editable y vuelve a ejecutar la revisión."
    });
  }
  if (!normalizedCountry.includes("mexico")) {
    findings.push({
      severity: "Media",
      section: "País seleccionado",
      observation: `La revisión local solo tiene reglas básicas para México. País seleccionado: ${country}.`,
      recommendation: "Usa la revisión avanzada en producción y valida con un abogado local del país aplicable."
    });
  }
  getRoles().flatMap((role) => [
    [role.side, "constitutivo", `Constitución de ${role.label}`],
    [role.side, "Poder", `Poderes de ${role.label}`]
  ]).forEach(([side, scope, section]) => {
    const fieldScope = scope === "Poder" ? "Poder" : "Constitutivo";
    const fedatario = removeAccents(partyData[`tipoFedatario${fieldScope}${side}`] || "").toLowerCase();
    const instrumento = removeAccents(partyData[`tipoInstrumento${fieldScope}${side}`] || "").toLowerCase();
    if (fedatario.includes("corredor") && instrumento.includes("escritura")) {
      findings.push({
        severity: "Alta",
        section,
        observation: "Se seleccionó corredor público, pero el instrumento aparece como escritura pública.",
        recommendation: "Usa póliza o acta, según corresponda, o cambia el fedatario a notario público si el documento realmente es escritura."
      });
    }
    if (fedatario.includes("notario") && instrumento.includes("poliza")) {
      findings.push({
        severity: "Media",
        section,
        observation: "Se seleccionó notario público, pero el instrumento aparece como póliza.",
        recommendation: "Verifica si el documento fue otorgado ante corredor público o si debe capturarse como escritura pública."
      });
    }
  });
  if (!/leyes\s+aplicables|legislaci[oó]n\s+aplicable|ley\s+aplicable|jurisdicci[oó]n|tribunales/i.test(body)) {
    findings.push({
      severity: "Alta",
      section: "Ley aplicable y jurisdicción",
      observation: "No se detecta una cláusula clara de ley aplicable o jurisdicción.",
      recommendation: "Define el país, estado o legislación aplicable y el mecanismo de solución de controversias antes de circular el contrato."
    });
  }
  if (/prestaci[oó]n\s+de\s+servicios/i.test(body) && !/independiente|sin\s+subordinaci[oó]n|relaci[oó]n\s+laboral/i.test(body)) {
    findings.push({
      severity: "Media",
      section: "Naturaleza del servicio",
      observation: "El contrato parece de prestación de servicios, pero no se detecta una precisión clara sobre independencia y ausencia de subordinación.",
      recommendation: "Verifica si conviene incluir una cláusula de naturaleza civil/mercantil e independencia de las partes."
    });
  }
  if (!/datos\s+personales|protecci[oó]n\s+de\s+datos/i.test(body)) {
    findings.push({
      severity: "Media",
      section: "Datos personales",
      observation: "No se detecta una cláusula expresa sobre tratamiento de datos personales.",
      recommendation: "Si el contrato implica acceso a datos personales, valida obligaciones de tratamiento, confidencialidad y medidas de seguridad."
    });
  }
  if (/corredur[ií]a|corredor\s+p[uú]blico|p[oó]liza/i.test(body) && /inmueble|arrendamiento|compraventa\s+de\s+inmueble/i.test(body)) {
    findings.push({
      severity: "Alta",
      section: "Corredor público e inmuebles",
      observation: "Se detecta referencia a corredor público o póliza junto con posible materia inmobiliaria.",
      recommendation: "Verifica formalidades específicas, porque la fe pública del corredor tiene límites en materia inmobiliaria."
    });
  }

  if (!findings.length) {
    findings.push({
      severity: "Baja",
      section: "Revisión normativa local",
      observation: "No se detectaron alertas normativas evidentes en la revisión local básica.",
      recommendation: "Ejecuta la revisión avanzada para contrastar el contrato contra el tipo contractual y país aplicable con mayor precisión."
    });
  }

  return {
    source: "revisión local",
    summary: `Revisión preliminar de legislación aplicable para ${country}. No certifica vigencia normativa ni sustituye revisión jurídica profesional.`,
    findings,
    revisedBody: ""
  };
}

function buildLocalCriticalReview(mode, country = "México") {
  if (mode === "congruence") return buildLocalCongruenceReview();
  if (mode === "legal") return buildLocalLegalReview(country);
  const body = editor.value || "";
  const missingFields = missingFieldsForActiveTemplate().map(([, label]) => label);
  const findings = [];

  if (!body.trim()) {
    findings.push({
      severity: "Alta",
      section: "Documento",
      observation: "No hay contrato cargado para revisar.",
      recommendation: "Selecciona o importa un formato, crea una copia editable y vuelve a ejecutar la revisión."
    });
  }
  if (missingFields.length) {
    findings.push({
      severity: "Alta",
      section: "Datos de partes",
      observation: `Faltan datos por completar: ${missingFields.slice(0, 8).join(", ")}${missingFields.length > 8 ? "..." : ""}.`,
      recommendation: "Carga documentos adicionales por cada parte o captura manualmente los campos antes de exportar o circular el contrato."
    });
  }
  if (/\{\{[^}]+\}\}|\b(PENDIENTE|POR COMPLETAR|XXX)\b/i.test(body)) {
    findings.push({
      severity: "Alta",
      section: "Campos pendientes",
      observation: "El contrato conserva marcadores o textos temporales.",
      recommendation: "Completa o elimina los marcadores antes de circular la versión final."
    });
  }
  if (!/confidencial/i.test(body)) {
    findings.push({
      severity: "Media",
      section: "Confidencialidad",
      observation: "No se detecta una cláusula clara de confidencialidad.",
      recommendation: "Valora incluir obligaciones de uso, resguardo, excepciones, vigencia y devolución o destrucción de información."
    });
  }
  if (!/datos personales|protecci[oó]n de datos/i.test(body)) {
    findings.push({
      severity: "Media",
      section: "Datos personales",
      observation: "No se detecta una regulación expresa sobre datos personales.",
      recommendation: "Si las partes tratarán datos personales, agrega responsabilidades, medidas de seguridad e instrucciones de tratamiento."
    });
  }
  if (!/jurisdicci[oó]n|tribunales|ley aplicable/i.test(body)) {
    findings.push({
      severity: "Media",
      section: "Ley aplicable y jurisdicción",
      observation: "No se detecta una cláusula suficiente de ley aplicable o jurisdicción.",
      recommendation: "Incluye ley aplicable, tribunales competentes o mecanismo de solución de controversias."
    });
  }
  if (!/terminaci[oó]n|rescisi[oó]n/i.test(body)) {
    findings.push({
      severity: "Media",
      section: "Terminación",
      observation: "No se detectan reglas claras de terminación o rescisión.",
      recommendation: "Define causas, avisos, efectos, pagos pendientes y supervivencia de obligaciones."
    });
  }
  if (!/notificaci[oó]n|domicilio|correo electr[oó]nico/i.test(body)) {
    findings.push({
      severity: "Baja",
      section: "Notificaciones",
      observation: "No se detecta un mecanismo completo para notificaciones.",
      recommendation: "Agrega domicilios, correos autorizados, momento de surtimiento de efectos y cambios de datos de contacto."
    });
  }
  if (!/firma|firmado|aceptaci[oó]n/i.test(body)) {
    findings.push({
      severity: "Baja",
      section: "Firma",
      observation: "No se detecta cierre de firma o aceptación.",
      recommendation: "Incluye bloque de firmas, nombres, cargos y representación de cada parte."
    });
  }

  if (!findings.length) {
    findings.push({
      severity: "Baja",
      section: "Revisión general",
      observation: "No se detectaron alertas evidentes en la revisión local básica.",
      recommendation: "Aun así, revisa coherencia comercial, anexos, montos, plazos, obligaciones y facultades de representación."
    });
  }

  return {
    source: "revisión local",
    summary: "Revisión preliminar basada en campos pendientes y cláusulas usuales. No sustituye la revisión profesional del contrato.",
    findings,
    revisedBody: mode === "propose" ? "" : ""
  };
}

function formatCriticalReview(result) {
  const findings = result.findings?.length ? result.findings : [];
  const lines = [
    result.summary || "Revisión preliminar del contrato.",
    "",
    ...findings.flatMap((finding, index) => [
      `${index + 1}. [${finding.severity || "Media"}] ${finding.section || "Contrato"}`,
      `Observación: ${finding.observation || "Revisar este punto."}`,
      `Recomendación: ${finding.recommendation || "Validar y ajustar si corresponde."}`,
      ""
    ])
  ];
  return lines.join("\n").trim();
}

function normalizeCriticalChanges(result) {
  const source = Array.isArray(result?.changes) ? result.changes : [];
  return source
    .map((change, index) => {
      const original = String(change.original || change.before || change.find || "").trim();
      const replacement = String(change.replacement || change.after || change.suggestedText || "").trim();
      const reason = String(change.reason || change.explanation || change.recommendation || "").trim();
      const section = String(change.section || "Contrato").trim();
      const type = String(change.type || (original ? "replace" : "insert")).trim();
      if (!replacement && !original) return null;
      return {
        id: `change-${Date.now()}-${index}`,
        section,
        type,
        original,
        replacement,
        reason,
        status: "pending"
      };
    })
    .filter(Boolean);
}

function renderCriticalReview(result, mode) {
  const findings = Array.isArray(result?.findings) ? result.findings : [];
  pendingCriticalChanges = mode === "propose" ? normalizeCriticalChanges(result) : [];
  const findingsHtml = findings.length
    ? findings
        .map((finding, index) => `
          <article class="critical-finding">
            <strong>${index + 1}. [${escapeHtml(finding.severity || "Media")}] ${escapeHtml(finding.section || "Contrato")}</strong>
            <p><b>Observación:</b> ${escapeHtml(finding.observation || "Revisar este punto.")}</p>
            <p><b>Recomendación:</b> ${escapeHtml(finding.recommendation || "Validar y ajustar si corresponde.")}</p>
          </article>
        `)
        .join("")
    : `<p class="critical-review-text">No se detectaron observaciones relevantes en esta revisión.</p>`;
  const changesHtml = pendingCriticalChanges.length
    ? `
      <div class="critical-change-list">
        <h3>Cambios propuestos para aprobar o descartar</h3>
        <p class="critical-review-text">Revisa cada sugerencia. Puedes aplicar solo las que te convenzan; las demás se descartan sin tocar el contrato.</p>
        ${pendingCriticalChanges
          .map((change, index) => `
            <article class="critical-change-card" data-change-id="${escapeHtml(change.id)}">
              <div class="critical-change-heading">
                <strong>${index + 1}. ${escapeHtml(change.section)}</strong>
                <span data-change-status>Pendiente</span>
              </div>
              ${change.reason ? `<p>${escapeHtml(change.reason)}</p>` : ""}
              ${change.original ? `<div class="change-block old"><span>Texto actual</span><pre>${escapeHtml(change.original)}</pre></div>` : `<div class="change-block old"><span>Inserción sugerida</span><pre>Se agregará como texto nuevo al final del contrato para que lo puedas reubicar.</pre></div>`}
              ${change.replacement ? `<div class="change-block new"><span>Texto sugerido</span><pre>${escapeHtml(change.replacement)}</pre></div>` : ""}
              <div class="critical-change-actions">
                <button class="primary-action mini-action" type="button" data-critical-action="apply" data-change-id="${escapeHtml(change.id)}">Aplicar este cambio</button>
                <button class="secondary-action mini-action" type="button" data-critical-action="discard" data-change-id="${escapeHtml(change.id)}">Descartar</button>
              </div>
            </article>
          `)
          .join("")}
      </div>
    `
    : "";
  const fallbackHtml = mode === "propose" && !pendingCriticalChanges.length && result?.revisedBody
    ? `<p class="critical-review-text">La IA devolvió una propuesta completa, pero no cambios separados. Puedes integrarla completa desde el botón inferior o revisar manualmente el texto antes de aplicarla.</p>`
    : "";

  criticalReviewOutput.innerHTML = `
    <div class="critical-review-summary">${escapeHtml(result?.summary || "Revisión preliminar del contrato.")}</div>
    <div class="critical-findings">${findingsHtml}</div>
    ${changesHtml}
    ${fallbackHtml}
  `;
  applyCriticalReviewButton.classList.toggle("is-hidden", Boolean(pendingCriticalChanges.length) || !pendingCriticalReviewBody);
}

function rememberCriticalReview(result) {
  lastCriticalReviewFindings = Array.isArray(result?.findings) ? result.findings : [];
}

function confirmCriticalFindingsBefore(actionLabel) {
  const findings = lastCriticalReviewFindings.filter((finding) => {
    const severity = removeAccents(finding.severity || "").toLowerCase();
    return severity && severity !== "baja";
  });
  if (!findings.length) return true;

  const preview = findings
    .slice(0, 5)
    .map((finding, index) => `${index + 1}. ${finding.section || "Contrato"}: ${finding.observation || "Observación pendiente."}`)
    .join("\n");
  const extra = findings.length > 5 ? `\n${findings.length - 5} observación(es) adicional(es).` : "";
  return window.confirm(
    `La revisión crítica marcó ${findings.length} punto(s) relevantes:\n\n${preview}${extra}\n\nPuedes continuar si así lo decides. ¿Quieres ${actionLabel} de todos modos?`
  );
}

async function runCriticalReview(mode) {
  if (!isWorkingCopy || !editor.value.trim()) {
    showToast("Primero carga o usa un formato para revisar un contrato editable.");
    return;
  }

  pendingCriticalReviewBody = "";
  applyCriticalReviewButton.classList.add("is-hidden");
  const reviewCountry = document.querySelector("#critical-country")?.value || "México";
  criticalReviewOutput.textContent =
    mode === "propose"
      ? "Revisando contrato y preparando ajustes sugeridos..."
      : mode === "congruence"
        ? "Revisando congruencia entre contrato, anexos y documentos soporte..."
        : mode === "legal"
          ? `Revisando legislación aplicable para ${reviewCountry}...`
          : "Revisando contrato...";

  try {
    const authHeaders = await activeApiHeaders();
    let response;
    if (mode === "congruence") {
      const formData = new FormData();
      formData.append("title", cleanWorkingTitle(editorTitle.textContent));
      formData.append("mode", mode);
      formData.append("country", reviewCountry);
      formData.append("contract", editor.value);
      formData.append("missingFields", JSON.stringify(missingFieldsForActiveTemplate().map(([name, label]) => ({ name, label }))));
      formData.append("partyData", JSON.stringify(getPartyData()));
      formData.append("relatedDocuments", JSON.stringify(comparisonDocumentsForCriticalReview()));
      comparisonFileEntriesForCriticalReview().forEach(({ role, file }) => {
        formData.append("files", file, file.webkitRelativePath || file.name || `${role}-documento`);
      });
      response = await fetch("/api/review-contract", {
        method: "POST",
        headers: authHeaders,
        body: formData
      });
    } else {
      response = await fetch("/api/review-contract", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...authHeaders
        },
        body: JSON.stringify({
          title: cleanWorkingTitle(editorTitle.textContent),
          mode,
          country: reviewCountry,
          contract: editor.value,
          missingFields: missingFieldsForActiveTemplate().map(([name, label]) => ({ name, label })),
          partyData: getPartyData(),
          relatedDocuments: []
        })
      });
    }
    if (!response.ok) throw new Error("critical review unavailable");
    const result = await response.json();
    rememberCriticalReview(result);
    criticalReviewDone = true;
    updateWorkflowStepState();
    pendingCriticalReviewBody = mode === "propose" && result.revisedBody ? result.revisedBody : "";
    renderCriticalReview(result, mode);
  } catch (error) {
    const result = buildLocalCriticalReview(mode, reviewCountry);
    rememberCriticalReview(result);
    criticalReviewDone = true;
    updateWorkflowStepState();
    renderCriticalReview({
      ...result,
      summary: `${result.summary} La revisión avanzada estará disponible cuando la IA documental esté activa.`
    }, mode);
  }
}

function applyCriticalReviewSuggestion() {
  if (!pendingCriticalReviewBody) return;
  editor.value = pendingCriticalReviewBody;
  pendingCriticalReviewBody = "";
  lastCriticalReviewFindings = [];
  criticalReviewDone = true;
  applyCriticalReviewButton.classList.add("is-hidden");
  autoSaveVersion("manual");
  saveActiveDraft("Ajustes de revisión crítica integrados");
  addMatterEvent("Ajustes sugeridos por revisión crítica integrados");
  criticalReviewDialog.close();
  updateWorkflowStepState();
  showToast("Cambios sugeridos integrados. Revisa el contrato antes de exportar o firmar.");
}

function updateCriticalChangeCard(change) {
  const card = Array.from(criticalReviewOutput.querySelectorAll("[data-change-id]"))
    .find((element) => element.dataset.changeId === change.id);
  if (!card) return;
  card.classList.toggle("is-applied", change.status === "applied");
  card.classList.toggle("is-discarded", change.status === "discarded");
  const status = card.querySelector("[data-change-status]");
  if (status) status.textContent = change.status === "applied" ? "Aplicado" : change.status === "discarded" ? "Descartado" : "Pendiente";
  card.querySelectorAll("button").forEach((button) => {
    button.disabled = change.status !== "pending";
  });
}

function applyCriticalChange(changeId) {
  const change = pendingCriticalChanges.find((candidate) => candidate.id === changeId);
  if (!change || change.status !== "pending") return;
  const current = editor.value;
  if (change.original) {
    if (!current.includes(change.original)) {
      showToast("No encontré el texto exacto en el contrato. Revisa esa sugerencia manualmente.");
      return;
    }
    editor.value = current.replace(change.original, change.replacement);
  } else {
    editor.value = `${current.trim()}\n\n${change.replacement}`.trim();
  }
  change.status = "applied";
  updateCriticalChangeCard(change);
  autoSaveVersion("manual");
  saveActiveDraft("Cambio puntual de revisión crítica integrado");
  addMatterEvent("Cambio puntual de revisión crítica integrado");
  updateWorkflowStepState();
  showToast("Cambio integrado. Revisa el texto en el contrato.");
}

function discardCriticalChange(changeId) {
  const change = pendingCriticalChanges.find((candidate) => candidate.id === changeId);
  if (!change || change.status !== "pending") return;
  change.status = "discarded";
  updateCriticalChangeCard(change);
  showToast("Sugerencia descartada. El contrato no cambió.");
}

function renameActiveTemplate() {
  const current = templates[activeTemplate];
  if (!current) return;
  if (activeCatalogEditKey && current.master) {
    renameMasterTemplate(activeCatalogEditKey);
    editorTitle.textContent = templates[activeCatalogEditKey]?.title || editorTitle.textContent;
    return;
  }
  if (current.master) {
    showToast("Los formatos base no se renombran directo. Crea una copia y renombra la copia.");
    return;
  }
  const name = window.prompt("Nuevo nombre para esta copia de trabajo", current.title);
  if (!name || !name.trim()) return;

  current.title = name.trim();
  editorTitle.textContent = current.title;
  renderTemplates();
  renderCustomFields();
  renderRequirements();
  renderMatterPanel();
  if (!missingFieldsForActiveTemplate().length) assistantPane.classList.remove("open");
  autoSaveVersion("manual");
  saveActiveDraft("Copia renombrada");
  showToast("Copia renombrada. El formato base original sigue intacto.");
}

function reviewEditableFieldsFromContract() {
  const template = templates[activeTemplate];
  if (!template) return;
  if (!isWorkingCopy && !activeCatalogEditKey) {
    showToast("El formato base está protegido. Crea una copia para revisar o ajustar campos.");
    return;
  }
  const prepared = prepareTemplateFields(editor.value, template.customFields || []);
  editor.value = prepared.body;
  template.body = prepared.body;
  template.customFields = prepared.fields;
  template.fields = prepared.fields.length;
  if (activeCatalogEditKey) persistManagedTemplate(activeCatalogEditKey);
  else if (template.master) saveMasterTemplates();
  renderTemplates();
  renderDynamicFields();
  renderCustomFields();
  renderRequirements();
  setFieldsReviewedState(true);
  autosaveStatus.textContent = "Campos editables revisados";
  autosaveStatus.classList.add("autosave-highlight");
  saveActiveDraft("Campos editables revisados");
  showToast(`Campos revisados: ${prepared.fields.length} campo${prepared.fields.length === 1 ? "" : "s"} editable${prepared.fields.length === 1 ? "" : "s"} en este formato.`);
}

function clearGeneralData(event) {
  if (event) event.preventDefault();
  partyDataStore = {};
  partyForm.querySelectorAll("input, textarea, select").forEach((field) => {
    field.value = "";
    field.setAttribute("value", "");
  });
  sourceTextsBySide = { A: [], B: [] };
  partyDocumentsStepVisited = false;
  renderDynamicFields();
  renderCustomFields();
  renderRoleDrops();
  renderRequirements();
  updateWorkflowStepState();
  autosaveStatus.textContent = "Datos de partes borrados";
  autosaveStatus.classList.remove("autosave-highlight");
  saveActiveDraft("Datos de partes borrados");
  showToast("Datos de partes borrados. Puedes cargar documentos nuevos por cada parte.");
}

function manualFieldMarkup(name, label, value = "") {
  if (name === "servicioContratado") return serviceContractedFieldMarkup(label, value);
  if (isFedatarioTypeField(name)) return fedatarioTypeFieldMarkup(name, label, value);
  if (isInstrumentTypeField(name)) return instrumentTypeFieldMarkup(name, label, value);
  if (isManualDateField(name, label)) return manualDateFieldMarkup(name, label, value);
  return `
    <div class="manual-field">
      <span>${escapeHtml(label)}</span>
      <input name="${escapeHtml(name)}" value="${escapeHtml(value)}" aria-label="${escapeHtml(label)}" />
    </div>
  `;
}

function isFedatarioTypeField(name) {
  return /^tipoFedatario(?:Constitutivo|Poder)[AB]$/.test(name) || /^TIPO_FE_PUBLICA/.test(name);
}

function isInstrumentTypeField(name) {
  return /^tipoInstrumento(?:Constitutivo|Poder)[AB]$/.test(name) || /^TIPO_INSTRUMENTO/.test(name);
}

function typedSelectFieldMarkup({ name, label, value, options, help, dataAttribute }) {
  const cleanValue = String(value || "");
  return `
    <div class="manual-field">
      <span>${escapeHtml(label)}</span>
      <select name="${escapeHtml(name)}" ${dataAttribute} aria-label="${escapeHtml(label)}">
        <option value="">Selecciona una opción</option>
        ${options
          .map((option) => `<option value="${escapeHtml(option)}" ${cleanValue === option ? "selected" : ""}>${escapeHtml(option)}</option>`)
          .join("")}
      </select>
      <small>${escapeHtml(help)}</small>
    </div>
  `;
}

function fedatarioTypeFieldMarkup(name, label, value = "") {
  return typedSelectFieldMarkup({
    name,
    label,
    value,
    options: ["Notario Público", "Corredor Público"],
    help: "Si eliges notario, LexContratos propondrá escritura pública; si eliges corredor, propondrá póliza.",
    dataAttribute: "data-fedatario-kind"
  });
}

function instrumentTypeFieldMarkup(name, label, value = "") {
  return typedSelectFieldMarkup({
    name,
    label,
    value,
    options: ["Escritura pública", "Póliza", "Acta"],
    help: "El tipo de instrumento se integra en las declaraciones del contrato.",
    dataAttribute: "data-instrument-kind"
  });
}

function instrumentFieldForFedatarioField(name) {
  const match = String(name || "").match(/^tipoFedatario(Constitutivo|Poder)([AB])$/);
  if (match) return `tipoInstrumento${match[1]}${match[2]}`;
  const importedMatch = String(name || "").match(/^TIPO_FE_PUBLICA(_PODER)?_(.+)$/);
  if (importedMatch) return `TIPO_INSTRUMENTO${importedMatch[1] || "_CONST"}_${importedMatch[2]}`;
  return "";
}

function defaultInstrumentForFedatario(value) {
  const clean = removeAccents(value || "").toLowerCase();
  if (clean.includes("corredor")) return "Póliza";
  if (clean.includes("notario")) return "Escritura pública";
  return "";
}

function syncFedatarioTypeField(input) {
  const name = input?.name;
  if (!name) return false;
  const value = String(input.value || "").trim();
  partyDataStore[name] = value;
  const instrumentName = instrumentFieldForFedatarioField(name);
  const instrumentValue = defaultInstrumentForFedatario(value);
  const instrumentField = instrumentName ? partyForm.elements[instrumentName] : null;
  if (instrumentField && instrumentValue && (!String(instrumentField.value || "").trim() || instrumentField.dataset.autoInstrument === "true")) {
    instrumentField.value = instrumentValue;
    instrumentField.dataset.autoInstrument = "true";
    partyDataStore[instrumentName] = instrumentValue;
  }
  return true;
}

function syncInstrumentTypeField(input) {
  if (!input?.name) return false;
  partyDataStore[input.name] = String(input.value || "").trim();
  input.dataset.autoInstrument = "false";
  return true;
}

function isManualDateField(name, label = "") {
  if (["diaFirma", "mesFirma", "anioFirma"].includes(name)) return false;
  const text = removeAccents(`${name} ${label}`).toLowerCase();
  return text.includes("fecha") || text.includes("date");
}

function manualDateFieldMarkup(name, label, value = "") {
  const iso = isoFromDateValue(value);
  const textValue = displayDateText(value);
  const storedValue = manualDateStorageValue(value);
  return `
    <div class="manual-field date-field">
      <span>${escapeHtml(label)}</span>
      <div class="manual-field-row date-field-row">
        <input
          type="text"
          data-date-text
          data-date-target="${escapeHtml(name)}"
          value="${escapeHtml(textValue)}"
          placeholder="DD/MM/AAAA"
          inputmode="numeric"
          aria-label="${escapeHtml(label)} en formato DD/MM/AAAA"
        />
        <input type="date" data-date-picker data-date-target="${escapeHtml(name)}" value="${escapeHtml(iso)}" aria-label="Calendario para ${escapeHtml(label)}" />
      </div>
      <input type="hidden" name="${escapeHtml(name)}" value="${escapeHtml(storedValue)}" />
      <small>Selecciona una fecha en el calendario o escríbela como DD/MM/AAAA.</small>
    </div>
  `;
}

function syncManualDateTextField(input) {
  const targetName = input?.dataset?.dateTarget;
  if (!targetName) return false;
  const iso = isoFromDateValue(input.value);
  const storedValue = manualDateStorageValue(input.value);
  const hidden = partyForm.elements[targetName];
  if (hidden) hidden.value = storedValue;
  partyDataStore[targetName] = storedValue;
  const field = input.closest(".date-field");
  const picker = field?.querySelector("[data-date-picker]");
  if (picker) picker.value = iso;
  return Boolean(storedValue);
}

function syncManualDatePickerField(input) {
  const targetName = input?.dataset?.dateTarget;
  const iso = isoFromDateValue(input?.value);
  if (!targetName) return false;
  if (!String(input?.value || "").trim()) {
    const field = input.closest(".date-field");
    const textInput = field?.querySelector("[data-date-text]");
    const hidden = partyForm.elements[targetName];
    if (textInput) textInput.value = "";
    if (hidden) hidden.value = "";
    partyDataStore[targetName] = "";
    return true;
  }
  if (!iso) return false;
  const textValue = dateTextFromIso(iso);
  const storedValue = legalDateFromIso(iso);
  const field = input.closest(".date-field");
  const textInput = field?.querySelector("[data-date-text]");
  const hidden = partyForm.elements[targetName];
  if (textInput) textInput.value = textValue;
  if (hidden) hidden.value = storedValue;
  partyDataStore[targetName] = storedValue;
  return true;
}

function serviceContractedFieldMarkup(label, value = "") {
  const selectedService = serviceCatalog.find((service) => service.name === value);
  const isCatalogValue = Boolean(selectedService);
  const modeValue = isCatalogValue ? MATERIALIDAD_SERVICE_VALUE : OTHER_SERVICE_VALUE;
  const selectedValue = isCatalogValue ? selectedService.name : serviceCatalog[0]?.name || "";
  const customValue = isCatalogValue ? selectedService.name : value;
  return `
    <div class="manual-field service-contracted-field">
      <span>${escapeHtml(label)}</span>
      <select data-service-mode aria-label="Origen del servicio contratado">
        <option value="${OTHER_SERVICE_VALUE}" ${modeValue === OTHER_SERVICE_VALUE ? "selected" : ""}>Otros</option>
        <option value="${MATERIALIDAD_SERVICE_VALUE}" ${modeValue === MATERIALIDAD_SERVICE_VALUE ? "selected" : ""}>Catálogo de servicios Materialidad</option>
      </select>
      <select class="service-catalog-select" data-service-catalog aria-label="Catálogo de servicios Materialidad" ${modeValue === MATERIALIDAD_SERVICE_VALUE ? "" : "hidden"}>
        ${serviceCatalog
          .map(
            (service) => `<option value="${escapeHtml(service.name)}" ${selectedValue === service.name ? "selected" : ""}>${escapeHtml(`${service.folio} · ${service.name} · ${service.scheme}`)}</option>`
          )
          .join("")}
      </select>
      <input
        class="service-custom-input"
        data-service-value
        name="servicioContratado"
        type="${modeValue === MATERIALIDAD_SERVICE_VALUE ? "hidden" : "text"}"
        value="${escapeHtml(customValue)}"
        placeholder="Escribe el servicio contratado"
        aria-label="Servicio contratado"
      />
      <small>Elige “Otros” para capturar manualmente o abre el catálogo Materialidad solo cuando aplique.</small>
    </div>
  `;
}

function syncServiceCatalogMetadata(service) {
  if (!service) return;
  const folioInput = partyForm.elements.folioInterno;
  const currentFolio = String(folioInput?.value || partyDataStore.folioInterno || "").trim();
  const canReplaceFolio = !currentFolio || serviceCatalog.some((item) => item.folio.toLowerCase() === currentFolio.toLowerCase());
  if (canReplaceFolio) {
    partyDataStore.folioInterno = service.folio;
    if (folioInput) folioInput.value = service.folio;
  }
}

function syncServiceContractedField(control) {
  const field = control.closest(".service-contracted-field");
  const modeSelect = field?.querySelector("[data-service-mode]");
  const catalogSelect = field?.querySelector("[data-service-catalog]");
  const input = field?.querySelector("[data-service-value]");
  if (!modeSelect || !catalogSelect || !input) return;
  if (modeSelect.value === OTHER_SERVICE_VALUE) {
    catalogSelect.hidden = true;
    input.type = "text";
    if (serviceCatalog.some((service) => service.name === input.value)) input.value = "";
    partyDataStore.servicioContratado = input.value.trim();
    if (control === modeSelect) input.focus({ preventScroll: true });
    return;
  }
  catalogSelect.hidden = false;
  const selectedService = serviceCatalog.find((service) => service.name === catalogSelect.value) || serviceCatalog[0];
  if (selectedService) catalogSelect.value = selectedService.name;
  input.type = "hidden";
  input.value = selectedService?.name || "";
  partyDataStore.servicioContratado = input.value;
  syncServiceCatalogMetadata(selectedService);
}

function signatureDateFieldMarkup(values) {
  const iso = signatureDateIsoFromValues(values);
  return `
    <div class="manual-field signature-date-field">
      <span>Fecha de firma</span>
      <div class="manual-field-row date-field-row">
        <input type="text" data-signature-date-text value="${escapeHtml(dateTextFromIso(iso))}" placeholder="DD/MM/AAAA" inputmode="numeric" aria-label="Fecha de firma en formato DD/MM/AAAA" />
        <input type="date" data-signature-date value="${escapeHtml(iso)}" aria-label="Calendario de fecha de firma" />
      </div>
      <input type="hidden" name="diaFirma" value="${escapeHtml(values.diaFirma || "")}" />
      <input type="hidden" name="mesFirma" value="${escapeHtml(values.mesFirma || "")}" />
      <input type="hidden" name="anioFirma" value="${escapeHtml(values.anioFirma || "")}" />
      <small>Selecciona la fecha o escríbela como DD/MM/AAAA; LexContratos llenará día, mes y año en el contrato.</small>
    </div>
  `;
}

function renderDynamicFields() {
  const values = getPartyData();
  const sections = getRoles()
    .map((role) => {
      const pending = fieldsForRole(role).filter(([name]) => !String(values[name] || "").trim());
      if (!pending.length) return "";
      return `
        <div class="field-group-title">
          <p class="eyebrow">${escapeHtml(role.label)}</p>
          <strong>Pendiente de ${escapeHtml(values[role.part] || role.label)}</strong>
        </div>
        ${pending.map(([name, label]) => manualFieldMarkup(name, label, values[name] || "")).join("")}
      `;
    })
    .filter(Boolean);
  dynamicFields.innerHTML = sections.length
    ? sections.join("")
    : `<div class="field-group-title empty-state"><p class="eyebrow">Sin pendientes</p><strong>Los datos requeridos que siguen en el contrato ya están completos.</strong></div>`;
}

function renderCustomFields() {
  const dynamicNames = new Set(getRoles().flatMap((role) => fieldsForRole(role).map(([name]) => name)));
  const values = getPartyData();
  const templateNames = fieldNamesInText(editor?.value || templates[activeTemplate]?.body || "");
  const signatureDateNames = new Set(["diaFirma", "mesFirma", "anioFirma"]);
  const fields = (templates[activeTemplate]?.customFields || [])
    .filter((field) => templateNames.has(field.name))
    .filter((field) => !dynamicNames.has(field.name))
    .filter((field) => !String(values[field.name] || "").trim());
  const hasSignatureDateFields = fields.some((field) => signatureDateNames.has(field.name));
  const standaloneFields = fields.filter((field) => !signatureDateNames.has(field.name));
  customFields.innerHTML = "";
  if (!fields.length) return;

  customFields.innerHTML = `
    <div class="field-group-title">
      <p class="eyebrow">Campos propios</p>
      <strong>Pendientes de ${escapeHtml(templates[activeTemplate].title)}</strong>
    </div>
    ${hasSignatureDateFields ? signatureDateFieldMarkup(values) : ""}
    ${standaloneFields.map((field) => manualFieldMarkup(field.name, field.label, values[field.name] || "")).join("")}
  `;
}

function renderRoleDrops() {
  const values = getPartyData();
  roleDropGrid.innerHTML = documentUploadRoles()
    .map((role) => {
      const files = sourceTextsBySide[role.side] || [];
      const partyName = values[role.part] || role.label;
      const roleHint = documentRoleHint(role);
      return `
        <section class="role-drop" data-side="${role.side}">
          <header>
            <div>
              <p class="eyebrow">${escapeHtml(role.label)}</p>
              <h3>${escapeHtml(partyName)}</h3>
            </div>
            <span>${files.length} archivo${files.length === 1 ? "" : "s"}</span>
          </header>
          <label>
            <input class="role-file-input" type="file" multiple accept=".csv,.txt,.eml,.pdf,.xlsx,.xls,.docx,.jpg,.jpeg,.png,.webp" data-side="${role.side}" />
            <strong>Sube documentos de ${escapeHtml(role.label)}.</strong>
            <small>${escapeHtml(roleHint)} Arrastra aquí actas, poderes, constancias fiscales, identificaciones, correos, PDF, Word, Excel o una carpeta completa de ${escapeHtml(partyName)}.</small>
          </label>
          <button class="folder-upload-trigger" type="button" data-side="${role.side}">Cargar carpeta completa</button>
          <input class="role-folder-input" type="file" multiple webkitdirectory directory data-side="${role.side}" />
          <ul class="role-file-list">${files.map((file) => `<li><span>${file.type || classifySupportDocument(file.name)} · ${file.name}</span><strong>${file.size}</strong></li>`).join("")}</ul>
        </section>
      `;
    })
    .join("");
}

function renderRequirements() {
  const values = getPartyData();
  requirementsList.innerHTML = requiredFieldsForActiveTemplate()
    .map(([name, label]) => {
      const complete = Boolean((values[name] || "").trim());
      return `<div class="requirement ${complete ? "complete" : ""}">
        <span>${complete ? "✓" : "!"}</span>
        <strong>${label}</strong>
      </div>`;
    })
    .join("");
  updateWorkflowStepState();
}

function renderFolderSelector() {
  if (!contractFolderSelect) return;
  const sorted = folders.slice().sort((a, b) => a.localeCompare(b, "es"));
  contractFolderSelect.innerHTML = sorted.map((folder) => `<option value="${folder}">${folder}</option>`).join("");
  if (!sorted.includes(activeFolder)) activeFolder = sorted[0] || "Mis Documentos";
  contractFolderSelect.value = activeFolder;
}

function folderParent(path) {
  const parts = String(path || "").split("/").filter(Boolean);
  parts.pop();
  return parts.join("/");
}

function directChildFolders(parent = "") {
  if (!parent) return rootFolders.filter((root) => folders.includes(root));
  const prefix = `${parent}/`;
  return folders
    .filter((folder) => folder.startsWith(prefix))
    .filter((folder) => {
      const rest = folder.slice(prefix.length);
      return rest && !rest.includes("/");
    })
    .sort((a, b) => a.localeCompare(b, "es"));
}

function folderColumnParents() {
  const parts = String(activeFolder || "Mis Documentos").split("/").filter(Boolean);
  const columns = [""];
  let path = "";
  parts.forEach((part) => {
    path = path ? `${path}/${part}` : part;
    columns.push(path);
  });
  return columns.filter((value, index, list) => list.indexOf(value) === index);
}

function folderCounts(folder) {
  const subfolders = directChildFolders(folder).length;
  const contracts = savedContracts.filter((contract) => contract.folder === folder).length;
  const savedVersions = versions.filter((version) => version.folder === folder).length;
  const documents = supportDocuments.filter((document) => document.folder === folder).length;
  return { subfolders, contracts, savedVersions, documents };
}

function folderMetaText(folder) {
  const { subfolders, contracts, documents } = folderCounts(folder);
  const parts = [];
  if (subfolders) parts.push(`${subfolders} carpeta${subfolders === 1 ? "" : "s"}`);
  if (contracts) parts.push(`${contracts} contrato${contracts === 1 ? "" : "s"}`);
  if (documents) parts.push(`${documents} documento${documents === 1 ? "" : "s"}`);
  return parts.join(" · ") || "Vacía";
}

function archiveKey(type, id) {
  return `${type}::${id}`;
}

function parseArchiveKey(key) {
  const separator = String(key).indexOf("::");
  if (separator < 0) return { type: "", id: "" };
  return {
    type: key.slice(0, separator),
    id: key.slice(separator + 2)
  };
}

function archiveMatches(...values) {
  if (!archiveSearchTerm) return true;
  const haystack = removeAccents(values.join(" ")).toLowerCase();
  return haystack.includes(archiveSearchTerm);
}

function archiveDateValue(value) {
  const parsed = Date.parse(String(value || ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function archiveSizeValue(value) {
  const match = String(value || "").match(/([\d.,]+)/);
  if (!match) return 0;
  return Number(match[1].replace(",", ".")) || 0;
}

function compareArchiveItems(left, right) {
  const direction = archiveSortDirection === "desc" ? -1 : 1;
  const a = left.sort?.[archiveSortKey] ?? "";
  const b = right.sort?.[archiveSortKey] ?? "";
  if (typeof a === "number" || typeof b === "number") {
    return ((Number(a) || 0) - (Number(b) || 0)) * direction;
  }
  return String(a).localeCompare(String(b), "es", { sensitivity: "base", numeric: true }) * direction;
}

function archiveSortLabel(key) {
  if (archiveSortKey !== key) return "";
  return archiveSortDirection === "asc" ? " ↑" : " ↓";
}

function isArchiveSelected(type, id) {
  return selectedArchiveItems.has(archiveKey(type, id));
}

function currentArchiveTargets() {
  const selected = Array.from(selectedArchiveItems).map(parseArchiveKey).filter((item) => item.type && item.id);
  if (selected.length) return selected;
  return hoveredArchiveItem?.type && hoveredArchiveItem?.id ? [hoveredArchiveItem] : [];
}

function archiveActionCapabilities(targets = currentArchiveTargets()) {
  const usefulTargets = targets.filter((item) => item.type !== "parent");
  const documentTargets = usefulTargets.filter((item) => item.type === "contract" || item.type === "document");
  const folderTargets = usefulTargets.filter((item) => item.type === "folder");
  const templateTargets = usefulTargets.filter((item) => item.type === "template");
  const letterheadTargets = usefulTargets.filter((item) => item.type === "letterhead");
  return {
    rename: usefulTargets.length === 1,
    move: documentTargets.length > 0 && folderTargets.length === 0 && templateTargets.length === 0 && letterheadTargets.length === 0,
    copy: documentTargets.length > 0 && folderTargets.length === 0,
    delete: usefulTargets.length > 0
  };
}

function renderArchiveToolbarState() {
  archiveViewButtons.forEach((button) => button.classList.toggle("active", button.dataset.archiveView === archiveViewMode));
  if (archiveDeleteSelectedButton) archiveDeleteSelectedButton.disabled = selectedArchiveItems.size === 0;
  const targets = currentArchiveTargets();
  const capabilities = archiveActionCapabilities(targets);
  document.querySelectorAll("[data-archive-action]").forEach((button) => {
    const action = button.dataset.archiveAction;
    button.disabled = !capabilities[action];
    button.classList.toggle("has-target", Boolean(targets.length));
  });
  document.querySelectorAll("[data-archive-sort]").forEach((button) => {
    const key = button.dataset.archiveSort;
    button.classList.toggle("active", key === archiveSortKey);
    const baseLabel = button.dataset.sortLabel || button.textContent.trim();
    button.textContent = `${baseLabel}${archiveSortLabel(key)}`;
  });
}

function contractFileSize(contract) {
  const characters = String(contract?.body || "").length;
  const kb = Math.max(1, Math.ceil(characters / 1024));
  return `${kb} KB`;
}

function renderFinderPath() {
  if (!finderPath) return;
  const parts = String(activeFolder || "Mis Documentos").split("/").filter(Boolean);
  let path = "";
  finderPath.innerHTML = parts
    .map((part, index) => {
      path = path ? `${path}/${part}` : part;
      const separator = index === 0 ? "" : `<span>/</span>`;
      return `${separator}<button type="button" class="finder-crumb" data-folder="${escapeHtml(path)}">${escapeHtml(part)}</button>`;
    })
    .join("");
}

function folderColumnParentsFor(folder) {
  const parts = String(folder || "Mis Documentos").split("/").filter(Boolean);
  const columns = [""];
  let path = "";
  parts.forEach((part) => {
    path = path ? `${path}/${part}` : part;
    columns.push(path);
  });
  return columns.filter((value, index, list) => list.indexOf(value) === index);
}

function renderSaveLocationBrowser() {
  if (!saveLocationBrowser || !saveLocationSelected) return;
  let selected = ensureFolderPath(saveLocationState.folder || activeFolder || "Mis Documentos");
  if (!saveDialogRootFolders().includes(folderRoot(selected))) selected = "Mis Documentos";
  saveLocationState.folder = selected;
  saveLocationSelected.textContent = selected;
  if (saveLocationFileName) {
    saveLocationFileName.value = saveLocationState.fileName || saveLocationState.defaultName || "";
    saveLocationFileName.closest("label")?.classList.toggle("is-hidden", !saveLocationState.requireName);
  }
  saveLocationConfirm.textContent = saveLocationState.confirmLabel || "Guardar aquí";
  const parent = folderParent(selected);
  const folderRows = directChildFolders(selected)
    .map((folder) => {
      const label = folder.split("/").pop();
      const root = rootFolders.includes(folder);
      return `
        <article class="save-file-row save-folder-row" data-save-folder="${escapeHtml(folder)}" title="${escapeHtml(folder)}">
          <button class="save-file-name save-folder-option" type="button" data-save-folder="${escapeHtml(folder)}">
            <strong>${escapeHtml(label)}</strong>
          </button>
          <span>--</span>
          <span>${escapeHtml(folderMetaText(folder))}</span>
          <span>Carpeta</span>
          <div class="save-folder-actions">
            <button class="folder-action save-folder-action" type="button" data-save-action="rename" data-save-folder="${escapeHtml(folder)}" ${root ? "disabled" : ""}>Renombrar</button>
            <button class="folder-action danger save-folder-action" type="button" data-save-action="delete" data-save-folder="${escapeHtml(folder)}" ${root ? "disabled" : ""}>Eliminar</button>
          </div>
        </article>
      `;
    })
    .join("");
  const contractRows = savedContracts
    .filter((contract) => contract.folder === selected)
    .slice()
    .reverse()
    .map((contract) => `
      <div class="save-file-row is-file" title="${escapeHtml(contract.title)}">
        <span class="save-file-name"><span aria-hidden="true">□</span><strong>${escapeHtml(contract.title)}</strong></span>
        <span>${escapeHtml(contract.date || "")}</span>
        <span>${escapeHtml(contractFileSize(contract))}</span>
        <span>Contrato</span>
        <span></span>
      </div>
    `)
    .join("");
  const documentRows = supportDocuments
    .filter((document) => document.folder === selected)
    .slice()
    .reverse()
    .map((document) => `
      <div class="save-file-row is-file" title="${escapeHtml(document.name)}">
        <span class="save-file-name"><span aria-hidden="true">□</span><strong>${escapeHtml(document.name)}</strong></span>
        <span>${escapeHtml(document.date || "")}</span>
        <span>${escapeHtml(document.size || "")}</span>
        <span>${escapeHtml(document.type || "Documento")}</span>
        <span></span>
      </div>
    `)
    .join("");
  const emptyRows = !folderRows && !contractRows && !documentRows ? `<div class="save-file-empty">Esta carpeta está vacía. Haz clic derecho aquí para crear una carpeta dentro de esta ruta.</div>` : "";
  saveLocationBrowser.innerHTML = `
    <div class="save-location-shell" data-save-folder="${escapeHtml(selected)}">
      <aside class="save-location-roots" aria-label="Carpetas raíz">
        ${saveDialogRootFolders()
          .map((root) => `
            <button class="save-folder-option ${selected === root || selected.startsWith(`${root}/`) ? "active" : ""}" type="button" data-save-folder="${escapeHtml(root)}">
              ${escapeHtml(root)}
            </button>
          `)
          .join("")}
      </aside>
      <section class="save-location-files" aria-label="Contenido de carpeta">
        <div class="save-location-toolbar">
          <button class="secondary-action mini-action save-folder-option" type="button" data-save-folder="${escapeHtml(parent || selected)}" ${parent ? "" : "disabled"}>Atrás</button>
          <strong>${escapeHtml(selected)}</strong>
          <span class="save-location-hint">Clic derecho: nueva carpeta, renombrar o eliminar</span>
        </div>
        <div class="save-file-header">
          <span>Nombre</span>
          <span>Fecha de modificación</span>
          <span>Tamaño</span>
          <span>Clase</span>
          <span>Acciones</span>
        </div>
        <div class="save-file-list">
          ${folderRows}${contractRows}${documentRows}${emptyRows}
        </div>
      </section>
    </div>
  `;
}

function resolveSaveLocation(folder) {
  const resolver = saveLocationResolve;
  saveLocationResolve = null;
  if (saveLocationDialog?.open) saveLocationDialog.close();
  if (resolver) resolver(folder);
}

function openSaveLocationDialog({ title = "Elige dónde guardar", initialFolder = activeFolder, confirmLabel = "Guardar aquí", defaultName = "", requireName = false } = {}) {
  if (!saveLocationDialog) return Promise.resolve({ folder: initialFolder || activeFolder, fileName: defaultName });
  return new Promise((resolve) => {
    saveLocationResolve = resolve;
    saveLocationState = {
      folder: ensureFolderPath(initialFolder || activeFolder || "Mis Documentos"),
      confirmLabel,
      defaultName,
      fileName: defaultName,
      requireName
    };
    if (saveLocationTitle) saveLocationTitle.textContent = title;
    renderSaveLocationBrowser();
    saveLocationDialog.showModal();
  });
}

function createFolderInsideSaveLocationAt(folder = saveLocationState.folder || "Mis Documentos") {
  const baseFolder = ensureFolderPath(folder || saveLocationState.folder || "Mis Documentos");
  const name = window.prompt(`Nombre de la nueva carpeta dentro de "${baseFolder}"`);
  if (!name || !name.trim()) return;
  saveLocationState.fileName = saveLocationFileName?.value || saveLocationState.fileName || saveLocationState.defaultName || "";
  saveLocationState.folder = ensureFolderPath(`${baseFolder}/${name.trim().replace(/\//g, " ")}`, baseFolder.split("/")[0] || "Mis Documentos");
  renderFolders();
  renderSaveLocationBrowser();
  showToast(`Carpeta lista: ${saveLocationState.folder}.`);
}

function renameFolderInsideSaveLocation(folder) {
  saveLocationState.fileName = saveLocationFileName?.value || saveLocationState.fileName || saveLocationState.defaultName || "";
  const newPath = renameFolder(folder);
  if (!newPath) return;
  saveLocationState.folder = replaceFolderPath(saveLocationState.folder || activeFolder, folder, newPath);
  renderSaveLocationBrowser();
}

function deleteFolderInsideSaveLocation(folder) {
  saveLocationState.fileName = saveLocationFileName?.value || saveLocationState.fileName || saveLocationState.defaultName || "";
  const parent = folderParent(folder) || "Mis Documentos";
  if (!deleteFolder(folder)) return;
  saveLocationState.folder = pathInFolder(saveLocationState.folder || activeFolder, folder) ? parent : saveLocationState.folder;
  if (!folders.includes(saveLocationState.folder)) saveLocationState.folder = "Mis Documentos";
  renderSaveLocationBrowser();
}

function ensureFolderPath(value, fallbackRoot = activeFolder.split("/")[0] || "Mis Documentos") {
  const parts = String(value || "")
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
  if (!parts.length) return activeFolder || "Mis Documentos";
  if (!rootFolders.includes(parts[0])) parts.unshift(rootFolders.includes(fallbackRoot) ? fallbackRoot : "Mis Documentos");

  let path = "";
  parts.forEach((part) => {
    path = path ? `${path}/${part}` : part;
    if (!folders.includes(path)) folders.push(path);
  });
  saveFolders();
  return path;
}

function safeFolderName(value, fallback = "Parte") {
  return String(value || fallback)
    .replace(/\//g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 90) || fallback;
}

function roleFolderLabel(role) {
  return String(role?.label || "Parte")
    .replace(/\s*\/\s*/g, " o ")
    .replace(/\s+/g, " ")
    .trim();
}

function supportFolderNameForRole(role, values = getPartyData()) {
  const roleName = safeFolderName(roleFolderLabel(role));
  const partyName = String(values?.[role?.part] || "").trim();
  const readableParty = partyName ? safeFolderName(partyName) : "Sin identificar";
  return safeFolderName(`${roleName} - ${readableParty}`, roleName);
}

function supportFolderForRole(role, values = getPartyData()) {
  return ensureFolderPath(`Documentos de las partes/${supportFolderNameForRole(role, values)}`, "Documentos de las partes");
}

function reconcileSupportDocumentFolders(values = getPartyData()) {
  const draftId = activeMatterDraftId;
  let changed = false;
  getRoles().forEach((role) => {
    const targetFolder = supportFolderForRole(role, values);
    const partyName = values[role.part] || role.label || "Parte";
    const activeEntries = new Set((sourceTextsBySide[role.side] || []).map((entry) => `${entry.name}-${entry.size}`));
    supportDocuments = supportDocuments.map((document) => {
      const belongsToActiveDraft = (draftId && document.draftId === draftId) || (activeMatterFolio && document.folio === activeMatterFolio);
      const belongsToVisibleUploads = activeEntries.has(`${document.name}-${document.size}`);
      if (document.roleLabel !== role.label || (!belongsToActiveDraft && !belongsToVisibleUploads)) return document;
      if (document.folder === targetFolder && document.party === partyName) return document;
      changed = true;
      return { ...document, folder: targetFolder, party: partyName };
    });
  });
  if (changed) saveSupportDocuments();
  return changed;
}

function normalizeLegacySupportFolders() {
  const roles = getRoles();
  const replacements = [
    ["Documentos de las partes/Parte A", `Documentos de las partes/${safeFolderName(roles[0]?.label || "Contratante")} - Sin identificar`],
    ["Documentos de las partes/Parte B", `Documentos de las partes/${safeFolderName(roles[1]?.label || "Contraparte")} - Sin identificar`],
    [`Documentos de las partes/${safeFolderName(roles[0]?.label || "Contratante")} - Sin identificar`, `Documentos de las partes/${supportFolderNameForRole(roles[0], {})}`],
    [`Documentos de las partes/${safeFolderName(roles[1]?.label || "Contraparte")} - Sin identificar`, `Documentos de las partes/${supportFolderNameForRole(roles[1], {})}`]
  ];
  let changed = false;
  replacements.forEach(([oldPath, newPath]) => {
    if (oldPath === newPath) return;
    if (folders.some((folder) => pathInFolder(folder, oldPath))) {
      folders = folders.map((folder) => replaceFolderPath(folder, oldPath, newPath));
      changed = true;
    }
    supportDocuments = supportDocuments.map((document) => {
      if (!pathInFolder(document.folder || "", oldPath)) return document;
      changed = true;
      return {
        ...document,
        folder: replaceFolderPath(document.folder || "", oldPath, newPath),
        party: document.party && !/^Parte [AB]$/i.test(document.party) ? document.party : newPath.split("/").pop()
      };
    });
  });
  if (!changed) return;
  folders = Array.from(new Set([...rootFolders, ...folders]));
  saveFolders();
  saveSupportDocuments();
}

function templatesForSystemFolder(folder) {
  if (folder !== "Formatos del sistema") return [];
  return Object.entries(templates)
    .filter(([, template]) => template?.master)
    .filter(([key]) => canManageTemplateCatalog(key));
}

function letterheadsForSystemFolder(folder) {
  if (folder !== "Catálogos del sistema/Membretes") return [];
  return loadLetterheadLogos();
}

function systemFolderSubtitle(folder) {
  if (folder === "Formatos del sistema") return "Catálogo editable";
  if (folder === "Catálogos del sistema") return "Membretes y catálogos";
  if (folder === "Catálogos del sistema/Membretes") return "Catálogo de membretes";
  return folderMetaText(folder);
}

function renderFolders() {
  refreshRootFolders();
  syncSystemCatalogFolders();
  folders = Array.from(new Set([...rootFolders, ...folders])).sort((a, b) => a.localeCompare(b, "es"));
  normalizeLegacySupportFolders();
  folders = Array.from(new Set([...rootFolders, ...folders])).sort((a, b) => a.localeCompare(b, "es"));
  while (!folders.includes(activeFolder) && folderParent(activeFolder)) {
    activeFolder = folderParent(activeFolder);
  }
  if (!folders.includes(activeFolder) || !folderAllowedForCurrentUser(activeFolder)) activeFolder = "Mis Documentos";
  renderFinderPath();
  const children = directChildFolders(activeFolder).filter((folder) => archiveMatches(folder, folder.split("/").pop(), folderMetaText(folder)));
  const visibleContracts = savedContracts
    .filter((contract) => contract.folder === activeFolder)
    .filter((contract) => archiveMatches(contract.title, contract.status || "", contract.date || "", contractFileSize(contract), "Contrato"));
  const visibleDocuments = supportDocuments
    .filter((document) => document.folder === activeFolder)
    .filter((document) => archiveMatches(document.name, document.type || "", document.size || "", document.date || "", document.roleLabel || "", document.party || ""));
  const rowForFolder = (folder, { root = false } = {}) => {
    const label = folder.split("/").pop();
    const description = isSystemRoot(folder) ? systemFolderSubtitle(folder) : folderMetaText(folder);
    const canSelect = !rootFolders.includes(folder);
    const sizeText = isSystemRoot(folder) ? systemFolderSubtitle(folder) : folderMetaText(folder);
    return `
      <article class="finder-row ${folder === activeFolder ? "active" : ""} ${root ? "root-row" : ""} ${isArchiveSelected("folder", folder) ? "is-selected" : ""}" data-folder="${escapeHtml(folder)}" data-archive-row="folder" data-archive-id="${escapeHtml(folder)}" title="${escapeHtml(folder)}">
        <span class="archive-name-cell">
          <input class="archive-select" type="checkbox" data-archive-type="folder" data-archive-id="${escapeHtml(folder)}" ${canSelect ? "" : "disabled"} ${isArchiveSelected("folder", folder) ? "checked" : ""} aria-label="Seleccionar carpeta ${escapeHtml(label)}" />
          <button class="folder-item finder-folder" type="button" data-folder="${escapeHtml(folder)}">
            <span class="finder-icon" aria-hidden="true">▣</span>
            <span class="finder-name">
              <strong>${escapeHtml(label)}</strong>
              <small>${escapeHtml(description)}</small>
            </span>
          </button>
        </span>
        <span class="archive-row-action-space"></span>
        <span>--</span>
        <span>${escapeHtml(sizeText)}</span>
        <span>Carpeta</span>
      </article>
    `;
  };
  const rowForContract = (contract) => `
    <article class="finder-row content-row saved-contract ${isArchiveSelected("contract", contract.id) ? "is-selected" : ""}" data-id="${contract.id}" data-archive-row="contract" data-archive-id="${contract.id}">
      <span class="archive-name-cell">
        <input class="archive-select" type="checkbox" data-archive-type="contract" data-archive-id="${contract.id}" ${isArchiveSelected("contract", contract.id) ? "checked" : ""} aria-label="Seleccionar contrato ${escapeHtml(contract.title)}" />
        <button class="saved-contract-open open-saved-contract" type="button" data-id="${contract.id}">
          <span class="finder-icon" aria-hidden="true">□</span>
          <span>
            <strong>${escapeHtml(contract.title)}</strong>
            <small>${escapeHtml(contract.status || (contract.language || "es").toUpperCase())} · ${escapeHtml(contract.date || "")}</small>
          </span>
        </button>
      </span>
      <span class="archive-row-action-space"></span>
      <span>${escapeHtml(contract.date || "")}</span>
      <span>${escapeHtml(contractFileSize(contract))}</span>
      <span>Contrato</span>
    </article>
  `;
  const rowForDocument = (document) => `
    <article class="finder-row content-row saved-contract support-document ${isArchiveSelected("document", document.id) ? "is-selected" : ""}" data-document-id="${document.id}" data-archive-row="document" data-archive-id="${document.id}">
      <span class="archive-name-cell">
        <input class="archive-select" type="checkbox" data-archive-type="document" data-archive-id="${document.id}" ${isArchiveSelected("document", document.id) ? "checked" : ""} aria-label="Seleccionar documento ${escapeHtml(document.name)}" />
        <button class="saved-contract-open" type="button" disabled>
          <span class="finder-icon" aria-hidden="true">□</span>
          <span>
            <strong>${escapeHtml(document.name)}</strong>
            <small>${escapeHtml(document.type || "Documento soporte")} · ${escapeHtml(document.size || "")}</small>
          </span>
        </button>
      </span>
      <span class="archive-row-action-space"></span>
      <span>${escapeHtml(document.date || "")}</span>
      <span>${escapeHtml(document.size || "")}</span>
      <span>${escapeHtml(document.type || "Documento")}</span>
    </article>
  `;
  const rowForTemplate = ([key, template]) => `
    <article class="finder-row content-row system-template-row ${isArchiveSelected("template", key) ? "is-selected" : ""}" data-template="${escapeHtml(key)}" data-archive-row="template" data-archive-id="${escapeHtml(key)}">
      <span class="archive-name-cell">
        <input class="archive-select" type="checkbox" data-archive-type="template" data-archive-id="${escapeHtml(key)}" ${isArchiveSelected("template", key) ? "checked" : ""} aria-label="Seleccionar formato ${escapeHtml(template.title)}" />
        <button class="saved-contract-open open-system-template" type="button" data-template="${escapeHtml(key)}">
          <span class="finder-icon document-icon" aria-hidden="true">□</span>
          <span>
            <strong>${escapeHtml(template.title || "Formato sin nombre")}</strong>
            <small>Formato del sistema · ${Number(template.fields || 0)} campos</small>
          </span>
        </button>
      </span>
      <span class="archive-row-action-space"></span>
      <span>${escapeHtml(template.updatedAt || template.updated_at || template.metadata?.updatedAt || "--")}</span>
      <span>${Number(template.fields || 0)} campos</span>
      <span>Formato</span>
    </article>
  `;
  const rowForLetterhead = (logo) => `
    <article class="finder-row content-row system-letterhead-row ${isArchiveSelected("letterhead", logo.id) ? "is-selected" : ""}" data-letterhead-id="${escapeHtml(logo.id)}" data-archive-row="letterhead" data-archive-id="${escapeHtml(logo.id)}">
      <span class="archive-name-cell">
        <input class="archive-select" type="checkbox" data-archive-type="letterhead" data-archive-id="${escapeHtml(logo.id)}" ${isArchiveSelected("letterhead", logo.id) ? "checked" : ""} aria-label="Seleccionar membrete ${escapeHtml(logo.name)}" />
        <button class="saved-contract-open open-system-letterhead" type="button" data-letterhead-id="${escapeHtml(logo.id)}">
          <span class="finder-icon document-icon" aria-hidden="true">□</span>
          <span>
            <strong>${escapeHtml(logo.name || "Membrete sin nombre")}</strong>
            <small>${escapeHtml(logo.companyName || logo.name || "Membrete")} · ${logo.source === "catalog" ? "Precargado" : "Propio"}</small>
          </span>
        </button>
      </span>
      <span class="archive-row-action-space"></span>
      <span>${escapeHtml(logo.date || "--")}</span>
      <span>${logo.dataUrl ? "Imagen" : "--"}</span>
      <span>Membrete</span>
    </article>
  `;
  const visibleTemplates = templatesForSystemFolder(activeFolder)
    .filter(([, template]) => archiveMatches(template.title, "Formato del sistema", "Formato"));
  const visibleLetterheads = letterheadsForSystemFolder(activeFolder)
    .filter((logo) => archiveMatches(logo.name, logo.companyName || "", "Membrete"));
  const contentItems = [
    ...children.map((folder) => ({
      html: rowForFolder(folder, { root: rootFolders.includes(folder) }),
      sort: {
        name: folder.split("/").pop(),
        date: 0,
        size: 0,
        class: "Carpeta"
      }
    })),
    ...visibleContracts.map((contract) => ({
      html: rowForContract(contract),
      sort: {
        name: contract.title || "",
        date: archiveDateValue(contract.date),
        size: archiveSizeValue(contractFileSize(contract)),
        class: "Contrato"
      }
    })),
    ...visibleDocuments.map((document) => ({
      html: rowForDocument(document),
      sort: {
        name: document.name || "",
        date: archiveDateValue(document.date),
        size: archiveSizeValue(document.size),
        class: document.type || "Documento"
      }
    })),
    ...visibleTemplates.map(([key, template]) => ({
      html: rowForTemplate([key, template]),
      sort: {
        name: template.title || "",
        date: archiveDateValue(template.updatedAt || template.updated_at || template.metadata?.updatedAt),
        size: Number(template.fields || 0),
        class: "Formato"
      }
    })),
    ...visibleLetterheads.map((logo) => ({
      html: rowForLetterhead(logo),
      sort: {
        name: logo.name || "",
        date: archiveDateValue(logo.date),
        size: logo.dataUrl ? String(logo.dataUrl).length : 0,
        class: "Membrete"
      }
    }))
  ].sort(compareArchiveItems);
  const contentRows = contentItems.map((item) => item.html);
  const regularRootButtons = rootFolders.filter((root) => !systemRootFolders.includes(root));
  const systemRootButtons = rootFolders.filter((root) => systemRootFolders.includes(root));
  const rootButton = (root, extraClass = "") => `
    <button class="folder-item archive-root ${extraClass} ${activeFolder === root || activeFolder.startsWith(`${root}/`) ? "active" : ""}" type="button" data-folder="${escapeHtml(root)}">
      ${escapeHtml(root)}
    </button>
  `;
  folderList.innerHTML = `
    <div class="archive-finder view-${escapeHtml(archiveViewMode)}" role="list" data-context-folder="${escapeHtml(activeFolder)}">
      <div class="archive-rootbar" aria-label="Carpetas raíz">
        ${regularRootButtons.map((root) => rootButton(root)).join("")}
        ${systemRootButtons.length ? `
          <div class="archive-system-separator" aria-hidden="true">Sistema</div>
          ${systemRootButtons.map((root) => rootButton(root, "system-root")).join("")}
        ` : ""}
      </div>
      <div class="archive-list-header">
        <button class="archive-sort-button" type="button" data-archive-sort="name" data-sort-label="Nombre">Nombre</button>
        <span class="archive-context-actions" aria-label="Acciones del elemento marcado">
          <button class="archive-context-button" type="button" data-archive-action="rename" data-tip="Renombrar seleccionado" aria-label="Renombrar seleccionado">✎</button>
          <button class="archive-context-button" type="button" data-archive-action="move" data-tip="Mover seleccionado" aria-label="Mover seleccionado">⇄</button>
          <button class="archive-context-button" type="button" data-archive-action="copy" data-tip="Copiar seleccionado" aria-label="Copiar seleccionado">⧉</button>
          <button class="archive-context-button danger" type="button" data-archive-action="delete" data-tip="Eliminar seleccionado" aria-label="Eliminar seleccionado">⌫</button>
        </span>
        <button class="archive-sort-button" type="button" data-archive-sort="date" data-sort-label="Modificación">Modificación</button>
        <button class="archive-sort-button" type="button" data-archive-sort="size" data-sort-label="Tamaño">Tamaño</button>
        <button class="archive-sort-button" type="button" data-archive-sort="class" data-sort-label="Clase">Clase</button>
      </div>
      <div class="archive-list-body">
        ${contentRows.length ? contentRows.join("") : `<div class="finder-empty">${archiveSearchTerm ? `No hay resultados en ${escapeHtml(activeFolder)}.` : `Esta carpeta está vacía. Usa “Nueva carpeta” o guarda un documento aquí.`}</div>`}
      </div>
    </div>
  `;
  renderFolderSelector();
  savedContractsList.classList.add("is-hidden");
  savedContractsList.innerHTML = "";
  renderArchiveToolbarState();
}

function renderSavedContracts() {
  savedContractsList.classList.add("is-hidden");
  savedContractsList.innerHTML = "";
  renderArchiveToolbarState();
}

function updateArchiveSelection(event) {
  const checkbox = event.target.closest(".archive-select");
  if (!checkbox) return;
  const key = archiveKey(checkbox.dataset.archiveType, checkbox.dataset.archiveId);
  if (checkbox.checked) selectedArchiveItems.add(key);
  else selectedArchiveItems.delete(key);
  checkbox.closest(".finder-row")?.classList.toggle("is-selected", checkbox.checked);
  renderArchiveToolbarState();
}

function renameArchiveTargets(targets = currentArchiveTargets()) {
  if (targets.length !== 1) {
    showToast("Selecciona un solo elemento para renombrar.");
    return;
  }
  const [{ type, id }] = targets;
  if (type === "folder") renameFolder(id);
  if (type === "contract") renameSavedContract(id);
  if (type === "document") renameSupportDocument(id);
  if (type === "template") renameMasterTemplate(id);
  if (type === "letterhead") renameLetterheadLogo(id);
}

async function moveArchiveTargets(targets = currentArchiveTargets()) {
  const movable = targets.filter((item) => item.type === "contract" || item.type === "document");
  if (!movable.length || movable.length !== targets.length) {
    showToast("Por ahora puedes mover contratos y documentos. Las carpetas se reorganizan con renombrar o eliminar.");
    return;
  }
  const destination = await askDestinationFolder(activeFolder, {
    title: movable.length === 1 ? "Mover elemento seleccionado" : `Mover ${movable.length} elementos`,
    confirmLabel: "Mover aquí"
  });
  if (!destination) return;
  movable.forEach(({ type, id }) => {
    if (type === "contract") {
      const contract = savedContracts.find((item) => item.id === id);
      if (!contract) return;
      const folio = contract.matter?.folio || contract.folio;
      contract.folder = destination;
      if (contract.matter) contract.matter.folder = destination;
      if (folio) {
        versions = versions.map((version) => (
          version.matter?.folio === folio ? { ...version, folder: destination, matter: { ...version.matter, folder: destination } } : version
        ));
      }
    }
    if (type === "document") {
      const document = supportDocuments.find((item) => item.id === id);
      if (!document) return;
      document.folder = destination;
      document.date = new Date().toLocaleString("es-MX");
    }
  });
  activeFolder = destination;
  selectedArchiveItems.clear();
  saveSavedContracts();
  saveSupportDocuments();
  saveVersions();
  renderFolders();
  renderSavedContracts();
  renderVersions();
  renderMatterPanel();
  showToast(movable.length === 1 ? "Elemento movido." : "Elementos movidos.");
}

async function copyArchiveTargets(targets = currentArchiveTargets()) {
  const copyable = targets.filter((item) => item.type === "contract" || item.type === "document");
  if (!copyable.length || copyable.length !== targets.length) {
    showToast("Por ahora puedes copiar contratos y documentos. Las carpetas se crean desde Nueva carpeta.");
    return;
  }
  const destination = await askDestinationFolder(activeFolder, {
    title: copyable.length === 1 ? "Copiar elemento seleccionado" : `Copiar ${copyable.length} elementos`,
    confirmLabel: "Copiar aquí"
  });
  if (!destination) return;
  const stamp = Date.now();
  copyable.forEach(({ type, id }, index) => {
    if (type === "contract") {
      const contract = savedContracts.find((item) => item.id === id);
      if (!contract) return;
      const sourceFolio = contract.matter?.folio || contract.folio || "";
      const copyFolio = sourceFolio ? `${sourceFolio}-COPIA-${index + 1}` : "";
      savedContracts.push({
        ...contract,
        id: `${stamp}-${index}-contract`,
        title: `Copia de ${contract.title}`,
        folder: destination,
        date: new Date().toLocaleString("es-MX"),
        status: "Copia editable",
        folio: copyFolio,
        matter: contract.matter ? { ...contract.matter, folio: copyFolio, displayCode: copyFolio || "Borrador sin folio final", folder: destination, status: "Copia editable" } : contract.matter
      });
    }
    if (type === "document") {
      const document = supportDocuments.find((item) => item.id === id);
      if (!document) return;
      supportDocuments.push({
        ...document,
        id: `${stamp}-${index}-document`,
        name: `Copia de ${document.name}`,
        folder: destination,
        date: new Date().toLocaleString("es-MX")
      });
    }
  });
  activeFolder = destination;
  selectedArchiveItems.clear();
  saveSavedContracts();
  saveSupportDocuments();
  renderFolders();
  renderSavedContracts();
  showToast(copyable.length === 1 ? "Elemento copiado." : "Elementos copiados.");
}

function deleteArchiveTargets(targets = currentArchiveTargets()) {
  const items = targets.filter((item) => item.type !== "parent");
  if (!items.length) {
    showToast("Selecciona un documento, contrato o carpeta para eliminar.");
    return;
  }
  const confirmed = window.confirm(`¿Seguro que quieres eliminar ${items.length} elemento${items.length === 1 ? "" : "s"} seleccionado${items.length === 1 ? "" : "s"}?\n\nLas carpetas raíz no se eliminan.`);
  if (!confirmed) return;

  items.forEach(({ type, id }) => {
    if (type === "folder") deleteFolder(id, { skipConfirm: true });
    if (type === "contract") deleteSavedContract(id, { skipConfirm: true });
    if (type === "document") deleteSupportDocument(id, { skipConfirm: true });
    if (type === "template") deleteMasterTemplate(id);
    if (type === "letterhead") deleteLetterheadLogo(id);
  });
  selectedArchiveItems.clear();
  renderFolders();
  renderSavedContracts();
  renderVersions();
  renderArchiveToolbarState();
  showToast("Selección eliminada.");
}

function deleteSelectedArchiveItems() {
  deleteArchiveTargets(currentArchiveTargets());
}

async function runArchiveContextAction(action) {
  const targets = currentArchiveTargets();
  if (!targets.length) {
    showToast("Marca un elemento o coloca el cursor sobre una fila.");
    return;
  }
  if (action === "rename") renameArchiveTargets(targets);
  if (action === "move") await moveArchiveTargets(targets);
  if (action === "copy") await copyArchiveTargets(targets);
  if (action === "delete") deleteArchiveTargets(targets);
}

function createFolderInsideArchive(folder = activeFolder) {
  const baseFolder = ensureFolderPath(folder || activeFolder || "Mis Documentos");
  if (isSystemRoot(baseFolder)) {
    showToast("Los catálogos del sistema no usan subcarpetas. Sube ahí los formatos o membretes aprobados.");
    return;
  }
  const name = window.prompt(`Nombre de la nueva carpeta dentro de "${baseFolder}"`);
  if (!name || !name.trim()) return;
  const cleanName = name.trim().replace(/\//g, " ");
  const newPath = ensureFolderPath(`${baseFolder}/${cleanName}`, baseFolder.split("/")[0] || "Mis Documentos");
  activeFolder = newPath;
  if (!folders.includes(activeFolder)) folders.push(activeFolder);
  saveFolders();
  renderFolders();
  renderSavedContracts();
  renderVersions();
  renderFolderSelector();
  saveActiveDraft("Carpeta creada");
  showToast(`Carpeta creada: ${newPath}.`);
}

function hideFolderContextMenu() {
  if (!folderContextMenu) return;
  folderContextMenu.classList.add("is-hidden");
  contextMenuFolder = "";
  folderContextMenu._onNew = null;
  folderContextMenu._onRename = null;
  folderContextMenu._onDelete = null;
  folderContextMenu._mode = "folder";
  folderContextMenu._target = null;
}

function setContextButton(action, { text, hidden = false, disabled = false } = {}) {
  const button = folderContextMenu?.querySelector(`[data-context-action="${action}"]`);
  if (!button) return;
  if (text) button.textContent = text;
  button.hidden = hidden;
  button.disabled = disabled;
}

function showFolderContextMenu(event, folder = activeFolder, { onNew = null, onRename = null, onDelete = null, mode = "folder", target = null } = {}) {
  if (!folderContextMenu) return;
  event.preventDefault();
  event.stopPropagation();
  contextMenuFolder = ensureFolderPath(folder || activeFolder || "Mis Documentos");
  folderContextMenu._onNew = onNew;
  folderContextMenu._onRename = onRename;
  folderContextMenu._onDelete = onDelete;
  folderContextMenu._mode = mode;
  folderContextMenu._target = target;
  const isRoot = rootFolders.includes(contextMenuFolder);
  if (mode === "item") {
    const targets = target ? [target] : currentArchiveTargets();
    const capabilities = archiveActionCapabilities(targets);
    setContextButton("new", { hidden: true });
    setContextButton("rename", { text: "Renombrar", disabled: !capabilities.rename });
    setContextButton("move", { text: "Mover", hidden: false, disabled: !capabilities.move });
    setContextButton("copy", { text: "Copiar", hidden: false, disabled: !capabilities.copy });
    setContextButton("delete", { text: "Eliminar", disabled: !capabilities.delete });
  } else {
    setContextButton("new", { text: "Nueva carpeta aquí", hidden: false, disabled: false });
    setContextButton("rename", { text: "Renombrar carpeta", hidden: false, disabled: isRoot });
    setContextButton("move", { hidden: true });
    setContextButton("copy", { hidden: true });
    setContextButton("delete", { text: "Eliminar carpeta", hidden: false, disabled: isRoot });
  }
  folderContextMenu.classList.remove("is-hidden");
  const menuWidth = 210;
  const menuHeight = mode === "item" ? 156 : 118;
  folderContextMenu.style.left = `${Math.min(event.clientX, window.innerWidth - menuWidth - 10)}px`;
  folderContextMenu.style.top = `${Math.min(event.clientY, window.innerHeight - menuHeight - 10)}px`;
}

function hideSaveLocationContextMenu() {
  if (!saveLocationContextMenu) return;
  saveLocationContextMenu.classList.add("is-hidden");
  saveContextFolder = "";
}

function showSaveLocationContextMenu(event, folder = saveLocationState.folder || activeFolder || "Mis Documentos") {
  if (!saveLocationContextMenu) return;
  event.preventDefault();
  event.stopPropagation();
  saveContextFolder = ensureFolderPath(folder || saveLocationState.folder || activeFolder || "Mis Documentos");
  const isRoot = rootFolders.includes(saveContextFolder);
  saveLocationContextMenu.querySelector('[data-save-context-action="rename"]').disabled = isRoot;
  saveLocationContextMenu.querySelector('[data-save-context-action="delete"]').disabled = isRoot;
  saveLocationContextMenu.classList.remove("is-hidden");
  const menuWidth = 210;
  const menuHeight = 118;
  saveLocationContextMenu.style.left = `${Math.min(event.clientX, window.innerWidth - menuWidth - 10)}px`;
  saveLocationContextMenu.style.top = `${Math.min(event.clientY, window.innerHeight - menuHeight - 10)}px`;
}

function pathInFolder(path, folder) {
  return path === folder || path.startsWith(`${folder}/`);
}

function replaceFolderPath(path, oldPath, newPath) {
  if (path === oldPath) return newPath;
  if (path.startsWith(`${oldPath}/`)) return `${newPath}${path.slice(oldPath.length)}`;
  return path;
}

function updateTemplateCatalogFolderPath(oldFolder, newFolder) {
  if (!oldFolder.startsWith("Formatos del sistema/") || !newFolder.startsWith("Formatos del sistema/")) return;
  const oldCatalogPath = systemFolderToCatalogPath(oldFolder);
  const newCatalogPath = systemFolderToCatalogPath(newFolder);
  if (!oldCatalogPath || !newCatalogPath) return;
  templateCatalogFolders = templateCatalogFolders.map((path) => (
    path === oldCatalogPath || path.startsWith(`${oldCatalogPath} /`)
      ? `${newCatalogPath}${path.slice(oldCatalogPath.length)}`
      : path
  ));
  templateCatalogFolders = Array.from(new Set(templateCatalogFolders)).sort((a, b) => a.localeCompare(b, "es"));
  Object.entries(templates).forEach(([key, template]) => {
    const currentPath = templateCatalogPath(template);
    if (currentPath !== oldCatalogPath && !currentPath.startsWith(`${oldCatalogPath} /`)) return;
    const updatedPath = `${newCatalogPath}${currentPath.slice(oldCatalogPath.length)}`;
    template.catalogPath = updatedPath;
    template.category = updatedPath;
    persistManagedTemplate(key);
  });
  saveTemplateCatalogFolders();
}

function moveTemplatesOutOfDeletedSystemFolder(folder) {
  if (!folder.startsWith("Formatos del sistema/")) return 0;
  const catalogPath = systemFolderToCatalogPath(folder);
  if (!catalogPath) return 0;
  let moved = 0;
  Object.entries(templates).forEach(([key, template]) => {
    const currentPath = templateCatalogPath(template);
    if (currentPath !== catalogPath && !currentPath.startsWith(`${catalogPath} /`)) return;
    template.catalogPath = "Formatos generales";
    template.category = "Formatos generales";
    persistManagedTemplate(key);
    moved += 1;
  });
  templateCatalogFolders = templateCatalogFolders.filter((path) => path !== catalogPath && !path.startsWith(`${catalogPath} /`));
  saveTemplateCatalogFolders();
  return moved;
}

function renameFolder(folder) {
  if (rootFolders.includes(folder)) {
    showToast("Las carpetas raíz se conservan fijas para mantener el archivo ordenado.");
    return;
  }

  const parts = folder.split("/");
  const currentName = parts.pop();
  const parent = parts.join("/");
  const newName = window.prompt("Nuevo nombre para esta carpeta", currentName);
  if (!newName || !newName.trim()) return;

  const cleanName = newName.trim().replace(/\//g, " ");
  const newPath = parent ? `${parent}/${cleanName}` : cleanName;
  if (folders.includes(newPath)) {
    showToast("Ya existe una carpeta con ese nombre.");
    return;
  }

  const confirmed = window.confirm(`${isSystemRoot(folder) ? "¿Estás segura de que quieres modificar una carpeta del sistema?" : "¿Seguro que quieres renombrar esta carpeta?"}\n\n"${folder}" se renombrará como "${newPath}".\n\nTambién se actualizarán sus subcarpetas, contratos, versiones o formatos asociados.`);
  if (!confirmed) return;

  updateTemplateCatalogFolderPath(folder, newPath);
  folders = folders.map((path) => replaceFolderPath(path, folder, newPath));
  savedContracts = savedContracts.map((contract) => ({
    ...contract,
    folder: replaceFolderPath(contract.folder || "Mis Documentos", folder, newPath)
  }));
  supportDocuments = supportDocuments.map((document) => ({
    ...document,
    folder: replaceFolderPath(document.folder || "Documentos de las partes", folder, newPath)
  }));
  versions = versions.map((version) => ({
    ...version,
    folder: replaceFolderPath(version.folder || "Mis Documentos", folder, newPath)
  }));
  activeFolder = replaceFolderPath(activeFolder, folder, newPath);
  saveFolders();
  saveSavedContracts();
  saveSupportDocuments();
  saveVersions();
  renderFolders();
  renderSavedContracts();
  renderVersions();
  saveActiveDraft("Carpeta renombrada");
  showToast(`Carpeta renombrada como ${newPath}.`);
  return newPath;
}

function deleteFolder(folder, { skipConfirm = false } = {}) {
  if (rootFolders.includes(folder)) {
    showToast("Las carpetas raíz no se eliminan.");
    return false;
  }

  const affectedContracts = savedContracts.filter((contract) => pathInFolder(contract.folder || "", folder)).length;
  const affectedVersions = versions.filter((version) => pathInFolder(version.folder || "", folder)).length;
  const affectedDocuments = supportDocuments.filter((document) => pathInFolder(document.folder || "", folder)).length;
  const childFolders = folders.filter((path) => pathInFolder(path, folder)).length;
  const isSystemFolder = isSystemRoot(folder);
  const confirmed = skipConfirm || window.confirm(`${isSystemFolder ? "¿Estás segura de que quieres eliminar una carpeta del sistema?" : "¿Seguro que quieres eliminar esta carpeta?"}\n\n"${folder}" y ${childFolders - 1} subcarpeta(s) dejarán de aparecer.\n\nNo se borrarán contratos ni versiones: se moverán a Otros. Los formatos del sistema, si los hay, se conservarán en Formatos del sistema.`);
  if (!confirmed) return;

  const movedTemplates = moveTemplatesOutOfDeletedSystemFolder(folder);
  folders = folders.filter((path) => !pathInFolder(path, folder));
  folders = Array.from(new Set([...rootFolders, ...folders]));
  savedContracts = savedContracts.map((contract) => (
    pathInFolder(contract.folder || "", folder) ? { ...contract, folder: "Otros" } : contract
  ));
  versions = versions.map((version) => (
    pathInFolder(version.folder || "", folder) ? { ...version, folder: "Otros" } : version
  ));
  supportDocuments = supportDocuments.map((document) => (
    pathInFolder(document.folder || "", folder) ? { ...document, folder: "Documentos de las partes" } : document
  ));
  activeFolder = pathInFolder(activeFolder, folder) ? "Otros" : activeFolder;
  saveFolders();
  saveSavedContracts();
  saveSupportDocuments();
  saveVersions();
  renderFolders();
  renderSavedContracts();
  renderVersions();
  saveActiveDraft("Carpeta eliminada");
  showToast(affectedContracts || affectedVersions || affectedDocuments || movedTemplates ? "Carpeta eliminada. Su contenido se movió a una carpeta raíz." : "Carpeta eliminada.");
  return true;
}

async function askDestinationFolder(currentFolder, { title = "Elige carpeta destino", confirmLabel = "Seleccionar carpeta" } = {}) {
  const destination = await openSaveLocationDialog({
    title,
    initialFolder: currentFolder || activeFolder || "Mis Documentos",
    confirmLabel,
    requireName: false
  });
  if (!destination) return null;
  return ensureFolderPath(destination.folder, (currentFolder || activeFolder || "Mis Documentos").split("/")[0]);
}

function renameSavedContract(contractId) {
  const contract = savedContracts.find((item) => item.id === contractId);
  if (!contract) return;
  const currentName = cleanWorkingTitle(contract.title || "Contrato");
  const nextName = window.prompt("Nuevo nombre del contrato", currentName);
  if (!nextName || !nextName.trim()) return;
  const cleanName = nextName.trim();
  const confirmed = window.confirm(`¿Renombrar este contrato como "${cleanName}"?`);
  if (!confirmed) return;
  contract.title = cleanName;
  if (contract.matter) contract.matter.contractTitle = cleanName;
  saveSavedContracts(contract);
  renderSavedContracts();
  saveActiveDraft("Contrato renombrado");
  showToast("Contrato renombrado.");
}

async function moveContractToFolder(contractId) {
  const contract = savedContracts.find((item) => item.id === contractId);
  if (!contract) return;
  const destination = await askDestinationFolder(contract.folder, {
    title: `Mover "${contract.title}"`,
    confirmLabel: "Mover aquí"
  });
  if (!destination) return;
  const folio = contract.matter?.folio || contract.folio;
  contract.folder = destination;
  if (contract.matter) contract.matter.folder = destination;
  if (folio) {
    versions = versions.map((version) => (
      version.matter?.folio === folio ? { ...version, folder: destination, matter: { ...version.matter, folder: destination } } : version
    ));
  }
  activeFolder = destination;
  saveSavedContracts();
  saveVersions();
  renderFolders();
  renderSavedContracts();
  renderVersions();
  showToast("Contrato movido con sus versiones del expediente.");
}

async function copyContractToFolder(contractId) {
  const contract = savedContracts.find((item) => item.id === contractId);
  if (!contract) return;
  const destination = await askDestinationFolder(contract.folder, {
    title: `Copiar "${contract.title}"`,
    confirmLabel: "Copiar aquí"
  });
  if (!destination) return;
  const sourceFolio = contract.matter?.folio || contract.folio || "";
  const copyFolio = sourceFolio ? `${sourceFolio}-COPIA` : "";
  const copy = {
    ...contract,
    id: Date.now().toString(),
    title: `Copia de ${contract.title}`,
    folder: destination,
    date: new Date().toLocaleString("es-MX"),
    status: "Copia editable",
    folio: copyFolio,
    matter: contract.matter ? { ...contract.matter, folio: copyFolio, displayCode: copyFolio || "Borrador sin folio final", folder: destination, status: "Copia editable" } : contract.matter
  };
  savedContracts.push(copy);
  activeFolder = destination;
  saveSavedContracts(copy);
  renderFolders();
  renderSavedContracts();
  showToast("Contrato copiado a la carpeta seleccionada.");
}

function deleteSavedContract(contractId, { skipConfirm = false } = {}) {
  const contract = savedContracts.find((item) => item.id === contractId);
  if (!contract) return;
  const folio = contract.matter?.folio || contract.folio || "";
  const relatedVersions = folio ? versions.filter((version) => version.matter?.folio === folio).length : 0;
  const confirmed = skipConfirm || window.confirm(
    `¿Seguro que quieres eliminar este contrato guardado?\n\n${contract.title}\n\n${relatedVersions ? `También se eliminarán ${relatedVersions} versión(es) guardada(s) del mismo expediente.` : "Esta acción no elimina formatos base."}`
  );
  if (!confirmed) return;

  savedContracts = savedContracts.filter((item) => item.id !== contractId);
  if (folio) versions = versions.filter((version) => version.matter?.folio !== folio);
  saveSavedContracts(null, { syncLatest: false });
  saveVersions();
  const backend = productionBackend();
  if (backend?.deleteContract) {
    backend.deleteContract(contract, { deleteVersions: Boolean(folio) }).catch((error) => reportBackendError("eliminar contrato", error));
  }
  renderSavedContracts();
  renderVersions();
  showToast("Contrato eliminado del archivo.");
}

function renameSupportDocument(documentId) {
  const document = supportDocuments.find((item) => item.id === documentId);
  if (!document) return;
  const nextName = window.prompt("Nuevo nombre del documento", document.name || "Documento soporte");
  if (!nextName || !nextName.trim()) return;
  const cleanName = nextName.trim();
  const oldName = document.name;
  document.name = cleanName;
  document.date = new Date().toLocaleString("es-MX");
  Object.keys(sourceTextsBySide).forEach((side) => {
    sourceTextsBySide[side] = (sourceTextsBySide[side] || []).map((entry) => (
      entry.name === oldName && entry.size === document.size ? { ...entry, name: cleanName } : entry
    ));
  });
  saveSupportDocuments();
  renderSavedContracts();
  renderRoleDrops();
  renderMatterPanel();
  saveActiveDraft("Documento soporte renombrado");
  showToast("Documento renombrado.");
}

async function moveSupportDocumentToFolder(documentId) {
  const document = supportDocuments.find((item) => item.id === documentId);
  if (!document) return;
  const destination = await askDestinationFolder(document.folder, {
    title: `Mover "${document.name}"`,
    confirmLabel: "Mover aquí"
  });
  if (!destination) return;
  document.folder = destination;
  document.date = new Date().toLocaleString("es-MX");
  activeFolder = destination;
  saveSupportDocuments();
  renderFolders();
  renderSavedContracts();
  renderMatterPanel();
  saveActiveDraft("Documento soporte movido");
  showToast("Documento movido a la carpeta seleccionada.");
}

async function copySupportDocumentToFolder(documentId) {
  const document = supportDocuments.find((item) => item.id === documentId);
  if (!document) return;
  const destination = await askDestinationFolder(document.folder, {
    title: `Copiar "${document.name}"`,
    confirmLabel: "Copiar aquí"
  });
  if (!destination) return;
  const copy = {
    ...document,
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: `Copia de ${document.name}`,
    folder: destination,
    date: new Date().toLocaleString("es-MX")
  };
  supportDocuments.push(copy);
  activeFolder = destination;
  saveSupportDocuments();
  renderFolders();
  renderSavedContracts();
  showToast("Documento copiado a la carpeta seleccionada.");
}

function deleteSupportDocument(documentId, { skipConfirm = false } = {}) {
  const document = supportDocuments.find((item) => item.id === documentId);
  if (!document) return;
  const confirmed = skipConfirm || window.confirm(`¿Seguro que quieres eliminar este documento del expediente?\n\n${document.name}`);
  if (!confirmed) return;
  supportDocuments = supportDocuments.filter((item) => item.id !== documentId);
  Object.keys(sourceTextsBySide).forEach((side) => {
    sourceTextsBySide[side] = (sourceTextsBySide[side] || []).filter((entry) => (
      entry.name !== document.name || entry.size !== document.size
    ));
  });
  saveSupportDocuments();
  renderSavedContracts();
  renderRoleDrops();
  renderMatterPanel();
  saveActiveDraft("Documento soporte eliminado");
  showToast("Documento eliminado del expediente.");
}

async function moveVersionToFolder(versionId) {
  const version = versions.find((item) => item.id === versionId);
  if (!version) return;
  const destination = await askDestinationFolder(version.folder, {
    title: `Mover "${version.title}"`,
    confirmLabel: "Mover aquí"
  });
  if (!destination) return;
  version.folder = destination;
  if (version.matter) version.matter.folder = destination;
  activeFolder = destination;
  saveVersions();
  renderFolders();
  renderVersions();
  showToast("Versión movida a la carpeta seleccionada.");
}

async function copyVersionToFolder(versionId) {
  const version = versions.find((item) => item.id === versionId);
  if (!version) return;
  const destination = await askDestinationFolder(version.folder, {
    title: `Copiar "${version.title}"`,
    confirmLabel: "Copiar aquí"
  });
  if (!destination) return;
  versions.push({
    ...version,
    id: Date.now().toString(),
    title: `Copia de ${version.title}`,
    folder: destination,
    date: new Date().toLocaleString("es-MX"),
    matter: version.matter ? { ...version.matter, folder: destination } : version.matter
  });
  saveVersions();
  activeFolder = destination;
  renderFolders();
  renderVersions();
  showToast("Versión copiada a la carpeta seleccionada.");
}

function deleteSavedVersion(versionId) {
  const version = versions.find((item) => item.id === versionId);
  if (!version) return;
  const confirmed = window.confirm(`¿Seguro que quieres eliminar esta versión guardada?\n\n${version.title}`);
  if (!confirmed) return;
  versions = versions.filter((item) => item.id !== versionId);
  saveVersions();
  const backend = productionBackend();
  if (backend?.deleteVersion) backend.deleteVersion(version).catch((error) => reportBackendError("eliminar versión", error));
  renderVersions();
  showToast("Versión eliminada.");
}

function inferDataFromText(text, side) {
  const cleanText = text.replace(/\s+/g, " ");
  const updates = {};
  const rfcs = cleanText.match(/\b[A-Z&Ñ]{3,4}\d{6}[A-Z0-9]{3}\b/gi) || [];
  const companyPatterns = [
    /(?:raz[oó]n\s+social|denominaci[oó]n\s+social|nombre\s+de\s+la\s+sociedad)\s*[:\-]?\s*([A-ZÁÉÍÓÚÑ&.,\s-]{3,120}?(?:S\.?\s*A\.?\s*DE\s*C\.?\s*V\.?|S\.?\s*DE\s*R\.?\s*L\.?\s*DE\s*C\.?\s*V\.?|S\.?\s*A\.?\s*P\.?\s*I\.?\s*DE\s*C\.?\s*V\.?))/i,
    /\b([A-ZÁÉÍÓÚÑ&][A-ZÁÉÍÓÚÑ&.,\s-]{3,110}?(?:S\.?\s*A\.?\s*DE\s*C\.?\s*V\.?|S\.?\s*DE\s*R\.?\s*L\.?\s*DE\s*C\.?\s*V\.?|S\.?\s*A\.?\s*P\.?\s*I\.?\s*DE\s*C\.?\s*V\.?))/i
  ];
  const instrumentMatch =
    cleanText.match(/escritura\s+p[uú]blica\s+(?:n[uú]mero\s+)?[\w,.-]+/i) ||
    cleanText.match(/p[oó]liza\s+(?:n[uú]mero\s+)?[\w,.-]+/i) ||
    cleanText.match(/instrumento\s+(?:p[uú]blico\s+)?(?:n[uú]mero\s+)?[\w,.-]+/i) ||
    cleanText.match(/acta\s+(?:n[uú]mero\s+)?[\w,.-]+/i);
  const escrituras = instrumentMatch ? [instrumentMatch[0]] : [];
  const folios = cleanText.match(/folio\s+mercantil\s+(?:electrónico\s+)?[\w-]+/gi) || [];
  const fedatarios = cleanText.match(/(?:notari[oa]|corredor[ae]?)\s+p[uú]blic[oa]\s+(?:n[uú]mero\s+)?[\w\s,.#-]{3,70}/gi) || [];
  const representativePatterns = [
    /(?:representad[ao]\s+por|representante\s+legal)\s*[:\-]?\s+([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑ\s.]{6,70}?)(?=,|\.|\s+con\s+facultades|\s+en\s+su\s+car[aá]cter|$)/i,
    /(?:apoderad[ao]\s+legal)\s*[:\-]?\s+([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑ\s.]{6,70}?)(?=,|\.|$)/i
  ];
  const dates = cleanText.match(/\b\d{1,2}\s+de\s+[a-záéíóúñ]+\s+de\s+\d{4}\b/gi) || [];
  const domicile = cleanText.match(/domicilio(?:\s+fiscal)?(?:\s+en)?\s+([A-ZÁÉÍÓÚÑ0-9][\wÁÉÍÓÚÑ\s.,#-]{12,120})/i);

  const company = companyPatterns.map((pattern) => cleanText.match(pattern)?.[1]).find(Boolean);
  const representative = representativePatterns.map((pattern) => cleanText.match(pattern)?.[1]).find(Boolean);

  if (company) updates[`parte${side}`] = company.trim().replace(/\s+/g, " ");
  if (rfcs[0]) updates[`rfc${side}`] = rfcs[0].toUpperCase();
  if (escrituras[0]) {
    updates[`escritura${side}`] = escrituras[0].trim();
    const instrumentClean = removeAccents(escrituras[0]).toLowerCase();
    if (instrumentClean.includes("poliza")) updates[`tipoInstrumentoConstitutivo${side}`] = "Póliza";
    else if (instrumentClean.includes("acta")) updates[`tipoInstrumentoConstitutivo${side}`] = "Acta";
    else if (instrumentClean.includes("escritura")) updates[`tipoInstrumentoConstitutivo${side}`] = "Escritura pública";
  }
  if (folios[0]) updates[`folio${side}`] = folios[0].replace(/folio\s+mercantil(?:\s+electr[oó]nico)?\s*/i, "").trim();
  if (fedatarios[0]) {
    updates[`notario${side}`] = fedatarios[0].trim();
    const fedatarioType = removeAccents(fedatarios[0]).toLowerCase().includes("corredor") ? "Corredor Público" : "Notario Público";
    const instrumentType = fedatarioType === "Corredor Público" ? "Póliza" : "Escritura pública";
    updates[`tipoFedatarioConstitutivo${side}`] = fedatarioType;
    updates[`tipoFedatarioPoder${side}`] = fedatarioType;
    updates[`tipoInstrumentoPoder${side}`] = instrumentType;
  }
  if (dates[0]) updates[`fechaConstitucion${side}`] = dates[0].trim();
  if (representative) updates[`rep${side}`] = representative.trim().replace(/\s+/g, " ");
  if (domicile) updates[domicileFieldForSide(side)] = domicile[1].trim().replace(/\s+/g, " ");

  return updates;
}

function applyDetectedData(updates, options = {}) {
  const preserveExisting = options.preserveExisting !== false;
  criticalReviewDone = false;
  const nextUpdates = { ...updates };
  if (nextUpdates.importeNumero && !nextUpdates.importeLetra) {
    const amountInWords = amountToSpanishCurrency(nextUpdates.importeNumero);
    if (amountInWords) nextUpdates.importeLetra = amountInWords;
  }
  const applied = {};
  const skipped = [];
  Object.entries(nextUpdates).forEach(([name, value]) => {
    const incoming = String(value || "").trim();
    if (!incoming) return;
    const existing = String(partyDataStore[name] || "").trim();
    const sameValue = removeAccents(existing).toLowerCase() === removeAccents(incoming).toLowerCase();
    if (preserveExisting && existing && !sameValue) {
      skipped.push({ name, existing, incoming });
      return;
    }
    applied[name] = incoming;
  });
  partyDataStore = { ...partyDataStore, ...applied };
  Object.entries(applied).forEach(([name, value]) => {
    const input = partyForm.elements[name];
    if (input && value) input.value = value;
  });
  const movedSupportDocuments = reconcileSupportDocumentFolders(partyDataStore);
  renderRoleDrops();
  renderRequirements();
  if (movedSupportDocuments) {
    renderFolders();
    renderSavedContracts();
  }
  renderMatterPanel();
  saveActiveDraft("Datos extraídos");
  return { appliedCount: Object.keys(applied).length, skipped };
}

function integrateCompletedManualFields(event) {
  if (event) event.preventDefault();
  if (!ensureEditableWorkspace("integrar datos")) return;
  if (!requireFieldsReviewed("integrar datos manuales")) return;
  const integrated = integrateKnownDataIntoContract("Datos completados integrados");
  const missing = missingFieldsForActiveTemplate().length;
  if (!integrated) {
    showToast("No encontré datos capturados que coincidan con campos pendientes del contrato.");
    return;
  }
  showToast(missing ? `Datos integrados al contrato. Quedan ${missing} campo${missing === 1 ? "" : "s"} pendiente${missing === 1 ? "" : "s"}.` : "Datos integrados. El contrato ya no tiene campos pendientes.");
}

function normalizeExtractionValues(result) {
  const source = result?.values || result?.fields || result || {};
  const updates = {};
  const allowedFields = new Set(requiredFieldsForActiveTemplate().map(([name]) => name));
  Object.entries(source).forEach(([name, payload]) => {
    const value = typeof payload === "string" ? payload : payload?.value;
    if (allowedFields.has(name) && String(value || "").trim()) {
      updates[name] = String(value).trim();
    }
  });
  return updates;
}

async function extractRoleDataWithAi(role) {
  if (isLocalStaticPreview()) return {};
  const backend = productionBackend();
  if (!backend?.extractPartyData) return {};
  const entries = sourceTextsBySide[role.side] || [];
  const fields = fieldsForRole(role).map(([name, label]) => ({ name, label }));
  if (!entries.length || !fields.length) return {};
  const files = entries.map((entry) => entry.file).filter(Boolean);
  const sourceTexts = entries.map((entry) => entry.text).filter(Boolean);
  const result = await backend.extractPartyData({
    roleLabel: role.label,
    side: role.side,
    fields,
    files,
    sourceTexts
  });
  return normalizeExtractionValues(result);
}

async function entryFiles(entry, path = "") {
  if (!entry) return [];
  if (entry.isFile) {
    return new Promise((resolve) => {
      entry.file((file) => {
        const relativePath = `${path}${file.name}`;
        try {
          Object.defineProperty(file, "relativePath", { value: relativePath, configurable: true });
        } catch {
          file.relativePath = relativePath;
        }
        resolve([file]);
      });
    });
  }
  if (!entry.isDirectory) return [];
  const reader = entry.createReader();
  const entries = [];
  let batch = [];
  do {
    batch = await new Promise((resolve) => reader.readEntries(resolve));
    entries.push(...batch);
  } while (batch.length);
  const nested = await Promise.all(entries.map((item) => entryFiles(item, `${path}${entry.name}/`)));
  return nested.flat();
}

async function filesFromDrop(dataTransfer) {
  const items = Array.from(dataTransfer?.items || []);
  const entries = items.map((item) => item.webkitGetAsEntry?.()).filter(Boolean);
  if (!entries.length) return Array.from(dataTransfer?.files || []);
  const files = await Promise.all(entries.map((entry) => entryFiles(entry)));
  return files.flat();
}

async function addFilesToArchiveFolder(fileList, folder = activeFolder) {
  const files = Array.from(fileList || []);
  if (!files.length) return;
  const targetFolder = ensureFolderPath(folder || activeFolder || "Mis Documentos");
  const existing = new Set(
    supportDocuments
      .filter((document) => document.folder === targetFolder)
      .map((document) => `${document.name}-${document.size}`)
  );
  const entries = [];
  for (const file of files) {
    const displayName = file.webkitRelativePath || file.relativePath || file.name;
    const size = `${Math.ceil(file.size / 1024)} KB`;
    const key = `${displayName}-${size}`;
    if (existing.has(key)) continue;
    entries.push({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      folder: targetFolder,
      roleLabel: "Archivo",
      party: targetFolder.split("/").pop() || "Mis Documentos",
      folio: "",
      draftId: "",
      name: displayName,
      size,
      type: classifySupportDocument(displayName),
      date: new Date().toLocaleString("es-MX")
    });
  }
  if (!entries.length) {
    showToast("Esos documentos ya estaban en esta carpeta.");
    return;
  }
  supportDocuments.push(...entries);
  activeFolder = targetFolder;
  saveSupportDocuments();
  const backend = productionBackend();
  if (backend?.uploadSupportDocuments) {
    backend.uploadSupportDocuments({
      folio: targetFolder,
      roleLabel: "archivo",
      files
    }).catch((error) => reportBackendError("subir documentos a carpeta", error));
  }
  renderFolders();
  renderSavedContracts();
  saveActiveDraft("Documentos cargados en archivo");
  showToast(`${entries.length} documento${entries.length === 1 ? "" : "s"} cargado${entries.length === 1 ? "" : "s"} en ${targetFolder}.`);
}

async function addFilesToRole(side, fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) return;
  if (!ensureEditableWorkspace("cargar documentos por parte")) return;
  if (!requireFieldsReviewed("subir documentos de las partes")) return;

  const current = sourceTextsBySide[side] || [];
  const existing = new Set(current.map((file) => `${file.name}-${file.size}`));
  const entries = [];
  for (const file of files) {
    const displayName = file.webkitRelativePath || file.relativePath || file.name;
    const key = `${displayName}-${Math.ceil(file.size / 1024)} KB`;
    if (existing.has(key)) continue;
    const entry = { name: displayName, size: `${Math.ceil(file.size / 1024)} KB`, type: classifySupportDocument(displayName), text: "", file };
    if (/\.(txt|csv|eml)$/i.test(displayName)) entry.text = await file.text();
    entries.push(entry);
  }
  if (!entries.length) {
    showToast("Esos documentos ya estaban cargados en esta parte.");
    return;
  }

  sourceTextsBySide[side] = [...current, ...entries];
  partyDocumentsStepVisited = true;
  const role = getRoles().find((item) => item.side === side);
  const values = getPartyData();
  const supportFolder = supportFolderForRole(role, values);
  supportDocuments.push(
    ...entries.map((entry) => ({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      folder: supportFolder,
      roleLabel: role?.label || "Parte",
      party: values[role?.part] || role?.label || "Parte",
      folio: activeMatterFolio || "",
      draftId: ensureDraftMatterId(),
      name: entry.name,
      size: entry.size,
      type: entry.type,
      date: new Date().toLocaleString("es-MX")
    }))
  );
  saveSupportDocuments();
  const backend = productionBackend();
  if (backend) {
    backend
      .uploadSupportDocuments({
        folio: activeMatterFolio || ensureDraftMatterId(),
        roleLabel: role?.label || "parte",
        files: entries.map((entry) => entry.file).filter(Boolean)
      })
      .catch((error) => reportBackendError("subir documentos", error));
  }

  renderRoleDrops();
  updateWorkflowStepState();
  renderFolders();
  renderSavedContracts();
  renderMatterPanel();
  addMatterEvent(`Documentos soporte cargados para ${role?.label || "parte"}`);
  saveActiveDraft("Documentos soporte cargados");
  if (entries.some((file) => documentNeedsAiExtraction(file)) && isLocalStaticPreview()) {
    showToast(`Documentos agregados en ${supportFolder}. Excel, PDF, Word e imágenes se extraen con IA desde lexcontratos.com.`);
  } else {
    showToast(`${entries.length} documento${entries.length === 1 ? "" : "s"} agregado${entries.length === 1 ? "" : "s"} en ${supportFolder}.`);
  }
}

templateGrid.addEventListener("click", async (event) => {
  const card = event.target.closest(".template-card");
  if (!card) return;
  const action = event.target.closest("[data-template-action]")?.dataset.templateAction || "use";
  if (action === "edit") {
    event.stopPropagation();
    editMasterTemplate(card.dataset.template);
    return;
  }
  if (action === "rename") {
    event.stopPropagation();
    renameMasterTemplate(card.dataset.template);
    return;
  }
  if (action === "move") {
    event.stopPropagation();
    moveMasterTemplate(card.dataset.template);
    return;
  }
  if (action === "delete") {
    event.stopPropagation();
    deleteMasterTemplate(card.dataset.template);
    return;
  }
  if (templatePicker.open) templatePicker.close();
  await startContractFromTemplate(card.dataset.template);
});

roleDropGrid.addEventListener("change", async (event) => {
  if (!event.target.classList.contains("role-file-input") && !event.target.classList.contains("role-folder-input")) return;
  const side = event.target.dataset.side;
  await addFilesToRole(side, event.target.files);
  event.target.value = "";
});

roleDropGrid.addEventListener("click", (event) => {
  const folderButton = event.target.closest(".folder-upload-trigger");
  if (!folderButton) return;
  event.preventDefault();
  const input = roleDropGrid.querySelector(`.role-folder-input[data-side="${folderButton.dataset.side}"]`);
  input?.click();
});

roleDropGrid.addEventListener("dragover", (event) => {
  const drop = event.target.closest(".role-drop");
  if (!drop) return;
  event.preventDefault();
  drop.classList.add("is-dragging");
});

roleDropGrid.addEventListener("dragleave", (event) => {
  const drop = event.target.closest(".role-drop");
  if (drop) drop.classList.remove("is-dragging");
});

roleDropGrid.addEventListener("drop", async (event) => {
  const drop = event.target.closest(".role-drop");
  if (!drop) return;
  event.preventDefault();
  drop.classList.remove("is-dragging");
  await addFilesToRole(drop.dataset.side, await filesFromDrop(event.dataTransfer));
});

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    activeCategory = chip.dataset.category;
    document.querySelectorAll(".chip").forEach((item) => item.classList.toggle("active", item === chip));
    renderTemplates();
  });
});

document.querySelectorAll(".language-toggle button").forEach((button) => {
  button.addEventListener("click", () => {
    activeLanguage = button.dataset.language;
    document.querySelectorAll(".language-toggle button").forEach((item) => item.classList.toggle("active", item === button));
    if (!activeTemplate) {
      showToast(activeLanguage === "en" ? "English mode selected. Choose a draft to begin." : "Modo español seleccionado. Elige un formato para comenzar.");
      return;
    }
    editor.value = bodyForTemplate(activeTemplate);
    showToast(activeLanguage === "en" ? "English working draft loaded." : "Versión en español cargada.");
  });
});

templateSearch.addEventListener("input", renderTemplates);
templateFolderFilter?.addEventListener("change", () => {
  activeTemplateCatalogFolder = templateFolderFilter.value || "Todos";
  renderTemplates();
});
templateNewFolderButton?.addEventListener("click", createTemplateCatalogFolder);

openTemplatePicker.addEventListener("click", () => {
  templateSearch.value = "";
  syncSharedTemplatesFromBackend();
  renderTemplates();
  templatePicker.showModal();
  templateSearch.focus();
});

document.querySelector("#toggle-archive").addEventListener("click", (event) => {
  event.stopPropagation();
  archiveDrawer.classList.add("open");
});
document.querySelector("#close-archive").addEventListener("click", () => archiveDrawer.classList.remove("open"));
archiveDrawer.addEventListener("click", (event) => {
  if (!event.target.closest("#folder-context-menu")) hideFolderContextMenu();
  event.stopPropagation();
});
archiveDrawer.addEventListener("pointerdown", (event) => {
  const handle = event.target.closest("[data-drawer-resize]");
  if (!handle) return;
  event.preventDefault();
  event.stopPropagation();
  const mode = handle.dataset.drawerResize || "xy";
  const startX = event.clientX;
  const startY = event.clientY;
  const startWidth = archiveDrawer.offsetWidth;
  const startHeight = archiveDrawer.offsetHeight;
  handle.setPointerCapture?.(event.pointerId);
  const resize = (moveEvent) => {
    if (mode.includes("x")) {
      const width = Math.min(window.innerWidth - 8, Math.max(620, startWidth + moveEvent.clientX - startX));
      archiveDrawer.style.width = `${width}px`;
    }
    if (mode.includes("y")) {
      const height = Math.min(window.innerHeight - 8, Math.max(420, startHeight + moveEvent.clientY - startY));
      archiveDrawer.style.height = `${height}px`;
    }
  };
  const stop = () => {
    document.removeEventListener("pointermove", resize);
    document.removeEventListener("pointerup", stop);
  };
  document.addEventListener("pointermove", resize);
  document.addEventListener("pointerup", stop, { once: true });
});
document.addEventListener("click", () => {
  hideFolderContextMenu();
  hideSaveLocationContextMenu();
  if (archiveDrawer.classList.contains("open")) archiveDrawer.classList.remove("open");
  if (assistantPane.classList.contains("open")) assistantPane.classList.remove("open");
});
document.addEventListener("keydown", (event) => {
  const target = event.target;
  const isTextInput = target?.matches?.("input, textarea, select, [contenteditable='true']");
  if (!archiveDrawer.classList.contains("open") || !selectedArchiveItems.size || isTextInput) return;
  if (event.key !== "Backspace" && event.key !== "Delete") return;
  event.preventDefault();
  deleteSelectedArchiveItems();
});
document.querySelector("#close-fields").addEventListener("click", () => assistantPane.classList.remove("open"));
assistantPane.addEventListener("click", (event) => event.stopPropagation());
openUserGuide.addEventListener("click", () => userGuideDialog.showModal());
userGuideDialog?.addEventListener("click", (event) => {
  if (event.target === userGuideDialog) userGuideDialog.close();
});
openAdminUsers?.addEventListener("click", () => {
  adminUsersDialog?.showModal();
  loadAdminUsers();
});
adminUsersDialog?.addEventListener("click", (event) => {
  if (event.target === adminUsersDialog) adminUsersDialog.close();
});
adminUsersList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-admin-action]");
  if (button) runAdminUserAction(button);
});
downloadAdminBackupButton?.addEventListener("click", runAdminBackup);
adminToggleCreateUserButton?.addEventListener("click", toggleAdminCreateUserForm);
adminOpenTemplateCatalogButton?.addEventListener("click", openAdminTemplateCatalog);
adminOpenLetterheadCatalogButton?.addEventListener("click", openAdminLetterheadCatalog);
adminCreateUserForm?.addEventListener("submit", runAdminCreateUser);

document.querySelector("#fill-contract").addEventListener("click", (event) => {
  event.stopPropagation();
  if (!requireFieldsReviewed("integrar datos faltantes")) return;
  if (!partyDocumentsStepVisited && missingFieldsForActiveTemplate().length) {
    showToast("Primero abre “2. Datos y documentos” para cargar o confirmar los documentos de cada parte.");
    return;
  }
  if (assistantPane.classList.contains("open")) {
    assistantPane.classList.remove("open");
    return;
  }
  renderDynamicFields();
  renderCustomFields();
  assistantPane.querySelector(".compact-fields")?.setAttribute("open", "");
  assistantPane.classList.add("open");
  assistantPane.querySelector(".manual-field input")?.focus({ preventScroll: true });
});

partyDocumentsButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!requireFieldsReviewed("abrir datos y documentos")) return;
  partyDocumentsStepVisited = true;
  renderRoleDrops();
  updateWorkflowStepState();
  saveActiveDraft("Datos y documentos revisados");
  partyDocumentsDialog?.showModal();
});

partyDocumentsDialog?.addEventListener("click", (event) => {
  if (event.target === partyDocumentsDialog) partyDocumentsDialog.close();
});

document.querySelector("#export-word").addEventListener("click", exportWordDocument);

document.querySelector("#export-pdf-signature")?.addEventListener("click", exportPdfForSignature);

document.querySelector("#critical-review")?.addEventListener("click", () => {
  criticalReviewDialog.showModal();
  criticalReviewOutput.textContent = "Elige si quieres solo observaciones o una propuesta de ajustes para integrar después de revisar.";
  pendingCriticalReviewBody = "";
  pendingCriticalChanges = [];
  applyCriticalReviewButton.classList.add("is-hidden");
});

document.querySelector("#critical-observations")?.addEventListener("click", () => runCriticalReview("observations"));
document.querySelector("#critical-suggest")?.addEventListener("click", () => runCriticalReview("propose"));
document.querySelector("#critical-congruence")?.addEventListener("click", () => runCriticalReview("congruence"));
document.querySelector("#critical-legal")?.addEventListener("click", () => runCriticalReview("legal"));
applyCriticalReviewButton?.addEventListener("click", applyCriticalReviewSuggestion);
criticalReviewOutput?.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-critical-action]");
  if (!actionButton) return;
  const changeId = actionButton.dataset.changeId;
  if (actionButton.dataset.criticalAction === "apply") applyCriticalChange(changeId);
  if (actionButton.dataset.criticalAction === "discard") discardCriticalChange(changeId);
});
criticalReviewDialog?.addEventListener("click", (event) => {
  if (event.target === criticalReviewDialog) criticalReviewDialog.close();
});

document.querySelector("#copy-contract")?.addEventListener("click", async () => {
  await navigator.clipboard.writeText(editor.value);
  showToast("Contrato copiado al portapapeles.");
});

document.querySelector("#review-fields").addEventListener("click", reviewEditableFieldsFromContract);

document.querySelector("#replicate-template")?.addEventListener("click", () => {
  createWorkingCopy(activeSourceMaster || activeTemplate, editor.value);
});

document.querySelector("#rename-template")?.addEventListener("click", renameActiveTemplate);

document.querySelector("#clear-generales").addEventListener("click", clearGeneralData);
document.querySelector("#integrate-manual-data")?.addEventListener("click", integrateCompletedManualFields);

contractFolderSelect?.addEventListener("change", () => {
  activeFolder = contractFolderSelect.value;
  renderFolders();
  renderSavedContracts();
  renderVersions();
  saveActiveDraft("Carpeta actualizada");
  showToast(`Este contrato se guardará en ${activeFolder}.`);
});

quickFolderButton?.addEventListener("click", async () => {
  const destination = await openSaveLocationDialog({
    title: "Elegir carpeta de trabajo",
    initialFolder: activeFolder || "Mis Documentos",
    confirmLabel: "Usar esta carpeta"
  });
  if (!destination) return;
  activeFolder = ensureFolderPath(destination.folder);
  renderFolders();
  renderSavedContracts();
  renderVersions();
  renderFolderSelector();
  saveActiveDraft("Carpeta actualizada");
  showToast(`Este contrato se guardará en ${activeFolder}.`);
});

switchUserButton.addEventListener("click", () => {
  signOut();
});

document.querySelector("#login-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.querySelector("#login-email").value.trim().toLowerCase();
  const password = document.querySelector("#login-password").value;
  const rememberSession = document.querySelector("#remember-session")?.checked !== false;
  const backend = productionBackend();
  setAuthMessage("");
  if (backend) {
    if (!email.includes("@")) {
      setAuthMessage("Usa el correo completo asociado a tu cuenta.", "error");
      return;
    }
    try {
      await backend.signIn(email, password);
      localStorage.setItem("lexcontratos_last_login_email", email);
      setAuthMessage("Acceso validado. Cargando tu biblioteca...", "success");
      await renderAccessState();
    } catch (error) {
      const message = readableAuthError(error);
      setAuthMessage(message, "error");
      showToast(message);
    }
    return;
  }
  if (backendAccessLocked()) {
    setAuthMessage("El acceso privado no está disponible temporalmente. Contacta al administrador.", "error");
    return;
  }
  const user = loadUsers()[email];
  if (!user || user.password !== password) {
    showToast("Usuario o contraseña incorrectos.");
    return;
  }
  saveSession(email, rememberSession);
  renderAccessState();
});

document.querySelector("#demo-login")?.addEventListener("click", () => {
  showToast("El acceso de prueba no está disponible en este espacio.");
});

document.querySelector("#register-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const backend = productionBackend();
  if (backend) {
    try {
      const registerEmail = document.querySelector("#register-email").value.trim().toLowerCase();
      await backend.signUp(
        registerEmail,
        document.querySelector("#register-password").value,
        document.querySelector("#register-name").value.trim()
      );
      localStorage.setItem("lexcontratos_last_login_email", registerEmail);
      showToast("Usuario creado. Revisa tu correo si se solicita confirmación. Tu cuenta quedará pendiente de activación.");
      showAuthPanel(authLogin);
    } catch (error) {
      showToast("No se pudo crear el usuario. Intenta nuevamente o contacta al administrador.");
    }
    return;
  }
  if (backendAccessLocked()) {
    showToast("El registro no está disponible temporalmente. Contacta al administrador.");
    return;
  }
  const users = loadUsers();
  const email = document.querySelector("#register-email").value.trim().toLowerCase();
  if (users[email]) {
    showToast("Ese usuario ya existe.");
    return;
  }
  users[email] = {
    email,
    password: document.querySelector("#register-password").value,
    name: document.querySelector("#register-name").value.trim(),
    role: "Usuario",
    accountStatus: "active",
    licenseStatus: "inactive",
    licenseEndsAt: ""
  };
  saveUsers(users);
  saveSession(email, true);
  renderAccessState();
});

document.querySelector("#recover-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const backend = productionBackend();
  if (backend) {
    try {
      await backend.resetPassword(document.querySelector("#recover-email").value.trim());
      showToast("Te enviamos un correo para recuperar tu contraseña.");
      showAuthPanel(authLogin);
    } catch (error) {
      showToast("No se pudo enviar la recuperación. Intenta nuevamente o contacta al administrador.");
    }
    return;
  }
  if (backendAccessLocked()) {
    showToast("La recuperación no está disponible temporalmente. Contacta al administrador.");
    return;
  }
  showToast("Recuperación preparada. En producción se enviará un correo seguro.");
  showAuthPanel(authLogin);
});

document.querySelector("#show-register").addEventListener("click", () => showAuthPanel(authRegister));
document.querySelector("#show-recover").addEventListener("click", () => showAuthPanel(authRecover));
document.querySelectorAll(".show-login").forEach((button) => button.addEventListener("click", () => showAuthPanel(authLogin)));
document.querySelectorAll("[data-route-link]").forEach((control) => {
  control.addEventListener("click", () => {
    const route = normalizedRouteName(control.dataset.routeLink || "/");
    setRoute(route);
    renderAccessState();
  });
});

window.addEventListener("popstate", () => {
  renderAccessState();
});

document.querySelector("#activate-demo-license")?.addEventListener("click", () => {
  if (productionBackend() || backendAccessLocked()) {
    showToast("Tu cuenta ya está registrada. El administrador puede activar tu licencia desde el panel.");
    return;
  }
  const session = loadSession();
  if (!session?.email) return;
  const users = loadUsers();
  users[session.email].licenseStatus = "active";
  users[session.email].licenseEndsAt = "2026-12-31";
  saveUsers(users);
  renderAccessState();
});

document.querySelector("#license-logout").addEventListener("click", signOut);

async function saveContractToArchive({ saveAs = false } = {}) {
  if (!ensureEditableWorkspace("guardar contrato")) return;
  const defaultName = cleanWorkingTitle(templates[activeTemplate]?.title || editorTitle.textContent) || "Contrato";
  const destination = await openSaveLocationDialog({
    title: saveAs ? "Guardar contrato como" : "Guardar contrato en Mis Documentos",
    initialFolder: activeFolder || "Mis Documentos",
    confirmLabel: saveAs ? "Guardar como" : "Guardar aquí",
    defaultName,
    requireName: true
  });
  if (!destination) {
    showToast("Guardado cancelado. El contrato sigue como borrador.");
    return;
  }
  activeFolder = ensureFolderPath(destination.folder, activeFolder.split("/")[0] || "Mis Documentos");
  renderFolders();
  renderFolderSelector();
  if (destination.fileName) {
    templates[activeTemplate].title = destination.fileName;
    editorTitle.textContent = destination.fileName;
  }
  const filled = fillPlaceholders(editor.value);
  editor.value = filled;
  addMatterEvent(saveAs ? "Contrato guardado como copia" : "Contrato guardado");
  const title = cleanWorkingTitle(destination.fileName || templates[activeTemplate].title);
  const contract = {
    id: Date.now().toString(),
    title,
    folder: activeFolder,
    template: activeTemplate,
    language: activeLanguage,
    userInitials: currentUserInitials(),
    letterheadLogoId: selectedLetterheadLogoId,
    date: new Date().toLocaleString("es-MX"),
    body: filled,
    folio: activeMatterFolio || "",
    matter: matterSnapshot("Borrador guardado", false)
  };
  savedContracts.push(contract);
  saveSavedContracts(contract);
  renderSavedContracts();
  renderVersions();
  autoSaveVersion("manual");
  saveActiveDraft(saveAs ? "Contrato guardado como" : "Contrato guardado");
  showToast(`${saveAs ? "Contrato guardado como copia" : "Contrato guardado"} en ${activeFolder}.`);
}

document.querySelector("#save-contract")?.addEventListener("click", () => saveContractToArchive());
document.querySelector("#save-as-contract")?.addEventListener("click", () => saveContractToArchive({ saveAs: true }));

document.querySelector("#save-version").addEventListener("click", () => {
  saveAsPersonalBaseTemplate();
});

saveCatalogTemplateButton?.addEventListener("click", saveCatalogTemplateEdits);

document.querySelector("#new-template").addEventListener("click", () => {
  setCatalogEditMode(null);
  activeTemplate = `custom-${Date.now()}`;
  const body = "NOMBRE DEL CONTRATO\n\nQUE CELEBRAN {{parteA}} Y {{parteB}}...\n\nDECLARACIONES\n\nI. Personalidad de {{parteA}}.\n\nCLÁUSULAS\n\nPRIMERA.";
  const prepared = prepareTemplateFields(body, []);
  templates[activeTemplate] = {
    category: "Operación",
    title: "Nuevo formato",
    description: "Formato propio en construcción.",
    fields: prepared.fields.length,
    body: prepared.body,
    customFields: prepared.fields
  };
  loadTemplate(activeTemplate);
  showToast("Formato nuevo listo para redactar.");
});

document.querySelector("#extract-data").addEventListener("click", async () => {
  if (!ensureEditableWorkspace("extraer datos")) return;
  if (!requireFieldsReviewed("extraer e integrar datos")) return;
  partyDocumentsStepVisited = true;
  updateWorkflowStepState();
  let detected = {};
  let aiWasTried = false;
  const aiOnlyDocuments = uploadedDocumentsNeedingAi();
  showToast("Extrayendo e integrando datos de cada parte...");
  for (const role of getRoles()) {
    try {
      const aiDetected = await extractRoleDataWithAi(role);
      if (Object.keys(aiDetected).length) {
        aiWasTried = true;
        detected = { ...detected, ...aiDetected };
        continue;
      }
    } catch (error) {
      aiWasTried = true;
      console.warn("LexContratos extracción IA no disponible", error);
    }
    const text = (sourceTextsBySide[role.side] || []).map((file) => file.text).join("\n\n");
    if (text.trim()) detected = { ...detected, ...inferDataFromText(text, role.side) };
  }
  const detectionResult = applyDetectedData(detected);
  const appliedCount = detectionResult?.appliedCount || 0;
  const preservedCount = detectionResult?.skipped?.length || 0;
  const integrated = appliedCount ? integrateKnownDataIntoContract("Datos extraídos integrados al contrato") : 0;
  const missing = missingFieldsForActiveTemplate().length;
  if (Object.keys(detected).length) {
    addMatterEvent(`Datos extraídos e integrados: ${integrated || appliedCount || Object.keys(detected).length}`);
    if (!missing) assistantPane.classList.remove("open");
    if (missing && integrated) {
      assistantPane.classList.add("open");
      showToast(`Se extrajeron e integraron ${integrated} dato${integrated === 1 ? "" : "s"}. Quedan ${missing} pendiente${missing === 1 ? "" : "s"}${preservedCount ? `; conservé ${preservedCount} dato${preservedCount === 1 ? "" : "s"} existente${preservedCount === 1 ? "" : "s"}` : ""}.`);
    } else if (preservedCount && !appliedCount) {
      assistantPane.classList.add("open");
      showToast(`La información nueva no reemplazó datos ya capturados. Conservé ${preservedCount} dato${preservedCount === 1 ? "" : "s"} existente${preservedCount === 1 ? "" : "s"}; puedes cambiarlo manualmente si corresponde.`);
    } else if (missing) {
      assistantPane.classList.add("open");
      showToast(`Se extrajeron ${Object.keys(detected).length} dato${Object.keys(detected).length === 1 ? "" : "s"}. ${preservedCount ? `Conservé ${preservedCount} dato${preservedCount === 1 ? "" : "s"} existente${preservedCount === 1 ? "" : "s"}. ` : ""}Revisa los pendientes manualmente.`);
    } else {
      showToast(`Datos extraídos e integrados al contrato. No quedan campos pendientes${preservedCount ? `; conservé ${preservedCount} dato${preservedCount === 1 ? "" : "s"} existente${preservedCount === 1 ? "" : "s"}` : ""}.`);
    }
  } else if (aiOnlyDocuments.length && isLocalStaticPreview()) {
    showToast("Los documentos quedaron cargados, pero esta vista local no ejecuta IA documental. Abre lexcontratos.com para extraerlos o captura los datos manualmente.");
  } else if (aiOnlyDocuments.length && aiWasTried) {
    showToast("No se pudo extraer información de esos archivos. Puedes intentarlo de nuevo, subir otro documento o capturar los datos manualmente.");
  } else {
    showToast(aiWasTried ? "La extracción documental no está disponible temporalmente. Puedes capturar o corregir los datos manualmente." : "Carga textos, correos o CSV por cada parte, o llena manualmente los campos faltantes.");
  }
});

templateImport.addEventListener("change", async () => {
  const [file] = Array.from(templateImport.files);
  if (!file) return;

  const importingToSystemCatalog = Boolean(pendingTemplateImportCatalogPath) && canSeeSystemCatalogs();
  const addToMaster = importingToSystemCatalog || window.confirm("¿Quieres guardar este contrato como formato del catálogo?\n\nAceptar: revisa campos, limpia marcadores y lo guarda como formato base.\nCancelar: solo lo abre como copia de trabajo para este contrato.");
  const suggestedCatalogPath = pendingTemplateImportCatalogPath || (activeTemplateCatalogFolder === "Todos" ? "Documentos base propios" : activeTemplateCatalogFolder);
  const catalogPath = addToMaster
    ? promptTemplateCatalogPath(suggestedCatalogPath)
    : "";
  pendingTemplateImportCatalogPath = "";
  if (addToMaster && !catalogPath) {
    templateImport.value = "";
    showToast("Importación cancelada. No se guardó el formato.");
    return;
  }
  const keyPrefix = addToMaster ? "custom-master" : "work";
  activeTemplate = `custom-${Date.now()}`;
  activeTemplate = `${keyPrefix}-${Date.now()}`;

  templates[activeTemplate] = {
    category: catalogPath || "Operación",
    catalogPath: catalogPath || "",
    title: file.name.replace(/\.[^.]+$/, ""),
    description: addToMaster ? "Formato importado, revisado y guardado como formato base." : "Contrato importado como copia de trabajo temporal.",
    fields: 0,
    body: "",
    customFields: [],
    master: addToMaster
  };

  if (/\.(txt|csv|eml)$/i.test(file.name)) {
    const prepared = prepareTemplateFields(await file.text(), []);
    templates[activeTemplate].body = prepared.body;
    templates[activeTemplate].customFields = prepared.fields;
    templates[activeTemplate].fields = prepared.fields.length;
    showToast(addToMaster ? `Formato guardado con ${prepared.fields.length} campo${prepared.fields.length === 1 ? "" : "s"} limpio${prepared.fields.length === 1 ? "" : "s"}. Crea una copia para trabajarlo.` : `Copia de trabajo importada con ${prepared.fields.length} campo${prepared.fields.length === 1 ? "" : "s"} editable${prepared.fields.length === 1 ? "" : "s"}.`);
  } else {
    templates[activeTemplate].body = `FORMATO IMPORTADO: ${file.name}\n\nEn la versión completa, LexContratos extraería el texto de PDF o Word, conservaría su estructura y detectaría campos rellenables para cada parte.`;
    showToast(addToMaster ? "Formato creado. PDF y Word requieren extracción documental en backend para limpiar campos con precisión." : "Contrato abierto como trabajo temporal. PDF y Word requieren extracción documental en backend.");
  }

  if (addToMaster) {
    const saveAsSharedCatalog = importingToSystemCatalog || (canManageSharedCatalog() && window.confirm("¿Quieres publicarlo en el catálogo general para el equipo?\n\nAceptar: catálogo general.\nCancelar: solo biblioteca personal."));
    if (saveAsSharedCatalog) {
      templates[activeTemplate].shared = true;
      templates[activeTemplate].personal = false;
      saveSharedMasterTemplate(activeTemplate, templates[activeTemplate]);
    } else {
      templates[activeTemplate].personal = true;
      saveMasterTemplates();
    }
    activeTemplateCatalogFolder = catalogPath;
    syncSystemCatalogFolders();
    activeFolder = catalogPathToSystemFolder(catalogPath);
    renderFolders();
  }
  loadTemplate(activeTemplate);
  templateImport.value = "";
});

function openArchiveFolder(folder, { announce = true } = {}) {
  if (!folder) return;
  activeFolder = ensureFolderPath(folder);
  renderFolders();
  renderSavedContracts();
  renderVersions();
  renderFolderSelector();
  if (announce) showToast(`Expediente abierto: ${activeFolder}.`);
}

function handleArchiveSavedItemClick(event) {
  const archiveAction = event.target.closest(".rename-contract, .move-contract, .copy-contract, .delete-contract, .rename-document, .move-document, .copy-document, .delete-document, .open-saved-contract");
  if (!archiveAction) return false;

  const renameButton = event.target.closest(".rename-contract");
  if (renameButton) {
    renameSavedContract(renameButton.dataset.id);
    return true;
  }
  const moveButton = event.target.closest(".move-contract");
  if (moveButton) {
    moveContractToFolder(moveButton.dataset.id);
    return true;
  }
  const copyButton = event.target.closest(".copy-contract");
  if (copyButton) {
    copyContractToFolder(copyButton.dataset.id);
    return true;
  }
  const deleteButton = event.target.closest(".delete-contract");
  if (deleteButton) {
    deleteSavedContract(deleteButton.dataset.id);
    return true;
  }
  const renameDocumentButton = event.target.closest(".rename-document");
  if (renameDocumentButton) {
    renameSupportDocument(renameDocumentButton.dataset.id);
    return true;
  }
  const moveDocumentButton = event.target.closest(".move-document");
  if (moveDocumentButton) {
    moveSupportDocumentToFolder(moveDocumentButton.dataset.id);
    return true;
  }
  const copyDocumentButton = event.target.closest(".copy-document");
  if (copyDocumentButton) {
    copySupportDocumentToFolder(copyDocumentButton.dataset.id);
    return true;
  }
  const deleteDocumentButton = event.target.closest(".delete-document");
  if (deleteDocumentButton) {
    deleteSupportDocument(deleteDocumentButton.dataset.id);
    return true;
  }
  const systemTemplateButton = event.target.closest(".open-system-template");
  if (systemTemplateButton) {
    editMasterTemplate(systemTemplateButton.dataset.template);
    return true;
  }
  const systemLetterheadButton = event.target.closest(".open-system-letterhead");
  if (systemLetterheadButton) {
    selectedLetterheadLogoId = systemLetterheadButton.dataset.letterheadId || selectedLetterheadLogoId;
    saveSelectedLetterheadLogoId();
    renderLetterheadLogos();
    openAdminLetterheadCatalog();
    return true;
  }
  const button = event.target.closest(".open-saved-contract");
  if (!button) return false;
  const contract = savedContracts.find((item) => item.id === button.dataset.id);
  if (!contract) return true;
  activeFolder = contract.folder || activeFolder;
  activeTemplate = contract.template || activeTemplate;
  if (activeTemplate && !templates[activeTemplate]) {
    templates[activeTemplate] = {
      title: contract.title,
      category: "Contratos archivados",
      description: "Contrato abierto desde expediente.",
      body: contract.body,
      customFields: [],
      fields: 0,
      master: false
    };
  }
  setCatalogEditMode(null);
  isWorkingCopy = true;
  activeSourceMaster = templates[activeTemplate]?.sourceMaster || activeSourceMaster;
  editorTitle.textContent = contract.title;
  editor.value = contract.body;
  editor.readOnly = false;
  activeLanguage = contract.language;
  selectedLetterheadLogoId = contract.letterheadLogoId && letterheadLogos.some((logo) => logo.id === contract.letterheadLogoId) ? contract.letterheadLogoId : selectedLetterheadLogoId;
  saveSelectedLetterheadLogoId();
  renderLetterheadLogos();
  if (contract.matter) {
    activeMatterFolio = contract.matter.folio || null;
    activeMatterDraftId = contract.matter.draftId || "";
    matterHistoryEvents = contract.matter.history || [];
    const roles = getRoles();
    sourceTextsBySide = {
      A: (contract.matter.roles?.[0]?.documents || []).map((doc) => ({ ...doc, text: "" })),
      B: (contract.matter.roles?.[1]?.documents || []).map((doc) => ({ ...doc, text: "" }))
    };
    if (!roles.length) sourceTextsBySide = { A: [], B: [] };
    renderRoleDrops();
    renderMatterPanel();
  }
  renderFolders();
  renderFolderSelector();
  saveActiveDraft("Contrato archivado abierto");
  showToast("Contrato archivado abierto en el editor.");
  return true;
}

folderList.addEventListener("click", (event) => {
  hideFolderContextMenu();
  const sortButton = event.target.closest("[data-archive-sort]");
  if (sortButton) {
    const key = sortButton.dataset.archiveSort;
    if (archiveSortKey === key) {
      archiveSortDirection = archiveSortDirection === "asc" ? "desc" : "asc";
    } else {
      archiveSortKey = key;
      archiveSortDirection = key === "date" ? "desc" : "asc";
    }
    localStorage.setItem("lexcontratos_archive_sort_key", archiveSortKey);
    localStorage.setItem("lexcontratos_archive_sort_direction", archiveSortDirection);
    renderFolders();
    return;
  }
  const archiveActionButton = event.target.closest("[data-archive-action]");
  if (archiveActionButton) {
    event.stopPropagation();
    runArchiveContextAction(archiveActionButton.dataset.archiveAction);
    return;
  }
  const renameButton = event.target.closest(".rename-folder");
  if (renameButton) {
    renameFolder(renameButton.dataset.folder);
    return;
  }
  const deleteButton = event.target.closest(".delete-folder");
  if (deleteButton) {
    deleteFolder(deleteButton.dataset.folder);
    return;
  }
  if (handleArchiveSavedItemClick(event)) return;
  const button = event.target.closest(".folder-item");
  if (!button) return;
  if (button.classList.contains("archive-root")) {
    openArchiveFolder(button.dataset.folder, { announce: false });
  }
});

folderList.addEventListener("pointerover", (event) => {
  const row = event.target.closest("[data-archive-row]");
  if (!row || row.dataset.archiveRow === "parent") return;
  hoveredArchiveItem = {
    type: row.dataset.archiveRow,
    id: row.dataset.archiveId || row.dataset.folder || row.dataset.id || row.dataset.documentId || ""
  };
  renderArchiveToolbarState();
});

folderList.addEventListener("pointerleave", () => {
  hoveredArchiveItem = null;
  renderArchiveToolbarState();
});

folderList.addEventListener("contextmenu", (event) => {
  const archiveRow = event.target.closest("[data-archive-row]");
  if (archiveRow) {
    const type = archiveRow.dataset.archiveRow;
    const id = archiveRow.dataset.archiveId || archiveRow.dataset.folder || archiveRow.dataset.id || archiveRow.dataset.documentId || "";
    if (type === "contract" || type === "document" || type === "template" || type === "letterhead") {
      const target = { type, id };
      hoveredArchiveItem = target;
      const targetKey = archiveKey(type, id);
      if (selectedArchiveItems.size && !selectedArchiveItems.has(targetKey)) selectedArchiveItems.clear();
      renderArchiveToolbarState();
      showFolderContextMenu(event, activeFolder, { mode: "item", target });
      return;
    }
    if (type === "folder") {
      showFolderContextMenu(event, archiveRow.dataset.folder || id || activeFolder);
      return;
    }
  }
  showFolderContextMenu(event, activeFolder);
});

savedContractsList.addEventListener("contextmenu", (event) => {
  showFolderContextMenu(event, activeFolder);
});

folderContextMenu?.addEventListener("click", async (event) => {
  event.stopPropagation();
  const action = event.target.closest("[data-context-action]")?.dataset.contextAction;
  if (!action || !contextMenuFolder) return;
  const folder = contextMenuFolder;
  const handlers = {
    onNew: folderContextMenu._onNew,
    onRename: folderContextMenu._onRename,
    onDelete: folderContextMenu._onDelete
  };
  const mode = folderContextMenu._mode || "folder";
  const target = folderContextMenu._target;
  hideFolderContextMenu();
  if (mode === "item") {
    const targetKey = target ? archiveKey(target.type, target.id) : "";
    const targets = selectedArchiveItems.size && targetKey && selectedArchiveItems.has(targetKey)
      ? currentArchiveTargets()
      : (target ? [target] : currentArchiveTargets());
    if (action === "rename") renameArchiveTargets(targets);
    if (action === "move") await moveArchiveTargets(targets);
    if (action === "copy") await copyArchiveTargets(targets);
    if (action === "delete") deleteArchiveTargets(targets);
    return;
  }
  if (action === "new") {
    if (handlers.onNew) {
      handlers.onNew(folder);
      return;
    }
    createFolderInsideArchive(folder);
    return;
  }
  if (action === "rename") {
    if (handlers.onRename) {
      handlers.onRename(folder);
      return;
    }
    renameFolder(folder);
    return;
  }
  if (action === "delete") {
    if (handlers.onDelete) {
      handlers.onDelete(folder);
      return;
    }
    deleteFolder(folder);
  }
});

folderList.addEventListener("dblclick", (event) => {
  const button = event.target.closest(".folder-item");
  if (!button) return;
  openArchiveFolder(button.dataset.folder);
});

finderPath?.addEventListener("click", (event) => {
  const crumb = event.target.closest(".finder-crumb");
  if (!crumb) return;
  openArchiveFolder(crumb.dataset.folder);
});

archiveNewFolderButton?.addEventListener("click", () => {
  const visibleFolder = document.querySelector(".archive-finder")?.dataset.contextFolder || activeFolder;
  createFolderInsideArchive(visibleFolder);
});

archiveUploadDocumentsButton?.addEventListener("click", () => {
  if (activeFolder === "Formatos del sistema") {
    if (!canSeeSystemCatalogs()) return;
    pendingTemplateImportCatalogPath = "Formatos generales";
    templateImport?.click();
    return;
  }
  if (activeFolder === "Catálogos del sistema/Membretes" && canSeeSystemCatalogs()) {
    letterheadLogoInput?.click();
    return;
  }
  archiveDocumentUpload?.click();
});
archiveUploadFolderButton?.addEventListener("click", () => archiveFolderUpload?.click());
archiveDocumentUpload?.addEventListener("change", async () => {
  if (activeFolder === "Catálogos del sistema/Membretes" && canSeeSystemCatalogs()) {
    addLetterheadLogo(archiveDocumentUpload.files?.[0]);
    archiveDocumentUpload.value = "";
    return;
  }
  await addFilesToArchiveFolder(archiveDocumentUpload.files, activeFolder);
  archiveDocumentUpload.value = "";
});
archiveFolderUpload?.addEventListener("change", async () => {
  await addFilesToArchiveFolder(archiveFolderUpload.files, activeFolder);
  archiveFolderUpload.value = "";
});

archiveDeleteSelectedButton?.addEventListener("click", deleteSelectedArchiveItems);

archiveSearch?.addEventListener("input", (event) => {
  archiveSearchTerm = removeAccents(event.target.value || "").toLowerCase().trim();
  renderFolders();
  renderSavedContracts();
});

archiveViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    archiveViewMode = button.dataset.archiveView || "details";
    localStorage.setItem("lexcontratos_archive_view", archiveViewMode);
    renderFolders();
    renderSavedContracts();
  });
});

folderList.addEventListener("dragover", (event) => {
  if (!event.dataTransfer?.types?.includes("Files")) return;
  event.preventDefault();
  folderList.classList.add("is-dragging");
});

folderList.addEventListener("dragleave", () => {
  folderList.classList.remove("is-dragging");
});

folderList.addEventListener("drop", async (event) => {
  if (!event.dataTransfer?.types?.includes("Files")) return;
  event.preventDefault();
  folderList.classList.remove("is-dragging");
  await addFilesToArchiveFolder(await filesFromDrop(event.dataTransfer), activeFolder);
});

folderList.addEventListener("change", updateArchiveSelection);
savedContractsList.addEventListener("change", updateArchiveSelection);

saveLocationBrowser?.addEventListener("click", (event) => {
  hideSaveLocationContextMenu();
  const actionButton = event.target.closest(".save-folder-action");
  if (actionButton) {
    event.stopPropagation();
    const folder = actionButton.dataset.saveFolder;
    if (actionButton.dataset.saveAction === "rename") renameFolderInsideSaveLocation(folder);
    if (actionButton.dataset.saveAction === "delete") deleteFolderInsideSaveLocation(folder);
    return;
  }
  const button = event.target.closest(".save-folder-option");
  if (!button) return;
  saveLocationState.fileName = saveLocationFileName?.value || saveLocationState.fileName || saveLocationState.defaultName || "";
  saveLocationState.folder = button.dataset.saveFolder;
  renderSaveLocationBrowser();
});

saveLocationBrowser?.addEventListener("dblclick", (event) => {
  const button = event.target.closest(".save-folder-option");
  if (!button) return;
  saveLocationState.fileName = saveLocationFileName?.value || saveLocationState.fileName || saveLocationState.defaultName || "";
  saveLocationState.folder = button.dataset.saveFolder;
  renderSaveLocationBrowser();
});

saveLocationBrowser?.addEventListener("contextmenu", (event) => {
  const row = event.target.closest("[data-save-folder]");
  const folder = row?.dataset.saveFolder || saveLocationState.folder || activeFolder || "Mis Documentos";
  showSaveLocationContextMenu(event, folder);
});

saveLocationContextMenu?.addEventListener("click", (event) => {
  event.stopPropagation();
  const action = event.target.closest("[data-save-context-action]")?.dataset.saveContextAction;
  if (!action || !saveContextFolder) return;
  const folder = saveContextFolder;
  hideSaveLocationContextMenu();
  if (action === "new") createFolderInsideSaveLocationAt(folder);
  if (action === "rename") renameFolderInsideSaveLocation(folder);
  if (action === "delete") deleteFolderInsideSaveLocation(folder);
});

saveLocationConfirm?.addEventListener("click", () => {
  const folder = ensureFolderPath(saveLocationState.folder || activeFolder || "Mis Documentos");
  const fileName = saveLocationFileName?.value.trim() || saveLocationState.defaultName || "";
  if (saveLocationState.requireName && !fileName) {
    showToast("Escribe un nombre para guardar el contrato.");
    return;
  }
  resolveSaveLocation({ folder, fileName });
});

saveLocationCancel?.addEventListener("click", () => resolveSaveLocation(null));

saveLocationExpandButton?.addEventListener("click", () => {
  saveLocationDialog?.classList.toggle("is-expanded");
  const expanded = saveLocationDialog?.classList.contains("is-expanded");
  saveLocationExpandButton.textContent = expanded ? "Reducir" : "Ampliar";
});

saveLocationDialog?.addEventListener("close", () => {
  hideSaveLocationContextMenu();
  if (saveLocationResolve) resolveSaveLocation(null);
});

savedContractsList.addEventListener("click", (event) => {
  const renameButton = event.target.closest(".rename-contract");
  if (renameButton) {
    renameSavedContract(renameButton.dataset.id);
    return;
  }
  const moveButton = event.target.closest(".move-contract");
  if (moveButton) {
    moveContractToFolder(moveButton.dataset.id);
    return;
  }
  const copyButton = event.target.closest(".copy-contract");
  if (copyButton) {
    copyContractToFolder(copyButton.dataset.id);
    return;
  }
  const deleteButton = event.target.closest(".delete-contract");
  if (deleteButton) {
    deleteSavedContract(deleteButton.dataset.id);
    return;
  }
  const renameDocumentButton = event.target.closest(".rename-document");
  if (renameDocumentButton) {
    renameSupportDocument(renameDocumentButton.dataset.id);
    return;
  }
  const moveDocumentButton = event.target.closest(".move-document");
  if (moveDocumentButton) {
    moveSupportDocumentToFolder(moveDocumentButton.dataset.id);
    return;
  }
  const copyDocumentButton = event.target.closest(".copy-document");
  if (copyDocumentButton) {
    copySupportDocumentToFolder(copyDocumentButton.dataset.id);
    return;
  }
  const deleteDocumentButton = event.target.closest(".delete-document");
  if (deleteDocumentButton) {
    deleteSupportDocument(deleteDocumentButton.dataset.id);
    return;
  }
  const button = event.target.closest(".open-saved-contract");
  if (!button) return;
  const contract = savedContracts.find((item) => item.id === button.dataset.id);
  if (!contract) return;
  activeFolder = contract.folder || activeFolder;
  activeTemplate = contract.template || activeTemplate;
  if (activeTemplate && !templates[activeTemplate]) {
    templates[activeTemplate] = {
      title: contract.title,
      category: "Contratos archivados",
      description: "Contrato abierto desde expediente.",
      body: contract.body,
      customFields: [],
      fields: 0,
      master: false
    };
  }
  setCatalogEditMode(null);
  isWorkingCopy = true;
  activeSourceMaster = templates[activeTemplate]?.sourceMaster || activeSourceMaster;
  editorTitle.textContent = contract.title;
  editor.value = contract.body;
  editor.readOnly = false;
  activeLanguage = contract.language;
  selectedLetterheadLogoId = contract.letterheadLogoId && letterheadLogos.some((logo) => logo.id === contract.letterheadLogoId) ? contract.letterheadLogoId : selectedLetterheadLogoId;
  saveSelectedLetterheadLogoId();
  renderLetterheadLogos();
  if (contract.matter) {
    activeMatterFolio = contract.matter.folio || null;
    activeMatterDraftId = contract.matter.draftId || "";
    matterHistoryEvents = contract.matter.history || [];
    const roles = getRoles();
    sourceTextsBySide = {
      A: (contract.matter.roles?.[0]?.documents || []).map((doc) => ({ ...doc, text: "" })),
      B: (contract.matter.roles?.[1]?.documents || []).map((doc) => ({ ...doc, text: "" }))
    };
    if (!roles.length) sourceTextsBySide = { A: [], B: [] };
    renderRoleDrops();
    renderMatterPanel();
  }
  renderFolders();
  renderFolderSelector();
  saveActiveDraft("Contrato archivado abierto");
  showToast("Contrato archivado abierto en el editor.");
});

versionList.addEventListener("click", (event) => {
  const moveButton = event.target.closest(".move-version");
  if (moveButton) {
    moveVersionToFolder(moveButton.dataset.versionId);
    return;
  }
  const copyButton = event.target.closest(".copy-version");
  if (copyButton) {
    copyVersionToFolder(copyButton.dataset.versionId);
    return;
  }
  const deleteButton = event.target.closest(".delete-version");
  if (deleteButton) {
    deleteSavedVersion(deleteButton.dataset.versionId);
    return;
  }
  const button = event.target.closest(".open-version");
  if (!button) return;
  const version = versions.find((item) => item.id === button.dataset.versionId);
  if (!version) return;
  activeFolder = version.folder || activeFolder;
  activeTemplate = version.template || activeTemplate;
  if (activeTemplate && !templates[activeTemplate]) {
    templates[activeTemplate] = {
      title: version.title,
      category: "Versiones guardadas",
      description: "Versión abierta desde expediente.",
      body: version.body,
      customFields: [],
      fields: 0,
      master: false
    };
  }
  setCatalogEditMode(null);
  isWorkingCopy = true;
  activeSourceMaster = templates[activeTemplate]?.sourceMaster || activeSourceMaster;
  editorTitle.textContent = version.title;
  editor.value = version.body;
  editor.readOnly = false;
  activeLanguage = version.language;
  selectedLetterheadLogoId = version.letterheadLogoId && letterheadLogos.some((logo) => logo.id === version.letterheadLogoId) ? version.letterheadLogoId : selectedLetterheadLogoId;
  saveSelectedLetterheadLogoId();
  renderLetterheadLogos();
  if (version.matter) {
    activeMatterFolio = version.matter.folio || null;
    activeMatterDraftId = version.matter.draftId || "";
    matterHistoryEvents = version.matter.history || matterHistoryEvents;
    renderMatterPanel();
  }
  autosaveStatus.textContent = "Versión abierta";
  autosaveStatus.classList.add("autosave-highlight");
  renderFolders();
  renderFolderSelector();
  saveActiveDraft("Versión abierta");
  showToast("Versión guardada abierta en el editor.");
});

partyForm.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || !event.target.matches("input")) return;
  event.preventDefault();
  integrateCompletedManualFields();
});

partyForm.addEventListener("input", (event) => {
  criticalReviewDone = false;
  if (event.target?.matches("[data-service-mode], [data-service-catalog]")) syncServiceContractedField(event.target);
  if (event.target?.matches("[data-service-value]")) partyDataStore.servicioContratado = event.target.value.trim();
  if (event.target?.matches("[data-fedatario-kind]")) syncFedatarioTypeField(event.target);
  if (event.target?.matches("[data-instrument-kind]")) syncInstrumentTypeField(event.target);
  if (event.target?.matches("[data-date-text]")) syncManualDateTextField(event.target);
  if (event.target?.matches("[data-date-picker]")) syncManualDatePickerField(event.target);
  if (event.target?.name === "importeNumero") syncAmountInWords({ force: true });
  if (event.target?.matches("[data-signature-date]")) syncSignatureDateFields(event.target.value);
  if (event.target?.matches("[data-signature-date-text]")) syncSignatureDateFields(event.target.value);
  renderRoleDrops();
  renderRequirements();
  if (!activeMatterFolio) renderMatterPanel();
  saveActiveDraft("Datos de partes actualizados");
});

partyForm.addEventListener("change", (event) => {
  if (event.target?.name === "parteA" || event.target?.name === "parteB") {
    const moved = reconcileSupportDocumentFolders(getPartyData());
    if (moved) {
      renderFolders();
      renderSavedContracts();
    }
  }
  if (event.target?.matches("[data-service-mode], [data-service-catalog]")) {
    criticalReviewDone = false;
    syncServiceContractedField(event.target);
    renderRoleDrops();
    renderRequirements();
    if (!activeMatterFolio) renderMatterPanel();
    saveActiveDraft("Servicio contratado actualizado");
  }
  if (event.target?.matches("[data-fedatario-kind]")) {
    criticalReviewDone = false;
    syncFedatarioTypeField(event.target);
    renderRequirements();
    saveActiveDraft("Fedatario actualizado");
  }
  if (event.target?.matches("[data-instrument-kind]")) {
    criticalReviewDone = false;
    syncInstrumentTypeField(event.target);
    renderRequirements();
    saveActiveDraft("Tipo de instrumento actualizado");
  }
  if (event.target?.matches("[data-date-picker]")) syncManualDatePickerField(event.target);
  if (event.target?.matches("[data-signature-date]")) syncSignatureDateFields(event.target.value);
});

editor.addEventListener("input", () => {
  if (isWorkingCopy) {
    criticalReviewDone = false;
    setFieldsReviewedState(false);
  }
  scheduleAutoSave();
});

window.addEventListener("beforeunload", () => {
  saveActiveDraft("Guardado antes de cerrar");
  if (isWorkingCopy && editor.value.trim()) autoSaveVersion("auto");
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    saveActiveDraft("Guardado en segundo plano");
    if (isWorkingCopy && editor.value.trim()) autoSaveVersion("auto");
  }
});

[formatFont, formatSize, formatMargin, formatLineHeight, formatJustify].forEach((control) => {
  control.addEventListener("change", readFormatControls);
});

letterheadLogoSelect?.addEventListener("change", () => {
  selectedLetterheadLogoId = letterheadLogoSelect.value;
  saveSelectedLetterheadLogoId();
  renderLetterheadLogos();
  saveActiveDraft("Membrete seleccionado");
  showToast(selectedLetterheadLogoId ? "Membrete seleccionado para este documento." : "Documento sin página membretada.");
});

addLetterheadLogoButton?.addEventListener("click", () => {
  renderLetterheadCatalogList();
  letterheadCatalogDialog?.showModal();
});

letterheadUploadButton?.addEventListener("click", () => {
  letterheadLogoInput?.click();
});

letterheadLogoInput?.addEventListener("change", () => {
  addLetterheadLogo(letterheadLogoInput.files?.[0]);
  letterheadLogoInput.value = "";
});

removeLetterheadLogoButton?.addEventListener("click", clearSelectedLetterheadLogo);
letterheadClearSelectionButton?.addEventListener("click", clearSelectedLetterheadLogo);
letterheadCatalogDialog?.addEventListener("click", (event) => {
  if (event.target === letterheadCatalogDialog) {
    letterheadCatalogDialog.close();
    return;
  }
  const button = event.target.closest("[data-letterhead-action]");
  if (!button) return;
  const id = button.dataset.letterheadId;
  if (button.dataset.letterheadAction === "select") {
    selectedLetterheadLogoId = id || "";
    saveSelectedLetterheadLogoId();
    renderLetterheadLogos();
    saveActiveDraft("Membrete seleccionado");
    showToast("Membrete seleccionado para este documento.");
  }
  if (button.dataset.letterheadAction === "delete") deleteLetterheadLogo(id);
});

document.querySelector("#apply-legal-format")?.addEventListener("click", applyDefaultLegalFormat);

const lastLoginEmail = localStorage.getItem("lexcontratos_last_login_email");
if (lastLoginEmail) document.querySelector("#login-email").value = lastLoginEmail;

window.addEventListener("lexbackendready", () => {
  renderAccessState();
});

renderUserSession();
renderMasterInsights();
syncFormatControls();
renderLetterheadLogos();
renderFolders();
renderSavedContracts();
renderVersions();
renderTemplates();
clearWorkspaceState();
if (restoreActiveDraft({ silent: true })) draftRestoredForUser = activeUser;
renderAccessState();
