
import React from 'react';

const MiningCompliance: React.FC = () => {
  return (
    <div className="fade-in pb-32">
      <section className="py-24 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-serif mb-8">Crypto Mining & MaaS Compliance</h1>
          <p className="text-xl text-steel leading-relaxed max-w-3xl">
            Advising mining operators and infrastructure investors on the shift from unregulated 'hobby' activity to critical financial infrastructure.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-16">
              
              <div className="prose prose-slate max-w-none">
                <section>
                  <h3 className="text-2xl font-serif text-navy mb-6 uppercase tracking-tight">Regulatory Classification of Mining Activities</h3>
                  <p className="text-slate/70 leading-relaxed mb-6">
                    A primary legal challenge for miners is determining whether their activity constitutes 'money transmission' or a 'financial service'. While direct mining (ledger maintenance) is generally excluded from BSA/AML obligations for the miner themselves, the <strong>custodial pooling</strong> of rewards and <strong>third-party hosting</strong> often trigger regulatory touchpoints.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-serif text-navy mb-6">PoW vs PoS: Legal Implications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-offwhite p-6 border border-gray-100">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Proof-of-Work (PoW)</h4>
                      <p className="text-xs text-slate/60 leading-relaxed">Generally classified as commodity production. Legal focus remains on energy procurement, hardware supply chains, and ESG disclosures.</p>
                    </div>
                    <div className="bg-offwhite p-6 border border-gray-100">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Proof-of-Stake (PoS)</h4>
                      <p className="text-xs text-slate/60 leading-relaxed">Increasing scrutiny under the 'Howey' Test. Validation services may be viewed as providing 'Investment Contracts' if marketed to retail investors.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-serif text-navy mb-6">MaaS & Hosting Contractual Safeguards</h3>
                  <p className="text-slate/70 leading-relaxed mb-6">
                    Mining-as-a-Service (MaaS) platforms must be structured to avoid being classified as unregistered securities offerings. We draft service agreements that clearly define the 'technical' nature of the service, ensuring that clients maintain ultimate control over their hardware and rewards.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-serif text-navy mb-6">AML/KYC for Mined Asset Flows</h3>
                  <p className="text-slate/70 leading-relaxed mb-6">
                    As regulators focus on the 'origin of funds', miners must be prepared to prove that their coins are 'virgin' (newly minted) and not comingled with tainted assets. This requires robust blockchain analytics and transaction monitoring at the pool-payout level.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-serif text-navy mb-6">Energy Procurement & ESG Compliance</h3>
                  <p className="text-slate/70 leading-relaxed">
                    Institutional capital requires ESG-compliant mining operations. We advise on Power Purchase Agreements (PPAs) that utilize renewable energy credits (RECs) and structure operations to meet the rigorous disclosure standards required by private equity and public markets.
                  </p>
                </section>
              </div>

              <div className="border border-gray-200 p-10 bg-offwhite">
                <h3 className="text-2xl font-serif text-navy mb-8">Mining Compliance Framework</h3>
                <div className="space-y-6">
                  {[
                    { label: "Entity Segregation", detail: "Structuring OpCo/PropCo to isolate environmental and operational liabilities." },
                    { label: "Broker Exposure", detail: "Ensuring pool participation doesn't trigger SEC Broker-Dealer registration." },
                    { label: "Sanctions Geofencing", detail: "Implementing IP and wallet-level blocking for OFAC-restricted regions." },
                    { label: "UCC Security Interests", detail: "Perfecting liens on hardware and mined assets for lenders." },
                    { label: "Cross-Border Tax", detail: "Advising on the jurisdictional treatment of 'mined income' vs 'capital gains'." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="mt-1 w-5 h-5 border border-gold flex items-center justify-center mr-6 flex-shrink-0">
                        <div className="w-2 h-2 bg-gold"></div>
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-navy uppercase tracking-widest mb-1">{item.label}</h5>
                        <p className="text-xs text-slate/60">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-navy p-8 text-white">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6">Infrastructure Advisory</h4>
                  <ul className="text-sm space-y-4 text-steel">
                    <li className="border-b border-steel/20 pb-4 italic">Colocation & Hosting Agreements</li>
                    <li className="border-b border-steel/20 pb-4 italic">ASIC Purchase & Financing</li>
                    <li className="border-b border-steel/20 pb-4 italic">Pool Operator Governance</li>
                    <li className="italic">ESG Reporting for Miners</li>
                  </ul>
                </div>
                <div className="p-8 border border-gray-200 text-center">
                  <p className="text-xs text-slate/50 mb-6 uppercase tracking-widest">Regulatory Readiness Audit</p>
                  <button className="w-full bg-gold text-navy text-xs uppercase tracking-widest font-bold py-5 hover:bg-navy hover:text-white transition-all">
                    Request Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiningCompliance;
