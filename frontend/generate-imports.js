const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'src', 'img');
let fileContent = '';
const imageMap = {};

const folders = fs.readdirSync(imgDir)
  .filter(f => fs.statSync(path.join(imgDir, f)).isDirectory())
  .sort();

// Gerar imports
folders.forEach(folder => {
  const folderPath = path.join(imgDir, folder);
  const images = fs.readdirSync(folderPath)
    .filter(f => f.endsWith('.jpg'))
    .sort();
  
  const folderKey = folder
    .replace(/[^a-zA-Z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
  
  imageMap[folder] = [];
  
  images.forEach((img, idx) => {
    const varName = `img_${folderKey}_${idx}`;
    fileContent += `import ${varName} from './img/${folder}/${img}';\n`;
    imageMap[folder].push(varName);
  });
});

// Gerar export do mapa
fileContent += '\nexport const imageMap = {\n';
Object.entries(imageMap).forEach(([folder, vars]) => {
  fileContent += `  '${folder}': [${vars.join(', ')}],\n`;
});
fileContent += '};\n';

// Escrever arquivo
const outputPath = path.join(__dirname, 'src', 'images-map.ts');
fs.writeFileSync(outputPath, fileContent);
console.log(`✓ Gerado ${outputPath}`);
console.log(`✓ ${Object.keys(imageMap).length} máquinas`);
console.log(`✓ ${Object.values(imageMap).reduce((a, b) => a + b.length, 0)} imagens totais`);
