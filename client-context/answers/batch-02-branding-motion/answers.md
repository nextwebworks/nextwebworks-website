# Batch 02 Answers: Branding, Design Direction & Motion

- **Brand Assets:** will-provide (Client will provide vector logo assets)
- **Color Palette:** curate-for-me
  - **Canvas Background:** `#0B0F19` deep slate navy
  - **Surfaces & Cards:** `#FFFFFF` neutral white / `#0F172A` deep card surface
  - **Interactive Accent:** `#2563EB` electric cobalt (strictly for buttons and conversion CTAs; strictly PROHIBITED for body text on `#0B0F19` to guarantee WCAG compliance)
  - **Success / "Live" Indicators:** `#10B981` emerald status indicators
  - **Borders & Dividers:** `#1E293B` crisp 1px hairline border dividers
- **Typography:** google-fonts (Heading: Plus Jakarta Sans with tight tracking, Body: Inter with generous line height, Monospace: JetBrains Mono for pricing sub-lines and technical metadata)
- **Brand Scale:** Minimal: 2/5, Corporate: 2/5, Luxury: 3/5, Modern: 5/5 (Dense but calm hierarchy, high technical clarity, modern digital craft)
- **Liked References & Principles:**
  1. Linear: https://linear.app - Dense but calm hierarchy, confident short copy, real UI wireframes.
  2. Stripe: https://stripe.com - Clear typographic scale, proof placed directly near claims, modular cards.
  3. PostHog: https://posthog.com - Direct, specific copy that doesn't read as agency fluff, transparent terms.
  *(Detailed multi-dimensional breakdown documented in `client-context/reference-analysis.md`)*
- **Gate 2 Variation Count & Approved Themes:** 3 variations (Review Hub: Tabbed full-screen switcher with 1440/768/375px breakpoint toggles):
  - `nextwebworks-website-v1`: Linear-inspired deep monochromatic slate navy workspace (`#0B0F19`), crisp 1px hairline borders (`#1E293B`), dense technical cards.
  - `nextwebworks-website-v2`: Stripe-inspired high-contrast neutral light surfaces with electric cobalt accents (`#2563EB`) and structured modular capability blocks.
  - `nextwebworks-website-v3`: Hybrid segmented dark hero and footer with crisp light content zones for pricing and services.
- **Hero & Key Section Layouts:**
  - **Primary CTA:** "Book a 20-Min Call" (routes to `/book-a-call`, always visible in sticky header).
  - **Secondary CTA:** "See Packages & Pricing ↓" (smooth anchor scroll to pricing).
  - **Pain-Points:** 3-column qualitative cards (*"The Freelancer Ghost"*, *"The Unbillable In-House Salary"*, *"The Costly Code Rewrite"*); zero invented statistics.
  - **Workflow:** Horizontal connected pipeline on desktop, vertical on mobile, static emerald nodes (subtle pulse at most; zero scrubbed progress bars).
  - **Services Layout:** 2x2 modular grid with "from" prices and expandable specification drawers.
  - **Per-Service Schematics:** Wireframe system node diagrams with cobalt connection lines and light data-packet pulses (zero fake terminal/IDE windows).
- **Reference Anti-Patterns to Avoid:**
  - Stock photos and generic "team at a laptop" imagery (stock ceiling = 0).
  - Fake client logos, fabricated testimonials, or invented stats.
  - Vague "we build anything" copy.
  - Heavy template-looking gradients and bento grids everywhere.
  - No autoplay video reels. WebGL/GLSL is allowed under the `ultra` tier, but must not block the Book a Call button or the primary content.
- **Reference Adherence Mode:** principles-only (100% original layout, markup, and copy derived from abstract principles)
- **GSAP Animation Tier:** `ultra`
  - 120fps GSAP ticker synchronization with Lenis smooth scroll.
  - Micro-interactions: 1px cobalt border glow (`rgba(37, 99, 235, 0.5)`) + -2px translateY lift on card/button hover.
  - Non-blocking WebGL/GLSL canvas effects permitted, respecting `prefers-reduced-motion`.
  - Header: Persistent sticky header with dynamic backdrop blur (`backdrop-blur-md`) and hairline bottom border on scroll.
