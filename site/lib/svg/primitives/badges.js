// site/lib/svg/primitives/badges.js - Chips, status pills, rings, and telemetry badges

export function SvgChip({ x = 0, y = 0, label = '', state = 'neutral', width = 90, height = 20 }) {
  const isEmerald = state === 'success' || state === 'emerald';
  const isCobalt = state === 'cobalt' || state === 'info';

  let fill = '#1E293B';
  let stroke = '#334155';
  let textColor = '#94A3B8';

  if (isEmerald) {
    fill = '#10B981';
    stroke = '#10B981';
    textColor = '#10B981';
  } else if (isCobalt) {
    fill = '#2563EB';
    stroke = '#38BDF8';
    textColor = '#38BDF8';
  }

  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        width={width}
        height={height}
        rx={height / 2}
        fill={fill}
        fillOpacity="0.12"
        stroke={stroke}
        strokeWidth="1"
      />
      {isEmerald && (
        <circle cx={height / 2} cy={height / 2} r="3" fill="#10B981" />
      )}
      <text
        x={isEmerald ? height / 2 + 8 : width / 2}
        y={height / 2 + 3.5}
        textAnchor={isEmerald ? 'start' : 'middle'}
        fontSize="9"
        fontWeight="700"
        fontFamily="ui-monospace, monospace"
        fill={textColor}
        letterSpacing="0.5"
      >
        {label}
      </text>
    </g>
  );
}

export function SvgRingMetric({ cx, cy, radius = 24, progress = 0.85, label = '', value = '98%' }) {
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <g>
      {/* Background track */}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        className="stroke-slate-200 dark:stroke-[#1E293B]"
        strokeWidth="3"
      />
      {/* Progress ring */}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke="#10B981"
        strokeWidth="3"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
      />
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fontFamily="ui-monospace, monospace"
        className="fill-slate-900 dark:fill-white"
      >
        {value}
      </text>
      {label && (
        <text
          x={cx}
          y={cy + radius + 14}
          textAnchor="middle"
          fontSize="8"
          fontFamily="ui-monospace, monospace"
          className="fill-slate-500 dark:fill-[#94A3B8]"
        >
          {label}
        </text>
      )}
    </g>
  );
}
