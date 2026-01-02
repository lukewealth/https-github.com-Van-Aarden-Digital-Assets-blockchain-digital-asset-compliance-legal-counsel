export type IndustrySignal = {
  id: string;
  title: string;
  descriptor: string;
  imageSrc: string;
  paragraph: string;
  readMoreHref: string;
  sources: { label: string; url: string }[];
};

export const industrySignals: IndustrySignal[] = [
  {
    id: 'energy-power',
    title: 'Energy & Power Infrastructure',
    descriptor: 'Electricity grids, renewables, transmission, long-term energy assets',
    imageSrc: '/src/assets/sectors/energy-power.webp',
    paragraph:
      'Institutional market signals show energy-linked digital infrastructure evaluated through governance, auditability, and curtailment controls applied to traditional grid assets. Operators document telemetry, incident response, and ESG disclosures so system operators and supervisors can assess risk. Compliance-by-design contracts set out curtailment rights, uptime SLAs, and reporting cadence aligned with energy regulators and institutional credit committees.',
    readMoreHref: '/energy-infrastructure',
    sources: [
      { label: 'IEA – Electricity', url: 'https://www.iea.org/topics/electricity' },
      { label: 'World Bank – Energy infrastructure', url: 'https://www.worldbank.org/en/topic/energy' },
    ],
  },
  {
    id: 'banking-financial',
    title: 'Banking & Financial Services',
    descriptor: 'Regulated banks, capital integration, secure financial systems',
    imageSrc: '/src/assets/sectors/banking-financial.webp',
    paragraph:
      'Institutional market signals indicate banks frame digital infrastructure through prudential risk, segregation of duties, and audit-ready controls. Structures avoid speculative custody, emphasizing service-based exposure with transparent counterparties, AML readiness, and operational evidence. Governance committees request disclosure packs, change-control logs, and assurance options to maintain compliance-by-design for supervisory dialogue.',
    readMoreHref: '/banking-integration',
    sources: [
      { label: 'BIS – Cryptoasset prudential treatment', url: 'https://www.bis.org/bcbs/publ/d545.htm' },
      { label: 'ECB – Crypto assets & stability', url: 'https://www.ecb.europa.eu/paym/crypto-assets/html/index.en.html' },
      { label: 'FATF', url: 'https://www.fatf-gafi.org/en/home.html' },
    ],
  },
  {
    id: 'agriculture-rural',
    title: 'Agriculture & Rural Infrastructure',
    descriptor: 'Farmland, irrigation, food security, rural development systems',
    imageSrc: '/src/assets/sectors/agriculture-rural.webp',
    paragraph:
      'Institutional market signals in rural contexts focus on governance, procurement compliance, and community impact. Controllable compute is paired with irrigation or processing loads under documented curtailment rights and reporting. Development agencies and ministries require audit trails, ESG disclosures, and risk controls that fit public finance and concessional funding frameworks, preserving service priority for local stakeholders.',
    readMoreHref: '/agriculture-infrastructure',
    sources: [
      { label: 'FAO – Digital agriculture', url: 'https://www.fao.org/digital-agriculture/en/' },
      { label: 'World Bank – Rural development', url: 'https://www.worldbank.org/en/topic/ruraldevelopment' },
      { label: 'UNDP – Digital for development', url: 'https://www.undp.org/digital' },
    ],
  },
  {
    id: 'global-infrastructure',
    title: 'Global Infrastructure & Capital Investment',
    descriptor: 'Large-scale assets such as data centers, transport, utilities, and urban development',
    imageSrc: '/src/assets/sectors/global-infrastructure.webp',
    paragraph:
      'Institutional market signals for global infrastructure emphasize parallels to data centers and utilities: uptime, resiliency, cybersecurity, and regulatory posture. Capital allocators review jurisdictional mapping, contractual risk allocation, and independent monitoring. Compliance-by-design and auditability are prerequisites for inclusion in diversified infrastructure strategies without implying endorsement or performance.',
    readMoreHref: '/market-precedent',
    sources: [
      { label: 'Brookfield – Infrastructure investment', url: 'https://www.brookfield.com/our-businesses/infrastructure' },
      { label: 'World Economic Forum – Digital infrastructure', url: 'https://www.weforum.org/agenda/archive/digital-infrastructure/' },
      { label: 'BlackRock – Digital assets perspective', url: 'https://www.blackrock.com/corporate/insights/digital-assets' },
    ],
  },
];
