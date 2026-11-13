// site/lib/svg/primitives/frames.js - Window, device, and CAD outer frames

export function SvgCadFrame({ width = 800, height = 450, padding = 20, reticleColor = '#38BDF8' }) {
  const w = width - padding * 2;
  const h = height - padding * 2;
  const x = padding;
  const y = padding;

  return (
    <g className="pointer-events-none" aria-hidden="true">
      {/* Outer hairline border */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="6"
        fill="none"
        className="stroke-slate-200 dark:stroke-[#1E293B]"
        strokeWidth="1.2"
      />
      {/* Corner Crosshair Reticles */}
      <path d={`M ${x - 6} ${y} H ${x + 6} M ${x} ${y - 6} V ${y + 6}`} stroke={reticleColor} strokeWidth="1.5" strokeLinecap="round" />
      <path d={`M ${x + w - 6} ${y} H ${x + w + 6} M ${x + w} ${y - 6} V ${y + 6}`} stroke={reticleColor} strokeWidth="1.5" strokeLinecap="round" />
      <path d={`M ${x - 6} ${y + h} H ${x + 6} M ${x} ${y + h - 6} V ${y + h + 6}`} stroke={reticleColor} strokeWidth="1.5" strokeLinecap="round" />
      <path d={`M ${x + w - 6} ${y + h} H ${x + w + 6} M ${x + w} ${y + h - 6} V ${y + h + 6}`} stroke={reticleColor} strokeWidth="1.5" strokeLinecap="round" />
    </g>
  );
}

export function SvgWindowFrame({ x = 0, y = 0, width = 400, height = 240, title = 'preview.window' }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        width={width}
        height={height}
        rx="8"
        className="fill-white dark:fill-[#0F172A] stroke-slate-200 dark:stroke-[#1E293B]"
        strokeWidth="1"
      />
      {/* Header bar */}
      <rect
        width={width}
        height="28"
        rx="8"
        className="fill-slate-50 dark:fill-[#1E293B]/50"
      />
      <line x1="0" y1="28" x2={width} y2="28" className="stroke-slate-200 dark:stroke-[#1E293B]" strokeWidth="1" />
      {/* Traffic lights */}
      <circle cx="14" cy="14" r="3.5" fill="#EF4444" fillOpacity="0.8" />
      <circle cx="26" cy="14" r="3.5" fill="#F59E0B" fillOpacity="0.8" />
      <circle cx="38" cy="14" r="3.5" fill="#10B981" fillOpacity="0.8" />
      <text
        x={width / 2}
        y="18"
        textAnchor="middle"
        fontSize="10"
        fontFamily="ui-monospace, monospace"
        className="fill-slate-500 dark:fill-[#64748B]"
      >
        {title}
      </text>
    </g>
  );
}

export function SvgDeviceFrame({ x = 0, y = 0, width = 180, height = 300 }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        width={width}
        height={height}
        rx="22"
        className="fill-white dark:fill-[#0F172A] stroke-slate-300 dark:stroke-[#334155]"
        strokeWidth="2"
      />
      {/* Speaker notch */}
      <rect x={width / 2 - 20} y="10" width="40" height="4" rx="2" fill="#64748B" />
      {/* Screen area */}
      <rect
        x="10"
        y="24"
        width={width - 20}
        height={height - 48}
        rx="12"
        className="fill-slate-50 dark:fill-[#0B0F19] stroke-slate-200 dark:stroke-[#1E293B]"
        strokeWidth="1"
      />
      {/* Home bar */}
      <rect x={width / 2 - 24} y={height - 14} width="48" height="3" rx="1.5" fill="#64748B" />
    </g>
  );
}
