import React from 'react';
import { FiShield, FiCheckCircle, FiCompass } from 'react-icons/fi';

type Props = {
  title: string;
  desc: string;
  variant?: 'compliance' | 'security' | 'ready';
};

const PillarCard: React.FC<Props> = ({ title, desc, variant = 'compliance' }) => {
  const icon = variant === 'security' ? <FiShield /> : variant === 'ready' ? <FiCompass /> : <FiCheckCircle />;
  return (
    <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="h-full w-1 bg-gold rounded-full" aria-hidden="true"></div>
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-serif text-navy">{title}</h3>
          <span className="text-steel">{icon}</span>
        </div>
        <p className="text-sm text-slate/80 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default PillarCard;
