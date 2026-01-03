import React, { useEffect } from 'react';
import TeamGrid from '../components/TeamGrid';
import AbstractPattern from '../components/AbstractPattern';
import Seo from '../components/Seo';

const Team: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Team | VDAC';
  }, []);

  return (
    <>
      <Seo
        title="Our Team | VDAC"
        description="Independent counsel and advisory network supporting regulatory-ready digital asset operations."
        ogTitle="Van Aarden Digital Assets Counsel — Our Team"
      />
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-navy text-white text-center py-24 md:py-32 lg:py-40">
          <AbstractPattern className="opacity-10" />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Our Team
            </h1>
            <p className="mt-4 text-base md:text-lg text-steel max-w-3xl mx-auto leading-relaxed">
              Van Aarden Digital Assets Counsel brings together independent legal and regulatory expertise to support compliance, governance, and enforcement readiness across digital asset markets.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] font-semibold text-gold">
              Security-First. Regulator-Ready.
            </p>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <TeamGrid />
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;