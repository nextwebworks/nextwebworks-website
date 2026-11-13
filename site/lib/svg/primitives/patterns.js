// site/lib/svg/primitives/patterns.js - Grid and dot patterns

export function SvgPatternGrid({ id, size = 20, className = 'stroke-slate-300/40 dark:stroke-slate-800/60' }) {
  return (
    <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
      <path
        d={`M ${size} 0 L 0 0 0 ${size}`}
        fill="none"
        className={className}
        strokeWidth="0.75"
      />
    </pattern>
  );
}

export function SvgPatternDots({ id, size = 16, radius = 1, className = 'fill-slate-400/30 dark:fill-slate-700/50' }) {
  return (
    <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
      <circle cx={size / 2} cy={size / 2} r={radius} className={className} />
    </pattern>
  );
}
