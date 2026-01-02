import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  body: string;
  href: string;
};

const RegulatoryBriefCard: React.FC<Props> = ({ title, body, href }) => (
  <div className="bg-navy text-white p-6 rounded-md shadow-sm">
    <p className="text-[11px] uppercase tracking-[0.18em] text-gold mb-2">Regulatory Brief</p>
    <h3 className="text-xl font-serif mb-3">{title}</h3>
    <p className="text-sm text-white/80 leading-relaxed mb-4">{body}</p>
    <Link to={href} className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold">
      Read brief →
    </Link>
  </div>
);

export default RegulatoryBriefCard;
