// section: article-mermaid-diagram
'use client';

import { useEffect, useRef, useState, useId } from 'react';
import gsap from 'gsap';
import { shouldAnimate } from '@/lib/motion.js';

/**
 * Theme variable generator mapping to Next Web Works Tailwind color tokens.
 *
 * @param {boolean} isDark
 * @returns {object}
 */
function getMermaidThemeVariables(isDark) {
  return {
    darkMode: isDark,
    fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: '13px',
    primaryColor: isDark ? '#1E293B' : '#F8FAFC',
    primaryTextColor: isDark ? '#F8FAFC' : '#0F172A',
    primaryBorderColor: isDark ? '#334155' : '#CBD5E1',
    lineColor: isDark ? '#60A5FA' : '#2563EB',
    secondaryColor: isDark ? '#0F172A' : '#FFFFFF',
    tertiaryColor: isDark ? '#1E293B' : '#F1F5F9',
    noteBkgColor: isDark ? '#0F172A' : '#EFF6FF',
    noteTextColor: isDark ? '#93C5FD' : '#1E40AF',
    noteBorderColor: isDark ? '#1E3A8A' : '#BFDBFE',
    actorBkg: isDark ? '#1E293B' : '#FFFFFF',
    actorBorder: isDark ? '#60A5FA' : '#2563EB',
    actorTextColor: isDark ? '#F8FAFC' : '#0F172A',
    actorLineColor: isDark ? '#475569' : '#94A3B8',
    signalColor: isDark ? '#F8FAFC' : '#0F172A',
    signalTextColor: isDark ? '#F8FAFC' : '#0F172A',
    labelBoxBkgColor: isDark ? '#0F172A' : '#FFFFFF',
    labelBoxBorderColor: isDark ? '#334155' : '#E2E8F0',
    labelTextColor: isDark ? '#CBD5E1' : '#334155',
    loopTextColor: isDark ? '#F8FAFC' : '#0F172A',
    edgeLabelBackground: isDark ? '#0F172A' : '#FFFFFF',
  };
}

/**
 * Interactive client leaf for rendering Mermaid diagrams lazily and securely.
 * Loads mermaid library dynamically on demand only when entering viewport.
 * Listens to light/dark theme switches and re-renders diagrams with matching tokens.
 *
 * @param {object} props
 * @param {string} props.code - Raw mermaid diagram syntax
 * @returns {JSX.Element}
 */
export default function MermaidDiagram({ code = '' }) {
  const containerRef = useRef(null);
  const svgWrapperRef = useRef(null);
  const reactId = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const diagramId = `mermaid-diag-${reactId}`;

  const [svgContent, setSvgContent] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let observer = null;
    let themeObserver = null;

    const renderDiagram = async () => {
      if (!containerRef.current || !code.trim()) return;

      try {
        const isDark = document.documentElement.classList.contains('dark');
        const mermaid = (await import('mermaid')).default;

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: isDark ? 'dark' : 'neutral',
          fontFamily: 'var(--font-inter), sans-serif',
          themeVariables: getMermaidThemeVariables(isDark),
        });

        // Ensure unique render ID per execution
        const renderId = `${diagramId}-${Date.now()}`;
        const { svg } = await mermaid.render(renderId, code.trim());

        if (isMounted) {
          setErrorMsg('');
          setSvgContent(svg);
          setIsRendered(true);

          if (shouldAnimate() && svgWrapperRef.current) {
            gsap.fromTo(
              svgWrapperRef.current,
              { opacity: 0, scale: 0.98 },
              { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' }
            );
          }
        }
      } catch (err) {
        if (isMounted) {
          console.warn('[Mermaid] Diagram rendering error:', err.message);
          setErrorMsg(err.message || 'Syntax error in Mermaid diagram');
          setIsRendered(false);
        }
      }
    };

    // 1. Viewport proximity observer for lazy dynamic import
    if (containerRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            renderDiagram();
            if (observer) {
              observer.disconnect();
              observer = null;
            }
          }
        },
        { rootMargin: '250px' }
      );

      observer.observe(containerRef.current);
    }

    // 2. Theme switch observer on document.documentElement
    themeObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'class') {
          renderDiagram();
        }
      }
    });

    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      isMounted = false;
      if (observer) observer.disconnect();
      if (themeObserver) themeObserver.disconnect();
    };
  }, [code, diagramId]);

  return (
    <figure
      ref={containerRef}
      role="region"
      data-section="article-mermaid-diagram"
      aria-label="Architecture diagram"
      tabIndex={0}
      className="my-8 rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50/70 dark:bg-[#0F172A]/70 p-4 sm:p-6 overflow-hidden shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
    >
      <figcaption className="sr-only">
        Technical diagram visualization. Accessible diagram code follows in fallback.
      </figcaption>

      {/* Rendered SVG output */}
      {isRendered && svgContent ? (
        <div
          ref={svgWrapperRef}
          className="overflow-x-auto w-full flex justify-center py-2 [&_svg]:max-w-full [&_svg]:h-auto focus:outline-none"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      ) : null}

      {/* Syntax Error State */}
      {errorMsg ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2 rounded-lg border border-amber-300 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/30 px-3.5 py-2 text-xs font-mono text-amber-800 dark:text-amber-200">
            <span className="font-semibold uppercase tracking-wider">Diagram Warning:</span>
            <span>Syntax error in Mermaid diagram</span>
          </div>
          <pre className="overflow-x-auto rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-900 p-4 font-mono text-xs text-slate-300">
            <code>{code}</code>
          </pre>
        </div>
      ) : null}

      {/* Visible SSR Fallback (Displayed while loading or when JS is disabled) */}
      {!isRendered && !errorMsg ? (
        <div className="space-y-2">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#1E293B] pb-2 font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
            <span className="uppercase tracking-wider font-semibold">Diagram Source Fallback</span>
            <span>Rendered via Mermaid</span>
          </div>
          <pre className="overflow-x-auto rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-900 p-4 font-mono text-xs text-slate-300">
            <code>{code}</code>
          </pre>
        </div>
      ) : null}
    </figure>
  );
}

