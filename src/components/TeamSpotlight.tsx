import React from 'react';
import { team } from '../data/team';
import ResponsiveImage from './ResponsiveImage';
import { imageConfigs } from '../utils/imageOptimization';

const TeamSpotlight: React.FC = () => {
  const featured = team.slice(0, 3);
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-serif text-navy">Team Spotlight</h2>
          <a href="/team" className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold">View Team</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((member) => (
            <div key={member.id} className="p-4 border border-gray-200 bg-offwhite shadow-sm rounded-sm">
              <div className="relative w-full pt-[75%] mb-4 overflow-hidden rounded-sm">
                <ResponsiveImage
                  src={member.image}
                  alt={member.alt || ''}
                  className="absolute inset-0 w-full h-full object-cover"
                  sizes={imageConfigs.teamHeadshot.sizes}
                  decoding="async"
                />
              </div>
              <h3 className="text-lg font-serif text-navy">{member.name}</h3>
              <p className="text-xs uppercase tracking-[0.18em] text-slate/70 mb-2">{member.role}</p>
              <p className="text-sm text-slate/80 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSpotlight;
