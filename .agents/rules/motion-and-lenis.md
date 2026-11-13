---
trigger: glob
globs: "**/site/components/motion/**, **/site/lib/motion.js, **/site/app/_components/**"
description: Ultra motion tier, Lenis smooth scroll, and mobile battery conservation.
---

# Motion & Smooth Scroll Architecture (`ultra` Tier)

## 1. Engine & Ticker Synchronization
- The project implements the `ultra` motion tier using GSAP 3 and Lenis smooth scrolling.
- Lenis runs decoupled from native scroll and synchronizes via `gsap.ticker.add((time) => lenis.raf(time * 1000))` in `SmoothScrollProvider.js`.
- Always set `gsap.ticker.lagSmoothing(0)` to prevent animation stuttering on high-refresh desktop monitors.

## 2. Mobile Battery & Reduced Motion Protection (F-10 Option A)
- **Automatic Deactivation:** Lenis and continuous ticker updates must automatically deactivate when:
  - Touch input is detected (`'ontouchstart' in window || navigator.maxTouchPoints > 0`).
  - Pointer is coarse (`window.matchMedia('(pointer: coarse)').matches`).
  - Screen width is mobile/tablet (`window.innerWidth < 768`).
  - Reduced motion is preferred (`window.matchMedia('(prefers-reduced-motion: reduce)').matches`).
- **Graceful Fallback:** Mobile devices must use 100% native momentum scrolling with zero background ticker CPU/battery drain.
- **Content Availability:** Content, hero CTAs, and forms must render immediately and remain interactive regardless of animation loading state.
