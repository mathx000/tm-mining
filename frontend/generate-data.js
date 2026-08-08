const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'src', 'img');

// Mapear cada pasta de máquina com suas imagens
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

console.log(JSON.stringify(machineImages, null, 2));
