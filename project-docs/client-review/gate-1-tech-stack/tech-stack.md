# Stage 1: Technical Stack Specification

**Project Name:** Next Web Works  
**Technical Slug:** `nextwebworks-website`  
**CMS Mode:** `cms` (NWW CMS Headless API for `blog` and `policies` only)  
**Motion Tier:** `ultra` (Subtle 120fps interactions; no heavy WebGL)  
**Stage:** Stage 1 (Gate 1 Developer Gate)  
**Approver:** Devansh  
**Last Updated:** 2026-11-11  

---

## 1. Core Architecture & Dependency Matrix

| Category | Technology | Version / Spec | Justification & Architectural Role |
|---|---|---|---|
| **Framework** | Next.js App Router | `15.x` / React 19 | React Server Components by default for optimal TTFB; `'use client'` strictly reserved for interactive islands. |
| **Language** | Modern JavaScript (`.js`, `.jsx`) | ES2024+ | Clean, fast builds with zero TypeScript compilation overhead; standard module syntax. |
| **Styling** | Tailwind CSS | `v3.4+` | 100% utility classes in JSX. Prohibits custom `.css` files, CSS modules, and agent-authored `@apply` classes. |
| **Package Manager** | `pnpm` | `9.x` | Strictly enforced workspace package manager for rapid, deterministic, space-efficient dependency management. |
| **Icons** | Lucide React | Latest | Clean, lightweight vector SVGs with tree-shaking; used as supporting details alongside bespoke inline SVGs. |
| **Motion Engine** | GSAP 3 + `@gsap/react` | `^3.12` | Configured for `ultra` motion tier: 120fps GSAP ticker synchronization, subtle border glow + small hover lift, respecting `prefers-reduced-motion`. |
| **Smooth Scroll** | Lenis | `^1.1` | Decoupled smooth scrolling synced directly to `gsap.ticker` to ensure butter-smooth page flow without input lag. |
| **Asset Engine** | Sharp | `^0.33` | Image optimization engine powering responsive WebP/AVIF generation and asset manifest validation. |
| **Headless CMS & Leads** | NWW CMS Client (`cms-kit`) | Direct Fetch / REST | Direct Server Component queries for dynamic blog (9 posts/page), on-demand ISR revalidation (`/api/revalidate`), and inbound lead persistence (`Lead` model helper via Next.js Server Action with CMS Bearer token). Dynamic CMS scoped strictly to `blog` and `policies`; services and samples stay static in code. |
| **Alert Dispatch** | Next.js Server Action | Resend Email | Server Action triggers email alert via Resend (`from: alerts@nextwebworks.in` [`[RESEND VERIFICATION PENDING]`], `reply-to` set to lead's own email for instant 1-click reply) and an automated autoresponder sent from `contact@nextwebworks.in` to the lead upon successful CMS submission. Slack eliminated completely. |
| **Booking Embed** | Cal.com | React Embed | Dedicated `/book-a-call` route with inline, lazy-loaded embed (`cal.com/nextwebworks/intro-20`); all sitewide booking CTAs route directly to this page. |
| **Client Platforms & Stacks** | Multi-Platform Web & Mobile | Verified Production | Builds in the platform the agency's client already uses: CMS & No-Code (WordPress, Webflow, Wix), Custom Web (Next.js, React.js, MERN, PHP), Mobile (React Native). |
| **Production Cloud Setups** | Multi-Cloud Architecture | Client Cloud Accounts | "We set up production on Vercel, AWS, DigitalOcean or your preferred cloud provider." Previews hosted on agency domain or neutral Vercel deployment (`X-Robots-Tag: noindex, nofollow`). |
| **Deployment Target** | Vercel | Production & Staging | Linked to project slug `nextwebworks-website` on Vercel DNS (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`). Previews protected via Vercel Authentication / password protection with `noindex`. |

---

## 2. Motion Tier Specification (`ultra`)

In accordance with Batch 02 specifications, Next Web Works is configured with the **`ultra`** motion tier with strict performance guards:

1. **Ticker Integration:** GSAP `gsap.ticker.add()` is synchronized with Lenis smooth scrolling for jitter-free 120fps animation performance.
2. **ScrollTrigger Choreography:** Coordinated section entrances, timeline scrubbed progress bars, and header backdrop blur transitions on scroll.
3. **Card Micro-Interactions:** Subtle border glow (`rgba(37, 99, 235, 0.4)`) + gentle translateY lift (-2px) on hover. Prohibits heavy 3D magnetic tilt or modal zoom to safeguard mid-range mobile devices.
4. **Accessibility:** Native CSS media query `@media (prefers-reduced-motion: reduce)` respected globally, bypassing transform tweens.
5. **Performance Guard (No Video Autoplay; Non-Blocking WebGL):** Zero autoplay video reels. WebGL/GLSL is allowed under the `ultra` tier, but must never block the Book a Call button, primary CTAs, or essential page content (maintaining LCP < 1.2s, CLS = 0).

---

## 3. NWW CMS Data Schema Contract (`Lead` & `Blog` Models)

In accordance with the NWW CMS skill, all inbound lead capture and dynamic blog articles are managed strictly through NWW CMS headless endpoints (`SERVER_URL` + `CMS_TOKEN`). Supabase is completely removed from this project. Dynamic CMS is scoped to `blog` and `policies` only; services and samples remain static in code.

### A. Inbound Lead Schema (`Lead` Model / `POST /api/lead/submit`)

Captured via Next.js Server Action (`site/app/actions/lead.js`) using the `Lead` model helper in `site/lib/cms/lead.js`:

```typescript
interface LeadPayload {
  name: string;                                         // Agency Contact Full Name (required)
  email: string;                                        // Contact Email Address (required)
  phone?: string;                                       // WhatsApp / Phone Number
  message?: string;                                     // Project inquiry or notes
  metadata: {
    agency_name: string;                                // Agency Name
    team_size: '1-5' | '6-15' | '16-30' | '30+';       // Qualifying team size
    work_type: string;                                  // Websites, Web Apps, ERPs, Mobile Apps, Retainer
    monthly_requests: '1-2' | '3-5' | '6+';             // Client request volume
    project_scope: string;                              // Brief description of client requirements or dev bottleneck (placeholder: "e.g. a Next.js client portal, 3 WordPress marketing sites, or dedicated monthly dev support")
    consent: boolean;                                   // Consent: "We'll use your details only to reply to your enquiry. Privacy Policy"
    source: 'website' | 'book-a-call' | 'contact';      // Lead attribution source
  };
}
```

### B. Blog Model Schema (`Blog` Model / `GET /api/blog/read-one/:id` & `/paginate`)

Dynamic articles are fetched directly in React Server Components (`site/app/blog/page.js` and `site/app/blog/[slug]/page.js`) with on-demand ISR revalidation. 9 posts per page before pagination triggers:

```typescript
interface BlogPost {
  _id: string;                                          // MongoDB ObjectId
  title: string;                                        // Article title (min 2 chars)
  slug: string;                                         // Unique URL slug (kebab-case)
  content: string;                                      // Full article HTML rich-text body
  summary?: string;                                     // Excerpt / summary
  cover_image?: string;                                 // Banner hero image URL (1200x630px)
  status: 'draft' | 'pending' | 'published' | 'archived'; // Must be 'published' for public display
  metadata?: {                                          // Strict-mode container for taxonomies
    category?: string;                                  // Primary category
    tags?: string[];                                    // Keyword tags (agency-growth, web-development, project-scoping, architecture, client-retention)
  };
  postedAt?: string;                                    // ISO 8601 publication date
}
```

---

## 4. Environment Variable Contract

```env
# Site Identity & Public URL
SITE_NAME="Next Web Works"
NEXT_PUBLIC_SITE_URL="https://nextwebworks.in"

# NWW CMS Integration (Blog & Lead Storage)
SERVER_URL="https://prod-server.nextwebworks.com"
CMS_TOKEN="your-nww-cms-bearer-token"
REVALIDATE_SECRET="your-revalidate-secret"

# Resend Email Alert Integrations (Email-Only; Slack Eliminated)
RESEND_API_KEY="re_..."
RESEND_FROM_EMAIL="alerts@nextwebworks.in"
RESEND_AUTORESPONDER_FROM="contact@nextwebworks.in"

# Analytics & Verification
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

# Pre-Launch Staging Guard
NEXT_PUBLIC_PREVIEW_GUARD="true"
```

---

## 5. Gate 1 Binary Sign-Off Checklist

- [x] Next.js App Router with React Server Components by default.
- [x] JavaScript (`.jsx` / `.js`) with `pnpm` locked as package manager.
- [x] Tailwind-only utility classes in JSX locked; custom CSS prohibited.
- [x] Motion tier configured as `ultra` with performance guards (subtle border glow + small lift; zero WebGL bloat).
- [x] NWW CMS headless client configured for dynamic blog publishing (with on-demand ISR) and server-side lead persistence (Supabase eliminated completely; services & samples static).
- [x] Dedicated `/book-a-call` route locked with lazy-loaded inline Cal.com embed (`cal.com/nextwebworks/intro-20`); sitewide modal CTAs eliminated.
- [x] WhatsApp secondary communication link formatted (`https://wa.me/917999934815?...`).
- [x] Server-side alert dispatches to Resend (`alerts@nextwebworks.in` with reply-to lead; autoresponder from `contact@nextwebworks.in`) locked. Slack eliminated completely.
- [x] Vercel DNS (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`) and team/password staging access control locked with `noindex`.
- [x] Technical project slug `nextwebworks-website` locked for package and Vercel naming.
