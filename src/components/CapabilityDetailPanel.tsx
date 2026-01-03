import React from 'react';
import { Link } from 'react-router-dom';
import { InstitutionalCapability } from '../data/institutionalCapabilities';
import ReferencesDropdown from './ReferencesDropdown';

type Props = {
  capability: InstitutionalCapability;
  panelId?: string;
};

const CapabilityDetailPanel: React.FC<Props> = ({ capability, panelId }) => {
  return (
    <div
      key={capability.id}
      className="capability-panel relative border border-gray-200 rounded-md bg-white shadow-sm"
      id={panelId}
      role="region"
      aria-label={`${capability.title} detail`}
    >
      <span className="absolute inset-y-0 left-0 w-1.5 bg-gold rounded-l-md glow-accent" aria-hidden="true" />
      <div className="p-5 md:p-6 lg:p-7 space-y-4">
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate/60">Institutional Capabilities</p>
          <h3 className="text-xl font-serif text-navy">{capability.title}</h3>
        </div>
        <p className="text-sm md:text-base text-slate/80 leading-relaxed">{capability.expandedText}</p>
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <Link
            to={capability.readMoreHref}
            className="read-more text-gold hover:text-navy transition-colors"
            aria-label={`Read more about ${capability.title} institutional capability`}
          >
            Read more
          </Link>
        </div>
        <ReferencesDropdown sources={capability.sources} />
      </div>
    </div>
  );
};

export default CapabilityDetailPanel;
