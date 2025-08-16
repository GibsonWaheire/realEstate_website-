export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company?: string;
  avatar: string;
  rating: number;
  review: string;
  propertyType: string;
  location: string;
  date: string;
  verified: boolean;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alexandra Sterling',
    title: 'Tech Entrepreneur',
    company: 'Sterling Innovations',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    review: 'Working with LuxEstates was an absolute pleasure. Their team found us the perfect penthouse in Manhattan that exceeded all our expectations. The attention to detail and personalized service was outstanding. Sarah guided us through every step of the process with professionalism and expertise.',
    propertyType: 'Luxury Penthouse',
    location: 'Manhattan, NY',
    date: '2024-01-10',
    verified: true,
    featured: true
  },
  {
    id: '2',
    name: 'Robert Chen',
    title: 'Investment Fund Manager',
    company: 'Meridian Capital',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    review: 'LuxEstates helped us acquire multiple luxury properties for our portfolio. Their market knowledge and negotiation skills saved us millions. The team understands the luxury market like no other agency. Highly recommend for serious investors.',
    propertyType: 'Investment Portfolio',
    location: 'Beverly Hills, CA',
    date: '2023-12-15',
    verified: true,
    featured: true
  },
  {
    id: '3',
    name: 'Isabella Rodriguez',
    title: 'Film Producer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    review: 'The team at LuxEstates made our dream home a reality. From the initial consultation to closing day, everything was seamless. They understood our vision and found properties that matched our lifestyle perfectly. Exceptional service and results.',
    propertyType: 'Modern Estate',
    location: 'Malibu, CA',
    date: '2023-11-28',
    verified: true,
    featured: true
  },
  {
    id: '4',
    name: 'James Wellington',
    title: 'Private Equity Partner',
    company: 'Wellington & Associates',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    review: 'Outstanding service from start to finish. LuxEstates handled the sale of our estate with complete professionalism. They achieved a price well above market expectations and made the entire process stress-free. True luxury service.',
    propertyType: 'Historic Estate',
    location: 'Hamptons, NY',
    date: '2023-10-20',
    verified: true,
    featured: false
  },
  {
    id: '5',
    name: 'Sofia Andersson',
    title: 'Fashion Designer',
    company: 'Andersson Couture',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    review: 'Incredible experience working with the LuxEstates team. They found us a stunning contemporary home that perfectly suits our aesthetic. The agent was knowledgeable, patient, and truly cared about finding the right fit for our family.',
    propertyType: 'Contemporary Home',
    location: 'Miami, FL',
    date: '2023-09-12',
    verified: true,
    featured: false
  },
  {
    id: '6',
    name: 'Michael Thompson',
    title: 'Hedge Fund CEO',
    company: 'Thompson Capital',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    review: 'LuxEstates delivered exceptional results. Their deep understanding of luxury markets and personalized approach set them apart. They helped us secure a prime waterfront property in a highly competitive market. Highly professional team.',
    propertyType: 'Waterfront Villa',
    location: 'Lake Tahoe, CA',
    date: '2023-08-05',
    verified: true,
    featured: false
  },
  {
    id: '7',
    name: 'Emma Richardson',
    title: 'Art Collector',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    review: 'Working with LuxEstates was a delightful experience. They understood our need for a home that could showcase our art collection. The team was attentive, knowledgeable, and found us the perfect gallery-style residence.',
    propertyType: 'Gallery Residence',
    location: 'SoHo, NY',
    date: '2023-07-18',
    verified: true,
    featured: false
  },
  {
    id: '8',
    name: 'David Kim',
    title: 'Tech Executive',
    company: 'Innovation Labs',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    review: 'The LuxEstates team exceeded our expectations in every way. Their market expertise and dedication to client satisfaction is unmatched. They helped us navigate a complex international purchase with ease and professionalism.',
    propertyType: 'Smart Home',
    location: 'Silicon Valley, CA',
    date: '2023-06-30',
    verified: true,
    featured: false
  }
];
