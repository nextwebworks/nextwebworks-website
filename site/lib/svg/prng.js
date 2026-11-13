// site/lib/svg/prng.js - Deterministic seeded pseudo-random generator (Mulberry32)

export function createPrng(slug = '') {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < slug.length; i++) {
    h = Math.imul(h ^ slug.charCodeAt(i), 16777619);
  }
  let a = h >>> 0;

  function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  function range(min, max) {
    return Math.floor(min + next() * (max - min + 1));
  }

  const hexHash = (a >>> 16).toString(16).padStart(4, '0').toUpperCase();

  return { next, range, hexHash, seed: a };
}
