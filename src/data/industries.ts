import { references } from './references';
import energyBg from '@/assets/backgrounds/energy.webp';
import bankingBg from '@/assets/backgrounds/banking.webp';
import agricultureBg from '@/assets/backgrounds/agriculture.webp';
import globalInfraBg from '@/assets/backgrounds/global-infrastructure.webp';
import institutionalBg from '@/assets/backgrounds/institutional.webp';

export type Industry = {
  slug: string;
  badge: string;
  title: string;
  descriptor: string;
  intro: string;
  riskCards: { title: string; desc: string }[];
  pressures: { title: string; desc: string }[];
  mandates: { label: string; href: string }[];
  background?: string;
  referencesKey: keyof typeof references;
};

export const industries: Industry[] = [
  {
    slug: "energy-power-infrastructure",
    badge: "Energy & Power Infrastructure",
    title: "Grid Integration & Compute Load Governance",
    descriptor: "Electricity grids, renewables, transmission, long-term energy assets",
    intro: "Legally defensible frameworks for controllable compute tied to grids, PPAs, and ESG-aligned disclosures. Multi-agency coordination with utilities, regulators, and operators.",
    riskCards: [
      { title: "Immutability vs. Erasure", desc: "Data retention policies mapped to power system regulatory obligations and privacy considerations." },
      { title: "Chain of Custody", desc: "Telemetry, metering, and audit trails for dispatch, curtailment, and settlement events." },
      { title: "Jurisdiction Conflicts", desc: "Cross-border power and compute arrangements reconciled with local permitting and export rules." },
    ],
    pressures: [
      { title: "Curtailment & Grid Codes", desc: "Alignment with ISO/RTO requirements and rapid shutdown expectations for grid stability." },
      { title: "ESG & Disclosure", desc: "Evidence-backed emissions, sourcing, and community impact disclosures suitable for regulators and boards." },
    ],
    mandates: [
      { label: "Consensus Mechanism Audits", href: "/energy-infrastructure" },
      { label: "Public-Private Partnership MSAs", href: "/energy-infrastructure" },
      { label: "Cross-Jurisdictional Defense", href: "/energy-infrastructure" },
    ],
    background: energyBg,
    referencesKey: "energy",
  },
  {
    slug: "banking-financial-services",
    badge: "Banking & Financial Services",
    title: "Prudential Alignment & AML Controls",
    descriptor: "Regulated banks, capital integration, secure financial systems",
    intro: "Non-custodial infrastructure exposure with prudential, AML/CFT, and operational controls. Prepared for supervisory dialogue and audit readiness.",
    riskCards: [
      { title: "Immutability vs. Erasure", desc: "Data handling for consumer protections and supervisory requests." },
      { title: "Chain of Custody", desc: "Control evidence for operational events and transaction monitoring." },
    ],
    pressures: [
      { title: "Custody Avoidance", desc: "Segregation of duties and service-based revenue characterization." },
      { title: "Financial Crime Controls", desc: "Screening, monitoring, and escalation workflows aligned to FATF and OFAC." },
    ],
    mandates: [
      { label: "Consensus Mechanism Audits", href: "/banking-integration" },
      { label: "Public-Private Partnership MSAs", href: "/banking-integration" },
      { label: "Cross-Jurisdictional Defense", href: "/banking-integration" },
    ],
    background: bankingBg,
    referencesKey: "banking",
  },
  {
    slug: "agriculture-rural-infrastructure",
    badge: "Agriculture & Rural Infrastructure",
    title: "Rural Electrification & Development Governance",
    descriptor: "Farmland, irrigation, food security, rural development systems",
    intro: "Controllable compute paired with agricultural infrastructure and rural development mandates; procurement and community safeguards foregrounded.",
    riskCards: [
      { title: "Chain of Custody", desc: "Metering, community priority, and procurement audit trails." },
      { title: "Jurisdiction Conflicts", desc: "Alignment with national development programs and donor requirements." },
    ],
    pressures: [
      { title: "Service Priority", desc: "Curtailment rights protecting primary agricultural and public loads." },
      { title: "Policy & Procurement", desc: "Compliance with public finance, grant conditions, and oversight reporting." },
    ],
    mandates: [
      { label: "Consensus Mechanism Audits", href: "/agriculture-infrastructure" },
      { label: "Public-Private Partnership MSAs", href: "/agriculture-infrastructure" },
      { label: "Cross-Jurisdictional Defense", href: "/agriculture-infrastructure" },
    ],
    background: agricultureBg,
    referencesKey: "agriculture",
  },
  {
    slug: "global-infrastructure-investment",
    badge: "Global Infrastructure & Capital Investment",
    title: "Infrastructure-Style Governance & Market Signals",
    descriptor: "Data centers, transport, utilities, and urban development parallels",
    intro: "Institutional market signals focus on availability, resiliency, and compliance-by-design. Contracts map risk allocation across jurisdictions and vendors.",
    riskCards: [
      { title: "Immutability vs. Erasure", desc: "Data localization and erasure requests balanced with audit obligations." },
      { title: "Jurisdiction Conflicts", desc: "Cross-border data flows and regulatory expectations reconciled contractually." },
    ],
    pressures: [
      { title: "Operational Resilience", desc: "SLAs, incident response, and change control mirroring established infrastructure norms." },
      { title: "Regulatory Posture", desc: "Licensing, zoning, and disclosures suited to prudential and infrastructure regulators." },
    ],
    mandates: [
      { label: "Consensus Mechanism Audits", href: "/market-precedent" },
      { label: "Public-Private Partnership MSAs", href: "/market-precedent" },
      { label: "Cross-Jurisdictional Defense", href: "/market-precedent" },
    ],
    background: globalInfraBg,
    referencesKey: "market",
  },
];
