import React from 'react';
import { brand } from '../config/brand';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-slate/30 pb-10">
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-3xl uppercase tracking-tighter">{brand.legalName}</h3>
            <p className="text-steel text-sm leading-relaxed max-w-sm">
              Independent counsel for the blockchain infrastructure economy. Benchmarked to BigLaw standards of excellence and security.
            </p>
            <div className="flex space-x-4">
              <span className="text-[9px] uppercase tracking-widest border border-gold/30 px-3 py-1 text-gold">SRA Regulated</span>
              <span className="text-[9px] uppercase tracking-widest border border-gold/30 px-3 py-1 text-gold">SEC Enforcement Ready</span>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10 text-sm text-steel">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-4">Advisory</h4>
              <ul className="space-y-3 uppercase tracking-widest text-xs">
                <li>Mining Compliance</li>
                <li>AML/Sanctions</li>
                <li>Custody Governance</li>
                <li>Stablecoin Law</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-4">Institutional</h4>
              <ul className="space-y-3 uppercase tracking-widest text-xs">
                <li>Regulatory Briefings</li>
                <li>Legal Memos</li>
                <li>Conflict Disclosures</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-4">Firm</h4>
              <ul className="space-y-3 uppercase tracking-widest text-xs">
                <li>
                  <a href="/team" className="hover:text-white transition-colors">Team</a>
                </li>
                <li>Professional Ethics</li>
                <li>Privacy Policy</li>
                <li>Data Protection</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-steel text-[11px] uppercase tracking-[0.2em] space-y-4">
          <p>© {new Date().getFullYear()} {brand.legalName}. Prior results do not guarantee similar outcomes.</p>
          <p>{brand.legalName} (VDAC) is an independent legal advisory practice focused on compliance, governance, and regulatory readiness. No investment solicitation or return guarantees are provided.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
