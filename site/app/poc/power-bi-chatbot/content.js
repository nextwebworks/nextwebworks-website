// site/app/poc/power-bi-chatbot/content.js - Decoupled copy for Power BI Chatbot PoC

export const pbiContent = {
  hero: {
    eyebrow: 'Power BI Conversational Copilot',
    titleMain: 'Ask Questions. Get Answers.',
    titleSub: 'Right Inside Your Power BI Reports.',
    description:
      'Turn static dashboards into conversational workspaces. Decision-makers get instant executive answers, ad-hoc drill-downs, and visual charts in plain English—with enterprise data governance and zero risk of query corruption.',
    primaryCta: {
      text: 'Request a Pilot Deployment',
      href: '#inquiry-form',
    },
    demoNotice: 'Live Subdomain Verification in Progress (Gate 5)',
    checks: [
      'Direct DAX Evaluation',
      '100% Read-Only Safety',
      'Azure Entra ID Governed',
    ],
  },

  value: {
    eyebrow: 'Executive Productivity',
    title: 'From Days of Waiting to Instant Answers',
    description:
      'Eliminate reporting bottlenecks so leadership can make confident, data-backed decisions during live meetings.',
    items: [
      {
        tag: 'SELF-SERVICE INTELLIGENCE',
        title: 'Zero Ad-Hoc Ticket Backlogs',
        description:
          'When leadership needs a quick segment comparison or margin drill-down before a board meeting, they avoid submitting a ticket to the BI team. Copilot translates natural language into verified queries in seconds.',
      },
      {
        tag: 'DIRECT WORKSPACE ADOPTION',
        title: 'Embedded Directly in Your Current Reports',
        description:
          'No new dashboards to bookmark and no complex BI software for business users to learn. The conversational copilot lives directly inside your existing Power BI report canvas as a native visual.',
      },
      {
        tag: 'DATA GOVERNANCE',
        title: 'Guaranteed Read-Only Data Safety',
        description:
          'Corporate data security is paramount. The engine runs under strict read-only AST parsing that categorically rejects data modification statements, disallows query injection, and caps row outputs to protect report performance.',
      },
    ],
  },

  workflow: {
    eyebrow: 'Three-Step Interaction',
    title: 'How Decision-Makers Converse with Reports',
    description:
      'Direct translation from executive curiosity to verified visual analytics.',
    steps: [
      {
        number: 'STEP 01',
        title: 'Ask in Plain English',
        description:
          'Type or speak natural questions like "Show monthly gross margin variance across product lines for Q3" without writing code or formulas.',
      },
      {
        number: 'STEP 02',
        title: 'Automated DAX Validation',
        description:
          'The reasoning engine references your model metadata to synthesize clean DAX queries, verifying syntax and enforcing read-only AST constraints.',
      },
      {
        number: 'STEP 03',
        title: 'Instant Visual Insights',
        description:
          'Verified results render immediately inside the visual card alongside interactive vector bar charts and summary cards ready for your slide deck.',
      },
    ],
  },

  security: {
    eyebrow: 'Enterprise Governance',
    title: 'Engineered for Strict Corporate Compliance',
    description:
      'Built to satisfy enterprise IT, information security, and tenant isolation requirements.',
    pillars: [
      {
        category: 'AUTHENTICATION',
        title: 'Microsoft Entra ID OAuth2',
        description:
          'Inherits existing workspace permissions and Row-Level Security (RLS) rules. Users never see data they are not permitted to access.',
      },
      {
        category: 'QUERY SAFETY',
        title: 'Read-Only AST Validation',
        description:
          'Permits only EVALUATE and DEFINE statements. Disallows semicolons, table drops, or DML mutations before queries are dispatched.',
      },
      {
        category: 'PERFORMANCE GUARD',
        title: '50-Row Result Bounding Cap',
        description:
          'Truncates query output at 50 records to prevent runaway queries, protect report frame memory, and avoid LLM context bloat.',
      },
      {
        category: 'DOM SECURITY',
        title: 'Zero innerHTML Injection',
        description:
          'Built strictly with safe React virtual DOM elements and SVG vector rendering. Zero raw HTML parsing or client-side eval vulnerabilities.',
      },
      {
        category: 'TRANSPORT PROTOCOL',
        title: 'Server-Sent Events (SSE)',
        description:
          'Streams token deltas in real-time with automatic query self-healing, recovering from schema mismatches in up to two retries.',
      },
      {
        category: 'TENANT ISOLATION',
        title: 'Zero Foundational Training',
        description:
          'Enterprise API agreements guarantee customer report data is never retained, logged, or utilized for foundational model training.',
      },
    ],
  },

  visualArch: {
    eyebrow: 'Microsoft Visuals SDK',
    title: 'Custom Visual Architecture & Safe DOM',
    description:
      'Packaged as a production-grade custom visual adhering strictly to Microsoft Power BI developer certification guidelines.',
    cards: [
      {
        tag: 'SANDBOX ISOLATION',
        title: 'Certified Iframe Sandbox',
        description:
          'Runs in an isolated iframe sandbox with explicit Content Security Policy (CSP) headers, prohibiting external script execution or unauthorized network calls.',
      },
      {
        tag: 'PROPERTY BINDING',
        title: 'Native Formatting Pane Schema',
        description:
          'Report authors configure theme colors, prompt placeholders, and font sizes directly inside the standard Power BI Desktop format pane using capabilities.json.',
      },
      {
        tag: 'AUTOMATED TESTING',
        title: '125 Monorepo Test Benchmarks',
        description:
          'Full automated verification across DAX AST parser unit tests, mock REST query execution, and visual DOM rendering benchmarks.',
      },
    ],
  },

  modelSupport: {
    eyebrow: 'Semantic Compatibility',
    title: 'Broad Semantic Model & Fabric Support',
    description:
      'Compatible across modern Microsoft business intelligence architectures without re-engineering schemas.',
    cards: [
      {
        tag: 'IMPORT & DIRECTQUERY',
        title: 'Hybrid Execution Modes',
        description:
          'Dispatches queries via the standard Power BI REST API (executeQueries), supporting Import Mode, DirectQuery, and Composite semantic models.',
      },
      {
        tag: 'MICROSOFT FABRIC',
        title: 'Fabric Lakehouse Ready',
        description:
          'Connects directly to Microsoft Fabric Lakehouse semantic models with full awareness of Direct Lake relationship definitions and hierarchies.',
      },
      {
        tag: 'SELF-HEALING DAX',
        title: 'Two-Pass Error Recovery',
        description:
          'If a semantic model schema drifts or throws a syntax exception, the reasoning engine detects the error payload and repairs the query automatically.',
      },
    ],
  },

  faqs: {
    eyebrow: 'Frequently Asked Questions',
    title: 'Everything You Need to Know About the Power BI Copilot',
    description:
      'Key questions on security, authentication, semantic model compatibility, and enterprise pilot deployment.',
    items: [
      {
        question: 'How does the visual authenticate against our Microsoft Power BI tenant?',
        answer:
          'The visual uses Microsoft Entra ID (formerly Azure Active Directory) OAuth2 delegation or a secure service principal registered in your tenant. Users only access semantic models and data rows they are already authorized to view under your existing Power BI workspace permissions and Row-Level Security (RLS) rules.',
      },
      {
        question: 'Can the conversational copilot modify or delete any of our report data?',
        answer:
          'No. Query generation is strictly read-only. Before any DAX expression is executed against your semantic model, it passes through an Abstract Syntax Tree (AST) validation parser that permits only EVALUATE and DEFINE statements. Semicolons, table mutations, DDL, and DML keywords are categorically blocked.',
      },
      {
        question: 'Does our proprietary business data leave our Azure tenant or get used to train AI models?',
        answer:
          'No. Only semantic metadata (table names, column headers, and measure definitions) is passed to the AI engine to formulate queries. In addition, enterprise API agreements with Google Gemini and Microsoft Azure guarantee that customer prompt data is never retained, logged, or utilized for foundational model retraining.',
      },
      {
        question: 'What happens if a user asks a complex question that exceeds token or memory limits?',
        answer:
          'Every executed query enforces an automated 50-row truncation cap at the REST API interface level. If a query produces excessive rows, the visual displays the top 50 records alongside aggregated summary indicators, protecting both report responsiveness and LLM context window limits.',
      },
      {
        question: 'Can this visual be added to existing Power BI reports or does it require new ones?',
        answer:
          'It packages as a standard custom visual (.pbiviz) that can be imported directly into your existing Power BI Desktop reports or published into your organization’s private organizational visuals repository in the Power BI Admin Portal.',
      },
      {
        question: 'Does the copilot support DirectQuery and Microsoft Fabric semantic models?',
        answer:
          'Yes. Because the visual executes queries through the standard Power BI REST API (executeQueries), it supports Import Mode, DirectQuery, Composite Models, and Microsoft Fabric Lakehouse semantic models with identical query safety guarantees.',
      },
      {
        question: 'How does the automated DAX error recovery work?',
        answer:
          'If a semantic model schema has recently changed or a generated DAX query throws a syntax error, the visual triggers an automated self-correction loop. The error code and semantic fault are sent back to the reasoning engine, which repairs the DAX query in up to two automated retries without user intervention.',
      },
      {
        question: 'What is included in a staged pilot deployment?',
        answer:
          'A staged pilot includes a 30-day trial in your designated test workspace, integration with 1–2 of your semantic models, custom visual branding, Entra ID app configuration assistance, and dedicated engineering support to tune natural language measure mappings.',
      },
    ],
  },

  ctaBanner: {
    badge: 'Enterprise PoC Deployment · Direct with Engineering',
    title: 'Ready to evaluate conversational analytics on your Power BI models?',
    description:
      'Schedule a technical scoping session to review semantic model compatibility, Entra ID permissions, and pilot rollout timelines.',
    primaryButton: {
      text: 'Request Pilot Deployment',
      href: '#inquiry-form',
    },
    footnote: 'Fixed pilot scope · Strict mutual NDA · Complete source code and visual package included',
  },
};
