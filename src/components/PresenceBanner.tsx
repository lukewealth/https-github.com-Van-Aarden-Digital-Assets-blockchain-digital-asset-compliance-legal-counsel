import React from 'react';
import globalInfra from '@/assets/backgrounds/global-infrastructure.webp';

const PresenceBanner: React.FC = () => (
  <div
    className="presence-banner rounded-md overflow-hidden"
    style={{ backgroundImage: `url(${globalInfra})` }}
  >
    <div className="p-6 text-center text-white space-y-1">
      <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Global Presence</p>
      <h3 className="text-xl font-serif">New York · London · Singapore</h3>
    </div>
  </div>
);

export default PresenceBanner;
