import React from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale } from 'react-icons/fa';
import { FiLock, FiGlobe, FiCpu, FiShield, FiChevronRight } from 'react-icons/fi';
import TopBar from '../components/TopBar';
import AbstractPattern from '../components/AbstractPattern';
import { practiceAreas } from '../data/practiceAreas';
import { briefs } from '../data/briefs';
import InstitutionalCapabilitiesSection from '../components/InstitutionalCapabilitiesSection';
import IndustrySignalsSection from '../components/IndustrySignalsSection';
import TeamSpotlight from '../components/TeamSpotlight';
import PresenceBanner from '../components/PresenceBanner';

const Home: React.FC = () => {
  return (
    <div className="bg-offwhite min-h-screen">
      <TopBar title="VDAC" />

      {/* Hero */}
      <section className="relative flex items-center bg-navy overflow-hidden pt-10 pb-14">
        <AbstractPattern className="inset-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-6">
          <span className="badge">Security-First Counsel</span>
          <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Blockchain Security, Crypto Mining & Digital Asset Compliance
          </h1>
          <p className="text-base md:text-lg text-steel max-w-3xl leading-relaxed">
            Independent legal counsel advising mining operators, digital asset platforms, and institutional stakeholders on regulatory compliance, security governance, and cross-border risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              <FiLock /> Request Consultation
            </Link>
            <Link to="/expertise" className="btn-secondary inline-flex items-center gap-2 border-white/30 text-white">
              View Regulatory Expertise
            </Link>
          </div>
        </div>
      </section>

      {/* Authority & Trust Strip */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Global Regulatory", desc: "Compliance and cross-border strategy for digital assets.", icon: <FaBalanceScale /> },
              { title: "Mining Infrastructure", desc: "Legal oversight for mining operations and hosting.", icon: <FiCpu /> },
              { title: "AML & Sanctions", desc: "Financial crime controls aligned to FATF and OFAC.", icon: <FiShield /> },
              { title: "Cross Border Legal", desc: "Structuring for funds, DAOs, and international deals.", icon: <FiGlobe /> },
            ].map((item) => (
              <div key={item.title} className="p-4 border border-gray-200 bg-offwhite shadow-sm rounded-sm flex items-start gap-3">
                <div className="text-gold mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-slate mb-1">{item.title}</h4>
                  <p className="text-sm text-slate/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InstitutionalCapabilitiesSection />
      <IndustrySignalsSection />

      {/* Core Practice Areas */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-3">
          <h2 className="text-xl font-serif text-navy">Core Practice Areas</h2>
          <div className="bg-white border border-gray-200 rounded-md divide-y divide-gray-100 shadow-sm">
            {practiceAreas.map((p) => (
              <Link key={p.title} to={p.href} className="list-row px-4">
                <div>
                  <p className="text-sm font-serif text-navy">{p.title}</p>
                  <p className="text-xs text-slate/70">{p.subtitle}</p>
                </div>
                <FiChevronRight className="chevron text-steel" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TeamSpotlight />

      {/* Core Practice Areas */}
      {/* Regulatory Briefings */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif text-navy">Regulatory Briefings</h2>
            <Link to="/expertise" className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {briefs.map((b) => (
              <Link key={b.title} to={b.href} className="p-5 border border-gray-200 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate/60 mb-1">{b.date}</p>
                <h3 className="text-lg font-serif text-navy mb-2">{b.title}</h3>
                <p className="text-sm text-slate/80 leading-relaxed">{b.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Brief CTA */}
      <section className="bg-navy text-white py-12 md:py-14">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Blockchain</p>
            <h3 className="text-2xl md:text-3xl font-serif">Latest Authority Briefing</h3>
            <p className="text-steel text-sm md:text-base max-w-2xl leading-relaxed">
              Institutional-grade insights on regulatory movements, enforcement themes, and governance expectations for digital asset operators.
            </p>
          </div>
          {briefs[0] && (
            <Link
              to={briefs[0].href}
              className="inline-flex items-center justify-center px-5 py-3 bg-gold text-navy text-[11px] uppercase tracking-[0.2em] font-bold rounded-sm shadow-sm hover:shadow-md transition-shadow"
              aria-label="View latest authority briefing"
            >
              View briefing
            </Link>
          )}
        </div>
      </section>

      {/* Presence */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <PresenceBanner />
        </div>
      </section>
    </div>
  );
};

export default Home;
