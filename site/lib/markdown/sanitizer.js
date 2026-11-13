// site/lib/markdown/sanitizer.js - Strict security allowlist schema for untrusted CMS Markdown & HTML
import { defaultSchema } from 'rehype-sanitize';

/**
 * Custom strict sanitize schema for untrusted article content.
 * Disallows MDX, raw script/style/iframe/inline styles, data: and javascript: URLs.
 * Restricts images to HTTPS and local relative paths only.
 */
export const strictSanitizeSchema = {
  ...defaultSchema,
  tagNames: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'blockquote',
    'hr',
    'pre',
    'code',
    'ul',
    'ol',
    'li',
    'strong',
    'b',
    'em',
    'i',
    'del',
    's',
    'strike',
    'kbd',
    'mark',
    'sub',
    'sup',
    'span',
    'br',
    'table',
    'thead',
    'tbody',
    'tfoot',
    'tr',
    'th',
    'td',
    'a',
    'img',
    'figure',
    'figcaption',
    'details',
    'summary',
    'div',
    'section',
    'input', // Only allowed for GFM task list checkboxes
  ],
  attributes: {
    ...defaultSchema.attributes,
    '*': [
      'id',
      'className',
      'class',
      'title',
      'aria-*',
      'role',
      'data-section',
      'data-mermaid',
      'data-alert-type',
      'data-lang',
      'data-footnotes',
      'data-footnote-ref',
      'data-footnote-backref',
      'tabIndex',
    ],
    a: ['href', 'title', 'target', 'rel', 'id', 'className', 'class', 'data-footnote-ref', 'data-footnote-backref'],
    img: ['src', 'alt', 'title', 'width', 'height', 'loading', 'decoding', 'className', 'class'],
    th: ['align', 'scope', 'colSpan', 'rowSpan', 'className', 'class'],
    td: ['align', 'colSpan', 'rowSpan', 'className', 'class'],
    code: ['className', 'class', 'data-lang'],
    input: ['type', 'disabled', 'checked', 'className', 'class'],
    section: ['className', 'class', 'data-footnotes'],
  },
  protocols: {
    href: ['http', 'https', 'mailto'],
    src: ['https'], // Strictly HTTPS or relative paths for external images (no http:, data:, or javascript:)
  },
  strip: ['script', 'style', 'iframe', 'object', 'embed', 'form', 'textarea', 'select', 'button'],
};

/**
 * Post-processes HAST nodes to ensure external links have secure attributes (rel="noopener noreferrer").
 *
 * @returns {Function} Unified HAST transformer
 */
export function rehypeExternalLinks() {
  return (tree) => {
    function visit(node) {
      if (node.type === 'element' && node.tagName === 'a') {
        const href = node.properties?.href;
        if (typeof href === 'string') {
          // If external URL
          if (/^https?:\/\//i.test(href) && !href.includes('nextwebworks.in')) {
            node.properties.target = '_blank';
            node.properties.rel = 'noopener noreferrer';
          }
        }
      }
      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    }
    visit(tree);
  };
}

