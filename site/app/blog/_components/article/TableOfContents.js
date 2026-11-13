// section: article-toc
'use client';

import { useEffect, useState, useRef } from 'react';
import { ChevronDown, List } from 'lucide-react';
import { shouldAnimate } from '@/lib/motion.js';

/**
 * Table of Contents client component for blog articles.
 * Renders a sticky desktop sidebar and a collapsible mobile drawer.
 * Highlights the active heading in the viewport and provides smooth anchor scrolling.
 *
 * @param {object} props
 * @param {Array<{ id: string, text: string, level: number }>} props.headings
 * @returns {JSX.Element|null}
 */
export default function TableOfContents({ headings = [] }) {
  const [activeId, setActiveId] = useState(headings[0]?.id || '');
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!Array.isArray(headings) || headings.length < 3) return;

    const handleObserver = (entries) => {
      // Find the first intersecting heading from top
      const visible = entries.find((e) => e.isIntersecting);
      if (visible?.target?.id) {
        setActiveId(visible.target.id);
      }
    };

    observerRef.current = new IntersectionObserver(handleObserver, {
      rootMargin: '-80px 0px -65% 0px',
      threshold: 0,
    });

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [headings]);

  // Only render if >= 3 headings exist
  if (!Array.isArray(headings) || headings.length < 3) {
    return null;
  }

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    setActiveId(id);
    setMobileOpen(false);

    const offset = 88;
    const isDesktop = shouldAnimate();

    // Check if Lenis smooth scroller is active on desktop
    if (isDesktop && window.__lenis) {
      window.__lenis.scrollTo(target, { offset: -offset });
      return;
    }

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <nav
      aria-label="Table of contents"
      data-section="article-toc"
      className="not-prose my-6 lg:my-0"
    >
      {/* Mobile Collapsible Accordion */}
      <div className="lg:hidden rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-4">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          className="flex w-full items-center justify-between font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
        >
          <span className="flex items-center gap-2">
            <List className="h-4 w-4 text-[#2563EB] dark:text-[#60A5FA]" aria-hidden="true" />
            <span>Table of Contents</span>
          </span>
          <ChevronDown
            className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${mobileOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>

        {mobileOpen && (
          <ul className="mt-4 space-y-2.5 border-t border-slate-200 dark:border-[#1E293B] pt-3 text-xs">
            {headings.map((h) => {
              const isActive = activeId === h.id;
              return (
                <li key={h.id} className={h.level === 3 ? 'pl-3' : ''}>
                  <a
                    href={`#${h.id}`}
                    onClick={(e) => handleScrollTo(e, h.id)}
                    className={`block py-0.5 leading-snug transition-colors ${
                      isActive
                        ? 'font-semibold text-[#2563EB] dark:text-[#60A5FA]'
                        : 'text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {h.text}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <div className="hidden lg:block sticky top-28 space-y-3">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-[#1E293B]">
          <List className="h-4 w-4 text-[#2563EB] dark:text-[#60A5FA]" aria-hidden="true" />
          <span className="font-mono text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
            On this page
          </span>
        </div>

        <ul className="space-y-2 text-xs leading-relaxed max-h-[calc(100vh-10rem)] overflow-y-auto pr-2">
          {headings.map((h) => {
            const isActive = activeId === h.id;
            return (
              <li
                key={h.id}
                className={`${h.level === 3 ? 'pl-3 border-l border-slate-200 dark:border-slate-800 ml-1' : ''}`}
              >
                <a
                  href={`#${h.id}`}
                  onClick={(e) => handleScrollTo(e, h.id)}
                  className={`block py-0.5 transition-colors ${
                    isActive
                      ? 'font-semibold text-[#2563EB] dark:text-[#60A5FA]'
                      : 'text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {h.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

