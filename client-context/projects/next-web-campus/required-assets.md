# Next Web Campus — Required Visual Assets & Shot List

**Project Slug:** `next-web-campus`  
**Target Route:** `/projects/next-web-campus`  
**Design Reference:** Working Practice  
**Asset Storage Location:** `site/public/assets/projects/next-web-campus/`  

---

## 1. Asset Manifest Summary

| Asset ID | Asset Name | Asset Type | Aspect Ratio / Dimensions | Format | Theme Support | Privacy / Redaction | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `nwc-hero-cover` | Abstract Campus Architecture | SVG / CSS | 16:9 (1920×1080) | SVG / WebP | Dark & Light | Public | Ready (Abstract) |
| `nwc-shot-01` | Institutional Administration UI | UI Screenshot | 16:10 (1920×1200) | WebP / PNG | Light (Primary) | Sanitized Demo Data | Required |
| `nwc-shot-02` | RBAC Role & Permission Matrix | UI Screenshot | 16:10 (1920×1200) | WebP / PNG | Light (Primary) | Sanitized Demo Data | Required |
| `nwc-shot-03` | Attendance & Timetable View | UI Screenshot | 16:10 (1920×1200) | WebP / PNG | Light (Primary) | Sanitized Demo Data | Required |
| `nwc-shot-04` | S3 Document Upload Dialogue | UI Screenshot | 16:10 (1920×1200) | WebP / PNG | Light (Primary) | Sanitized Demo Data | Required |
| `nwc-diag-01` | 5-Role RBAC Enforcement Gate | Architecture Diagram| 16:9 (1600×900) | SVG / Mermaid | Dark & Light | Architectural | Ready (Code-backed) |
| `nwc-diag-02` | Pre-Signed S3 Direct Upload Flow | Sequence Diagram | 16:9 (1600×900) | SVG / Mermaid | Dark & Light | Architectural | Ready (Code-backed) |

---

## 2. Detailed Shot Specifications

### Shot `nwc-shot-01`: Institutional Administration Dashboard
* **Target Section:** `next-web-campus-s2-context`
* **Subject:** The primary administrative control panel showing active academic year (`2025–2026`), multi-branch institution switcher, enrolled student summary cards, and quick action bars.
* **State & Data Requirements:**
  - Institution Name: Synthetic demonstration name (e.g. *"Greenwood Institute of Technology"*).
  - Metrics: Synthetic development figures (e.g., *"Departments: 6"*, *"Academic Batches: 12"*, *"Active Courses: 24"*).
  - Clear developmental watermark or label: *"Development Preview — Zero Production Institutions Claimed"*.

---

### Shot `nwc-shot-02`: RBAC Role & Permission Matrix (Flagship Screenshot)
* **Target Section:** `next-web-campus-s4-decisions` (RBAC Architecture)
* **Subject:** The fine-grained role permissions management interface showing role selection (`Institute Admin`, `Teacher`, `Student`, `Employee`) and granular action toggles.
* **Visual Focus:**
  - Modules listed on the left axis: `Students`, `Attendance`, `Fee Structure`, `Exams`, `Reports`, `Assets`.
  - Operations matrix columns with status indicators: `Create`, `Read`, `Update`, `Delete`, `Approve`, `Export`.
  - Highlights the distinction between coarse-grained role access and sub-user operational permissions.

---

### Shot `nwc-shot-03`: Academic Timetable & Attendance Roll-Call
* **Target Section:** `next-web-campus-s2-context` (Academic Workflows)
* **Subject:** Daily class attendance roster interface showing student names, roll numbers, status toggle pills (`Present`, `Absent`, `Late`, `Excused`), and class summary totals.
* **Data Requirements:** Sanitized synthetic student roster (e.g., Roll numbers `IT-2025-001` through `015` with fictitious names).

---

### Shot `nwc-shot-04`: S3 User-Scoped Document Upload Dialogue
* **Target Section:** `next-web-campus-s4-decisions` (Cloud Asset Architecture)
* **Subject:** Modal dialogue for attaching student certificates and verified documents, showing file dropzone, MIME validation badge (`PDF, JPEG < 5MB`), and upload progress bar.
* **Technical Focus:** Visual cue showing that file payload streams directly to S3 via pre-signed authorization rather than routing through the backend server.

---

## 3. Architecture Diagrams

### Diagram `nwc-diag-01`: 5-Role RBAC Runtime Checkpoint
* **Sequence:**
  $$\text{Incoming Request} \longrightarrow \text{SuperAdmin Bypass?} \overset{\text{No}}{\longrightarrow} \text{User Type Allowed?} \overset{\text{Yes}}{\longrightarrow} \text{Fine-Grained Permission Check} \longrightarrow \text{Next()}$$
* **Format:** Mermaid flowchart and clean SVG vector asset.

### Diagram `nwc-diag-02`: Pre-Signed S3 Direct Upload Flow
* **Sequence:**
  1. React UI requests upload ticket: `POST /api/assets/pre-signed-url` with filename and category.
  2. Express verifies session, formats S3 key with prefix: `institutes/{id}/users/{id}/...`, and signs AWS S3 URL.
  3. React UI executes `PUT <pre-signed-url>` with raw file binary directly to AWS S3.
  4. React UI notifies Express with final S3 object key for metadata persistence.

---

## 4. Quality & Delivery Standards

* **Aspect Ratio:** 16:10 widescreen desktop captures with 8px rounded corners and subtle border containment.
* **Data Integrity:** Strict usage of synthetic academic datasets; zero depiction of real students or actual schools.

