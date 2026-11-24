import type { ComponentType } from 'react';
import { Rosa, Olho, Linha, Geometrica, Pena, Adaga, Carpa } from './art/prints';

export type Estilo = {
  id: string;
  nome: string;
  papel: string; // folheto paper colour (css var name)
  Arte: ComponentType;
  gravura: string; // what the print shows, for screen readers
  resumo: string;
  ficaBem: string;
  sessoes: string;
};

export const ESTILOS: Estilo[] = [
  {
    id: 'tradicional', nome: 'Tradicional', papel: 'chiclete', Arte: () => <Rosa />, gravura: 'Rosa com duas folhas',
    resumo: 'Contorno grosso, cor chapada e desenhos clássicos como rosas, andorinhas e âncoras. Envelhece bem e continua legível de longe.',
    ficaBem: 'Braço, panturrilha, peito', sessoes: 'Geralmente uma',
  },
  {
    id: 'realismo', nome: 'Realismo', papel: 'anil', Arte: Olho, gravura: 'Olho com sobrancelha e cílios',
    resumo: 'Luz e sombra construídas aos poucos até parecer foto ou desenho de observação. Pede espaço na pele e uma boa referência.',
    ficaBem: 'Antebraço, coxa, costas', sessoes: 'Uma ou mais, conforme o tamanho',
  },
  {
    id: 'minimalista', nome: 'Minimalista', papel: 'limao', Arte: Linha, gravura: 'Ramo de folhas em traço fino',
    resumo: 'Traço fino, pouca tinta e bastante respiro. Boa escolha para a primeira tatuagem e para lugares delicados.',
    ficaBem: 'Pulso, costela, nuca', sessoes: 'Uma, curta',
  },
  {
    id: 'geometrica', nome: 'Geométrica', papel: 'gema', Arte: Geometrica, gravura: 'Estrela de seis pontas dentro de um círculo',
    resumo: 'Formas exatas, simetria e padrões que acompanham o desenho do corpo. Funciona sozinha ou como fundo de outra peça.',
    ficaBem: 'Antebraço, ombro, costas', sessoes: 'Uma ou duas',
  },
  {
    id: 'aquarela', nome: 'Aquarela', papel: 'tangerina', Arte: Pena, gravura: 'Pena sobre mancha de cor',
    resumo: 'Manchas de cor soltas, como tinta escorrendo no papel. Costuma levar um traço preto que segura o desenho com o passar dos anos.',
    ficaBem: 'Ombro, costela, coxa', sessoes: 'Uma ou duas',
  },
  {
    id: 'blackwork', nome: 'Blackwork', papel: 'chiclete', Arte: Adaga, gravura: 'Adaga recortada num disco preto',
    resumo: 'Preto sólido em áreas grandes e contraste máximo. Também serve para cobrir uma tatuagem antiga.',
    ficaBem: 'Braço, perna, costas', sessoes: 'Uma ou mais',
  },
  {
    id: 'oriental', nome: 'Oriental', papel: 'anil', Arte: Carpa, gravura: 'Carpa nadando sobre ondas',
    resumo: 'Carpas, ondas, flores e dragões da tradição japonesa, pensados para fechar áreas grandes como braço inteiro e costas.',
    ficaBem: 'Braço fechado, costas, perna', sessoes: 'Várias',
  },
];
