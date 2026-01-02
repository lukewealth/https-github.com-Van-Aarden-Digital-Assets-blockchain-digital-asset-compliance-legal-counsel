import React from 'react';
import { Link } from 'react-router-dom';
import AbstractPattern from '../components/AbstractPattern';
import InstitutionalCapabilitiesSection from '../components/InstitutionalCapabilitiesSection';
import IndustrySignalsSection from '../components/IndustrySignalsSection';

const Home: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center bg-navy overflow-hidden">
        <AbstractPattern className="inset-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-5xl lg:text-6xl font-serif text-white leading-tight">
              Blockchain Security, Crypto Mining & Digital Asset Compliance
            </h1>
            <p className="text-lg lg:text-xl text-steel max-w-3xl leading-relaxed">
              Independent legal counsel advising infrastructure operators, financial institutions, and public-sector stakeholders on regulatory compliance, governance, and cross-border risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-gold text-navy text-xs uppercase tracking-[0.2em] font-bold rounded-sm">
                Request Consultation
              </Link>
              <Link to="/institutional-value" className="px-8 py-4 border border-steel/30 text-white text-xs uppercase tracking-[0.2em] font-bold rounded-sm">
                View Institutional Value
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Authority & Trust Strip */}
      <section className="py-12 bg-offwhite border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Global Regulatory", desc: "Compliance and cross-border strategy for digital assets." },
              { title: "Mining Infrastructure", desc: "Legal oversight for mining operations and hosting." },
              { title: "AML & Sanctions", desc: "Financial crime controls aligned to FATF and OFAC." },
              { title: "Cross Border Legal", desc: "Structuring for funds, DAOs, and international deals." },
            ].map((item) => (
              <div key={item.title} className="border-l border-gold pl-5">
                <h4 className="text-[11px] uppercase tracking-widest font-bold text-slate mb-2">{item.title}</h4>
                <p className="text-sm text-slate/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InstitutionalCapabilitiesSection />
      <IndustrySignalsSection />
    </div>
  );
};

export default Home;
