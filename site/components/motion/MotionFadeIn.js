'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion as motionTokens } from '@/lib/motion.js';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MotionFadeIn({
  children,
  className = '',
  delay = 0,
  duration = motionTokens.duration.slow,
  y = motionTokens.distance.standard,
  x = 0,
  ease = motionTokens.ease.default,
  threshold = 'top 88%',
  as: Component = 'div',
  ...rest
}) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference) and (min-width: 768px)', () => {
        gsap.fromTo(
          containerRef.current,
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
            delay,
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
