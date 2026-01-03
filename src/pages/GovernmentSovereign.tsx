import React from 'react';
import SEO from '../components/Seo';
import TopBar from '../components/TopBar';

const GovernmentSovereign: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <TopBar title="Government" showBack />
      <SEO title="Government & Sovereign Adoption | VDAC" description="Sovereign governance for digital infrastructure." canonical="https://www.vdac.legal/government-sovereign" />
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <h1 className="text-4xl font-serif text-navy">Government & Sovereign Adoption</h1>
        <p className="text-slate/80 leading-relaxed">
          National and subnational governments can manage blockchain infrastructure as sovereign capability, aligning energy monetization, digital sovereignty, and procurement discipline with public oversight.
        </p>
      </div>
    </div>
  );
};

export default GovernmentSovereign;
