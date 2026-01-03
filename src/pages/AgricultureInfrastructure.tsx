import React from 'react';
import SEO from '../components/Seo';
import TopBar from '../components/TopBar';

const AgricultureInfrastructure: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <TopBar title="Agriculture" showBack />
      <SEO title="Agriculture & Rural Infrastructure | VDAC" description="Digital infrastructure aligned with rural development and policy." canonical="https://www.vdac.legal/agriculture-infrastructure" />
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <h1 className="text-4xl font-serif text-navy">Agriculture & Rural Infrastructure</h1>
        <p className="text-slate/80 leading-relaxed">
          Blockchain infrastructure can be deployed as controllable load to support rural electrification, agro-processing stability, and development-aligned revenue—without compromising public-service priorities or compliance.
        </p>
      </div>
    </div>
  );
};

export default AgricultureInfrastructure;
