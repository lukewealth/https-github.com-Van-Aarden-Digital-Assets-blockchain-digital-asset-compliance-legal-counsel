import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLock, FiChevronRight } from 'react-icons/fi';
import SeoMeta from '../components/SeoMeta';
import { brand } from '../config/brand';
import { practiceAreas } from '../data/practiceAreas';
import { briefs } from '../data/briefs';
import MobileActionBar from '../components/MobileActionBar';

// Import SVG icons
const GlobeIcon = () => (
  <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M2 12h20"></path>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const InfrastructureIcon = () => (
  <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
    <path d="M7 15V5"></path>
    <path d="M11 15V5"></path>
    <path d="M15 15V5"></path>
    <path d="M3 10h18"></path>
  </svg>
);

const ComplianceIcon = () => (
  <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const LegalIcon = () => (
  <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"></path>
    <path d="M12 12l-3-3m3 3l3-3m0 6l-3 3m3-3l3 3"></path>
  </svg>
);

const Home: React.FC = () => {
  return (
    <>
      <SeoMeta
        title={brand.defaultPageTitle()}
        description="Independent legal counsel advising crypto mining operators, digital asset platforms, and institutional stakeholders on regulatory compliance, security governance, and cross-border risk."
        ogTitle={brand.fullDisplay}
      />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-navy text-white pt-20 pb-16 md:pt-28 md:pb-20">
          {/* Background Image */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/Energy landscape at twilight.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              opacity: 0.15,
            }}
          ></div>

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/80"></div>

          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 1px,
                rgba(255,255,255,.02) 1px,
                rgba(255,255,255,.02) 2px
              )`,
            }}
          ></div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center md:text-left space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/40 text-gold text-[11px] uppercase tracking-[0.2em] font-bold rounded-sm">
              <FiLock className="w-3 h-3" />
              Security First Counsel
            </span>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight max-w-3xl">
              Blockchain Security, Crypto Mining & Digital Asset Compliance
            </h1>
            
            <p className="text-base md:text-lg text-steel max-w-3xl leading-relaxed">
              Independent legal counsel advising crypto mining operators, digital asset platforms, and institutional stakeholders on regulatory compliance, security governance, and cross-border risk.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-navy text-[11px] uppercase tracking-[0.2em] font-bold rounded-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <FiLock className="w-4 h-4" />
                Request Consultation
              </Link>
              <Link 
                to="/expertise" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gold text-gold text-[11px] uppercase tracking-[0.2em] font-bold rounded-sm hover:bg-gold/5 transition-colors"
              >
                View Regulatory Expertise
              </Link>
            </div>
          </div>
        </section>

        {/* Authority & Trust Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-[11px] uppercase tracking-[0.24em] text-slate/60 mb-10 md:mb-12 font-bold">
              Authority & Trust
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { 
                  title: "Global Regulatory", 
                  desc: "Compliance experience across major jurisdictions including US, EU, and APAC.",
                  icon: <GlobeIcon />
                },
                { 
                  title: "Mining Infrastructure", 
                  desc: "Specialized counsel for energy contracts and hosting agreements.",
                  icon: <InfrastructureIcon />
                },
                { 
                  title: "AML & Sanctions", 
                  desc: "Enforcement readiness, financial crime prevention, and OFAC strategy.",
                  icon: <ComplianceIcon />
                },
                { 
                  title: "Cross-Border Legal", 
                  desc: "Strategic structuring for emerging technologies and decentralized entities.",
                  icon: <LegalIcon />
                },
              ].map((item) => (
                <div 
                  key={item.title} 
                  className="p-6 border border-gray-200 rounded-sm hover:shadow-md hover:border-gold/30 transition-all duration-200 bg-white"
                >
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-[12px] uppercase tracking-[0.16em] font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Practice Areas */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-navy mb-8">
              Core Practice Areas
            </h2>
            
            <div className="space-y-1 bg-white border border-gray-200 rounded-sm overflow-hidden">
              {practiceAreas.map((practice, idx) => (
                <Link 
                  key={practice.title}
                  to={practice.href}
                  className={`group block px-6 py-5 hover:bg-gold/5 transition-colors border-b border-gray-100 last:border-b-0 ${
                    idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-serif font-bold text-navy mb-1">
                        {practice.title}
                      </h3>
                      <p className="text-xs text-slate/70">
                        {practice.subtitle}
                      </p>
                    </div>
                    <FiChevronRight className="w-5 h-5 text-slate/40 group-hover:text-gold transition-colors flex-shrink-0 ml-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Briefings */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10 md:mb-12">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-navy">
                Regulatory Briefings
              </h2>
              <Link to="/publications" className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold hover:text-gold/80 transition-colors">
                View All
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {briefs.slice(0, 3).map((brief) => (
                <Link
                  key={brief.title}
                  to={brief.href}
                  className="p-6 border border-gray-200 rounded-sm hover:shadow-md hover:border-gold/40 transition-all duration-200 bg-white group"
                >
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate/60 mb-2 font-bold">
                    {brief.date}
                  </p>
                  <h3 className="text-base font-serif font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                    {brief.title}
                  </h3>
                  <p className="text-sm text-slate/80 leading-relaxed line-clamp-3">
                    {brief.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-navy text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.24em] text-gold font-bold">
                  Attorney Advertising
                </p>
                <h3 className="text-2xl md:text-3xl font-serif font-bold">
                  Ready to discuss your governance needs?
                </h3>
                <p className="text-steel text-base leading-relaxed max-w-2xl">
                  Our team of compliance and infrastructure specialists is available for confidential consultations.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy text-[11px] uppercase tracking-[0.2em] font-bold rounded-sm shadow-sm hover:shadow-md transition-shadow whitespace-nowrap"
              >
                Contact Firm
              </Link>
            </div>
          </div>
        </section>

        {/* Mobile Action Bar */}
        <MobileActionBar />
      </div>
    </>
  );
};

export default Home;