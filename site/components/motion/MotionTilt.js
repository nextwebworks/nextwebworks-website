'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { shouldAnimate, motion as motionTokens } from '@/lib/motion.js';

export default function MotionTilt({
  children,
  className = '',
  maxTilt = 15,
  scale = 1.02,
  perspective = 1000,
  as: Component = 'div',
  ...rest
}) {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference) and (min-width: 768px)', () => {
        // High-performance quickTo setters for buttery 60fps response
        const setRotateX = gsap.quickTo(card, 'rotationX', { duration: 0.4, ease: motionTokens.ease.smooth });
        const setRotateY = gsap.quickTo(card, 'rotationY', { duration: 0.4, ease: motionTokens.ease.smooth });
        const setScale = gsap.quickTo(card, 'scale', { duration: 0.4, ease: motionTokens.ease.smooth });

        gsap.set(card, { transformPerspective: perspective, transformStyle: 'preserve-3d' });

        const onMouseMove = (e) => {
          if (!shouldAnimate()) return;
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;

          setRotateX(-y * maxTilt);
          setRotateY(x * maxTilt);
          setScale(scale);
        };

        const onMouseLeave = () => {
          setRotateX(0);
          setRotateY(0);
          setScale(1);
        };

        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseleave', onMouseLeave);

        return () => {
          card.removeEventListener('mousemove', onMouseMove);
          card.removeEventListener('mouseleave', onMouseLeave);
        };
      });
    },
    { scope: cardRef }
  );

  return (
    <Component ref={cardRef} className={`will-change-transform ${className}`} {...rest}>
      {children}
    </Component>
  );
}
