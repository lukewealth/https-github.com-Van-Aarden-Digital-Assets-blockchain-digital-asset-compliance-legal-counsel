import React from 'react';
import { FiShare2, FiArrowRight } from 'react-icons/fi';

const BottomActionBar: React.FC = () => (
  <div className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 shadow-lg p-4 flex items-center justify-between md:hidden">
    <button className="flex items-center gap-2 text-slate font-semibold">
      <FiShare2 /> Share Brief
    </button>
    <button className="px-4 py-3 bg-gold text-navy text-[11px] uppercase tracking-[0.2em] font-bold rounded-sm flex items-center gap-2">
      Schedule Consultation <FiArrowRight />
    </button>
  </div>
);

export default BottomActionBar;
