import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const appDir = path.join(rootDir, 'app');

let errors = 0;

// Approved exemptions per .agents/rules/min-sections-per-page.md
const EXEMPT_PAGES = new Set([
  path.normalize('book-a-call/thank-you/page.js'),
  path.normalize('privacy/page.js'),
  path.normalize('terms/page.js'),
]);

const EXCLUDED_SECTION_PATTERNS = [
  /hero/i,
  /header/i,
  /founder/i,
  /(?:^|[^a-z])cta(?:[^a-z]|$)|finalcta|cta-banner|ctabanner/i,
  /(?:^|[^a-z])faq(?:[^a-z]|$)|faqsection/i,
  /contactform/i,
  /contact-form/i,
];

function isExcludedSection(componentName, sectionId = '') {
  const target = `${componentName} ${sectionId}`;
  return EXCLUDED_SECTION_PATTERNS.some((pattern) => pattern.test(target));
}

function checkFileLines(filePath, maxLines, label) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').length;
  if (lines > maxLines) {
    console.error(`❌ [Line Ceiling] ${label} (${filePath}) has ${lines} lines, exceeding ceiling of ${maxLines}`);
    errors++;
  }
}

function resolveComponentPath(importPath, sourceFile) {
  let resolved = '';
  if (importPath.startsWith('@/')) {
    resolved = path.join(rootDir, importPath.replace('@/', ''));
  } else if (importPath.startsWith('.')) {
    resolved = path.resolve(path.dirname(sourceFile), importPath);
  }
  if (!resolved) return null;

  if (!resolved.endsWith('.js') && !resolved.endsWith('.jsx')) {
    if (fs.existsSync(`${resolved}.js`)) return `${resolved}.js`;
    if (fs.existsSync(`${resolved}.jsx`)) return `${resolved}.jsx`;
  }
  return fs.existsSync(resolved) ? resolved : null;
}

function countPageSections(pagePath) {
  const content = fs.readFileSync(pagePath, 'utf8');
  const importLines = content.split('\n').filter((l) => l.trim().startsWith('import') && l.includes('from'));
  let totalCount = 0;
  let qualifyingCount = 0;
  const allSections = [];
  const qualifyingSections = [];
  const excludedSections = [];

  for (const line of importLines) {
    const match = line.match(/import\s+([A-Za-z0-9_,\s{}*]+)\s+from\s+['"]([^'"]+)['"]/);
    if (!match) continue;

    const spec = match[1].trim();
    const importPath = match[2].trim();
    const resolved = resolveComponentPath(importPath, pagePath);
    if (!resolved) continue;

    const compContent = fs.readFileSync(resolved, 'utf8');
    const firstLine = compContent.split('\n')[0].trim();
    const hasSectionComment = firstLine.startsWith('// section:');
    const hasDataSection = compContent.includes('data-section=');

    if (hasSectionComment && hasDataSection) {
      // Check if rendered in JSX
      const componentName = spec.replace(/[{}]/g, '').trim();
      const isRendered = content.includes(`<${componentName}`) || content.includes(`<${componentName.split(',')[0].trim()}`);
      if (isRendered) {
        totalCount++;
        allSections.push(componentName);

        const sectionIdMatch = firstLine.match(/^\/\/\s*section:\s*([^\s]+)/);
        const sectionId = sectionIdMatch ? sectionIdMatch[1] : '';

        if (isExcludedSection(componentName, sectionId)) {
          excludedSections.push(componentName);
        } else {
          qualifyingCount++;
          qualifyingSections.push(componentName);
        }
      }
    }
  }

  return { totalCount, qualifyingCount, allSections, qualifyingSections, excludedSections };
}

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next') continue;
      scanDir(fullPath);
    } else if (entry.isFile() && (entry.name === 'page.js' || entry.name === 'page.jsx')) {
      checkFileLines(fullPath, 80, 'Page Server Component');
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes("'use client'") || content.includes('"use client"')) {
        console.error(`❌ [RSC Violation] page.js (${fullPath}) must not use 'use client'`);
        errors++;
      }

      // Check min 5 body sections rule (excluding Nav, Hero, CTA, FAQ, Contact Us, and Footer)
      const relPath = path.relative(appDir, fullPath);
      const isExempt = Array.from(EXEMPT_PAGES).some((exempt) => relPath.replace(/\\/g, '/') === exempt.replace(/\\/g, '/'));

      if (!isExempt) {
        const { qualifyingCount, qualifyingSections, excludedSections } = countPageSections(fullPath);
        if (qualifyingCount < 5) {
          console.error(
            `❌ [Min Sections Violation] ${relPath} composes only ${qualifyingCount} qualifying body section(s) [${qualifyingSections.join(', ')}] (excluded shells: [${excludedSections.join(', ')}]). Minimum 5 required.`
          );
          errors++;
        }
      }
    } else if (entry.isFile() && fullPath.includes('_components') && entry.name.endsWith('.js')) {
      checkFileLines(fullPath, 250, 'Section Component');
      const content = fs.readFileSync(fullPath, 'utf8');
      const firstLine = content.split('\n')[0].trim();
      if (!firstLine.startsWith('// section:')) {
        console.warn(`⚠️ [Missing Section Comment] Section component ${entry.name} should open with // section: <id>`);
      }
      if (!content.includes('data-section=')) {
        console.warn(`⚠️ [Missing data-section] Section component ${entry.name} should render data-section attribute`);
      }
    }
  }
}

console.log('🔍 Running Structure Verification Audit...');
scanDir(appDir);

if (errors > 0) {
  console.error(`\n❌ Structure audit failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('✅ Structure audit passed! All line ceilings, RSC rules, and minimum section counts satisfied.\n');
  process.exit(0);
}
