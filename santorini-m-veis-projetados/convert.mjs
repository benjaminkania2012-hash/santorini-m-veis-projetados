import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

const images = [
  'blog1.jpg',
  'cliente.png',
  'cliente2.png',
  'historia.png',
  'logo.png'
];

async function convertImages() {
  for (const img of images) {
    const inputPath = path.join(publicDir, img);
    const parsedPath = path.parse(img);
    const outputPath = path.join(publicDir, `${parsedPath.name}.webp`);

    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Converted: ${img} -> ${parsedPath.name}.webp`);
      
      // Optional: Delete the original image
      // fs.unlinkSync(inputPath);
    } catch (err) {
      console.error(`Error converting ${img}:`, err);
    }
  }
}

convertImages();
