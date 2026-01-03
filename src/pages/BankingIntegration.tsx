import React from 'react';
import SEO from '../components/Seo';
import TopBar from '../components/TopBar';

const BankingIntegration: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <TopBar title="Banking" showBack />
      <SEO title="Banking & Institutional Integration | VDAC" description="Governance-first engagement for banks and financial institutions." canonical="https://www.vdac.legal/banking-integration" />
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <h1 className="text-4xl font-serif text-navy">Banking & Institutional Integration</h1>
        <p className="text-slate/80 leading-relaxed">
          A governance-first approach for banks and regulated financial institutions to engage blockchain infrastructure without speculative custody while meeting prudential and AML expectations.
        </p>
      </div>
    </div>
  );
};

export default BankingIntegration;
