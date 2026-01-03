import React, { useMemo, useState } from 'react';
import CapabilityTile from './CapabilityTile';
import CapabilityDetailPanel from './CapabilityDetailPanel';
import { institutionalCapabilities } from '../data/institutionalCapabilities';

const InstitutionalCapabilitiesSection: React.FC = () => {
  const [activeId, setActiveId] = useState(institutionalCapabilities[0]?.id);
  const panelId = 'institutional-capability-panel';

  const activeCapability = useMemo(() => {
    return institutionalCapabilities.find((cap) => cap.id === activeId) ?? institutionalCapabilities[0];
  }, [activeId]);

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-200 pt-12 pb-14 md:pt-14 md:pb-20 space-y-8">
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate/60">Authority &amp; Trust Extensions</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <h2 className="text-2xl md:text-3xl font-serif text-navy">Institutional Capabilities</h2>
              <p className="text-sm text-slate/70 max-w-2xl">
                Selector-led view into the institutional capabilities we deliver for regulators, counterparties, and infrastructure partners.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
            {institutionalCapabilities.map((capability) => (
              <CapabilityTile
                key={capability.id}
                capability={capability}
                isActive={activeCapability?.id === capability.id}
                onSelect={setActiveId}
                controlsId={panelId}
              />
            ))}
          </div>

          {activeCapability && (
            <div className="relative">
              <CapabilityDetailPanel capability={activeCapability} panelId={panelId} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InstitutionalCapabilitiesSection;
