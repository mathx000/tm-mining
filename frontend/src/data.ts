import type { Equipment } from './types/index.js';

export const equipment: Equipment[] = [
  {
    id: '1',
    name: 'Escavadeira Hidraulica ZX 350LC',
    category: 'Escavadeira',
    price: 1289000,
    currency: 'EUR',
    image: 'src/img/escavadeira.jpg',
    imageAlt: 'Escavadeira hidraulica em frente de mineracao',
    description: 'Plataforma de escavacao para operacoes de alto volume em rocha e solo compactado, com excelente rendimento por hora.',
    specifications: [
      { key: 'Peso Operacional', value: '34.700 kg' },
      { key: 'Profundidade de Escavacao', value: '7.380 mm' },
      { key: 'Potencia', value: '286 HP' },
      { key: 'Combustível', value: 'Diesel' },
      { key: 'Ano de Fabricacao', value: '2024' },
      { key: 'Condição', value: 'Novo' }
    ],
    inStock: true,
    deliveryTime: '20-30 dias'
  },
  {
    id: '2',
    name: 'Britador Primario de Mandibula 120x90',
    category: 'Britagem',
    price: 945000,
    currency: 'EUR',
    image: 'src/img/primario.png',
    imageAlt: 'Britador primario para agregados',
    description: 'Unidade de britagem primaria para producao de agregados de construcao com alta resistencia estrutural e regulagem precisa.',
    specifications: [
      { key: 'Abertura de Alimentacao', value: '1200 x 900 mm' },
      { key: 'Producao Nominal', value: '150 a 300 t/h' },
      { key: 'Potencia Instalada', value: '132 kW' },
      { key: 'Faixa de Regulagem', value: '80 a 180 mm' },
      { key: 'Combustível', value: 'Diesel' },
      { key: 'Ano de Fabricacao', value: '2024' }
    ],
    inStock: true,
    deliveryTime: '30-45 dias'
  },
  {
    id: '3',
    name: 'Peneira Vibratoria CRIBO 3 Decks',
    category: 'Classificacao',
    price: 689000,
    currency: 'EUR',
    image: 'src/img/cribo.jpg',
    imageAlt: 'Peneira vibratoria cribo em operacao',
    description: 'Sistema de classificacao de agregados para controle granulometrico fino em usinas de concreto e pavimentacao.',
    specifications: [
      { key: 'Area de Peneiramento', value: '6.0 m x 1.8 m' },
      { key: 'Numero de Decks', value: '3 niveis' },
      { key: 'Capacidade', value: '120 a 260 t/h' },
      { key: 'Acionamento', value: 'Eletrico 380V' },
      { key: 'Estrutura', value: 'Aco reforcado' },
      { key: 'Ano de Fabricacao', value: '2024' }
    ],
    inStock: true,
    deliveryTime: '15-25 dias'
  },
  {
    id: '4',
    name: 'Moinho de Impacto Serie MI-75',
    category: 'Moagem',
    price: 782000,
    currency: 'EUR',
    image: 'src/img/moinho.jpg',
    imageAlt: 'Moinho de impacto industrial para britagem fina',
    description: 'Equipamento para cominuicao secundaria e terciaria com curva granulometrica estavel para materiais de construcao.',
    specifications: [
      { key: 'Diametro do Rotor', value: '750 mm' },
      { key: 'Faixa de Alimentacao', value: '0 a 90 mm' },
      { key: 'Potencia Instalada', value: '160 kW' },
      { key: 'Producao Nominal', value: '90 a 180 t/h' },
      { key: 'Material de Desgaste', value: 'Liga de alto cromo' },
      { key: 'Ano de Fabricacao', value: '2024' }
    ],
    inStock: true,
    deliveryTime: '25-40 dias'
  },
  {
    id: '5',
    name: 'Escavadeira Hidraulica ZX 240LC',
    category: 'Transporte',
    price: 979000,
    currency: 'EUR',
    image: 'src/img/escavadeira.jpg',
    imageAlt: 'Escavadeira hidraulica para obras civis',
    description: 'Versao intermediaria para construcao civil pesada com baixo consumo e alta produtividade em ciclo combinado.',
    specifications: [
      { key: 'Peso Operacional', value: '24.900 kg' },
      { key: 'Capacidade da Cacamba', value: '1.20 m3' },
      { key: 'Potencia', value: '177 HP' },
      { key: 'Profundidade de Escavacao', value: '6.620 mm' },
      { key: 'Combustível', value: 'Diesel' },
      { key: 'Ano de Fabricacao', value: '2024' }
    ],
    inStock: true,
    deliveryTime: '12-20 dias'
  },
  {
    id: '6',
    name: 'Britador Primario Compacto 90x60',
    category: 'Britagem',
    price: 598000,
    currency: 'EUR',
    image: 'src/img/primario.png',
    imageAlt: 'Britador primario compacto para canteiro',
    description: 'Modelo compacto para pedreiras de medio porte e canteiros de infraestrutura com montagem rapida.',
    specifications: [
      { key: 'Abertura de Alimentacao', value: '900 x 600 mm' },
      { key: 'Capacidade', value: '90 a 180 t/h' },
      { key: 'Potencia Instalada', value: '90 kW' },
      { key: 'Sistema de Ajuste', value: 'Hidraulico' },
      { key: 'Montagem', value: 'Skid modular' },
      { key: 'Ano de Fabricacao', value: '2024' }
    ],
    inStock: false,
    deliveryTime: '40-55 dias'
  },
  {
    id: '7',
    name: 'Peneira Vibratoria CRIBO Mobile',
    category: 'Classificacao',
    price: 734000,
    currency: 'EUR',
    image: 'src/img/cribo.jpg',
    imageAlt: 'Peneira vibratoria mobile para agregados',
    description: 'Planta movel de classificacao para producao continua de brita graduada, areia industrial e material de base.',
    specifications: [
      { key: 'Mobilidade', value: 'Esteiras de borracha' },
      { key: 'Capacidade', value: '100 a 220 t/h' },
      { key: 'Decks', value: '2 niveis' },
      { key: 'Alimentador', value: 'Vibratorio integrado' },
      { key: 'Acionamento', value: 'Diesel-eletrico' },
      { key: 'Ano de Fabricacao', value: '2024' }
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
    description: 'Configuracao reforcada para linha pesada, ideal para processamento continuo de materiais abrasivos na construcao.',
    specifications: [
      { key: 'Diametro do Rotor', value: '900 mm' },
      { key: 'Capacidade', value: '160 a 300 t/h' },
      { key: 'Potencia Instalada', value: '250 kW' },
      { key: 'Camara de Britagem', value: 'Revestimento antiabrasivo' },
      { key: 'Aplicacao', value: 'Brita 1, pedrisco e areia' },
      { key: 'Ano de Fabricacao', value: '2024' }
    ],
    inStock: true,
    deliveryTime: '35-50 dias'
  }
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
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
