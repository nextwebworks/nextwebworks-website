# Next Web Website — Required Visual Assets & Shot List

**Project Slug:** `next-web-website`  
**Target Route:** `/projects/next-web-website`  
**Design Reference:** Working Practice  
**Asset Storage Location:** `site/public/assets/projects/next-web-website/`  

---

## 1. Asset Manifest Summary

| Asset ID | Asset Name | Asset Type | Aspect Ratio / Dimensions | Format | Theme Support | Privacy / Redaction | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `nww-hero-cover` | Abstract Headless Network Cover | Vector / CSS | 16:9 (1920×1080) | SVG / WebP | Dark & Light | Public | Ready |
| `nww-shot-01` | CMS Studio & Technical Article Editor | UI Screenshot | 16:10 (1920×1200) | WebP / PNG | Light (Primary) | Sanitized Demo Data | Required |
| `nww-shot-02` | On-Demand ISR Webhook Config UI | UI Screenshot | 16:10 (1920×1200) | WebP / PNG | Light (Primary) | Masked Secrets | Required |
| `nww-shot-03` | Multi-Tenant Website Instances Grid | UI Screenshot | 16:10 (1920×1200) | WebP / PNG | Light (Primary) | Sanitized Client Names | Required |
| `nww-shot-04` | Dynamic Page Configuration Schema | UI Split Screenshot | 16:10 (1920×1200) | WebP / PNG | Dark / Light Split | Sanitized Schema | Required |
| `nww-diag-01` | On-Demand ISR Revalidation Flow | Sequence Diagram | 16:9 (1600×900) | SVG / Mermaid | Dark & Light | Architectural | Ready (Code-backed) |
| `nww-diag-02` | 14-Module Headless Domain Matrix | Architecture Diagram| 16:9 (1600×900) | SVG / Mermaid | Dark & Light | Architectural | Ready (Code-backed) |

---

## 2. Detailed Shot Specifications

### Shot `nww-shot-01`: CMS Studio & Technical Article Editor (Flagship UI)
* **Target Section:** Technical Writing & Publishing Engine.
* **Subject:** The primary content creation workspace showing:
  - Article Title and Slug input fields (`/blog/lessons-from-building-erps-with-mern`).
  - Markdown/Rich-text editor containing code blocks with syntax highlighting and inline alerts.
  - Sidebar panel displaying: Category dropdown (`Software Architecture`), Tag selector pills (`ASP.NET Core`, `Node.js`, `MongoDB`), Author avatar, and Instant Publish toggle.

---

### Shot `nww-shot-02`: On-Demand ISR Webhook Configuration UI
* **Target Section:** Zero-Downtime Cache Invalidation & Next.js Integration.
* **Subject:** The website configuration panel showing:
  - Revalidation Webhook URL input: `https://devanshkhetwani.dev/api/revalidate`.
  - Revalidation Secret input (masked with bullet points: `••••••••••••••••`).
  - Webhook delivery test button and real-time status response badge: `Last Ping: 200 OK (Purged in 142ms)`.
* **Redaction:** Never reveal real raw secret strings or production webhook keys.

---

### Shot `nww-shot-03`: Multi-Tenant Website Instances Grid
* **Target Section:** Multi-Tenant Site Architecture.
* **Subject:** Overview panel showing registered client website instances with status badges (`Active`, `Staging`), linked domains, and quick analytics summaries.
* **Data Requirements:** Sanitized demonstration domain names (e.g. `client-one.com`, `demo-store.dev`).

---

### Shot `nww-shot-04`: Dynamic Page Configuration Schema Builder
* **Target Section:** Dynamic Page Configurations.
* **Subject:** Split-screen view showing JSON key-value configuration schemas on the left (defining hero headers, CTA links, and feature blocks) and the corresponding live preview on the right.

---

## 3. Architecture Diagrams

### Diagram `nww-diag-01`: On-Demand ISR Revalidation Flow
* **Subject:** Sequence showing Content Editor Mutation $\to$ Express DB Write $\to$ Webhook POST to Next.js `/api/revalidate` with HMAC verification $\to$ Next.js `revalidatePath()` $\to$ Instant Edge Cache Purge without CI/CD rebuilds.
* **Format:** Mermaid sequence diagram and clean SVG vector asset.

### Diagram `nww-diag-02`: 14-Module Headless Domain Architecture
* **Subject:** Comprehensive block diagram mapping the 14 headless feature domains (`article`, `case-study`, `page-config`, `contact-us`, `service`, `plan`, `job`, `event`, `gallery`, `industry`, `legal`, etc.) organized around the core `Website` tenant root.

---

## 4. Quality & Delivery Standards

* **DPR Quality:** High-resolution 2x desktop screenshots with 8px border radius.
* **Secret Hygiene:** Ensure all authorization keys and bearer headers are visually masked in all captures.

