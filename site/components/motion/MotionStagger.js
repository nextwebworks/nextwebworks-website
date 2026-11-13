'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion as motionTokens } from '@/lib/motion.js';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MotionStagger({
  children,
  className = '',
  itemSelector = '.motion-item',
  stagger = motionTokens.stagger.normal,
  y = motionTokens.distance.standard,
  x = 0,
  duration = motionTokens.duration.slow,
  ease = motionTokens.ease.smooth,
  threshold = 'top 85%',
  as: Component = 'div',
  ...rest
}) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference) and (min-width: 768px)', () => {
        const items = containerRef.current.querySelectorAll(itemSelector);
        if (!items || items.length === 0) return;

        gsap.fromTo(
          items,
          {
            opacity: 0,
            y,
            x,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration,
            stagger,
            ease,
            scrollTrigger: {
              trigger: containerRef.current,
              start: threshold,
              once: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <Component ref={containerRef} className={className} {...rest}>
      {children}
    </Component>
  );
}
