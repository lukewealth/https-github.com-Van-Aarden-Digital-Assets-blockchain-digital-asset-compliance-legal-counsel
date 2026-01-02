
import React, { useState } from 'react';
import AbstractPattern from '../components/AbstractPattern';

const RegulatoryInsight: React.FC = () => {
  const [selectedBrief, setSelectedBrief] = useState<number | null>(null);

  const briefings = [
    {
      title: "AML Implications of Mining Pool Structures",
      date: "Oct 12, 2023",
      jurisdiction: "United States",
      tag: "Compliance",
      content: "As mining pools aggregate hashrate from diverse, often anonymous participants, FinCEN has signaled that certain 'custodial' pool operators may be classified as money transmitters. This briefing explores the distinction between pure technical coordination and custodial payout management, providing a framework for operators to evaluate their registration obligations under the Bank Secrecy Act."
    },
    {
      title: "Stablecoin Payments and Consumer Protection Law",
      date: "Sep 28, 2023",
      jurisdiction: "European Union",
      tag: "Consumer Protection",
      content: "With the implementation of MiCA, the EU has established a comprehensive framework for 'Asset-Referenced Tokens'. This memo analyzes how traditional consumer protection directives apply to stablecoin settlement, particularly focusing on the right to redemption and the liability of issuers for technical failures in the underlying protocol."
    },
    {
      title: "Digital Asset Custody Under Insolvency Regimes",
      date: "Sep 15, 2023",
      jurisdiction: "Global",
      tag: "Insolvency",
      content: "The recent collapse of major custodial platforms has highlighted the legal ambiguity of 'off-chain' balances. We examine the 'commingling' risk and the legal precedents for asset segregation in common law jurisdictions, providing recommendations for institutional holders to verify 'bankruptcy remoteness' through legal audits."
    },
    {
      title: "SEC vs. DeFi Protocols: The 'Exchange' Definition",
      date: "Aug 30, 2023",
      jurisdiction: "United States",
      tag: "Litigation",
      content: "The SEC's proposed amendment to Rule 3b-16 seeks to redefine 'exchange' to include 'communication protocol systems'. This analysis discusses the potential impact on decentralized automated market makers (AMMs) and the legal defenses available to protocol maintainers against registration requirements."
    }
  ];

  return (
    <div className="fade-in pb-32 relative">
      <AbstractPattern className="inset-0" />
      <section className="py-24 border-b border-gray-200 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-serif text-navy mb-8">Regulatory Insight</h1>
          <p className="text-xl text-slate/70 leading-relaxed max-w-3xl">
            Formal legal analysis curated for institutional stakeholders, covering the most critical shifts in the global digital asset regulatory environment.
          </p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-8">
            {briefings.map((brief, idx) => (
              <div 
                key={idx} 
                className={`transition-all duration-500 border border-gray-100 p-10 bg-white ${selectedBrief === idx ? 'shadow-2xl border-gold' : 'shadow-sm hover:border-gold/30'}`}
                onClick={() => setSelectedBrief(selectedBrief === idx ? null : idx)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <span className="text-[10px] uppercase tracking-widest font-bold bg-navy text-white px-3 py-1">{brief.tag}</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-steel">{brief.date}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gold">{brief.jurisdiction}</span>
                </div>
                
                <h2 className="text-3xl font-serif text-navy mb-6 cursor-pointer group-hover:text-gold transition-colors">{brief.title}</h2>
                
                <div className={`overflow-hidden transition-all duration-700 ${selectedBrief === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="prose prose-slate max-w-none pt-6 border-t border-gray-100">
                    <p className="text-slate/70 leading-relaxed text-lg italic mb-8">
                      {brief.content}
                    </p>
                    <div className="flex justify-end">
                      <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy hover:text-gold border-b border-navy/20 pb-1">Request Full Memo Access</button>
                    </div>
                  </div>
                </div>
                
                {selectedBrief !== idx && (
                  <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy border-b border-navy/20 pb-1 mt-4">Expand Abstract &rarr;</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegulatoryInsight;
