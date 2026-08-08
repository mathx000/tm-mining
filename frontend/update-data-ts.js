const fs = require('fs');
const path = require('path');

// Mapear imagens por máquina
const imgDir = path.join(__dirname, 'src', 'img');
const machineImages = {};

const folders = fs.readdirSync(imgDir)
  .filter(f => fs.statSync(path.join(imgDir, f)).isDirectory())
  .sort();

folders.forEach(folder => {
  const folderPath = path.join(imgDir, folder);
  const images = fs.readdirSync(folderPath)
    .filter(f => f.endsWith('.jpg'))
    .sort()
    .map(f => `src/img/${folder}/${f}`);
  
  machineImages[folder] = images;
});

// Ler data.ts atual
const dataPath = path.join(__dirname, 'src', 'data.ts');
const dataContent = fs.readFileSync(dataPath, 'utf-8');

// Para cada máquina, adicionar field images
let output = dataContent;

Object.entries(machineImages).forEach(([machineName, images]) => {
  // Criar string do array
  const imagesArray = `[\n      ${images.map(img => `'${img}'`).join(',\n      ')}\n    ]`;
  
  // Procurar "image: '...'" da máquina e adicionar images antes
  const regex = new RegExp(
    `(name: '${machineName.replace(/[.*+?^${}()|\\[\\]\\\\]/g, '\\$&')}',\\s+category:\\s+'[^']+',\\s+price:\\s+\\d+,\\s+currency:\\s+'[^']+',\\s+)image:`,
    'g'
  );
  
  output = output.replace(regex, `$1images: ${imagesArray},\n    image:`);
});

fs.writeFileSync(dataPath, output);
console.log('✓ data.ts atualizado com arrays de imagens');
