import type { Equipment } from './types/index.js';

export const equipment: Equipment[] = [
  {
    id: '9',
    name: 'Britador de cone Metso Nordberg HP300',
    category: 'Britagem',
    price: 1100000,
    currency: 'EUR',
    image: 'src/img/hp300.jpg',
    imageAlt: 'Britador de cone Metso Nordberg HP300 em área industrial',
    description: 'Britador de cone para britagem secundária e terciária, com alta confiabilidade operacional e excelente desempenho em produção contínua.',
    specifications: [
      { key: 'Marca', value: 'Metso' },
      { key: 'Modelo', value: 'Nordberg HP300' },
      { key: 'Tipo', value: 'Britador de cone' },
      { key: 'Ano', value: '2018-01' },
      { key: 'Localização', value: 'Portugal - Mangide' },
      { key: 'Distância', value: '143 km de Portugal/Porto' }
    ],
    inStock: true,
    deliveryTime: 'Disponibilidade imediata'
  },
  {
    id: '1',
    name: 'Escavadeira Hidráulica ZX 350LC',
    category: 'Escavadeira',
    price: 1289000,
    currency: 'EUR',
    image: 'src/img/escavadeira.jpg',
    imageAlt: 'Escavadeira hidráulica em frente de mineração',
    description: 'Plataforma de escavação para operações de alto volume em rocha e solo compactado, com excelente rendimento por hora.',
    specifications: [
      { key: 'Peso Operacional', value: '34.700 kg' },
      { key: 'Profundidade de Escavação', value: '7.380 mm' },
      { key: 'Potência', value: '286 HP' },
      { key: 'Combustível', value: 'Diesel' },
      { key: 'Ano de Fabricação', value: '2024' },
      { key: 'Condição', value: 'Novo' }
    ],
    inStock: true,
    deliveryTime: '20-30 dias'
  },
  {
    id: '2',
    name: 'Britador Primário de Mandíbula 120x90',
    category: 'Britagem',
    price: 945000,
    currency: 'EUR',
    image: 'src/img/primario.png',
    imageAlt: 'Britador primário para agregados',
    description: 'Unidade de britagem primária para produção de agregados de construção com alta resistência estrutural e regulagem precisa.',
    specifications: [
      { key: 'Abertura de Alimentação', value: '1200 x 900 mm' },
      { key: 'Produção Nominal', value: '150 a 300 t/h' },
      { key: 'Potência Instalada', value: '132 kW' },
      { key: 'Faixa de Regulagem', value: '80 a 180 mm' },
      { key: 'Combustível', value: 'Diesel' },
      { key: 'Ano de Fabricação', value: '2024' }
    ],
    inStock: true,
    deliveryTime: '30-45 dias'
  },
  {
    id: '3',
    name: 'Peneira Vibratória CRIBO 3 Decks',
    category: 'Classificação',
    price: 689000,
    currency: 'EUR',
    image: 'src/img/cribo.jpg',
    imageAlt: 'Peneira vibratória cribo em operação',
    description: 'Sistema de classificação de agregados para controle granulométrico fino em usinas de concreto e pavimentação.',
    specifications: [
      { key: 'Área de Peneiramento', value: '6.0 m x 1.8 m' },
      { key: 'Número de Decks', value: '3 níveis' },
      { key: 'Capacidade', value: '120 a 260 t/h' },
      { key: 'Acionamento', value: 'Elétrico 380V' },
      { key: 'Estrutura', value: 'Aço reforçado' },
      { key: 'Ano de Fabricação', value: '2024' }
    ],
    inStock: true,
    deliveryTime: '15-25 dias'
  },
  {
    id: '4',
    name: 'Moinho de Impacto Série MI-75',
    category: 'Moagem',
    price: 782000,
    currency: 'EUR',
    image: 'src/img/moinho.jpg',
    imageAlt: 'Moinho de impacto industrial para britagem fina',
    description: 'Equipamento para comminuição secundária e terciária com curva granulométrica estável para materiais de construção.',
    specifications: [
      { key: 'Diâmetro do Rotor', value: '750 mm' },
      { key: 'Faixa de Alimentação', value: '0 a 90 mm' },
      { key: 'Potência Instalada', value: '160 kW' },
      { key: 'Produção Nominal', value: '90 a 180 t/h' },
      { key: 'Material de Desgaste', value: 'Liga de alto cromo' },
      { key: 'Ano de Fabricação', value: '2024' }
    ],
    inStock: true,
    deliveryTime: '25-40 dias'
  },
  {
    id: '5',
    name: 'Escavadeira Hidráulica ZX 240LC',
    category: 'Transporte',
    price: 979000,
    currency: 'EUR',
    image: 'src/img/escavadeira.jpg',
    imageAlt: 'Escavadeira hidráulica para obras civis',
    description: 'Versão intermediária para construção civil pesada com baixo consumo e alta produtividade em ciclo combinado.',
    specifications: [
      { key: 'Peso Operacional', value: '24.900 kg' },
      { key: 'Capacidade da Caçamba', value: '1.20 m3' },
      { key: 'Potência', value: '177 HP' },
      { key: 'Profundidade de Escavação', value: '6.620 mm' },
      { key: 'Combustível', value: 'Diesel' },
      { key: 'Ano de Fabricação', value: '2024' }
    ],
    inStock: true,
    deliveryTime: '12-20 dias'
  },
  {
    id: '6',
    name: 'Britador Primário Compacto 90x60',
    category: 'Britagem',
    price: 598000,
    currency: 'EUR',
    image: 'src/img/primario.png',
    imageAlt: 'Britador primário compacto para canteiro',
    description: 'Modelo compacto para pedreiras de médio porte e canteiros de infraestrutura com montagem rápida.',
    specifications: [
      { key: 'Abertura de Alimentação', value: '900 x 600 mm' },
      { key: 'Capacidade', value: '90 a 180 t/h' },
      { key: 'Potência Instalada', value: '90 kW' },
      { key: 'Sistema de Ajuste', value: 'Hidráulico' },
      { key: 'Montagem', value: 'Skid modular' },
      { key: 'Ano de Fabricação', value: '2024' }
    ],
    inStock: false,
    deliveryTime: '40-55 dias'
  },
  {
    id: '7',
    name: 'Peneira Vibratória CRIBO Móvel',
    category: 'Classificação',
    price: 734000,
    currency: 'EUR',
    image: 'src/img/cribo.jpg',
    imageAlt: 'Peneira vibratória móvel para agregados',
    description: 'Planta móvel de classificação para produção contínua de brita graduada, areia industrial e material de base.',
    specifications: [
      { key: 'Mobilidade', value: 'Esteiras de borracha' },
      { key: 'Capacidade', value: '100 a 220 t/h' },
      { key: 'Decks', value: '2 níveis' },
      { key: 'Alimentador', value: 'Vibratório integrado' },
      { key: 'Acionamento', value: 'Diesel-elétrico' },
      { key: 'Ano de Fabricação', value: '2024' }
    ],
    inStock: true,
    deliveryTime: '20-35 dias'
  },
  {
    id: '8',
    name: 'Moinho de Impacto MI-90 Heavy Duty',
    category: 'Moagem',
    price: 1185000,
    currency: 'EUR',
    image: 'src/img/moinho.jpg',
    imageAlt: 'Moinho de impacto heavy duty para material abrasivo',
    description: 'Configuração reforçada para linha pesada, ideal para processamento contínuo de materiais abrasivos na construção.',
    specifications: [
      { key: 'Diâmetro do Rotor', value: '900 mm' },
      { key: 'Capacidade', value: '160 a 300 t/h' },
      { key: 'Potência Instalada', value: '250 kW' },
      { key: 'Câmara de Britagem', value: 'Revestimento antiabrasivo' },
      { key: 'Aplicação', value: 'Brita 1, pedrisco e areia' },
      { key: 'Ano de Fabricação', value: '2024' }
    ],
    inStock: true,
    deliveryTime: '35-50 dias'
  }
];

export function formatPrice(_price: number): string {
  return 'A consultar';
}

export function getEquipmentById(id: string): Equipment | undefined {
  return equipment.find(item => item.id === id);
}

export function getEquipmentByCategory(category: string): Equipment[] {
  return equipment.filter(item => item.category === category);
}

export function getCategories(): string[] {
  const categories = new Set(equipment.map(item => item.category));
  return Array.from(categories);
}
