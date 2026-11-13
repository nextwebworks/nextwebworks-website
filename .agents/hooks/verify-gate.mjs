import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const counterPath = path.join(__dirname, '.counter');

function readStdin() {
  try {
    return fs.readFileSync(0, 'utf-8');
  } catch {
    return '';
  }
}

try {
  const raw = readStdin();
  const payload = raw ? JSON.parse(raw) : {};

  // Check if fully idle
  if (!payload?.fullyIdle) {
    console.log(JSON.stringify({ decision: 'allow' }));
    process.exit(0);
  }

  // Check git status for changed source files in site/
  let changedFiles = '';
  try {
    changedFiles = execSync('git diff --name-only site/', { encoding: 'utf-8' });
  } catch {
    changedFiles = '';
  }

  if (!changedFiles.trim()) {
    if (fs.existsSync(counterPath)) fs.unlinkSync(counterPath);
    console.log(JSON.stringify({ decision: 'allow' }));
    process.exit(0);
  }

  // Check re-entry counter (cap at 2 attempts)
  let count = 0;
  if (fs.existsSync(counterPath)) {
    count = parseInt(fs.readFileSync(counterPath, 'utf-8') || '0', 10);
  }

  if (count >= 2) {
    if (fs.existsSync(counterPath)) fs.unlinkSync(counterPath);
    console.log(JSON.stringify({ decision: 'allow' }));
    process.exit(0);
  }

  // Execute verification checks
  try {
    execSync('pnpm --dir site check:structure', { stdio: 'pipe' });
    execSync('pnpm --dir site lint', { stdio: 'pipe' });
    if (fs.existsSync(counterPath)) fs.unlinkSync(counterPath);
    console.log(JSON.stringify({ decision: 'allow' }));
    process.exit(0);
  } catch (checkErr) {
    count++;
    fs.writeFileSync(counterPath, String(count), 'utf-8');
    console.log(
      JSON.stringify({
        decision: 'continue',
        reason: `Automated verify-gate check failed on modified files. Please fix lint or structure issues before completing turn.`,
      })
    );
    process.exit(0);
  }
} catch (err) {
  console.log(
    JSON.stringify({
      decision: 'ask',
      reason: `verify-gate parser error: ${err.message}`,
    })
  );
  process.exit(0);
}

