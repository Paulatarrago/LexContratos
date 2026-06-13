import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const appSource = readFileSync(new URL("../app.js", import.meta.url), "utf8");

function extractFunction(name) {
  const start = appSource.indexOf(`function ${name}`);
  if (start === -1) throw new Error(`No se encontró la función ${name}`);
  const bodyStart = appSource.indexOf("{", start);
  let depth = 0;
  for (let index = bodyStart; index < appSource.length; index += 1) {
    const char = appSource[index];
    if (char === "{") depth += 1;
    if (char === "}") depth -= 1;
    if (depth === 0) return appSource.slice(start, index + 1);
  }
  throw new Error(`No se pudo leer completa la función ${name}`);
}

const sandbox = {
  console,
  mockRoles: []
};

vm.createContext(sandbox);
vm.runInContext(
  `
  function getRoles() {
    return mockRoles;
  }
  ${extractFunction("removeAccents")}
  ${extractFunction("roleUploadPriority")}
  ${extractFunction("domicileFieldForRole")}
  ${extractFunction("domicileFieldForSide")}
  ${extractFunction("inferDataFromText")}
  globalThis.setMockRoles = (roles) => {
    mockRoles = roles;
  };
  globalThis.runInferDataFromText = inferDataFromText;
  `,
  sandbox
);

sandbox.setMockRoles([
  { side: "A", label: "Cliente", part: "parteA" },
  { side: "B", label: "Prestador de servicios", part: "parteB" }
]);

const clienteText = `
Constancia de situación fiscal.
Razón social: CLIENTE DEMO TECNOLOGIA, S.A. DE C.V.
RFC: CDT260101AB1.
Domicilio fiscal en Avenida Reforma 100, Colonia Centro, Ciudad de México, C.P. 06000.
Acta constitutiva mediante escritura pública número 12,345 de fecha 15 de marzo de 2021 ante Notario Público número 45 de Ciudad de México.
Folio Mercantil Electrónico N-2021001234.
Representante legal: Ana Sofía Martínez Ríos.
`;

const proveedorText = `
Acta y poderes.
Denominación social: PROVEEDOR EJEMPLO, S.A. DE C.V.
RFC PEE260201CD2.
Domicilio fiscal en Calle Industria 55, Colonia Parque Industrial, Monterrey, Nuevo León.
Constituida mediante póliza número 9876 de fecha 20 de abril de 2022 ante Corredor Público número 12 de Monterrey, Nuevo León.
Folio mercantil electrónico M-202200987.
Representada por Luis Eduardo Carranza Mora, en su carácter de representante legal.
`;

const cliente = sandbox.runInferDataFromText(clienteText, "A");
assert.equal(cliente.parteA, "CLIENTE DEMO TECNOLOGIA, S.A. DE C.V.");
assert.equal(cliente.rfcA, "CDT260101AB1");
assert.equal(cliente.repA, "Ana Sofía Martínez Ríos");
assert.equal(cliente.tipoFedatarioConstitutivoA, "Notario Público");
assert.equal(cliente.tipoInstrumentoConstitutivoA, "Escritura pública");
assert.match(cliente.folioA, /^N-2021001234$/);
assert.match(cliente.domicilioCliente, /^Avenida Reforma 100/);
assert.equal(cliente.domicilioPrestador, undefined);

const proveedor = sandbox.runInferDataFromText(proveedorText, "B");
assert.equal(proveedor.parteB, "PROVEEDOR EJEMPLO, S.A. DE C.V.");
assert.equal(proveedor.rfcB, "PEE260201CD2");
assert.equal(proveedor.repB, "Luis Eduardo Carranza Mora");
assert.equal(proveedor.tipoFedatarioConstitutivoB, "Corredor Público");
assert.equal(proveedor.tipoInstrumentoConstitutivoB, "Póliza");
assert.equal(proveedor.tipoInstrumentoPoderB, "Póliza");
assert.match(proveedor.folioB, /^M-202200987$/);
assert.match(proveedor.domicilioPrestador, /^Calle Industria 55/);
assert.equal(proveedor.domicilioCliente, undefined);

const { default: extractPartyData } = await import(new URL("../api/extract-party-data.js", import.meta.url));
delete process.env.OPENAI_API_KEY;
const statusResponse = await extractPartyData(new Request("http://localhost/api/extract-party-data", { method: "GET" }));
assert.equal(statusResponse.status, 200);
assert.equal((await statusResponse.json()).configured, false);

const postResponse = await extractPartyData(new Request("http://localhost/api/extract-party-data", {
  method: "POST",
  body: new FormData()
}));
assert.equal(postResponse.status, 503);
assert.deepEqual(await postResponse.json(), { error: "La extracción documental no está disponible temporalmente." });

console.log("Extracción ficticia OK: datos por parte, fedatario/instrumento, domicilio por rol y endpoint sin llave.");
