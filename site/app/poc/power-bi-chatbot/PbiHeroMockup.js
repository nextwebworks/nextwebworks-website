import MotionTilt from '@/components/motion/MotionTilt.js';

export default function PbiHeroMockup() {
  return (
    <MotionTilt
      maxTilt={8}
      className="w-full rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] shadow-lg overflow-hidden transition-colors"
    >
      {/* Power BI Window Title Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#1E293B] bg-slate-100 dark:bg-[#0F172A] px-4 py-2.5 text-xs">
        <div className="flex items-center gap-2">
          {/* Power BI Icon Badge */}
          <span className="flex h-4 w-4 items-center justify-center rounded bg-[#F2C811] text-[9px] font-black text-slate-900 shadow-xs">
            P
          </span>
          <span className="font-mono text-[11px] font-semibold text-slate-800 dark:text-slate-200 truncate">
            Executive Sales &amp; Margin Workspace
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500 dark:text-[#64748B]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>Semantic Sync Active</span>
        </div>
      </div>

      {/* Main Report Visual Canvas */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* KPI Strip */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-2.5 sm:p-3">
            <span className="font-mono text-[10px] uppercase text-slate-500 dark:text-[#64748B] block">Net Revenue</span>
            <span className="font-heading text-sm sm:text-base font-bold text-slate-900 dark:text-white">$4.82M</span>
            <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 block">+12.4% YoY</span>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-2.5 sm:p-3">
            <span className="font-mono text-[10px] uppercase text-slate-500 dark:text-[#64748B] block">Gross Margin</span>
            <span className="font-heading text-sm sm:text-base font-bold text-slate-900 dark:text-white">41.2%</span>
            <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 block">+1.2% Target</span>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-2.5 sm:p-3">
            <span className="font-mono text-[10px] uppercase text-slate-500 dark:text-[#64748B] block">Active Regions</span>
            <span className="font-heading text-sm sm:text-base font-bold text-slate-900 dark:text-white">8 / 8</span>
            <span className="text-[10px] font-medium text-slate-500 dark:text-[#94A3B8] block">All Synced</span>
          </div>
        </div>

        {/* Embedded Conversational AI Visual */}
        <div className="rounded-xl border border-[#2563EB]/30 bg-white dark:bg-[#0F172A] shadow-xs overflow-hidden">
          {/* Visual Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#1E293B]/40 px-3 py-2">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-[#2563EB]" />
              <span className="font-mono text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                AI Copilot Visual (pbiviz)
              </span>
            </div>
            <span className="rounded bg-[#10B981]/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-[#10B981]">
              Gemini 2.5 Flash · 14 Tools
            </span>
          </div>

          <div className="p-3.5 space-y-3">
            {/* User Prompt */}
            <div className="flex justify-end">
              <div className="max-w-[85%] rounded-lg bg-[#2563EB] px-3 py-1.5 text-xs text-white shadow-xs">
                Compare Q3 gross margin across Enterprise vs Mid-Market accounts.
              </div>
            </div>

            {/* Copilot Response */}
            <div className="space-y-2">
              <div className="text-[11px] font-medium text-slate-700 dark:text-slate-300">
                Generated verified read-only DAX query across <code className="font-mono text-[10px] text-[#2563EB] dark:text-[#60A5FA]">Sales_Fact</code> and <code className="font-mono text-[10px] text-[#2563EB] dark:text-[#60A5FA]">Customer_Dim</code>:
              </div>

              {/* DAX Snippet */}
              <div className="rounded-md border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] p-2 font-mono text-[10px] text-slate-800 dark:text-slate-300 overflow-x-auto">
                <span className="text-[#2563EB] dark:text-[#38BDF8]">EVALUATE</span>{' '}
                <span className="text-emerald-600 dark:text-emerald-400">SUMMARIZECOLUMNS</span>
                (Customer[Segment], &quot;GrossMargin&quot;, [GrossMarginPct])
              </div>

              {/* Mini Vector Bar Chart Visualization */}
              <div className="rounded-md border border-slate-200 dark:border-[#1E293B] bg-slate-50/50 dark:bg-[#0B0F19]/50 p-2.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-[#94A3B8] mb-1.5">
                  <span>Segment Margin Comparison</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">+5.8% Δ Flagged</span>
                </div>
                <div className="space-y-1.5">
                  <div>
                    <div className="flex justify-between text-[10px] mb-0.5 font-medium text-slate-700 dark:text-slate-300">
                      <span>Enterprise</span>
                      <span className="font-mono font-semibold">44.1%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-[#1E293B] overflow-hidden">
                      <div className="h-full rounded-full bg-[#2563EB]" style={{ width: '88%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] mb-0.5 font-medium text-slate-700 dark:text-slate-300">
                      <span>Mid-Market</span>
                      <span className="font-mono font-semibold">38.3%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-[#1E293B] overflow-hidden">
                      <div className="h-full rounded-full bg-slate-400 dark:bg-slate-600" style={{ width: '76%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 dark:text-[#64748B] pt-0.5">
                <span>✓ 2 rows · 50-row cap enforced</span>
                <span>AST validated · 380ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionTilt>
  );
}
