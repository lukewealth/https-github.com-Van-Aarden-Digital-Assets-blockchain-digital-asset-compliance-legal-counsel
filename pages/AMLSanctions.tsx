
import React from 'react';
import AbstractPattern from '../components/AbstractPattern';

const AMLSanctions: React.FC = () => {
  return (
    <div className="fade-in pb-32 relative">
      <AbstractPattern className="inset-0" />
      <section className="py-24 bg-navy text-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-serif mb-8 text-gold">AML, Financial Crime & Sanctions</h1>
          <p className="text-xl text-steel leading-relaxed max-w-3xl italic">
            Implementing FATF-aligned compliance frameworks for institutional digital asset entities and mining operators.
          </p>
        </div>
      </section>

      <section className="py-20 relative bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-slate max-w-none">
                <h3 className="text-2xl font-serif text-navy mb-6 uppercase tracking-tight border-b border-gray-100 pb-4">FATF Travel Rule Compliance</h3>
                <p className="text-slate/70 leading-relaxed mb-8">
                  We assist Virtual Asset Service Providers (VASPs) in implementing technical and legal protocols to comply with the Travel Rule, ensuring secure transmission of originator and beneficiary information across borderless networks.
                </p>

                <h3 className="text-2xl font-serif text-navy mb-6">OFAC & Global Sanctions Screening</h3>
                <p className="text-slate/70 leading-relaxed mb-8">
                  Digital assets are a high-risk vector for sanctions evasion. We design automated, blockchain-native screening programs that prevent interaction with SDN-listed addresses while maintaining operational efficiency.
                </p>

                <div className="bg-offwhite p-10 border-l-4 border-gold my-12">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-navy mb-4">Enforcement Defense</h4>
                  <p className="text-sm text-slate/70 leading-relaxed italic">
                    In the event of a regulatory inquiry or enforcement action from FinCEN or OFAC, we provide strategic defense counsel grounded in a deep understanding of blockchain data forensics.
                  </p>
                </div>

                <h3 className="text-2xl font-serif text-navy mb-6">Transaction Monitoring & SAR Reporting</h3>
                <p className="text-slate/70 leading-relaxed">
                  Developing risk-based monitoring frameworks that distinguish between legitimate privacy-enhancing technologies and illicit obfuscation attempts.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-navy p-8 text-white shadow-xl">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6">Service Pillars</h4>
                  <ul className="text-sm space-y-4 text-steel">
                    <li className="border-b border-white/10 pb-4">AML Program Design & Audit</li>
                    <li className="border-b border-white/10 pb-4">Sanctions Risk Assessment</li>
                    <li className="border-b border-white/10 pb-4">Forensic Data Legal Review</li>
                    <li>Regulatory Liaison Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AMLSanctions;
