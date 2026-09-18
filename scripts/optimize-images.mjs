import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const PORTFOLIO_DIR = path.resolve(process.cwd(), 'public/portfolio');

if (!fs.existsSync(PORTFOLIO_DIR)) {
  console.log('Portfolio directory not found:', PORTFOLIO_DIR);
  process.exit(0);
}

const files = fs.readdirSync(PORTFOLIO_DIR);

console.log(`Checking ${files.length} images in ${PORTFOLIO_DIR}...`);

let optimizedCount = 0;
let savedBytes = 0;

for (const file of files) {
  const filePath = path.join(PORTFOLIO_DIR, file);
  const ext = path.extname(file).toLowerCase();
  
  if (!['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) {
    continue;
  }

  const stat = fs.statSync(filePath);
  const originalSize = stat.size;

  // If file is larger than 350KB, optimize it
  if (originalSize > 350 * 1024) {
    try {
      const tempPath = path.join(PORTFOLIO_DIR, `temp_${file}`);
      // Resize to max 1600x1600 preserving aspect ratio, quality 82, strip metadata
      execSync(`convert "${filePath}" -resize "1600x1600>" -quality 82 -strip "${tempPath}"`);
      
      const newStat = fs.statSync(tempPath);
      if (newStat.size < originalSize) {
        fs.renameSync(tempPath, filePath);
        const diff = originalSize - newStat.size;
        savedBytes += diff;
        optimizedCount++;
        console.log(`✔ Optimized ${file}: ${(originalSize / 1024).toFixed(1)} KB -> ${(newStat.size / 1024).toFixed(1)} KB (Saved ${(diff / 1024).toFixed(1)} KB)`);
      } else {
        fs.unlinkSync(tempPath);
      }
    } catch (err) {
      console.error(`Error optimizing ${file}:`, err.message);
    }
  }
}

console.log(`\n🎉 Optimization complete! Optimized ${optimizedCount} images. Total bandwidth saved: ${(savedBytes / (1024 * 1024)).toFixed(2)} MB.`);
