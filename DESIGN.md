# EduGuide AI Scholarship Platform - Design Documentation

## Project Overview
This document outlines the design specifications, missing elements, and implementation plan for the **EduGuide AI Scholarship Platform**. The design is based on the Stitch project (ID: `17012609546953433441`). 

The aesthetic blends **Modern Corporate Clarity** with **Refined Analytical Precision**, utilizing high-contrast text hierarchies, explainable AI tags, and structured components.

---

## Existing Screens & Verified Design Specifications

The following screens were successfully inspected using the Stitch MCP tools:

### 1. Scholarship Discovery
- **Screen ID:** `c9352e332a1c4b24b08c644a4055154d`
- **Dimensions:** 2560 x 4596
- **Device Type:** DESKTOP
- **Available Assets:** Screenshot URL, HTML Code URL

### 2. EduGuide AI - Landing Page
- **Screen ID:** `3b1a01d612484ec88e2330f35dad50d7`
- **Dimensions:** 2560 x 7164
- **Device Type:** DESKTOP
- **Available Assets:** Screenshot URL, HTML Code URL

### 3. Scholarship Detail - Reliance Foundation UG
- **Screen ID:** `e5c5c56fe9a4414a80e3516044fdff4a`
- **Dimensions:** 2560 x 4792
- **Device Type:** DESKTOP
- **Available Assets:** Screenshot URL, HTML Code URL

### 4. Student Dashboard
- **Screen ID:** `ff96cc6f36c1425486778a4f898e9ec6`
- **Dimensions:** 2560 x 4540
- **Device Type:** DESKTOP
- **Available Assets:** Screenshot URL, HTML Code URL

> **Limitations of Stitch MCP Tools:**
> The available `get_screen` tools return the screen's metadata (dimensions, title) and raw download URLs for the generated HTML and screenshot. They **do not** natively provide a structured JSON component hierarchy, interactive state definitions, or explicit screen-to-screen navigation flows. All layout and component hierarchy must be inferred by downloading and parsing the provided raw HTML code.

---

## Shared Design Tokens & Reusable Components (Verified)

Extracted from the Stitch Project's Design System (`designMd`):

### Colors
- **Brand Primary:** Royal Blue (`#2563EB`) - Core CTAs, active flows. Hover: `#1D4ED8`
- **Deep Structure:** Deep Slate Navy (`#0F172A`) - Sidebar, high-emphasis headings
- **AI Intelligence & Match:** Restrained Teal (`#0D9488`), tint `#14B8A6`, surface `#CCFBF1`
- **Eligibility (Success):** Emerald (`#059669`), background tint `#ECFDF5`
- **Urgency/Deadline (Warning):** Amber/Warm Ochre (`#D97706`), background tint `#FFFBEB`
- **Canvas / Surface:** Alabaster Slate (`#F8FAFC`) / Crisp Pure White (`#FFFFFF`)

### Typography
- **Global Font:** Plus Jakarta Sans
- **Headline XL:** 36px, `700` weight, 44px line-height
- **Headline LG:** 28px, `700` weight, 36px line-height
- **Body Rhythm:** Generous line-height multiples (1.45 - 1.5)

### Spacing & Layout
- **Layout Grid:** 8pt layout grid, 12-column responsive layout (Desktop), 4-column (Mobile)
- **Gutter:** 1.5rem (24px) desktop, 1rem (16px) mobile
- **Card Padding:** `space-lg` (24px) desktop, `space-md` (16px) mobile

### Radius & Elevation
- **Primary Components (Buttons, Inputs):** `0.5rem` (8px)
- **Scholarship Cards:** `1rem` (16px)
- **Modals:** `1.5rem` (24px)
- **Badges:** `9999px` (Pill shapes)
- **Shadows:** No murky shadows. Uses Tonal Layering + Subtle Micro-Shadows + 1px borders.

### Components
- **Buttons:** Solid Primary, Outline Secondary, and AI Match Action (Teal).
- **Scholarship Cards:** 4 tiers: Header Row (logo + title), Value & Match Bar, AI Reasoning Box (`#F0FDFA` surface), Footer (Deadline + Apply CTA).

---

## Missing Screens (Identified)

The following required screens are **not present** in the Stitch designs and will need to be created:
1. **Student profile and eligibility form**
2. **AI agent workspace**
3. **Application tracker**
4. **Deadline management**

---

## Implementation Recommendations

### Proposed Route Map
- `/` - EduGuide AI - Landing Page
- `/dashboard` - Student Dashboard
- `/discovery` - Scholarship Discovery
- `/scholarships/[id]` - Scholarship Detail
- `/profile` - Student profile & eligibility form (To be built)
- `/ai-workspace` - AI agent workspace (To be built)
- `/tracker` - Application tracker (To be built)
- `/deadlines` - Deadline management (To be built)

### Frontend-to-Backend Integration Considerations
- **AI Matching Integration:** Requires API endpoints to calculate and return AI Match percentages and reasoning (e.g., "Matched because: STEM Undergraduate").
- **State Management:** Dashboard and Tracker will require global state (e.g., Redux, Zustand, or React Context) to persist bookmarked scholarships and application statuses.
- **Dynamic Routing:** Scholarship detail pages must be dynamically generated based on a CMS or database.

### Phased Implementation Plan
1. **Phase 3: Scaffold Application:** Initialize Next.js, set up Tailwind CSS, and configure design tokens (colors, typography, spacing).
2. **Phase 4: Component Library:** Build reusable UI components (Buttons, Cards, Badges, Search Bars) based on the Design System.
3. **Phase 5: Implement Existing Screens:** Translate the 4 verified Stitch screens into responsive Next.js pages using the generated HTML as a reference.
4. **Phase 6: Build Missing Screens:** Design and implement the Profile, AI Workspace, Tracker, and Deadline management pages.
5. **Phase 7: Backend Integration:** Connect the frontend UI to backend APIs and AI logic.
