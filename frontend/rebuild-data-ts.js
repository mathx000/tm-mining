const fs = require('fs');
const path = require('path');

// Ler o mapa de imagens
const imagesMapPath = path.join(__dirname, 'src', 'images-map.ts');
const imagesMapContent = fs.readFileSync(imagesMapPath, 'utf-8');

// Ler especificações das máquinas
const machinesPath = path.join(__dirname, 'src', 'machines_specifications.json');
const machinesData = JSON.parse(fs.readFileSync(machinesPath, 'utf-8'));

function safeValue(value) {
  return String(value).replace(/'/g, "\\'");
}

function pushIfValue(target, key, value) {
  if (value === undefined || value === null) {
    return;
  }

  const trimmed = String(value).trim();
  if (!trimmed || trimmed.toLowerCase() === 'n/a') {
    return;
  }

  target.push({ key, value: trimmed });
}

function buildSpecsList(machine) {
  const specsRaw = machine.specifications;

  if (!specsRaw || typeof specsRaw !== 'object' || Array.isArray(specsRaw)) {
    return [{ key: 'Estado', value: 'Usado' }];
  }

  const specs = [];
  pushIfValue(specs, 'Marca', specsRaw.marca);
  pushIfValue(specs, 'Modelo', specsRaw.modelo);
  pushIfValue(specs, 'Tipo', specsRaw.tipo);
  pushIfValue(specs, 'Ano', specsRaw.ano);
  pushIfValue(specs, 'Primeiro registo', specsRaw.primeiroRegisto);
  pushIfValue(specs, 'Localização', specsRaw.localizacao);
  pushIfValue(specs, 'Data', specsRaw.dataDiaria);
  pushIfValue(specs, 'Machineryline ID', specsRaw.machinerylineId);

  if (specsRaw.motor && typeof specsRaw.motor === 'object') {
    pushIfValue(specs, 'Motor', specsRaw.motor.marca);
    pushIfValue(specs, 'Potência', specsRaw.motor.potencia);
  }

  pushIfValue(specs, 'Estado', specsRaw.estado);
  pushIfValue(specs, 'Inspeção técnica', specsRaw.tecnicalControl);
  pushIfValue(specs, 'Cor', specsRaw.cor);
  pushIfValue(specs, 'Horas de utilização', specsRaw.horasUtilizacao);
  pushIfValue(specs, 'Serviços adicionais', specsRaw.servicosAdicionais);
  pushIfValue(specs, 'Informação adicional', specsRaw.informacaoAdicional);

  return specs.length > 0 ? specs : [{ key: 'Estado', value: 'Usado' }];
}

// Ler data.ts atual para pegar informações adicionais
const dataPath = path.join(__dirname, 'src', 'data.ts');
const dataContent = fs.readFileSync(dataPath, 'utf-8');

// Extrair imageMap do imagesMapContent
const imageMapMatch = imagesMapContent.match(/export const imageMap = \{[\s\S]*?\};/);
const imageMapCode = imageMapMatch ? imageMapMatch[0] : '';

// Criar novo data.ts
let output = "import type { Equipment } from './types/index.js';\n";
output += imagesMapContent + '\n\n';

output += "export const equipment: Equipment[] = [\n";

// HP300 - primeiro anúncio
output += `  {
    id: '9',
    name: 'Britador de cone Metso Nordberg HP300',
    category: 'Britagem',
    price: 1100000,
    currency: 'EUR',
    images: imageMap['Britador de cone Metso Nordberg HP300'],
    image: imageMap['Britador de cone Metso Nordberg HP300'][0],
    imageAlt: 'Britador de cone Metso Nordberg HP300 em área industrial',
    description: 'Britador de cone para britagem secundária e terciária, com alta confiabilidade operacional e excelente desempenho em produção contínua.',
    specifications: [
      { key: 'Marca', value: 'Metso' },
      { key: 'Modelo', value: 'Nordberg HP300' },
      { key: 'Tipo', value: 'Britador de cone' },
      { key: 'Ano', value: '2018-01' },
      { key: 'Localização', value: 'Portugal - Mangide, 143 km de Portugal/Porto' },
      { key: 'Data de publicação', value: '16/07/2026' },
      { key: 'Machineryline ID', value: 'PR50312' },
      { key: 'Estado', value: 'usados' },
      { key: 'Serviços adicionais', value: 'Serviço de entrega de veículos' },
      { key: 'Cor', value: 'bege' },
      { key: 'Informação adicional', value: 'Máquina em excelente estado, com muito pouco uso. Inclui central de lubrificação e hidráulica, motor elétrico, quadro elétrico e chassis da máquina.' }
    ],
    inStock: true,
    deliveryTime: 'Disponibilidade imediata'
  },\n`;

// Mapear máquinas
const machineMap = {};
machinesData.forEach((machine, idx) => {
  const id = idx < 8 ? String(idx + 1) : String(idx + 2); // IDs: 1-8, 10-13 (pulando 9)
  machineMap[machine.name] = { id, data: machine };
});

// Adicionar máquinas restantes
Object.entries(machineMap).forEach(([machineName, { id, data: specs }]) => {
  if (machineName === 'Britador de cone Metso Nordberg HP300') return; // Já adicionado
  
  const imageVar = `imageMap['${machineName}']`;
  const specsList = buildSpecsList(specs);
  
  output += `  {
    id: '${id}',
    name: '${machineName}',
    category: '${specs.category}',
    price: 0,
    currency: 'EUR',
    images: ${imageVar},
    image: ${imageVar}[0],
    imageAlt: '${machineName}',
    description: '${specs.description || 'Equipamento disponível'}',
    specifications: [\n`;

  specsList.forEach((entry) => {
    output += `      { key: '${safeValue(entry.key)}', value: '${safeValue(entry.value)}' },\n`;
  });
  
  output += `    ],
    inStock: true,
    deliveryTime: 'Consultar'
  },\n`;
});

output += "];\n\n";

// Adicionar funções helper
output += `export function formatPrice(_price: number): string {
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
}`;

// Escrever novo data.ts
fs.writeFileSync(dataPath, output);
console.log('✓ data.ts reconstruído com imports de imagens');
console.log(`✓ ${Object.keys(machineMap).length} máquinas configuradas`);
