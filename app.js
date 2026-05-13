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
  prestacionDemandaEjemplo: ["Prestador de servicios", "Cliente"],
  services: ["Prestador de servicios", "Cliente"],
  software: ["Desarrollador", "Cliente"],
  data: ["Responsable", "Encargado"],
  lease: ["Arrendador", "Arrendatario"],
  purchase: ["Vendedor", "Comprador"],
  loan: ["Mutuante", "Mutuario"],
  supply: ["Proveedor", "Comprador"],
  distribution: ["Fabricante", "Distribuidor"],
  commission: ["Comitente", "Comisionista"],
  mandate: ["Mandante", "Mandatario"],
  nda: ["Parte A", "Parte B"],
  work_order: ["Parte A", "Parte B"],
  trust: ["Fideicomitente", "Fiduciario"],
  association: ["Asociante", "Asociado"],
  agency: ["Principal", "Agente"],
  work_contract: ["Contratante", "Contratista"],
  professional_services: ["Cliente", "Profesionista"],
  promise: ["Promitente A", "Promitente B"],
  rights_assignment: ["Cedente", "Cesionario"],
  license_use: ["Licenciante", "Licenciatario"],
  franchise: ["Franquiciante", "Franquiciatario"],
  partnership: ["Socio A", "Socio B"],
  amendment: ["Parte A", "Parte B"],
  termination_agreement: ["Parte A", "Parte B"],
  debt_acknowledgment: ["Acreedor", "Deudor"]
};

const defaultValues = {
  parteA: "Servicios Delta, S.A. de C.V.",
  tipoA: "Sociedad Anónima de Capital Variable",
  repA: "Ana Lucía Romero",
  poderA: "Escritura pública 18,245",
  notarioA: "Notario Público 214 de la Ciudad de México",
  rfcA: "SDE240102AB1",
  escrituraA: "Escritura pública 12,845",
  folioA: "N-2024018842",
  fechaConstitucionA: "2 de enero de 2024",
  parteB: "Grupo Norte Capital, S. de R.L. de C.V.",
  tipoB: "Sociedad de Responsabilidad Limitada de Capital Variable",
  repB: "Carlos Medina Torres",
  poderB: "Escritura pública 31,902",
  notarioB: "Notario Público 89 de Nuevo León",
  rfcB: "GNC190811QL2",
  escrituraB: "Escritura pública 22,410",
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
const requirementsList = document.querySelector("#requirements-list");
const customFields = document.querySelector("#custom-fields");
const dynamicFields = document.querySelector("#dynamic-fields");
const roleDropGrid = document.querySelector("#role-drop-grid");
const folderList = document.querySelector("#folder-list");
const folderName = document.querySelector("#folder-name");
const folderRoot = document.querySelector("#folder-root");
const contractFolderSelect = document.querySelector("#contract-folder-select");
const savedContractsList = document.querySelector("#saved-contracts");
const versionList = document.querySelector("#version-list");
const autosaveStatus = document.querySelector("#autosave-status");
const formatFont = document.querySelector("#format-font");
const formatSize = document.querySelector("#format-size");
const formatMargin = document.querySelector("#format-margin");
const formatLineHeight = document.querySelector("#format-line-height");
const formatJustify = document.querySelector("#format-justify");
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
const archiveDrawer = document.querySelector("#archive-drawer");
const assistantPane = document.querySelector("#assistant-pane");
const signatureDialog = document.querySelector("#signature-dialog");
const signatureForm = document.querySelector("#signature-form");
const signerList = document.querySelector("#signer-list");
const criticalReviewDialog = document.querySelector("#critical-review-dialog");
const criticalReviewOutput = document.querySelector("#critical-review-output");
const applyCriticalReviewButton = document.querySelector("#apply-critical-review");
const quickFolderButton = document.querySelector("#quick-folder");
const matterFolio = document.querySelector("#matter-folio");
const matterTree = document.querySelector("#matter-tree");
const matterHistory = document.querySelector("#matter-history");

let activeUser = loadCurrentUser();
let templates = loadMasterTemplates();
let activeTemplate = null;
let activeSourceMaster = null;
let isWorkingCopy = false;
let activeCategory = "Todos";
let activeLanguage = "es";
let sourceTextsBySide = { A: [], B: [] };
let folders = loadFolders();
let activeFolder = folders[0] || "Clientes";
let savedContracts = loadSavedContracts();
let versions = loadVersions();
let legalFormat = loadLegalFormat();
let masterInsights = loadMasterInsights();
let activeMatterFolio = null;
let matterHistoryEvents = [];
let toastTimer;
let autosaveTimer;
let pendingCriticalReviewBody = "";

const demoAccount = {
  email: "usuario.demo@lexcontratos.local",
  password: "demo-interno",
  name: "Usuario Demo",
  role: "Administrador",
  accountStatus: "active",
  licenseStatus: "active",
  licenseEndsAt: "2026-12-31"
};

function loadUsers() {
  const users = readJson("lexcontratos_users", {});
  users[demoAccount.email] = {
    ...demoAccount,
    ...(users[demoAccount.email] || {}),
    password: demoAccount.password,
    role: users[demoAccount.email]?.role || demoAccount.role,
    accountStatus: "active",
    licenseStatus: "active",
    licenseEndsAt: users[demoAccount.email]?.licenseEndsAt || demoAccount.licenseEndsAt
  };
  localStorage.setItem("lexcontratos_users", JSON.stringify(users));
  return users;
}

function saveUsers(users) {
  localStorage.setItem("lexcontratos_users", JSON.stringify(users));
}

function loadSession() {
  return readJson("lexcontratos_session", null);
}

function saveSession(email) {
  localStorage.setItem("lexcontratos_session", JSON.stringify({ email, date: new Date().toISOString() }));
  localStorage.setItem("lexcontratos_current_user", email);
}

function clearSession() {
  localStorage.removeItem("lexcontratos_session");
}

function normalizeUserKey(value) {
  return removeAccents(value || "despacho")
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "") || "despacho";
}

function loadCurrentUser() {
  const session = loadSession();
  return session?.email || localStorage.getItem("lexcontratos_current_user") || "usuario-demo";
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
    Array.from(keys).map((key) => {
      const template = availableTemplates[key] || combined[key] || {};
      const merged = { ...template, ...(combined[key] || {}), master: true };
      const prepared = prepareTemplateFields(merged.body || "", merged.customFields || []);
      return [
        key,
        {
          ...merged,
          body: prepared.body,
          customFields: prepared.fields,
          fields: prepared.fields.length || merged.fields || 0,
          master: true
        }
      ];
    })
  );
}

function saveMasterTemplates() {
  const masters = {};
  Object.entries(templates).forEach(([key, template]) => {
    if (template.master) masters[key] = template;
  });
  localStorage.setItem(userStorageKey("master_templates"), JSON.stringify(masters));
}

function loadFolders() {
  const saved = readJson(userStorageKey("folders"), readJson("lexcontratos_folders", ["Clientes", "Proveedores"]));
  const normalized = saved
    .map((folder) => (folder === "General" ? "Clientes/General" : folder))
    .filter(Boolean);
  return Array.from(new Set(["Clientes", "Proveedores", ...normalized]));
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
    folder: contract.folder === "General" ? "Clientes/General" : contract.folder
  }));
}

function saveSavedContracts() {
  localStorage.setItem(userStorageKey("saved_contracts"), JSON.stringify(savedContracts));
  const backend = productionBackend();
  const latest = savedContracts[savedContracts.length - 1];
  if (backend && latest) backend.saveContract(latest).catch((error) => reportBackendError("guardar contrato", error));
}

function loadVersions() {
  const saved = readJson(userStorageKey("versions"), readJson("lexcontratos_versions", []));
  return saved.map((version) => ({
    ...version,
    folder: version.folder === "General" ? "Clientes/General" : version.folder
  }));
}

function saveVersions() {
  localStorage.setItem(userStorageKey("versions"), JSON.stringify(versions));
}

function loadLegalFormat() {
  const saved = readJson(
    userStorageKey("legal_format"),
    readJson("lexcontratos_legal_format", {
      font: "Times New Roman",
      size: "12",
      margin: "54pt",
      lineHeight: "1.5",
      justify: true
    })
  );
  if (saved.margin === "72pt") saved.margin = "54pt";
  saved.justify = true;
  return saved;
}

function saveLegalFormat() {
  localStorage.setItem(userStorageKey("legal_format"), JSON.stringify(legalFormat));
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
  if (licensePill) licensePill.textContent = account?.role === "Administrador" ? "Administrador" : account?.licenseStatus === "active" ? "Licencia activa" : "Licencia pendiente";
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
    : `<span>Cuando reemplaces una plantilla base, LexContratos registrará mejoras anonimizadas para nutrir la biblioteca.</span>`;
}

function clearWorkspaceState() {
  activeTemplate = null;
  activeSourceMaster = null;
  isWorkingCopy = false;
  sourceTextsBySide = { A: [], B: [] };
  activeMatterFolio = null;
  matterHistoryEvents = [];
  selectedCategory.textContent = "Inicio";
  editorTitle.textContent = "Selecciona o importa un machote";
  selectedDescription.textContent = "El contrato aparecerá aquí cuando elijas una plantilla base o importes un machote propio.";
  editor.value = "";
  editor.readOnly = true;
  autosaveStatus.textContent = "Sin contrato seleccionado";
  autosaveStatus.classList.remove("autosave-highlight");
  renameTemplateButton.textContent = "Nombre protegido";
  renameTemplateButton.title = "Selecciona un machote y duplica la plantilla para crear una copia editable.";
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
    status: isSharedBase ? "Plantilla base enriquecida" : "Mejora privada registrada"
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
      description: "Plantilla base enriquecida con mejoras anonimizadas de usuarios."
    };
    localStorage.setItem("lexcontratos_shared_master_templates", JSON.stringify(shared));
  }

  renderMasterInsights();
}

function switchActiveUser(user, announce = true) {
  activeUser = user;
  saveCurrentUser(user);
  templates = loadMasterTemplates();
  activeTemplate = null;
  activeSourceMaster = null;
  isWorkingCopy = false;
  sourceTextsBySide = { A: [], B: [] };
  folders = loadFolders();
  activeFolder = folders[0] || "Clientes";
  savedContracts = loadSavedContracts();
  versions = loadVersions();
  legalFormat = loadLegalFormat();
  renderUserSession();
  syncFormatControls();
  renderFolders();
  renderSavedContracts();
  renderVersions();
  clearWorkspaceState();
  if (announce) showToast(`Sesión cambiada a ${activeUser}. Biblioteca personal cargada.`);
}

function currentAccount() {
  const session = loadSession();
  if (!session?.email) return null;
  return loadUsers()[session.email] || null;
}

function hasActiveAccess(account) {
  return Boolean(account && account.accountStatus === "active" && (account.licenseStatus === "active" || account.role === "Administrador"));
}

function syncBackendAccount(access) {
  if (!access?.user?.email) return;
  const users = loadUsers();
  users[access.user.email] = {
    email: access.user.email,
    password: "",
    name: access.profile?.full_name || access.user.email,
    role: access.profile?.role === "admin" ? "Administrador" : "Usuario",
    accountStatus: access.profile?.account_status || "active",
    licenseStatus: ["active", "trial"].includes(access.status) || access.profile?.role === "admin" ? "active" : access.status || "inactive",
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
}

function showLoginRoute(panel = authLogin, route = "login") {
  applyRouteShell(route);
  appShell.classList.add("is-hidden");
  authShell.classList.remove("is-hidden");
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
      licensePill.textContent = access.profile?.role === "admin" ? "Administrador" : "Licencia activa";
      currentUserLabel.textContent = access.profile?.full_name || access.user.email;
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
  licensePill.textContent = account.role === "Administrador" ? "Administrador" : "Licencia activa";
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

function productionBackend() {
  return window.lexBackend?.enabled ? window.lexBackend : null;
}

function backendAccessLocked() {
  return Boolean(window.lexBackend?.locked);
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
  const partA = codeFromParty(values.parteA, roles[0]?.label || "Parte A");
  const partB = codeFromParty(values.parteB, roles[1]?.label || "Parte B");
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
    folio: lock ? ensureMatterFolio() : previewMatterFolio(),
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
  const folio = previewMatterFolio();
  matterFolio.textContent = folio;
  const values = getPartyData();
  const required = requiredFieldsForActiveTemplate();
  const completed = required.filter(([name]) => String(values[name] || "").trim()).length;
  const events = matterHistoryEvents.map((event) => event.label).join(" ");
  const contractFiles = [
    "Contrato editable",
    events.includes("Word") ? "Contrato exportado Word" : "Word pendiente",
    events.includes("firma") || events.includes("Firma") ? "Contrato enviado a firma" : "Firma pendiente",
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
  return Object.fromEntries(new FormData(partyForm).entries());
}

function fillPlaceholders(text) {
  const values = getPartyData();
  return text.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] || `{{${key}}}`);
}

function getRoles(key = activeTemplate) {
  const [labelA, labelB] = roleLabels[key] || ["Parte A", "Parte B"];
  return [
    { side: "A", label: labelA, part: "parteA" },
    { side: "B", label: labelB, part: "parteB" }
  ];
}

function fieldsForRole(role) {
  const side = role.side;
  const isA = side === "A";
  const domicileField = isA ? "domicilioPrestador" : "domicilioCliente";
  const fields = [
    [`parte${side}`, `Razón social o nombre de ${role.label}`],
    [`tipo${side}`, `Tipo societario de ${role.label}`],
    [`rep${side}`, `Representante legal de ${role.label}`],
    [`rfc${side}`, `RFC de ${role.label}`],
    [`escritura${side}`, `Escritura constitutiva de ${role.label}`],
    [`folio${side}`, `Folio mercantil de ${role.label}`],
    [`fechaConstitucion${side}`, `Fecha de constitución de ${role.label}`],
    [`poder${side}`, `Escritura o instrumento de poderes de ${role.label}`],
    [`notario${side}`, `Notario de poderes de ${role.label}`],
    [domicileField, `Domicilio de ${role.label}`]
  ];
  const names = fieldNamesInText(editor?.value || templates[activeTemplate]?.body || "");
  return fields.filter(([name]) => names.has(name));
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
  if (side && clean.includes("ESCRITURA CONSTITUTIVA")) return `escritura${side}`;
  if (side && clean.includes("FECHA DE CONSTITUCION")) return `fechaConstitucion${side}`;
  if (side && clean.includes("FOLIO MERCANTIL")) return `folio${side}`;
  if (side && clean.includes("ESCRITURA DE PODER")) return `poder${side}`;
  if (side && clean.includes("NOTARIO DE PODER")) return `notario${side}`;
  if (side && clean.includes("CORREO")) return side === "A" ? "correoPrestador" : "correoCliente";
  if (clean.includes("IMPORTE EN NUMERO")) return "importeNumero";
  if (clean.includes("IMPORTE EN LETRA")) return "importeLetra";
  if (clean === "DIA") return "diaFirma";
  if (clean === "MES") return "mesFirma";
  if (clean === "ANO") return "anioFirma";

  return toCamelCase(label);
}

function fieldNamesInText(text) {
  return new Set(Array.from(text.matchAll(/\{\{(\w+)\}\}/g)).map((match) => match[1]));
}

function prepareTemplateFields(body, existingFields = []) {
  const fieldMap = new Map(existingFields.map((field) => [field.name, field]));
  let preparedBody = body.replace(/\[([^\]]{1,100})\]/g, (match, rawLabel) => {
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

function renderTemplates() {
  const query = templateSearch.value.trim().toLowerCase();
  const filtered = Object.entries(templates).filter(([, template]) => {
    if (!template.master) return false;
    const haystack = `${template.title} ${template.description} ${template.category}`.toLowerCase();
    return haystack.includes(query);
  });

  templateGrid.innerHTML = filtered
    .map(([key, template]) => `
      <article class="template-card ${key === activeTemplate ? "selected" : ""}" data-template="${key}">
        <h2>${template.title}</h2>
        <p>${template.category} · ${template.fields} campos</p>
        <footer>
          <span>Plantilla base</span>
          <button class="ghost-button clone-template" type="button">Duplicar plantilla</button>
        </footer>
      </article>
    `)
    .join("");

  templateCount.textContent = `${Object.values(templates).filter((template) => template.master).length} machotes`;
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
  if (activeLanguage === "en") return template.bodyEn || buildEnglishTemplate(template);
  const body = template.body || "";
  if (template.master || body.includes("CLÁUSULAS DE PROTECCIÓN REFORZADA") || body.includes("DÉCIMA")) return body;
  return `${body}${commonProtectionsEs}`;
}

function createWorkingCopy(sourceKey, customBody) {
  const source = templates[sourceKey];
  if (!source) {
    showToast("Primero selecciona un machote.");
    return;
  }
  const key = `work-${Date.now()}`;
  const body = customBody || bodyForTemplate(sourceKey);
  const prepared = prepareTemplateFields(body, source.customFields || []);
  templates[key] = {
    ...source,
    title: `${source.title} - copia de trabajo`,
    description: "Copia editable. La plantilla base queda protegida.",
    body: prepared.body,
    fields: prepared.fields.length,
    customFields: prepared.fields,
    master: false,
    sourceMaster: sourceKey
  };
  loadTemplate(key);
  editor.readOnly = false;
  addMatterEvent("Copia editable creada");
  showToast("Copia creada. Ahora puedes editar sin tocar la plantilla base.");
}

function renderVersions() {
  const visible = versions.filter((version) => version.folder === activeFolder).slice(-8).reverse();
  versionList.innerHTML = visible.length
    ? visible
        .map((version) => `
          <button class="saved-contract" type="button" data-version-id="${version.id}">
            <strong>${version.title}</strong>
            <span>${version.matter?.folio || "Sin folio"} · ${version.language.toUpperCase()} · ${version.date}</span>
          </button>
        `)
        .join("")
    : `<span>Las versiones se guardan solas mientras redactas.</span>`;
}

function autoSaveVersion(reason = "auto") {
  const body = editor.value.trim();
  if (!body) return;
  const matter = matterSnapshot(reason === "manual" ? "Versión manual" : "Autosave", false);

  const last = versions[versions.length - 1];
  if (last && last.template === activeTemplate && last.body === body && last.folder === activeFolder && last.matter?.folio === matter.folio) {
    autosaveStatus.textContent = "Guardado";
    autosaveStatus.classList.add("autosave-highlight");
    return;
  }

  versions.push({
    id: Date.now().toString(),
    title: `${templates[activeTemplate]?.title || editorTitle.textContent} · ${reason === "manual" ? "versión manual" : "autosave"}`,
    folder: activeFolder,
    template: activeTemplate,
    language: activeLanguage,
    date: new Date().toLocaleString("es-MX"),
    body,
    matter
  });
  versions = versions.slice(-60);
  saveVersions();
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
  if (!isWorkingCopy) {
    autosaveStatus.textContent = "Plantilla protegida";
    autosaveStatus.classList.remove("autosave-highlight");
    return;
  }
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
  isWorkingCopy = !templates[key]?.master;
  const template = templates[key];
  editorTitle.textContent = template.title;
  selectedCategory.textContent = template.category;
  selectedDescription.textContent = template.description;
  editor.value = bodyForTemplate(key);
  editor.readOnly = !isWorkingCopy;
  autosaveStatus.textContent = isWorkingCopy ? "Copia de trabajo" : "Plantilla protegida";
  renameTemplateButton.textContent = isWorkingCopy ? "Renombrar copia" : "Nombre protegido";
  renameTemplateButton.title = isWorkingCopy ? "Cambiar nombre de esta copia de trabajo" : "Las plantillas base se protegen; duplica para renombrar una copia.";
  autosaveStatus.classList.remove("autosave-highlight");
  sourceTextsBySide = { A: [], B: [] };
  activeMatterFolio = null;
  matterHistoryEvents = [];
  renderTemplates();
  renderDynamicFields();
  renderCustomFields();
  renderRoleDrops();
  renderRequirements();
  renderMatterPanel();
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return map[character];
  });
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
  editor.style.fontFamily = `"${legalFormat.font}", ${legalFormat.font === "Times New Roman" ? "Times, serif" : "sans-serif"}`;
  editor.style.fontSize = `${legalFormat.size}pt`;
  editor.style.lineHeight = legalFormat.lineHeight;
  editor.style.textAlign = legalFormat.justify ? "justify" : "left";
}

function applyDefaultLegalFormat() {
  legalFormat = {
    font: "Times New Roman",
    size: "12",
    margin: "54pt",
    lineHeight: "1.5",
    justify: true
  };
  saveLegalFormat();
  syncFormatControls();
  showToast("Formato legal aplicado: Times New Roman 12, margen moderado e interlineado 1.5.");
}

function formattedContractHtml(text) {
  const paragraphs = text.split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean);
  return paragraphs
    .map((paragraph, index) => {
      const escaped = escapeHtml(paragraph).replace(/\n/g, "<br>");
      const plain = removeAccents(paragraph).toUpperCase();
      const isShortHeading = paragraph.length < 95 && /^[A-ZÁÉÍÓÚÑ0-9 .,:;()/"“”_-]+$/.test(paragraph);
      const isMainTitle = index === 0;
      const isSectionHeading = isShortHeading || /^(DECLARACIONES|CLAUSULAS|ANEXO|RECITALES|RECITALS|CLAUSES|SCHEDULE|EXHIBIT)\b/.test(plain);
      if (isMainTitle) return `<h1>${escaped}</h1>`;
      if (isSectionHeading) return `<h2>${escaped}</h2>`;

      const clausePattern = /^((?:PRIMERA|SEGUNDA|TERCERA|CUARTA|QUINTA|SEXTA|SÉPTIMA|SEPTIMA|OCTAVA|NOVENA|DÉCIMA|DECIMA|VIGÉSIMA|VIGESIMA|FIRST|SECOND|THIRD|FOURTH|FIFTH|SIXTH|SEVENTH|EIGHTH|NINTH|TENTH)[^.<\n]{0,90}\.)/i;
      const withBoldClause = escaped.replace(clausePattern, "<strong>$1</strong>");
      return `<p>${withBoldClause}</p>`;
    })
    .join("");
}

function exportWordDocument() {
  const title = cleanWorkingTitle(editorTitle.textContent);
  const folio = ensureMatterFolio();
  const missing = missingFieldsForActiveTemplate();
  if (missing.length) {
    const list = missing.slice(0, 12).map(([, label]) => `- ${label}`).join("\n");
    const extra = missing.length > 12 ? `\n- ${missing.length - 12} dato${missing.length - 12 === 1 ? "" : "s"} más` : "";
    const proceed = window.confirm(`Antes de exportar faltan estos datos generales:\n\n${list}${extra}\n\n¿Quieres exportar de todos modos?`);
    if (!proceed) {
      showToast("Exportación detenida para completar datos de partes.");
      return;
    }
  }
  readFormatControls();
  const documentBody = formattedContractHtml(editor.value);
  const html = `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <style>
        @page { margin: ${legalFormat.margin}; }
        body { font-family: "${legalFormat.font}", serif; color: #111827; line-height: ${legalFormat.lineHeight}; margin: 0; font-size: ${legalFormat.size}pt; }
        h1 { font-size: ${Number(legalFormat.size) + 2}pt; text-align: center; font-weight: 700; margin: 0 0 24pt; text-transform: uppercase; }
        h2 { font-size: ${legalFormat.size}pt; text-align: justify; font-weight: 700; margin: 18pt 0 10pt; text-transform: uppercase; }
        p { margin: 0 0 10pt; text-align: justify; }
        strong { font-weight: 700; }
      </style>
    </head>
    <body>${documentBody || `<h1>${escapeHtml(title)}</h1>`}</body>
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

function signerRowTemplate(index, values = {}) {
  return `
    <div class="signer-row" data-signer-row>
      <label>Nombre<input name="signerName" value="${values.name || ""}" required /></label>
      <label>Correo<input name="signerEmail" type="email" value="${values.email || ""}" required /></label>
      <label>Rol<input name="signerRole" value="${values.role || ""}" required /></label>
      <label>Orden<input name="signerOrder" type="number" min="1" value="${values.order || index + 1}" /></label>
      <button class="icon-button remove-signer" type="button" title="Quitar firmante" aria-label="Quitar firmante">×</button>
    </div>
  `;
}

function defaultSigners() {
  const values = getPartyData();
  return getRoles().map((role, index) => ({
    name: values[role.side === "A" ? "repA" : "repB"] || "",
    email: values[role.side === "A" ? "correoPrestador" : "correoCliente"] || "",
    role: role.label,
    order: index + 1
  }));
}

function renderSignatureRows(signers = defaultSigners()) {
  signerList.innerHTML = signers.map((signer, index) => signerRowTemplate(index, signer)).join("");
}

function getSignatureRequestSigners() {
  return Array.from(signerList.querySelectorAll("[data-signer-row]")).map((row, index) => ({
    name: row.querySelector('[name="signerName"]').value.trim(),
    email: row.querySelector('[name="signerEmail"]').value.trim(),
    role: row.querySelector('[name="signerRole"]').value.trim(),
    order: Number(row.querySelector('[name="signerOrder"]').value || index + 1)
  }));
}

function dropboxSignConfigurationStatus() {
  return {
    configured: false,
    label: "Integración de firma electrónica en configuración"
  };
}

function prepareSignaturePacket() {
  if (!isWorkingCopy) {
    showToast("Primero duplica la plantilla base para preparar un contrato de firma.");
    return;
  }
  renderSignatureRows();
  signatureDialog.showModal();
}

async function submitSignaturePacket(event) {
  event.preventDefault();
  const title = cleanWorkingTitle(editorTitle.textContent);
  const signers = getSignatureRequestSigners();
  if (signers.some((signer) => !signer.name || !signer.email || !signer.role)) {
    showToast("Completa nombre, correo y rol de cada firmante.");
    return;
  }
  ensureMatterFolio();
  let sendResult = null;
  let status = "Pendiente de envío";
  let signatureState = "pending_configuration";

  try {
    const response = await fetch("/api/send-signature", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title,
        folio: previewMatterFolio(),
        body: fillPlaceholders(editor.value),
        signers
      })
    });
    if (response.ok) {
      sendResult = await response.json();
      status = sendResult.testMode ? "Enviado a firma en modo prueba" : "Enviado a firma";
      signatureState = sendResult.testMode ? "sent_test" : "sent";
    } else if (response.status !== 503) {
      const data = await response.json().catch(() => ({}));
      showToast(data.error || "No se pudo enviar a firma. El paquete quedará guardado.");
    }
  } catch (error) {
    console.warn("LexContratos firma no disponible", error);
  }

  const eventLabel = sendResult ? "Contrato enviado a firma electrónica" : "Contrato preparado para firma";
  addMatterEvent(eventLabel);
  savedContracts.push({
    id: Date.now().toString(),
    title: `${previewMatterFolio()} · ${status} · ${title}`,
    folder: activeFolder,
    template: activeTemplate,
    language: activeLanguage,
    date: new Date().toLocaleString("es-MX"),
    body: fillPlaceholders(editor.value),
    status,
    signatureProvider: "Firma electrónica",
    signatureState,
    signatureRequestId: sendResult?.signatureRequestId || "",
    signatureDetailsUrl: sendResult?.detailsUrl || "",
    signers,
    matter: matterSnapshot(status, true)
  });
  saveSavedContracts();
  renderSavedContracts();
  autoSaveVersion("manual");
  signatureDialog.close();
  showToast(sendResult ? "Contrato enviado a firma electrónica." : "Paquete de firma guardado. La integración se activará cuando esté configurada.");
}

function buildLocalCriticalReview(mode) {
  const body = editor.value || "";
  const missingFields = missingFieldsForActiveTemplate().map(([, label]) => label);
  const findings = [];

  if (!body.trim()) {
    findings.push({
      severity: "Alta",
      section: "Documento",
      observation: "No hay contrato cargado para revisar.",
      recommendation: "Selecciona o importa un machote, crea una copia editable y vuelve a ejecutar la revisión."
    });
  }
  if (missingFields.length) {
    findings.push({
      severity: "Alta",
      section: "Datos de partes",
      observation: `Faltan datos por completar: ${missingFields.slice(0, 8).join(", ")}${missingFields.length > 8 ? "..." : ""}.`,
      recommendation: "Carga documentos adicionales por cada parte o captura manualmente los campos antes de exportar o enviar a firma."
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

async function runCriticalReview(mode) {
  if (!isWorkingCopy || !editor.value.trim()) {
    showToast("Primero carga o duplica una plantilla para revisar un contrato editable.");
    return;
  }

  pendingCriticalReviewBody = "";
  applyCriticalReviewButton.classList.add("is-hidden");
  criticalReviewOutput.textContent = mode === "propose" ? "Revisando contrato y preparando ajustes sugeridos..." : "Revisando contrato...";

  try {
    const response = await fetch("/api/review-contract", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: cleanWorkingTitle(editorTitle.textContent),
        mode,
        contract: editor.value,
        missingFields: missingFieldsForActiveTemplate().map(([name, label]) => ({ name, label })),
        partyData: getPartyData()
      })
    });
    if (!response.ok) throw new Error("critical review unavailable");
    const result = await response.json();
    pendingCriticalReviewBody = mode === "propose" && result.revisedBody ? result.revisedBody : "";
    criticalReviewOutput.textContent = formatCriticalReview(result);
    applyCriticalReviewButton.classList.toggle("is-hidden", !pendingCriticalReviewBody);
  } catch (error) {
    const result = buildLocalCriticalReview(mode);
    criticalReviewOutput.textContent = `${formatCriticalReview(result)}\n\nLa revisión avanzada estará disponible cuando la IA documental esté activa.`;
  }
}

function applyCriticalReviewSuggestion() {
  if (!pendingCriticalReviewBody) return;
  editor.value = pendingCriticalReviewBody;
  pendingCriticalReviewBody = "";
  applyCriticalReviewButton.classList.add("is-hidden");
  autoSaveVersion("manual");
  addMatterEvent("Ajustes sugeridos por revisión crítica integrados");
  criticalReviewDialog.close();
  showToast("Cambios sugeridos integrados. Revisa el contrato antes de exportar o firmar.");
}

function renameActiveTemplate() {
  const current = templates[activeTemplate];
  if (!current) return;
  if (current.master) {
    showToast("Las plantillas base no se renombran directo. Duplica el machote y renombra la copia.");
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
  autoSaveVersion("manual");
  showToast("Copia renombrada. La plantilla base original sigue intacta.");
}

function reviewEditableFieldsFromContract() {
  const template = templates[activeTemplate];
  if (!template) return;
  if (!isWorkingCopy) {
    showToast("La plantilla base está protegida. Duplica el machote para revisar o ajustar campos.");
    return;
  }
  const prepared = prepareTemplateFields(editor.value, template.customFields || []);
  editor.value = prepared.body;
  template.body = prepared.body;
  template.customFields = prepared.fields;
  template.fields = prepared.fields.length;
  if (template.master) saveMasterTemplates();
  renderTemplates();
  renderDynamicFields();
  renderCustomFields();
  renderRequirements();
  showToast(`Campos revisados: ${prepared.fields.length} campo${prepared.fields.length === 1 ? "" : "s"} editable${prepared.fields.length === 1 ? "" : "s"} en este machote.`);
}

function clearGeneralData(event) {
  if (event) event.preventDefault();
  partyForm.querySelectorAll("input, textarea, select").forEach((field) => {
    field.value = "";
    field.setAttribute("value", "");
  });
  sourceTextsBySide = { A: [], B: [] };
  renderDynamicFields();
  renderCustomFields();
  renderRoleDrops();
  renderRequirements();
  autosaveStatus.textContent = "Datos de partes borrados";
  autosaveStatus.classList.remove("autosave-highlight");
  showToast("Datos de partes borrados. Puedes cargar documentos nuevos por cada parte.");
}

function renderDynamicFields() {
  const values = getPartyData();
  dynamicFields.innerHTML = getRoles()
    .map((role) => `
      <div class="field-group-title">
        <p class="eyebrow">${role.label}</p>
        <strong>Datos de ${values[role.part] || role.label}</strong>
      </div>
      ${fieldsForRole(role)
        .map(([name, label]) => `<label>${label}<input name="${name}" value="${values[name] || ""}" /></label>`)
        .join("")}
    `)
    .join("");
}

function renderCustomFields() {
  const dynamicNames = new Set(getRoles().flatMap((role) => fieldsForRole(role).map(([name]) => name)));
  const fields = (templates[activeTemplate]?.customFields || []).filter((field) => !dynamicNames.has(field.name));
  const values = getPartyData();
  customFields.innerHTML = "";
  if (!fields.length) return;

  customFields.innerHTML = `
    <div class="field-group-title">
      <p class="eyebrow">Campos propios</p>
      <strong>${templates[activeTemplate].title}</strong>
    </div>
    ${fields.map((field) => `<label>${field.label}<input name="${field.name}" value="${values[field.name] || ""}" /></label>`).join("")}
  `;
}

function renderRoleDrops() {
  const values = getPartyData();
  roleDropGrid.innerHTML = getRoles()
    .map((role) => {
      const files = sourceTextsBySide[role.side] || [];
      return `
        <section class="role-drop" data-side="${role.side}">
          <header>
            <div>
              <p class="eyebrow">${role.label}</p>
              <h3>${values[role.part] || role.label}</h3>
            </div>
            <span>${files.length} archivo${files.length === 1 ? "" : "s"}</span>
          </header>
          <label>
            <input class="role-file-input" type="file" multiple accept=".csv,.txt,.eml,.pdf,.xlsx,.xls,.docx,.jpg,.jpeg,.png,.webp" data-side="${role.side}" />
            <strong>Sube documentos corporativos, constancias fiscales e identificaciones por cada parte.</strong>
            <small>Esta caja corresponde a ${role.label}. También puedes capturar los datos manualmente.</small>
          </label>
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
}

function renderFolderSelector() {
  if (!contractFolderSelect) return;
  const sorted = folders.slice().sort((a, b) => a.localeCompare(b, "es"));
  contractFolderSelect.innerHTML = sorted.map((folder) => `<option value="${folder}">${folder}</option>`).join("");
  if (!sorted.includes(activeFolder)) activeFolder = sorted[0] || "Clientes";
  contractFolderSelect.value = activeFolder;
}

function renderFolders() {
  folders.sort((a, b) => a.localeCompare(b, "es"));
  folderList.innerHTML = folders
    .map((folder) => {
      const depth = Math.min(folder.split("/").length - 1, 3);
      const label = folder.split("/").pop();
      return `<button class="folder-item folder-depth-${depth} ${folder === activeFolder ? "active" : ""}" type="button" data-folder="${folder}" title="${folder}">${label}</button>`;
    })
    .join("");
  renderFolderSelector();
}

function renderSavedContracts() {
  const visible = savedContracts.filter((contract) => contract.folder === activeFolder);
  savedContractsList.innerHTML = visible.length
    ? visible
        .slice()
        .reverse()
        .map((contract) => `
          <button class="saved-contract" type="button" data-id="${contract.id}">
            <strong>${contract.title}</strong>
            <span>${contract.status || contract.language.toUpperCase()} · ${contract.date}</span>
          </button>
        `)
        .join("")
    : `<span>Aquí aparecerán los contratos creados en ${activeFolder}.</span>`;
}

function inferDataFromText(text, side) {
  const cleanText = text.replace(/\s+/g, " ");
  const updates = {};
  const rfcs = cleanText.match(/\b[A-Z&Ñ]{3,4}\d{6}[A-Z0-9]{3}\b/gi) || [];
  const companies = cleanText.match(/[A-ZÁÉÍÓÚÑ][\wÁÉÍÓÚÑ&.,\s-]{3,90}S\.?\s*(?:A\.?|DE|C\.?V\.?|R\.?L\.?)[\wÁÉÍÓÚÑ&.,\s-]{0,45}/gi) || [];
  const escrituras = cleanText.match(/(?:escritura|instrumento)\s+(?:pública\s+)?(?:número\s+)?[\w,.-]+/gi) || [];
  const folios = cleanText.match(/folio\s+mercantil\s+(?:electrónico\s+)?[\w-]+/gi) || [];
  const notarios = cleanText.match(/notari[oa]\s+públic[oa]\s+(?:número\s+)?[\w\s,.#-]{3,70}/gi) || [];
  const reps = cleanText.match(/(?:representad[ao]\s+por|representante\s+legal)\s+([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑ\s.]{6,70})/g) || [];
  const dates = cleanText.match(/\b\d{1,2}\s+de\s+[a-záéíóúñ]+\s+de\s+\d{4}\b/gi) || [];
  const domicile = cleanText.match(/domicilio(?:\s+fiscal)?(?:\s+en)?\s+([A-ZÁÉÍÓÚÑ0-9][\wÁÉÍÓÚÑ\s.,#-]{12,120})/i);

  if (companies[0]) updates[`parte${side}`] = companies[0].trim();
  if (rfcs[0]) updates[`rfc${side}`] = rfcs[0].toUpperCase();
  if (escrituras[0]) updates[`escritura${side}`] = escrituras[0].trim();
  if (folios[0]) updates[`folio${side}`] = folios[0].replace(/folio mercantil electrónico?/i, "").trim();
  if (notarios[0]) updates[`notario${side}`] = notarios[0].trim();
  if (dates[0]) updates[`fechaConstitucion${side}`] = dates[0].trim();
  if (reps[0]) updates[`rep${side}`] = reps[0].replace(/representad[ao]\s+por|representante\s+legal/i, "").trim();
  if (domicile) updates[side === "A" ? "domicilioPrestador" : "domicilioCliente"] = domicile[1].trim();

  return updates;
}

function applyDetectedData(updates) {
  Object.entries(updates).forEach(([name, value]) => {
    const input = partyForm.elements[name];
    if (input && value) input.value = value;
  });
  renderRoleDrops();
  renderRequirements();
  renderMatterPanel();
}

function normalizeExtractionValues(result) {
  const source = result?.values || result?.fields || result || {};
  const updates = {};
  Object.entries(source).forEach(([name, payload]) => {
    const value = typeof payload === "string" ? payload : payload?.value;
    if (partyForm.elements[name] && String(value || "").trim()) {
      updates[name] = String(value).trim();
    }
  });
  return updates;
}

async function extractRoleDataWithAi(role) {
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

templateGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".template-card");
  if (!card) return;
  if (event.target.closest(".clone-template")) {
    loadTemplate(card.dataset.template);
    createWorkingCopy(card.dataset.template);
    if (templatePicker.open) templatePicker.close();
    return;
  }
  loadTemplate(card.dataset.template);
  if (templatePicker.open) templatePicker.close();
});

roleDropGrid.addEventListener("change", async (event) => {
  if (!event.target.classList.contains("role-file-input")) return;
  if (!isWorkingCopy) {
    event.target.value = "";
    showToast("Primero duplica la plantilla base. Los documentos de partes se cargan en una copia de trabajo.");
    return;
  }
  const side = event.target.dataset.side;
  const files = Array.from(event.target.files);
  sourceTextsBySide[side] = [];

  for (const file of files) {
    const entry = { name: file.name, size: `${Math.ceil(file.size / 1024)} KB`, type: classifySupportDocument(file.name), text: "", file };
    if (/\.(txt|csv|eml)$/i.test(file.name)) entry.text = await file.text();
    sourceTextsBySide[side].push(entry);
  }

  const backend = productionBackend();
  if (backend) {
    const role = getRoles().find((item) => item.side === side);
    backend
      .uploadSupportDocuments({
        folio: previewMatterFolio(),
        roleLabel: role?.label || "parte",
        files
      })
      .catch((error) => reportBackendError("subir documentos", error));
  }

  renderRoleDrops();
  renderMatterPanel();
  addMatterEvent(`Documentos soporte cargados para ${getRoles().find((role) => role.side === side)?.label || "parte"}`);
  showToast("Documentos cargados en la parte correcta.");
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
      showToast(activeLanguage === "en" ? "English mode selected. Choose a template to begin." : "Modo español seleccionado. Elige un machote para comenzar.");
      return;
    }
    editor.value = bodyForTemplate(activeTemplate);
    showToast(activeLanguage === "en" ? "English working draft loaded." : "Versión en español cargada.");
  });
});

templateSearch.addEventListener("input", renderTemplates);

openTemplatePicker.addEventListener("click", () => {
  templateSearch.value = "";
  renderTemplates();
  templatePicker.showModal();
  templateSearch.focus();
});

document.querySelector("#toggle-archive").addEventListener("click", () => archiveDrawer.classList.add("open"));
document.querySelector("#close-archive").addEventListener("click", () => archiveDrawer.classList.remove("open"));
document.querySelector("#toggle-fields").addEventListener("click", () => assistantPane.classList.add("open"));
document.querySelector("#close-fields").addEventListener("click", () => assistantPane.classList.remove("open"));
openUserGuide.addEventListener("click", () => userGuideDialog.showModal());

document.querySelector("#fill-contract").addEventListener("click", () => {
  if (!isWorkingCopy) {
    showToast("Primero duplica la plantilla base para completar el contrato.");
    return;
  }
  editor.value = fillPlaceholders(editor.value);
  autoSaveVersion("manual");
  showToast("Contrato completado con los datos de cada parte.");
});

document.querySelector("#export-word").addEventListener("click", exportWordDocument);

document.querySelector("#send-signature").addEventListener("click", prepareSignaturePacket);

document.querySelector("#critical-review")?.addEventListener("click", () => {
  criticalReviewDialog.showModal();
  criticalReviewOutput.textContent = "Elige si quieres solo observaciones o una propuesta de ajustes para integrar después de revisar.";
  pendingCriticalReviewBody = "";
  applyCriticalReviewButton.classList.add("is-hidden");
});

document.querySelector("#critical-observations")?.addEventListener("click", () => runCriticalReview("observations"));
document.querySelector("#critical-suggest")?.addEventListener("click", () => runCriticalReview("propose"));
applyCriticalReviewButton?.addEventListener("click", applyCriticalReviewSuggestion);

document.querySelector("#copy-contract").addEventListener("click", async () => {
  await navigator.clipboard.writeText(editor.value);
  showToast("Contrato copiado al portapapeles.");
});

document.querySelector("#review-fields").addEventListener("click", reviewEditableFieldsFromContract);

document.querySelector("#replicate-template").addEventListener("click", () => {
  createWorkingCopy(activeSourceMaster || activeTemplate, editor.value);
});

document.querySelector("#rename-template").addEventListener("click", renameActiveTemplate);

document.querySelector("#clear-generales").addEventListener("click", clearGeneralData);

contractFolderSelect.addEventListener("change", () => {
  activeFolder = contractFolderSelect.value;
  renderFolders();
  renderSavedContracts();
  renderVersions();
  showToast(`Este contrato se guardará en ${activeFolder}.`);
});

quickFolderButton.addEventListener("click", () => {
  const value = window.prompt("Nueva carpeta para este contrato. Ejemplo: Clientes/Cliente Alfa/Servicios 2026", activeFolder.includes("/") ? activeFolder : `${activeFolder}/`);
  if (!value || !value.trim()) return;
  const parts = value
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
  if (!parts.length) return;

  let path = "";
  parts.forEach((part) => {
    path = path ? `${path}/${part}` : part;
    if (!folders.includes(path)) folders.push(path);
  });

  activeFolder = path;
  saveFolders();
  renderFolders();
  renderSavedContracts();
  renderVersions();
  showToast(`Este contrato se guardará en ${activeFolder}.`);
});

switchUserButton.addEventListener("click", () => {
  signOut();
});

document.querySelector("#login-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.querySelector("#login-email").value.trim().toLowerCase();
  const password = document.querySelector("#login-password").value;
  const backend = productionBackend();
  setAuthMessage("");
  if (backend) {
    if (!email.includes("@")) {
      setAuthMessage("Usa el correo completo asociado a tu cuenta.", "error");
      return;
    }
    try {
      await backend.signIn(email, password);
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
  saveSession(email);
  renderAccessState();
});

document.querySelector("#demo-login")?.addEventListener("click", () => {
  if (productionBackend() || backendAccessLocked()) {
    showToast("El acceso de prueba no está disponible en este espacio.");
    return;
  }
  loadUsers();
  saveSession(demoAccount.email);
  renderAccessState();
  showToast("Entraste con una cuenta interna de prueba.");
});

document.querySelector("#register-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const backend = productionBackend();
  if (backend) {
    try {
      await backend.signUp(
        document.querySelector("#register-email").value.trim(),
        document.querySelector("#register-password").value,
        document.querySelector("#register-name").value.trim()
      );
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
  const email = document.querySelector("#register-email").value.trim();
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
  saveSession(email);
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
    showToast("Tu solicitud de activación será revisada por el administrador.");
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

document.querySelector("#add-signer").addEventListener("click", () => {
  signerList.insertAdjacentHTML("beforeend", signerRowTemplate(signerList.querySelectorAll("[data-signer-row]").length));
});

signerList.addEventListener("click", (event) => {
  const button = event.target.closest(".remove-signer");
  if (!button) return;
  const rows = signerList.querySelectorAll("[data-signer-row]");
  if (rows.length <= 1) {
    showToast("Debe quedar al menos un firmante.");
    return;
  }
  button.closest("[data-signer-row]").remove();
});

signatureForm.addEventListener("submit", submitSignaturePacket);

document.querySelector("#save-contract").addEventListener("click", () => {
  if (!isWorkingCopy) {
    showToast("Primero duplica la plantilla base para crear un contrato.");
    return;
  }
  const filled = fillPlaceholders(editor.value);
  editor.value = filled;
  const folio = ensureMatterFolio();
  addMatterEvent("Contrato creado");
  const title = `${cleanWorkingTitle(templates[activeTemplate].title)} · ${new Date().toLocaleDateString("es-MX")}`;
  savedContracts.push({
    id: Date.now().toString(),
    title: `${folio} · ${title}`,
    folder: activeFolder,
    template: activeTemplate,
    language: activeLanguage,
    date: new Date().toLocaleString("es-MX"),
    body: filled,
    folio,
    matter: matterSnapshot("Contrato creado", true)
  });
  saveSavedContracts();
  renderSavedContracts();
  autoSaveVersion("manual");
  showToast(`Contrato creado en la carpeta ${activeFolder}.`);
});

document.querySelector("#save-version").addEventListener("click", () => {
  if (!isWorkingCopy) {
    showToast("No se trabaja directo sobre plantillas base. Duplica, ajusta la copia y luego reemplaza la plantilla base.");
    return;
  }
  const key = activeSourceMaster || activeTemplate || `custom-${Date.now()}`;
  const targetTitle = cleanWorkingTitle((templates[key] || templates[activeTemplate] || {}).title || editorTitle.textContent);
  const confirmed = window.confirm(`Vas a reemplazar la plantilla base "${targetTitle}" con esta copia de trabajo.\n\nLa plantilla base anterior quedará reemplazada para tu biblioteca. ¿Estás segura de continuar?`);
  if (!confirmed) {
    showToast("Sustitución cancelada. La copia sigue editable.");
    return;
  }
  const prepared = prepareTemplateFields(editor.value, templates[activeTemplate]?.customFields || []);
  editor.value = prepared.body;
  templates[key] = {
    ...(templates[activeSourceMaster] || templates[activeTemplate] || {}),
    title: cleanWorkingTitle(editorTitle.textContent),
    category: templates[activeTemplate]?.category || "Operación",
    description: "Plantilla base validada por el despacho.",
    fields: prepared.fields.length,
    body: prepared.body,
    master: true,
    customFields: prepared.fields
  };
  activeTemplate = key;
  activeSourceMaster = key;
  isWorkingCopy = false;
  saveMasterTemplates();
  recordMasterImprovement(key, prepared);
  loadTemplate(key);
  renderVersions();
  showToast("Plantilla base reemplazada con confirmación. La mejora quedó registrada de forma anonimizada.");
});

document.querySelector("#new-template").addEventListener("click", () => {
  activeTemplate = `custom-${Date.now()}`;
  const body = "NOMBRE DEL CONTRATO\n\nQUE CELEBRAN {{parteA}} Y {{parteB}}...\n\nDECLARACIONES\n\nI. Personalidad de {{parteA}}.\n\nCLÁUSULAS\n\nPRIMERA.";
  const prepared = prepareTemplateFields(body, []);
  templates[activeTemplate] = {
    category: "Operación",
    title: "Nuevo machote",
    description: "Machote propio en construcción.",
    fields: prepared.fields.length,
    body: prepared.body,
    customFields: prepared.fields
  };
  loadTemplate(activeTemplate);
  showToast("Machote nuevo listo para redactar.");
});

document.querySelector("#extract-data").addEventListener("click", async () => {
  if (!isWorkingCopy) {
    showToast("Primero duplica la plantilla base. Después carga documentos de cada parte y revisa los datos.");
    return;
  }
  let detected = {};
  let aiWasTried = false;
  showToast("Extrayendo datos de cada parte. Revisa antes de completar el contrato.");
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
  applyDetectedData(detected);
  const missing = missingFieldsForActiveTemplate().length;
  if (Object.keys(detected).length) {
    addMatterEvent(`Datos extraídos y validados: ${Object.keys(detected).length}`);
    showToast(missing ? `Se extrajeron ${Object.keys(detected).length} datos para revisión. Faltan ${missing}: sube otro documento o llena el campo manualmente.` : "Datos de partes completos. Ya puedes completar el contrato.");
  } else {
    showToast(aiWasTried ? "La extracción documental no está disponible temporalmente. Puedes capturar o corregir los datos manualmente." : "Carga textos, correos o CSV por cada parte, o llena manualmente los campos faltantes.");
  }
});

templateImport.addEventListener("change", async () => {
  const [file] = Array.from(templateImport.files);
  if (!file) return;

  const addToMaster = window.confirm("¿Quieres guardar este contrato como machote del catálogo?\n\nAceptar: revisa campos, limpia marcadores y lo guarda como plantilla base.\nCancelar: solo lo abre como copia de trabajo para este contrato.");
  const keyPrefix = addToMaster ? "custom-master" : "work";
  activeTemplate = `custom-${Date.now()}`;
  activeTemplate = `${keyPrefix}-${Date.now()}`;

  templates[activeTemplate] = {
    category: "Operación",
    title: file.name.replace(/\.[^.]+$/, ""),
    description: addToMaster ? "Machote importado, revisado y guardado como plantilla base." : "Contrato importado como copia de trabajo temporal.",
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
    showToast(addToMaster ? `Machote guardado con ${prepared.fields.length} campo${prepared.fields.length === 1 ? "" : "s"} limpio${prepared.fields.length === 1 ? "" : "s"}. Duplica la plantilla para trabajarlo.` : `Copia de trabajo importada con ${prepared.fields.length} campo${prepared.fields.length === 1 ? "" : "s"} editable${prepared.fields.length === 1 ? "" : "s"}.`);
  } else {
    templates[activeTemplate].body = `MACHOTE IMPORTADO: ${file.name}\n\nEn la versión completa, LexContratos extraería el texto de PDF o Word, conservaría su estructura y detectaría campos rellenables para cada parte.`;
    showToast(addToMaster ? "Machote creado. PDF y Word requieren extracción documental en backend para limpiar campos con precisión." : "Contrato abierto como trabajo temporal. PDF y Word requieren extracción documental en backend.");
  }

  if (addToMaster) saveMasterTemplates();
  loadTemplate(activeTemplate);
  templateImport.value = "";
});

folderList.addEventListener("click", (event) => {
  const button = event.target.closest(".folder-item");
  if (!button) return;
  activeFolder = button.dataset.folder;
  renderFolders();
  renderSavedContracts();
  renderVersions();
  showToast(`Este contrato se guardará en ${activeFolder}.`);
});

document.querySelector("#create-folder").addEventListener("click", () => {
  const root = folderRoot.value || "Clientes";
  const parts = folderName.value
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
  if (!parts.length) return;

  if (parts[0]?.toLowerCase() === root.toLowerCase()) parts.shift();
  if (!folders.includes(root)) folders.push(root);

  let path = root;
  parts.forEach((part) => {
    path = path ? `${path}/${part}` : part;
    if (!folders.includes(path)) folders.push(path);
  });

  activeFolder = path;
  folderName.value = "";
  saveFolders();
  renderFolders();
  renderSavedContracts();
  renderVersions();
  showToast(`Carpeta ${activeFolder} lista para archivar contratos.`);
});

savedContractsList.addEventListener("click", (event) => {
  const button = event.target.closest(".saved-contract");
  if (!button) return;
  const contract = savedContracts.find((item) => item.id === button.dataset.id);
  if (!contract) return;
  activeFolder = contract.folder || activeFolder;
  activeTemplate = contract.template || activeTemplate;
  editorTitle.textContent = contract.title;
  editor.value = contract.body;
  activeLanguage = contract.language;
  if (contract.matter) {
    activeMatterFolio = contract.matter.folio;
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
  showToast("Contrato archivado abierto en el editor.");
});

versionList.addEventListener("click", (event) => {
  const button = event.target.closest(".saved-contract");
  if (!button) return;
  const version = versions.find((item) => item.id === button.dataset.versionId);
  if (!version) return;
  editorTitle.textContent = version.title;
  editor.value = version.body;
  activeLanguage = version.language;
  if (version.matter) {
    activeMatterFolio = version.matter.folio;
    matterHistoryEvents = version.matter.history || matterHistoryEvents;
    renderMatterPanel();
  }
  autosaveStatus.textContent = "Versión abierta";
  autosaveStatus.classList.add("autosave-highlight");
  showToast("Versión guardada abierta en el editor.");
});

partyForm.addEventListener("input", () => {
  renderRoleDrops();
  renderRequirements();
  if (!activeMatterFolio) renderMatterPanel();
});

editor.addEventListener("input", scheduleAutoSave);

[formatFont, formatSize, formatMargin, formatLineHeight, formatJustify].forEach((control) => {
  control.addEventListener("change", readFormatControls);
});

document.querySelector("#apply-legal-format").addEventListener("click", applyDefaultLegalFormat);

window.addEventListener("lexbackendready", () => {
  renderAccessState();
});

renderUserSession();
renderMasterInsights();
syncFormatControls();
renderFolders();
renderSavedContracts();
renderVersions();
renderTemplates();
clearWorkspaceState();
renderAccessState();
