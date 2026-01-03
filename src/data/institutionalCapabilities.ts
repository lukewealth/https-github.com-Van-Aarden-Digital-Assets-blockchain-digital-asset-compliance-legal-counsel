export type InstitutionalCapability = {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  expandedText: string;
  readMoreHref: string;
  sources?: { label: string; url: string }[];
};

export const institutionalCapabilities: InstitutionalCapability[] = [
  {
    id: 'global-regulatory',
    title: 'Global Regulatory',
    subtitle: 'Compliance and cross-border strategy for digital assets.',
    imageSrc: '/src/assets/sectors/global-regulatory.webp',
    expandedText:
      'We design regulator-ready governance for digital asset programs, aligning disclosure discipline, operational controls, and board reporting with cross-border licensing pathways. Engagements map jurisdictions, counterparties, data flows, and operational risk so supervisory dialogues stay grounded in evidence and playbooks instead of promises. Teams receive policy kits, audit trails, and escalation trees that satisfy prudential, securities, and payments regulators while preserving commercial momentum. We also coach management on regulator communications and prepare submission packs that tie narratives to controls, empowering executives to demonstrate continuous improvement, remediation options, and clear lines of accountability.',
    readMoreHref: '/institutional-value',
    sources: [
      { label: 'OECD – Blockchain & finance', url: 'https://www.oecd.org/finance/blockchain/' },
      { label: 'BIS Innovation Hub – CBDC', url: 'https://www.bis.org/about/bisih/topics/cbdc.htm' },
    ],
  },
  {
    id: 'mining-infrastructure',
    title: 'Mining Infrastructure',
    subtitle: 'Legal oversight for mining operations and hosting.',
    imageSrc: '/src/assets/sectors/mining-infrastructure.webp',
    expandedText:
      'We negotiate hosting and MaaS contracts that balance uptime commitments with curtailment rights, energy coordination, and cyber controls. Risk matrices cover electrical, physical, and operational threats with evidence packages ready for lenders, insurers, and grid operators. Our teams structure SLAs, change-control logs, telemetry reporting, and incident response playbooks so operators can scale responsibly while preserving counterparties’ visibility into fleet health and compliance posture. We also benchmark vendor obligations, site access, and environmental representations to keep documentation audit-ready and align procurement with local permitting cycles.',
    readMoreHref: '/energy-infrastructure',
    sources: [
      { label: 'IEA – Electricity', url: 'https://www.iea.org/topics/electricity' },
      { label: 'World Bank – Energy', url: 'https://www.worldbank.org/en/topic/energy' },
    ],
  },
  {
    id: 'aml-sanctions',
    title: 'AML & Sanctions',
    subtitle: 'Financial crime controls aligned to FATF and OFAC.',
    imageSrc: '/src/assets/sectors/aml-sanctions.webp',
    expandedText:
      'We craft FATF-aligned AML programs that prioritize governance, risk assessment, and evidentiary screening for digital asset operations. Teams receive procedures for onboarding, transaction monitoring, sanctions screening, and escalation workflows suited to blockchain-linked services and institutional oversight. Controls emphasize data retention, audit logging, model governance, and third-party assurance so institutions can demonstrate defensible oversight to banks, payment partners, and cross-border regulators. We also map dependencies with custodians, oracles, and liquidity providers to ensure continuous coverage and document compensating controls where infrastructure gaps exist.',
    readMoreHref: '/banking-integration',
    sources: [
      { label: 'FATF – Global Standards', url: 'https://www.fatf-gafi.org/en/home.html' },
      { label: 'OFAC – Sanctions', url: 'https://ofac.treasury.gov/' },
    ],
  },
  {
    id: 'cross-border-legal',
    title: 'Cross Border Legal',
    subtitle: 'Structuring for funds, DAOs, and international deals.',
    imageSrc: '/src/assets/sectors/cross-border-legal.webp',
    expandedText:
      'We structure funds, DAOs, and multi-jurisdictional transactions with disciplined mapping of entity roles, tax posture, and data residency. Contract suites allocate operational, IP, cybersecurity, and counterparty risk while preserving regulatory optionality and optional exit paths. Teams gain playbooks for investor disclosures, service-provider oversight, and cross-border approvals so capital can move with clarity and audit-ready documentation. We coordinate with local counsel on licensing triggers, privacy, and employment considerations, giving executives repeatable templates for governance updates and decision logs that withstand diligence.',
    readMoreHref: '/market-precedent',
    sources: [
      { label: 'World Economic Forum – Blockchain', url: 'https://www.weforum.org/topics/blockchain/' },
      { label: 'ECB – Crypto-assets', url: 'https://www.ecb.europa.eu/paym/crypto-assets/html/index.en.html' },
    ],
  },
];
