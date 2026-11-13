// site/lib/svg/primitives/blocks.js - Cards, containers, stepped bars, and layered stacks

export function SvgCard({ x = 0, y = 0, width = 300, height = 180, rx = 8, title = '', children }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        width={width}
        height={height}
        rx={rx}
        className="fill-white/90 dark:fill-[#0F172A]/90 stroke-slate-200 dark:stroke-[#1E293B]"
        strokeWidth="1"
      />
      {title && (
        <>
          <text
            x="14"
            y="22"
            fontSize="10"
            fontWeight="700"
            fontFamily="ui-monospace, monospace"
            className="fill-slate-700 dark:fill-[#94A3B8]"
            letterSpacing="1"
          >
            {title}
          </text>
          <line
            x1="0"
            y1="32"
            x2={width}
            y2="32"
            className="stroke-slate-200 dark:stroke-[#1E293B]"
            strokeWidth="1"
          />
        </>
      )}
      <g transform={title ? 'translate(14, 44)' : 'translate(14, 14)'}>
        {children}
      </g>
    </g>
  );
}

export function SvgSteppedBars({ x = 0, y = 0, bars = [40, 70, 110, 150, 200], barWidth = 36, gap = 16, maxHeight = 160 }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {bars.map((h, i) => {
        const bx = i * (barWidth + gap);
        const by = maxHeight - h;
        const opacity = 0.2 + (i / bars.length) * 0.7;
        return (
          <g key={i}>
            <rect
              x={bx}
              y={by}
              width={barWidth}
              height={h}
              rx="4"
              fill="#2563EB"
              fillOpacity={opacity}
              stroke="#38BDF8"
              strokeWidth="1"
            />
            {/* Top highlight cap */}
            <line
              x1={bx + 2}
              y1={by + 2}
              x2={bx + barWidth - 2}
              y2={by + 2}
              stroke="#60A5FA"
              strokeWidth="2"
            />
          </g>
        );
      })}
    </g>
  );
}

export function SvgLayeredStack({ x = 0, y = 0, width = 220, height = 40, layers = 3, offset = 12 }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {Array.from({ length: layers }).map((_, idx) => {
        const layerIdx = layers - 1 - idx;
        const lx = layerIdx * offset;
        const ly = layerIdx * offset;
        const opacity = 0.5 + (idx / layers) * 0.5;

        return (
          <rect
            key={idx}
            x={lx}
            y={ly}
            width={width - (layers - 1) * offset}
            height={height}
            rx="6"
            className="fill-white dark:fill-[#0F172A] stroke-slate-200 dark:stroke-[#1E293B]"
            strokeWidth="1.2"
            fillOpacity={opacity}
          />
        );
      })}
    </g>
  );
}
