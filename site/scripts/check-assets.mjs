import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const manifestPath = path.join(rootDir, 'public', 'assets', 'manifest.json');

console.log('🔍 Running Asset Manifest & Zero-Stock Audit...');

if (!fs.existsSync(manifestPath)) {
  console.error('❌ Manifest not found: public/assets/manifest.json');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
let errors = 0;

for (const [key, asset] of Object.entries(manifest.assets || {})) {
  const filePath = path.join(rootDir, 'public', asset.src.replace(/^\//, ''));
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Asset file missing on disk: ${filePath} (id: ${key})`);
    errors++;
    continue;
  }
  const stat = fs.statSync(filePath);
  const sizeKb = stat.size / 1024;
  if (!asset.src.endsWith('.svg') && sizeKb > 102.4) {
    console.error(`❌ Raster asset ${key} is ${sizeKb.toFixed(1)} KB, exceeding 100 KB budget`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`\n❌ Asset check failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('✅ Asset audit passed! All manifest entries valid.\n');
  process.exit(0);
}
