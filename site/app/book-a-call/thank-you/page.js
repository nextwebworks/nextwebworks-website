import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionMagnetic from '@/components/motion/MotionMagnetic.js';
import { buildRouteMetadata } from '@/lib/seo/index.js';

export const metadata = buildRouteMetadata({
  title: 'Discovery Call Confirmed',
  description:
    'Your 30-minute discovery call has been confirmed. Review what to bring to the scoping session and our mutual NDA confidentiality reassurance.',
  path: '/book-a-call/thank-you',
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <div className="py-16 md:py-20 flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <MotionFadeIn y={15} className="flex flex-col items-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10B981]/10 text-2xl text-[#10B981]">
          ✓
        </span>
        <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Discovery Call Confirmed
        </h1>
        <p className="mt-3 max-w-lg text-sm text-[#94A3B8]">
          A calendar invitation with Google Meet link has been sent to your email. We look forward to reviewing your agency client brief.
        </p>

        {/* What to Bring Checklist */}
        <div className="mt-8 w-full max-w-md rounded-xl border border-[#1E293B] bg-[#0F172A] p-5 text-left text-xs space-y-3">
          <h2 className="font-mono text-[11px] uppercase tracking-wider text-[#10B981]">What to Bring to the Call</h2>
          <ul className="space-y-2 text-[#CBD5E1]">
            <li className="flex items-center gap-2">
              <span className="text-[#10B981]">✓</span> Active client scope, RFP, or requirements doc
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#10B981]">✓</span> Figma links or visual design references (if available)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#10B981]">✓</span> Current technical bottlenecks or target launch dates
            </li>
          </ul>
          <p className="pt-2 border-t border-[#1E293B] font-mono text-[11px] text-[#64748B]">
            Mutual NDA reassurance: all shared materials remain 100% confidential.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <MotionMagnetic strength={0.2}>
            <Link
              href="/for-agencies"
              className="inline-block rounded-lg bg-[#2563EB] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#1D4ED8] transition-colors"
            >
              Explore How We Work →
            </Link>
          </MotionMagnetic>
          <MotionMagnetic strength={0.2}>
            <a
              href="https://wa.me/917999934815?text=Hi%2C%20I%20just%20booked%20a%20discovery%20call%20on%20Next%20Web%20Works."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-[#1E293B] bg-[#0F172A] px-5 py-2.5 text-xs font-semibold text-[#10B981] hover:bg-[#1E293B] transition-colors"
            >
              WhatsApp Us
            </a>
          </MotionMagnetic>
          <Link
            href="/"
            className="rounded-lg border border-[#1E293B] bg-[#0B0F19] px-5 py-2.5 text-xs font-semibold text-[#94A3B8] hover:bg-[#1E293B] transition-colors"
          >
            Return Home
          </Link>
        </div>
      </MotionFadeIn>
    </div>
  );
}
