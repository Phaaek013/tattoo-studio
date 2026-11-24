const ESTUDIO = [
  'Agulhas e biqueiras de uso único, abertas na sua frente',
  'Tinta servida em copinhos descartáveis, um por sessão',
  'Maca, bancada e máquina cobertas com filme a cada cliente',
  'Peças reutilizáveis esterilizadas em autoclave',
];

const CASA = [
  { quando: 'Primeiros dias', oque: 'Lave com água fria e sabonete neutro, seque batendo papel-toalha e passe uma camada fina da pomada indicada.' },
  { quando: 'Até duas semanas', oque: 'Não coce nem puxe as casquinhas. Nada de piscina, mar, sauna ou sol direto.' },
  { quando: 'Depois de curada', oque: 'Protetor solar sempre que ela pegar sol. É o que mantém o preto preto.' },
];

export default function Cuidados() {
  return (
    <section id="cuidados" className="cuidados papel-tangerina" aria-labelledby="cuidados-titulo">
      <h2 id="cuidados-titulo" className="titulo-secao">Cuidado</h2>
      <div className="cuidados__grade">
        <div>
          <h3 className="cuidados__sub">No estúdio</h3>
          <ul className="lista-filete">
            {ESTUDIO.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="cuidados__sub">Em casa</h3>
          <dl className="almanaque">
            {CASA.map((c) => (
              <div key={c.quando}><dt>{c.quando}</dt><dd>{c.oque}</dd></div>
            ))}
          </dl>
          <p className="cuidados__nota">Ficou com dúvida durante a cicatrização? Mande uma foto pelo WhatsApp.</p>
        </div>
      </div>
    </section>
  );
}
