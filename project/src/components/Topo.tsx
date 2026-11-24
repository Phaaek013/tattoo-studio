type Props = { onEncomendar: () => void };

export default function Topo({ onEncomendar }: Props) {
  return (
    <header className="topo">
      <a href="#topo" className="topo__marca">Pk'House</a>
      <nav className="topo__nav" aria-label="Seções">
        <a href="#estilos">Estilos</a>
        <a href="#sessao">Como funciona</a>
        <a href="#cuidados">Cuidados</a>
      </nav>
      <button type="button" className="topo__botao" onClick={onEncomendar}>Encomendar</button>
    </header>
  );
}
