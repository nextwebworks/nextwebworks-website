import Link from 'next/link';
import { buildRouteMetadata } from '@/lib/seo/index.js';
import PbiInquiryForm from './PbiInquiryForm.js';

export const metadata = buildRouteMetadata({
  title: 'Power BI Embedded Conversational AI Copilot | PoC Showcase',
  description:
    'Interactive conversational analytics visual for Microsoft Power BI. Multi-turn Google Gemini tool calling, read-only DAX validation, 50-row truncation bounds, and pure SVG vector charts.',
  path: '/poc/power-bi-chatbot',
});

export default function PowerBiChatbotPoCPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white pt-24 pb-20">
      {/* Background radial gradient glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[350px] bg-cyan-500/10 blur-[110px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Section 1: Hero Header */}
        <section className="text-center space-y-6 pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Verified Enterprise Proof-of-Concept
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Conversational Analytics for{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              Microsoft Power BI
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Empower decision-makers to converse directly with their semantic models in natural language. Generates validated,
            read-only DAX queries, enforces a strict 50-row result cap, and streams token deltas alongside native SVG charts.
          </p>

          {/* Action CTAs with Demo Guard */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Demo CTA Guard: Primary button is rendered DISABLED until Gate 5 subdomain verification */}
            <div className="relative group">
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 text-slate-400 font-semibold text-sm border border-slate-700/60 cursor-not-allowed opacity-60 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Launch Live Interactive Demo
              </button>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-medium text-amber-400 bg-amber-950/80 border border-amber-500/30 px-2 py-0.5 rounded shadow-lg pointer-events-none">
                Live Demo Launching Soon — Pending Gate 5 Verification
              </div>
            </div>

            <Link
              href="#inquiry-form"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all duration-200"
            >
              Request Pilot Consultation
            </Link>
          </div>
        </section>

        {/* Section 2: Architectural Pillars */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Enterprise Architectural Pillars
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
              Engineered with defense-in-depth security, strict token controls, and zero client-side code execution vulnerabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-semibold text-white">Power BI Custom Visual (`.pbiviz`)</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Packaged using Microsoft Visuals SDK. Features a 100% safe DOM architecture with strictly zero <code className="text-indigo-300">innerHTML</code>, real-time SSE stream reader, and interactive format pane configuration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-semibold text-white">14 Google Gemini Function Tools</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Multi-turn function calling loop over isolated metadata, query, and presentation tools. Automated DAX self-correction recovers from syntax errors in up to 2 retries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-semibold text-white">Strict Read-Only DAX & 50-Row Guard</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Enforces <code className="text-emerald-300">EVALUATE</code> / <code className="text-emerald-300">DEFINE</code> query parsing while forbidding semicolons and DDL/DML mutations. Every result is capped at 50 rows to protect LLM context windows.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Technical Specifications */}
        <section className="rounded-2xl bg-slate-900/40 border border-slate-800 p-8 space-y-6">
          <h2 className="text-xl font-bold text-white tracking-tight">Verified Engineering Specifications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">AI Engine</div>
              <div className="text-sm font-semibold text-white">Google Gemini 2.5 Flash</div>
              <div className="text-xs text-slate-400">Multi-turn tool loop</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">PBI Integration</div>
              <div className="text-sm font-semibold text-white">Entra ID OAuth2</div>
              <div className="text-xs text-slate-400">executeQueries REST API</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Streaming</div>
              <div className="text-sm font-semibold text-white">Server-Sent Events</div>
              <div className="text-xs text-slate-400">Chunked token typing</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Automated Tests</div>
              <div className="text-sm font-semibold text-emerald-400">125 / 125 Passed</div>
              <div className="text-xs text-slate-400">Full monorepo suite</div>
            </div>
          </div>
        </section>

        {/* Section 4: Lead Capture Inquiry Form */}
        <section className="space-y-6">
          <PbiInquiryForm />
        </section>
      </div>
    </div>
  );
}
