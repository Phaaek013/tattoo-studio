import { useEffect, useRef } from 'react';
import { ESTILOS } from '../estilos';
import { Block } from '../art/prints';

// The string of folhetos. Each folheto hangs from a clothespin and swings
// on a damped spring: scrolling pushes them, hovering nudges one.
type Props = { selected: string; onSelect: (id: string) => void };

export default function Varal({ selected, onSelect }: Props) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const nudge = useRef<number[]>(ESTILOS.map(() => 0));

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const n = ESTILOS.length;
    const ang = new Array(n).fill(0);
    const vel = new Array(n).fill(0);
    let lastY = window.scrollY;
    let lastT = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const dt = Math.min((now - lastT) / 16.67, 3);
      lastT = now;
      const y = window.scrollY;
      const v = Math.max(-60, Math.min(60, y - lastY));
      lastY = y;
      for (let i = 0; i < n; i++) {
        const wind = Math.sin(now / 1400 + i * 1.7) * 0.5;
        const push = v * 0.05 * (i % 2 ? 1 : -0.8) + nudge.current[i];
        nudge.current[i] = 0;
        vel[i] += (-(ang[i] - wind) * 0.045 - vel[i] * 0.09 + push) * dt;
        ang[i] += vel[i] * dt;
        ang[i] = Math.max(-14, Math.min(14, ang[i]));
        const el = refs.current[i];
        if (el) el.style.setProperty('--swing', `${ang[i].toFixed(2)}deg`);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const n = ESTILOS.length;
  return (
    <div className="varal" role="group" aria-label="Estilos: escolha um para o seu pedido">
      <div className="varal__track">
        <svg className="varal__corda" viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,8 Q500,38 1000,8" vectorEffect="non-scaling-stroke" />
        </svg>
        {ESTILOS.map((e, i) => {
          const t = (i + 0.5) / n;
          const sag = 8 + 60 * t * (1 - t); // y on the quadratic string, in px
          const on = e.id === selected;
          return (
            <button
              key={e.id}
              ref={(el) => (refs.current[i] = el)}
              type="button"
              className={`folheto papel-${e.papel}${on ? ' is-on' : ''}`}
              style={{ ['--sag' as string]: `${sag}px` }}
              aria-pressed={on}
              onClick={() => onSelect(e.id)}
              onPointerEnter={() => (nudge.current[i] += 1.2)}
            >
              <span className="pregador" aria-hidden="true" />
              <span className="folheto__papel">
                <span className="folheto__titulo">{e.nome}</span>
                <Block label={e.gravura} className="folheto__gravura"><e.Arte /></Block>
                {on && <span className="selo" aria-hidden="true">Escolhido</span>}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
