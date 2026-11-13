# Sitewide Conversion Architecture & CTA Specification

**Project:** Next Web Works (`nextwebworks-website`)  
**Status:** Staged Client Directive (Binding Architecture)  
**Approver:** Devansh  
**Last Updated:** 2026-11-11  

---

## 1. Executive Objective

Increase qualified **Book a Call** and contact submissions from marketing agency owners and heads of delivery without cluttering page visual hierarchy or breaching the approved design system.

---

## 2. Standard Page-Bottom Section Stack

Every public route follows the exact structural stack defined below. Where a component is marked for inclusion, it appears in this **strict top-to-bottom sequence**:

```
[ Page Main Content ]
          ↓
[ FAQ Accordion Section ]
          ↓
[ Final CTA Banner ]
          ↓
[ Embedded Contact Form ]
          ↓
[ Global Footer with Newsletter ]
```

### Component Specifications

1. **FAQ Section (`FAQSection`):**
   - Renders collapsible, accessible accordions with multi-item expansion enabled.
   - Reuses approved FAQs from `/for-agencies` and `/services`.
   - Never invent synthetic FAQ copy; use `[PLACEHOLDER]` where answers are pending.
2. **Final CTA Banner (`FinalCTABanner`):**
   - High-contrast card with electric cobalt accent styling.
   - Single primary button: `"Book a 20-Min Call"`, routing to `/book-a-call`.
   - One short supporting line: *"Direct engineering conversation with Devansh. No sales pitch, no obligation."*
   - Strictly zero price figures, hourly rates, or commercial percentages.
3. **Embedded Contact Form (`BottomContactSection`):**
   - Lead-in headline: *"Prefer to write? Send us your brief."*
   - Subtitle: *"Tell us about your client's requirements, timeline, or current bottlenecks. Devansh replies within 24 hours."*
   - Reuses the approved 5-field qualifying form:
     1. `agency_name` (Text, required)
     2. `team_size` (Select: `1-5`, `6-15`, `16-30`, `30+`)
     3. `work_type` (Select: `Websites`, `Web Apps`, `ERPs`, `Mobile Apps`, `Retainer`, `CMS / WordPress / Webflow`)
     4. `monthly_requests` (Select: `1-2`, `3-5`, `6+`)
     5. `project_scope` (Textarea, placeholder: *"e.g. a Next.js client portal, 3 WordPress marketing sites, or dedicated monthly dev support"*)
   - Anti-spam honeypot: hidden `company_url` input.
   - Consent line: *"We'll use your details only to reply to your enquiry. Privacy Policy"* (linked to `/privacy`).
   - Accessible error styling: `border-red-500` hairline + `bg-red-500/5` tint + icon and text indicator for color-blind accessibility.
   - Trust badge: *"NDA signed before brief review · Quotation in 24 hours · Same-day kickoff"*.
4. **Global Footer:**
   - 4-column navigation + Indore public business address + Copyright + Newsletter Signup + WhatsApp link.

---

### Route Implementation Mapping

| Route | Page Name | FAQ Section | Final CTA Banner | Contact Form | Footer | Notes |
|:---|:---|:---:|:---:|:---:|:---:|:---|
| `/` | **Home** | Yes (Short: 4–5 core questions) | Yes | Yes | Yes | Complete bottom stack |
| `/services` | **Services** | Yes (7 core questions) | Yes | Yes | Yes | Complete bottom stack |
| `/for-agencies` | **For Agencies** | Yes (7 core questions) | Yes | Yes | Yes | Complete bottom stack |
| `/work` | **Work** | No | Yes | Yes | Yes | CTA Banner + Contact Form |
| `/about` | **About** | No | Yes | Yes | Yes | CTA Banner + Contact Form |
| `/blog` | **Blog Index** | No | Yes | No | Yes | Editorial focus: CTA Banner + Footer only |
| `/blog/[slug]` | **Blog Article** | No | Yes | No | Yes | Mid-article callout + author card + CTA banner + Footer |
| `/book-a-call` | **Book a Call** | No | No | No | Yes | **Conversion Endpoint:** Footer only (no duplicate banner/form) |
| `/contact` | **Contact** | No | No | Dedicated | Yes | **Conversion Endpoint:** Footer only (no duplicate banner/form) |
| `/book-a-call/thank-you` | **Confirmation** | No | No | No | Yes | Footer only (calendar checklist + WhatsApp link) |
| `/privacy` | **Privacy Policy** | No | No | No | Yes | Legal document: Footer only |
| `/terms` | **Terms of Service** | No | No | No | Yes | Legal document: Footer only |
| `/404` | **Not Found** | No | No | No | Yes | Short static 404 layout unchanged |

---

## 3. Sitewide Additional CTA Placements

To maintain visual discipline without stacking primary buttons, exactly **one primary CTA per viewport-sized section** is enforced, varying microcopy contextually:

1. **Header (Persistent Sticky Navigation):**
   - Primary Button: `"Book a 20-Min Call"` -> `/book-a-call` (always visible desktop/mobile).
2. **Homepage Hero:**
   - Eyebrow: *"White-Label Engineering Partner for Marketing Agencies"*
   - Primary Button: `"Book a 20-Min Call"` -> `/book-a-call`
   - Secondary Action: `"Explore Services & How We Work ↓"` -> `#services` (smooth scroll)
3. **After Pain-Point Cards:**
   - Action Button / Pill: `"Tell us what your clients keep asking for"` -> `/book-a-call`
4. **After 4-Step Workflow Pipeline:**
   - Action Button / Pill: `"Start with a scoped pilot"` -> `/book-a-call`
5. **Each Service Specification Drawer (`/services`):**
   - Drawer Footer Action: `"Discuss this build"` -> `/book-a-call`
6. **Each Work Sample Card (`/work`):**
   - Card Action: `"Discuss a build like this"` -> `/book-a-call`
7. **`/for-agencies` Partnership Matrix (3 Columns):**
   - Column 1 (Scoped Pilot Build): Action link *"Test our code with a pilot →"* -> `/book-a-call`
   - Column 2 (Fixed-Price Sprints): Action link *"Quote your client's project →"* -> `/book-a-call`
   - Column 3 (Dedicated Dev Bench): Action link *"Reserve dedicated bench hours →"* -> `/book-a-call`
8. **`/about` (After Engineering Standards):**
   - Action Button: `"Talk to the founder"` -> `/book-a-call`
9. **Blog Post Bodies (`/blog/[slug]`):**
   - Mid-Article Callout Box: Contextual non-pricing box linking to `/book-a-call`.
   - Bottom Author Card: Devansh founder bio card with direct intro link.
10. **Mobile Persistent Floating Pill (<768px):**
    - Floating pill: `"Book a 20-Min Call →"` -> `/book-a-call` (fades in after hero scroll; strictly hidden on `/book-a-call`, `/contact`, `/book-a-call/thank-you`).
11. **Footer:**
    - Secondary Link: `"Book a 20-Min Call"` -> `/book-a-call`
    - Direct Link: WhatsApp quick chat with prefilled message.

---

## 4. Footer Newsletter Signup

Embedded directly within the global website footer across all pages.

### Copy & Content Contract
- **Heading:** *"The White-Label Engineering Digest"*
- **One-Line Description:** *"Practical runbooks for agency founders on scoping fixed-price web apps, managing dev client expectations, and scaling without payroll. At most 2 articles a month."*
- **Field:** Email input (`type="email"`, `placeholder="founder@agency.com"`, `required`).
- **Button:** `"Subscribe"` (Electric cobalt fill).
- **Consent Notice:** *"We'll email you new articles. Unsubscribe any time. [Privacy Policy](/privacy)"*.
- **Anti-Spam Honeypot:** Hidden `company_url` field.

### NWW CMS Storage Architecture
In accordance with the NWW CMS reference specifications (`references/cms/lead.md`), there is no dedicated `/api/newsletter` collection. Subscribers are captured via the standard CRM **`Lead`** endpoint (`POST /api/lead/create-one` via Server Action `submitNewsletterSubscription`):

```javascript
await Lead.submit({
  name: 'Newsletter Subscriber',
  email: typedEmail,
  message: 'Footer newsletter subscription',
  metadata: {
    type: 'newsletter',
    source: 'footer-newsletter',
    consent: true,
    subscribedAt: new Date().toISOString(),
  },
});
```

### Confirmation Email via Resend
- Triggered server-side upon successful CMS submission.
- Sent from `contact@nextwebworks.in`.
- Subject: `[Next Web Works] Confirming your newsletter subscription`
- Includes an explicit **1-click unsubscribe link** in the footer of every email.
- Form UI States: Inline touch validation, success confirmation crossfade, error fallback preserving typed email, and server-side rate-limiting.

---

## 5. Floating WhatsApp Button & URL Builder

A persistent floating button fixed at the bottom-right corner of every public page, accompanied by direct WhatsApp links in the footer and on `/contact`.

### Target Number
`https://wa.me/917999934815` (Country code 91, digits only).

### Prefilled Message Schema
Generated dynamically upon user click from the client's current page context:

```text
Hi, I run an agency and want to discuss white-label development.

Page: <current page title>
Link: <current page URL, without query strings except utm_ parameters>
Source: <utm_source if present, otherwise document.referrer domain, otherwise "direct">
Via: <floating button / footer / contact page>
```

### Privacy & Technical Rules
1. **Strict Context Boundaries:** The message contains **strictly** the four lines above. Zero device models, IP addresses, geolocation, scroll depth, or behavioral telemetry. The visitor can review and edit before sending.
2. **Query String Sanitization:** All non-UTM query strings (e.g. session IDs, tokens, tracking parameters) are strictly stripped from the `Link` attribute; only valid `utm_*` parameters are preserved.
3. **Missing Metadata Fallback:** If `document.title` is missing or blank (e.g. on `/404`), use the clean URL pathname (e.g. `/404`). If `utm_source` and `document.referrer` are unavailable, set `Source: direct`.
4. **Window Target:** Opens in a new tab (`target="_blank"`, `rel="noopener noreferrer"`).
5. **Accessibility:** Icon-only on mobile viewports with explicit `aria-label="Chat with Next Web Works on WhatsApp"` and high-contrast 2px cobalt focus ring (`ring-2 ring-blue-600 ring-offset-2 ring-offset-slate-900`).

---

## 6. Responsive Spacing & Non-Overlap Layout Guard

To ensure that multiple floating elements never collide or overlap on mobile devices (<768px):

```
+---------------------------------------------------------+
|                                                         |
|                       PAGE VIEWPORT                     |
|                                                         |
|                                                         |
|                                   [ WhatsApp Button ]   |  <- bottom-20 right-4 (z-40)
|                                        (48x48px)        |     16px clearance
|                                                         |
|         [ Mobile Floating CTA: Book a 20-Min Call → ]   |  <- bottom-4 centered (z-30)
+---------------------------------------------------------+
```

1. **Desktop ($\ge 768$px):**
   - WhatsApp Button floats at `bottom-6 right-6` (`z-40`, 48x48px circle or pill with subtle hover label).
   - Mobile floating CTA pill is hidden (`md:hidden`).
2. **Mobile (<768px):**
   - Floating CTA Pill (*"Book a 20-Min Call →"*) is pinned centered at `bottom-4` (`z-30`).
   - Floating WhatsApp Button is elevated safely to `bottom-20 right-4` (`z-40`, 48x48px circle, $\ge 44$px touch target).
   - This provides **16px of vertical clearance** between the controls, eliminating overlapping touch targets and mis-taps.
   - Both controls automatically hide when scrolling into form entry areas or legal pages.
3. **Motion:** Subtle fade-in complying with `ultra` motion tier; fully bypassed when `@media (prefers-reduced-motion: reduce)` is active.

