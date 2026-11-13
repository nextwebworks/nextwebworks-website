// section: article-copy-button
'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

/**
 * Compact copy-to-clipboard button leaf for fenced code blocks.
 *
 * @param {object} props
 * @param {string} props.code - Raw unformatted code to copy
 * @returns {JSX.Element}
 */
export default function CopyButton({ code = '' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn('[CopyButton] Clipboard write failed:', err);
    }
  };

  return (
    <button
      type="button"
      data-section="article-copy-button"
      onClick={handleCopy}
      aria-label={copied ? 'Copied to clipboard' : 'Copy code to clipboard'}
      title={copied ? 'Copied!' : 'Copy code'}
      className="inline-flex items-center gap-1.5 rounded px-2 py-1 font-mono text-[11px] font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-[#10B981]" aria-hidden="true" />
          <span className="text-[#10B981]">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

