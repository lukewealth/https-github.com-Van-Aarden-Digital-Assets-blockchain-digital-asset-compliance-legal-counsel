import React, { useEffect, useRef, useState } from 'react';
import { InstitutionalCapability } from '../data/institutionalCapabilities';

type Props = {
  capability: InstitutionalCapability;
  isActive: boolean;
  onSelect: (id: string) => void;
  controlsId?: string;
};

const CapabilityTile: React.FC<Props> = ({ capability, isActive, onSelect, controlsId }) => {
  const tileRef = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = tileRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      ref={tileRef}
      type="button"
      role="button"
      aria-selected={isActive}
      aria-controls={controlsId}
      onClick={() => onSelect(capability.id)}
      className={`capability-tile relative overflow-hidden rounded-md border focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
        isActive ? 'border-gold shadow-lg shadow-black/10 active-tile' : 'border-gold/40 shadow-sm'
      } ${visible ? 'is-visible' : ''}`}
      style={{ backgroundImage: `url(${capability.imageSrc})` }}
    >
      <span className="capability-overlay" aria-hidden="true" />
      <div className="relative z-10 h-full w-full flex flex-col justify-between text-left p-4 sm:p-5">
        <div className="h-[1px] w-full bg-white/10" aria-hidden="true" />
        <div className="space-y-1">
          <h3 className="text-lg font-serif text-white leading-snug">{capability.title}</h3>
          <p className="text-sm text-white/80 leading-relaxed">{capability.subtitle}</p>
        </div>
      </div>
    </button>
  );
};

export default CapabilityTile;
