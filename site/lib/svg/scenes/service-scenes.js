// site/lib/svg/scenes/service-scenes.js - Composable service capability scenes

import {
  SvgWindowFrame,
  SvgDeviceFrame,
  SvgCard,
  SvgChip,
  SvgNode,
  SvgConnector,
  SvgRingMetric,
  SvgLayeredStack,
} from '../primitives/index.js';

export function ServiceSceneWebsites({ prng }) {
  return (
    <g transform="translate(48, 64)">
      {/* Browser Frame Preview */}
      <SvgWindowFrame x={0} y={0} width={430} height={290} title="marketing-website.stage" />
      <g transform="translate(24, 48)">
        <rect width="382" height="60" rx="6" className="fill-slate-100 dark:fill-[#1E293B]" />
        <rect x="0" y="74" width="180" height="130" rx="6" className="fill-slate-100 dark:fill-[#1E293B]" />
        <rect x="202" y="74" width="180" height="130" rx="6" className="fill-slate-100 dark:fill-[#1E293B]" />
      </g>

      {/* Metrics Card */}
      <SvgCard x={454} y={0} width={250} height={290} title="PERF // CORE VITALS">
        <g transform="translate(110, 60)">
          <SvgRingMetric cx={0} cy={0} radius={42} progress={0.98} value="100" label="PERFORMANCE" />
        </g>
        <g transform="translate(12, 130)">
          <SvgChip x={0} y={0} label="LCP: < 1.2S" state="emerald" width={200} height={22} />
          <SvgChip x={0} y={30} label="CLS: 0.000" state="emerald" width={200} height={22} />
          <SvgChip x={0} y={60} label="WCAG 2.1 AA PASS" state="cobalt" width={200} height={22} />
        </g>
      </SvgCard>
    </g>
  );
}

export function ServiceSceneWebApps({ prng }) {
  return (
    <g transform="translate(48, 64)">
      <SvgCard x={0} y={0} width={704} height={290} title="FULLSTACK // REACT SERVER COMPONENTS">
        <g transform="translate(40, 40)">
          <SvgNode cx={60} cy={60} radius={16} label="CLIENT (RSC)" state="active" color="#38BDF8" />
          <SvgConnector x1={110} y1={60} x2={220} y2={60} color="#38BDF8" strokeWidth={2} />
          <SvgNode cx={260} cy={60} radius={16} label="RBAC GUARDS" state="success" color="#10B981" />
          <SvgConnector x1={300} y1={60} x2={410} y2={60} color="#10B981" strokeWidth={2} />
          <SvgNode cx={450} cy={60} radius={16} label="DATABASE (ACID)" state="active" color="#38BDF8" />

          {/* Lower pipeline tags */}
          <g transform="translate(10, 130)">
            <SvgChip x={0} y={0} label="TRANSACTIONAL ROLLBACKS" state="emerald" width={200} height={24} />
            <SvgChip x={220} y={0} label="ENCRYPTED SESSION TOKENS" state="cobalt" width={200} height={24} />
            <SvgChip x={440} y={0} label="SUB-SECOND TTFB" state="emerald" width={170} height={24} />
          </g>
        </g>
      </SvgCard>
    </g>
  );
}

export function ServiceSceneErps({ prng }) {
  return (
    <g transform="translate(48, 64)">
      <SvgCard x={0} y={0} width={430} height={290} title="FIFO_LEDGER // INVENTORY PIPELINE">
        <g transform="translate(20, 20)">
          <SvgLayeredStack x={0} y={0} width={380} height={38} layers={3} offset={14} />
          <g transform="translate(0, 100)">
            <SvgChip x={0} y={0} label="ROW-LEVEL RECORD LOCK" state="emerald" width={220} height={24} />
            <SvgChip x={0} y={36} label="MULTI-TIER GST ENGINE" state="cobalt" width={220} height={24} />
            <SvgChip x={0} y={72} label="ATOMIC STOCK DEPLETION" state="emerald" width={220} height={24} />
          </g>
        </g>
      </SvgCard>

      <SvgCard x={454} y={0} width={250} height={290} title="DOCUMENT // VECTOR PDF">
        <g transform="translate(16, 20)">
          <rect width="190" height="150" rx="6" className="fill-slate-100 dark:fill-[#0B0F19] stroke-slate-200 dark:stroke-[#1E293B]" strokeWidth="1" />
          <line x1="20" y1="30" x2="170" y2="30" stroke="#38BDF8" strokeWidth="3" />
          <line x1="20" y1="50" x2="140" y2="50" className="stroke-slate-300 dark:stroke-[#334155]" strokeWidth="2" />
          <line x1="20" y1="70" x2="150" y2="70" className="stroke-slate-300 dark:stroke-[#334155]" strokeWidth="2" />
          <line x1="20" y1="90" x2="100" y2="90" className="stroke-slate-300 dark:stroke-[#334155]" strokeWidth="2" />
          <g transform="translate(0, 170)">
            <SvgChip x={0} y={0} label="NATIVE QUESTPDF ENGINE" state="emerald" width={190} height={24} />
          </g>
        </g>
      </SvgCard>
    </g>
  );
}

export function ServiceSceneMobileApps({ prng }) {
  return (
    <g transform="translate(48, 64)">
      <SvgDeviceFrame x={60} y={0} width={170} height={290} />
      <g transform="translate(260, 20)">
        <SvgCard x={0} y={0} width={420} height={250} title="SHARED_CORE // REACT NATIVE & EXPO">
          <g transform="translate(16, 20)">
            <SvgChip x={0} y={0} label="IOS & ANDROID COMPILED" state="emerald" width={220} height={24} />
            <SvgChip x={0} y={36} label="NATIVE SENSOR BRIDGES" state="cobalt" width={220} height={24} />
            <SvgChip x={0} y={72} label="HARDWARE BIOMETRICS" state="emerald" width={220} height={24} />
            <SvgChip x={0} y={108} label="EXPO EAS STORE BUILDS" state="neutral" width={220} height={24} />
          </g>
        </SvgCard>
      </g>
    </g>
  );
}

export function ServiceSceneCmsPlatforms({ prng }) {
  return (
    <g transform="translate(48, 64)">
      <SvgCard x={0} y={0} width={704} height={290} title="CMS_SYSTEMS // EDITORIAL AUTONOMY">
        <g transform="translate(30, 30)">
          <SvgLayeredStack x={0} y={0} width={300} height={42} layers={3} offset={12} />
          <g transform="translate(340, 0)">
            <SvgChip x={0} y={0} label="CUSTOM GUTENBERG BLOCKS" state="emerald" width={280} height={26} />
            <SvgChip x={0} y={40} label="STRUCTURED WEBFLOW SCHEMAS" state="cobalt" width={280} height={26} />
            <SvgChip x={0} y={80} label="ZERO THIRD-PARTY BUILDER BLOAT" state="emerald" width={280} height={26} />
            <SvgChip x={0} y={120} label="ASYNC CLIENT VIDEO HANDOVER" state="neutral" width={280} height={26} />
          </g>
        </g>
      </SvgCard>
    </g>
  );
}
