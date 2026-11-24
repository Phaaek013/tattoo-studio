// Woodcut prints, one per style. Each is drawn in a 200x200 block:
// ink is solid black, "cuts" are lines gouged back to the paper colour
// (CSS var --paper, set by whatever the print sits on).
import type { ReactNode } from 'react';

const INK = 'var(--ink)';
const cut = { stroke: 'var(--paper)', fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
const inkLine = { stroke: INK, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

export type Stage = 'esboco' | 'linha' | 'pronto';

export function Block({ children, label, frame = true, className, viewBox = '0 0 200 200' }: { children: ReactNode; label: string; frame?: boolean; className?: string; viewBox?: string }) {
  return (
    <svg viewBox={viewBox} className={className} role="img" aria-label={label}>
      <g filter="url(#ink)">
        {frame && (
          <>
            <rect x="5" y="5" width="190" height="190" fill="none" stroke={INK} strokeWidth="7" />
            <rect x="13" y="13" width="174" height="174" fill="none" stroke={INK} strokeWidth="1.6" />
          </>
        )}
        {children}
      </g>
    </svg>
  );
}

/* ---------- Tradicional: rosa ---------- */
export function Rosa({ stage = 'pronto' }: { stage?: Stage }) {
  const head = 'M100,45 C131,42 151,63 150,91 C149,119 127,139 100,138 C72,138 50,118 50,91 C50,63 70,48 100,45 Z';
  const leafL = 'M72,132 C48,126 31,141 23,162 C47,167 64,154 72,132 Z';
  const leafR = 'M128,134 C153,129 170,143 177,164 C153,169 136,156 128,134 Z';
  const petals = [
    'M100,73 C112,71 120,81 116,91 C112,101 96,103 90,93 C86,85 92,79 99,81',
    'M64,95 C66,116 84,128 104,128',
    'M136,95 C134,115 118,127 99,130',
    'M68,72 C78,58 96,55 109,60',
    'M120,57 C134,63 142,75 142,88',
    'M77,103 C88,116 110,118 123,105',
    'M60,82 C62,70 68,64 74,60',
  ];
  if (stage === 'esboco') {
    return (
      <g style={{ ...inkLine, strokeWidth: 1.3, strokeDasharray: '5 4' }}>
        <path d={head} /><path d={leafL} /><path d={leafR} />
        <path d="M100,140 C98,160 102,175 100,188" />
        <circle cx="100" cy="91" r="22" />
      </g>
    );
  }
  if (stage === 'linha') {
    return (
      <g style={{ ...inkLine, strokeWidth: 3 }}>
        <path d={head} /><path d={leafL} /><path d={leafR} />
        <path d="M100,140 C98,160 102,175 100,188" />
        {petals.map((d) => <path key={d} d={d} strokeWidth="2" />)}
      </g>
    );
  }
  return (
    <g>
      <path d="M100,140 C98,160 102,175 100,188" style={{ ...inkLine, strokeWidth: 7 }} />
      <path d={leafL} fill={INK} /><path d={leafR} fill={INK} />
      <path d="M70,135 C54,145 40,152 29,159" style={{ ...cut, strokeWidth: 2.4 }} />
      <path d="M130,137 C147,146 161,154 171,161" style={{ ...cut, strokeWidth: 2.4 }} />
      <path d={head} fill={INK} />
      {petals.map((d) => <path key={d} d={d} style={{ ...cut, strokeWidth: 3.4 }} />)}
    </g>
  );
}

/* ---------- Realismo: olho ---------- */
export function Olho() {
  const brow = Array.from({ length: 20 }, (_, i) => {
    const t = i / 19;
    const x = 38 + t * 124;
    const y = 66 - Math.sin(t * Math.PI) * 18;
    const len = 10 + Math.sin(t * Math.PI) * 6;
    return <line key={i} x1={x} y1={y} x2={x + len * 0.75} y2={y - len * 0.6} style={{ ...inkLine, strokeWidth: 3 }} />;
  });
  const lashes = Array.from({ length: 9 }, (_, i) => {
    const t = 0.1 + (i / 8) * 0.8;
    const x = 30 + t * 140;
    const y = 108 - Math.sin(t * Math.PI) * 30;
    const dx = (t - 0.5) * 16;
    return <path key={i} d={`M${x},${y} q${dx * 0.4},-8 ${dx},-14`} style={{ ...inkLine, strokeWidth: 2.6 }} />;
  });
  const rays = Array.from({ length: 22 }, (_, i) => {
    const a = (i / 22) * Math.PI * 2;
    return <line key={i} x1={100 + Math.cos(a) * 13} y1={106 + Math.sin(a) * 13} x2={100 + Math.cos(a) * 25} y2={106 + Math.sin(a) * 25} style={{ ...cut, strokeWidth: 1.6 }} />;
  });
  const shade = Array.from({ length: 6 }, (_, i) => {
    const y = 140 + i * 6;
    const half = 52 - i * 8;
    return <line key={i} x1={100 - half} y1={y} x2={100 + half} y2={y} style={{ ...inkLine, strokeWidth: 2.2 - i * 0.25 }} />;
  });
  return (
    <g>
      {brow}
      <clipPath id="olho-clip"><path d="M30,108 C60,72 140,72 170,108 C140,138 60,138 30,108 Z" /></clipPath>
      <g clipPath="url(#olho-clip)">
        <circle cx="100" cy="106" r="28" fill={INK} />
        {rays}
        <circle cx="100" cy="106" r="11" fill={INK} />
        <path d="M30,108 C60,86 140,86 170,108" style={{ ...inkLine, strokeWidth: 9, opacity: 1 }} />
      </g>
      <circle cx="109" cy="97" r="5" fill="var(--paper)" />
      <path d="M30,108 C60,72 140,72 170,108" style={{ ...inkLine, strokeWidth: 7 }} />
      <path d="M30,108 C60,134 140,134 170,108" style={{ ...inkLine, strokeWidth: 3 }} />
      {lashes}
      {shade}
    </g>
  );
}

/* ---------- Minimalista: ramo em traço fino ---------- */
export function Linha() {
  const leaves = [
    [0.18, 1], [0.3, -1], [0.42, 1], [0.54, -1], [0.66, 1], [0.78, -1],
  ].map(([t, side], i) => {
    const x = 50 + t * 110;
    const y = 160 - t * 125 + Math.sin(t * 5) * 6;
    const a = side > 0 ? -35 : 145;
    return (
      <path
        key={i}
        d="M0,0 C8,-9 24,-9 32,0 C24,9 8,9 0,0 Z M4,0 L26,0"
        transform={`translate(${x},${y}) rotate(${a}) scale(${0.95 - t * 0.25})`}
        style={{ ...inkLine, strokeWidth: 1.8 }}
      />
    );
  });
  return (
    <g>
      <path d="M44,170 C70,140 92,110 108,86 C122,64 138,50 160,38" style={{ ...inkLine, strokeWidth: 2 }} />
      {leaves}
      <circle cx="160" cy="38" r="3.4" fill={INK} />
    </g>
  );
}

/* ---------- Geométrica: estrela e círculos ---------- */
export function Geometrica() {
  const up = '100,36 155,132 45,132';
  const down = '100,164 45,68 155,68';
  const dots = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    return <circle key={i} cx={100 + Math.cos(a) * 78} cy={100 + Math.sin(a) * 78} r={i % 2 ? 2.4 : 4} fill={INK} />;
  });
  return (
    <g>
      <circle cx="100" cy="100" r="66" style={{ ...inkLine, strokeWidth: 4 }} />
      <polygon points={up} fill={INK} />
      <polygon points={down} style={{ ...inkLine, strokeWidth: 3 }} />
      <clipPath id="geo-up"><polygon points={up} /></clipPath>
      <polygon points={down} clipPath="url(#geo-up)" style={{ ...cut, strokeWidth: 3 }} />
      <circle cx="100" cy="100" r="22" style={{ ...cut, strokeWidth: 3 }} />
      <circle cx="100" cy="100" r="7" fill="var(--paper)" />
      {dots}
    </g>
  );
}

/* ---------- Aquarela: pena com mancha de cor ---------- */
export function Pena() {
  const barbs = Array.from({ length: 15 }, (_, i) => {
    const t = 0.12 + (i / 14) * 0.78;
    const x = 66 + t * 86;
    const y = 162 - t * 132;
    return <path key={i} d={`M${x},${y} l${-16 + t * 4},${6 + t * 2}`} style={{ ...cut, strokeWidth: 1.8 }} />;
  });
  const barbsR = Array.from({ length: 13 }, (_, i) => {
    const t = 0.18 + (i / 12) * 0.72;
    const x = 66 + t * 86;
    const y = 162 - t * 132;
    return <path key={i} d={`M${x},${y} l${12},${3 + t * 3}`} style={{ ...cut, strokeWidth: 1.8 }} />;
  });
  return (
    <g>
      <path
        d="M40,120 C30,84 62,52 98,58 C130,62 150,40 168,56 C186,74 166,108 150,126 C134,146 104,170 76,164 C56,160 46,140 40,120 Z"
        fill="var(--wash, #e0567a)" opacity="0.55" style={{ mixBlendMode: 'multiply' }}
      />
      <path d="M152,28 C180,64 152,122 74,158 C84,108 112,56 152,28 Z" fill={INK} />
      <path d="M96,118 l-14,8 l4,-12 Z" fill="var(--paper)" />
      {barbs}{barbsR}
      <path d="M152,28 C128,70 100,118 52,182" style={{ ...cut, strokeWidth: 2.6 }} />
      <path d="M74,158 C66,168 58,176 52,182" style={{ ...inkLine, strokeWidth: 3 }} />
    </g>
  );
}

/* ---------- Blackwork: adaga recortada num disco preto ---------- */
export function Adaga() {
  return (
    <g>
      <circle cx="100" cy="102" r="74" fill={INK} />
      <g fill="var(--paper)">
        <path d="M88,80 L112,80 L100,184 Z" />
        <rect x="64" y="68" width="72" height="13" rx="3" />
        <circle cx="62" cy="74.5" r="8" />
        <circle cx="138" cy="74.5" r="8" />
        <rect x="91" y="30" width="18" height="40" rx="3" />
        <circle cx="100" cy="23" r="10" />
      </g>
      <path d="M100,86 L100,170" style={{ ...inkLine, strokeWidth: 2.2 }} />
      {[36, 44, 52, 60].map((y) => <path key={y} d={`M91,${y + 4} L109,${y - 3}`} style={{ ...inkLine, strokeWidth: 2.2 }} />)}
      <circle cx="100" cy="23" r="4" fill={INK} />
      <path d="M74,74.5 L126,74.5" style={{ ...inkLine, strokeWidth: 1.6 }} />
      <path d="M128,124 c-5,8 -5,13 0,13 c5,0 5,-5 0,-13 Z" fill="var(--paper)" />
      <path d="M136,150 c-4,6 -4,10 0,10 c4,0 4,-4 0,-10 Z" fill="var(--paper)" />
    </g>
  );
}

/* ---------- Oriental: carpa e ondas ---------- */
export function Carpa() {
  const body = 'M70,38 C102,38 127,70 129,106 C131,126 125,141 117,151 L101,151 C92,121 71,91 58,62 C55,49 60,40 70,38 Z';
  const scales: JSX.Element[] = [];
  for (let r = 0; r < 9; r++) {
    const y = 64 + r * 10.5;
    for (let c = 0; c < 9; c++) {
      const x = 52 + c * 11 + (r % 2 ? 5.5 : 0);
      scales.push(<path key={`${r}-${c}`} d={`M${x - 5.5},${y} A5.5 5.5 0 0 0 ${x + 5.5},${y}`} style={{ ...cut, strokeWidth: 1.7 }} />);
    }
  }
  return (
    <g>
      <path d="M110,147 C121,170 150,186 172,180 C152,169 142,156 134,141 C152,141 170,129 177,112 C156,112 131,122 118,140 Z" fill={INK} />
      <path d="M126,150 C138,164 152,172 166,175 M126,146 C142,140 158,130 168,118" style={{ ...cut, strokeWidth: 1.8 }} />
      <path d="M78,90 C60,100 49,114 51,127 C63,115 76,107 91,102 Z" fill={INK} />
      <path d="M118,84 C134,82 146,74 152,62 C138,64 126,70 117,78 Z" fill={INK} />
      <path d={body} fill={INK} />
      <clipPath id="carpa-body"><path d={body} /></clipPath>
      <g clipPath="url(#carpa-body)">{scales}</g>
      <path d="M58,62 C66,56 76,50 88,50" style={{ ...cut, strokeWidth: 2.6 }} />
      <circle cx="72" cy="50" r="5.5" fill="var(--paper)" />
      <circle cx="73" cy="50" r="2.4" fill={INK} />
      <path d="M62,44 C52,42 44,46 38,54 M64,48 C56,52 50,60 48,70" style={{ ...inkLine, strokeWidth: 2 }} />
      <path d="M20,176 C34,160 54,162 58,176 C50,170 42,172 40,180 M60,184 C74,170 94,172 98,186" style={{ ...inkLine, strokeWidth: 3.4 }} />
      <path d="M22,188 C60,182 120,192 180,186" style={{ ...inkLine, strokeWidth: 2 }} />
    </g>
  );
}

/* ---------- Capa: andorinha com faixa ---------- */
export function Andorinha({ label }: { label: string }) {
  const feathersUp = [0, 1, 2, 3, 4].map((i) => (
    <path key={i} d={`M${178 + i * 12},${128 - i * 2} C${206 + i * 10},${96 - i * 6} ${246 + i * 8},${66 - i * 4} ${292 + i * 4},${50 - i * 2}`} style={{ ...cut, strokeWidth: 2.4 }} />
  ));
  const feathersDown = [0, 1, 2, 3].map((i) => (
    <path key={i} d={`M${182 + i * 12},${176 + i * 2} C${206 + i * 9},${206 + i * 4} ${236 + i * 7},${230 + i * 3} ${272 + i * 3},${248 + i}`} style={{ ...cut, strokeWidth: 2.4 }} />
  ));
  const streaks = Array.from({ length: 11 }, (_, i) => {
    const y = 30 + i * 9;
    const x1 = 24 + ((i * 37) % 50);
    return <line key={i} x1={x1} y1={y} x2={x1 + 60 + ((i * 53) % 70)} y2={y} style={{ ...inkLine, strokeWidth: 2.4 - i * 0.12 }} />;
  });
  return (
    <svg viewBox="0 0 400 340" role="img" aria-label={label}>
      <g filter="url(#ink)">
        <rect x="6" y="6" width="388" height="328" fill="none" stroke={INK} strokeWidth="10" />
        <rect x="18" y="18" width="364" height="304" fill="none" stroke={INK} strokeWidth="2" />
        {streaks}
        <path d="M150,130 C178,82 236,40 340,28 C296,56 258,92 236,136 Z" fill={INK} />
        <path d="M158,172 C186,214 228,246 304,268 C268,238 246,206 232,168 Z" fill={INK} />
        <path d="M262,150 L362,104 L300,160 L368,214 L262,170 Z" fill={INK} />
        <path d="M112,128 C160,118 226,132 276,160 C226,182 160,188 112,174 C98,166 98,136 112,128 Z" fill={INK} />
        <circle cx="114" cy="150" r="26" fill={INK} />
        <path d="M92,144 L64,153 L93,160 Z" fill={INK} />
        <path d="M120,170 C160,180 214,176 262,163 C220,176 166,182 122,176 Z" fill="var(--paper)" />
        <path d="M118,172 C150,186 210,184 258,166" style={{ ...cut, strokeWidth: 9 }} />
        <circle cx="108" cy="144" r="5" fill="var(--paper)" />
        {feathersUp}{feathersDown}
        <path d="M276,152 L344,118 M276,170 L346,206" style={{ ...cut, strokeWidth: 2.2 }} />
        <path d="M70,262 L104,250 L104,300 L70,312 L84,286 Z" fill={INK} />
        <path d="M330,262 L296,250 L296,300 L330,312 L316,286 Z" fill={INK} />
        <path d="M96,246 C160,262 240,262 304,246 L304,296 C240,312 160,312 96,296 Z" fill={INK} />
      </g>
      <text x="200" y="291" textAnchor="middle" className="banner-text">Pk'House</text>
    </svg>
  );
}
