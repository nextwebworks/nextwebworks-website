'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion as motionTokens } from '@/lib/motion.js';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MotionPathDraw({
  children,
  className = '',
  selector = 'path, line, polyline',
  duration = motionTokens.duration.deliberate,
  delay = 0,
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
        const paths = containerRef.current.querySelectorAll(selector);
        if (!paths || paths.length === 0) return;

        paths.forEach((path) => {
          const length = path.getTotalLength ? path.getTotalLength() : 200;
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          gsap.to(path, {
            strokeDashoffset: 0,
            duration,
            delay,
            ease,
            scrollTrigger: {
              trigger: containerRef.current,
              start: threshold,
              once: true,
            },
          });
        });
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
