import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import RiskCard from '../components/RiskCard';
import QuoteBox from '../components/QuoteBox';
import BottomActionBar from '../components/BottomActionBar';
import ReferencesBlock from '../components/ReferencesBlock';
import { industries } from '../data/industries';
import institutionalBg from '@/assets/backgrounds/institutional.webp';
import { references } from '../data/references';

const IndustryPractice: React.FC = () => {
  const { slug } = useParams();
  const industry = industries.find((i) => i.slug === slug) || industries[0];
  const refs = references[industry.referencesKey];

  return (
    <div className="bg-offwhite min-h-screen pb-20">
      <TopBar title="Industry Practice" showBack />

      <section className="bg-navy text-white px-6 py-10">
        <div className="space-y-3">
          <span className="badge bg-white/10 text-gold">{industry.badge}</span>
          <h1 className="text-3xl font-serif leading-tight">{industry.title}</h1>
          <p className="text-white/80 text-sm uppercase tracking-[0.16em]">{industry.descriptor}</p>
        </div>
      </section>

      <section className="px-6 py-8 space-y-6 max-w-5xl mx-auto">
        <div className="border-l-4 border-gold pl-4">
          <p className="text-slate/80 leading-relaxed">{industry.intro}</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-serif text-navy">Industry Risk Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.riskCards.map((card) => (
              <RiskCard key={card.title} title={card.title} desc={card.desc} />
            ))}
          </div>
        </div>

        <div
          className="presence-banner rounded-md overflow-hidden"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(11,28,45,0.78), rgba(11,28,45,0.58)), url(${industry.background || institutionalBg})` }}
        >
          <div className="p-6 text-center text-white space-y-1">
            <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Global Insight</p>
            <h3 className="text-xl font-serif">Cross-Border Data Flows & Jurisdiction</h3>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-serif text-navy">Regulatory Pressure Points</h2>
          <ul className="space-y-3">
            {industry.pressures.map((item) => (
              <li key={item.title} className="p-3 bg-white border border-gray-200 rounded-md shadow-sm">
                <p className="font-semibold text-navy">{item.title}</p>
                <p className="text-sm text-slate/80 leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <QuoteBox quote="Counsel perspective: institutional market signals reward defensible governance, auditability, and documented risk allocation. Each mandate aligns controls to supervisory expectations without implying performance." />

        <div className="space-y-3">
          <h2 className="text-xl font-serif text-navy">Our Mandate</h2>
          <div className="bg-white border border-gray-200 rounded-md divide-y divide-gray-200 shadow-sm">
            {industry.mandates.map((m) => (
              <Link key={m.label} to={m.href} className="list-row px-4">
                <span className="text-sm font-semibold text-navy">{m.label}</span>
                <span className="chevron">→</span>
              </Link>
            ))}
          </div>
        </div>

        <ReferencesBlock
          items={refs}
          disclaimer="External references are informational only and do not imply endorsement. VDAC does not guarantee returns."
        />
      </section>

      <BottomActionBar />
    </div>
  );
};

export default IndustryPractice;
