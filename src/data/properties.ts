export interface Property {
    id: string;
    title: string;
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    images: string[];
    type: string;
    description: string;
    features: string[];
    agent: {
      name: string;
      phone: string;
      email: string;
      image: string;
    };
  }
  
  export const mockProperties: Property[] = [
    {
      id: "1",
      title: "Modern Luxury Villa",
      price: 2850000,
      location: "Beverly Hills, CA",
      bedrooms: 5,
      bathrooms: 6,
      sqft: 4200,
      images: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
      ],
      type: "Villa",
      description: "Stunning contemporary villa with panoramic city views and premium finishes throughout.",
      features: ["Pool", "Garden", "Garage", "Security System", "Smart Home"],
      agent: {
        name: "Sarah Johnson",
        phone: "(555) 123-4567",
        email: "sarah@luxuryestates.com",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=80"
      }
    },
    {
      id: "2",
      title: "Penthouse Downtown",
      price: 1950000,
      location: "Manhattan, NY",
      bedrooms: 3,
      bathrooms: 4,
      sqft: 2800,
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
      ],
      type: "Penthouse",
      description: "Exclusive penthouse with floor-to-ceiling windows and private terrace overlooking Central Park.",
      features: ["Terrace", "Doorman", "Gym", "Concierge", "City Views"],
      agent: {
        name: "Michael Chen",
        phone: "(555) 987-6543",
        email: "michael@luxuryestates.com",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
      }
    },
    {
      id: "3",
      title: "Oceanfront Estate",
      price: 4200000,
      location: "Malibu, CA",
      bedrooms: 6,
      bathrooms: 8,
      sqft: 6500,
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
        "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80"
      ],
      type: "Estate",
      description: "Magnificent oceanfront estate with private beach access and unobstructed Pacific Ocean views.",
      features: ["Private Beach", "Wine Cellar", "Home Theater", "Guest House", "Infinity Pool"],
      agent: {
        name: "Amanda Rodriguez",
        phone: "(555) 456-7890",
        email: "amanda@luxuryestates.com",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
      }
    },
    {
      id: "4",
      title: "Historic Mansion",
      price: 3100000,
      location: "Charleston, SC",
      bedrooms: 7,
      bathrooms: 6,
      sqft: 5200,
      images: [
        "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?w=800&q=80",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&q=80"
      ],
      type: "Mansion",
      description: "Beautifully restored antebellum mansion with original architecture and modern amenities.",
      features: ["Historic Details", "Formal Gardens", "Library", "Wrap-around Porch", "Carriage House"],
      agent: {
        name: "Robert Williams",
        phone: "(555) 321-0987",
        email: "robert@luxuryestates.com",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80"
      }
    },
    {
      id: "5",
      title: "Modern Minimalist Home",
      price: 1450000,
      location: "Austin, TX",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80"
      ],
      type: "House",
      description: "Clean lines and open spaces define this stunning minimalist home in a prime location.",
      features: ["Open Floor Plan", "Solar Panels", "Smart Home", "Chef's Kitchen", "Zen Garden"],
      agent: {
        name: "Lisa Thompson",
        phone: "(555) 654-3210",
        email: "lisa@luxuryestates.com",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80"
      }
    },
    {
      id: "6",
      title: "Lakefront Retreat",
      price: 2250000,
      location: "Lake Tahoe, NV",
      bedrooms: 4,
      bathrooms: 5,
      sqft: 3800,
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
        "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800&q=80",
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&q=80"
      ],
      type: "Cabin",
      description: "Luxury mountain retreat with stunning lake views and premium outdoor amenities.",
      features: ["Lake Access", "Mountain Views", "Fireplace", "Deck", "Hot Tub"],
      agent: {
        name: "David Miller",
        phone: "(555) 789-0123",
        email: "david@luxuryestates.com",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
      }
    }
  ];
  
  export const propertyTypes = ["All", "Villa", "Penthouse", "Estate", "Mansion", "House", "Cabin"];
  
  export const priceRanges = [
    { label: "All Prices", min: 0, max: Infinity },
    { label: "Under $1M", min: 0, max: 1000000 },
    { label: "$1M - $2M", min: 1000000, max: 2000000 },
    { label: "$2M - $3M", min: 2000000, max: 3000000 },
    { label: "$3M - $5M", min: 3000000, max: 5000000 },
    { label: "Over $5M", min: 5000000, max: Infinity }
  ];