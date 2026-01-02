
import React from 'react';
import { Link } from 'react-router-dom';
import AbstractPattern from '../components/AbstractPattern';

const Expertise: React.FC = () => {
  const practices = [
    {
      title: "Blockchain Security & Risk Governance",
      overview: "Legal frameworks for protocol security, custody, key management, incident response, and governance obligations in blockchain systems.",
      path: "/blockchain-security"
    },
    {
      title: "Crypto Mining & MaaS Compliance",
      overview: "Regulatory structuring of BTC, ETH, SOL mining, hosting, pooled mining, MaaS, broker exposure, and energy compliance.",
      path: "/mining-compliance"
    },
    {
      title: "AML, Financial Crime & Sanctions",
      overview: "FATF-aligned AML/KYC programs, sanctions screening, transaction monitoring, and enforcement risk mitigation.",
      path: "/aml-sanctions"
    },
    {
      title: "Digital Assets, Stablecoins & Payments",
      overview: "Legal treatment of tokens, stablecoins, custody, collateral, payments law, and insolvency considerations.",
      path: "/digital-assets"
    }
  ];

  return (
    <div className="fade-in pb-32 relative">
      <AbstractPattern className="inset-0" />
      
      <section className="py-24 bg-offwhite border-b border-gray-200 relative">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-serif text-navy mb-8">Expertise</h1>
          <p className="text-xl text-slate/70 leading-relaxed max-w-3xl">
            Our advisory approach is built on three institutional pillars: 
            <span className="text-navy font-bold"> Compliance-by-Design</span>, 
            <span className="text-navy font-bold"> Security-First Governance</span>, and 
            <span className="text-navy font-bold"> Regulatory Readiness</span>.
          </p>
        </div>
      </section>

      <section className="mt-20 relative">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {practices.map((p, idx) => (
            <div key={idx} className="group p-10 border border-gray-100 bg-white hover:border-gold transition-all duration-500 shadow-sm hover:shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-xs text-gold font-bold uppercase tracking-widest block mb-6">Practice {idx + 1}</span>
                <h3 className="text-2xl font-serif text-navy mb-6 group-hover:text-gold transition-colors">{p.title}</h3>
                <p className="text-slate/70 leading-relaxed mb-12 italic text-sm">{p.overview}</p>
              </div>
              <Link to={p.path} className="text-[10px] uppercase tracking-widest font-bold text-navy group-hover:underline inline-flex items-center">
                Explore Deep-Dive Practice <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Expertise;
