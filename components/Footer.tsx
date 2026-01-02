
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-slate/30 pb-20">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-3xl mb-8 uppercase tracking-tighter">John Doe, Esq.</h3>
            <p className="text-steel text-sm leading-relaxed max-w-sm mb-8">
              Independent counsel for the blockchain infrastructure economy. Benchmarked to BigLaw standards of excellence and security.
            </p>
            <div className="flex space-x-4">
               <span className="text-[9px] uppercase tracking-widest border border-gold/30 px-3 py-1 text-gold">SRA Regulated</span>
               <span className="text-[9px] uppercase tracking-widest border border-gold/30 px-3 py-1 text-gold">SEC Enforcement Ready</span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-8">Advisory</h4>
              <ul className="text-steel text-xs space-y-4 uppercase tracking-widest">
                <li className="hover:text-white cursor-pointer transition-colors">Mining Compliance</li>
                <li className="hover:text-white cursor-pointer transition-colors">AML/Sanctions</li>
                <li className="hover:text-white cursor-pointer transition-colors">Custody Governance</li>
                <li className="hover:text-white cursor-pointer transition-colors">Stablecoin Law</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-8">Institutional</h4>
              <ul className="text-steel text-xs space-y-4 uppercase tracking-widest">
                <li className="hover:text-white cursor-pointer transition-colors">Regulatory Briefings</li>
                <li className="hover:text-white cursor-pointer transition-colors">Legal Memos</li>
                <li className="hover:text-white cursor-pointer transition-colors">Conflict Disclosures</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-8">Firm</h4>
              <ul className="text-steel text-xs space-y-4 uppercase tracking-widest">
                <li className="hover:text-white cursor-pointer transition-colors">Professional Ethics</li>
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Data Protection</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-steel text-[10px] uppercase tracking-widest leading-loose border-b border-slate/20 pb-12">
            <div>
              <h5 className="font-bold text-white mb-4">Jurisdictional Disclosures</h5>
              <p>
                John Doe is admitted to practice in the State of New York and is a registered foreign lawyer in the European Union. 
                International advisory is limited to issues of digital asset classification and cross-border regulatory compliance.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4">Professional Ethics Statement</h5>
              <p>
                Our practice adheres to the highest standards of professional responsibility. We do not accept payment in volatile 
                cryptographic assets for legal fees to prevent conflicts of interest and maintain absolute independence.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-steel text-[10px] uppercase tracking-[0.2em]">
            <span>&copy; {new Date().getFullYear()} John Doe Blockchain Legal Counsel. Prior results do not guarantee similar outcomes.</span>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Attorney Advertising</a>
              <a href="#" className="hover:text-white transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
