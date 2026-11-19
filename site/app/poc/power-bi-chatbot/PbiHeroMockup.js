// site/app/poc/power-bi-chatbot/PbiHeroMockup.js - Rich interactive Power BI UI visual
'use client';

import MotionTilt from '@/components/motion/MotionTilt.js';

export default function PbiHeroMockup() {
  return (
    <div className="relative">
      {/* Floating Trust Badge 1: Top Right */}
      <div className="hidden sm:flex absolute -top-4 -right-2 z-20 items-center gap-2 rounded-full border border-emerald-500/30 bg-white/95 dark:bg-[#0F172A]/95 px-3 py-1 text-[11px] font-mono font-medium text-emerald-700 dark:text-emerald-400 shadow-md backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>AST Guard: 100% Read-Only</span>
      </div>

      {/* Floating Trust Badge 2: Bottom Left */}
      <div className="hidden sm:flex absolute -bottom-4 -left-2 z-20 items-center gap-2 rounded-full border border-[#2563EB]/30 bg-white/95 dark:bg-[#0F172A]/95 px-3 py-1 text-[11px] font-mono font-medium text-[#2563EB] dark:text-[#38BDF8] shadow-md backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
        <span>50-Row Cap · Zero Context Bloat</span>
      </div>

      <MotionTilt
        maxTilt={8}
        className="relative rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] p-4 sm:p-5 shadow-2xl backdrop-blur-sm transition-colors overflow-hidden"
      >
        {/* Power BI Workspace Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#1E293B] pb-3 mb-3 text-xs">
          <div className="flex items-center gap-2.5">
            {/* Power BI Brand Mark */}
            <div className="flex h-5 w-5 items-center justify-center rounded bg-[#F2C811] text-[10px] font-black text-slate-950 shadow-xs">
              P
            </div>
            <div>
              <div className="font-heading text-xs font-bold text-slate-900 dark:text-white leading-tight">
                Executive Sales Workspace
              </div>
              <div className="font-mono text-[10px] text-slate-500 dark:text-[#64748B]">
                Semantic Model: Corporate_Sales_DirectQuery
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Entra ID Active
            </span>
          </div>
        </div>

        {/* Top Report KPI Ribbon */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-3">
          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-2.5 shadow-2xs">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 dark:text-[#64748B] block">
              Net ARR
            </span>
            <div className="font-heading text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              $42.8M
            </div>
            <span className="text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">
              ▲ +18.4% YoY
            </span>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-2.5 shadow-2xs">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 dark:text-[#64748B] block">
              Gross Margin
            </span>
            <div className="font-heading text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              41.8%
            </div>
            <span className="text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">
              +1.8% vs Plan
            </span>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-2.5 shadow-2xs">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 dark:text-[#64748B] block">
              Active Tier
            </span>
            <div className="font-heading text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              DirectQuery
            </div>
            <span className="text-[9px] font-semibold text-slate-500 dark:text-[#94A3B8]">
              842 Accounts
            </span>
          </div>
        </div>

        {/* Embedded Custom Visual Container (.pbiviz) */}
        <div className="rounded-xl border border-[#2563EB]/40 bg-white dark:bg-[#0F172A] shadow-md overflow-hidden">
          {/* Visual Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#1E293B] bg-slate-50/80 dark:bg-[#1E293B]/40 px-3 py-2">
            <div className="flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-md bg-[#2563EB]/10 text-[#2563EB]">
                <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <span className="font-mono text-[11px] font-semibold text-slate-900 dark:text-white">
                Conversational Copilot Visual
              </span>
            </div>
            <span className="font-mono text-[9px] font-semibold text-[#2563EB] dark:text-[#38BDF8]">
              Gemini 2.5 Flash · 14 Tools
            </span>
          </div>

          {/* Interactive Chat Thread */}
          <div className="p-3 space-y-2.5">
            {/* User Message Bubble */}
            <div className="flex justify-end">
              <div className="max-w-[88%] rounded-xl rounded-tr-xs bg-[#2563EB] px-3 py-2 text-xs text-white shadow-xs leading-relaxed">
                Compare Q3 gross margin across Enterprise vs Mid-Market accounts. Flag variances &gt; 5%.
              </div>
            </div>

            {/* Copilot Response Card */}
            <div className="space-y-2">
              {/* DAX AST Safety Tag */}
              <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 dark:text-[#64748B]">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  ✓ AST Validated · Read-Only EVALUATE
                </span>
                <span>380ms Turnaround</span>
              </div>

              {/* Synthesized DAX Code Pill */}
              <div className="rounded-md border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] p-2 font-mono text-[10px] text-slate-800 dark:text-slate-300 overflow-x-auto">
                <span className="text-[#2563EB] dark:text-[#38BDF8] font-bold">EVALUATE</span>{' '}
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">SUMMARIZECOLUMNS</span>
                (Customer[Segment], &quot;Margin&quot;, [GrossMarginPct])
              </div>

              {/* In-Chat Comparative Vector Visual */}
              <div className="rounded-lg border border-slate-200 dark:border-[#1E293B] bg-slate-50/60 dark:bg-[#0B0F19]/60 p-2.5 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-600 dark:text-[#94A3B8] font-medium">Segment Margin Analysis</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    ▲ +6.6% Variance Flagged
                  </span>
                </div>

                {/* Vector Bar 1: Enterprise */}
                <div className="space-y-0.5">
                  <div className="flex justify-between text-[10px] font-medium text-slate-800 dark:text-slate-200">
                    <span>Enterprise Tier</span>
                    <span className="font-mono font-bold text-[#2563EB] dark:text-[#38BDF8]">44.8%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-200 dark:bg-[#1E293B] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#2563EB] transition-all duration-500"
                      style={{ width: '89.6%' }}
                    />
                  </div>
                </div>

                {/* Vector Bar 2: Mid-Market */}
                <div className="space-y-0.5">
                  <div className="flex justify-between text-[10px] font-medium text-slate-800 dark:text-slate-200">
                    <span>Mid-Market Tier</span>
                    <span className="font-mono font-bold text-slate-600 dark:text-[#94A3B8]">38.2%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-200 dark:bg-[#1E293B] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-slate-400 dark:bg-slate-600 transition-all duration-500"
                      style={{ width: '76.4%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Natural Language Executive Takeaway */}
              <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
                Enterprise accounts outperformed Mid-Market by <strong className="text-emerald-600 dark:text-emerald-400">+6.6%</strong> in Q3. Query executed within 50-row boundary under 380ms.
              </p>
            </div>

            {/* Prompt Input Box */}
            <div className="pt-2 border-t border-slate-200 dark:border-[#1E293B]">
              <div className="flex items-center justify-between rounded-lg border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] px-3 py-1.5 text-xs text-slate-400 dark:text-[#64748B]">
                <span>Ask follow-up or drill into region...</span>
                <span className="flex h-5 w-5 items-center justify-center rounded bg-[#2563EB] text-white">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </MotionTilt>
    </div>
  );
}
