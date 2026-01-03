import React, { useState } from 'react';
import { FiChevronDown, FiExternalLink } from 'react-icons/fi';
import { SignalSource } from '../data/industrySignals';

interface ReferencesDropdownProps {
  sources: SignalSource[];
}

const ReferencesDropdown: React.FC<ReferencesDropdownProps> = ({ sources }) => {
  const [isOpen, setIsOpen] = useState(false);
  const disclaimer =
    'External references are provided for informational purposes only and do not constitute endorsement, legal advice, or investment solicitation. VDAC does not guarantee returns.';

  return (
    <div className="border-t border-gray-200 mt-6 pt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="references-content"
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold text-slate">Sources & References</span>
        <FiChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        id="references-content"
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pt-4' : 'max-h-0'}`}
      >
        <div className="space-y-3">
          {sources.map((source) => (
            <a
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-slate/80 hover:text-gold group"
            >
              <span className="truncate">{source.name}</span>
              <FiExternalLink className="ml-2 flex-shrink-0 opacity-50 group-hover:opacity-100" />
            </a>
          ))}
        </div>
        <p className="text-xs text-slate/60 mt-4 italic">{disclaimer}</p>
      </div>
    </div>
  );
};

export default ReferencesDropdown;