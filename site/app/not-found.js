import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionMagnetic from '@/components/motion/MotionMagnetic.js';
import { buildRouteMetadata } from '@/lib/seo/index.js';

export const metadata = buildRouteMetadata({
  title: 'Page Not Found',
  description:
    'The requested engineering route could not be found. Return to the homepage or schedule a technical scoping call with our lead engineer.',
  path: '/404',
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <MotionFadeIn y={15} className="flex flex-col items-center">
        <p className="font-mono text-sm uppercase tracking-wider text-[#10B981]">404 Error</p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-md text-base text-[#94A3B8]">
          The engineering route you are looking for does not exist or has been relocated.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <MotionMagnetic strength={0.2}>
            <Link
              href="/"
              className="inline-block rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] transition-colors"
            >
              Return Home
            </Link>
          </MotionMagnetic>
          <MotionMagnetic strength={0.2}>
            <Link
              href="/services"
              className="inline-block rounded-lg border border-[#1E293B] bg-[#0F172A] px-5 py-2.5 text-sm font-medium text-[#E2E8F0] hover:bg-[#1E293B] transition-colors"
            >
              Explore Services
            </Link>
          </MotionMagnetic>
          <MotionMagnetic strength={0.2}>
            <Link
              href="/book-a-call"
              className="inline-block rounded-lg border border-[#1E293B] bg-[#0F172A] px-5 py-2.5 text-sm font-medium text-[#E2E8F0] hover:bg-[#1E293B] transition-colors"
            >
              Book a 30-Min Call
            </Link>
          </MotionMagnetic>
        </div>
      </MotionFadeIn>
    </div>
  );
}
