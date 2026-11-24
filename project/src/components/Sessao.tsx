import { Block, Rosa } from '../art/prints';

const PASSOS = [
  { titulo: 'Conversa', texto: 'Pelo WhatsApp ou no estúdio: a ideia, o lugar do corpo, o tamanho e as referências que você tiver.' },
  { titulo: 'Esboço', texto: 'O desenho é feito para você, não sai de pasta pronta. Você vê antes de marcar a sessão.' },
  { titulo: 'Ajuste', texto: 'Muda o que precisar. No dia, o decalque vai na pele primeiro e só seguimos com o seu ok.' },
  { titulo: 'Sessão', texto: 'Agulha e material descartáveis, abertos na sua frente. Você sai com as orientações de cuidado.' },
];

export default function Sessao() {
  return (
    <section id="sessao" className="sessao papel-limao" aria-labelledby="sessao-titulo">
      <h2 id="sessao-titulo" className="titulo-secao">O desenho é seu</h2>

      <div className="folheto-aberto">
        <div className="folheto-aberto__pagina folheto-aberto__pagina--esq">
          <ol className="estagios" aria-label="A mesma rosa em três etapas">
            <li><Block frame={false} viewBox="18 40 164 152" label="Rosa em esboço tracejado"><Rosa stage="esboco" /></Block><span>esboço</span></li>
            <li><Block frame={false} viewBox="18 40 164 152" label="Rosa em traço de contorno"><Rosa stage="linha" /></Block><span>traço</span></li>
            <li><Block frame={false} viewBox="18 40 164 152" label="Rosa pronta, preenchida"><Rosa /></Block><span>pronta</span></li>
          </ol>
        </div>
        <div className="folheto-aberto__pagina folheto-aberto__pagina--dir">
          <p className="verso">
            Você chega com a ideia,<br />rabiscada ou só falada,<br />a gente senta e conversa<br />até a forma ser achada;<br />o desenho nasce aqui,<br />não vem de pasta comprada.
          </p>
          <p className="verso">
            Faz o esboço, ajusta o traço,<br />mede no corpo o lugar,<br />e a agulha só começa<br />depois de você aprovar;<br />e o cuidado com a pele<br />segue depois de tatuar.
          </p>
        </div>
      </div>

      <ol className="passos">
        {PASSOS.map((p, i) => (
          <li key={p.titulo}>
            <span className="passos__n" aria-hidden="true">{i + 1}</span>
            <h3>{p.titulo}</h3>
            <p>{p.texto}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
