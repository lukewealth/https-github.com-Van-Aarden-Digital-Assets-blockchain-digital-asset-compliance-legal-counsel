import eliseVanAarden from '@/assets/team/elise-van-aarden-headshot.webp';
import martinKeller from '@/assets/team/martin-keller-headshot.webp';
import lukasReinhardt from '@/assets/team/lukas-reinhardt-headshot.png';
import sofiaLindstrom from '@/assets/team/sofia-lindstrom-headshot.png';
import ellenFreshman from '@/assets/team/ellen-freshman.png';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  headshot: string;
  image?: string;
  alt?: string;
  bio: string;
  scope?: string;
  socials: {
    linkedin: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 'elise-van-aarden',
    name: 'Dr. Elise Van Aarden',
    role: 'Founding Partner & General Counsel',
    headshot: eliseVanAarden,
    image: eliseVanAarden,
    alt: 'Dr. Elise Van Aarden',
    bio: 'Advises institutional clients on the strategic implications of digital asset regulation, enforcement, and global compliance.',
    socials: {
      linkedin: 'https://linkedin.com/in/elise-van-aarden',
    },
  },
  {
    id: 'martin-keller',
    name: 'Martin Keller',
    role: 'Senior Counsel, AML & Sanctions',
    headshot: martinKeller,
    image: martinKeller,
    alt: 'Martin Keller',
    bio: 'Focuses on financial crime compliance, guiding clients through AML/CFT frameworks and sanctions protocols.',
    socials: {
      linkedin: 'https://linkedin.com/in/martin-keller',
    },
  },
  {
    id: 'lukas-reinhardt',
    name: 'Lukas Reinhardt',
    role: 'Technical Advisor, Mining & Staking',
    headshot: lukasReinhardt,
    image: lukasReinhardt,
    alt: 'Lukas Reinhardt',
    bio: 'Provides due diligence on mining infrastructure, staking operations, and protocol-level security risks.',
    scope: 'Independent Advisor',
    socials: {
      linkedin: 'https://linkedin.com/in/lukas-reinhardt',
      twitter: 'https://x.com/lukas_reinhardt',
    },
  },
  {
    id: 'sofia-lindstrom',
    name: 'Sofia Lindström',
    role: 'Counsel, European Regulatory Affairs',
    headshot: sofiaLindstrom,
    image: sofiaLindstrom,
    alt: 'Sofia Lindström',
    bio: 'Specializes in EU frameworks including MiCA, DORA, and GDPR, ensuring client readiness for European market entry.',
    socials: {
      linkedin: 'https://linkedin.com/in/sofia-lindstrom',
    },
  },
  {
    id: 'ellen-freshman',
    name: 'Ellen Freshman',
    role: 'Compliance Paralegal',
    headshot: ellenFreshman,
    image: ellenFreshman,
    alt: 'Ellen Freshman',
    bio: 'Supports the practice with regulatory filings, due diligence documentation, and corporate governance records.',
    socials: {
      linkedin: 'https://linkedin.com/in/ellen-freshman',
    },
  },
];

export const team = teamMembers;