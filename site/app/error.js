'use client';

import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionMagnetic from '@/components/motion/MotionMagnetic.js';

export default function Error({ reset }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <MotionFadeIn y={15} className="flex flex-col items-center">
        <p className="font-mono text-xs uppercase tracking-wider text-[#EF4444]">Server Error</p>
        <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-4 max-w-md text-sm text-[#94A3B8]">
          An unexpected error occurred while loading this view. You can retry the request or contact support.
        </p>
        <div className="mt-8">
          <MotionMagnetic strength={0.2}>
            <button
              type="button"
              onClick={() => reset()}
              className="rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              Try Again
            </button>
          </MotionMagnetic>
        </div>
      </MotionFadeIn>
    </div>
  );
}
