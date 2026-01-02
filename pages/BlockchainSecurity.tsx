
import React from 'react';
import AbstractPattern from '../components/AbstractPattern';

const BlockchainSecurity: React.FC = () => {
  return (
    <div className="fade-in pb-32 relative">
      <AbstractPattern className="inset-0" />
      <section className="py-24 bg-navy text-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-serif mb-8 text-gold">Blockchain Security & Risk Governance</h1>
          <p className="text-xl text-steel leading-relaxed max-w-3xl italic">
            Advising on the legal implications of protocol-level security, key management, and decentralized governance frameworks.
          </p>
        </div>
      </section>

      <section className="py-20 relative bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-slate max-w-none">
                <h3 className="text-2xl font-serif text-navy mb-6 uppercase tracking-tight border-b border-gray-100 pb-4">Protocol-Level Security Compliance</h3>
                <p className="text-slate/70 leading-relaxed mb-8">
                  As decentralized systems mature, the expectation of "auditable security" becomes a legal mandate. We advise platform maintainers and DAOs on meeting institutional standards for code auditing, formal verification, and disaster recovery planning.
                </p>

                <h3 className="text-2xl font-serif text-navy mb-6">Key Management & Fiduciary Duty</h3>
                <p className="text-slate/70 leading-relaxed mb-8">
                  The handling of administrative keys, multisig participants, and emergency pause functions creates unique fiduciary risks. We structure key management policies to mitigate claims of negligence or breach of duty in the event of an exploit.
                </p>

                <div className="bg-offwhite p-10 border-l-4 border-gold my-12">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-navy mb-4">Focus: Incident Response Protocols</h4>
                  <p className="text-sm text-slate/70 leading-relaxed italic">
                    Legal readiness for an on-chain hack requires more than a technical patch. It requires a pre-determined legal strategy for coordination with law enforcement, asset recovery firms, and insurance providers.
                  </p>
                </div>

                <h3 className="text-2xl font-serif text-navy mb-6">Governance Architecture</h3>
                <p className="text-slate/70 leading-relaxed">
                  Structuring DAO governance to minimize the risk of "unincorporated association" status and ensure that voting mechanisms do not inadvertently trigger securities law violations.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-offwhite p-8 border border-gray-200 shadow-sm">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6">Risk Checkpoints</h4>
                  <ul className="text-sm space-y-4 text-slate/70 font-medium">
                    <li>• Multisig Governance Charter</li>
                    <li>• Smart Contract Audit Legal Review</li>
                    <li>• Key Custody Liability Waiver</li>
                    <li>• DAO Legal Wrapper Analysis</li>
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

export default BlockchainSecurity;
