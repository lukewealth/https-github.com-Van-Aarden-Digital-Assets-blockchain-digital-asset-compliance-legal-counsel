import React from 'react';
import { Link } from 'react-router-dom';
import { IndustrySignal } from '../data/industrySignals';
import ReferencesDropdown from './ReferencesDropdown';

interface IndustryDetailPanelProps {
  industry: IndustrySignal;
  isActive: boolean;
}

const IndustryDetailPanel: React.FC<IndustryDetailPanelProps> = ({ industry, isActive }) => {
  return (
    <div className={`detail-panel ${isActive ? 'is-active' : ''}`}>
      <div className="detail-panel-frame">
        <div className="p-8 md:p-10 detail-panel-content">
          <h3 className="text-2xl md:text-3xl font-serif text-navy">{industry.title}</h3>
          <p className="text-sm text-slate/80 mt-2">{industry.descriptor}</p>
          <p className="text-base text-slate/90 mt-6 leading-relaxed">{industry.content}</p>
          <Link
            to={industry.route}
            className="text-sm font-bold uppercase tracking-widest text-gold hover:underline mt-6 inline-block"
          >
            Read more on {industry.title}
          </Link>
          <ReferencesDropdown sources={industry.sources} />
        </div>
      </div>
    </div>
  );
};

export default IndustryDetailPanel;