#!/usr/bin/env node

/**
 * site/scripts/check-seo.mjs
 *
 * Authoritative Technical & On-Page SEO Hard Gate Auditor for Next Web Works.
 * Directly inspects Next.js prerendered build output in `.next/server/app/`.
 * Exits with code 1 on any technical SEO regression or invariant violation.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const appBuildDir = path.join(rootDir, '.next', 'server', 'app');

// ============================================================================
// AUDIT THRESHOLDS & ALLOWLIST CONSTANTS (COMMENTED CONFIGURATION BLOCK)
// ============================================================================
export const SEO_THRESHOLDS = {
  TITLE_MIN_LENGTH: 25,
  TITLE_MAX_LENGTH: 65,
  DESC_MIN_LENGTH: 70,
  DESC_MAX_LENGTH: 160,
  CANONICAL_ORIGIN: 'https://nextwebworks.in',
  VALID_LANGS: new Set(['en-in', 'en']),
};

export const FORBIDDEN_JSONLD_KEYS = new Set([
  'price',
  'pricerange',
  'offers',
  'hasoffercatalog',
  'offer',
  'rating',
  'reviewrating',
  'aggregaterating',
  'review',
  'reviews',
]);

export const FORBIDDEN_COMMERCIAL_TERMS = [
  '$/hr',
  'hourly',
  'retainer cost',
  'split percentage',
  '50/50',
];

export const GENERIC_ANCHOR_PATTERNS = [
  /^click here$/i,
  /^read more$/i,
  /^learn more$/i,
  /^here$/i,
  /^more$/i,
  /^link$/i,
];

export const ALLOWLIST = {
  // Routes explicitly designated as noindex
  NOINDEX_ROUTES: new Set([
    '/_not-found',
    '/book-a-call/thank-you',
  ]),
  // Routes exempt from standard internal linking orphan check (e.g. system 404)
  ORPHAN_EXEMPTIONS: new Set([
    '/_not-found',
    '/feed.xml',
  ]),
};

// ============================================================================
// HTML EXTRACTION UTILITIES (LIGHTWEIGHT DOM SCANNER)
// ============================================================================

function extractTagAttribute(tagStr, attrName) {
  const regex = new RegExp(`${attrName}=["']([^"']*)["']`, 'i');
  const match = tagStr.match(regex);
  return match ? match[1] : null;
}

function parseHtmlMetadata(html, routePath) {
  const result = {
    route: routePath,
    lang: null,
    title: null,
    description: null,
    canonical: null,
    robots: null,
    ogTitle: null,
    ogDescription: null,
    ogImage: null,
    ogUrl: null,
    ogType: null,
    twitterCard: null,
    h1s: [],
    headings: [],
    images: [],
    links: [],
    jsonLdScripts: [],
    visibleText: '',
  };

  // 1. HTML Lang
  const htmlTagMatch = html.match(/<html\b([^>]*)>/i);
  if (htmlTagMatch) {
    result.lang = extractTagAttribute(htmlTagMatch[1], 'lang');
  }

  // 2. Title
  const titleMatch = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    result.title = titleMatch[1].trim();
  }

  // 3. Meta Tags
  const metaRegex = /<meta\b([^>]*)\/?>/gi;
  let metaMatch;
  while ((metaMatch = metaRegex.exec(html)) !== null) {
    const attrs = metaMatch[1];
    const name = (extractTagAttribute(attrs, 'name') || '').toLowerCase();
    const property = (extractTagAttribute(attrs, 'property') || '').toLowerCase();
    const content = extractTagAttribute(attrs, 'content') || '';

    if (name === 'description') result.description = content.trim();
    if (name === 'robots') result.robots = content.trim().toLowerCase();
    if (property === 'og:title') result.ogTitle = content.trim();
    if (property === 'og:description') result.ogDescription = content.trim();
    if (property === 'og:image') result.ogImage = content.trim();
    if (property === 'og:url') result.ogUrl = content.trim();
    if (property === 'og:type') result.ogType = content.trim();
    if (name === 'twitter:card') result.twitterCard = content.trim();
  }

  // 4. Canonical Tag
  const canonicalMatch = html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i);
  if (canonicalMatch) {
    result.canonical = extractTagAttribute(canonicalMatch[0], 'href');
  }

  // 5. Headings Progression
  const headingRegex = /<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let headingMatch;
  while ((headingMatch = headingRegex.exec(html)) !== null) {
    const level = parseInt(headingMatch[1][1], 10);
    const text = headingMatch[2].replace(/<[^>]+>/g, '').trim();
    result.headings.push({ level, text });
    if (level === 1) {
      result.h1s.push(text);
    }
  }

  // 6. Image Alt Tags
  const imgRegex = /<img\b([^>]*)\/?>/gi;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(html)) !== null) {
    const attrs = imgMatch[1];
    const src = extractTagAttribute(attrs, 'src') || '';
    const hasAlt = /alt=/i.test(attrs);
    const alt = extractTagAttribute(attrs, 'alt');
    result.images.push({ src, hasAlt, alt });
  }

  // 7. Internal Links
  const linkRegex = /<a\b([^>]*)(?:>([\s\S]*?)<\/a>|(?:\/>))/gi;
  let linkMatch;
  while ((linkMatch = linkRegex.exec(html)) !== null) {
    const attrs = linkMatch[1];
    const href = extractTagAttribute(attrs, 'href') || '';
    const ariaLabel = extractTagAttribute(attrs, 'aria-label') || '';
    const innerText = (linkMatch[2] || '').replace(/<[^>]+>/g, '').trim();
    const effectiveText = (ariaLabel || innerText).trim();
    result.links.push({ href, effectiveText, ariaLabel });
  }

  // 8. Structured Data JSON-LD
  const jsonLdRegex = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let jsonMatch;
  while ((jsonMatch = jsonLdRegex.exec(html)) !== null) {
    result.jsonLdScripts.push(jsonMatch[1]);
  }

  // 9. Visible text for FAQ matching
  result.visibleText = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x27;|&#39;|&apos;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&amp;/gi, '&')
    .replace(/\s+/g, ' ')
    .toLowerCase();

  return result;
}

// ============================================================================
// RECURSIVE DISCOVERY & AUDIT HARNESS
// ============================================================================

function getHtmlFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getHtmlFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      if (entry.name !== '_global-error.html') {
        results.push(full);
      }
    }
  }
  return results;
}

function resolveRouteFromPath(htmlPath) {
  const relative = path.relative(appBuildDir, htmlPath).replace(/\\/g, '/');
  if (relative === 'index.html') return '/';
  if (relative === '_not-found.html') return '/_not-found';
  return `/${relative.replace(/\.html$/, '')}`;
}

function parseRobotsDirectives(rootDir) {
  const robotsCandidates = [
    path.join(appBuildDir, 'robots.txt.body'),
    path.join(appBuildDir, 'robots.txt'),
  ];
  let content = null;
  for (const c of robotsCandidates) {
    if (fs.existsSync(c)) {
      content = fs.readFileSync(c, 'utf8');
      break;
    }
  }
  if (!content) return null;

  const lines = content.split('\n');
  const result = {
    allowAll: false,
    disallowAll: false,
    disallowedPaths: [],
    sitemaps: [],
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const [key, ...rest] = line.split(':');
    const k = key.trim().toLowerCase();
    const v = rest.join(':').trim();

    if (k === 'disallow') {
      if (v === '/') result.disallowAll = true;
      if (v) result.disallowedPaths.push(v);
    } else if (k === 'allow' && v === '/') {
      result.allowAll = true;
    } else if (k === 'sitemap') {
      result.sitemaps.push(v);
    }
  }

  return result;
}

function parseSitemapUrls(rootDir) {
  const sitemapCandidates = [
    path.join(appBuildDir, 'sitemap.xml.body'),
    path.join(appBuildDir, 'sitemap.xml'),
  ];
  let content = null;
  for (const c of sitemapCandidates) {
    if (fs.existsSync(c)) {
      content = fs.readFileSync(c, 'utf8');
      break;
    }
  }
  if (!content) return null;

  const urls = [];
  const locRegex = /<loc>([\s\S]*?)<\/loc>/gi;
  let match;
  while ((match = locRegex.exec(content)) !== null) {
    urls.push(match[1].trim());
  }
  return urls;
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

async function runAudit() {
  console.log('=================================================================');
  console.log('🔍 NEXT WEB WORKS TECHNICAL SEO HARD GATE AUDIT (`check:seo`)');
  console.log('=================================================================\n');

  if (!fs.existsSync(appBuildDir)) {
    console.error(`❌ Build directory not found: ${appBuildDir}`);
    console.error('Run `pnpm --dir site build` prior to running `check:seo`.\n');
    process.exit(1);
  }

  const htmlFiles = getHtmlFiles(appBuildDir);
  if (htmlFiles.length === 0) {
    console.error('❌ No prerendered HTML files found in build directory.');
    process.exit(1);
  }

  const isPreview = process.env.NEXT_PUBLIC_PREVIEW_GUARD === 'true';
  const robots = parseRobotsDirectives(rootDir);
  const sitemapUrls = parseSitemapUrls(rootDir) || [];
  const sitemapPathSet = new Set(
    sitemapUrls.map((u) => {
      const urlObj = new URL(u);
      return urlObj.pathname === '' ? '/' : urlObj.pathname;
    })
  );

  const errors = [];
  const tableRows = [];
  const seenTitles = new Map();
  const seenDescriptions = new Map();
  const internalLinkTargets = new Set();

  // First pass: parse all pages & collect links
  const parsedPages = htmlFiles.map((file) => {
    const route = resolveRouteFromPath(file);
    const html = fs.readFileSync(file, 'utf8');
    const parsed = parseHtmlMetadata(html, route);

    for (const link of parsed.links) {
      if (link.href.startsWith('/')) {
        const cleanHref = link.href.split('#')[0].split('?')[0];
        if (cleanHref) internalLinkTargets.add(cleanHref);
      } else if (link.href.startsWith(SEO_THRESHOLDS.CANONICAL_ORIGIN)) {
        const cleanHref = link.href.replace(SEO_THRESHOLDS.CANONICAL_ORIGIN, '').split('#')[0].split('?')[0];
        if (cleanHref) internalLinkTargets.add(cleanHref || '/');
      }
    }

    return parsed;
  });

  // Second pass: validate each page
  for (const page of parsedPages) {
    const route = page.route;
    const isNoIndexExpected = ALLOWLIST.NOINDEX_ROUTES.has(route) || isPreview;
    let pageStatus = 'PASS';
    const pageIssues = [];

    // 1. Language check
    if (!page.lang || !SEO_THRESHOLDS.VALID_LANGS.has(page.lang.toLowerCase())) {
      pageIssues.push(`Invalid or missing html lang: "${page.lang}"`);
    }

    // 2. Title check
    if (!page.title) {
      pageIssues.push('Missing <title>');
    } else {
      const tLen = page.title.length;
      if (tLen < SEO_THRESHOLDS.TITLE_MIN_LENGTH || tLen > SEO_THRESHOLDS.TITLE_MAX_LENGTH) {
        pageIssues.push(`Title length ${tLen} outside [${SEO_THRESHOLDS.TITLE_MIN_LENGTH}, ${SEO_THRESHOLDS.TITLE_MAX_LENGTH}]: "${page.title}"`);
      }
      if (seenTitles.has(page.title)) {
        pageIssues.push(`Duplicate <title> matches ${seenTitles.get(page.title)}: "${page.title}"`);
      } else {
        seenTitles.set(page.title, route);
      }
    }

    // 3. Description check
    if (!page.description) {
      pageIssues.push('Missing <meta name="description">');
    } else if (!isNoIndexExpected) {
      const dLen = page.description.length;
      if (dLen < SEO_THRESHOLDS.DESC_MIN_LENGTH || dLen > SEO_THRESHOLDS.DESC_MAX_LENGTH) {
        pageIssues.push(`Description length ${dLen} outside [${SEO_THRESHOLDS.DESC_MIN_LENGTH}, ${SEO_THRESHOLDS.DESC_MAX_LENGTH}]`);
      }
      if (seenDescriptions.has(page.description)) {
        pageIssues.push(`Duplicate description matches ${seenDescriptions.get(page.description)}`);
      } else {
        seenDescriptions.set(page.description, route);
      }
    }

    // 4. Canonical URL
    const expectedCanonical = route === '/' ? SEO_THRESHOLDS.CANONICAL_ORIGIN : `${SEO_THRESHOLDS.CANONICAL_ORIGIN}${route}`;
    if (!isNoIndexExpected) {
      if (!page.canonical) {
        pageIssues.push('Missing <link rel="canonical">');
      } else if (page.canonical !== expectedCanonical) {
        pageIssues.push(`Canonical "${page.canonical}" does not match "${expectedCanonical}"`);
      }
    }

    // 5. OpenGraph & Twitter Parity
    if (!isNoIndexExpected) {
      if (!page.ogTitle) pageIssues.push('Missing og:title');
      if (!page.ogDescription) pageIssues.push('Missing og:description');
      if (!page.ogImage) pageIssues.push('Missing og:image');
      if (!page.ogUrl) pageIssues.push('Missing og:url');
      if (!page.ogType) pageIssues.push('Missing og:type');
      if (!page.twitterCard) pageIssues.push('Missing twitter:card');
    }

    // 6. Heading Hierarchy & Single H1
    if (page.h1s.length !== 1) {
      pageIssues.push(`Expected exactly 1 <h1>, found ${page.h1s.length} (${page.h1s.join(' // ')})`);
    }
    let prevLevel = 1;
    for (const h of page.headings) {
      if (h.level > prevLevel + 1) {
        pageIssues.push(`Heading level skipped from h${prevLevel} to h${h.level} ("${h.text}")`);
      }
      prevLevel = h.level;
    }

    // 7. Image Alt Attributes
    for (const img of page.images) {
      if (!img.hasAlt) {
        pageIssues.push(`Image missing alt attribute: ${img.src}`);
      }
    }

    // 8. Generic / Empty Links
    for (const link of page.links) {
      if (!link.effectiveText) {
        pageIssues.push(`Link to "${link.href}" has empty text and no aria-label`);
      } else {
        for (const pattern of GENERIC_ANCHOR_PATTERNS) {
          if (pattern.test(link.effectiveText)) {
            pageIssues.push(`Generic anchor text "${link.effectiveText}" linking to "${link.href}"`);
          }
        }
      }
    }

    // 9. Structured Data JSON-LD
    if (page.jsonLdScripts.length === 0 && !isNoIndexExpected) {
      pageIssues.push('No JSON-LD structured data script found');
    }
    for (const scriptContent of page.jsonLdScripts) {
      let parsedJson;
      try {
        parsedJson = JSON.parse(scriptContent);
      } catch (err) {
        pageIssues.push(`JSON-LD failed JSON.parse: ${err.message}`);
        continue;
      }

      // Check forbidden commercial keys & types
      function checkNode(node, pathStr = 'root') {
        if (!node || typeof node !== 'object') return;
        if (Array.isArray(node)) {
          node.forEach((item, idx) => checkNode(item, `${pathStr}[${idx}]`));
          return;
        }

        for (const key of Object.keys(node)) {
          const lKey = key.toLowerCase();
          if (FORBIDDEN_JSONLD_KEYS.has(lKey)) {
            pageIssues.push(`Forbidden commercial/rating field "${key}" at ${pathStr}`);
          }
          if (typeof node[key] === 'string') {
            for (const banned of FORBIDDEN_COMMERCIAL_TERMS) {
              if (node[key].toLowerCase().includes(banned)) {
                pageIssues.push(`Banned commercial term "${banned}" in ${pathStr}.${key}`);
              }
            }
          }
          checkNode(node[key], `${pathStr}.${key}`);
        }

        // FAQPage validation against visible page content
        const nodeType = node['@type'];
        if (nodeType === 'FAQPage' && Array.isArray(node.mainEntity)) {
          for (const item of node.mainEntity) {
            const q = (item.name || '').trim().toLowerCase();
            if (q && !page.visibleText.includes(q)) {
              pageIssues.push(`FAQPage question "${item.name}" not found in visible page content`);
            }
          }
        }
      }

      checkNode(parsedJson);
    }

    // 10. Indexing / Robots Policy Enforcement
    if (isNoIndexExpected) {
      const hasNoIndex = page.robots && page.robots.includes('noindex');
      if (!hasNoIndex) {
        pageIssues.push(`Route expected to emit "noindex", but robots was: "${page.robots}"`);
      }
    } else {
      const hasNoIndex = page.robots && page.robots.includes('noindex');
      if (hasNoIndex) {
        pageIssues.push(`Production route emitting unexpected "noindex"`);
      }
    }

    // Record results
    if (pageIssues.length > 0) {
      pageStatus = 'FAIL';
      errors.push({ route, issues: pageIssues });
    }

    tableRows.push({
      route,
      title: (page.title || '').slice(0, 36),
      tLen: (page.title || '').length,
      dLen: (page.description || '').length,
      h1: page.h1s.length,
      status: pageStatus,
    });
  }

  // 11. Sitemap & Route Inclusion Validation
  for (const page of parsedPages) {
    if (!ALLOWLIST.NOINDEX_ROUTES.has(page.route)) {
      if (!sitemapPathSet.has(page.route)) {
        errors.push({
          route: page.route,
          issues: [`Indexable route "${page.route}" is missing from sitemap.xml`],
        });
      }
    }
  }

  for (const sPath of sitemapPathSet) {
    if (sPath === '/feed.xml') continue; // Feed is valid in sitemap
    const found = parsedPages.some((p) => p.route === sPath);
    if (!found) {
      errors.push({
        route: sPath,
        issues: [`Sitemap URL "${sPath}" does not resolve to any built route`],
      });
    }
  }

  // 12. Orphan Page Detection
  for (const sPath of sitemapPathSet) {
    if (sPath === '/' || ALLOWLIST.ORPHAN_EXEMPTIONS.has(sPath)) continue;
    if (!internalLinkTargets.has(sPath)) {
      errors.push({
        route: sPath,
        issues: [`Orphan page: "${sPath}" exists in sitemap but has no internal links pointing to it`],
      });
    }
  }

  // 13. Robots.txt Global Checks
  if (!robots) {
    errors.push({ route: '/robots.txt', issues: ['Missing robots.txt output'] });
  } else {
    if (isPreview) {
      if (!robots.disallowAll) {
        errors.push({ route: '/robots.txt', issues: ['Preview environment robots.txt must Disallow: /'] });
      }
    } else {
      if (robots.disallowAll) {
        errors.push({ route: '/robots.txt', issues: ['Production robots.txt has critical "Disallow: /" blocking search crawlers'] });
      }
      if (robots.sitemaps.length === 0) {
        errors.push({ route: '/robots.txt', issues: ['Robots.txt missing "Sitemap:" directive'] });
      }
      if (robots.disallowedPaths.includes('/book-a-call/thank-you')) {
        errors.push({ route: '/robots.txt', issues: ['Robots.txt disallows "/book-a-call/thank-you", preventing search engines from reading its noindex tag'] });
      }
    }
  }

  // ============================================================================
  // PRINT AUDIT REPORT TABLE
  // ============================================================================
  console.log('------------------------------------------------------------------------------------------------------');
  console.log('| ROUTE PATH                               | TITLE (SAMPLE)                       | T-LEN | D-LEN | H1 | STATUS |');
  console.log('------------------------------------------------------------------------------------------------------');
  for (const row of tableRows) {
    const routeCol = row.route.padEnd(40, ' ').slice(0, 40);
    const titleCol = row.title.padEnd(36, ' ').slice(0, 36);
    const tLenCol = String(row.tLen).padStart(5, ' ');
    const dLenCol = String(row.dLen).padStart(5, ' ');
    const h1Col = String(row.h1).padStart(2, ' ');
    const statusCol = row.status === 'PASS' ? ' \x1b[32mPASS\x1b[0m ' : ' \x1b[31mFAIL\x1b[0m ';
    console.log(`| ${routeCol} | ${titleCol} | ${tLenCol} | ${dLenCol} | ${h1Col} | ${statusCol} |`);
  }
  console.log('------------------------------------------------------------------------------------------------------\n');

  if (errors.length > 0) {
    console.error(`\x1b[31m❌ SEO Audit FAILED with ${errors.length} route violation(s):\x1b[0m\n`);
    for (const err of errors) {
      console.error(`  \x1b[1m[${err.route}]\x1b[0m`);
      for (const issue of err.issues) {
        console.error(`    • ${issue}`);
      }
    }
    console.error('\nFix the above issues and re-run `pnpm --dir site build && pnpm --dir site check:seo`.\n');
    process.exit(1);
  } else {
    console.log(`\x1b[32m✅ SEO Hard Gate Audit Passed! All ${parsedPages.length} routes satisfy 100% Technical SEO invariants.\x1b[0m\n`);
    process.exit(0);
  }
}

runAudit().catch((err) => {
  console.error('Fatal audit error:', err);
  process.exit(1);
});

