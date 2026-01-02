
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="fade-in pb-32">
      <section className="py-24 bg-offwhite">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h1 className="text-5xl font-serif text-navy mb-8">Professional Overview</h1>
            <p className="text-xl text-slate/70 leading-relaxed mb-8">
              I am an independent legal counsel focused exclusively on high-stakes blockchain security, 
              crypto mining operations, and digital asset compliance frameworks. My practice bridges the 
              gap between decentralized innovation and centralized regulatory enforcement.
            </p>
            <p className="text-lg text-slate/60 leading-relaxed">
              With a background in international financial regulation and a deep technical understanding of 
              distributed ledger technology, I advise clients on building 'regulator-ready' infrastructure 
              from the ground up.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center border-l border-gold pl-12">
            <div className="mb-12">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-navy mb-4">Jurisdictions</h4>
              <ul className="text-sm text-slate/70 space-y-2">
                <li>United States</li>
                <li>European Union</li>
                <li>Africa (Emerging Markets)</li>
                <li>Offshore/Cross-Border</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-navy mb-4">Focus</h4>
              <ul className="text-sm text-slate/70 space-y-2">
                <li>SEC/CFTC Enforcement</li>
                <li>MaaS Contract Law</li>
                <li>Institutional Custody</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl font-serif text-navy mb-8">Regulatory Background</h2>
              <p className="text-slate/70 leading-relaxed mb-6">
                Prior to establishing my independent practice, I held senior roles in regulatory advisory firms 
                addressing global financial crime and anti-money laundering (AML) protocols. I have navigated 
                complex enforcement environments across multiple continents, focusing on the integration of 
                institutional banking standards with crypto-native operations.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-navy mb-8">Practice Philosophy</h2>
              <p className="text-slate/70 leading-relaxed">
                We operate on the principle of 'Security by Default.' Legal compliance is not a bolt-on 
                afterthought but a core architectural component of any successful digital asset venture. 
                Our goal is to create scalable legal frameworks that withstand the scrutiny of 
                government agencies and institutional investors alike.
              </p>
            </div>
          </div>

          <div className="mt-32 bg-navy p-16 text-white text-center">
            <h2 className="text-3xl font-serif mb-8 text-gold uppercase tracking-widest">Ethics & Independence</h2>
            <p className="max-w-3xl mx-auto text-steel leading-relaxed mb-12 italic">
              "We maintain absolute independence in our advisory. We do not participate in token launches, 
              mining pools, or crypto-asset promotions. This independence ensures our counsel remains 
              unbiased, strictly legal, and prioritized toward the long-term regulatory resilience of our clients."
            </p>
            <div className="inline-block border-t border-gold pt-6 text-[10px] uppercase tracking-[0.3em] font-bold">
              Strictly Independent Counsel
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
