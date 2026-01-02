ROLE:
You are a senior full-stack UI/UX + frontend engineering agent building an institutional-grade website for Van Aarden Digital Assets Counsel (VDAC). This site must meet the expectations of regulators, banks, governments, and institutional investors.

The platform must present blockchain, mining, and digital assets strictly as regulated infrastructure. No speculative language. No ROI claims. No endorsements.

STACK:
- Vite + React
- React Router
- CSS Modules or structured global CSS
- Local assets only (.webp preferred, .png fallback)
- No heavy animation libraries
- Accessibility WCAG AA

=====================================================
1. BRAND & GLOBAL IDENTITY (NON-NEGOTIABLE)
=====================================================
Firm Name:
Van Aarden Digital Assets Counsel (VDAC)

Tone:
Institutional, compliance-first, calm, authoritative

Tagline (optional usage):
Security-first compliance for digital assets, mining infrastructure, and institutional governance.

Header:
- Display “VDAC” (short name)
- Full legal name accessible via aria-label or footer

Footer (all pages):
- “Van Aarden Digital Assets Counsel (VDAC)”
- Legal disclaimer:
  “VDAC is an independent legal advisory platform. Content is informational only and does not constitute legal or investment advice. No investment solicitation or return guarantees.”

=====================================================
2. GLOBAL DESIGN SYSTEM
=====================================================
Colors:
- Deep Navy #0B1C2D
- Slate / Charcoal
- White
- Muted Gold (≤30% opacity accents only)

Typography:
- Serif headings (authority)
- Sans-serif body (clarity)
- Desktop (PC) text hierarchy scaled ~3×
- Max line length: 60–72ch

Layout:
- Grid-based
- Generous whitespace
- Thin dividers
- Text-forward
- No clutter

=====================================================
3. FILE & FOLDER STRUCTURE
=====================================================
src/
  assets/
    backgrounds/
      institutional.webp
      energy.webp
      banking.webp
      agriculture.webp
      global-infrastructure.webp
    sectors/
      energy-power.webp
      banking-financial.webp
      agriculture-rural.webp
      global-infrastructure.webp
    team/
      elise-van-aarden.webp
      martin-keller.webp
      sofia-lindstrom.webp
      lukas-reinhardt.webp
  components/
    IndustrySignalsSection.tsx
    IndustryCard.tsx
    IndustryDetailPanel.tsx
    InstitutionalCapabilitiesSection.tsx
    CapabilityTile.tsx
    ReferencesDropdown.tsx
    ImageBackground.tsx
    TeamGrid.tsx
    TeamCard.tsx
  data/
    industrySignals.ts
    institutionalCapabilities.ts
    team.ts
    references.ts
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
    industry.css
    team.css

=====================================================
4. LANDING PAGE STRUCTURE
=====================================================
Route: /

Sections (top to bottom):
1. Hero (brand positioning)
2. Authority & Trust strip
3. Industry Signals (interactive grid)
4. Institutional Capabilities
5. Global Presence
6. Footer

-----------------------------------------------------
Industry Signals Section (CORE INTERACTION)
-----------------------------------------------------
Industries (exact titles + descriptors):

1) Energy & Power Infrastructure  
– Electricity grids, renewables, transmission, long-term energy assets

2) Banking & Financial Services  
– Regulated banks, capital integration, secure financial systems

3) Agriculture & Rural Infrastructure  
– Farmland, irrigation, food security, rural development systems

4) Global Infrastructure & Capital Investment  
– Data centers, transport, utilities, urban development

Interactions:
- Desktop hover: image zoom up to 3× (cropped, no layout shift)
- Desktop hover: flip card reveals summary text
- Keyboard: Enter/Space toggles flip
- Mobile: tap toggles flip or expands text
- Clicking card sets it as “active”

Active Detail Panel:
- Appears below grid
- Framed with subtle gold accent
- Fade + slide animation on change
- Contains:
  - Expanded paragraph (neutral, institutional)
  - “Read more” link to parent page
  - “Sources & References” dropdown

=====================================================
5. IMAGES (GENERATION PROMPTS)
=====================================================
Use institutional, abstract backgrounds only.

Energy & Power:
- Electricity grids, renewables, transmission infrastructure
- Source image prompt already defined

Banking:
- Secure financial architecture, bank HQs, vault motifs

Agriculture:
- Farmland, irrigation systems, rural infrastructure

Global Infrastructure:
- Data centers, transport, urban development

Rules:
- No crypto symbols
- No charts
- No neon
- Strong negative space
- Dark overlay for text readability

=====================================================
6. VERIFIED SOURCES (PER PAGE)
=====================================================
Display as “Sources & References”
Desktop: visible block
Mobile: accordion (collapsed)

Energy:
- https://www.iea.org/topics/electricity
- https://www.worldbank.org/en/topic/energy

Banking:
- https://www.bis.org/bcbs/publ/d545.htm
- https://www.ecb.europa.eu/paym/crypto-assets/html/index.en.html

Agriculture:
- https://www.fao.org/digital-agriculture/en/
- https://www.worldbank.org/en/topic/ruraldevelopment
- https://www.undp.org/digital

Global Infrastructure / Market Signals:
- https://www.weforum.org/agenda/archive/digital-infrastructure/
- https://www.brookfield.com/our-businesses/infrastructure
- https://www.blackrock.com/corporate/insights/digital-assets

Disclaimer (always shown):
“External references are informational only and do not imply endorsement.”

=====================================================
7. INDIVIDUAL PAGES
=====================================================

/institutional-value  
- Capital integration
- Governance
- Audit readiness

/energy-infrastructure  
- Mining as energy infrastructure
- Grid stability
- Long-term assets

/banking-integration  
- No custody exposure
- Prudential alignment
- AML & sanctions

/agriculture-infrastructure  
- Rural electrification
- Food security
- Development policy

/market-precedent  
Purpose:
Demonstrate institutional market signals without promotion.

Sections:
- Infrastructure Capital Trends
- Institutional Participation Signals (no endorsements)
- Digital Infrastructure Parallels
- What This Signals for Institutions

Rules:
- Use phrase “institutional market signals”
- No ROI
- No endorsements
- Neutral, descriptive tone

=====================================================
8. TEAM PAGE
=====================================================
Route: /team

Desktop:
- Full-screen layout
- Large professional headshots
- 3× text hierarchy
- Calm fade-in

Team:
- Dr. Elise M. Van Aarden – Founder & Principal Counsel
- Advisors listed with “Independent Advisor” label

=====================================================
9. ANIMATIONS & MICRO-INTERACTIONS
=====================================================
Allowed:
- Fade-in on scroll
- Slide (≤12px)
- Border glow on active
- Shadow elevation

Disallowed:
- Bounce
- Looping motion
- Parallax on mobile
- Video backgrounds

Reduced Motion:
- Disable flip/zoom
- Use expand/collapse instead

=====================================================
10. ACCESSIBILITY & UX
=====================================================
- WCAG AA contrast
- Keyboard navigation
- aria-expanded / aria-selected
- Fixed heights to avoid CLS
- Readable line length

=====================================================
11. ACCEPTANCE CRITERIA
=====================================================
✔ Platform feels credible to regulators  
✔ Banks and governments can read without concern  
✔ Blockchain framed as infrastructure  
✔ No speculative or promotional language  
✔ Images support content, never distract  
✔ Mobile and desktop experiences both polished  

FINAL INTENT:
Generate a full institutional web platform that positions blockchain, mining, and digital infrastructure as regulated, auditable, and integration-ready for global institutions.

BEGIN FULL GENERATION AND IMPLEMENTATION.
