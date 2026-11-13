// site/lib/blog-utils.js - Plain-text excerpts, allowlist sanitizer, and category key helper
import { getArticleExcerpt, getArticlePlainText, getArticleReadingTime, getArticleDescription } from './markdown/helpers.js';
import { detectContentFormat } from './markdown/format.js';

export { getArticleExcerpt, getArticlePlainText, getArticleReadingTime, getArticleDescription, detectContentFormat };

/**
 * Categorizes a string into one of 4 deterministic design motifs.
 *
 * @param {string} category - Category label
 * @returns {'agency-growth' | 'project-scoping' | 'architecture' | 'general'}
 */
export function getCategoryKey(category = '') {
  const c = String(category).toLowerCase();
  if (c.includes('growth') || c.includes('strategy') || c.includes('agency')) return 'agency-growth';
  if (c.includes('scoping') || c.includes('scope') || c.includes('pricing') || c.includes('fixed')) return 'project-scoping';
  if (c.includes('arch') || c.includes('stack') || c.includes('next') || c.includes('web') || c.includes('headless')) return 'architecture';
  return 'general';
}

/**
 * Strips HTML and Markdown tags, removes duplicate leading titles, decodes entities,
 * and trims cleanly on a word boundary with an ellipsis only when truncated.
 *
 * @param {string} html - Raw HTML or Markdown text from CMS
 * @param {string} [title=''] - Article title for deduplication
 * @param {number} [maxLength=140] - Character ceiling
 * @returns {string} Clean plain text
 */
export function stripHtml(html, title = '', maxLength = 140) {
  return getArticleExcerpt(html, title, maxLength);
}

function formatCell(cell) {
  if (!cell) return '';
  return cell
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#2563EB] dark:text-[#38BDF8] underline font-medium">$1</a>');
}

function formatTableFromRows(rows) {
  if (!rows || rows.length < 2 || !/^\|[\s\-:|]+\|$/.test(rows[1])) return null;
  const parseCells = (r) => r.replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => formatCell(c.trim()));
  const headers = parseCells(rows[0]);
  const dataRows = rows.slice(2).map(parseCells);

  let html = '<div class="overflow-x-auto my-8 rounded-xl border border-slate-200 dark:border-[#1E293B] shadow-xs">';
  html += '<table class="w-full text-left text-xs border-collapse">';
  html += '<thead class="bg-slate-50 dark:bg-[#0F172A] border-b border-slate-200 dark:border-[#1E293B]"><tr>';
  for (const h of headers) {
    html += `<th scope="col" class="py-3.5 px-4 font-mono font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">${h}</th>`;
  }
  html += '</tr></thead><tbody class="divide-y divide-slate-100 dark:divide-[#1E293B]/60 bg-white dark:bg-[#0B0F19]">';
  for (const row of dataRows) {
    html += '<tr class="hover:bg-slate-50/60 dark:hover:bg-[#0F172A]/60 transition-colors">';
    for (let i = 0; i < row.length; i++) {
      const cls = i === 0 ? 'py-3.5 px-4 font-medium text-slate-900 dark:text-white whitespace-nowrap' : 'py-3.5 px-4 text-slate-700 dark:text-[#CBD5E1] leading-relaxed';
      html += `<td class="${cls}">${row[i] || ''}</td>`;
    }
    html += '</tr>';
  }
  html += '</tbody></table></div>';
  return html;
}

export function parseMarkdownTables(html) {
  if (!html) return '';
  const pRegex = /(?:<p>\s*\|(?:(?!<\/p>)[\s\S])*?\|\s*<\/p>\s*)+/gi;
  let res = html.replace(pRegex, (block) => {
    const matches = block.match(/<p>\s*(\|[\s\S]*?\|)\s*<\/p>/gi);
    if (!matches || matches.length < 2) return block;
    const rawRows = matches.map((p) => p.replace(/^<p>\s*/i, '').replace(/\s*<\/p>$/i, '').trim());
    return formatTableFromRows(rawRows) || block;
  });
  const rawRegex = /(?:^|\n)(\|[^\n]+\|\r?\n\|[\s\-:|]+\|\r?\n(?:\|[^\n]+\|\r?\n?)+)/g;
  return res.replace(rawRegex, (m, b) => {
    const tbl = formatTableFromRows(b.trim().split(/\r?\n/).map((r) => r.trim()).filter(Boolean));
    return tbl ? `\n${tbl}\n` : m;
  });
}

/**
 * Sanitizes untrusted CMS article HTML using an allowlist approach, removes
 * any duplicate leading <h1>, and converts markdown tables into responsive HTML tables.
 *
 * @param {string} rawHtml - Unsanitized HTML string from CMS
 * @returns {string} Sanitized, render-safe HTML
 */
export function cleanArticleHtml(rawHtml) {
  if (!rawHtml) return '';
  let html = String(rawHtml);

  // 1. Remove duplicate leading <h1>...</h1> since the page renders post.title in the header
  html = html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '');

  // 2. Convert markdown tables (both raw and paragraph-wrapped) into styled HTML tables
  html = parseMarkdownTables(html);

  // 3. Strip dangerous tags and attributes (scripts, iframes, objects, forms, inline event handlers)
  html = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href="#"');

  // 4. Resolve legal entity proprietor placeholder
  html = html.replace(/\[PROPRIETOR FULL LEGAL NAME - TO PROVIDE\]/gi, 'Devansh Khetwani');

  return html;
}
