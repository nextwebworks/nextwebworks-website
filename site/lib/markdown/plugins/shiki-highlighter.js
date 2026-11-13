// site/lib/markdown/plugins/shiki-highlighter.js - Server-side dual-theme syntax highlighter using Shiki
import { createHighlighter } from 'shiki';

let highlighterPromise = null;

const SUPPORTED_LANGS = [
  'javascript',
  'typescript',
  'jsx',
  'tsx',
  'html',
  'css',
  'json',
  'bash',
  'shell',
  'markdown',
  'yaml',
  'yml',
  'python',
  'sql',
  'text',
];

/**
 * Returns a cached singleton Shiki highlighter instance with dual themes loaded.
 *
 * @returns {Promise<import('shiki').Highlighter>}
 */
export async function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-light', 'github-dark-default'],
      langs: SUPPORTED_LANGS,
    }).catch((err) => {
      console.error('[Shiki] Failed to initialize highlighter:', err);
      highlighterPromise = null;
      throw err;
    });
  }
  return highlighterPromise;
}

/**
 * Normalizes language string extracted from className (e.g., "language-typescript" -> "typescript").
 *
 * @param {string} className - Element class string
 * @returns {string} Normalized language identifier
 */
export function extractLanguage(className = '') {
  if (typeof className !== 'string') return 'text';
  const match = className.match(/language-([a-zA-Z0-9_\-\.]+)/i);
  if (!match) return 'text';
  const lang = match[1].toLowerCase();

  // Aliases
  if (lang === 'js') return 'javascript';
  if (lang === 'ts') return 'typescript';
  if (lang === 'sh' || lang === 'zsh') return 'bash';
  if (lang === 'py') return 'python';
  if (lang === 'yml') return 'yaml';
  return lang;
}

/**
 * Highlights a code string into theme-aware HTML tokens server-side.
 * Falls back gracefully to escaped plain text if language is unknown or parsing fails.
 *
 * @param {string} code - Raw code string
 * @param {string} lang - Language identifier
 * @returns {Promise<string>} Dual-theme HTML string
 */
export async function highlightCode(code = '', lang = 'text') {
  try {
    const highlighter = await getHighlighter();
    const loadedLangs = highlighter.getLoadedLanguages();
    const safeLang = loadedLangs.includes(lang) ? lang : 'text';

    return highlighter.codeToHtml(code, {
      lang: safeLang,
      themes: {
        light: 'github-light',
        dark: 'github-dark-default',
      },
      defaultColor: false,
    });
  } catch (err) {
    console.warn(`[Shiki] Highlighting failed for lang "${lang}", falling back to plain text:`, err.message);
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return `<pre><code>${escaped}</code></pre>`;
  }
}

