import MotionTilt from '@/components/motion/MotionTilt.js';

export default function PbiHeroMockup() {
  return (
    <MotionTilt
      maxTilt={12}
      className="relative rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A]/90 p-6 shadow-xl backdrop-blur-sm transition-colors"
    >
      {/* Top Window Chrome with macOS Dots */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#1E293B] pb-4 mb-5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#EF4444]/80" />
          <span className="h-3 w-3 rounded-full bg-[#F59E0B]/80" />
          <span className="h-3 w-3 rounded-full bg-[#10B981]/80" />
        </div>
        <span className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">power_bi_copilot.spec</span>
      </div>

      <div className="space-y-4">
        {/* Node 1 */}
        <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0B0F19] p-4 shadow-2xs">
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#94A3B8]">
            <span>Step 01 · Natural Language Intake</span>
            <span className="text-slate-800 dark:text-[#E2E8F0] font-medium">Your Semantic Model</span>
          </div>
          <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">Ask Ad-Hoc Questions in Plain English</p>
          <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5">
            &quot;Compare Q3 gross margin across Enterprise accounts&quot;
          </p>
        </div>

        {/* Connector Arrow */}
        <div className="flex justify-center text-slate-400 dark:text-[#E2E8F0] font-mono text-xs">
          ↓ <span className="text-slate-500 dark:text-[#94A3B8] ml-2">Multi-Turn Gemini 2.5 Flash &amp; AST Parser</span>
        </div>

        {/* Node 2 */}
        <div className="rounded-xl border border-[#2563EB]/60 bg-white dark:bg-[#0B0F19] p-4 shadow-sm">
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#94A3B8]">
            <span>Step 02 · Read-Only DAX Synthesis</span>
            <span className="text-[#10B981] font-semibold">100% Safe Execution</span>
          </div>
          <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">Validated EVALUATE Expressions &amp; 50-Row Bound</p>
          <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5">
            Strict AST sanitization · Zero DDL/DML · 412ms turnaround
          </p>
        </div>

        {/* Connector Arrow */}
        <div className="flex justify-center text-slate-400 dark:text-[#E2E8F0] font-mono text-xs">
          ↓ <span className="text-slate-500 dark:text-[#94A3B8] ml-2">Real-Time SSE Stream into Embedded Visual</span>
        </div>

        {/* Node 3 */}
        <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0B0F19] p-4 shadow-2xs">
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#94A3B8]">
            <span>Step 03 · Native Visual Output</span>
            <span className="text-[#2563EB] font-semibold">Power BI (.pbiviz)</span>
          </div>
          <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">Interactive Vector Charts &amp; Board-Ready KPIs</p>
          <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5">
            Safe DOM · Entra ID OAuth2 · Zero unauthorized access
          </p>
        </div>
      </div>
    </MotionTilt>
  );
}
