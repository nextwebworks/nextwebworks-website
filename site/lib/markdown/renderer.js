// site/lib/markdown/renderer.js - Server-side HAST to React element converter with site design tokens
import React from 'react';
import { Info, Lightbulb, AlertCircle, AlertTriangle, ShieldAlert } from 'lucide-react';
import CopyButton from '@/app/blog/_components/article/CopyButton.js';
import MermaidDiagram from '@/app/blog/_components/article/MermaidDiagram.js';
import MotionRevealBlock from '@/components/motion/MotionRevealBlock.js';
import { highlightCode, extractLanguage } from './plugins/shiki-highlighter.js';

const ALERT_CONFIG = {
  note: {
    icon: Info,
    title: 'Note',
    border: 'border-[#2563EB]/40',
    bg: 'bg-blue-50/50 dark:bg-[#0F172A]',
    accent: 'text-[#2563EB] dark:text-[#60A5FA]',
  },
  tip: {
    icon: Lightbulb,
    title: 'Tip',
    border: 'border-[#10B981]/40',
    bg: 'bg-emerald-50/50 dark:bg-emerald-950/20',
    accent: 'text-[#10B981]',
  },
  important: {
    icon: AlertCircle,
    title: 'Important',
    border: 'border-purple-400/40 dark:border-purple-900/40',
    bg: 'bg-purple-50/50 dark:bg-purple-950/20',
    accent: 'text-purple-600 dark:text-purple-400',
  },
  warning: {
    icon: AlertTriangle,
    title: 'Warning',
    border: 'border-amber-400/40 dark:border-amber-900/40',
    bg: 'bg-amber-50/50 dark:bg-amber-950/20',
    accent: 'text-amber-600 dark:text-amber-400',
  },
  caution: {
    icon: ShieldAlert,
    title: 'Caution',
    border: 'border-red-400/40 dark:border-red-900/40',
    bg: 'bg-red-50/50 dark:bg-red-950/20',
    accent: 'text-red-600 dark:text-red-400',
  },
};

function extractRawCode(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value || '';
  if (Array.isArray(node.children)) {
    return node.children.map(extractRawCode).join('');
  }
  return '';
}

/**
 * Recursively converts a sanitized HAST node into React Server Component elements.
 *
 * @param {object} node - HAST AST node
 * @param {string|number} key - Unique React key
 * @returns {Promise<React.ReactNode>}
 */
export async function renderHastNode(node, key) {
  if (!node) return null;

  if (node.type === 'text') {
    return node.value;
  }

  if (node.type === 'root') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return <>{children}</>;
  }

  if (node.type !== 'element') {
    return null;
  }

  const tag = node.tagName;
  const props = node.properties || {};

  // 1. Code blocks (<pre> containing <code>)
  if (tag === 'pre') {
    const codeChild = (node.children || []).find((c) => c.type === 'element' && c.tagName === 'code');
    const rawCode = extractRawCode(codeChild || node).trim();
    const className = codeChild?.properties?.className?.join(' ') || props.className?.join(' ') || '';
    const lang = extractLanguage(className);

    // Fenced Mermaid block
    if (lang === 'mermaid') {
      return (
        <MotionRevealBlock key={key}>
          <MermaidDiagram code={rawCode} />
        </MotionRevealBlock>
      );
    }

    // Standard fenced code block with Shiki server highlighting
    const highlightedHtml = await highlightCode(rawCode, lang);
    const displayLang = lang.toUpperCase();

    return (
      <MotionRevealBlock key={key} className="my-6 not-prose">
        <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] overflow-hidden bg-slate-950 shadow-sm">
          <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900/90 font-mono text-xs text-slate-400">
            <span className="uppercase font-semibold tracking-wider text-[#60A5FA]">
              {displayLang}
            </span>
            <CopyButton code={rawCode} />
          </div>
          <div
            className="p-4 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-slate-100 [&_pre]:bg-transparent [&_pre]:p-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:border-0 [&_span]:text-[var(--shiki-light)] dark:[&_span]:text-[var(--shiki-dark)]"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        </div>
      </MotionRevealBlock>
    );
  }

  // 2. Alert callouts (<div class="nww-markdown-alert" data-alert-type="...">)
  if (tag === 'div' && props['data-alert-type']) {
    const alertType = props['data-alert-type'] || 'note';
    const conf = ALERT_CONFIG[alertType] || ALERT_CONFIG.note;
    const AlertIcon = conf.icon;
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));

    return (
      <MotionRevealBlock key={key}>
        <div className={`my-6 rounded-xl border ${conf.border} ${conf.bg} p-4 sm:p-5 text-sm space-y-2`}>
          <div className={`flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider ${conf.accent}`}>
            <AlertIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{conf.title}</span>
          </div>
          <div className="text-slate-700 dark:text-[#CBD5E1] text-xs sm:text-sm leading-relaxed [&_p]:my-1.5">
            {children}
          </div>
        </div>
      </MotionRevealBlock>
    );
  }

  // 3. Tables: wrap in overflow-x container and subtle reveal
  if (tag === 'table') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return (
      <MotionRevealBlock key={key} className="my-8">
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-[#1E293B] shadow-xs">
          <table className="w-full text-left text-sm border-collapse">
            {children}
          </table>
        </div>
      </MotionRevealBlock>
    );
  }

  // 4. Standard Headings with anchor link integration
  if (/^h[1-6]$/.test(tag)) {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    const id = props.id;

    if (tag === 'h1') {
      return (
        <h1 key={key} id={id} className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-12 mb-6 group flex items-center">
          {children}
        </h1>
      );
    }
    if (tag === 'h2') {
      return (
        <h2 key={key} id={id} className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-12 mb-4 pb-2 border-b border-slate-200 dark:border-[#1E293B] group flex items-center justify-between">
          {children}
        </h2>
      );
    }
    if (tag === 'h3') {
      return (
        <h3 key={key} id={id} className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-8 mb-3 group flex items-center justify-between">
          {children}
        </h3>
      );
    }
    if (tag === 'h4') {
      return (
        <h4 key={key} id={id} className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
          {children}
        </h4>
      );
    }
    return React.createElement(tag, { key, id, className: 'font-heading font-bold text-slate-900 dark:text-white mt-4 mb-2' }, children);
  }

  // 5. Paragraphs
  if (tag === 'p') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return (
      <p key={key} className="my-5 leading-[1.75] text-slate-700 dark:text-[#CBD5E1]">
        {children}
      </p>
    );
  }

  // 6. Blockquotes
  if (tag === 'blockquote') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return (
      <blockquote key={key} className="my-6 border-l-4 border-[#2563EB] pl-4 py-1.5 italic bg-slate-50/50 dark:bg-[#0F172A]/50 rounded-r-lg text-slate-700 dark:text-[#CBD5E1]">
        {children}
      </blockquote>
    );
  }

  // 7. Lists
  if (tag === 'ul') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return (
      <ul key={key} className="my-5 ml-6 list-disc space-y-2 text-slate-700 dark:text-[#CBD5E1] marker:text-[#2563EB] dark:marker:text-[#60A5FA]">
        {children}
      </ul>
    );
  }

  if (tag === 'ol') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return (
      <ol key={key} className="my-5 ml-6 list-decimal space-y-2 text-slate-700 dark:text-[#CBD5E1] marker:font-mono marker:font-semibold marker:text-[#2563EB] dark:marker:text-[#60A5FA]">
        {children}
      </ol>
    );
  }

  if (tag === 'li') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    const hasCheckbox = (node.children || []).some(
      (c) => c.type === 'element' && c.tagName === 'input' && c.properties?.type === 'checkbox'
    );

    if (hasCheckbox) {
      return (
        <li key={key} className="list-none -ml-6 flex items-start gap-2.5 my-1">
          {children}
        </li>
      );
    }
    return (
      <li key={key} className="leading-relaxed">
        {children}
      </li>
    );
  }

  // 8. Task list checkboxes
  if (tag === 'input' && props.type === 'checkbox') {
    return (
      <input
        key={key}
        type="checkbox"
        disabled
        defaultChecked={Boolean(props.checked)}
        className="mt-1 h-4 w-4 rounded border-slate-300 dark:border-slate-700 text-[#2563EB] focus:ring-0 cursor-default"
      />
    );
  }

  // 9. Links
  if (tag === 'a') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return (
      <a
        key={key}
        href={props.href}
        title={props.title}
        target={props.target}
        rel={props.rel}
        className="text-[#2563EB] dark:text-[#60A5FA] underline underline-offset-2 hover:text-[#1D4ED8] dark:hover:text-[#93C5FD] transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
      >
        {children}
      </a>
    );
  }

  // 10. Table elements
  if (tag === 'thead') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return <thead key={key} className="bg-slate-50 dark:bg-[#0F172A] border-b border-slate-200 dark:border-[#1E293B]">{children}</thead>;
  }
  if (tag === 'tbody') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return <tbody key={key} className="divide-y divide-slate-100 dark:divide-[#1E293B]/60 bg-white dark:bg-[#0B0F19]">{children}</tbody>;
  }
  if (tag === 'tr') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return <tr key={key} className="hover:bg-slate-50/60 dark:hover:bg-[#0F172A]/60 transition-colors">{children}</tr>;
  }
  if (tag === 'th') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return <th key={key} scope="col" className="py-3 px-4 font-mono font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-xs whitespace-nowrap">{children}</th>;
  }
  if (tag === 'td') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return <td key={key} className="py-3 px-4 text-slate-700 dark:text-[#CBD5E1]">{children}</td>;
  }

  // 11. Images & Figures
  if (tag === 'img') {
    return (
      <figure key={key} className="my-8 space-y-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={props.src}
          alt={props.alt || ''}
          title={props.title}
          loading="lazy"
          decoding="async"
          className="rounded-xl border border-slate-200 dark:border-[#1E293B] max-w-full h-auto mx-auto shadow-xs"
        />
        {props.title ? (
          <figcaption className="font-mono text-xs text-center text-slate-500 dark:text-[#64748B]">
            {props.title}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  // 12. Inline text elements
  if (tag === 'strong' || tag === 'b') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return <strong key={key} className="font-semibold text-slate-900 dark:text-white">{children}</strong>;
  }
  if (tag === 'em' || tag === 'i') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return <em key={key} className="italic">{children}</em>;
  }
  if (tag === 'del' || tag === 's' || tag === 'strike') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return <del key={key} className="line-through text-slate-500 dark:text-[#64748B]">{children}</del>;
  }
  if (tag === 'code') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return <code key={key} className="font-mono text-[0.875em] px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-[#1E293B] text-[#2563EB] dark:text-[#60A5FA] border border-slate-200 dark:border-slate-800">{children}</code>;
  }
  if (tag === 'kbd') {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return <kbd key={key} className="font-mono text-xs px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-[#1E293B] shadow-xs text-slate-800 dark:text-slate-200">{children}</kbd>;
  }
  if (tag === 'hr') {
    return <hr key={key} className="my-8 border-t border-slate-200 dark:border-[#1E293B]" />;
  }

  // 13. Footnotes container
  if (tag === 'section' && (props['data-footnotes'] || props.className?.includes('footnotes') || props.class?.includes('footnotes'))) {
    const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
    return (
      <section key={key} className="mt-12 pt-6 border-t border-slate-200 dark:border-[#1E293B] text-xs text-slate-500 dark:text-[#94A3B8] space-y-2">
        <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
          Footnotes
        </h3>
        {children}
      </section>
    );
  }

  // Default fallback for any allowed semantic HTML tag
  const children = await Promise.all((node.children || []).map((c, i) => renderHastNode(c, i)));
  return React.createElement(tag, { key, ...props }, children);
}

/**
 * Server component that compiles and renders Markdown content into React Server Components.
 *
 * @param {object} props
 * @param {object} props.hast - Pre-compiled sanitized HAST tree
 * @returns {Promise<JSX.Element>}
 */
export async function MarkdownContent({ hast }) {
  if (!hast) return null;
  const rendered = await renderHastNode(hast, 'root');
  return <div className="space-y-1">{rendered}</div>;
}
