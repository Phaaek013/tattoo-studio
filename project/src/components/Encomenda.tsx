import { useState, type FormEvent } from 'react';
import { ESTILOS } from '../estilos';
import { Block } from '../art/prints';

// Empty = demo mode: the message is shown, nothing is sent.
// Fill with country code + area code + number, digits only.
const WHATSAPP = '';

const LUGARES = ['Braço', 'Antebraço', 'Mão ou dedos', 'Ombro', 'Costas', 'Peito', 'Costela', 'Perna', 'Pé ou tornozelo', 'Pescoço ou nuca', 'Ainda não sei'];
const TAMANHOS = [
  { id: 'pequena', nome: 'Pequena', obs: 'até 7 cm' },
  { id: 'media', nome: 'Média', obs: 'até 15 cm' },
  { id: 'grande', nome: 'Grande', obs: 'mais de 15 cm' },
  { id: 'fechamento', nome: 'Fechamento', obs: 'braço, perna ou costas' },
];

type Props = { selected: string; onSelect: (id: string) => void };

export default function Encomenda({ selected, onSelect }: Props) {
  const [ideia, setIdeia] = useState('');
  const [lugar, setLugar] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');
  const [mensagem, setMensagem] = useState('');
  const estilo = ESTILOS.find((e) => e.id === selected)!;

  const enviar = (ev: FormEvent) => {
    ev.preventDefault();
    if (ideia.trim().length < 6) return setErro('Conte a ideia em pelo menos uma frase, mesmo que curta.');
    if (!lugar) return setErro('Escolha onde no corpo, ou “Ainda não sei”.');
    if (!tamanho) return setErro('Escolha um tamanho aproximado.');
    setErro('');
    const tam = TAMANHOS.find((t) => t.id === tamanho)!;
    setMensagem(
      `Olá, Pk'House! ${nome.trim() ? `Sou ${nome.trim()}. ` : ''}Quero um orçamento de tatuagem.\n` +
        `Estilo: ${estilo.nome}\nIdeia: ${ideia.trim()}\nLugar: ${lugar}\nTamanho: ${tam.nome} (${tam.obs})`,
    );
  };

  return (
    <section id="encomenda" className="encomenda papel-anil" aria-labelledby="encomenda-titulo">
      <div className="encomenda__grade">
        <div className="encomenda__intro">
          <h2 id="encomenda-titulo" className="titulo-secao">Encomende</h2>
          <p>Preencha o talão e o pedido sai pronto para o WhatsApp do estúdio. A gente responde com o valor e as datas livres.</p>
          <p className="encomenda__hora">Atendimento só com hora marcada.</p>
          <div className={`encomenda__folheto papel-${estilo.papel === "anil" ? "gema" : estilo.papel}`} aria-hidden="true">
            <span className="pregador" />
            <span className="folheto__papel">
              <span className="folheto__titulo">{estilo.nome}</span>
              <Block label={estilo.gravura} className="folheto__gravura"><estilo.Arte /></Block>
              <span className="encomenda__legenda">vai no seu pedido</span>
            </span>
          </div>
        </div>

        <form className="talao" onSubmit={enviar} noValidate>
          <fieldset className="talao__campo">
            <legend>Estilo</legend>
            <div className="fichas">
              {ESTILOS.map((e) => (
                <label key={e.id} className="ficha">
                  <input type="radio" name="estilo" value={e.id} checked={selected === e.id} onChange={() => onSelect(e.id)} />
                  <span>{e.nome}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="talao__campo">
            <span className="talao__rotulo">Sua ideia</span>
            <textarea rows={3} value={ideia} onChange={(e) => setIdeia(e.target.value)} placeholder="Ex.: uma andorinha pequena, voando, com o nome da minha avó na faixa" />
          </label>

          <div className="talao__dupla">
            <label className="talao__campo">
              <span className="talao__rotulo">Onde no corpo</span>
              <select value={lugar} onChange={(e) => setLugar(e.target.value)}>
                <option value="">Escolha</option>
                {LUGARES.map((l) => <option key={l}>{l}</option>)}
              </select>
            </label>
            <label className="talao__campo">
              <span className="talao__rotulo">Seu nome <em>(opcional)</em></span>
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="given-name" />
            </label>
          </div>

          <fieldset className="talao__campo">
            <legend>Tamanho aproximado</legend>
            <div className="fichas">
              {TAMANHOS.map((t) => (
                <label key={t.id} className="ficha ficha--dupla">
                  <input type="radio" name="tamanho" value={t.id} checked={tamanho === t.id} onChange={() => setTamanho(t.id)} />
                  <span>{t.nome} <small>{t.obs}</small></span>
                </label>
              ))}
            </div>
          </fieldset>

          {erro && <p className="talao__erro" role="alert">{erro}</p>}

          <button type="submit" className="carimbo carimbo--largo">Montar pedido</button>

          {mensagem && (
            <div className="talao__resultado" role="status">
              {WHATSAPP ? (
                <a className="carimbo carimbo--largo" href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`} target="_blank" rel="noopener noreferrer">
                  Enviar pelo WhatsApp
                </a>
              ) : (
                <>
                  <p className="talao__aviso">Projeto de demonstração: nenhum pedido foi enviado. Num estúdio de verdade, esta mensagem abriria no WhatsApp:</p>
                  <pre className="talao__previa">{mensagem}</pre>
                </>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
