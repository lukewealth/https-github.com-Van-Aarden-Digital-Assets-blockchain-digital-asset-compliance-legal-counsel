
import React from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../src/config/brand';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-slate/30 pb-20">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-3xl mb-8 uppercase tracking-tighter">{brand.shortName}</h3>
            <p className="text-xs uppercase tracking-[0.16em] font-bold text-gold mb-4">
              {brand.legalName}
            </p>
            <p className="text-steel text-sm leading-relaxed max-w-sm mb-8">
              Independent counsel for blockchain infrastructure, mining compliance, and digital asset governance. Institutional standards. Compliance-first approach.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-8">Advisory Services</h4>
              <ul className="text-steel text-xs space-y-4 uppercase tracking-widest">
                <li><Link to="/expertise" className="hover:text-white transition-colors">Expertise</Link></li>
                <li><Link to="/institutional-value" className="hover:text-white transition-colors">Governance</Link></li>
                <li><a href="#mining" className="hover:text-white transition-colors">Mining Compliance</a></li>
                <li><a href="#aml" className="hover:text-white transition-colors">AML & Sanctions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-8">Institutional</h4>
              <ul className="text-steel text-xs space-y-4 uppercase tracking-widest">
                <li><Link to="/publications" className="hover:text-white transition-colors">Publications</Link></li>
                <li><a href="#briefings" className="hover:text-white transition-colors">Briefings</a></li>
                <li><a href="#insights" className="hover:text-white transition-colors">Market Signals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-8">Firm</h4>
              <ul className="text-steel text-xs space-y-4 uppercase tracking-widest">
                <li><Link to="/team" className="hover:text-white transition-colors">Team</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#legal" className="hover:text-white transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-steel text-[10px] uppercase tracking-widest leading-loose border-b border-slate/20 pb-12">
            <div>
              <h5 className="font-bold text-white mb-4">Legal Disclaimer</h5>
              <p>
                This website is for informational purposes only and does not constitute legal or investment advice. Past results do not guarantee similar outcomes. Consult with qualified counsel for specific legal matters.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4">Professional Standards</h5>
              <p>
                {brand.fullDisplay} is an independent legal advisory practice focused on compliance, governance, and regulatory readiness. No investment solicitation, return guarantees, or fund endorsements are provided.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-steel text-[10px] uppercase tracking-[0.2em]">
            <span>&copy; {new Date().getFullYear()} {brand.legalName}. All rights reserved.</span>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#attorney-advertising" className="hover:text-white transition-colors">Attorney Advertising</a>
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
