// site/lib/svg/scenes/work-scenes.js - Composable deliverable case study scenes

import {
  SvgCard,
  SvgChip,
  SvgNode,
  SvgConnector,
  SvgRingMetric,
  SvgPipelineTrack,
} from '../primitives/index.js';

export function WorkSceneNwwCmsKit({ prng }) {
  return (
    <g transform="translate(48, 64)">
      <SvgPipelineTrack
        x={0}
        y={0}
        width={704}
        height={72}
        steps={[
          { label: 'CMS_MUTATION', state: 'active' },
          { label: 'HMAC_WEBHOOK', state: 'success' },
          { label: 'REVALIDATE_TAG', state: 'success' },
          { label: 'EDGE_DELIVERY', state: 'success' },
        ]}
      />
      <g transform="translate(0, 88)">
        <SvgCard x={0} y={0} width={430} height={216} title="ENGINE // NWW HEADLESS CMS CLIENT">
          <g transform="translate(16, 20)">
            <SvgChip x={0} y={0} label="CLASS-BASED MODEL SDK" state="emerald" width={240} height={24} />
            <SvgChip x={0} y={36} label="AUTOMATED JSON-LD SCHEMA" state="cobalt" width={240} height={24} />
            <SvgChip x={0} y={72} label="ZERO THIRD-PARTY REST LEAKS" state="emerald" width={240} height={24} />
            <SvgChip x={0} y={108} label="SUB-SECOND STATIC BUILD PASS" state="neutral" width={240} height={24} />
          </g>
        </SvgCard>
        <SvgCard x={454} y={0} width={250} height={216} title="TELEMETRY // CACHE PURGE">
          <g transform="translate(110, 85)">
            <SvgRingMetric cx={0} cy={0} radius={46} progress={1.0} value="<10ms" label="EDGE PURGE" />
          </g>
        </SvgCard>
      </g>
    </g>
  );
}

export function WorkSceneClassymenu({ prng }) {
  return (
    <g transform="translate(48, 64)">
      <SvgCard x={0} y={0} width={704} height={304} title="PLATFORM // MULTI-TENANT DIGITAL DINING">
        <g transform="translate(40, 40)">
          <SvgNode cx={60} cy={50} radius={14} label="TABLE QR SCAN" state="active" color="#38BDF8" />
          <SvgConnector x1={100} y1={50} x2={220} y2={50} color="#38BDF8" strokeWidth={2} />
          <SvgNode cx={260} cy={50} radius={14} label="REALTIME SYNC" state="success" color="#10B981" />
          <SvgConnector x1={300} y1={50} x2={420} y2={50} color="#10B981" strokeWidth={2} />
          <SvgNode cx={460} cy={50} radius={14} label="WHATSAPP BRIDGE" state="active" color="#38BDF8" />

          <g transform="translate(10, 130)">
            <SvgChip x={0} y={0} label="ZERO LOGIN CUSTOMER CHECKOUT" state="emerald" width={240} height={24} />
            <SvgChip x={260} y={0} label="OPTIMISTIC UI TABLE SESSIONS" state="cobalt" width={240} height={24} />
            <SvgChip x={0} y={36} label="SUB-SECOND SEARCH CATALOG" state="emerald" width={240} height={24} />
            <SvgChip x={260} y={36} label="DIRECT KITCHEN ROUTING" state="neutral" width={240} height={24} />
          </g>
        </g>
      </SvgCard>
    </g>
  );
}

export function WorkSceneCeramicsales({ prng }) {
  return (
    <g transform="translate(48, 64)">
      <SvgCard x={0} y={0} width={704} height={304} title="ENTERPRISE // B2B WHOLESALE & FIFO ERP">
        <g transform="translate(40, 40)">
          <SvgNode cx={60} cy={50} radius={14} label="ORDER INGEST" state="active" color="#38BDF8" />
          <SvgConnector x1={100} y1={50} x2={220} y2={50} color="#38BDF8" strokeWidth={2} />
          <SvgNode cx={260} cy={50} radius={14} label="ATOMIC FIFO LOCK" state="success" color="#10B981" />
          <SvgConnector x1={300} y1={50} x2={420} y2={50} color="#10B981" strokeWidth={2} />
          <SvgNode cx={460} cy={50} radius={14} label="VECTOR INVOICE" state="active" color="#38BDF8" />

          <g transform="translate(10, 130)">
            <SvgChip x={0} y={0} label="ROW-LEVEL CONCURRENCY GUARDS" state="emerald" width={240} height={24} />
            <SvgChip x={260} y={0} label="DYNAMIC CGST/SGST/IGST ENGINE" state="cobalt" width={240} height={24} />
            <SvgChip x={0} y={36} label="SERVER-SIDE PDF STREAMING" state="emerald" width={240} height={24} />
            <SvgChip x={260} y={36} label="IMMUTABLE AUDIT LEDGERS" state="neutral" width={240} height={24} />
          </g>
        </g>
      </SvgCard>
    </g>
  );
}

export function WorkSceneFallback({ prng }) {
  return (
    <g transform="translate(48, 64)">
      <SvgPipelineTrack
        x={0}
        y={0}
        width={704}
        height={72}
        steps={[
          { label: 'SPECIFICATION', state: 'active' },
          { label: 'DEVELOPMENT', state: 'active' },
          { label: 'QA_STAGING', state: 'success' },
          { label: 'HANDOVER_IP', state: 'success' },
        ]}
      />
      <g transform="translate(0, 88)">
        <SvgCard x={0} y={0} width={704} height={216} title="CASE_STUDY // VERIFIED ARCHITECTURE">
          <g transform="translate(20, 20)">
            <SvgChip x={0} y={0} label="100% WHITE-LABEL CODEBASE" state="emerald" width={220} height={24} />
            <SvgChip x={240} y={0} label="CLEAN GIT COMMIT HYGIENE" state="cobalt" width={220} height={24} />
            <SvgChip x={480} y={0} label="14-DAY WARRANTY" state="emerald" width={180} height={24} />
          </g>
          <g transform="translate(340, 110)">
            <SvgRingMetric cx={0} cy={0} radius={42} progress={1.0} value="100%" label="SPEC ACCURACY" />
          </g>
        </SvgCard>
      </g>
    </g>
  );
}
