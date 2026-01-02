
import React from 'react';
import AbstractPattern from '../components/AbstractPattern';

const DigitalAssets: React.FC = () => {
  return (
    <div className="fade-in pb-32 relative">
      <AbstractPattern className="inset-0" />
      <section className="py-24 bg-navy text-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-serif mb-8 text-gold">Digital Assets, Stablecoins & Payments</h1>
          <p className="text-xl text-steel leading-relaxed max-w-3xl italic">
            Navigating the legal treatment of tokens, payments law, and the complex insolvency risks of stablecoin ecosystems.
          </p>
        </div>
      </section>

      <section className="py-20 relative bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-slate max-w-none">
                <h3 className="text-2xl font-serif text-navy mb-6 uppercase tracking-tight border-b border-gray-100 pb-4">Asset Classification & Securities Law</h3>
                <p className="text-slate/70 leading-relaxed mb-8">
                  A foundational risk for any token issuer is classification under the Howey Test or local equivalents. We provide formal legal opinions on the regulatory status of utility tokens, governance tokens, and asset-backed digital assets.
                </p>

                <h3 className="text-2xl font-serif text-navy mb-6">Stablecoin Regulatory Structuring</h3>
                <p className="text-slate/70 leading-relaxed mb-8">
                  Advising on the reserve management, audit requirements, and "e-money" status of stablecoins under jurisdictions like the EU (MiCA) and the US. We focus on ensuring reserve transparency and consumer protection compliance.
                </p>

                <div className="bg-offwhite p-10 border-l-4 border-gold my-12">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-navy mb-4">Insolvency & Custody Risks</h4>
                  <p className="text-sm text-slate/70 leading-relaxed italic">
                    In a platform failure scenario, the legal status of custodied assets is paramount. We structure custody agreements that prioritize asset segregation and "bankruptcy remoteness" to protect client interests.
                  </p>
                </div>

                <h3 className="text-2xl font-serif text-navy mb-6">Payment Service Provider (PSP) Law</h3>
                <p className="text-slate/70 leading-relaxed">
                  Integrating digital asset settlement rails into traditional fintech payment flows while navigating multi-state money transmitter licensing requirements.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-offwhite p-8 border border-gray-200 shadow-sm">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6">Legal Standards</h4>
                  <div className="space-y-4">
                    <span className="block text-[9px] font-bold uppercase tracking-widest bg-navy text-white px-3 py-1 w-fit">MiCA Ready</span>
                    <span className="block text-[9px] font-bold uppercase tracking-widest bg-navy text-white px-3 py-1 w-fit">UCC Article 12 Compliance</span>
                    <span className="block text-[9px] font-bold uppercase tracking-widest bg-navy text-white px-3 py-1 w-fit">SEC Safe Harbor Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalAssets;
