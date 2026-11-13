// site/lib/markdown/pipeline.js - Unified compiler pipeline (CommonMark + GFM -> HAST)
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSanitize from 'rehype-sanitize';

import { remarkGithubAlerts } from './plugins/alerts.js';
import { strictSanitizeSchema, rehypeExternalLinks } from './sanitizer.js';
import { extractHeadings } from './plugins/toc-extractor.js';
import { stripLeadingTitle } from './format.js';

// Pre-configured unified processor pipeline
const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkGithubAlerts)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, {
    behavior: 'append',
    properties: {
      className: ['anchor-link', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'ml-2', 'text-[#2563EB]', 'dark:text-[#60A5FA]', 'no-underline'],
      ariaLabel: 'Direct link to this section',
    },
    content: {
      type: 'text',
      value: '#',
    },
  })
  .use(rehypeExternalLinks)
  .use(rehypeSanitize, strictSanitizeSchema);

/**
 * Compiles a raw Markdown document into a sanitized HAST tree and extracts table-of-contents headings.
 *
 * @param {string} rawMarkdown - Raw Markdown content
 * @param {string} [title=''] - Article title for deduplication
 * @returns {Promise<{ hast: object, headings: Array<{ id: string, text: string, level: number }> }>}
 */
export async function processMarkdown(rawMarkdown = '', title = '') {
  const cleaned = stripLeadingTitle(rawMarkdown, title, 'markdown');
  const parsedMdast = markdownProcessor.parse(cleaned);
  const hast = await markdownProcessor.run(parsedMdast);
  const headings = extractHeadings(hast);

  return {
    hast,
    headings,
  };
}
