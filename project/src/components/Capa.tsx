import { Andorinha } from '../art/prints';
import { ESTILOS } from '../estilos';
import Varal from './Varal';

type Props = { selected: string; onSelect: (id: string) => void; onEncomendar: () => void };

export default function Capa({ selected, onSelect, onEncomendar }: Props) {
  const estilo = ESTILOS.find((e) => e.id === selected)!;
  return (
    <section id="topo" className="capa papel-gema" aria-labelledby="capa-titulo">
      <div className="capa__grade">
        <div className="capa__texto">
          <h1 id="capa-titulo" className="capa__titulo">
            Arte<br />na Pele
          </h1>
          <p className="capa__lead">
            Tatuagem desenhada com você: escolha um estilo no varal e peça seu orçamento pelo WhatsApp.
          </p>
          <div className="capa__acao">
            <button type="button" className="carimbo" onClick={onEncomendar}>
              Pedir orçamento <span className="carimbo__estilo">· {estilo.nome}</span>
            </button>
            <a className="link-tinta" href="#estilos">Ver os estilos</a>
          </div>
        </div>
        <figure className="capa__gravura">
          <Andorinha label="Xilogravura de uma andorinha em voo sobre uma faixa com o nome Pk'House" />
        </figure>
      </div>
      <Varal selected={selected} onSelect={onSelect} />
    </section>
  );
}
