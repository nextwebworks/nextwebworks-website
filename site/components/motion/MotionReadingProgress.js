'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Scroll-linked reading progress bar fixed at the top of the viewport.
 * Tracks reading progress through article content, cleaning up on unmount.
 *
 * @param {object} props
 * @param {string} [props.targetId='blog-article-body'] - Element ID to track progress across
 * @returns {JSX.Element}
 */
export default function MotionReadingProgress({ targetId = 'blog-article-body' }) {
  const barRef = useRef(null);

  useGSAP(() => {
    const target = document.getElementById(targetId);
    if (!target || !barRef.current) return;

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        barRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: target,
            start: 'top top+=100',
            end: 'bottom bottom-=200',
            scrub: 0.2,
          },
        }
      );
    });
  }, [targetId]);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-transparent pointer-events-none"
    >
      <div
        ref={barRef}
        className="h-full w-full bg-[#2563EB] dark:bg-[#60A5FA] origin-left will-change-transform shadow-[0_0_8px_rgba(37,99,235,0.6)]"
      />
    </div>
  );
}

