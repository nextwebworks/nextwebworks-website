// section: about-s3-mission
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';
import { aboutContent } from '@/content/about.js';

export default function AboutMissionSection({ content = aboutContent }) {
  const mission = content?.mission || aboutContent.mission;
  const items = mission?.pillars || mission?.cards || [];

  return (
    <section
      id="mission"
      data-section="about-s3-mission"
      className="py-16 md:py-24 border-t border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {mission.eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {mission.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {mission.description}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".mission-card"
          stagger={0.08}
          y={20}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {items.map((card) => (
            <div
              key={card.id}
              className="mission-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-7 shadow-xs hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all space-y-3"
            >
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                {card.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
