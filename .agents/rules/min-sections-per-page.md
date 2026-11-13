---
trigger: glob
globs: "**/site/app/**/page.js"
description: Enforces minimum 5 modular section components per page route.
---

# Minimum 5 Sections Per Page Rule

## 1. Directive Invariant
Every public page Server Component (`page.js` / `page.jsx`) in Next Web Works must compose a minimum of **5 modular substantive body section components OTHER THAN Nav, Hero, CTA, FAQ, Contact Us, and Footer**.

## 2. Section Contract Verification
A component qualifies as an eligible section if and only if:
1. It opens with `// section: <id>` on line 1.
2. Its root JSX element renders `data-section="<id>"`.
3. Its line count does not exceed the 250-line ceiling.

## 3. Counting vs Non-Counting Components
- **Qualifying Body Sections (Counts towards $\ge 5$):**
  - Substantive domain sections: workflows, pain points, capabilities grids, tech stack matrices, deliverables checklists, comparison tables, principles, confidentiality protocols, and architectural breakdowns.
- **Excluded Shell Sections (Do NOT count towards $\ge 5$):**
  - Navigation header (`Nav`) and footer (`Footer`)
  - Primary hero / header sections (`HeroSection`, `*HeroSection`, `*HeaderSection`, `AboutFounderSection`)
  - CTA banners (`FinalCTABanner`, `*CTA*`)
  - FAQ sections (`FAQSection`, `*FAQ*`)
  - Contact form sections (`ContactFormSection`)
  - Utility components (`Schema`, `WhatsAppButton`, `PreviewBanner`)

## 4. Approved Exemptions
The following conversion and statutory compliance routes are strictly exempt from the 5-section minimum:
1. `site/app/book-a-call/thank-you/page.js`: Post-booking confirmation screen (must preserve high-trust focused confirmation without clutter).
2. `site/app/privacy/page.js`: Statutory legal compliance text rendered dynamically from CMS Policy model.
3. `site/app/terms/page.js`: Statutory legal terms of service rendered dynamically from CMS Policy model.

