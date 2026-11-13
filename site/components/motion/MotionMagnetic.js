'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { shouldAnimate, motion as motionTokens } from '@/lib/motion.js';

export default function MotionMagnetic({
  children,
  className = '',
  strength = 0.35,
  as: Component = 'div',
  ...rest
}) {
  const elementRef = useRef(null);

  useGSAP(
    () => {
      const el = elementRef.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference) and (min-width: 768px)', () => {
        const onMouseMove = (e) => {
          if (!shouldAnimate()) return;
          const rect = el.getBoundingClientRect();
          const x = e.clientX - (rect.left + rect.width / 2);
          const y = e.clientY - (rect.top + rect.height / 2);

          gsap.to(el, {
            x: x * strength,
            y: y * strength,
            duration: 0.3,
            ease: motionTokens.ease.smooth,
            overwrite: 'auto',
          });
        };

        const onMouseLeave = () => {
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: motionTokens.ease.elastic,
            overwrite: 'auto',
          });
        };

        el.addEventListener('mousemove', onMouseMove);
        el.addEventListener('mouseleave', onMouseLeave);

        return () => {
          el.removeEventListener('mousemove', onMouseMove);
          el.removeEventListener('mouseleave', onMouseLeave);
        };
      });
    },
    { scope: elementRef }
  );

  return (
    <Component
      ref={elementRef}
      className={`will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
