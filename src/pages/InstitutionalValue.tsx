import React from 'react';
import SEO from '../components/Seo';

const InstitutionalValue: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <SEO title="Institutional Value | VDAC" description="Institutional frameworks for blockchain infrastructure." canonical="https://www.vdac.legal/institutional-value" />
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <h1 className="text-4xl font-serif text-navy">Institutional Value</h1>
        <p className="text-slate/80 leading-relaxed">
          Regulated institutions can integrate capital into blockchain infrastructure through governance-first structures that align with prudential expectations,
          audit readiness, and enterprise risk models—without speculative custody exposure.
        </p>
      </div>
    </div>
  );
};

export default InstitutionalValue;
