
import React from 'react';

const AbstractPattern: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute pointer-events-none overflow-hidden ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.03]">
        <path d="M0 200L800 600M200 0L600 800M400 0V800M0 400H800" stroke="#708090" strokeWidth="0.5" />
        <circle cx="400" cy="400" r="100" stroke="#708090" strokeWidth="0.5" />
        <circle cx="400" cy="400" r="300" stroke="#708090" strokeWidth="0.5" />
        <rect x="100" y="100" width="600" height="600" stroke="#708090" strokeWidth="0.5" />
      </svg>
    </div>
  );
};

export default AbstractPattern;
