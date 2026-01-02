import React from 'react';
import SEO from '../components/Seo';

const Team: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <SEO title="Our Team | VDAC" description="Independent legal and regulatory expertise." canonical="https://www.vdac.legal/team" />
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <h1 className="text-4xl font-serif text-navy">Our Team</h1>
        <p className="text-slate/80 leading-relaxed">
          VDAC brings together independent legal and regulatory expertise to support compliance, governance, and enforcement readiness across digital asset markets.
        </p>
      </div>
    </div>
  );
};

export default Team;
