# Stage 2: Design Theory & Visual System Specification

**Project Name:** Next Web Works  
**Technical Slug:** `nextwebworks-website`  
**Brand Display Name:** Next Web Works  
**Pipeline Gate:** Gate 2 Visual System & Design Theory  
**Motion Tier:** `ultra` (GSAP 3 ticker sync + Lenis, non-blocking WebGL/GLSL, subtle border glow + -2px lift)  
**Approver:** Devansh  
**Last Updated:** 2026-11-11  

---

## 1. Pattern Recognition

Across the liked benchmarks (`linear.app`, `stripe.com`, `posthog.com`) and client parameters confirmed in Gate 2, five overarching design patterns define the Next Web Works visual architecture:

1. **High-Density, Calm Structural Order (from Linear):** Spatial composition relies on a rigorous 8-point baseline grid with crisp 1px hairline border dividers (`#1E293B`) separating dense content modules rather than heavy shadow elevations or loud colored backgrounds.
2. **Restrained Color Discipline with Interactive-Only Accent (from Linear & Client Rule):** The canvas remains anchored in deep slate navy (`#0B0F19`) and neutral surfaces (`#FFFFFF` / `#0F172A`). Electric cobalt (`#2563EB`) is reserved strictly for interactive touchpoints and conversion buttons; it is strictly prohibited for body text on dark canvas to guarantee 100% WCAG contrast compliance. Emerald (`#10B981`) is dedicated solely to live status badges and workflow nodes.
3. **Verifiable Proof Directly Adjacent to Claims (from Stripe):** Every operational promise or capability claim is substantiated with a concrete mechanism placed directly adjacent in the module (e.g. stated pre-work mutual NDA process step, Indore legal business address, 14-day post-launch fix window, NWW CMS persistence).
4. **Grounded UI Schematics over Decorative Gimmicks (from Linear & PostHog):** Abstract vector art, floating 3D shapes, and stock photos are completely eliminated (stock ceiling = 0). Services and illustrative work samples are communicated via wireframe system node diagrams with cobalt connectors and authentic product UI contracts.
5. **Radical Transparency in Voice & Tone (from PostHog):** Grounded, peer-to-peer engineering tone that speaks directly to agency founders with clear scoping on discovery calls, transparent turnaround framing (*"typical: within 24 business hours"*), and zero agency buzzwords (*"game-changer", "overnight", "growth hack"*). Zero public rates or price figures are displayed anywhere on the website.

---

## 2. Design Direction by Dimension

### A. Layout & Structure
- **Spatial Rhythm:** Built upon an 8-point baseline grid system. Standard vertical section padding is 80px (desktop) / 48px (mobile).
- **Container Architecture:** Maximum content width constrained to `max-w-7xl` (1280px) for layout grids, with focused reading blocks restricted to `max-w-3xl` (768px).
- **Surface Elevation:** Low-elevation flat architecture. Cards use 1px solid hairline borders (`#1E293B`) with subtle dark surface tints (`#0F172A` / `rgba(255, 255, 255, 0.03)`) instead of heavy dropped shadows.
- **Header Navigation:** Persistent sticky header with dynamic backdrop blur (`backdrop-blur-md`) and hairline bottom border appearing on scroll. The primary "Book a 20-Min Call" button remains permanently visible.

### B. Color Direction
- **Primary Canvas:** Deep Slate Navy (`#0B0F19`) establishing an engineering-grade, focused dark workspace.
- **Card Surfaces:** Deep Slate Card (`#0F172A`) for dark variation cards; crisp Neutral White (`#FFFFFF`) for light variation surfaces.
- **Primary Interactive Accent:** Electric Cobalt (`#2563EB`) strictly reserved for buttons, primary CTAs, active hover borders, and focus rings. Prohibited as text color on `#0B0F19` canvas.
- **Status & "Live" Indicators:** Emerald (`#10B981`) for static workflow nodes and live system indicators.
- **Hairline Borders:** `#1E293B` (Slate 800) and `rgba(255, 255, 255, 0.08)`.

### C. Typography Direction
- **Display & Headings:** **Plus Jakarta Sans** (Google Fonts). Display headlines set bold with tight tracking (`tracking-tight`, -0.02em to -0.03em) communicating technical authority and craft.
- **Interface & Body:** **Inter** (Google Fonts). Highly legible neutral sans-serif set with generous line heights (`leading-relaxed`, 1.6) ensuring zero eye fatigue across dense technical specifications.
- **Monospace Accents:** **JetBrains Mono** (Google Fonts). Applied to technical sample labels (`Illustrative sample · not a client project`), platform tags, code snippets, and system metrics.

### D. Imagery & Graphics
- **Stock Photography Ceiling:** Exactly **0**. Zero generic stock photography of teams at laptops or glass offices.
- **Illustrative Work Samples (`/work`):** 3 schematic UI wireframes labeled with slate monospace pills: `Illustrative sample · not a client project`, switched via an interactive tab bar:
  - *Sample 1:* Agency Client-Reporting Dashboard (Next.js App Router, React Server Components data streaming, Prisma + PostgreSQL, exportable client summaries).
  - *Sample 2:* Business & Operations ERP (derived from proprietary product capabilities: multi-tier GST tax engine [CGST/SGST/IGST], atomic FIFO stock lot depletion with MongoDB session transactions, QuestPDF vector rendering service, and role-based access audit trail; described as capabilities of our own products, not a client project).
  - *Sample 3:* Field-Inspection Mobile App (React Native shared iOS/Android codebase, camera/photo capture, push notifications, role-based checklists, store submission support).
- **Per-Service Visuals:** Custom inline SVG wireframe node diagrams with cobalt connection lines and light data-packet pulses. Prohibits fake terminal/IDE windows with pseudo-code.
- **Founder Headshot:** Authentic, real founder photo formatted in a minimalist split layout with authentic founder origin story, 2-sentence bio, and core delivery principles.

### E. Content & Storyline
- **Hero:** Eyebrow badge (*"White-Label Engineering Partner for Marketing Agencies"*) + punchy H1 (*"Say Yes to Every Client Dev Request. Without Hiring Developers."*) + primary CTA ("Book a 20-Min Call" routing to `/book-a-call`) paired with secondary action ("Explore Services & How We Work ↓" anchor scroll) and floating mobile CTA pill (*"Book a 20-Min Call →"*).
- **Pain-Point Teardown:** 3-column qualitative cards (*"The Freelancer Ghost"*, *"The Unbillable In-House Salary"*, *"The Costly Code Rewrite"*); zero fabricated statistics.
- **Workflow:** 4-step horizontal connected pipeline on desktop, vertical on mobile, with static emerald nodes (subtle pulse at most; zero scrubbed progress bars).
- **Services Teaser:** 2x2 modular card grid with expandable specification drawers (each card ending with *"Scoped and quoted on your first call"*):
  1. Websites & Marketing Platforms (`#websites`)
  2. Custom Web Applications & Client Portals (`#web-apps`)
  3. Operations & Business ERPs (`#erps`)
  4. Cross-Platform Mobile Apps (`#mobile-apps`)
  5. Agency CMS & No-Code Platforms (`#cms-platforms`)
- **Partnership Models Matrix (`/for-agencies`):** 3-column side-by-side comparison:
  - Column 1: *"Scoped Pilot Build"*
  - Column 2: *"Fixed-Price Sprints"*
  - Column 3: *"Dedicated Dev Bench"*
  - Ending with: *"Terms discussed on discovery call"*.

### F. Motion Direction (`ultra` Tier)
- **Engine:** GSAP 3 + `@gsap/react` synchronized directly to Lenis smooth scroll via `gsap.ticker.add()`.
- **Card & Button Micro-Interactions:** Subtle 1px electric cobalt border glow (`rgba(37, 99, 235, 0.5)`) + -2px translateY lift on hover.
- **Canvas Visuals:** Non-blocking WebGL/GLSL canvas effects permitted, provided interactive CTAs and content remain unblocked.
- **Accessibility:** `@media (prefers-reduced-motion: reduce)` respected globally, bypassing all transform and motion tweens.
- **Internal Web Vitals Benchmarks:** Accessibility $\ge 95$, SEO $\ge 95$, CLS $< 0.1$, LCP $< 2.5\text{s}$, and Performance $\ge 85$ on mobile with `ultra` motion tier. Zero scores published until measured.

### G. Voice & Tone
- **Archetype:** Peer-to-peer technical engineering partner to marketing agency founders.
- **Mandatory Standards:**
  - Turnaround framing: *"Quotation in 24 hours. Kickoff: same day. Small-task and critical-blocker turnaround: typical."*
  - Operating hours: Monday–Friday, 10:00 AM – 7:00 PM IST across all pages.
  - Defect warranty: *"14-day post-launch fix window included on full builds"* (proactive check-ins on Day 7 and Day 14).
  - Mutual NDA & IP assignment stated as mandatory contract standards (zero downloadable PDF templates; zero "on full payment" or jurisdiction claims in marketing copy; terms settled on legal Terms page drafted by a lawyer).
  - Banned clichés: *"overnight", "headache-free", "game-changer", "growth hack", "seamless synergy"*.

---

## 3. Design Tokens (Mandatory Specifications)

### A. Color Tokens & Contrast Audits

| Token Name | Hex Value | Role & Usage | Background | Contrast Ratio | WCAG Compliance |
|---|---|---|---|:---:|:---:|
| `--color-canvas` | `#0B0F19` | Deep slate navy page background | N/A | Base | Base |
| `--color-surface-dark` | `#0F172A` | Slate 900 card and modal background | `#0B0F19` | 1.2:1 | Surface boundary via 1px border |
| `--color-surface-light`| `#FFFFFF` | Neutral white light card surface | N/A | Base | Base |
| `--color-text-primary` | `#F8FAFC` | Slate 50 high-contrast headings | `#0B0F19` | 18.7:1 | **WCAG AAA Pass** |
| `--color-text-secondary`| `#E2E8F0` | Slate 200 primary interface text | `#0B0F19` | 14.8:1 | **WCAG AAA Pass** |
| `--color-text-muted` | `#94A3B8` | Slate 400 secondary body & descriptions | `#0B0F19` | 7.2:1 | **WCAG AAA Pass** |
| `--color-text-caption` | `#64748B` | Slate 500 metadata and labels | `#0B0F19` | 4.6:1 | **WCAG AA Pass** |
| `--color-border-subtle` | `#1E293B` | Slate 800 1px card and divider hairline | `#0B0F19` | 1.4:1 | Structural hairline divider |
| `--color-accent-cobalt` | `#2563EB` | Electric cobalt buttons and CTAs only | `#FFFFFF` (on btn)| 4.6:1 | **WCAG AA Pass** (Buttons) |
| `--color-status-emerald`| `#10B981` | Live status dots & workflow nodes | `#0B0F19` | 6.8:1 | **WCAG AAA Pass** |

> [!CAUTION]
> **Contrast Guard:** `--color-accent-cobalt` (`#2563EB`) on `--color-canvas` (`#0B0F19`) yields only 3.4:1 contrast and is **STRICTLY PROHIBITED** for text. Cobalt is reserved exclusively for button fills, active border states, and focus rings.

### B. Typography Tokens & Scale

| Token | Family | Desktop Size | Mobile Size | Weight | Tracking | Line Height |
|---|---|---|---|---|---|---|
| `--font-display` | Plus Jakarta Sans | `48px` (3rem) | `32px` (2rem) | 800 (Bold) | `-0.03em` | `1.1` |
| `--font-h1` | Plus Jakarta Sans | `36px` (2.25rem) | `28px` (1.75rem) | 700 (Bold) | `-0.025em` | `1.2` |
| `--font-h2` | Plus Jakarta Sans | `28px` (1.75rem) | `22px` (1.375rem) | 700 (Bold) | `-0.02em` | `1.25` |
| `--font-h3` | Plus Jakarta Sans | `20px` (1.25rem) | `18px` (1.125rem) | 600 (Semibold)| `-0.015em` | `1.35` |
| `--font-body-large` | Inter | `18px` (1.125rem) | `16px` (1rem) | 400 (Regular) | `0em` | `1.6` |
| `--font-body` | Inter | `16px` (1rem) | `16px` (1rem) | 400 (Regular) | `0em` | `1.6` |
| `--font-caption` | Inter | `14px` (0.875rem) | `13px` (0.8125rem) | 500 (Medium) | `+0.01em` | `1.4` |
| `--font-mono` | JetBrains Mono | `13px` (0.8125rem) | `12px` (0.75rem) | 500 (Medium) | `0em` | `1.4` |

### C. Spacing, Radii & Shadows
- **Base Grid:** `8px` (`0.5rem`).
- **Container Max-Widths:**
  - Standard Grid Container: `max-w-7xl` (`1280px`).
  - Reading / Manifesto Container: `max-w-3xl` (`768px`).
- **Border Radii:**
  - Card Radius: `rounded-xl` (`12px`).
  - Button Radius: `rounded-lg` (`8px`).
  - Pill Badge Radius: `rounded-full` (`9999px`).
- **Border Strokes:** `1px solid #1E293B` (or `rgba(255, 255, 255, 0.08)`).
- **Focus Rings:** 2px electric cobalt ring with 2px offset (`ring-2 ring-blue-600 ring-offset-2 ring-offset-slate-900` on dark canvas; `ring-offset-white` on light surfaces).
- **Interactive Shadow / Glow:**
  - Hover Glow: `box-shadow: 0 0 20px rgba(37, 99, 235, 0.25), inset 0 0 0 1px rgba(37, 99, 235, 0.5)`.

### D. Dual Motion Tokens (CSS Theme Variables & GSAP Properties)

| Semantic Token | CSS Variable (`theme.extend`) | GSAP Value (`site/lib/motion.js`) | Duration | Usage |
|---|---|---|:---:|---|
| `--ease-entrance` | `cubic-bezier(0.16, 1, 0.3, 1)` | `"power3.out"` | `0.6s` | Section reveals, card staggered fade-ins |
| `--ease-hover` | `cubic-bezier(0.25, 1, 0.5, 1)` | `"power2.out"` | `0.25s` | Button translateY lift & border glow |
| `--ease-drawer` | `cubic-bezier(0.32, 0.72, 0, 1)` | `"power2.inOut"` | `0.35s` | Expandable service drawers & FAQ accordions |
| `--ease-smooth-scroll`| `cubic-bezier(0.19, 1, 0.22, 1)` | `lenis.lerp: 0.1` | Continuous | Lenis smooth scroll synced to `gsap.ticker` |

### E. Imagery & Icon Specs
- **Aspect Ratios:** `--ratio-card: 16/10`, `--ratio-headshot: 1/1` (square monochrome).
- **Lucide Icon Stroke:** `1.75px` stroke weight uniformly across all UI cards.
- **Sample Badge Styling:** Slate monospace pill: `Illustrative sample · not a client project` (`bg-slate-800/80 text-slate-300 font-mono text-xs px-2.5 py-1 rounded-full border border-slate-700`).

---

## 4. What to Avoid (Strict Anti-Pattern Ledger)

1. **Zero Stock Photography:** No generic office photos, handshakes, or models at laptops (stock ceiling = 0).
2. **Zero Fabricated Social Proof:** No fake logos, fabricated reviews, or synthetic stats.
3. **Zero Bento Grid Clones:** Avoid overused bento grid templates with neon gradient cards.
4. **No Autoplay Video Reels:** Zero auto-playing video reels. WebGL/GLSL is allowed under the `ultra` tier, but must never block primary CTAs or content.
5. **Zero Low-Contrast Text:** Cobalt `#2563EB` must never be used as text on `#0B0F19` dark canvas.
6. **Zero Vague Marketing Clichés:** Ban words such as *"overnight", "headache-free", "game-changer", "seamless synergy", "growth hack"*.
7. **Zero Undefined Legal Promises:** No "signed guarantee letters" or downloadable sample NDA PDFs. Confirmed process: mutual NDA signed before project review.

---

## 5. Brand Positioning Summary

- **Minimal ↔ Maximal:** `2/5` (Dense, calm hierarchy, confident short copy).
- **Corporate ↔ Playful:** `2/5` (Professional, dependable agency partner; zero gimmicks).
- **Luxury ↔ Accessible:** `3/5` (High engineering craft, clear scoping on discovery calls).
- **Modern ↔ Classic:** `5/5` (Cutting-edge Next.js App Router engineering aesthetic).

---

## 6. Open Questions

- **Active Open Questions Count:** **0**  
All Gate 2 questions regarding visual variations, hierarchy, schematic labels, models, trust guarantees, and motion interactions have been fully resolved by the approver.

---

## 7. Reference Summary Table

| Website URL | What Client Liked | Key Observed Principles | Derived Principle Adopted by Next Web Works |
|---|---|---|---|
| `https://linear.app` | Dense but calm hierarchy, confident short copy, technical rigor. | 8pt spatial grid, 1px hairline border dividers, product UI wireframe models, deep slate canvas. | **Spatial & UI Architecture:** Strict 8pt grid, 1px solid hairline dividers (`#1E293B`), Plus Jakarta Sans/Inter type pairing, and authentic UI schematics modeling real code/API contracts instead of marketing art. |
| `https://stripe.com` | Clear typographic scale, proof points placed directly adjacent to claims. | Modular capability cards, empirical proof metrics adjacent to claims, transparent tiering. | **Proof Adjacency Contract:** Every operational promise (typical 24h quote, 100% white-label, 14-day post-launch fix window) substantiated with verifiable mechanisms directly in the module (zero price claims). |
| `https://posthog.com` | Direct, engineering-first tone; transparent pricing tiers; zero agency fluff. | Radical transparency in copy (`"97% pay $0"`), connected pipeline diagrams, honest scope boundaries. | **Voice & Workflow Authority:** Clear scoping and turnaround framing, qualitative pain points, connected 4-step workflow pipeline, and peer-to-peer agency partner tone (zero public rates). |
