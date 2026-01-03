import React from 'react';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import { TeamMember } from '../data/team';

interface TeamCardProps {
  member: TeamMember;
  isVisible: boolean;
  delay: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, isVisible, delay }) => {
  return (
    <div
      className={`team-card ${isVisible ? 'is-visible' : ''} fade-in-up`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="team-card-frame">
        <div className="team-card-image-wrapper">
          <img
            src={member.headshot}
            alt={`Headshot of ${member.name}`}
            className="team-card-image"
            loading="lazy"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl text-navy">{member.name}</h3>
        <p className="text-[10px] uppercase tracking-widest font-semibold text-slate mt-1">{member.role}</p>
        {member.scope && (
          <span className="inline-block bg-gold/10 text-gold text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded-full mt-3">
            {member.scope}
          </span>
        )}
        <p className="text-sm text-slate/80 mt-4 leading-relaxed">{member.bio}</p>
      </div>
      <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center gap-4">
        <a
          href={member.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name}'s LinkedIn profile`}
          className="text-slate/60 hover:text-gold transition-colors"
        >
          <FiLinkedin size={18} />
        </a>
        {member.socials.twitter && (
          <a
            href={member.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s Twitter profile`}
            className="text-slate/60 hover:text-gold transition-colors"
          >
            <FiTwitter size={18} />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;