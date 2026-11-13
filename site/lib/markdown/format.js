// site/lib/markdown/format.js - Format detection, frontmatter stripping, and title deduplication

/**
 * Strips YAML frontmatter enclosed by triple dashes (---) from the beginning of markdown content.
 *
 * @param {string} content - Raw markdown or text string
 * @returns {string} Content without frontmatter
 */
export function stripFrontmatter(content = '') {
  if (typeof content !== 'string') return '';
  return content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
}

/**
 * Strips a leading duplicate title heading (Markdown `# Title` or HTML `<h1>Title</h1>`).
 *
 * @param {string} content - Article content string
 * @param {string} [title=''] - Expected title for deduplication
 * @param {'markdown'|'html'} [format='markdown'] - Content format
 * @returns {string} Content with leading duplicate title stripped
 */
export function stripLeadingTitle(content = '', title = '', format = 'markdown') {
  if (typeof content !== 'string') return '';
  let cleaned = content;

  if (format === 'markdown') {
    // 1. Remove frontmatter first
    cleaned = stripFrontmatter(cleaned).trimStart();

    // 2. If it starts with a leading ATX heading (# ...)
    const headingMatch = cleaned.match(/^#{1,2}\s+([^\n]+)\r?\n+/);
    if (headingMatch) {
      const headingText = headingMatch[1].trim().toLowerCase();
      const normTitle = String(title || '').trim().toLowerCase();
      // If title is not specified, or matches the heading text, strip it
      if (!normTitle || headingText === normTitle || headingText.includes(normTitle)) {
        cleaned = cleaned.slice(headingMatch[0].length);
      }
    }
  } else {
    // HTML format: strip leading <h1>...</h1>
    cleaned = cleaned.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '');
  }

  return cleaned;
}

/**
 * Conservative format detection rule to identify whether content is Markdown or HTML.
 * Prefers explicit CMS fields when present, otherwise evaluates conservative structural syntax.
 *
 * @param {string} rawContent - Raw body string from CMS
 * @param {object} [post={}] - Article document containing optional format fields
 * @returns {'markdown'|'html'} Determined content format
 */
export function detectContentFormat(rawContent = '', post = {}) {
  // 1. Explicit CMS model format field
  if (post?.format === 'markdown' || post?.contentType === 'text/markdown') {
    return 'markdown';
  }
  if (post?.format === 'html' || post?.contentType === 'text/html') {
    return 'html';
  }

  const text = String(rawContent || '').trim();
  if (!text) return 'markdown';

  // 2. YAML frontmatter check
  if (/^---\r?\n[\s\S]*?\r?\n---/.test(text)) {
    return 'markdown';
  }

  // 3. Distinct Markdown syntax checks
  const hasFencedCode = /```[a-zA-Z0-9_\-\.]*\r?\n/.test(text);
  const hasMarkdownHeading = /(?:^|\r?\n)#{1,6}\s+\S+/.test(text);
  const hasMarkdownAlert = /(?:^|\r?\n)>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i.test(text);
  const hasMarkdownFootnote = /\[\^[^\]]+\]/.test(text);
  const hasMarkdownTaskList = /(?:^|\r?\n)\s*[-*+]\s+\[[ xX]\]\s+/.test(text);
  const hasMarkdownTable = /(?:^|\r?\n)\|[^\r\n]+\|\r?\n\|[\s\-:|]+\|\r?\n\|/.test(text);

  if (
    hasFencedCode ||
    hasMarkdownHeading ||
    hasMarkdownAlert ||
    hasMarkdownFootnote ||
    hasMarkdownTaskList ||
    hasMarkdownTable
  ) {
    return 'markdown';
  }

  // 4. Block-level HTML check
  const hasHtmlBlockTags = /<(?:p|div|section|article|h1|h2|h3|h4|ul|ol|table)\b[^>]*>/i.test(text);
  if (hasHtmlBlockTags) {
    return 'html';
  }

  // Default safely to Markdown (CommonMark renders plain text safely as standard paragraphs)
  return 'markdown';
}

