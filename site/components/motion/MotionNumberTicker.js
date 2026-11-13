'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion as motionTokens } from '@/lib/motion.js';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MotionNumberTicker({
  value = 0,
  prefix = '',
  suffix = '',
  duration = 1.2,
  className = '',
}) {
  const [displayValue, setDisplayValue] = useState(value);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration,
          ease: motionTokens.ease.expressive,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
            once: true,
          },
          onUpdate: () => {
            setDisplayValue(Math.round(obj.val));
          },
        });
      });
    },
    { scope: containerRef, dependencies: [value, duration] }
  );

  return (
    <span ref={containerRef} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
