import type { Equipment } from './types/index.js';

export const equipment: Equipment[] = [
  // HP300 mantido como primeiro anúncio
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

  // Novas máquinas
  {
    id: '1',
    name: 'Britadeira de maxilas Allis-Chalmers 1100 x 600',
    category: 'Britagem',
    price: 0,
    currency: 'EUR',
    image: 'src/machines/Britadeira de maxilas Allis-Chalmers 1100 x 600/mining-equipment-jaw-crusher-Allis-Chalmers-1100-x-600---1753433642974890894_big--25072511512641899000.jpg',
    imageAlt: 'Britadeira de maxilas Allis-Chalmers 1100 x 600',
    description: 'Britador em muito bom estado',
    specifications: [
      { key: 'Marca', value: 'Allis-Chalmers' },
      { key: 'Modelo', value: '1100 x 600' },
      { key: 'Tipo', value: 'Britadeira de maxilas' },
      { key: 'Localização', value: 'Portugal - Mangide, 143 km to Portugal/Porto' },
      { key: 'Data de Publicação', value: '16/07/2026' },
      { key: 'MachinerylineID', value: 'QK46728' },
      { key: 'Estado', value: 'Usado' },
      { key: 'Serviços Adicionais', value: 'Serviço de entrega de veículos' }
    ],
    inStock: true,
    deliveryTime: 'Consultar'
  },

  {
    id: '2',
    name: 'Britadeira de maxilas Metso Nordberg C125',
    category: 'Britagem',
    price: 0,
    currency: 'EUR',
    image: 'src/machines/Britadeira de maxilas Metso Nordberg C125/mining-equipment-jaw-crusher-Metso-Nordberg-C125---1750707149308813299_big--24032512301823500800.jpg',
    imageAlt: 'Britadeira de maxilas Metso Nordberg C125',
    description: 'Britadeira de maxilas com 1.250 m/h de horas de utilização',
    specifications: [
      { key: 'Marca', value: 'Metso' },
      { key: 'Modelo', value: 'Nordberg C125' },
      { key: 'Tipo', value: 'Britadeira de maxilas' },
      { key: 'Ano', value: '2018-04' },
      { key: 'Primeiro Registo', value: '2018-04' },
      { key: 'Horas de Utilização', value: '1.250 m/h' },
      { key: 'Localização', value: 'Portugal - Mangide, 143 km to Portugal/Porto' },
      { key: 'Data de Publicação', value: '17/07/2026' },
      { key: 'MachinerylineID', value: 'DB50490' },
      { key: 'Estado', value: 'Usado' },
      { key: 'Serviços Adicionais', value: 'Serviço de entrega de veículos' }
    ],
    inStock: true,
    deliveryTime: 'Consultar'
  },

  {
    id: '3',
    name: 'Britadeira de maxilas Parker 36X24',
    category: 'Britagem',
    price: 0,
    currency: 'EUR',
    image: 'src/machines/Britadeira de maxilas Parker 36X24/mining-equipment-jaw-crusher-Parker-36X24---1750906816549882618_big--25072511512641899000.jpg',
    imageAlt: 'Britadeira de maxilas Parker 36X24',
    description: 'Britadeira móvel Parker 900x600, completa em muito bom estado',
    specifications: [
      { key: 'Marca', value: 'Parker' },
      { key: 'Modelo', value: '36X24' },
      { key: 'Tipo', value: 'Britadeira de maxilas' },
      { key: 'Ano', value: '1973' },
      { key: 'Localização', value: 'Portugal - Mangide, 143 km to Portugal/Porto' },
      { key: 'Data de Publicação', value: '16/07/2026' },
      { key: 'MachinerylineID', value: 'RU46728' },
      { key: 'Estado', value: 'Usado' },
      { key: 'Serviços Adicionais', value: 'Serviço de entrega de veículos' }
    ],
    inStock: true,
    deliveryTime: 'Consultar'
  },

  {
    id: '4',
    name: 'Britadeira de maxilas Sany SANYO 1050 x 750',
    category: 'Britagem',
    price: 0,
    currency: 'EUR',
    image: 'src/machines/Britadeira de maxilas Sany SANYO 1050 x 750/mining-equipment-jaw-crusher-Sany-SANYO-1050-x-750---1753266873509854123_big--25072511512641899000.jpg',
    imageAlt: 'Britadeira de maxilas Sany SANYO 1050 x 750',
    description: 'Britador SANYYO em muito bom estado com pouco uso',
    specifications: [
      { key: 'Marca', value: 'Sany' },
      { key: 'Modelo', value: 'SANYO 1050 x 750' },
      { key: 'Tipo', value: 'Britadeira de maxilas' },
      { key: 'Localização', value: 'Portugal - Mangide, 143 km to Portugal/Porto' },
      { key: 'Data de Publicação', value: '16/07/2026' },
      { key: 'MachinerylineID', value: 'KG46729' },
      { key: 'Estado', value: 'Usado' },
      { key: 'Serviços Adicionais', value: 'Serviço de entrega de veículos' }
    ],
    inStock: true,
    deliveryTime: 'Consultar'
  },

  {
    id: '5',
    name: 'Britador de cone Metso HP200',
    category: 'Britagem',
    price: 0,
    currency: 'EUR',
    image: 'src/machines/Britador de cone Metso HP200/mining-equipment-cone-crusher-Metso-HP200---1775474908792772306_big--25072512365776953400.jpg',
    imageAlt: 'Britador de cone Metso HP200',
    description: 'HP200 em muito bom estado e com muito pouco uso',
    specifications: [
      { key: 'Marca', value: 'Metso' },
      { key: 'Modelo', value: 'HP200' },
      { key: 'Tipo', value: 'Britador de cone' },
      { key: 'Localização', value: 'Portugal - Mangide, 143 km to Portugal/Porto' },
      { key: 'Data de Publicação', value: '16/07/2026' },
      { key: 'MachinerylineID', value: 'TB46729' },
      { key: 'Estado', value: 'Usado' },
      { key: 'Serviços Adicionais', value: 'Serviço de entrega de veículos' }
    ],
    inStock: true,
    deliveryTime: 'Consultar'
  },

  {
    id: '6',
    name: 'Britador de cone Sandvik CH430',
    category: 'Britagem',
    price: 0,
    currency: 'EUR',
    image: 'src/machines/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1753434122844819357_big--25072511512641899000.jpg',
    imageAlt: 'Britador de cone Sandvik CH430',
    description: 'Britador cônico Sandvik CH 430 em estado imprescindível! Equipado com motor elétrico Siemens, quadro elétrico central de lubrificação e hidráulica, e também com o seu chassi',
    specifications: [
      { key: 'Marca', value: 'Sandvik' },
      { key: 'Modelo', value: 'CH430' },
      { key: 'Tipo', value: 'Britador de cone' },
      { key: 'Ano', value: '2019-01' },
      { key: 'Primeiro Registo', value: '2019-01' },
      { key: 'Localização', value: 'Portugal - Mangide, 143 km to Portugal/Porto' },
      { key: 'Data de Publicação', value: 'Hoje' },
      { key: 'MachinerylineID', value: 'VX51801' },
      { key: 'Motor - Marca', value: 'Siemens' },
      { key: 'Motor - Potência', value: '160 cv (118 kW)' },
      { key: 'Estado', value: 'Usado' },
      { key: 'Controlo Técnico Válido até', value: '2026-07' },
      { key: 'Cor', value: 'Vermelho' },
      { key: 'Serviços Adicionais', value: 'Serviço de entrega de veículos' }
    ],
    inStock: true,
    deliveryTime: 'Consultar'
  },

  {
    id: '7',
    name: 'Britador de cone Sandvik cs 430',
    category: 'Britagem',
    price: 0,
    currency: 'EUR',
    image: 'src/machines/Britador de cone Sandvik cs 430/mining-equipment-cone-crusher-Sandvik-cs-430---1752994055755356308_big--25072511512641899000.jpg',
    imageAlt: 'Britador de cone Sandvik cs 430',
    description: 'Britador cônico Sandvik Cs 430 em estado imprescindível! Equipado com motor elétrico Siemens, quadro elétrico central de lubrificação e hidráulica, e também com o seu chassi',
    specifications: [
      { key: 'Marca', value: 'Sandvik' },
      { key: 'Modelo', value: 'cs 430' },
      { key: 'Tipo', value: 'Britador de cone' },
      { key: 'Ano', value: '2019-01' },
      { key: 'Primeiro Registo', value: '2019-01' },
      { key: 'Horas de Utilização', value: '1.500 m/h' },
      { key: 'Localização', value: 'Portugal - Mangide, 143 km to Portugal/Porto' },
      { key: 'Data de Publicação', value: 'Hoje' },
      { key: 'MachinerylineID', value: 'QM51801' },
      { key: 'Motor - Marca', value: 'Siemens' },
      { key: 'Motor - Potência', value: '218 cv (160 kW)' },
      { key: 'Estado', value: 'Usado' },
      { key: 'Controlo Técnico Válido até', value: '2026-07' },
      { key: 'Serviços Adicionais', value: 'Serviço de entrega de veículos' }
    ],
    inStock: true,
    deliveryTime: 'Consultar'
  },

  {
    id: '8',
    name: 'Escavadora de rastos Komatsu PC600',
    category: 'Escavação',
    price: 0,
    currency: 'EUR',
    image: 'src/machines/Escavadora de rastos Komatsu PC600/construction-equipment-tracked-excavator-Komatsu-PC600---1775479460191271840_big--26040615412242084700.jpg',
    imageAlt: 'Escavadora de rastos Komatsu PC600',
    description: 'A máquina está em bom estado! Escavadora Komatsu PC600 com 12.500 m/h de horas de utilização',
    specifications: [
      { key: 'Marca', value: 'Komatsu' },
      { key: 'Modelo', value: 'PC600' },
      { key: 'Tipo', value: 'Escavadora de rastos' },
      { key: 'Ano', value: '2003-01' },
      { key: 'Horas de Utilização', value: '12.500 m/h' },
      { key: 'Localização', value: 'Portugal - Mangide, 143 km to Portugal/Porto' },
      { key: 'Data de Publicação', value: '17/07/2026' },
      { key: 'MachinerylineID', value: 'GR50312' },
      { key: 'Cor', value: 'Amarelo' },
      { key: 'Estado', value: 'Usado' },
      { key: 'Serviços Adicionais', value: 'Serviço de entrega de veículos' }
    ],
    inStock: true,
    deliveryTime: 'Consultar'
  },

  {
    id: '10',
    name: 'Mini-escavadora Kubota KX057-4',
    category: 'Escavação',
    price: 0,
    currency: 'EUR',
    image: 'src/machines/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1775479219379521703_big--26040615412242084700.jpg',
    imageAlt: 'Mini-escavadora Kubota KX057-4',
    description: 'Mini-escavadora Kubota KX057-4 com pá niveladora incluída',
    specifications: [
      { key: 'Marca', value: 'Kubota' },
      { key: 'Modelo', value: 'KX057-4' },
      { key: 'Tipo', value: 'Mini-escavadora' },
      { key: 'Ano', value: '2017' },
      { key: 'Horas de Utilização', value: '1.600 m/h' },
      { key: 'Localização', value: 'Portugal - Mangide, 143 km to Portugal/Porto' },
      { key: 'Data de Publicação', value: '16/07/2026' },
      { key: 'MachinerylineID', value: 'XV46564' },
      { key: 'Cor', value: 'Cor de laranja' },
      { key: 'Estado', value: 'Usado' },
      { key: 'Equipamento Adicional', value: 'Pá niveladora' },
      { key: 'Serviços Adicionais', value: 'Serviço de entrega de veículos' }
    ],
    inStock: true,
    deliveryTime: 'Consultar'
  },

  {
    id: '11',
    name: 'Mini-escavadora Yanmar Vio 55',
    category: 'Escavação',
    price: 0,
    currency: 'EUR',
    image: 'src/machines/Mini-escavadora Yanmar Vio 55/construction-equipment-mini-excavator-Yanmar-Vio-55---1752994063842887908_big--25072511512641899000.jpg',
    imageAlt: 'Mini-escavadora Yanmar Vio 55',
    description: 'Mini-escavadora Yanmar Vio 55 com lagartas de borracha e tesoura hidráulica',
    specifications: [
      { key: 'Marca', value: 'Yanmar' },
      { key: 'Modelo', value: 'Vio 55' },
      { key: 'Tipo', value: 'Mini-escavadora' },
      { key: 'Ano', value: '2015' },
      { key: 'Horas de Utilização', value: '2.500 m/h' },
      { key: 'Localização', value: 'Portugal - Mangide, 143 km to Portugal/Porto' },
      { key: 'Data de Publicação', value: '16/07/2026' },
      { key: 'MachinerylineID', value: 'QN46329' },
      { key: 'Estado', value: 'Usado' },
      { key: 'Equipamento Adicional', value: 'Lagartas de borracha, Tesoura hidráulica' },
      { key: 'Serviços Adicionais', value: 'Serviço de entrega de veículos' }
    ],
    inStock: true,
    deliveryTime: 'Consultar'
  },

  {
    id: '12',
    name: 'Triturador de impacto de eixo vertical Metso Barmac B9100SE VSI',
    category: 'Trituração',
    price: 0,
    currency: 'EUR',
    image: 'src/machines/Triturador de impacto de eixo vertical Metso Barmac B9100SE VSI/mining-equipment-impact-crusher-vsi-Metso-Barmac-B9100SE-VSI---1750707191609256956_big--24032512301823500800.jpg',
    imageAlt: 'Triturador de impacto de eixo vertical Metso Barmac B9100SE VSI',
    description: 'Triturador de impacto de eixo vertical Metso Barmac B9100SE VSI',
    specifications: [
      { key: 'Marca', value: 'Metso' },
      { key: 'Modelo', value: 'Barmac B9100SE VSI' },
      { key: 'Tipo', value: 'Triturador de impacto de eixo vertical' },
      { key: 'Ano', value: '2018-04' },
      { key: 'Primeiro Registo', value: '2018-04' },
      { key: 'Localização', value: 'Portugal - Mangide, 143 km to Portugal/Porto' },
      { key: 'Data de Publicação', value: '17/07/2026' },
      { key: 'MachinerylineID', value: 'KB50490' },
      { key: 'Estado', value: 'Usado' },
      { key: 'Serviços Adicionais', value: 'Serviço de entrega de veículos' }
    ],
    inStock: true,
    deliveryTime: 'Consultar'
  },

  {
    id: '13',
    name: 'Trituradora de rotor Metso BARMAC B6150SE VSI',
    category: 'Trituração',
    price: 0,
    currency: 'EUR',
    image: 'src/machines/Trituradora de rotor Metso BARMAC B6150SE VSI/mining-equipment-rotor-crusher-vsi-Metso-BARMAC-B6150SE-VSI---1750707206937848810_big--24032512301823500800.jpg',
    imageAlt: 'Trituradora de rotor Metso BARMAC B6150SE VSI',
    description: 'Trituradora de rotor Metso BARMAC B6150SE VSI',
    specifications: [
      { key: 'Marca', value: 'Metso' },
      { key: 'Modelo', value: 'BARMAC B6150SE VSI' },
      { key: 'Tipo', value: 'Trituradora de rotor' },
      { key: 'Localização', value: 'Portugal - Mangide, 143 km to Portugal/Porto' },
      { key: 'Data de Publicação', value: '17/07/2026' },
      { key: 'MachinerylineID', value: 'VE46737' },
      { key: 'Estado', value: 'Usado' },
      { key: 'Serviços Adicionais', value: 'Serviço de entrega de veículos' }
    ],
    inStock: true,
    deliveryTime: 'Consultar'
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
