'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion as motionTokens } from '@/lib/motion.js';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Subtle ultra-tier reveal animation for non-text blocks (code blocks, tables, diagrams, callouts).
 * Never wraps body text to guarantee instant content availability.
 * Automatically deactivates under reduced motion and touch devices.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className='']
 * @param {string} [props.as='div']
 * @returns {JSX.Element}
 */
export default function MotionRevealBlock({
  children,
  className = '',
  as: Component = 'div',
  ...rest
}) {
  const elementRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference) and (min-width: 768px)', () => {
        gsap.fromTo(
          elementRef.current,
          {
            opacity: 0,
            y: 14,
          },
          {
            opacity: 1,
            y: 0,
            duration: motionTokens.duration.normal,
            ease: motionTokens.ease.smooth,
            scrollTrigger: {
              trigger: elementRef.current,
              start: 'top 90%',
              once: true,
            },
          }
        );
      });
    },
    { scope: elementRef }
  );

  return (
    <Component ref={elementRef} className={className} {...rest}>
      {children}
    </Component>
  );
}

