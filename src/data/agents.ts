export interface Agent {
  id: string;
  name: string;
  title: string;
  specialization: string;
  image: string;
  email: string;
  phone: string;
  experience: string;
  propertiesSold: number;
  languages: string[];
  bio: string;
  social: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

export const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    title: 'Senior Luxury Real Estate Specialist',
    specialization: 'Luxury Residential Properties',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop',
    email: 'sarah.mitchell@luxestates.com',
    phone: '+1 (555) 123-4567',
    experience: '12+ Years',
    propertiesSold: 450,
    languages: ['English', 'French', 'Spanish'],
    bio: 'Sarah is a distinguished luxury real estate specialist with over 12 years of experience in high-end residential properties. She has consistently ranked in the top 1% of agents nationwide and specializes in exclusive waterfront estates and historic mansions.',
    social: {
      linkedin: 'https://linkedin.com/in/sarahmitchell',
      instagram: 'https://instagram.com/sarahluxuryrealty',
    }
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'Commercial & Investment Properties Expert',
    specialization: 'Commercial Real Estate',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    email: 'michael.chen@luxestates.com',
    phone: '+1 (555) 234-5678',
    experience: '15+ Years',
    propertiesSold: 320,
    languages: ['English', 'Mandarin', 'Cantonese'],
    bio: 'Michael brings 15 years of expertise in commercial real estate and investment properties. He has facilitated over $500M in commercial transactions and specializes in luxury office buildings, retail spaces, and mixed-use developments.',
    social: {
      linkedin: 'https://linkedin.com/in/michaelchen',
      twitter: 'https://twitter.com/michaelchenre',
    }
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    title: 'International Luxury Properties Advisor',
    specialization: 'International Properties',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    email: 'elena.rodriguez@luxestates.com',
    phone: '+1 (555) 345-6789',
    experience: '10+ Years',
    propertiesSold: 280,
    languages: ['English', 'Spanish', 'Portuguese', 'Italian'],
    bio: 'Elena specializes in international luxury properties and cross-border real estate transactions. Her multilingual abilities and global network make her the go-to agent for international clients seeking premium properties.',
    social: {
      linkedin: 'https://linkedin.com/in/elenarodriguez',
      instagram: 'https://instagram.com/elenaluxuryproperties',
    }
  },
  {
    id: '4',
    name: 'James Thompson',
    title: 'Luxury Estate & Ranch Specialist',
    specialization: 'Estate Properties',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    email: 'james.thompson@luxestates.com',
    phone: '+1 (555) 456-7890',
    experience: '18+ Years',
    propertiesSold: 380,
    languages: ['English'],
    bio: 'James is our premier estate and ranch specialist with 18 years of experience in luxury rural properties. He has an extensive knowledge of equestrian estates, vineyards, and large acreage properties throughout the region.',
    social: {
      linkedin: 'https://linkedin.com/in/jamesthompson',
    }
  },
  {
    id: '5',
    name: 'Sophia Kim',
    title: 'Modern Luxury & New Construction Expert',
    specialization: 'New Construction',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    email: 'sophia.kim@luxestates.com',
    phone: '+1 (555) 567-8901',
    experience: '8+ Years',
    propertiesSold: 220,
    languages: ['English', 'Korean'],
    bio: 'Sophia specializes in modern luxury homes and new construction properties. Her keen eye for contemporary design and strong relationships with luxury builders make her the perfect choice for clients seeking cutting-edge properties.',
    social: {
      linkedin: 'https://linkedin.com/in/sophiakim',
      instagram: 'https://instagram.com/sophiamodernluxury',
    }
  },
  {
    id: '6',
    name: 'David Wilson',
    title: 'Luxury Condominium Specialist',
    specialization: 'Luxury Condominiums',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    email: 'david.wilson@luxestates.com',
    phone: '+1 (555) 678-9012',
    experience: '14+ Years',
    propertiesSold: 340,
    languages: ['English', 'German'],
    bio: 'David is our luxury condominium expert with 14 years of experience in high-rise luxury living. He has intimate knowledge of the finest buildings and penthouses in the city and maintains relationships with the most exclusive developments.',
    social: {
      linkedin: 'https://linkedin.com/in/davidwilson',
    }
  }
];
