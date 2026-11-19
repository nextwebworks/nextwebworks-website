import Link from 'next/link';
import { buildRouteMetadata, buildLinkedGraph } from '@/lib/seo/index.js';
import Schema from '@/components/seo/Schema.js';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';
import MotionMagnetic from '@/components/motion/MotionMagnetic.js';
import FAQSection from '@/app/_components/FAQSection.js';
import FinalCTABanner from '@/app/_components/FinalCTABanner.js';
import PbiHeroMockup from './PbiHeroMockup.js';
import PbiInquiryForm from './PbiInquiryForm.js';

export const metadata = buildRouteMetadata({
  title: 'Power BI Embedded Conversational AI Copilot | PoC Showcase',
  description:
    'Turn static Power BI dashboards into conversational analytics workspaces. Query semantic models in plain English with verified read-only DAX queries and native vector charts.',
  path: '/poc/power-bi-chatbot',
});

const pbiFaqs = {
  eyebrow: 'Frequently Asked Questions',
  title: 'Everything You Need to Know About the Power BI Copilot',
  description:
    'Key questions on security, authentication, semantic model compatibility, and enterprise pilot deployment.',
  items: [
    {
      question: 'How does the visual authenticate against our Microsoft Power BI tenant?',
      answer:
        'The visual uses Microsoft Entra ID (formerly Azure Active Directory) OAuth2 delegation or a secure service principal registered in your tenant. Users only access semantic models and data rows they are already authorized to view under your existing Power BI workspace permissions and Row-Level Security (RLS) rules.',
    },
    {
      question: 'Can the conversational copilot modify or delete any of our report data?',
      answer:
        'No. Query generation is strictly read-only. Before any DAX expression is executed against your semantic model, it passes through an Abstract Syntax Tree (AST) validation parser that permits only EVALUATE and DEFINE statements. Semicolons, table mutations, DDL, and DML keywords are categorically blocked.',
    },
    {
      question: 'Does our proprietary business data leave our Azure tenant or get used to train AI models?',
      answer:
        'No. Only semantic metadata (table names, column headers, and measure definitions) is passed to the AI engine to formulate queries. In addition, enterprise API agreements with Google Gemini and Microsoft Azure guarantee that customer prompt data is never retained, logged, or utilized for foundational model retraining.',
    },
    {
      question: 'What happens if a user asks a complex question that exceeds token or memory limits?',
      answer:
        'Every executed query enforces an automated 50-row truncation cap at the REST API interface level. If a query produces excessive rows, the visual displays the top 50 records alongside aggregated summary indicators, protecting both report responsiveness and LLM context window limits.',
    },
    {
      question: 'Can this visual be added to existing Power BI reports or does it require new ones?',
      answer:
        'It packages as a standard custom visual (.pbiviz) that can be imported directly into your existing Power BI Desktop reports or published into your organization’s private organizational visuals repository in the Power BI Admin Portal.',
    },
    {
      question: 'Does the copilot support DirectQuery and Microsoft Fabric semantic models?',
      answer:
        'Yes. Because the visual executes queries through the standard Power BI REST API (executeQueries), it supports Import Mode, DirectQuery, Composite Models, and Microsoft Fabric Lakehouse semantic models with identical query safety guarantees.',
    },
    {
      question: 'How does the automated DAX error recovery work?',
      answer:
        'If a semantic model schema has recently changed or a generated DAX query throws a syntax error, the visual triggers an automated self-correction loop. The error code and semantic fault are sent back to the reasoning engine, which repairs the DAX query in up to two automated retries without user intervention.',
    },
    {
      question: 'What is included in a staged pilot deployment?',
      answer:
        'A staged pilot includes a 30-day trial in your designated test workspace, integration with 1–2 of your semantic models, custom visual branding, Entra ID app configuration assistance, and dedicated engineering support to tune natural language measure mappings.',
    },
  ],
};

const ctaBannerContent = {
  badge: 'Enterprise PoC Deployment · Direct with Engineering',
  title: 'Ready to evaluate conversational analytics on your Power BI models?',
  description:
    'Schedule a technical scoping session to review semantic model compatibility, Entra ID permissions, and pilot rollout timelines.',
  primaryButton: {
    text: 'Request Pilot Deployment',
    href: '#inquiry-form',
  },
  footnote: 'Fixed pilot scope · Strict mutual NDA · Complete source code and visual package included',
};

export default function PowerBiChatbotPoCPage() {
  const jsonLd = buildLinkedGraph({
    path: '/poc/power-bi-chatbot',
    title: 'Power BI Embedded Conversational AI Copilot | Next Web Works',
    description: metadata.description,
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Work', url: '/work' },
      { name: 'Power BI Chatbot PoC', url: '/poc/power-bi-chatbot' },
    ],
    faqs: pbiFaqs.items,
    includeOrgAndSite: false,
  });

  return (
    <div className="bg-white dark:bg-[#0B0F19] transition-colors">
      <Schema schema={jsonLd} />

      {/* Section 1: Hero Section */}
      <section
        id="poc-hero"
        className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Deliberate Value-First Anatomy */}
            <MotionFadeIn y={24} duration={0.8} className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
                Proof-of-Concept Showcase · Power BI Visual
              </span>

              <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl leading-tight">
                Conversational Analytics for Microsoft Power BI
              </h1>

              <p className="text-base leading-relaxed text-slate-600 dark:text-[#94A3B8] max-w-2xl">
                Turn complex reporting models into natural conversations. Executive teams can ask ad-hoc questions in plain English, drill into variances, and view vector charts instantly—without waiting days for BI teams to build one-off reports.
              </p>

              {/* Action CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <MotionMagnetic>
                  <Link
                    href="#inquiry-form"
                    className="rounded-lg bg-[#2563EB] px-6 py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#1D4ED8] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    Request Pilot Deployment →
                  </Link>
                </MotionMagnetic>

                {/* Demo CTA Guard: Primary button disabled pending Gate 5 */}
                <div className="relative group">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="rounded-lg border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-5 py-3 text-xs font-semibold text-slate-400 dark:text-[#64748B] cursor-not-allowed inline-flex items-center gap-2"
                  >
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Launch Live Interactive Demo
                  </button>
                  <div className="absolute -bottom-7 left-0 whitespace-nowrap text-[10px] font-mono font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800/40 px-2 py-0.5 rounded shadow-xs pointer-events-none">
                    Live Subdomain Launching Soon — Pending Gate 5 Verification
                  </div>
                </div>
              </div>

              {/* Proof Pillar Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-3.5 text-xs transition-colors hover:border-[#2563EB]/40">
                  <span className="font-mono text-[10px] text-[#2563EB] dark:text-[#38BDF8] font-medium block">
                    NO BI BACKLOGS
                  </span>
                  <p className="mt-1 font-semibold text-slate-900 dark:text-white">Instant Answers</p>
                </div>
                <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-3.5 text-xs transition-colors hover:border-[#2563EB]/40">
                  <span className="font-mono text-[10px] text-[#2563EB] dark:text-[#38BDF8] font-medium block">
                    NATIVE EMBED
                  </span>
                  <p className="mt-1 font-semibold text-slate-900 dark:text-white">Custom Visual (.pbiviz)</p>
                </div>
                <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-3.5 text-xs transition-colors hover:border-[#2563EB]/40">
                  <span className="font-mono text-[10px] text-[#2563EB] dark:text-[#38BDF8] font-medium block">
                    DATA SAFETY
                  </span>
                  <p className="mt-1 font-semibold text-slate-900 dark:text-white">Read-Only DAX AST</p>
                </div>
                <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-3.5 text-xs transition-colors hover:border-[#2563EB]/40">
                  <span className="font-mono text-[10px] text-[#2563EB] dark:text-[#38BDF8] font-medium block">
                    AZURE SECURITY
                  </span>
                  <p className="mt-1 font-semibold text-slate-900 dark:text-white">Entra ID OAuth2</p>
                </div>
              </div>
            </MotionFadeIn>

            {/* Right Column: Interactive Power BI Visual UI Mockup */}
            <div className="lg:col-span-5">
              <PbiHeroMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Business Outcomes & Value */}
      <section
        id="business-value"
        className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionFadeIn y={15} className="max-w-2xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
              Executive Productivity
            </span>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              From Days of Waiting to Instant Answers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#94A3B8]">
              Eliminate reporting bottlenecks so leadership can make confident, data-backed decisions during live meetings.
            </p>
          </MotionFadeIn>

          <MotionStagger
            itemSelector=".value-card"
            stagger={0.08}
            y={20}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="value-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 sm:p-8 shadow-xs space-y-3 hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all">
              <span className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] font-medium">
                SELF-SERVICE INTELLIGENCE
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                Zero Ad-Hoc Ticket Backlogs
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                When leadership needs a quick segment comparison or margin drill-down before a board meeting, they shouldn&apos;t have to submit a ticket to the BI team. Copilot translates natural language into verified queries in seconds.
              </p>
            </div>

            <div className="value-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 sm:p-8 shadow-xs space-y-3 hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all">
              <span className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] font-medium">
                FRICTIONLESS ADOPTION
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                Embedded Directly in Your Current Reports
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                No new dashboards to bookmark and no complex BI software for business users to learn. The conversational copilot lives directly inside your existing Power BI report canvas as a native visual.
              </p>
            </div>

            <div className="value-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 sm:p-8 shadow-xs space-y-3 hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all">
              <span className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] font-medium">
                DATA GOVERNANCE
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                Guaranteed Read-Only Data Safety
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                Corporate data security is paramount. The engine runs under strict read-only AST parsing that categorically rejects data modification statements, disallows query injection, and caps row outputs to protect report performance.
              </p>
            </div>
          </MotionStagger>
        </div>
      </section>

      {/* Section 3: Three-Step Workflow */}
      <section
        id="workflow"
        className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionFadeIn y={15} className="max-w-2xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
              Three-Step Interaction
            </span>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              How Decision-Makers Converse with Reports
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#94A3B8]">
              Seamless translation from executive curiosity to verified visual analytics.
            </p>
          </MotionFadeIn>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-6 sm:p-8 space-y-3">
              <span className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] font-semibold">
                STEP 01
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                Ask in Plain English
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                Type or speak natural questions like &quot;Show monthly gross margin variance across product lines for Q3&quot; without writing code or formulas.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-6 sm:p-8 space-y-3">
              <span className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] font-semibold">
                STEP 02
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                Automated DAX Validation
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                The reasoning engine references your model metadata to synthesize clean DAX queries, verifying syntax and enforcing read-only AST constraints.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-6 sm:p-8 space-y-3">
              <span className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] font-semibold">
                STEP 03
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                Instant Visual Insights
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                Verified results render immediately inside the visual card alongside interactive vector bar charts and summary cards ready for your slide deck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Enterprise Security & Governance (Where technical specs belong!) */}
      <section
        id="security"
        className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionFadeIn y={15} className="max-w-2xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
              Enterprise Governance
            </span>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Engineered for Strict Corporate Compliance
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#94A3B8]">
              Built to satisfy enterprise IT, information security, and tenant isolation requirements.
            </p>
          </MotionFadeIn>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 space-y-2">
              <span className="font-mono text-[11px] text-[#2563EB] dark:text-[#60A5FA] font-medium block">
                AUTHENTICATION
              </span>
              <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                Microsoft Entra ID OAuth2
              </h4>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                Inherits existing workspace permissions and Row-Level Security (RLS) rules. Users never see data they are not permitted to access.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 space-y-2">
              <span className="font-mono text-[11px] text-[#2563EB] dark:text-[#60A5FA] font-medium block">
                QUERY SAFETY
              </span>
              <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                Read-Only AST Validation
              </h4>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                Permits only EVALUATE and DEFINE statements. Disallows semicolons, table drops, or DML mutations before queries are dispatched.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 space-y-2">
              <span className="font-mono text-[11px] text-[#2563EB] dark:text-[#60A5FA] font-medium block">
                PERFORMANCE GUARD
              </span>
              <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                50-Row Result Bounding Cap
              </h4>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                Truncates query output at 50 records to prevent runaway queries, protect report frame memory, and avoid LLM context bloat.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 space-y-2">
              <span className="font-mono text-[11px] text-[#2563EB] dark:text-[#60A5FA] font-medium block">
                DOM SECURITY
              </span>
              <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                Zero innerHTML Injection
              </h4>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                Built strictly with safe React virtual DOM elements and SVG vector rendering. Zero raw HTML parsing or client-side eval vulnerabilities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 space-y-2">
              <span className="font-mono text-[11px] text-[#2563EB] dark:text-[#60A5FA] font-medium block">
                TRANSPORT PROTOCOL
              </span>
              <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                Server-Sent Events (SSE)
              </h4>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                Streams token deltas in real-time with automatic query self-healing, recovering from schema mismatches in up to two retries.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 space-y-2">
              <span className="font-mono text-[11px] text-[#2563EB] dark:text-[#60A5FA] font-medium block">
                MODEL COMPATIBILITY
              </span>
              <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                Power BI &amp; Microsoft Fabric
              </h4>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                Full compatibility across Import Mode, DirectQuery, Composite Models, and Microsoft Fabric Lakehouse semantic models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: High-Density Technical FAQ */}
      <FAQSection content={pbiFaqs} />

      {/* Section 6: Inbound Pilot Inquiry Form */}
      <section
        id="inquiry"
        className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PbiInquiryForm />
        </div>
      </section>

      {/* Section 7: Final CTA Banner */}
      <FinalCTABanner content={ctaBannerContent} />
    </div>
  );
}
