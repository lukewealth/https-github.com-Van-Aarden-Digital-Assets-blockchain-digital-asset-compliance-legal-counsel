import React from 'react';
import SEO from '../components/Seo';
import TopBar from '../components/TopBar';

const EnergyInfrastructure: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <TopBar title="Energy & Power" showBack />
      <SEO title="Energy, Power & Infrastructure | VDAC" description="Energy-linked infrastructure governance and compliance." canonical="https://www.vdac.legal/energy-infrastructure" />
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <h1 className="text-4xl font-serif text-navy">Energy, Power & Infrastructure</h1>
        <p className="text-slate/80 leading-relaxed">
          Proof-of-Work infrastructure can operate as controllable, policy-driven load that complements grid stability, supports energy transition,
          and monetizes stranded resources while maintaining compliance with regulatory and ESG expectations.
        </p>
      </div>
    </div>
  );
};

export default EnergyInfrastructure;
