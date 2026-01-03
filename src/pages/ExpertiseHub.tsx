import React from 'react';
import TopBar from '../components/TopBar';
import PillarCard from '../components/PillarCard';
import RegulatoryBriefCard from '../components/RegulatoryBriefCard';
import PracticeList from '../components/PracticeList';
import PresenceBanner from '../components/PresenceBanner';
import FloatingContactButton from '../components/FloatingContactButton';
import { practiceAreas } from '../data/practiceAreas';

const ExpertiseHub: React.FC = () => {
  return (
    <div className="bg-offwhite min-h-screen">
      <TopBar title="EXPERTISE HUB" />

      <section className="px-6 py-8 max-w-5xl mx-auto space-y-6">
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate/70">The Approach</p>
          <h1 className="text-3xl font-serif text-navy">Navigating the intersection of blockchain innovation and global regulatory enforcement.</h1>
          <p className="text-slate/80 leading-relaxed">
            Our advisory approach is built on three core pillars: integrating legal frameworks at the protocol level, prioritizing asset protection, and preparing for regulatory scrutiny.
          </p>
        </div>

        <div className="space-y-4">
          <PillarCard
            title="Compliance-by-Design"
            desc="Integrating legal frameworks directly at the protocol layer, seamless disclosure and audit alignment."
            variant="compliance"
          />
          <PillarCard
            title="Security-First"
            desc="Protecting asset protection and smart contracting risk; mitigation in any structuring context."
            variant="security"
          />
          <PillarCard
            title="Regulator-Ready"
            desc="Proactive preparation of independent audits, ready documentation for potential SEC/CFTC scrutiny."
            variant="ready"
          />
        </div>

        <RegulatoryBriefCard
          title="Current Focus: MiCA Implementation"
          body="As European Union markets roll out MiCA, we are aligning utility tokens to on-chain controls with audit-ready evidence. Our counsel is tailored for board oversight, prudential alignment, and disciplined liquidity."
          href="/expertise"
        />

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-serif text-navy">Practice Areas</h2>
            <span className="text-xs uppercase tracking-[0.2em] text-slate/60">{practiceAreas.length} services</span>
          </div>
          <PracticeList items={practiceAreas} />
        </div>

        <PresenceBanner />
      </section>

      <FloatingContactButton />
    </div>
  );
};

export default ExpertiseHub;
