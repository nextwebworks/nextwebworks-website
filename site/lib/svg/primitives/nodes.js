// site/lib/svg/primitives/nodes.js - Connected nodes, tracks, and status indicators

export function SvgNode({ cx, cy, radius = 6, label = '', state = 'active', color = '#38BDF8' }) {
  const isEmerald = state === 'success' || state === 'done';
  const nodeColor = isEmerald ? '#10B981' : color;

  return (
    <g>
      {/* Outer subtle halo ring */}
      <circle cx={cx} cy={cy} r={radius + 4} fill={nodeColor} fillOpacity="0.15" />
      {/* Node border & center */}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        className="fill-white dark:fill-[#0B0F19]"
        stroke={nodeColor}
        strokeWidth="2"
      />
      <circle cx={cx} cy={cy} r={radius / 2} fill={nodeColor} />
      {label && (
        <text
          x={cx}
          y={cy + radius + 14}
          textAnchor="middle"
          fontSize="9"
          fontFamily="ui-monospace, monospace"
          className="fill-slate-600 dark:fill-[#94A3B8]"
        >
          {label}
        </text>
      )}
    </g>
  );
}

export function SvgConnector({ x1, y1, x2, y2, dashed = false, color = '#38BDF8', strokeWidth = 2 }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray={dashed ? '4 4' : undefined}
      strokeLinecap="round"
    />
  );
}

export function SvgPipelineTrack({ x = 0, y = 0, width = 700, height = 70, steps = [] }) {
  const stepCount = steps.length || 4;
  const gap = width / (stepCount + 1);

  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        width={width}
        height={height}
        rx="8"
        className="fill-white/80 dark:fill-[#0F172A]/85 stroke-slate-200 dark:stroke-[#1E293B]"
        strokeWidth="1"
      />
      {/* Connecting base rail */}
      <line
        x1={gap}
        y1={height / 2}
        x2={width - gap}
        y2={height / 2}
        className="stroke-slate-200 dark:stroke-[#334155]"
        strokeWidth="2"
      />
      {steps.map((step, idx) => {
        const cx = gap * (idx + 1);
        const cy = height / 2;
        return (
          <SvgNode
            key={idx}
            cx={cx}
            cy={cy}
            radius={7}
            label={step.label}
            state={step.state}
            color={step.color || (idx === steps.length - 1 ? '#10B981' : '#38BDF8')}
          />
        );
      })}
    </g>
  );
}
