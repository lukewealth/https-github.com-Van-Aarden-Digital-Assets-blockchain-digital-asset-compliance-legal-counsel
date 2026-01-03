import React from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../config/brand';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-slate/30 pb-10">
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-2xl md:text-3xl uppercase tracking-tighter">
              {brand.shortName}
            </h3>
            <p className="text-xs uppercase tracking-[0.16em] font-bold text-gold mb-2">
              {brand.legalName}
            </p>
            <p className="text-steel text-sm leading-relaxed max-w-sm">
              Independent legal counsel for blockchain infrastructure, mining compliance, and digital asset governance. Institutional standards. Compliance-first approach.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10 text-sm text-steel">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-4">Advisory Services</h4>
              <ul className="space-y-2 text-xs uppercase tracking-widest leading-relaxed">
                <li><Link to="/expertise" className="hover:text-gold transition-colors">Expertise</Link></li>
                <li><Link to="/institutional-value" className="hover:text-gold transition-colors">Governance</Link></li>
                <li><a href="#mining" className="hover:text-gold transition-colors">Mining Compliance</a></li>
                <li><a href="#aml" className="hover:text-gold transition-colors">AML & Sanctions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-4">Institutional</h4>
              <ul className="space-y-2 text-xs uppercase tracking-widest leading-relaxed">
                <li><Link to="/publications" className="hover:text-gold transition-colors">Publications</Link></li>
                <li><a href="#briefings" className="hover:text-gold transition-colors">Briefings</a></li>
                <li><a href="#insights" className="hover:text-gold transition-colors">Market Signals</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-4">Firm</h4>
              <ul className="space-y-2 text-xs uppercase tracking-widest leading-relaxed">
                <li><Link to="/team" className="hover:text-gold transition-colors">Team</Link></li>
                <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
                <li><a href="#privacy" className="hover:text-gold transition-colors">Privacy</a></li>
                <li><a href="#terms" className="hover:text-gold transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="space-y-6 text-steel text-xs leading-relaxed">
          <div className="border-t border-slate/20 pt-6">
            <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-gold mb-3">
              Attorney Advertising
            </p>
            <p>
              This website is for informational purposes only and does not constitute legal or investment advice. Past results do not guarantee a similar outcome. Consult with qualified counsel for specific legal matters.
            </p>
          </div>
          
          <p>
            {brand.fullDisplay} is an independent legal advisory practice focused on compliance, governance, and regulatory readiness. No investment solicitation, return guarantees, or fund endorsements are provided.
          </p>
          
          <p className="border-t border-slate/20 pt-4">
            © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
