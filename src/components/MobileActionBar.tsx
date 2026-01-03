import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail } from 'react-icons/fi';
import { brand } from '../config/brand';

const MobileActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-40">
      <div className="grid grid-cols-3 gap-0">
        {/* Call Button */}
        <a
          href={`tel:${brand.contactPhone}`}
          className="flex flex-col items-center justify-center py-4 px-3 hover:bg-gold/5 transition-colors border-r border-gray-200 last:border-r-0"
          aria-label="Call firm"
        >
          <FiPhone className="w-5 h-5 text-slate mb-1" />
          <span className="text-[9px] uppercase tracking-[0.1em] font-bold text-slate text-center">Call</span>
        </a>

        {/* Email Button */}
        <a
          href={`mailto:${brand.contactEmail}`}
          className="flex flex-col items-center justify-center py-4 px-3 hover:bg-gold/5 transition-colors border-r border-gray-200 last:border-r-0"
          aria-label="Send email"
        >
          <FiMail className="w-5 h-5 text-slate mb-1" />
          <span className="text-[9px] uppercase tracking-[0.1em] font-bold text-slate text-center">Email</span>
        </a>

        {/* Contact Firm Button (Primary) */}
        <Link
          to="/contact"
          className="flex flex-col items-center justify-center py-4 px-3 bg-gold/10 hover:bg-gold/20 transition-colors"
          aria-label="Contact firm"
        >
          <span className="w-5 h-5 text-gold mb-1 flex items-center justify-center">
            ✉
          </span>
          <span className="text-[9px] uppercase tracking-[0.1em] font-bold text-gold text-center">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileActionBar;
