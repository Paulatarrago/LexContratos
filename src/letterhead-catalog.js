function svgDataUrl(svg) {
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

const lexContratosLogo = `
<svg xmlns="http://www.w3.org/2000/svg" width="760" height="220" viewBox="0 0 760 220">
  <rect width="760" height="220" fill="#ffffff"/>
  <rect x="26" y="24" width="160" height="160" rx="28" fill="#09264d"/>
  <rect x="48" y="48" width="112" height="120" rx="12" fill="#123d82"/>
  <path d="M64 82h96M64 112h76M64 142h96" stroke="#7fb9ff" stroke-width="10" stroke-linecap="round" opacity=".38"/>
  <path d="M76 116h58M105 88v58M87 88l42 58M129 88l-42 58" stroke="#ffffff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M42 166h118" stroke="#ffffff" stroke-width="8" opacity=".35"/>
  <text x="220" y="96" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="800" fill="#09264d">LexContratos</text>
  <text x="222" y="140" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="600" fill="#51657f">Membrete autorizado</text>
  <path d="M220 164h325" stroke="#c77700" stroke-width="6" stroke-linecap="round"/>
</svg>`;

window.lexLetterheadCatalogLocked = true;
window.lexLetterheadCatalog = [
  {
    id: "lexcontratos",
    name: "LexContratos",
    dataUrl: svgDataUrl(lexContratosLogo)
  }
];
