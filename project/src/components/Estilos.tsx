import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Block } from '../art/prints';
import { ESTILOS } from '../estilos';

type Props = { selected: string; onSelect: (id: string) => void; onEncomendar: () => void };

export default function Estilos({ selected, onSelect, onEncomendar }: Props) {
  const i = ESTILOS.findIndex((e) => e.id === selected);
  const e = ESTILOS[i];
  const go = (d: number) => onSelect(ESTILOS[(i + d + ESTILOS.length) % ESTILOS.length].id);
  return (
    <section id="estilos" className={`estilos papel-${e.papel}`} aria-labelledby="estilos-titulo">
      <h2 id="estilos-titulo" className="sr-only">Estilos</h2>
      <div className="estilos__grade">
        <figure className="estilos__gravura" key={e.id}>
          <Block label={`Xilogravura: ${e.gravura}`}><e.Arte /></Block>
          <figcaption>Gravura de demonstração feita para este projeto</figcaption>
        </figure>
        <div className="estilos__texto" aria-live="polite">
          <p className="estilos__nome" role="heading" aria-level={3}>{e.nome}</p>
          <p className="estilos__resumo">{e.resumo}</p>
          <dl className="estilos__ficha">
            <div><dt>Fica bem em</dt><dd>{e.ficaBem}</dd></div>
            <div><dt>Sessões</dt><dd>{e.sessoes}</dd></div>
          </dl>
          <div className="estilos__acoes">
            <button type="button" className="carimbo" onClick={onEncomendar}>Quero {e.nome.toLowerCase()}</button>
            <div className="estilos__setas">
              <button type="button" className="seta" onClick={() => go(-1)} aria-label="Estilo anterior"><ArrowLeft aria-hidden="true" /></button>
              <span className="estilos__conta">{i + 1} de {ESTILOS.length}</span>
              <button type="button" className="seta" onClick={() => go(1)} aria-label="Próximo estilo"><ArrowRight aria-hidden="true" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
