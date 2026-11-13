# Batch 08 Answers: Conversion Architecture, Sitewide CTAs & WhatsApp System

- **Standard Page-Bottom Section Stack:**
  - Order: `FAQ Accordion -> Final CTA Banner -> Embedded Contact Form -> Global Footer with Newsletter`
  - Final CTA Banner: High-contrast card with single primary button *"Book a 20-Min Call"* routing to `/book-a-call`, one supporting line (*"Direct engineering conversation with Devansh. No sales pitch, no obligation"*), zero prices.
  - Contact Form Section: Headline *"Prefer to write? Send us your brief."*, 5 qualifying fields, honeypot, consent line with `/privacy` link, and accessible error styling.
  - Page Map:
    - Home: FAQ (short: 4–5 questions) -> Final CTA Banner -> Contact Form -> Footer
    - `/services`: FAQ (7 core questions) -> Final CTA Banner -> Contact Form -> Footer
    - `/for-agencies`: FAQ (7 core questions) -> Final CTA Banner -> Contact Form -> Footer
    - `/work`: Final CTA Banner -> Contact Form -> Footer (no FAQ)
    - `/about`: Final CTA Banner -> Contact Form -> Footer (no FAQ)
    - `/blog` & `/blog/[slug]`: Mid-article callout + author card -> Final CTA Banner -> Footer (no FAQ, no full form)
    - `/book-a-call` & `/contact`: Footer only (conversion endpoints; no duplicate banner or form)
    - `/book-a-call/thank-you`: Footer only (onboarding checklist + calendar buttons + WhatsApp link)
    - `/privacy` & `/terms`: Footer only
    - `/404`: Short static layout unchanged
- **Additional Sitewide CTA Placements:**
  - Header: Persistent *"Book a 20-Min Call"* button
  - Hero: Primary *"Book a 20-Min Call"* + secondary *"Explore Services & How We Work ↓"*
  - After pain points: *"Tell us what your clients keep asking for"* -> `/book-a-call`
  - After 4-step workflow: *"Start with a scoped pilot"* -> `/book-a-call`
  - Each service spec drawer: *"Discuss this build"* -> `/book-a-call`
  - Each `/work` sample card: *"Discuss a build like this"* -> `/book-a-call`
  - `/for-agencies` partnership matrix: Action link per column (*"Test our code with a pilot →"*, *"Quote your client's project →"*, *"Reserve dedicated bench hours →"*)
  - `/about` after engineering standards: *"Talk to the founder"* -> `/book-a-call`
  - Blog articles: Mid-article callout box + bottom author card
  - Mobile: Floating bottom pill *"Book a 20-Min Call →"* appearing after hero scroll
  - Footer: *"Book a 20-Min Call"* link + WhatsApp direct link
- **Footer Newsletter Signup:**
  - Email field + button *"Subscribe"*
  - One-line description: *"The white-label engineering digest. At most 2 articles a month on agency dev scoping and delivery."*
  - Consent notice: *"We'll email you new articles. Unsubscribe any time. Privacy Policy"* (linked to `/privacy`)
  - Storage: Captured via NWW CMS `Lead` model (`metadata.type = 'newsletter'`, `metadata.source = 'footer-newsletter'`)
  - Autoresponder: Resend confirmation email with an explicit 1-click unsubscribe link in every email
- **Floating WhatsApp Button & Prefilled Message:**
  - Pinned at bottom-right of every public page + links in footer and on `/contact`
  - URL: `https://wa.me/917999934815`
  - Dynamically generated message format:
    ```text
    Hi, I run an agency and want to discuss white-label development.

    Page: <current page title>
    Link: <current page URL, without query strings except utm_ parameters>
    Source: <utm_source if present, otherwise document.referrer domain, otherwise "direct">
    Via: <floating button / footer / contact page>
    ```
  - Mobile safe layout: Floating CTA pill pinned at `bottom-4` centered; WhatsApp button elevated to `bottom-20 right-4` (`z-40`, 48x48px circle, $\ge 44$px touch target, 16px vertical clearance) to prevent overlapping tap targets.

