import { useCallback, useState } from 'react';
import Defs from './art/Defs';
import Topo from './components/Topo';
import Capa from './components/Capa';
import Estilos from './components/Estilos';
import Sessao from './components/Sessao';
import Cuidados from './components/Cuidados';
import Encomenda from './components/Encomenda';
import Rodape from './components/Rodape';

function App() {
  const [estilo, setEstilo] = useState('tradicional');
  const encomendar = useCallback(() => {
    document.getElementById('encomenda')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      <Defs />
      <Topo onEncomendar={encomendar} />
      <main>
        <Capa selected={estilo} onSelect={setEstilo} onEncomendar={encomendar} />
        <Estilos selected={estilo} onSelect={setEstilo} onEncomendar={encomendar} />
        <Sessao />
        <Cuidados />
        <Encomenda selected={estilo} onSelect={setEstilo} />
      </main>
      <Rodape />
    </>
  );
}

export default App;
