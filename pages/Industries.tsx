
import React, { useState } from 'react';

const Industries: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const sectors = [
    {
      title: "Crypto Mining Operators",
      risk: "Operational regulatory classification and energy procurement exposure.",
      pressure: "Evolving state-level mining bans, ESG reporting requirements, and AML obligations for reward flows.",
      mitigation: "Drafting of robust Master Service Agreements (MSAs) for hosting and structuring mining entities to maximize regulatory clarity."
    },
    {
      title: "Private Funds & Institutional Investors",
      risk: "Counterparty risk and fiduciary duties related to digital asset custody.",
      pressure: "SEC custody rules, valuation complexities for illiquid tokens, and exposure to sanctioned protocols.",
      mitigation: "Due diligence on underlying protocol security and advisor status compliance under the Investment Advisers Act."
    },
    {
      title: "Fintech & Payment Providers",
      risk: "Money transmission status and cross-border settlement friction.",
      pressure: "State money transmitter license (MTL) requirements, consumer protection laws, and stablecoin reserve transparency.",
      mitigation: "Structuring of 'flow of funds' to minimize licensing burdens while maintaining strict AML/KYC standards."
    },
    {
      title: "Web3 & Blockchain Platforms",
      risk: "Smart contract liability and decentralized governance (DAO) legal status.",
      pressure: "Regulatory targeting of 'Exchange' definitions to include DEXs and protocol maintainers.",
      mitigation: "Developing progressive decentralization roadmaps and drafting legally defensible terms of service and governance wrappers."
    }
  ];

  return (
    <div className="fade-in pb-32">
      <section className="py-24 bg-offwhite border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif text-navy mb-8">Industries Served</h1>
          <p className="text-xl text-slate/70 leading-relaxed max-w-3xl mx-auto">
            Tailored legal and compliance strategies for the critical infrastructure of the digital asset economy. 
            We provide clarity where uncertainty prevails.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          {sectors.map((sector, idx) => (
            <div key={idx} className="border border-gray-200">
              <button 
                onClick={() => setActiveTab(activeTab === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left hover:bg-offwhite transition-colors"
              >
                <h3 className="text-2xl font-serif text-navy">{sector.title}</h3>
                <span className={`text-gold text-2xl transition-transform duration-300 ${activeTab === idx ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              
              {activeTab === idx && (
                <div className="p-8 pt-0 bg-white grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-4">Industry Risk Profile</h4>
                    <p className="text-sm text-slate/70 leading-relaxed">{sector.risk}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-4">Pressure Points</h4>
                    <p className="text-sm text-slate/70 leading-relaxed">{sector.pressure}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-4">Legal Mitigation</h4>
                    <p className="text-sm text-slate/70 leading-relaxed">{sector.mitigation}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Industries;
