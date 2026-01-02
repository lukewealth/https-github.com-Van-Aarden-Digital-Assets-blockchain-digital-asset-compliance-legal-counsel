
import React from 'react';
import { Link } from 'react-router-dom';
import AbstractPattern from '../components/AbstractPattern';

const Home: React.FC = () => {
  const practicePaths = [
    "/blockchain-security",
    "/mining-compliance",
    "/aml-sanctions",
    "/digital-assets"
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-navy overflow-hidden">
        <AbstractPattern className="inset-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h1 className="text-5xl lg:text-7xl font-serif text-white mb-8 leading-[1.1]">
              Blockchain Security, Crypto Mining & Digital Asset Compliance
            </h1>
            <p className="text-xl text-steel max-w-2xl mb-12 leading-relaxed">
              Independent legal counsel advising crypto mining operators, digital asset platforms, fintechs, and institutional stakeholders on regulatory compliance, security governance, and cross-border risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/contact" 
                className="px-10 py-5 bg-gold text-navy text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-all flex items-center justify-center"
              >
                Request Confidential Consultation
              </Link>
              <Link 
                to="/expertise" 
                className="px-10 py-5 border border-steel/30 text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all flex items-center justify-center"
              >
                View Regulatory Expertise
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Authority & Trust Section */}
      <section className="py-24 bg-offwhite border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="border-l border-gold pl-6">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate mb-4">Regulatory Breadth</h4>
              <p className="text-sm text-slate/70 font-medium">Global regulatory and compliance experience across top-tier jurisdictions.</p>
            </div>
            <div className="border-l border-gold pl-6">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate mb-4">Infrastructure Focus</h4>
              <p className="text-sm text-slate/70 font-medium">Deep expertise in crypto mining and digital asset hosting infrastructure.</p>
            </div>
            <div className="border-l border-gold pl-6">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate mb-4">Security First</h4>
              <p className="text-sm text-slate/70 font-medium">AML, sanctions, and enforcement readiness for emerging protocols.</p>
            </div>
            <div className="border-l border-gold pl-6">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate mb-4">Cross-Border Strategy</h4>
              <p className="text-sm text-slate/70 font-medium">Legal risk mitigation for decentralized technologies and DAOs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Practice Overview */}
      <section className="py-32 bg-white relative">
        <AbstractPattern className="top-0 right-0 w-1/3 h-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif text-navy mb-4">Core Practice Areas</h2>
              <div className="w-20 h-1 bg-gold"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Blockchain Security & Risk Governance",
                desc: "Legal frameworks for protocol security, custody, key management, incident response, and governance obligations."
              },
              {
                title: "Crypto Mining & MaaS Compliance",
                desc: "Regulatory structuring of BTC, ETH, SOL mining, hosting, pooled mining, MaaS, broker exposure, and energy compliance."
              },
              {
                title: "AML, Financial Crime & Sanctions",
                desc: "FATF-aligned AML/KYC programs, sanctions screening, transaction monitoring, and enforcement risk mitigation."
              },
              {
                title: "Digital Assets, Stablecoins & Payments",
                desc: "Legal treatment of tokens, stablecoins, custody, collateral, payments law, and insolvency considerations."
              }
            ].map((practice, idx) => (
              <div key={idx} className="group p-10 border border-gray-100 bg-offwhite hover:border-gold transition-all duration-500">
                <span className="text-xs text-gold font-bold uppercase tracking-widest block mb-6">0{idx + 1}</span>
                <h3 className="text-2xl font-serif text-navy mb-6 group-hover:text-gold transition-colors">{practice.title}</h3>
                <p className="text-slate/70 leading-relaxed mb-8">{practice.desc}</p>
                <Link to={practicePaths[idx]} className="text-[10px] uppercase tracking-widest font-bold text-navy group-hover:underline">Explore Deep-Dive &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Regulatory Insight */}
      <section className="py-32 bg-navy text-white relative">
        <AbstractPattern className="inset-0 opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-serif mb-4">Regulatory Briefings</h2>
              <p className="text-steel text-sm max-w-xl uppercase tracking-wider font-semibold">Formal analysis of emerging digital asset legal frameworks.</p>
            </div>
            <Link to="/regulatory-insight" className="text-[10px] uppercase tracking-widest font-bold text-gold border-b border-gold/30 pb-1">View All Insights</Link>
          </div>

          <div className="space-y-0 divide-y divide-steel/20">
            {[
              { date: "Oct 24, 2023", title: "Regulatory Classification of Crypto Mining Activities", tag: "Compliance" },
              { date: "Sep 15, 2023", title: "Stablecoin Custody, Reserves, and Insolvency Risk", tag: "Stablecoins" },
              { date: "Aug 30, 2023", title: "Mining-Backed Yield Products: Compliance Failures", tag: "Enforcement" }
            ].map((insight, idx) => (
              <Link to="/regulatory-insight" key={idx} className="py-12 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer block">
                <div className="flex items-center space-x-12 mb-4 md:mb-0">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-steel w-24">{insight.date}</span>
                  <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-gold transition-colors">{insight.title}</h3>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-steel border border-steel/30 px-4 py-2 group-hover:border-gold group-hover:text-gold transition-all">{insight.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
