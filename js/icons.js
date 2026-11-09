/* ── Biotech Minas — SVG Icon System ── */

const ICONS = {

  /* ── Fungos / Trichoderma ── */
  fungi: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="28" r="14" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.6)" stroke-width="2"/>
    <path d="M26 28 C26 36 18 44 18 52" stroke="rgba(255,255,255,.5)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M40 42 L40 62" stroke="rgba(255,255,255,.7)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M54 28 C54 36 62 44 62 52" stroke="rgba(255,255,255,.5)" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="18" cy="54" r="5" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>
    <circle cx="62" cy="54" r="5" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>
    <circle cx="40" cy="64" r="5" fill="rgba(255,255,255,.25)" stroke="rgba(255,255,255,.6)" stroke-width="1.5"/>
    <circle cx="40" cy="28" r="6" fill="rgba(255,255,255,.3)"/>
    <circle cx="35" cy="24" r="2" fill="rgba(255,255,255,.5)"/>
    <circle cx="45" cy="25" r="1.5" fill="rgba(255,255,255,.4)"/>
  </svg>`,

  /* ── Inseto / Lagarta ── */
  insect: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="40" rx="10" ry="12" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.6)" stroke-width="2"/>
    <ellipse cx="40" cy="40" rx="10" ry="12" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.6)" stroke-width="2"/>
    <ellipse cx="56" cy="40" rx="10" ry="12" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.6)" stroke-width="2"/>
    <path d="M24 28 Q24 18 18 14" stroke="rgba(255,255,255,.5)" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M24 28 Q28 18 32 15" stroke="rgba(255,255,255,.5)" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M24 52 Q20 60 16 64" stroke="rgba(255,255,255,.4)" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M40 52 Q40 60 38 66" stroke="rgba(255,255,255,.4)" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M56 52 Q58 60 62 64" stroke="rgba(255,255,255,.4)" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="18" cy="12" r="3" fill="rgba(255,255,255,.4)"/>
    <circle cx="31" cy="13" r="2.5" fill="rgba(255,255,255,.35)"/>
    <circle cx="24" cy="40" r="3" fill="rgba(255,255,255,.3)"/>
    <circle cx="40" cy="40" r="3" fill="rgba(255,255,255,.3)"/>
  </svg>`,

  /* ── Planta / Brotos ── */
  plant: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="40" y1="68" x2="40" y2="30" stroke="rgba(255,255,255,.7)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M40 50 Q28 44 22 30 Q34 28 40 38" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.55)" stroke-width="1.5" stroke-linejoin="round"/>
    <line x1="28.5" y1="33" x2="38" y2="45" stroke="rgba(255,255,255,.4)" stroke-width="1" stroke-linecap="round"/>
    <path d="M40 44 Q52 38 58 24 Q46 22 40 32" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.55)" stroke-width="1.5" stroke-linejoin="round"/>
    <line x1="51.5" y1="27" x2="42" y2="39" stroke="rgba(255,255,255,.4)" stroke-width="1" stroke-linecap="round"/>
    <path d="M40 36 Q34 28 36 18 Q46 20 44 32" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.5)" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M36 68 Q40 60 44 68" stroke="rgba(255,255,255,.3)" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M30 70 Q40 65 50 70" stroke="rgba(255,255,255,.2)" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`,

  /* ── Microscópio / Lab ── */
  lab: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="12" width="12" height="28" rx="4" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.6)" stroke-width="2"/>
    <rect x="26" y="12" width="20" height="8" rx="3" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>
    <path d="M36 40 L36 52" stroke="rgba(255,255,255,.7)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M22 64 L58 64" stroke="rgba(255,255,255,.6)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M36 52 L26 64" stroke="rgba(255,255,255,.55)" stroke-width="2" stroke-linecap="round"/>
    <path d="M36 52 L46 64" stroke="rgba(255,255,255,.55)" stroke-width="2" stroke-linecap="round"/>
    <circle cx="36" cy="28" r="5" fill="rgba(255,255,255,.25)" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>
    <circle cx="56" cy="36" r="8" fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.4)" stroke-width="1.5" stroke-dasharray="3 2"/>
    <circle cx="56" cy="36" r="3" fill="rgba(255,255,255,.3)"/>
  </svg>`,

  /* ── Joaninha (logo da empresa) ── */
  ladybug: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="40" cy="44" rx="22" ry="18" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.5)" stroke-width="2"/>
    <line x1="40" y1="26" x2="40" y2="62" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
    <circle cx="30" cy="38" r="4" fill="rgba(255,255,255,.25)" stroke="rgba(255,255,255,.4)" stroke-width="1"/>
    <circle cx="50" cy="38" r="4" fill="rgba(255,255,255,.25)" stroke="rgba(255,255,255,.4)" stroke-width="1"/>
    <circle cx="29" cy="50" r="3" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.4)" stroke-width="1"/>
    <circle cx="51" cy="50" r="3" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.4)" stroke-width="1"/>
    <ellipse cx="40" cy="28" rx="10" ry="8" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.6)" stroke-width="1.5"/>
    <path d="M36 22 Q34 14 28 12" stroke="rgba(255,255,255,.5)" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M44 22 Q46 14 52 12" stroke="rgba(255,255,255,.5)" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="28" cy="11" r="2" fill="rgba(255,255,255,.4)"/>
    <circle cx="52" cy="11" r="2" fill="rgba(255,255,255,.4)"/>
  </svg>`,

  /* ── Raíz / Nematódeo ── */
  roots: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 10 L40 36" stroke="rgba(255,255,255,.7)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M40 24 Q30 28 26 36" stroke="rgba(255,255,255,.55)" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M40 20 Q50 24 54 32" stroke="rgba(255,255,255,.55)" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M40 36 L34 50 L28 58 L22 66" stroke="rgba(255,255,255,.6)" stroke-width="2" stroke-linecap="round"/>
    <path d="M40 36 L40 52 L38 62 L40 70" stroke="rgba(255,255,255,.65)" stroke-width="2" stroke-linecap="round"/>
    <path d="M40 36 L46 50 L52 58 L58 66" stroke="rgba(255,255,255,.6)" stroke-width="2" stroke-linecap="round"/>
    <path d="M28 48 Q22 48 20 54" stroke="rgba(255,255,255,.4)" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    <path d="M52 48 Q58 48 60 54" stroke="rgba(255,255,255,.4)" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    <path d="M34 58 Q30 60 28 66" stroke="rgba(255,255,255,.35)" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    <path d="M46 58 Q50 60 52 66" stroke="rgba(255,255,255,.35)" stroke-width="1.5" stroke-linecap="round" fill="none"/>
  </svg>`,

  /* ── Folha simples (feature icon) ── */
  leaf: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4C16 4 6 8 6 18C6 23.5 10.5 28 16 28C21.5 28 26 23.5 26 18C26 10 18 5 16 4Z" fill="currentColor" opacity=".9"/>
    <line x1="16" y1="28" x2="16" y2="14" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity=".7"/>
    <path d="M16 22 Q12 19 10 15" stroke="white" stroke-width="1.2" stroke-linecap="round" opacity=".6"/>
    <path d="M16 18 Q20 15 22 11" stroke="white" stroke-width="1.2" stroke-linecap="round" opacity=".6"/>
  </svg>`,

  /* ── Microscópio pequeno (feature icon) ── */
  microscope: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="4" width="6" height="14" rx="2" fill="currentColor" opacity=".8"/>
    <rect x="10" y="4" width="10" height="5" rx="2" fill="currentColor"/>
    <line x1="15" y1="18" x2="15" y2="24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="8" y1="28" x2="24" y2="28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="15" y1="24" x2="10" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="15" y1="24" x2="20" y2="28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="15" cy="11" r="3" fill="white" opacity=".5"/>
  </svg>`,

  /* ── Aperto de mão (feature icon) ── */
  handshake: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12 L10 16 L14 13 L18 13 L22 16 L30 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M10 16 L10 22 Q10 26 14 26 L18 26 Q22 26 22 22 L22 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
    <rect x="6" y="10" width="4" height="10" rx="2" fill="currentColor" opacity=".7"/>
    <rect x="22" y="10" width="4" height="10" rx="2" fill="currentColor" opacity=".7"/>
    <path d="M14 26 L14 30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
    <path d="M18 26 L18 30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
  </svg>`,

  /* ── Certificado / Escudo (feature icon) ── */
  certificate: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3 L28 7 L28 17 C28 23 22 28 16 30 C10 28 4 23 4 17 L4 7 Z" fill="currentColor" opacity=".85"/>
    <path d="M10 16 L14 20 L22 12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  /* ── Inseto pequeno (pest icon) ── */
  bug: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="10" cy="16" rx="5" ry="6" fill="currentColor" opacity=".7"/>
    <ellipse cx="20" cy="16" rx="5" ry="6" fill="currentColor" opacity=".8"/>
    <ellipse cx="29" cy="16" rx="3" ry="5" fill="currentColor" opacity=".6"/>
    <path d="M10 10 Q10 5 7 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M10 10 Q14 6 16 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M10 22 Q7 26 5 29" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".7"/>
    <path d="M20 22 Q20 26 19 30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".7"/>
  </svg>`,

  /* ── Cogumelo (pest icon fungi) ── */
  mushroom: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18 Q6 8 16 6 Q26 8 26 18 Z" fill="currentColor" opacity=".9"/>
    <rect x="12" y="18" width="8" height="10" rx="2" fill="currentColor" opacity=".7"/>
    <circle cx="11" cy="13" r="2" fill="white" opacity=".5"/>
    <circle cx="19" cy="11" r="1.5" fill="white" opacity=".4"/>
    <circle cx="22" cy="16" r="1.5" fill="white" opacity=".4"/>
  </svg>`,

  /* ── Bactéria ── */
  bacteria: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="16" cy="16" rx="10" ry="7" fill="currentColor" opacity=".8"/>
    <line x1="16" y1="9" x2="16" y2="5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="22" y1="12" x2="25" y2="9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="24" y1="16" x2="28" y2="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="22" y1="20" x2="25" y2="23" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="10" y1="20" x2="7" y2="23" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="8" y1="16" x2="4" y2="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="10" y1="12" x2="7" y2="9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="16" cy="16" r="4" fill="white" opacity=".3"/>
  </svg>`,

  /* ── Nematóide / Verme ── */
  nematode: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8 Q10 4 14 10 Q18 16 22 10 Q26 4 30 8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none" opacity=".9"/>
    <path d="M6 16 Q10 12 14 18 Q18 24 22 18 Q26 12 30 16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none" opacity=".8"/>
    <path d="M6 24 Q10 20 14 26 Q18 32 22 26 Q26 20 30 24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none" opacity=".65"/>
    <circle cx="6" cy="8" r="2.5" fill="currentColor"/>
    <circle cx="6" cy="16" r="2.5" fill="currentColor"/>
  </svg>`,

  /* ── Lupa (monitoramento) ── */
  magnifier: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="13" cy="13" r="9" fill="currentColor" opacity=".15" stroke="currentColor" stroke-width="2.5"/>
    <circle cx="13" cy="13" r="5" fill="currentColor" opacity=".25"/>
    <line x1="20" y1="20" x2="28" y2="28" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  /* ── Planta daninhas / Ramo ── */
  branch: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 28 L16 14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M16 22 Q10 18 8 12 Q14 10 16 16" fill="currentColor" opacity=".8"/>
    <path d="M16 17 Q22 13 24 7 Q18 5 16 11" fill="currentColor" opacity=".8"/>
    <path d="M14 28 Q16 25 18 28" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" opacity=".5"/>
  </svg>`,

  /* ── DNA / Cadeia (biotech) ── */
  dna: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12 Q40 24 56 12" stroke="rgba(255,255,255,.6)" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M24 28 Q40 16 56 28" stroke="rgba(255,255,255,.6)" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M24 44 Q40 56 56 44" stroke="rgba(255,255,255,.6)" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M24 60 Q40 48 56 60" stroke="rgba(255,255,255,.6)" stroke-width="2" stroke-linecap="round" fill="none"/>
    <line x1="24" y1="12" x2="24" y2="60" stroke="rgba(255,255,255,.5)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="56" y1="12" x2="56" y2="60" stroke="rgba(255,255,255,.5)" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="24" cy="20" r="3" fill="rgba(255,255,255,.35)"/>
    <circle cx="56" cy="20" r="3" fill="rgba(255,255,255,.35)"/>
    <circle cx="24" cy="36" r="3" fill="rgba(255,255,255,.35)"/>
    <circle cx="56" cy="36" r="3" fill="rgba(255,255,255,.35)"/>
    <circle cx="24" cy="52" r="3" fill="rgba(255,255,255,.35)"/>
    <circle cx="56" cy="52" r="3" fill="rgba(255,255,255,.35)"/>
    <line x1="27" y1="20" x2="53" y2="20" stroke="rgba(255,255,255,.3)" stroke-width="1.5"/>
    <line x1="27" y1="36" x2="53" y2="36" stroke="rgba(255,255,255,.3)" stroke-width="1.5"/>
    <line x1="27" y1="52" x2="53" y2="52" stroke="rgba(255,255,255,.3)" stroke-width="1.5"/>
  </svg>`,

  /* ── Café / Grão (blog) ── */
  coffee: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="40" cy="44" rx="22" ry="18" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.5)" stroke-width="2"/>
    <path d="M40 26 Q40 16 36 12" stroke="rgba(255,255,255,.5)" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M36 12 Q30 8 32 4 Q38 6 38 12" stroke="rgba(255,255,255,.4)" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    <ellipse cx="40" cy="44" rx="12" ry="9" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
    <path d="M30 40 Q40 36 50 40 Q40 52 30 40Z" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.3)" stroke-width="1"/>
    <path d="M62 38 Q70 38 70 44 Q70 50 62 50 L58 44Z" stroke="rgba(255,255,255,.4)" stroke-width="1.5" fill="rgba(255,255,255,.08)"/>
    <line x1="20" y1="62" x2="60" y2="62" stroke="rgba(255,255,255,.4)" stroke-width="2" stroke-linecap="round"/>
    <path d="M26 62 Q24 70 34 70 L46 70 Q56 70 54 62" stroke="rgba(255,255,255,.35)" stroke-width="1.5" fill="none"/>
  </svg>`,

  /* ── Gráfico / Dados (curso MIP) ── */
  chart: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="48" width="12" height="20" rx="3" fill="rgba(255,255,255,.3)" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>
    <rect x="30" y="34" width="12" height="34" rx="3" fill="rgba(255,255,255,.35)" stroke="rgba(255,255,255,.55)" stroke-width="1.5"/>
    <rect x="48" y="20" width="12" height="48" rx="3" fill="rgba(255,255,255,.4)" stroke="rgba(255,255,255,.6)" stroke-width="1.5"/>
    <path d="M12 44 L30 32 L48 18" stroke="rgba(255,255,255,.7)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="12" cy="44" r="3" fill="rgba(255,255,255,.8)"/>
    <circle cx="30" cy="32" r="3" fill="rgba(255,255,255,.8)"/>
    <circle cx="48" cy="18" r="3" fill="rgba(255,255,255,.8)"/>
    <line x1="8" y1="68" x2="68" y2="68" stroke="rgba(255,255,255,.4)" stroke-width="2" stroke-linecap="round"/>
    <line x1="8" y1="12" x2="8" y2="68" stroke="rgba(255,255,255,.4)" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  /* ── Lavoura / Campo ── */
  field: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 56 Q20 44 40 48 Q60 52 76 40" stroke="rgba(255,255,255,.5)" stroke-width="2" fill="rgba(255,255,255,.08)"/>
    <path d="M4 64 Q20 52 40 56 Q60 60 76 48 L76 76 L4 76Z" fill="rgba(255,255,255,.1)"/>
    <line x1="20" y1="48" x2="20" y2="28" stroke="rgba(255,255,255,.5)" stroke-width="2" stroke-linecap="round"/>
    <path d="M16 34 Q20 28 24 34" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>
    <path d="M16 28 Q20 22 24 28" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
    <line x1="40" y1="50" x2="40" y2="26" stroke="rgba(255,255,255,.55)" stroke-width="2" stroke-linecap="round"/>
    <path d="M35 32 Q40 24 45 32" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.55)" stroke-width="1.5"/>
    <path d="M35 26 Q40 18 45 26" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.45)" stroke-width="1.5"/>
    <line x1="60" y1="42" x2="60" y2="18" stroke="rgba(255,255,255,.5)" stroke-width="2" stroke-linecap="round"/>
    <path d="M55 24 Q60 16 65 24" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>
    <path d="M55 18 Q60 10 65 18" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
  </svg>`,
};

/* ── Inject icons via data-icon attribute ── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.dataset.icon;
    if (ICONS[name]) {
      el.innerHTML = ICONS[name];
      const svg = el.querySelector('svg');
      if (svg) {
        svg.style.width = '100%';
        svg.style.height = '100%';
      }
    }
  });
});
