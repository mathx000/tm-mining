import type { Equipment } from './types/index.js';

export const equipment: Equipment[] = [
  // HP300 mantido como primeiro anúncio
  {
    id: '9',
    name: 'Britador de cone Metso Nordberg HP300',
    category: 'Britagem',
    price: 1100000,
    currency: 'EUR',
    images: [
      'src/img/Britador de cone Metso Nordberg HP300/mining-equipment-cone-crusher-Metso-Nordberg-HP300---1775479789395709087_big--26040615471755976000.jpg',
      'src/img/Britador de cone Metso Nordberg HP300/mining-equipment-cone-crusher-Metso-Nordberg-HP300---1775479792434577443_big--26040615471755976000.jpg',
      'src/img/Britador de cone Metso Nordberg HP300/mining-equipment-cone-crusher-Metso-Nordberg-HP300---1775479795036690540_big--26040615471755976000.jpg',
      'src/img/Britador de cone Metso Nordberg HP300/mining-equipment-cone-crusher-Metso-Nordberg-HP300---1775479798328260871_big--26040615471755976000.jpg',
      'src/img/Britador de cone Metso Nordberg HP300/mining-equipment-cone-crusher-Metso-Nordberg-HP300---1775479800776863137_big--26040615471755976000.jpg',
      'src/img/Britador de cone Metso Nordberg HP300/mining-equipment-cone-crusher-Metso-Nordberg-HP300---1775479802886029255_big--26040615471755976000.jpg'
    ],
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
    images: [
      'src/img/Britadeira de maxilas Allis-Chalmers 1100 x 600/mining-equipment-jaw-crusher-Allis-Chalmers-1100-x-600---1753433642974890894_big--25072511512641899000.jpg',
      'src/img/Britadeira de maxilas Allis-Chalmers 1100 x 600/mining-equipment-jaw-crusher-Allis-Chalmers-1100-x-600---1753433650645811899_big--25072511512641899000.jpg',
      'src/img/Britadeira de maxilas Allis-Chalmers 1100 x 600/mining-equipment-jaw-crusher-Allis-Chalmers-1100-x-600---1753433653505448668_big--25072511512641899000.jpg',
      'src/img/Britadeira de maxilas Allis-Chalmers 1100 x 600/mining-equipment-jaw-crusher-Allis-Chalmers-1100-x-600---1753433729268109321_big--25072511512641899000.jpg'
    ],
    image: 'src/img/Britadeira de maxilas Allis-Chalmers 1100 x 600.jpg',
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
    images: [
      'src/img/Britadeira de maxilas Metso Nordberg C125/mining-equipment-jaw-crusher-Metso-Nordberg-C125---1776527619267554632_big--26041818502114329900.jpg',
      'src/img/Britadeira de maxilas Metso Nordberg C125/mining-equipment-jaw-crusher-Metso-Nordberg-C125---1776527628967942893_big--26041818502114329900.jpg',
      'src/img/Britadeira de maxilas Metso Nordberg C125/mining-equipment-jaw-crusher-Metso-Nordberg-C125---1776527632533784770_big--26041818502114329900.jpg'
    ],
    image: 'src/img/Britadeira de maxilas Metso Nordberg C125.jpg',
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
    images: [
      'src/img/Britadeira de maxilas Parker 36X24/mining-equipment-jaw-crusher-Parker-36X24---1753434957114432233_big--25072512034239077200.jpg',
      'src/img/Britadeira de maxilas Parker 36X24/mining-equipment-jaw-crusher-Parker-36X24---1753434960435891542_big--25072512034239077200.jpg',
      'src/img/Britadeira de maxilas Parker 36X24/mining-equipment-jaw-crusher-Parker-36X24---1753434964443089835_big--25072512034239077200.jpg',
      'src/img/Britadeira de maxilas Parker 36X24/mining-equipment-jaw-crusher-Parker-36X24---1753434966295616299_big--25072512034239077200.jpg',
      'src/img/Britadeira de maxilas Parker 36X24/mining-equipment-jaw-crusher-Parker-36X24---1753434974807326617_big--25072512034239077200.jpg',
      'src/img/Britadeira de maxilas Parker 36X24/mining-equipment-jaw-crusher-Parker-36X24---1753434978166177039_big--25072512034239077200.jpg',
      'src/img/Britadeira de maxilas Parker 36X24/mining-equipment-jaw-crusher-Parker-36X24---1753434980823490094_big--25072512034239077200.jpg',
      'src/img/Britadeira de maxilas Parker 36X24/mining-equipment-jaw-crusher-Parker-36X24---1753434984369616262_big--25072512034239077200.jpg',
      'src/img/Britadeira de maxilas Parker 36X24/mining-equipment-jaw-crusher-Parker-36X24---1753434990328898006_big--25072512034239077200.jpg',
      'src/img/Britadeira de maxilas Parker 36X24/mining-equipment-jaw-crusher-Parker-36X24---1753434993520016248_big--25072512034239077200.jpg',
      'src/img/Britadeira de maxilas Parker 36X24/mining-equipment-jaw-crusher-Parker-36X24---1753434997747955744_big--25072512034239077200.jpg',
      'src/img/Britadeira de maxilas Parker 36X24/mining-equipment-jaw-crusher-Parker-36X24---1753435001383043277_big--25072512034239077200.jpg'
    ],
    image: 'src/img/Britadeira de maxilas Parker 36X24.jpg',
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
    images: [
      'src/img/Britadeira de maxilas Sany SANYO 1050 x 750/mining-equipment-jaw-crusher-Sany-SANYO-1050-x-750---1753436685995204237_big--25072512441325557300.jpg',
      'src/img/Britadeira de maxilas Sany SANYO 1050 x 750/mining-equipment-jaw-crusher-Sany-SANYO-1050-x-750---1753436688944375431_big--25072512441325557300.jpg',
      'src/img/Britadeira de maxilas Sany SANYO 1050 x 750/mining-equipment-jaw-crusher-Sany-SANYO-1050-x-750---1753436691832326180_big--25072512441325557300.jpg',
      'src/img/Britadeira de maxilas Sany SANYO 1050 x 750/mining-equipment-jaw-crusher-Sany-SANYO-1050-x-750---1753436693731228856_big--25072512441325557300.jpg',
      'src/img/Britadeira de maxilas Sany SANYO 1050 x 750/mining-equipment-jaw-crusher-Sany-SANYO-1050-x-750---1753436695493949340_big--25072512441325557300.jpg',
      'src/img/Britadeira de maxilas Sany SANYO 1050 x 750/mining-equipment-jaw-crusher-Sany-SANYO-1050-x-750---1753436697514731508_big--25072512441325557300.jpg',
      'src/img/Britadeira de maxilas Sany SANYO 1050 x 750/mining-equipment-jaw-crusher-Sany-SANYO-1050-x-750---1753436699350547658_big--25072512441325557300.jpg',
      'src/img/Britadeira de maxilas Sany SANYO 1050 x 750/mining-equipment-jaw-crusher-Sany-SANYO-1050-x-750---1753436701670445050_big--25072512441325557300.jpg'
    ],
    image: 'src/img/Britadeira de maxilas Sany SANYO 1050 x 750.jpg',
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
    images: [
      'src/img/Britador de cone Metso HP200/mining-equipment-cone-crusher-Metso-HP200---1775474908792772306_big--25072512365776953400.jpg',
      'src/img/Britador de cone Metso HP200/mining-equipment-cone-crusher-Metso-HP200---1775474910810235847_big--25072512365776953400.jpg',
      'src/img/Britador de cone Metso HP200/mining-equipment-cone-crusher-Metso-HP200---1775474912492471159_big--25072512365776953400.jpg',
      'src/img/Britador de cone Metso HP200/mining-equipment-cone-crusher-Metso-HP200---1775474914150534191_big--25072512365776953400.jpg',
      'src/img/Britador de cone Metso HP200/mining-equipment-cone-crusher-Metso-HP200---1775474915879593959_big--25072512365776953400.jpg',
      'src/img/Britador de cone Metso HP200/mining-equipment-cone-crusher-Metso-HP200---1775474917978658578_big--25072512365776953400.jpg',
      'src/img/Britador de cone Metso HP200/mining-equipment-cone-crusher-Metso-HP200---1775474919583634687_big--25072512365776953400.jpg'
    ],
    image: 'src/img/Britador de cone Metso HP200.jpg',
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
    images: [
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514727234366687_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514732252004136_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514737279886882_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514746029453618_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514750063921514_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514786726304280_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514801230781969_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514808826097812_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514818223245754_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514825759866812_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514830472859123_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514834262220014_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514839335875815_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514844041632225_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514856586204606_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514870589304224_big--26073119125313860700.jpg',
      'src/img/Britador de cone Sandvik CH430/mining-equipment-cone-crusher-Sandvik-CH430---1785514876880389503_big--26073119125313860700.jpg'
    ],
    image: 'src/img/Britador de cone Sandvik CH430.jpg',
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
    images: [
      'src/img/Britador de cone Sandvik cs 430/mining-equipment-cone-crusher-Sandvik-cs-430---1785513838641086734_big--26073119000500099300.jpg',
      'src/img/Britador de cone Sandvik cs 430/mining-equipment-cone-crusher-Sandvik-cs-430---1785513842667103938_big--26073119000500099300.jpg',
      'src/img/Britador de cone Sandvik cs 430/mining-equipment-cone-crusher-Sandvik-cs-430---1785513862732823792_big--26073119000500099300.jpg',
      'src/img/Britador de cone Sandvik cs 430/mining-equipment-cone-crusher-Sandvik-cs-430---1785513868720403988_big--26073119000500099300.jpg',
      'src/img/Britador de cone Sandvik cs 430/mining-equipment-cone-crusher-Sandvik-cs-430---1785513878952189312_big--26073119000500099300.jpg',
      'src/img/Britador de cone Sandvik cs 430/mining-equipment-cone-crusher-Sandvik-cs-430---1785513895759736027_big--26073119000500099300.jpg',
      'src/img/Britador de cone Sandvik cs 430/mining-equipment-cone-crusher-Sandvik-cs-430---1785513903109288770_big--26073119000500099300.jpg',
      'src/img/Britador de cone Sandvik cs 430/mining-equipment-cone-crusher-Sandvik-cs-430---1785513925270051690_big--26073119000500099300.jpg',
      'src/img/Britador de cone Sandvik cs 430/mining-equipment-cone-crusher-Sandvik-cs-430---1785513930803251147_big--26073119000500099300.jpg',
      'src/img/Britador de cone Sandvik cs 430/mining-equipment-cone-crusher-Sandvik-cs-430---1785513947727358460_big--26073119000500099300.jpg',
      'src/img/Britador de cone Sandvik cs 430/mining-equipment-cone-crusher-Sandvik-cs-430---1785513954574197010_big--26073119000500099300.jpg',
      'src/img/Britador de cone Sandvik cs 430/mining-equipment-cone-crusher-Sandvik-cs-430---1785513968046483260_big--26073119000500099300.jpg',
      'src/img/Britador de cone Sandvik cs 430/mining-equipment-cone-crusher-Sandvik-cs-430---1785513978798102613_big--26073119000500099300.jpg',
      'src/img/Britador de cone Sandvik cs 430/mining-equipment-cone-crusher-Sandvik-cs-430---1785513984896870346_big--26073119000500099300.jpg'
    ],
    image: 'src/img/Britador de cone Sandvik cs 430.jpg',
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
    images: [
      'src/img/Escavadora de rastos Komatsu PC600/construction-equipment-tracked-excavator-Komatsu-PC600---1775479460191271840_big--26040615412242084700.jpg',
      'src/img/Escavadora de rastos Komatsu PC600/construction-equipment-tracked-excavator-Komatsu-PC600---1775479462569458105_big--26040615412242084700.jpg',
      'src/img/Escavadora de rastos Komatsu PC600/construction-equipment-tracked-excavator-Komatsu-PC600---1775479464769798428_big--26040615412242084700.jpg',
      'src/img/Escavadora de rastos Komatsu PC600/construction-equipment-tracked-excavator-Komatsu-PC600---1775479467194591037_big--26040615412242084700.jpg',
      'src/img/Escavadora de rastos Komatsu PC600/construction-equipment-tracked-excavator-Komatsu-PC600---1775479469959832904_big--26040615412242084700.jpg',
      'src/img/Escavadora de rastos Komatsu PC600/construction-equipment-tracked-excavator-Komatsu-PC600---1775479474617103108_big--26040615412242084700.jpg',
      'src/img/Escavadora de rastos Komatsu PC600/construction-equipment-tracked-excavator-Komatsu-PC600---1775479476394214251_big--26040615412242084700.jpg',
      'src/img/Escavadora de rastos Komatsu PC600/construction-equipment-tracked-excavator-Komatsu-PC600---1775479478745364340_big--26040615412242084700.jpg',
      'src/img/Escavadora de rastos Komatsu PC600/construction-equipment-tracked-excavator-Komatsu-PC600---1775479481250341319_big--26040615412242084700.jpg'
    ],
    image: 'src/img/Escavadora de rastos Komatsu PC600.jpg',
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
    images: [
      'src/img/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1752576057810424736_big--25071513352135324000.jpg',
      'src/img/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1752576060371644268_big--25071513352135324000.jpg',
      'src/img/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1752576063210320486_big--25071513352135324000.jpg',
      'src/img/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1752576067357841748_big--25071513352135324000.jpg',
      'src/img/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1752576073823202635_big--25071513352135324000.jpg',
      'src/img/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1752576078530703106_big--25071513352135324000.jpg',
      'src/img/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1752576081196050761_big--25071513352135324000.jpg',
      'src/img/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1752576083720306020_big--25071513352135324000.jpg',
      'src/img/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1752576090775798628_big--25071513352135324000.jpg',
      'src/img/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1752576092958642949_big--25071513352135324000.jpg',
      'src/img/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1752576095029228017_big--25071513352135324000.jpg',
      'src/img/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1752576097596030680_big--25071513352135324000.jpg',
      'src/img/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1752576099685999822_big--25071513352135324000.jpg',
      'src/img/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1752576101751861604_big--25071513352135324000.jpg',
      'src/img/Mini-escavadora Kubota KX057-4/construction-equipment-mini-excavator-Kubota-KX057-4---1752576104057562017_big--25071513352135324000.jpg'
    ],
    image: 'src/img/Mini-escavadora Kubota KX057-4.jpg',
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
    name: 'Mini-escavadora Yanner Vio 55',
    category: 'Escavação',
    price: 0,
    currency: 'EUR',
    image: 'src/img/mini-escavadora-yanner-vio-55.jpg',
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
    images: [
      
    ],
    image: 'src/img/Triturador de impacto de eixo vertical Metso Barmac B9100SE VSI.jpg',
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
    images: [
      'src/img/Trituradora de rotor Metso BARMAC B6150SE VSI/mining-equipment-rotor-crusher-Metso-BARMAC-B6150SE-VSI---1753462035967351630_big--25072519453264259200.jpg',
      'src/img/Trituradora de rotor Metso BARMAC B6150SE VSI/mining-equipment-rotor-crusher-Metso-BARMAC-B6150SE-VSI---1753462037977919886_big--25072519453264259200.jpg',
      'src/img/Trituradora de rotor Metso BARMAC B6150SE VSI/mining-equipment-rotor-crusher-Metso-BARMAC-B6150SE-VSI---1753462039714660532_big--25072519453264259200.jpg',
      'src/img/Trituradora de rotor Metso BARMAC B6150SE VSI/mining-equipment-rotor-crusher-Metso-BARMAC-B6150SE-VSI---1753462042015642843_big--25072519453264259200.jpg',
      'src/img/Trituradora de rotor Metso BARMAC B6150SE VSI/mining-equipment-rotor-crusher-Metso-BARMAC-B6150SE-VSI---1753462043949640662_big--25072519453264259200.jpg',
      'src/img/Trituradora de rotor Metso BARMAC B6150SE VSI/mining-equipment-rotor-crusher-Metso-BARMAC-B6150SE-VSI---1753462046074655906_big--25072519453264259200.jpg',
      'src/img/Trituradora de rotor Metso BARMAC B6150SE VSI/mining-equipment-rotor-crusher-Metso-BARMAC-B6150SE-VSI---1753462048322934446_big--25072519453264259200.jpg'
    ],
    image: 'src/img/Trituradora de rotor Metso BARMAC B6150SE VSI.jpg',
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
