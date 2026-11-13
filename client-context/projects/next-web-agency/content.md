# Next Web Agency — Technical Case Study & Engineering Record

**Slug:** `next-web-agency`  
**Project Archetype:** Agency Management ERP & Freelance Delivery Infrastructure  
**Timeline:** Deployed · Actively Used for Internal Client Delivery  
**Core Stack:** React 18, Vite, Node.js, Express, MongoDB, Mongoose, Tailwind CSS  
**Current Status:** Deployed for Internal Freelance Engagements · No Third-Party SaaS Adoption Claimed  

---

## 1. Project Context & Motivation

Next Web Agency was developed as an operational project delivery engine and CRM specifically built to manage Devansh's freelance software engineering contracts, international client engagements, and delivery pipelines.

### Engineering Dogfooding Rationale
Rather than relying on disjointed third-party SaaS tools with fragmented subscriptions, Next Web Agency was engineered to dogfood core ERP patterns across lead tracking, contract milestones, task delegation, and billing deliverables in a unified platform.

---

## 2. Personal Responsibilities & Engineering Ownership

* **Full Platform Implementation:** Designed and developed the platform end-to-end, integrating frontend interfaces with Express API services and MongoDB persistence.
* **ERP Architecture Extension:** Reused and adapted core ERP operational patterns (tenant scoping, voucher structures, and task tracking) from the Next Web Works ecosystem.
* **Pipeline Automation:** Automated the transition of prospective client inquiries into active projects, work orders, milestones, and final delivery documentation.

---

## 3. Core Functional Modules

In [`edu-manage-be/src/constants/Application.js`](file:///c:/code/next-web-works/edu-manage-be/src/constants/Application.js), Next Web Agency is architected across six integrated operational modules:

1. **Leads & Inquiries (`Leads`):** Captures prospective client details, scope briefs, initial budget estimations, and communication logs.
2. **Projects & Milestones (`Projects`):** Structures project scopes into deliverable stages, architecture reviews, and sprint timelines.
3. **Task Coordination (`Tasks`):** Granular engineering tasks with priority weights, status gates (`Todo`, `In-Progress`, `Review`, `Done`), and blocker flags.
4. **Team & Collaborators (`Employees`):** Tracks collaborator assignments, engineering roles, and access boundaries.
5. **Operational Documents (`Documents`):** Manages project scopes, architectural specifications, NDAs, and delivery sign-offs.
6. **Billing & Coupons (`Billing`, `Coupons`):** Generates milestone invoices and tracks payment receipts.

---

## 4. Key Architectural Decisions

### Extending the Existing ERP Foundation
Instead of building a standalone, disconnected tool, Next Web Agency leverages shared architectural infrastructure from the Next Web Works ecosystem:
* **Centralized Mongoose Data Models:** Adopts consistent audit tracking schemas (`createdAt`, `updatedAt`, `createdBy`, `business`).
* **Authenticated Route Gateways:** Uses standardized JWT bearer middleware with tenant-aware route guards.
* **Shared Component Library:** Employs consistent design tokens and component primitives built with React, Vite, and Tailwind CSS.

---

## 5. Positioning & Governance Boundaries

* **Internal Infrastructure Reality:** The application is deployed and actively serves internal freelance operations. Third-party agency customer adoption has **not** been established.
* **Portfolio Integrity:** The portfolio positions this project honestly as internal operational infrastructure and a successful dogfooding initiative, demonstrating practical full-stack ownership and reusable software architecture without exaggerating external commercial SaaS traction.

