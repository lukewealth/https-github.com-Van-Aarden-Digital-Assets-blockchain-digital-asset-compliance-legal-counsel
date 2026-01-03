import React from 'react';
import SeoMeta from '../components/SeoMeta';
import { brand } from '../config/brand';
import TopBar from '../components/TopBar';
import PillarCard from '../components/PillarCard';
import RegulatoryBriefCard from '../components/RegulatoryBriefCard';
import PracticeList from '../components/PracticeList';
import PresenceBanner from '../components/PresenceBanner';
import FloatingContactButton from '../components/FloatingContactButton';
import { practiceAreas } from '../data/practiceAreas';

const ExpertiseHub: React.FC = () => {
  return (
    <>
      <SeoMeta
        title={brand.defaultPageTitle('Expertise')}
        description="Digital asset compliance, governance frameworks, and institutional advisory for infrastructure capital markets."
        ogTitle={brand.defaultPageTitle('Expertise')}
      />
      <div className="bg-offwhite min-h-screen">
        <TopBar title="EXPERTISE HUB" />

        <section className="px-6 py-8 max-w-5xl mx-auto space-y-6">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate/70">Institutional Approach</p>
            <h1 className="text-3xl font-serif text-navy">Governance, compliance, and regulatory readiness for digital assets and infrastructure capital.</h1>
            <p className="text-slate/80 leading-relaxed">
              Our advisory integrates legal frameworks at the governance level, prioritizes auditability and controls, and prepares institutional clients for cross-border regulatory scrutiny.
            </p>
          </div>

          <div className="space-y-4">
            <PillarCard
              title="Governance-by-Design"
              desc="Board-ready frameworks integrating legal structures with operational controls and audit readiness."
              variant="compliance"
            />
            <PillarCard
              title="Compliance-First"
              desc="Institutional-grade controls aligned to FATF, OFAC, and emerging digital asset regulatory standards."
              variant="security"
            />
            <PillarCard
              title="Audit-Ready"
              desc="Proactive structuring and documentation for regulatory review, SEC/CFTC readiness, and institutional stakeholder confidence."
              variant="ready"
            />
          </div>

          <RegulatoryBriefCard
            title="Current Focus: MiCA & Market Readiness"
            body="As European and global markets define digital asset frameworks, we advise on governance alignment, custody structures, and operational readiness. Our counsel prioritizes institutional credibility and regulatory compliance."
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
