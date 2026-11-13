// site/lib/motion.js - Ultra Motion Tier Dual Tokens (GSAP + CSS)

export const motion = {
  duration: {
    instant: 0.15,
    fast: 0.25,
    normal: 0.45,
    slow: 0.75,
    deliberate: 1.2,
  },
  ease: {
    default: 'power3.out',
    smooth: 'power2.out',
    expressive: 'expo.out',
    elastic: 'elastic.out(1, 0.4)',
    inOut: 'power2.inOut',
    linear: 'none',
  },
  stagger: {
    tight: 0.05,
    normal: 0.08,
    relaxed: 0.12,
    sequence: 0.15,
  },
  distance: {
    micro: 8,
    subtle: 16,
    standard: 24,
    dramatic: 40,
  },
  css: {
    easeDefault: 'cubic-bezier(0.16, 1, 0.3, 1)',
    easeSmooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    easeExpressive: 'cubic-bezier(0.19, 1, 0.22, 1)',
    easeElastic: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    transitionDefault: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)',
    transitionTransform: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1)',
    transitionColors: 'color 200ms ease, background-color 200ms ease, border-color 200ms ease',
  },
  hover: {
    liftY: -2,
    scale: 1.02,
    borderGlow: 'rgba(37, 99, 235, 0.4)',
  },
};

/**
 * Checks whether motion should run on the current client.
 * Returns true only on desktop/pointer-fine devices when reduced-motion is not preferred.
 */
export function shouldAnimate() {
  if (typeof window === 'undefined') return false;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return false;

  const isTouchOrMobile =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches ||
    window.innerWidth < 768;

  return !isTouchOrMobile;
}
