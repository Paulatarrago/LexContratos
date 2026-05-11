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
  work_order: ["Parte A", "Parte B"]
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
const savedContractsList = document.querySelector("#saved-contracts");
const versionList = document.querySelector("#version-list");
const autosaveStatus = document.querySelector("#autosave-status");
const formatFont = document.querySelector("#format-font");
const formatSize = document.querySelector("#format-size");
const formatMargin = document.querySelector("#format-margin");
const formatLineHeight = document.querySelector("#format-line-height");
const formatJustify = document.querySelector("#format-justify");

let templates = loadMasterTemplates();
let activeTemplate = templates.prestacionDemandaEjemplo ? "prestacionDemandaEjemplo" : "services";
let activeSourceMaster = activeTemplate;
let isWorkingCopy = false;
let activeCategory = "Todos";
let activeLanguage = "es";
let sourceTextsBySide = { A: [], B: [] };
let folders = loadFolders();
let activeFolder = folders[0] || "General";
let savedContracts = loadSavedContracts();
let versions = loadVersions();
let legalFormat = loadLegalFormat();
let toastTimer;
let autosaveTimer;

function loadMasterTemplates() {
  const imported = window.lexImportedTemplates || {};
  const availableTemplates = { ...imported, ...baseTemplates };
  const saved = JSON.parse(localStorage.getItem("lexcontratos_master_templates") || "{}");
  return Object.fromEntries(
    Object.entries(availableTemplates).map(([key, template]) => {
      const merged = { ...template, ...(saved[key] || {}), master: Boolean(template.master || saved[key]) };
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
  localStorage.setItem("lexcontratos_master_templates", JSON.stringify(masters));
}

function loadFolders() {
  return JSON.parse(localStorage.getItem("lexcontratos_folders") || '["General","Clientes","Proveedores"]');
}

function saveFolders() {
  localStorage.setItem("lexcontratos_folders", JSON.stringify(folders));
}

function loadSavedContracts() {
  return JSON.parse(localStorage.getItem("lexcontratos_saved_contracts") || "[]");
}

function saveSavedContracts() {
  localStorage.setItem("lexcontratos_saved_contracts", JSON.stringify(savedContracts));
}

function loadVersions() {
  return JSON.parse(localStorage.getItem("lexcontratos_versions") || "[]");
}

function saveVersions() {
  localStorage.setItem("lexcontratos_versions", JSON.stringify(versions));
}

function loadLegalFormat() {
  const saved = JSON.parse(
    localStorage.getItem("lexcontratos_legal_format") ||
      '{"font":"Times New Roman","size":"12","margin":"54pt","lineHeight":"1.5","justify":true}'
  );
  if (saved.margin === "72pt") saved.margin = "54pt";
  saved.justify = true;
  return saved;
}

function saveLegalFormat() {
  localStorage.setItem("lexcontratos_legal_format", JSON.stringify(legalFormat));
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 3000);
}

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
    const matchesCategory = activeCategory === "Todos" || template.category === activeCategory;
    const haystack = `${template.title} ${template.description} ${template.category}`.toLowerCase();
    return matchesCategory && haystack.includes(query);
  });

  templateGrid.innerHTML = filtered
    .map(([key, template]) => `
      <article class="template-card ${key === activeTemplate ? "selected" : ""}" data-template="${key}">
        <p class="eyebrow">${template.category}</p>
        <h2>${template.title}</h2>
        <p>${template.description}</p>
        <footer>
          <span>${template.fields} campos ${template.master ? "· maestro" : ""}</span>
          <button class="ghost-button clone-template" type="button">Replicar</button>
        </footer>
      </article>
    `)
    .join("");

  templateCount.textContent = `${Object.values(templates).filter((template) => template.master).length} masters`;
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
  if (activeLanguage === "en") return template.bodyEn || buildEnglishTemplate(template);
  const body = template.body || "";
  if (template.master || body.includes("CLÁUSULAS DE PROTECCIÓN REFORZADA") || body.includes("DÉCIMA")) return body;
  return `${body}${commonProtectionsEs}`;
}

function createWorkingCopy(sourceKey, customBody) {
  const source = templates[sourceKey];
  if (!source) return;
  const key = `work-${Date.now()}`;
  const body = customBody || bodyForTemplate(sourceKey);
  const prepared = prepareTemplateFields(body, source.customFields || []);
  templates[key] = {
    ...source,
    title: `${source.title} - copia de trabajo`,
    description: "Copia editable. El master queda protegido.",
    body: prepared.body,
    fields: prepared.fields.length,
    customFields: prepared.fields,
    master: false,
    sourceMaster: sourceKey
  };
  loadTemplate(key);
  editor.readOnly = false;
  showToast("Copia creada. Ahora puedes editar sin tocar el master.");
}

function renderVersions() {
  const visible = versions.filter((version) => version.folder === activeFolder).slice(-8).reverse();
  versionList.innerHTML = visible.length
    ? visible
        .map((version) => `
          <button class="saved-contract" type="button" data-version-id="${version.id}">
            <strong>${version.title}</strong>
            <span>${version.language.toUpperCase()} · ${version.date}</span>
          </button>
        `)
        .join("")
    : `<span>Las versiones se guardan solas mientras redactas.</span>`;
}

function autoSaveVersion(reason = "auto") {
  const body = editor.value.trim();
  if (!body) return;

  const last = versions[versions.length - 1];
  if (last && last.template === activeTemplate && last.body === body && last.folder === activeFolder) {
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
    body
  });
  versions = versions.slice(-60);
  saveVersions();
  renderVersions();
  autosaveStatus.textContent = "Guardado";
  autosaveStatus.classList.add("autosave-highlight");
}

function scheduleAutoSave() {
  clearTimeout(autosaveTimer);
  if (!isWorkingCopy) {
    autosaveStatus.textContent = "Master protegido";
    autosaveStatus.classList.remove("autosave-highlight");
    return;
  }
  autosaveStatus.textContent = "Guardando...";
  autosaveStatus.classList.remove("autosave-highlight");
  autosaveTimer = setTimeout(() => autoSaveVersion(), 900);
}

function loadTemplate(key) {
  activeTemplate = key;
  activeSourceMaster = templates[key]?.sourceMaster || (templates[key]?.master ? key : null);
  isWorkingCopy = !templates[key]?.master;
  const template = templates[key];
  editorTitle.textContent = template.title;
  selectedCategory.textContent = template.category;
  selectedDescription.textContent = template.description;
  editor.value = bodyForTemplate(key);
  editor.readOnly = !isWorkingCopy;
  autosaveStatus.textContent = isWorkingCopy ? "Copia de trabajo" : "Master protegido";
  autosaveStatus.classList.remove("autosave-highlight");
  sourceTextsBySide = { A: [], B: [] };
  renderTemplates();
  renderDynamicFields();
  renderCustomFields();
  renderRoleDrops();
  renderRequirements();
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
  link.download = `${sanitizeFilename(title)}.doc`;
  link.click();
  URL.revokeObjectURL(link.href);
  autoSaveVersion("manual");
  showToast("Contrato exportado en formato compatible con Word.");
}

function prepareSignaturePacket() {
  if (!isWorkingCopy) {
    showToast("Primero replica el master para preparar un contrato de firma.");
    return;
  }
  const title = cleanWorkingTitle(editorTitle.textContent);
  const roles = getRoles().map((role) => role.label).join(" y ");
  savedContracts.push({
    id: Date.now().toString(),
    title: `Firma pendiente · ${title}`,
    folder: activeFolder,
    template: activeTemplate,
    language: activeLanguage,
    date: new Date().toLocaleString("es-MX"),
    body: fillPlaceholders(editor.value),
    status: "Listo para firma digital",
    signers: roles
  });
  saveSavedContracts();
  renderSavedContracts();
  autoSaveVersion("manual");
  showToast("Paquete de firma listo. En una integración real saldría a e.firma, DocuSign, Adobe Sign o proveedor autorizado.");
}

function renameActiveTemplate() {
  const current = templates[activeTemplate];
  if (!current) return;
  if (!current.master) {
    showToast("Esta es una copia de trabajo. Renombra el master desde la biblioteca o sustitúyelo cuando esté lista.");
    return;
  }
  const name = window.prompt("Nuevo nombre para este machote", current.title);
  if (!name || !name.trim()) return;

  current.title = name.trim();
  current.description = current.description || "Machote agregado al catálogo del despacho.";
  current.master = true;
  editorTitle.textContent = current.title;
  saveMasterTemplates();
  renderTemplates();
  renderCustomFields();
  renderRequirements();
  showToast("Machote renombrado y guardado en el catálogo.");
}

function reviewEditableFieldsFromContract() {
  const template = templates[activeTemplate];
  if (!template) return;
  if (!isWorkingCopy) {
    showToast("El master está protegido. Replica el machote para revisar o ajustar campos.");
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
  autosaveStatus.textContent = "Generales borradas";
  autosaveStatus.classList.remove("autosave-highlight");
  showToast("Generales borradas. Puedes cargar documentos nuevos por cada parte.");
}

function renderDynamicFields() {
  const values = getPartyData();
  dynamicFields.innerHTML = getRoles()
    .map((role) => `
      <div class="field-group-title">
        <p class="eyebrow">${role.label}</p>
        <strong>Generales de ${values[role.part] || role.label}</strong>
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
            <span>${files.length} fuente${files.length === 1 ? "" : "s"}</span>
          </header>
          <label>
            <input class="role-file-input" type="file" multiple accept=".csv,.txt,.eml,.pdf,.xlsx,.xls,.docx" data-side="${role.side}" />
            Arrastra o selecciona documentos de ${role.label}
          </label>
          <ul class="role-file-list">${files.map((file) => `<li><span>${file.name}</span><strong>${file.size}</strong></li>`).join("")}</ul>
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

function renderFolders() {
  folders.sort((a, b) => a.localeCompare(b, "es"));
  folderList.innerHTML = folders
    .map((folder) => {
      const depth = Math.min(folder.split("/").length - 1, 3);
      const label = folder.split("/").pop();
      return `<button class="folder-item folder-depth-${depth} ${folder === activeFolder ? "active" : ""}" type="button" data-folder="${folder}" title="${folder}">${label}</button>`;
    })
    .join("");
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
            <span>${contract.language.toUpperCase()} · ${contract.date}</span>
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
}

templateGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".template-card");
  if (!card) return;
  if (event.target.closest(".clone-template")) {
    loadTemplate(card.dataset.template);
    createWorkingCopy(card.dataset.template);
    return;
  }
  loadTemplate(card.dataset.template);
});

roleDropGrid.addEventListener("change", async (event) => {
  if (!event.target.classList.contains("role-file-input")) return;
  if (!isWorkingCopy) {
    event.target.value = "";
    showToast("Primero replica el master. Los documentos de partes se cargan en una copia de trabajo.");
    return;
  }
  const side = event.target.dataset.side;
  const files = Array.from(event.target.files);
  sourceTextsBySide[side] = [];

  for (const file of files) {
    const entry = { name: file.name, size: `${Math.ceil(file.size / 1024)} KB`, text: "" };
    if (/\.(txt|csv|eml)$/i.test(file.name)) entry.text = await file.text();
    sourceTextsBySide[side].push(entry);
  }

  renderRoleDrops();
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
    editor.value = bodyForTemplate(activeTemplate);
    showToast(activeLanguage === "en" ? "English working draft loaded." : "Versión en español cargada.");
  });
});

templateSearch.addEventListener("input", renderTemplates);

document.querySelector("#fill-contract").addEventListener("click", () => {
  if (!isWorkingCopy) {
    showToast("Primero replica el master para llenar el contrato.");
    return;
  }
  editor.value = fillPlaceholders(editor.value);
  autoSaveVersion("manual");
  showToast("Contrato llenado con los datos de cada parte.");
});

document.querySelector("#export-word").addEventListener("click", exportWordDocument);

document.querySelector("#send-signature").addEventListener("click", prepareSignaturePacket);

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

document.querySelector("#save-contract").addEventListener("click", () => {
  if (!isWorkingCopy) {
    showToast("Primero replica el master para crear un contrato.");
    return;
  }
  const filled = fillPlaceholders(editor.value);
  editor.value = filled;
  const title = `${cleanWorkingTitle(templates[activeTemplate].title)} · ${new Date().toLocaleDateString("es-MX")}`;
  savedContracts.push({
    id: Date.now().toString(),
    title,
    folder: activeFolder,
    template: activeTemplate,
    language: activeLanguage,
    date: new Date().toLocaleString("es-MX"),
    body: filled
  });
  saveSavedContracts();
  renderSavedContracts();
  autoSaveVersion("manual");
  showToast(`Contrato creado en la carpeta ${activeFolder}.`);
});

document.querySelector("#save-version").addEventListener("click", () => {
  if (!isWorkingCopy) {
    showToast("No se trabaja directo sobre masters. Replica, ajusta la copia y luego sustituye el master.");
    return;
  }
  const key = activeSourceMaster || activeTemplate || `custom-${Date.now()}`;
  const prepared = prepareTemplateFields(editor.value, templates[activeTemplate]?.customFields || []);
  editor.value = prepared.body;
  templates[key] = {
    ...(templates[activeSourceMaster] || templates[activeTemplate] || {}),
    title: cleanWorkingTitle(editorTitle.textContent),
    category: templates[activeTemplate]?.category || "Operación",
    description: "Machote maestro validado por el despacho.",
    fields: prepared.fields.length,
    body: prepared.body,
    master: true,
    customFields: prepared.fields
  };
  activeTemplate = key;
  activeSourceMaster = key;
  isWorkingCopy = false;
  saveMasterTemplates();
  loadTemplate(key);
  renderVersions();
  showToast("Master sustituido con la versión trabajada.");
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

document.querySelector("#extract-data").addEventListener("click", () => {
  if (!isWorkingCopy) {
    showToast("Primero replica el master. Después carga documentos por parte y llena generales.");
    return;
  }
  let detected = {};
  for (const role of getRoles()) {
    const text = (sourceTextsBySide[role.side] || []).map((file) => file.text).join("\n\n");
    if (text.trim()) detected = { ...detected, ...inferDataFromText(text, role.side) };
  }
  applyDetectedData(detected);
  const missing = requiredFieldsForActiveTemplate().filter(([name]) => !String(getPartyData()[name] || "").trim()).length;
  if (Object.keys(detected).length) {
    showToast(missing ? `Se extrajeron ${Object.keys(detected).length} datos. Faltan ${missing}: sube otro documento o llena el campo manualmente.` : "Generales completas. Ya puedes llenar el contrato.");
  } else {
    showToast("Carga textos, correos o CSV por cada parte, o llena manualmente los campos faltantes.");
  }
});

templateImport.addEventListener("change", async () => {
  const [file] = Array.from(templateImport.files);
  if (!file) return;

  const addToMaster = window.confirm("¿Quieres guardar este contrato como master del catálogo?\n\nAceptar: revisa campos, limpia marcadores y lo guarda en Masters.\nCancelar: solo lo abre como copia de trabajo para este contrato.");
  const keyPrefix = addToMaster ? "custom-master" : "work";
  activeTemplate = `custom-${Date.now()}`;
  activeTemplate = `${keyPrefix}-${Date.now()}`;

  templates[activeTemplate] = {
    category: "Operación",
    title: file.name.replace(/\.[^.]+$/, ""),
    description: addToMaster ? "Machote importado, revisado y guardado como master." : "Contrato importado como copia de trabajo temporal.",
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
    showToast(addToMaster ? `Master guardado con ${prepared.fields.length} campo${prepared.fields.length === 1 ? "" : "s"} limpio${prepared.fields.length === 1 ? "" : "s"}. Repícalo para trabajarlo.` : `Copia de trabajo importada con ${prepared.fields.length} campo${prepared.fields.length === 1 ? "" : "s"} editable${prepared.fields.length === 1 ? "" : "s"}.`);
  } else {
    templates[activeTemplate].body = `MACHOTE IMPORTADO: ${file.name}\n\nEn la versión completa, LexContratos extraería el texto de PDF o Word, conservaría su estructura y detectaría campos rellenables por parte.`;
    showToast(addToMaster ? "Master creado. PDF y Word requieren extracción documental en backend para limpiar campos automáticamente." : "Contrato abierto como trabajo temporal. PDF y Word requieren extracción documental en backend.");
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
});

document.querySelector("#create-folder").addEventListener("click", () => {
  const parts = folderName.value
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
  editorTitle.textContent = contract.title;
  editor.value = contract.body;
  activeLanguage = contract.language;
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
  autosaveStatus.textContent = "Versión abierta";
  autosaveStatus.classList.add("autosave-highlight");
  showToast("Versión automática abierta en el editor.");
});

partyForm.addEventListener("input", () => {
  renderRoleDrops();
  renderRequirements();
});

editor.addEventListener("input", scheduleAutoSave);

[formatFont, formatSize, formatMargin, formatLineHeight, formatJustify].forEach((control) => {
  control.addEventListener("change", readFormatControls);
});

document.querySelector("#apply-legal-format").addEventListener("click", applyDefaultLegalFormat);

syncFormatControls();
renderFolders();
renderSavedContracts();
renderVersions();
renderTemplates();
loadTemplate(activeTemplate);
