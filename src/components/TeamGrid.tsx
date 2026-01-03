import React, { useState, useEffect, useRef } from 'react';
import { teamMembers } from '../data/team';
import TeamCard from './TeamCard';
import '../styles/team.css';

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((observerEntries) => {
      setEntries(observerEntries);
    }, options);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [options]);

  return [observer.current, entries] as const;
};


const TeamGrid: React.FC = () => {
  const [observer, entries] = useIntersectionObserver({ threshold: 0.1 });
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const currentRefs = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);
    if (observer) {
      currentRefs.forEach(ref => observer.observe(ref));
    }
    return () => {
      if (observer) {
        currentRefs.forEach(ref => observer.unobserve(ref));
      }
    };
  }, [observer]);

  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cardId = entry.target.getAttribute('data-id');
        if (cardId) {
          setVisibleCards(prev => new Set(prev).add(cardId));
        }
      }
    });
  }, [entries]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
      {teamMembers.map((member, index) => (
        <div
          key={member.name}
          ref={el => cardRefs.current[index] = el}
          data-id={member.name}
        >
          <TeamCard
            member={member}
            isVisible={visibleCards.has(member.name)}
            delay={index * 80}
          />
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;