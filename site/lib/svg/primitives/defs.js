// site/lib/svg/primitives/defs.js - Gradients, glows, and filter defs

export function SvgDefs({ idPrefix = 'svg' }) {
  return (
    <defs>
      {/* Soft Cobalt Radial Glow */}
      <radialGradient id={`${idPrefix}-glow`} cx="50%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
      </radialGradient>

      {/* Emerald Accent Glow */}
      <radialGradient id={`${idPrefix}-emerald-glow`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
      </radialGradient>

      {/* Surface Linear Gradient (Light to Dark) */}
      <linearGradient id={`${idPrefix}-surface-grad`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1E293B" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
      </linearGradient>

      {/* Soft Drop Filter */}
      <filter id={`${idPrefix}-shadow`} x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.25" />
      </filter>
    </defs>
  );
}
