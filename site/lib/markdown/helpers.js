// site/lib/markdown/helpers.js - Shared plain-text excerpts, reading time, and metadata helpers
import { detectContentFormat, stripFrontmatter, stripLeadingTitle } from './format.js';

/**
 * Converts raw article content (Markdown or HTML) into clean, unformatted plain text.
 * Strips markup, removes duplicate leading headings, and collapses extra whitespace.
 *
 * @param {string} content - Raw markdown or HTML string
 * @param {string} [title=''] - Article title for deduplication
 * @param {'markdown'|'html'} [format] - Optional explicit format override
 * @returns {string} Clean plain text
 */
export function getArticlePlainText(content = '', title = '', format) {
  if (!content) return '';
  const effFormat = format || detectContentFormat(content);
  let text = String(content);

  if (effFormat === 'markdown') {
    // 1. Strip YAML frontmatter & leading title
    text = stripLeadingTitle(text, title, 'markdown');

    // 2. Strip code blocks (``` ... ```)
    text = text.replace(/```[\s\S]*?```/g, ' ');

    // 3. Strip HTML tags if any embedded in Markdown
    text = text.replace(/<[^>]*>/g, ' ');

    // 4. Strip images (![alt](url)) -> keep nothing
    text = text.replace(/!\[([^\]]*)\]\([^)]*\)/g, ' ');

    // 5. Replace links ([text](url)) with text
    text = text.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');

    // 6. Strip Markdown tables (| col | col | -> spaces)
    text = text.replace(/(?:^|\n)\|[^\n]+\|/g, ' ');

    // 7. Strip blockquote indicators and alert badges (> [!NOTE] -> space)
    text = text.replace(/(?:^|\n)>\s*(?:\[![A-Z]+\])?/gi, ' ');

    // 8. Strip headings markers (#, ##, etc.)
    text = text.replace(/(?:^|\n)#{1,6}\s+/g, ' ');

    // 9. Strip bold, italic, strikethrough, inline code
    text = text
      .replace(/(\*\*|__)(.*?)\1/g, '$2')
      .replace(/(\*|_)(.*?)\1/g, '$2')
      .replace(/~~(.*?)~~/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\[\^[^\]]+\]/g, ''); // footnotes
  } else {
    // HTML format
    text = stripLeadingTitle(text, title, 'html');
    text = text.replace(/<[^>]*>/g, ' ');
  }

  // Decode standard HTML entities
  text = text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');

  // Normalize whitespace
  text = text.replace(/\s+/g, ' ').trim();

  // Deduplicate title from start if repeated verbatim
  if (title) {
    const cleanTitle = title.trim();
    if (text.toLowerCase().startsWith(cleanTitle.toLowerCase())) {
      text = text.slice(cleanTitle.length).replace(/^[:\-\s]+/, '').trim();
    }
  }

  return text;
}

/**
 * Generates a clean plain-text excerpt trimmed on a word boundary with an ellipsis only when truncated.
 *
 * @param {string} content - Raw content (Markdown or HTML)
 * @param {string} [title=''] - Article title
 * @param {number} [maxLength=140] - Target character ceiling
 * @returns {string} Formatted plain-text excerpt
 */
export function getArticleExcerpt(content = '', title = '', maxLength = 140) {
  const plain = getArticlePlainText(content, title);
  if (!plain) return '';
  if (plain.length <= maxLength) return plain;

  const sub = plain.slice(0, maxLength);
  const lastSpace = sub.lastIndexOf(' ');
  const trimmed = lastSpace > 0 ? sub.slice(0, lastSpace) : sub;
  return `${trimmed}...`;
}

/**
 * Calculates estimated reading time for article content.
 * Assumes a standard reading speed of 200 words per minute.
 *
 * @param {string} content - Raw content
 * @returns {{ minutes: number, text: string, words: number }}
 */
export function getArticleReadingTime(content = '') {
  const plain = getArticlePlainText(content);
  if (!plain) return { minutes: 1, text: '1 min read', words: 0 };

  const words = plain.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return {
    minutes,
    text: `${minutes} min read`,
    words,
  };
}

/**
 * Resolves an SEO-safe description for metadata and Schema.org JSON-LD structured data.
 *
 * @param {object} post - Article document
 * @param {number} [maxLength=160] - Character ceiling
 * @returns {string} Clean meta description
 */
export function getArticleDescription(post = {}, maxLength = 160) {
  if (post?.metaDescription) {
    return String(post.metaDescription).trim();
  }
  if (post?.summary) {
    return String(post.summary).trim();
  }
  return getArticleExcerpt(post?.content || '', post?.title || '', maxLength);
}

