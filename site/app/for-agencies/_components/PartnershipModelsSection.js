// section: partnership-models
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';
import MotionMagnetic from '@/components/motion/MotionMagnetic.js';

const models = [
  {
    name: 'Scoped Pilot Build',
    tag: 'Low-Risk Trial',
    desc: 'Test our code quality, communication cadence, and delivery reliability on a single discrete project.',
    features: [
      'Single landing page, component library, or feature MVP',
      'Direct staging link review with Loom walkthrough',
      'Clean handoff to your GitHub repo with documentation',
      '14-day post-launch warranty included',
    ],
    cta: 'Book a Pilot Scoping Call',
  },
  {
    name: 'Fixed-Price Sprints',
    tag: 'Full Site Deliveries',
    desc: 'Turnkey website or web app builds delivered against approved Figma files with locked milestone scopes.',
    features: [
      'Figma to clean responsive code with zero stock visual bloat',
      'CMS modeling, dynamic routes, and technical SEO schema',
      'Cross-browser and mobile responsive QA before handoff',
      'Bi-weekly milestone demos with zero surprise additions',
    ],
    cta: 'Discuss Project Sprints',
    highlighted: true,
  },
  {
    name: 'Dedicated Dev Bench',
    tag: 'Ongoing Agency Capacity',
    desc: 'Reliable engineering bandwidth for marketing agencies managing continuous monthly client demand.',
    features: [
      'Plugged directly into your team workflow and GitHub',
      'Committed turnaround on critical fixes and client updates',
      'Direct technical scoping support during agency pitches',
      '100% white-label with strict mutual non-solicitation',
    ],
    cta: 'Explore Bench Partnership',
  },
];

export default function PartnershipModelsSection() {
  return (
    <section data-section="partnership-models" className="py-16 md:py-20 border-t border-slate-200 dark:border-[#1E293B]/60 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">ENGAGEMENT MODELS</span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Three Ways to Integrate Next Web Works Into Your Agency
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            Choose the commercial model that fits your current client pipeline. Terms and milestone schedules are discussed directly on your discovery call.
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".model-card"
          stagger={0.1}
          y={24}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {models.map((model) => (
            <div
              key={model.name}
              className={`model-card flex flex-col justify-between rounded-2xl border p-8 transition-colors ${
                model.highlighted
                  ? 'border-[#2563EB] bg-slate-50 dark:bg-[#0F172A] shadow-md shadow-[#2563EB]/10 scale-[1.02]'
                  : 'border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0B0F19]'
              }`}
            >
              <div>
                <span className="inline-block rounded-full bg-slate-200/80 dark:bg-[#1E293B] px-3 py-1 font-mono text-[11px] font-semibold text-emerald-600 dark:text-[#10B981]">
                  {model.tag}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-bold text-slate-900 dark:text-white">{model.name}</h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">{model.desc}</p>

                <ul className="mt-6 space-y-3 text-xs text-slate-700 dark:text-[#CBD5E1]">
                  {model.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span className="text-[#10B981] font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-[#1E293B]">
                {model.highlighted ? (
                  <MotionMagnetic>
                    <Link
                      href="/book-a-call"
                      className="block w-full text-center rounded-xl py-3 px-4 text-xs font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors"
                    >
                      {model.cta} →
                    </Link>
                  </MotionMagnetic>
                ) : (
                  <Link
                    href="/book-a-call"
                    className="block w-full text-center rounded-xl py-3 px-4 text-xs font-semibold border border-slate-300 dark:border-[#1E293B] bg-slate-100 dark:bg-[#0F172A] text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-[#1E293B] transition-colors"
                  >
                    {model.cta} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </MotionStagger>

        <p className="mt-8 text-center font-mono text-xs text-slate-500 dark:text-[#64748B]">
          Terms discussed on discovery call. No figures.
        </p>
      </div>
    </section>
  );
}
