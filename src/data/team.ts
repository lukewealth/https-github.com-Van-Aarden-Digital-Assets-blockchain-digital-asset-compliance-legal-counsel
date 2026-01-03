import eliseVanAarden from '../assets/team/elise-van-aarden-headshot.webp';
import martinKeller from '../assets/team/martin-keller-headshot.webp';
import lukasReinhardt from '../assets/team/lukas-reinhardt-headshot.png';
import sofiaLindstrom from '../assets/team/sofia-lindstrom-headshot.png';
import ellenFreshman from '../assets/team/ellen-freshman.png';

export interface TeamMember {
  name: string;
  role: string;
  headshot: string;
  bio: string;
  scope?: string;
  socials: {
    linkedin: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Elise Van Aarden',
    role: 'Founding Partner & General Counsel',
    headshot: eliseVanAarden,
    bio: 'Advises institutional clients on the strategic implications of digital asset regulation, enforcement, and global compliance.',
    socials: {
      linkedin: 'https://linkedin.com/in/elise-van-aarden',
    },
  },
  {
    name: 'Martin Keller',
    role: 'Senior Counsel, AML & Sanctions',
    headshot: martinKeller,
    bio: 'Focuses on financial crime compliance, guiding clients through AML/CFT frameworks and sanctions protocols.',
    socials: {
      linkedin: 'https://linkedin.com/in/martin-keller',
    },
  },
  {
    name: 'Lukas Reinhardt',
    role: 'Technical Advisor, Mining & Staking',
    headshot: lukasReinhardt,
    bio: 'Provides due diligence on mining infrastructure, staking operations, and protocol-level security risks.',
    scope: 'Independent Advisor',
    socials: {
      linkedin: 'https://linkedin.com/in/lukas-reinhardt',
      twitter: 'https://x.com/lukas_reinhardt',
    },
  },
  {
    name: 'Sofia Lindström',
    role: 'Counsel, European Regulatory Affairs',
    headshot: sofiaLindstrom,
    bio: 'Specializes in EU frameworks including MiCA, DORA, and GDPR, ensuring client readiness for European market entry.',
    socials: {
      linkedin: 'https://linkedin.com/in/sofia-lindstrom',
    },
  },
  {
    name: 'Ellen Freshman',
    role: 'Compliance Paralegal',
    headshot: ellenFreshman,
    bio: 'Supports the practice with regulatory filings, due diligence documentation, and corporate governance records.',
    socials: {
      linkedin: 'https://linkedin.com/in/ellen-freshman',
    },
  },
];