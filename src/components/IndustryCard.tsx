import React from 'react';
import { IndustrySignal } from '../data/industrySignals';
import { FiArrowRight } from 'react-icons/fi';
import ResponsiveImage from './ResponsiveImage';
import { imageConfigs } from '../utils/imageOptimization';
import '../styles/industry-signals.css';

interface IndustryCardProps {
  industry: IndustrySignal;
  isActive: boolean;
  onClick: () => void;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry, isActive, onClick }) => {
  return (
    <button
      className={`industry-card-wrapper w-full h-80 rounded-lg shadow-lg ${isActive ? 'is-active' : ''}`}
      onClick={onClick}
      aria-pressed={isActive}
    >
      <div className="industry-card-inner">
        {/* Front of the card */}
        <div className="industry-card-front rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-navy/60 z-10"></div>
          <ResponsiveImage
            src={industry.image}
            alt={industry.title}
            className="industry-card-image"
            sizes={imageConfigs.sectionBackground.sizes}
            decoding="async"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end text-left p-6 text-white">
            <h3 className="font-serif text-2xl">{industry.title}</h3>
            <p className="text-sm text-steel mt-1">{industry.descriptor}</p>
          </div>
          <div
            className={`absolute top-4 right-4 h-3 w-3 rounded-full border-2 transition-colors duration-300 ${
              isActive ? 'bg-gold border-white' : 'bg-transparent border-steel'
            }`}
          ></div>
        </div>

        {/* Back of the card */}
        <div className="industry-card-back rounded-lg bg-navy flex flex-col items-center justify-center p-6">
          <h4 className="font-serif text-white text-xl">Institutional Signals</h4>
          <p className="text-steel text-sm mt-2">Click to view market analysis and governance insights.</p>
          <div className="flex items-center text-gold mt-4 text-sm font-semibold">
            <span>View Details</span>
            <FiArrowRight className="ml-2" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default IndustryCard;