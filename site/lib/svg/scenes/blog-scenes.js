// site/lib/svg/scenes/blog-scenes.js - Composable blog cover scenes

import {
  SvgPipelineTrack,
  SvgSteppedBars,
  SvgCard,
  SvgChip,
  SvgNode,
  SvgConnector,
  SvgRingMetric,
} from '../primitives/index.js';

export function BlogSceneGrowth({ prng }) {
  const offset = prng.range(-8, 8);
  const bars = [45 + offset, 75 + offset, 110 + offset, 145 + offset, 180 + offset];

  return (
    <g transform="translate(48, 68)">
      {/* Track 1: Multi-Tenant Sprint Delivery Pipeline */}
      <SvgPipelineTrack
        x={0}
        y={0}
        width={704}
        height={72}
        steps={[
          { label: 'BRIEF_INGEST', state: 'active' },
          { label: 'DEV_SPRINT', state: 'active' },
          { label: 'RSC_AUDIT', state: 'success' },
          { label: 'AGENCY_SHIP', state: 'success' },
        ]}
      />

      {/* Middle: Stepped Capacity & Throughput */}
      <g transform="translate(0, 88)">
        <SvgCard x={0} y={0} width={340} height={216} title="BENCH_CAPACITY // SPRINT PODS">
          <SvgSteppedBars x={16} y={10} bars={bars} barWidth={44} gap={14} maxHeight={150} />
        </SvgCard>

        {/* Telemetry Ring & Verification Panel */}
        <SvgCard x={364} y={0} width={340} height={216} title="DISPATCH_METRICS // CORE HEALTH">
          <g transform="translate(70, 75)">
            <SvgRingMetric cx={0} cy={0} radius={44} progress={0.96} value="99.4%" label="BUILD SUCCESS" />
          </g>
          <g transform="translate(190, 75)">
            <SvgRingMetric cx={0} cy={0} radius={44} progress={0.99} value="<14ms" label="EDGE LATENCY" />
          </g>
        </SvgCard>
      </g>
    </g>
  );
}

export function BlogSceneScoping({ prng }) {
  const seedShift = prng.range(-5, 5);

  return (
    <g transform="translate(48, 68)">
      <SvgPipelineTrack
        x={0}
        y={0}
        width={704}
        height={72}
        steps={[
          { label: 'SCOPE_LOCK', state: 'success' },
          { label: 'FIXED_QUOTE', state: 'success' },
          { label: 'SPRINT_GATE', state: 'active' },
          { label: 'WARRANTY_14D', state: 'success' },
        ]}
      />

      <g transform="translate(0, 88)">
        <SvgCard x={0} y={0} width={420} height={216} title="MILESTONE CONTROL · BOUNDARY GATES">
          <g transform="translate(16, 20)">
            <SvgChip x={0} y={0} label="NDA PROTOCOL · VERIFIED" state="emerald" width={220} height={24} />
            <SvgChip x={0} y={36} label="CHANGE_REQUEST_BARRIER" state="cobalt" width={220} height={24} />
            <SvgChip x={0} y={72} label="ZERO SCOPE CREEP · 100%" state="emerald" width={220} height={24} />
            <SvgChip x={0} y={108} label="IP_TRANSFER_UNCONDITIONAL" state="neutral" width={220} height={24} />
          </g>
        </SvgCard>

        <SvgCard x={440} y={0} width={264} height={216} title="SPEC STATUS · QA AUDIT">
          <g transform="translate(118, 85)">
            <SvgRingMetric cx={0} cy={0} radius={48} progress={0.92 + (seedShift / 100)} value="100%" label="SPEC ACCURACY" />
          </g>
        </SvgCard>
      </g>
    </g>
  );
}

export function BlogSceneArchitecture({ prng }) {
  return (
    <g transform="translate(48, 68)">
      {/* Cluster Node Map */}
      <SvgCard x={0} y={0} width={704} height={304} title="TOPOLOGY // DISTRIBUTED ARCHITECTURE">
        <g transform="translate(40, 40)">
          {/* Main Nodes */}
          <SvgNode cx={60} cy={50} radius={14} label="NEXT.JS 16 RSC" state="active" color="#38BDF8" />
          <SvgConnector x1={100} y1={50} x2={220} y2={50} color="#38BDF8" strokeWidth={2} />
          <SvgNode cx={260} cy={50} radius={14} label="NWW CMS KIT" state="success" color="#10B981" />
          <SvgConnector x1={300} y1={50} x2={420} y2={50} color="#10B981" strokeWidth={2} />
          <SvgNode cx={460} cy={50} radius={14} label="EDGE CACHE CDN" state="active" color="#38BDF8" />

          {/* Sub connections */}
          <SvgConnector x1={260} y1={80} x2={260} y2={140} color="#64748B" dashed={true} />
          <SvgNode cx={260} cy={160} radius={12} label="HMAC WEBHOOK" state="success" color="#10B981" />

          <SvgConnector x1={460} y1={80} x2={460} y2={140} color="#64748B" dashed={true} />
          <SvgNode cx={460} cy={160} radius={12} label="TAG PURGE ISR" state="active" color="#38BDF8" />
        </g>
      </SvgCard>
    </g>
  );
}

export function BlogSceneGeneral({ prng }) {
  return (
    <g transform="translate(48, 68)">
      <SvgPipelineTrack
        x={0}
        y={0}
        width={704}
        height={72}
        steps={[
          { label: 'CLIENT_BRIEF', state: 'active' },
          { label: 'ARCHITECTURE', state: 'active' },
          { label: 'PRODUCTION', state: 'success' },
          { label: 'HANDOVER', state: 'success' },
        ]}
      />
      <g transform="translate(0, 88)">
        <SvgCard x={0} y={0} width={704} height={216} title="TECHNICAL_PLAYBOOK // SYSTEMS DESIGN">
          <g transform="translate(20, 20)">
            <SvgChip x={0} y={0} label="WHITE-LABEL PROTOCOL" state="emerald" width={200} height={24} />
            <SvgChip x={220} y={0} label="REACT SERVER COMPONENTS" state="cobalt" width={230} height={24} />
            <SvgChip x={470} y={0} label="14-DAY POST-LAUNCH QA" state="emerald" width={190} height={24} />
          </g>
          <g transform="translate(340, 110)">
            <SvgRingMetric cx={0} cy={0} radius={42} progress={1} value="AA" label="WCAG ACCESSIBILITY" />
          </g>
        </SvgCard>
      </g>
    </g>
  );
}
