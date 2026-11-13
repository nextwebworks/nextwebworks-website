// section: cal-embed
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function CalEmbed() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initInlineWidgets();
    }
  }, []);

  const handleScriptLoad = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initInlineWidgets();
    }
  };

  return (
    <div
      data-section="cal-embed"
      className="mt-6 rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-4 sm:p-6 shadow-xs transition-colors"
    >
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={handleScriptLoad}
      />

      {/* Calendly Inline Widget styled to current brand tokens */}
      <div className="relative min-h-[700px] w-full rounded-xl overflow-hidden bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/60 dark:border-[#1E293B]/60">
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/devanshkhetwani/30min?primary_color=2563eb"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>

      {/* Footer Info & Direct Access Fallbacks */}
      <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#1E293B] flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 dark:text-[#94A3B8]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" aria-hidden="true" />
          <span className="font-medium text-slate-800 dark:text-[#E2E8F0]">
            Direct Founder Calendar (30-Min Technical Review)
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://calendly.com/devanshkhetwani/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2563EB] dark:text-[#60A5FA] font-medium hover:underline inline-flex items-center gap-1"
          >
            <span>Open Calendly</span>
            <span aria-hidden="true">↗</span>
          </a>
          <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">|</span>
          <a
            href="https://wa.me/917999934815?text=Hi%2C%20I%20want%20to%20book%20a%20technical%20discovery%20call."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#10B981] font-medium hover:underline inline-flex items-center gap-1"
          >
            <span>WhatsApp Us</span>
            <span aria-hidden="true">↗</span>
          </a>
          <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">|</span>
          <Link
            href="/contact"
            className="text-slate-700 dark:text-slate-300 font-medium hover:underline"
          >
            Send Written Brief
          </Link>
        </div>
      </div>
    </div>
  );
}
