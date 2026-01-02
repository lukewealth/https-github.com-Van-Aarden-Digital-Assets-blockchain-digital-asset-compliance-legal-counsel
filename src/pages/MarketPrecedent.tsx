import React from 'react';
import SEO from '../components/Seo';

const MarketPrecedent: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <SEO title="Institutional Precedent & Market Signals | VDAC" description="Institutional observations on digital infrastructure." canonical="https://www.vdac.legal/market-precedent" />
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <h1 className="text-4xl font-serif text-navy">Institutional Precedent & Market Signals</h1>
        <p className="text-slate/80 leading-relaxed">
          Observations on how institutions evaluate digital infrastructure—focusing on operational governance, compliance posture, and parallels to established infrastructure classes.
        </p>
      </div>
    </div>
  );
};

export default MarketPrecedent;
