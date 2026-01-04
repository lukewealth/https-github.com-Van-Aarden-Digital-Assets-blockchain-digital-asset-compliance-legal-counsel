```md
# guide.md  
**Van Aarden Digital Assets Counsel (VDAC)**  
Institutional Web Platform – Design, UX, Pages, Files & Animations Guide

---

## 1. Purpose of This Guide

This document is the **single source of truth** for how the VDAC platform is structured, designed, animated, and maintained.  
It is written for:

- Frontend engineers
- UX/UI designers
- Product owners
- Compliance reviewers
- Institutional stakeholders

The goal is **clarity, trust, and institutional usability**, not marketing performance.

---

## 2. Core Product Principles

VDAC is built on five non-negotiable principles:

1. **Compliance-First**  
   Every page must be readable and acceptable to regulators, banks, auditors, and law-enforcement agencies.

2. **Infrastructure Framing (Not Speculation)**  
   Blockchain, mining, and digital assets are treated as regulated infrastructure, not financial products.

3. **Institutional UX**  
   Calm, text-forward, predictable layouts inspired by BigLaw firms (Morgan Lewis, Clifford Chance).

4. **Desktop Authority, Mobile Clarity**  
   Desktop experience is immersive and authoritative; mobile experience is clean and readable.

5. **Accessibility & Trust**  
   WCAG AA compliance, reduced motion support, and no dark patterns.

---

## 3. Technology Stack

- **Framework:** Vite + React
- **Routing:** React Router
- **Styling:** CSS Modules or structured global CSS
- **Assets:** Local `.webp` (primary), `.png` fallback
- **Animation:** CSS transitions + IntersectionObserver
- **No heavy animation libraries**
- **SEO:** Semantic HTML + authoritative references
- **Accessibility:** Keyboard navigation, aria attributes, reduced motion

---

## 4. Global Design System

### Colors
- Primary: Deep Navy (`#0B1C2D`)
- Secondary: Slate / Charcoal
- Accent: Muted Gold (low opacity only)
- Background: White / light slate

### Typography
- Headings: Serif (authority)
- Body: Sans-serif (clarity)
- Desktop text scale: **3× visual hierarchy**
- Line length: 60–72ch max

### Layout
- Grid-based
- Generous whitespace
- Thin dividers
- No clutter
- No card overload

---

## 5. Global File Structure

```

src/
assets/
backgrounds/
sectors/
team/
components/
IndustrySignalsSection.tsx
IndustryCard.tsx
IndustryDetailPanel.tsx
InstitutionalCapabilitiesSection.tsx
CapabilityTile.tsx
ReferencesDropdown.tsx
TeamGrid.tsx
TeamCard.tsx
data/
industrySignals.ts
institutionalCapabilities.ts
team.ts
pages/
Landing.tsx
InstitutionalValue.tsx
EnergyInfrastructure.tsx
BankingIntegration.tsx
AgricultureInfrastructure.tsx
MarketPrecedent.tsx
Team.tsx
styles/
global.css
industry-signals.css
team.css

```

---

## 6. Pages Overview

### 6.1 Landing Page (`/`)
**Purpose:** Establish authority, trust, and institutional scope.

#### Sections (Top to Bottom)
1. Hero (brand + positioning)
2. Authority & Trust strip
3. **Industry Signals Grid** (interactive)
4. Institutional Capabilities
5. Global Presence
6. Footer (legal notices)

---

### 6.2 Institutional Value (`/institutional-value`)
**Audience:** Banks, boards, compliance teams  
**Content:** Capital integration, governance, audit readiness  
**UX:** Text-forward, reference-backed, no imagery overload

---

### 6.3 Energy & Power Infrastructure (`/energy-infrastructure`)
**Audience:** Energy companies, utilities, governments  
**Content:** Grids, renewables, mining as flexible load  
**UX:** One abstract background section + text blocks

---

### 6.4 Banking & Financial Integration (`/banking-integration`)
**Audience:** Regulated banks, financial institutions  
**Content:** No custody risk, prudential alignment, AML  
**UX:** Callout disclaimers + reference dropdowns

---

### 6.5 Agriculture & Rural Infrastructure (`/agriculture-infrastructure`)
**Audience:** Governments, development institutions  
**Content:** Rural electrification, food security, infrastructure  
**UX:** Calm, policy-oriented language

---

### 6.6 Institutional Precedent & Market Signals (`/market-precedent`)
**Audience:** Institutional investors, regulators  
**Content:**  
- Infrastructure capital trends  
- Institutional market signals  
- Digital infrastructure parallels  
- Industry reflections (energy, banking, agriculture, government)

**Rules:**
- No endorsements
- No ROI
- Neutral framing only

---

### 6.7 Team (`/team`)
**Audience:** Regulators, institutions, partners  
**UX:**  
- Full-screen on desktop  
- Large professional headshots  
- 3× text scale on PC  
- No casual imagery

---

## 7. Industry Signals Section (Landing Page Core)

### Industries Displayed
1. Energy & Power Infrastructure  
2. Banking & Financial Services  
3. Agriculture & Rural Infrastructure  
4. Global Infrastructure & Capital Investment  

### Interactions
- **Image hover zoom (3×)** – desktop only
- **Flip cards** to reveal summary text
- **Active detail panel** below grid
- **Read more** links to parent pages
- **Sources & References** dropdown

### Accessibility
- Cards are buttons
- Keyboard toggles flip
- Reduced motion disables flip/zoom

---

## 8. Images & Assets

### Image Rules
- `.webp` preferred
- No crypto coins
- No charts
- No people (except team)
- Abstract architecture, infrastructure, landscapes
- Strong negative space

### Image Categories
- Sector backgrounds
- Section dividers
- Team headshots

---

## 9. Animations & Micro-Interactions

### Allowed Animations
- Fade-in on scroll
- Subtle translateY (≤12px)
- Border glow on active selection
- Shadow elevation on hover

### Disallowed
- Bounce
- Infinite motion
- Flashing
- Parallax on mobile
- Video backgrounds

### Reduced Motion
All animations disabled or minimized when:
```

@media (prefers-reduced-motion: reduce)

```

---

## 10. References & Verified Sources

Each major page includes a **Sources & References** block with:
- WEF
- BIS
- ECB
- IEA
- World Bank
- FAO
- UNDP
- OECD

### UX Rules
- Desktop: visible but subtle
- Mobile: accordion (collapsed)
- Disclaimer always present

---

## 11. Accessibility & Compliance Checklist

- WCAG AA contrast
- Keyboard navigation
- aria-expanded / aria-selected
- No hidden legal content
- Clear disclaimers
- No misleading language

---

## 12. Legal & Compliance Notices (Global)

Every page footer includes:

> “VDAC is an independent legal advisory platform. This content is informational only and does not constitute legal advice, investment advice, or investment solicitation. No returns are guaranteed.”

---

## 13. Final UX Intent

The VDAC platform must feel:

- **Trustworthy to regulators**
- **Comfortable to banks**
- **Understandable to governments**
- **Serious to institutional investors**
- **Accessible to non-technical readers**

If a compliance officer can read the site end-to-end without concern, the UX is correct.

---

## 14. Maintenance Guidance

- Do not add marketing language without legal review
- Do not add ROI metrics
- Do not add endorsements
- All new pages must follow this guide
- All new animations must respect reduced motion

---

**End of guide.md**
```
