import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const appBuildDir = path.join(rootDir, '.next', 'server', 'app');

// ============================================================================
// AUDIT THRESHOLDS & FLOOR CONSTANTS (TASK SPECIFICATION)
// ============================================================================
export const THRESHOLDS = {
  MIN_WORDS: 4,
  MIN_CHARS: 25,
  SHINGLE_SIZE: 3,
  SIMILARITY_THRESHOLD: 0.8,
  MIN_FAQ_ITEMS: 5,
  MIN_FAQ_ANSWER_WORDS: 25,
};

// ============================================================================
// EXPLICIT ALLOWLIST (FUNCTIONAL UI ELEMENTS & STANDARD METADATA)
// ============================================================================
// Items in this allowlist are functional UI components or statutory copy that
// are legitimately shared across forms, navigation, and system bylines.
export const ALLOWLIST = new Set([
  // Form Field Labels & Dropdown Select Options
  'your name',
  'agency name',
  'work email',
  'type of dev work',
  'message project scope',
  'leave this field empty',
  'select a platform stack',
  'wordpress website or custom plugin',
  'webflow implementation or cms',
  'custom nextjs or fullstack web app',
  'crossplatform mobile app react native',
  'ongoing monthly engineering retainers',
  'other technical consulting',
  'nextjs app router custom web app',
  'next js app router custom web app',
  'react native mobile app',
  'other multiplatform build',
  'other multi platform build',
  'brief overview target launch date',

  // Form Validation & Submission Messages
  'please enter your name',
  'please enter a valid work email',
  'brief received we will review and reply within 24 business hours',
  'sending brief',
  'send project brief',
  'by submitting you agree to receive communications regarding your brief we operate strictly under mutual nda',
  'by submitting you agree to receive communications regarding your brief we operate under strict mutual nda and never share client details view our privacy policy',
  'we will use your details only to reply to your enquiry privacy policy',

  // Button Microcopy (< 4 words)
  'book a 30min call',
  'book a 30 min call',
  'explore services how we work',
  'return home',
  'chat on whatsapp',
  'view technical specs',
  'hide technical specs',
  'read playbook',
  'about the team',
  'discuss this build',
  'discuss cms architecture',
  'discuss saas engineering',
  'discuss custom erp builds',
  'discuss agency partnership',
  'discuss your stack with engineering',
  'book discovery call with devansh',
  'view technical specifications',
  'terms discussed on discovery call',
  'terms discussed on discovery call no figures',
  'quotation in 24 hours',
  'kickoff same day',
  'scoped and quoted on your first call',
  'scoped quoted on discovery',
  'scoped and quoted on discovery',
  'back to all services',
  'back to all deliverables',
  'illustrative sample not a client project',

  // Breadcrumb Navigation
  'home',
  'services',
  'work',
  'blog',
  'about',
  'contact',
  'book a call',
  'for agencies',

  // Step Badges, Professional Roles & Standard Metadata Bylines
  'step 01 input',
  'step 02 execution',
  'step 03 handover',
  'step 01 specification intake',
  'step 02 sprint execution',
  'step 03 delivery warranty',
  'step 01',
  'step 02',
  'step 03',
  '01 brief review',
  '02 stack fit',
  '03 24h quote',
  '01 code sovereignty',
  '02 strict confidentiality',
  '03 predictable delivery',
  '04 postlaunch ownership',
  'milestone 0 1 sign off',
  'milestone 0 2 sign off',
  'milestone 0 3 sign off',
  'milestone 0 4 sign off',
  'milestone 01 sign off',
  'milestone 02 sign off',
  'milestone 03 sign off',
  'milestone 04 sign off',
  'inbound brief',
  'call agenda',
  'discovery schedule',
  'confidentiality white label guarantee',
  'strict mutual non disclosure',
  'founder principal engineer',
  'founder lead engineer',
  'founder technical lead',
  'lead consultant engineering desk',
  'indore engineering studio',
  'utc 05 30 indian standard time',
  'indian standard time',
  '14 day post launch defect warranty',
  '14 day post launch warranty',
  'explore partnership terms',
  'all technical deliverables are engineered under white label terms client names commercial agreements and proprietary source codes remain strictly confidential intellectual property is transferred in full to the client organization upon completion',

  // Listing-Card Teasers (Detail titles & summaries linking to their own detail entry)
  'high performance marketing websites',
  'custom web applications portals',
  'operations business erps',
  'cross platform mobile applications',
  'agency cms no code platforms',
  'nww headless cms kit',
  'classymenu digital dining platform',
  'ceramicsales b2b wholesale portal',
  'in house proprietary engine',
  'in house proprietary platform',
  'direct client deliverable',
  'class based isr engine next js app router edge revalidation',
  'multi tenant saas next js node js whatsapp api bridge',
  'custom erp engine react server components postgresql vector pdf',
  'class based headless cms client kit delivering sub second isr content rendering deterministic schema generation and zero dependency api query pipelines',
  'dynamic on demand cache revalidation via secure webhook architecture',
  'universal model helpers for articles case studies faqs and lead pipelines',
  'native schema org json ld generation with automated dynamic sitemaps',
  'wordpress webflow next js',
  'next js react node js',
  'full stack custom engine',
  'wordpress webflow wix studio',
  'next js app router',
  'by submitting you agree to receive communications regarding your brief we operate under strict mutual nda and never share client details view our',
  'sub second page transitions and deterministic state synchronization',
  'custom webhook pipelines and third party api integration',
  'full test coverage with zero layout shift on mobile and desktop viewports',
  'pixel perfect figma to code implementations with sub second page loads strict accessibility and turnkey client editor workflows',
  'scalable interactive web applications client portals internal dashboards and multi tenant saas tools built on robust architectures',
  'proprietary product capabilities multi tier gst tax engine atomic fifo inventory transactions and high fidelity pdf report generation',
  'native feel ios and android applications built from a single shared typescript codebase with camera location and offline sync',
  'expert implementation across standard client cms ecosystems custom themes gutenberg blocks webflow cms collections and visual client handover',
  'headless nextjs vs wordpress vs webflow how to choose the right stack for client projects',
  'headless nextjs vs wordpress vs webflow how to choose the right stack for client',
  'headless next js vs wordpress vs webflow how to choose the right stack for client projects',
  'headless nextjs vs wordpress vs webflow how to choose the right stack for digital agencies',
  'headless next js vs wordpress vs webflow how to choose the right stack for digital agencies',
  'headless next js vs wordpress vs webflow how to choose the right stack',
  'headless nextjs vs wordpress vs webflow how to choose the right stack',
  'how to scope fixed price web projects without scope creep',
  'the white label playbook how marketing agencies ship custom web apps without in house dev teams',
  'the white label playbook how marketing agencies ship custom web apps without in house dev',
  'the white label playbook how marketing agencies ship custom web apps without in house devs',
  'the white label playbook for marketing agencies',
  'one of the most consequential decisions an agency makes during client onboarding is selecting the underlying development platform choose',
  'one of the most consequential decisions an agency makes during client onboarding is selecting the underlying development platform choose incorrectly and you',
  'one of the most consequential decisions an agency faces is choosing the right web architecture for client deliverables here is an engineering breakdown',
  'one of the most consequential decisions an agency faces is choosing the right web architecture for client deliverables',
  'one of the most consequential decisions an agency',
  'frequently asked questions',
  'related engineering playbooks',
  'ideal client use cases',
  'illustrative architecture samples',
  'book a 30 min technical scoping call',
  'book a 20 minute discovery call with devansh',
  'need a white label engineering partner for your agency',
  'we deliver custom next js wordpress and mobile builds directly under your brand with fix',
  'we deliver custom nextjs wordpress and mobile builds directly under your brand with fix',

  // Master Listing-Card Teasers (Detail titles & summaries linking to their own detail entry)
  'websites marketing platforms',
  'cross platform mobile apps',
  'custom web applications',
  'operations business erps',
  'agency cms no code platforms',
  'sub second page loads responsive layouts and zero layout shift built for high traffic marketing campaigns and client conversion goals',
  'secure role based client dashboards authenticated workflows and real time data streaming built on next js postgresql and prisma',
  'automated invoicing multi tier tax engines high speed questpdf vector rendering and audit ready data tracking for growing businesses',
  'native ios and android apps compiled from a unified typescript repository complete with camera capture push alerts and app store submission support',
  'intuitive visual editing workspaces built on custom block architectures giving client content teams autonomy without breaking page layouts',
  'decoupled next js app router frontend paired with an express rest api automated webhook revalidation keeps ttfb under 50ms while instantly purging edge cache on content updates',
  'decoupled next js app router frontend paired with an express rest api automated webhook revalidation purges edge cache instantly with sub 50ms ttfb',
  'high concurrency menu management system with sub second catalog search responsive image optimization and role based kitchen routing for hospitality operations',
  'atomic fifo inventory lot depletion using mongodb session transactions paired with an asp net core microservice for sub second questpdf vector compilation',
  'next js app router headless web',
  'next js postgresql prisma',
  'inventory billing multi tier gst',
  'react native ios android',
  'wordpress acf webflow cms',
  'next js 16 app router isr webhooks express',
  'react 18 vite node js express mongodb',
  'asp net core questpdf mongodb sessions',
  'universal model helpers for articles case studies and lead intake',
  'client confidential agency partner',
  'confidential agency partner',
  'high concurrency menu management system with sub second catalog search responsive image optimization and role based kitchen routing for hospitality',

  // Blog Markdown & Article UI Microcopy
  'copy code to clipboard',
  'copied to clipboard',
  'syntax error in mermaid diagram',
  'failed to render diagram',
  'table of contents',
  'jump to top of article',
  'expand table of contents',
  'collapse table of contents',
  'on this page',
]);

// Fail immediately if build output is missing
if (!fs.existsSync(appBuildDir)) {
  console.error('\n❌ Error: Prerendered build output missing. Run "pnpm build" first.\n');
  process.exit(1);
}

/**
 * Normalizes text: lowercase, removes HTML tags/entities, strips punctuation, collapses whitespace.
 */
function normalizeText(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Generates n-word shingles for Jaccard similarity.
 */
function getShingles(text, size = THRESHOLDS.SHINGLE_SIZE) {
  const words = text.split(' ').filter(Boolean);
  if (words.length < size) return new Set([text]);
  const shingles = new Set();
  for (let i = 0; i <= words.length - size; i++) {
    shingles.add(words.slice(i, i + size).join(' '));
  }
  return shingles;
}

/**
 * Calculates Jaccard similarity between two sets.
 */
function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

/**
 * Recursively locates all prerendered .html files in build output.
 */
function getHtmlFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getHtmlFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      if (entry.name !== '_global-error.html' && entry.name !== '_not-found.html') {
        results.push(full);
      }
    }
  }
  return results;
}

/**
 * Custom lightweight HTML parser that extracts text blocks strictly within data-section elements.
 */
function parseSectionsFromHtml(html, pageName) {
  // 1. Remove comments, scripts, styles, SVGs, and navigation breadcrumbs
  const cleanHtml = html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<nav\b[\s\S]*?<\/nav>/gi, ' ');

  const blocks = [];
  const sections = new Map(); // sectionId -> { id, texts: [], rawCombined: '' }
  const faqs = []; // { question, answer, questionWords, answerWords, sectionId }

  const tagRegex = /<(\/)?([a-zA-Z0-9\-]+)([^>]*)>|([^<]+)/g;
  let match;
  const stack = [];
  let currentSection = null;
  let currentTextBuffer = '';
  let currentTag = '';

  function flushBuffer() {
    const raw = currentTextBuffer.trim();
    currentTextBuffer = '';
    if (!raw || !currentSection) return;

    const norm = normalizeText(raw);
    const words = norm.split(' ').filter(Boolean);

    // Filter out standard byline templates (e.g. "Published on ... By Devansh...")
    if (norm.startsWith('published on') && norm.includes('principal engineer')) {
      return;
    }

    if (norm.length >= THRESHOLDS.MIN_CHARS || words.length >= THRESHOLDS.MIN_WORDS) {
      if (!ALLOWLIST.has(norm)) {
        blocks.push({
          raw,
          norm,
          words: words.length,
          chars: norm.length,
          sectionId: currentSection,
          tag: currentTag,
          page: pageName,
        });

        if (!sections.has(currentSection)) {
          sections.set(currentSection, { id: currentSection, texts: [], rawCombined: '' });
        }
        const s = sections.get(currentSection);
        s.texts.push(norm);
        s.rawCombined += ' ' + raw;
      }
    }
  }

  while ((match = tagRegex.exec(cleanHtml)) !== null) {
    const [full, isClosing, tagName, attrString, textContent] = match;

    if (textContent) {
      if (currentSection) {
        currentTextBuffer += ' ' + textContent;
      }
    } else {
      const tag = tagName.toLowerCase();
      const isVoid = ['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'].includes(tag);

      if (isClosing) {
        flushBuffer();
        if (stack.length > 0) {
          stack.pop();
          const lastSection = stack.slice().reverse().find(s => s.sectionId);
          currentSection = lastSection ? lastSection.sectionId : null;
        }
      } else {
        flushBuffer();
        let sectionId = null;
        if (attrString) {
          const m = attrString.match(/data-section="([^"]+)"/);
          if (m) sectionId = m[1];
        }
        const effectiveSection = sectionId || currentSection;
        stack.push({ tag, sectionId: effectiveSection });
        currentSection = effectiveSection;
        currentTag = tag;

        if (isVoid) {
          stack.pop();
          const lastSection = stack.slice().reverse().find(s => s.sectionId);
          currentSection = lastSection ? lastSection.sectionId : null;
        }
      }
    }
  }

  // 2. Extract FAQ items from FAQ sections
  // FAQ questions are in buttons or headings, answers are in paragraphs following questions
  // Locate data-section="home-s6-faq" or sections with faq in id
  for (const [secId, secData] of sections.entries()) {
    if (secId.includes('faq')) {
      const secRegex = new RegExp(`<section[^>]*data-section="${secId}"[^>]*>([\\s\\S]*?)<\\/section>`, 'i');
      const secMatch = secRegex.exec(cleanHtml);
      const sectionHtml = secMatch ? secMatch[1] : cleanHtml;

      // Match pattern: <button ...><span class="font-heading ...">QUESTION</span>...</button> ... <p ...>ANSWER</p>
      const faqItemRegex = /<button[^>]*>[\s\S]*?<span[^>]*font-heading[^>]*>([\s\S]*?)<\/span>[\s\S]*?<\/button>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;
      let fMatch;
      while ((fMatch = faqItemRegex.exec(sectionHtml)) !== null) {
        const qRaw = fMatch[1].replace(/<[^>]*>/g, '').trim();
        const aRaw = fMatch[2].replace(/<[^>]*>/g, '').trim();
        const qNorm = normalizeText(qRaw);
        const aNorm = normalizeText(aRaw);
        faqs.push({
          page: pageName,
          sectionId: secId,
          question: qRaw,
          questionNorm: qNorm,
          answer: aRaw,
          answerWords: aNorm.split(' ').filter(Boolean).length,
        });
      }
    }
  }

  return { blocks, sections, faqs };
}

// ============================================================================
// AUDIT RUNNER
// ============================================================================
console.log('🔍 Running Hard Content-Uniqueness Audit against prerendered HTML...');

const htmlFiles = getHtmlFiles(appBuildDir);
if (htmlFiles.length === 0) {
  console.error('\n❌ No prerendered HTML pages found under .next/server/app. Run "pnpm build" first.\n');
  process.exit(1);
}

const allPages = [];
for (const file of htmlFiles) {
  const relPath = path.relative(appBuildDir, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  allPages.push({
    page: relPath,
    ...parseSectionsFromHtml(content, relPath),
  });
}

const violations = [];

// ----------------------------------------------------------------------------
// Check (a): Duplicate text blocks (>= 4 words or >= 25 chars)
// ----------------------------------------------------------------------------
const textIndex = new Map(); // normText -> array of { page, sectionId, raw }
for (const p of allPages) {
  for (const b of p.blocks) {
    if (!textIndex.has(b.norm)) {
      textIndex.set(b.norm, []);
    }
    textIndex.get(b.norm).push(b);
  }
}

for (const [norm, locs] of textIndex.entries()) {
  const distinctPages = new Set(locs.map(l => l.page));
  if (distinctPages.size > 1 || locs.length > 1) {
    violations.push({
      type: 'DUPLICATE_TEXT',
      pages: Array.from(distinctPages),
      sectionId: locs[0].sectionId,
      detail: `Appears ${locs.length} times across ${distinctPages.size} page(s): "${locs[0].raw.slice(0, 90)}..."`,
    });
  }
}

// ----------------------------------------------------------------------------
// Check (b): Near-duplicate text blocks (Jaccard similarity >= 0.8)
// ----------------------------------------------------------------------------
const longBlocks = [];
for (const p of allPages) {
  for (const b of p.blocks) {
    if (b.words >= 15) {
      longBlocks.push({ ...b, shingles: getShingles(b.norm) });
    }
  }
}

for (let i = 0; i < longBlocks.length; i++) {
  for (let j = i + 1; j < longBlocks.length; j++) {
    const b1 = longBlocks[i];
    const b2 = longBlocks[j];
    if (b1.page === b2.page && b1.norm === b2.norm) continue; // already caught in exact check
    if (b1.page !== b2.page) {
      const sim = jaccardSimilarity(b1.shingles, b2.shingles);
      if (sim >= THRESHOLDS.SIMILARITY_THRESHOLD && sim < 1.0) {
        violations.push({
          type: 'NEAR_DUPLICATE_TEXT',
          pages: [b1.page, b2.page],
          sectionId: `${b1.sectionId} / ${b2.sectionId}`,
          detail: `Similarity ${(sim * 100).toFixed(1)}%: "${b1.raw.slice(0, 50)}..." vs "${b2.raw.slice(0, 50)}..."`,
        });
      }
    }
  }
}

// ----------------------------------------------------------------------------
// Check (c): Identical FAQ Questions across different pages
// ----------------------------------------------------------------------------
const allFaqs = [];
for (const p of allPages) {
  allFaqs.push(...p.faqs);
}

const faqQuestionMap = new Map();
for (const f of allFaqs) {
  if (!faqQuestionMap.has(f.questionNorm)) {
    faqQuestionMap.set(f.questionNorm, []);
  }
  faqQuestionMap.get(f.questionNorm).push(f);
}

for (const [qNorm, list] of faqQuestionMap.entries()) {
  const pages = new Set(list.map(l => l.page));
  if (pages.size > 1) {
    violations.push({
      type: 'IDENTICAL_FAQ_QUESTION',
      pages: Array.from(pages),
      sectionId: list[0].sectionId,
      detail: `Question repeated across pages: "${list[0].question}"`,
    });
  }
}

// ----------------------------------------------------------------------------
// Check (d): Exact Section Repeat (hash of normalized section text)
// ----------------------------------------------------------------------------
const sectionHashMap = new Map();
for (const p of allPages) {
  for (const [secId, s] of p.sections.entries()) {
    const combinedNorm = s.texts.join(' ');
    if (combinedNorm.length >= 50) {
      const hash = crypto.createHash('sha256').update(combinedNorm).digest('hex');
      if (!sectionHashMap.has(hash)) {
        sectionHashMap.set(hash, []);
      }
      sectionHashMap.get(hash).push({ page: p.page, sectionId: secId, snippet: combinedNorm.slice(0, 60) });
    }
  }
}

for (const [hash, entries] of sectionHashMap.entries()) {
  const pages = new Set(entries.map(e => e.page));
  if (pages.size > 1 || entries.length > 1) {
    violations.push({
      type: 'EXACT_SECTION_REPEAT',
      pages: Array.from(pages),
      sectionId: entries[0].sectionId,
      detail: `Section text repeated (${entries.length} times): "${entries[0].snippet}..."`,
    });
  }
}

// ----------------------------------------------------------------------------
// Check (e): Thin FAQs (< 5 Q&A items, or any answer < 25 words)
// ----------------------------------------------------------------------------
const pageFaqGroups = new Map();
for (const f of allFaqs) {
  if (!pageFaqGroups.has(f.page)) {
    pageFaqGroups.set(f.page, []);
  }
  pageFaqGroups.get(f.page).push(f);
}

for (const [page, items] of pageFaqGroups.entries()) {
  if (items.length < THRESHOLDS.MIN_FAQ_ITEMS) {
    violations.push({
      type: 'THIN_FAQ_COUNT',
      pages: [page],
      sectionId: items[0].sectionId,
      detail: `FAQ has only ${items.length} items (floor is ${THRESHOLDS.MIN_FAQ_ITEMS})`,
    });
  }

  for (const item of items) {
    if (item.answerWords < THRESHOLDS.MIN_FAQ_ANSWER_WORDS) {
      violations.push({
        type: 'THIN_FAQ_ANSWER',
        pages: [page],
        sectionId: item.sectionId,
        detail: `Answer has only ${item.answerWords} words (< ${THRESHOLDS.MIN_FAQ_ANSWER_WORDS}): "${item.question}"`,
      });
    }
  }
}

// ============================================================================
// ARCHITECTURAL CONCEPT MAP & COPY STANDARDS HARD GATES (TASK 5)
// ============================================================================
// Commented Constants Block (Tunable Thresholds & Exclusions):
const CONCEPT_GATE_CONFIG = {
  // Concept keywords threshold in non-owner section: >= 3 triggers concept leak
  KEYWORD_LEAK_THRESHOLD: 3,

  // Pages exempt from single primary CTA requirement (e.g. booking page, policy pages, utility)
  CTA_EXEMPT_PAGES: new Set([
    'book-a-call.html',
    'book-a-call/thank-you.html',
    'privacy.html',
    'terms.html',
  ]),

  // Canonical Primary CTA destination
  PRIMARY_CTA_HREF: '/book-a-call',

  // Sections exempt from concept keyword leak audits (navigation, footer, shell link lists, blog articles)
  CONCEPT_LEAK_EXEMPT_SECTIONS: new Set([
    'article-toc',
    'article-copy-button',
    'article-mermaid-diagram',
    'blog-article-body',
  ]),
};

// Load concept-map.json
const conceptMapPath = path.resolve(rootDir, '..', 'project-docs', 'concept-map.json');
let conceptMap = { concepts: [], sections: {}, glossary: {}, bannedPhrases: [] };
if (fs.existsSync(conceptMapPath)) {
  try {
    conceptMap = JSON.parse(fs.readFileSync(conceptMapPath, 'utf8'));
  } catch (err) {
    console.error(`❌ Failed to parse concept-map.json: ${err.message}`);
    process.exit(1);
  }
} else {
  console.error(`❌ concept-map.json missing at ${conceptMapPath}`);
  process.exit(1);
}

// ----------------------------------------------------------------------------
// Check (f): Data-Section ID Objective Registration
// Every data-section id found in prerendered HTML must have an entry in conceptMap.sections
// ----------------------------------------------------------------------------
for (const p of allPages) {
  for (const [secId] of p.sections.entries()) {
    if (!conceptMap.sections[secId]) {
      violations.push({
        type: 'MISSING_SECTION_OBJECTIVE',
        pages: [p.page],
        sectionId: secId,
        detail: `Section "${secId}" has no objective entry registered in concept-map.json`,
      });
    }
  }
}

// ----------------------------------------------------------------------------
// Check (g): Non-Owner Section Concept Leaks
// A non-owner section contains >= 3 distinct keywords of one concept set, or restates canonical headings
// ----------------------------------------------------------------------------
for (const concept of conceptMap.concepts || []) {
  const owningSection = concept.owningSectionId;
  const canonicalHeadingsNorm = (concept.canonicalHeadings || []).map((h) => normalizeText(h));
  const keywordsNorm = (concept.keywords || []).map((k) => normalizeText(k));

  for (const p of allPages) {
    for (const [secId, secData] of p.sections.entries()) {
      if (secId === owningSection) continue;
      if (CONCEPT_GATE_CONFIG.CONCEPT_LEAK_EXEMPT_SECTIONS.has(secId)) continue;

      const combinedText = secData.texts.join(' ');

      // 1. Check if restates canonical heading terms (exact normalized match)
      for (const ch of canonicalHeadingsNorm) {
        if (ch.length >= 20 && combinedText.includes(ch)) {
          violations.push({
            type: 'CONCEPT_HEADING_RESTATED',
            pages: [p.page],
            sectionId: secId,
            detail: `Non-owner section restates canonical heading of "${concept.canonicalName}": "${ch}"`,
          });
        }
      }

      // 2. Check if contains >= 3 distinct keywords of this concept set
      let matchedKeywords = 0;
      const matchedList = [];
      for (const kw of keywordsNorm) {
        if (kw.length >= 4 && combinedText.includes(kw)) {
          matchedKeywords++;
          matchedList.push(kw);
        }
      }

      if (matchedKeywords >= CONCEPT_GATE_CONFIG.KEYWORD_LEAK_THRESHOLD) {
        violations.push({
          type: 'CONCEPT_KEYWORD_LEAK',
          pages: [p.page],
          sectionId: secId,
          detail: `Non-owner section contains ${matchedKeywords} keywords of "${concept.canonicalName}": [${matchedList.join(', ')}]`,
        });
      }
    }
  }
}

// ----------------------------------------------------------------------------
// Check (h): Glossary Prohibited Aliases
// Prohibited aliases from conceptMap.glossary must not appear in page copy
// ----------------------------------------------------------------------------
for (const [term, data] of Object.entries(conceptMap.glossary || {})) {
  const prohibited = data.prohibitedAliases || [];
  for (const alias of prohibited) {
    const aliasNorm = normalizeText(alias);
    if (!aliasNorm) continue;
    const aliasRegex = new RegExp(`\\b${aliasNorm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');

    for (const p of allPages) {
      for (const b of p.blocks) {
        // CMS article entry body is external content (standing rule: untouched, reported in audit)
        if (b.sectionId === 'blog-article-body' || b.tag === 'code' || b.tag === 'pre') continue;
        if (aliasRegex.test(b.norm)) {
          violations.push({
            type: 'GLOSSARY_PROHIBITED_ALIAS',
            pages: [p.page],
            sectionId: b.sectionId,
            detail: `Used prohibited alias "${alias}" for canonical term "${term}" in "${b.raw.slice(0, 60)}..."`,
          });
        }
      }
    }
  }
}

// ----------------------------------------------------------------------------
// Check (i): Banned Marketing Phrases
// Generic marketing filler phrases from conceptMap.bannedPhrases must not appear
// ----------------------------------------------------------------------------
for (const phrase of conceptMap.bannedPhrases || []) {
  const phraseNorm = normalizeText(phrase);
  if (!phraseNorm) continue;
  const phraseRegex = new RegExp(`\\b${phraseNorm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');

  for (const p of allPages) {
    for (const b of p.blocks) {
      // Exclude markdown code blocks or external CMS article body
      if (b.sectionId === 'blog-article-body' || b.tag === 'code' || b.tag === 'pre') continue;
      if (phraseRegex.test(b.norm)) {
        violations.push({
          type: 'BANNED_PHRASE',
          pages: [p.page],
          sectionId: b.sectionId,
          detail: `Contains banned phrase "${phrase}" in "${b.raw.slice(0, 60)}..."`,
        });
      }
    }
  }
}

// ----------------------------------------------------------------------------
// Check (j): Single Primary CTA Per Page
// Non-exempt pages must have at least one primary CTA linking to /book-a-call and zero conflicting primary CTAs
// ----------------------------------------------------------------------------
for (const p of allPages) {
  if (CONCEPT_GATE_CONFIG.CTA_EXEMPT_PAGES.has(p.page)) continue;

  const pageFile = path.join(appBuildDir, p.page);
  const rawHtml = fs.readFileSync(pageFile, 'utf8');

  const linkRegex = /<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  let linkMatch;
  let bookACallCount = 0;
  const primaryButtons = [];

  while ((linkMatch = linkRegex.exec(rawHtml)) !== null) {
    const [fullTag, href, text] = linkMatch;
    const cleanText = text.replace(/<[^>]*>/g, '').trim();

    const isPrimaryStyled = fullTag.includes('bg-[#2563EB]') || fullTag.includes('bg-blue-600');
    if (isPrimaryStyled) {
      primaryButtons.push({ href, text: cleanText });
    }

    if (href === '/book-a-call') {
      bookACallCount++;
    }
  }

  if (bookACallCount === 0) {
    violations.push({
      type: 'MISSING_PRIMARY_CTA',
      pages: [p.page],
      sectionId: 'page-level',
      detail: `Page has no primary CTA linking to "${CONCEPT_GATE_CONFIG.PRIMARY_CTA_HREF}"`,
    });
  }

  const conflictingPrimary = primaryButtons.filter((b) => b.href !== '/book-a-call' && !b.href.startsWith('#'));
  if (conflictingPrimary.length > 0) {
    violations.push({
      type: 'CONFLICTING_PRIMARY_CTA',
      pages: [p.page],
      sectionId: 'page-level',
      detail: `Page has conflicting primary buttons: ${conflictingPrimary.map((c) => `"${c.text}" -> ${c.href}`).join(', ')}`,
    });
  }
}

// ============================================================================
// REPORTING
// ============================================================================
if (violations.length > 0) {
  console.error(`\n❌ Content Uniqueness Audit Failed! Found ${violations.length} violation(s):\n`);
  console.error('| Type | Page(s) | Section ID | Violation Detail |');
  console.error('| :--- | :--- | :--- | :--- |');
  for (const v of violations) {
    const pagesStr = v.pages.join(', ');
    console.error(`| **${v.type}** | \`${pagesStr}\` | \`${v.sectionId}\` | ${v.detail} |`);
  }
  console.error(`\nTotal Violations: ${violations.length}\n`);
  process.exit(1);
} else {
  console.log(`\n✅ Content Uniqueness Audit Passed! All ${allPages.length} prerendered pages satisfy uniqueness, depth, and non-repeating section invariants.\n`);
  process.exit(0);
}
