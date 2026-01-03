import React, { useState, useMemo } from 'react';
import { industrySignals } from '../data/industrySignals';
import IndustryCard from './IndustryCard';
import IndustryDetailPanel from './IndustryDetailPanel';

const IndustrySignalsSection: React.FC = () => {
  const [activeSignalId, setActiveSignalId] = useState<string>(industrySignals[0].id);

  const activeSignal = useMemo(() => {
    return industrySignals.find(s => s.id === activeSignalId) || industrySignals[0];
  }, [activeSignalId]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-navy">Institutional Market Signals</h2>
          <p className="text-base md:text-lg text-slate/80 mt-4 leading-relaxed">
            Tracking digital asset adoption across core infrastructure sectors. We provide legal and regulatory counsel for institutions navigating the intersection of traditional assets and blockchain technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industrySignals.map(signal => (
            <IndustryCard
              key={signal.id}
              industry={signal}
              isActive={signal.id === activeSignalId}
              onClick={() => setActiveSignalId(signal.id)}
            />
          ))}
        </div>

        <div className="mt-12">
          <IndustryDetailPanel industry={activeSignal} isActive={true} />
        </div>
      </div>
    </section>
  );
};

export default IndustrySignalsSection;