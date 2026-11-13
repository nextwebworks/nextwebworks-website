// section: home-s6-faq
'use client';

import { useState } from 'react';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function FAQSection({ content }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      data-section={content?.sectionId || 'home-s6-faq'}
      className="py-20 md:py-28 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors scroll-mt-16 relative"
    >
      <div id="home-s6-faq" className="absolute -top-16 left-0" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionFadeIn y={20} className="text-left space-y-4">
          <p className="text-xs font-mono tracking-wider uppercase text-[#10B981] font-semibold">
            {content.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] sm:text-4xl">
            {content.title}
          </h2>
          <p className="text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            {content.description}
          </p>
        </MotionFadeIn>

        {/* FAQ Accordion List with Staggered Entrance */}
        <MotionStagger
          itemSelector=".faq-item"
          stagger={0.06}
          y={15}
          className="mt-12 space-y-4"
        >
          {content.items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="faq-item rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] transition-colors shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-semibold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`font-mono text-base font-bold text-[#2563EB] dark:text-[#60A5FA] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`px-6 pb-6 pt-0 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8] border-t border-slate-200 dark:border-[#1E293B]/60 mt-1 ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  <p className="pt-4">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
