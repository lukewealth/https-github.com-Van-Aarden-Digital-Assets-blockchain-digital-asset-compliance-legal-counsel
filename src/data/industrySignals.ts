import energyPower from '../assets/sectors/energy-power.webp';
import bankingFinancial from '../assets/sectors/banking-financial.webp';
import agricultureRural from '../assets/sectors/agriculture-rural.webp';
import globalInfrastructure from '../assets/sectors/global-infrastructure.webp';

export interface SignalSource {
  name: string;
  url: string;
}

export interface IndustrySignal {
  id: string;
  title: string;
  descriptor: string;
  route: string;
  image: string;
  content: string;
  sources: SignalSource[];
}

export const industrySignals: IndustrySignal[] = [
  {
    id: 'energy',
    title: 'Energy & Power Infrastructure',
    descriptor: 'Electricity grids, renewables, transmission, long-term energy assets',
    route: '/energy-infrastructure',
    image: energyPower,
    content: 'Institutional market signals indicate a growing demand for tokenized energy assets and carbon credits with verifiable, auditable compliance trails. Blockchain-based platforms are being evaluated for enhancing grid management, enabling peer-to-peer energy trading, and providing transparent governance over distributed energy resources. The focus is on creating compliance-by-design frameworks that ensure regulatory adherence for transmission contracts and renewable energy certificates, mitigating risks in an increasingly digitized and complex sector.',
    sources: [
      { name: 'International Energy Agency (IEA) - Electricity', url: 'https://www.iea.org/topics/electricity' },
      { name: 'The World Bank - Energy Sector', url: 'https://www.worldbank.org/en/topic/energy' },
    ],
  },
  {
    id: 'banking',
    title: 'Banking & Financial Services',
    descriptor: 'Regulated banks, capital integration, secure financial systems',
    route: '/banking-integration',
    image: bankingFinancial,
    content: 'Leading financial institutions are actively exploring distributed ledger technology to enhance payment rails, streamline settlement, and create programmable money. Key institutional market signals point towards a need for robust, regulatory-compliant digital asset custody and tokenization of real-world assets. The emphasis is on building secure, auditable systems with strong governance and risk controls that can integrate seamlessly with existing capital market infrastructure, satisfying regulators and institutional risk appetites.',
    sources: [
      { name: 'Basel Committee on Banking Supervision (BCBS)', url: 'https://www.bis.org/bcbs/publ/d545.htm' },
      { name: 'European Central Bank (ECB) - Crypto-Assets', url: 'https://www.ecb.europa.eu/paym/crypto-assets/html/index.en.html' },
      { name: 'Financial Conduct Authority (FCA) - Cryptoassets', url: 'https://www.fca.org.uk/cryptoassets' },
    ],
  },
  {
    id: 'agriculture',
    title: 'Agriculture & Rural Infrastructure',
    descriptor: 'Farmland, irrigation, food security, rural development systems',
    route: '/agriculture-infrastructure',
    image: agricultureRural,
    content: 'Institutional market signals in the agriculture sector show a clear trend towards digitizing supply chains for improved traceability, transparency, and food security. Blockchain offers a mechanism for creating immutable records of provenance, from farm to table, enhancing auditability and compliance with international trade standards. Governance frameworks for tokenized agricultural assets and smart contracts for automating insurance payouts are being developed to de-risk investment in rural infrastructure and ensure fair practice.',
    sources: [
      { name: 'Food and Agriculture Organization (FAO) - Digital Agriculture', url: 'https://www.fao.org/digital-agriculture/en/' },
      { name: 'The World Bank - Rural Development', url: 'https://www.worldbank.org/en/topic/ruraldevelopment' },
      { name: 'United Nations Development Programme (UNDP) - Digital Strategy', url: 'https://www.undp.org/digital' },
    ],
  },
  {
    id: 'global',
    title: 'Global Infrastructure & Capital Investment',
    descriptor: 'Large-scale assets such as data centers, transport, utilities, and urban development',
    route: '/market-precedent',
    image: globalInfrastructure,
    content: 'The tokenization of large-scale infrastructure assets represents a significant shift in capital markets, and institutional market signals point to a cautious but clear interest. This includes fractionalizing ownership of data centers, toll roads, and utilities to increase liquidity and broaden investor access. Critical to this evolution is the implementation of robust governance models, clear disclosure controls, and compliance-by-design to satisfy institutional due diligence. The goal is to build auditable, transparent, and regulated secondary markets for these assets.',
    sources: [
      { name: 'Brookfield - Infrastructure', url: 'https://www.brookfield.com/our-businesses/infrastructure' },
      { name: 'World Economic Forum - Digital Infrastructure', url: 'https://www.weforum.org/agenda/archive/digital-infrastructure/' },
      { name: 'BlackRock - Digital Assets', url: 'https://www.blackrock.com/corporate/insights/digital-assets' },
    ],
  },
];