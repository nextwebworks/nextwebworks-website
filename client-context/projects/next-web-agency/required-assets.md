# Next Web Agency — Required Visual Assets & Shot List

**Project Slug:** `next-web-agency`  
**Target Route:** `/projects/next-web-agency`  
**Design Reference:** Working Practice  
**Asset Storage Location:** `site/public/assets/projects/next-web-agency/`  

---

## 1. Asset Manifest Summary

| Asset ID | Asset Name | Asset Type | Aspect Ratio / Dimensions | Format | Theme Support | Privacy / Redaction | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `nwa-hero-cover` | Abstract Agency Operations Cover | SVG / CSS | 16:9 (1920×1080) | SVG / WebP | Dark & Light | Public | Ready (Abstract) |
| `nwa-shot-01` | Project Milestone Delivery UI | UI Screenshot | 16:10 (1920×1200) | WebP / PNG | Light (Primary) | Sanitized Data | Required |
| `nwa-shot-02` | Lead-to-Contract CRM Board | UI Screenshot | 16:10 (1920×1200) | WebP / PNG | Light (Primary) | Sanitized Data | Required |
| `nwa-shot-03` | Task & Milestone Coordination | UI Screenshot | 16:10 (1920×1200) | WebP / PNG | Light (Primary) | Sanitized Data | Required |
| `nwa-diag-01` | ERP Ecosystem Extension Diagram | Architecture Diagram| 16:9 (1600×900) | SVG / Mermaid | Dark & Light | Architectural | Ready (Code-backed) |

---

## 2. Detailed Shot Specifications

### Shot `nwa-shot-01`: Project Milestone Delivery Dashboard
* **Target Section:** `next-web-agency-s2-context`
* **Subject:** Project management overview displaying active client projects, delivery sprint phases, milestone progress meters, and upcoming delivery deadlines.
* **State & Data Requirements:**
  - Projects: Synthetic project cards representing typical freelance contracts (e.g. *"FinTech Landing Page Modernization"*, *"Logistics Fleet Admin Dashboard"*, *"E-Commerce Order Management Integration"*).
  - Metrics: Realistic timeline progress percentages (e.g., `Stage 4 of 6: 65% Completed`).
* **Redaction:** Strictly mask any real client identities or proprietary contract pricing.

---

### Shot `nwa-shot-02`: Lead-to-Contract CRM Pipeline
* **Target Section:** `next-web-agency-s4-decisions`
* **Subject:** Kanban-style or tabular CRM pipeline tracking prospective leads through stages: `Inquiry Received`, `Technical Scoping`, `Proposal Sent`, `Contract Signed`, `In Progress`.
* **Visual Focus:** Emphasize the structured metadata fields (estimated timeline, scope difficulty tag, contact channel, and status badges).

---

### Shot `nwa-shot-03`: Task & Milestone Coordination Interface
* **Target Section:** `next-web-agency-s2-context`
* **Subject:** The granular task management board within an active project, showcasing priority flags (`High`, `Medium`, `Low`), assigned collaborator avatars, and linked deliverable documents.

---

## 3. Architecture Diagrams

### Diagram `nwa-diag-01`: Reusable ERP Ecosystem Extension
* **Subject:** Visual architecture mapping how Next Web Agency extends the core Next Web Works ERP platform:
  ```
  ┌────────────────────────────────────────────────────────┐
  │         SHARED NEXT WEB WORKS CORE PLATFORM            │
  │  Mongoose ORM · JWT Auth Gateway · Centralized Routing │
  └───────────────┬────────────────────────┬───────────────┘
                  │                        │
                  ▼                        ▼
        ┌──────────────────┐     ┌──────────────────┐
        │ Next Web Business│     │ Next Web Agency  │
        │ - Invoicing      │     │ - Client CRM     │
        │ - Inventory FIFO │     │ - Project Sprints│
        │ - GST Tax Engine │     │ - Deliverables   │
        └──────────────────┘     └──────────────────┘
  ```
* **Format:** Mermaid block diagram and clean vector SVG.

---

## 4. Quality & Delivery Standards

* **Capture Quality:** High-resolution 2x desktop rendering with clean contrast.
* **Framing:** Consistent styling with Next Web Business and Campus screenshots.

