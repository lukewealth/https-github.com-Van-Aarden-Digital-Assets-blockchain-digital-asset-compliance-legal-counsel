import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

type Props = { title: string; desc: string };

const RiskCard: React.FC<Props> = ({ title, desc }) => (
  <div className="p-4 border border-gray-200 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex items-center gap-2 mb-2">
      <FiAlertTriangle className="text-gold" />
      <h4 className="text-lg font-serif text-navy">{title}</h4>
    </div>
    <p className="text-sm text-slate/80 leading-relaxed">{desc}</p>
  </div>
);

export default RiskCard;
