import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const roots = ["src/img", "src/logo"];
const imageExtensions = new Set([".jpg", ".jpeg", ".png"]);

async function getImageFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const filePath = join(directory, entry.name);
      return entry.isDirectory() ? getImageFiles(filePath) : [filePath];
    }),
  );

  return files.flat().filter((filePath) =>
    imageExtensions.has(filePath.slice(filePath.lastIndexOf(".")).toLowerCase()),
  );
}

let savedBytes = 0;
let optimizedFiles = 0;

for (const root of roots) {
  for (const filePath of await getImageFiles(root)) {
    const source = await readFile(filePath);
    const extension = filePath.slice(filePath.lastIndexOf(".")).toLowerCase();
    const optimized = await sharp(source)
      .rotate()
      .toFormat(extension === ".png" ? "png" : "jpeg", {
        quality: 82,
        progressive: extension !== ".png",
        compressionLevel: extension === ".png" ? 9 : undefined,
      })
      .toBuffer();

    if (optimized.length < source.length) {
      await writeFile(filePath, optimized);
      savedBytes += source.length - optimized.length;
      optimizedFiles += 1;
    }
  }
}

console.log(`Optimized ${optimizedFiles} files and saved ${savedBytes} bytes.`);