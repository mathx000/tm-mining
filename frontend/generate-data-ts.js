const fs = require('fs');
const path = require('path');

// Ler o data.ts atual
const dataPath = path.join(__dirname, 'src', 'data.ts');
let dataContent = fs.readFileSync(dataPath, 'utf-8');

// Mapear máquinas com suas imagens
const imgDir = path.join(__dirname, 'src', 'img');
const machineImages = {};

const folders = fs.readdirSync(imgDir).filter(f => {
  return fs.statSync(path.join(imgDir, f)).isDirectory();
});

folders.forEach(folder => {
  const folderPath = path.join(imgDir, folder);
  const images = fs.readdirSync(folderPath)
    .filter(f => f.endsWith('.jpg'))
    .sort()
    .map(f => `src/img/${folder}/${f}`);
  
  machineImages[folder] = images;
});

// Para cada máquina, encontrar e adicionar o array images
Object.entries(machineImages).forEach(([machineName, images]) => {
  // Procurar a máquina no data.ts
  const imageArrayStr = `[\n      ${images.map(img => `'${img}'`).join(',\n      ')}\n    ]`;
  
  // Procurar a linha que começa com "image:" e está no objeto da máquina
  const pattern = new RegExp(
    `(name: '${machineName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',.*?category.*?price.*?currency.*?)\n\\s+image: '[^']+',`,
    's'
  );
  
  if (pattern.test(dataContent)) {
    const replacement = `$1\n    images: ${imageArrayStr},\n    image: '${images[0]}',`;
    dataContent = dataContent.replace(pattern, replacement);
  }
});

// Escrever o novo data.ts
fs.writeFileSync(
  path.join(__dirname, 'src', 'data.ts'),
  dataContent
);

console.log('✓ data.ts atualizado com arrays de imagens');
