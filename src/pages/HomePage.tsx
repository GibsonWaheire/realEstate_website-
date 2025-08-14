import { } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import PropertyCard from '@/components/PropertyCard';
import { mockProperties } from '@/data/properties';
const heroImageUrl = 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1920&auto=format&fit=crop';

const HomePage = () => {
  const handleSearch = () => {};

  const featuredProperties = mockProperties.slice(0, 3);

  const stats = [
    { icon: TrendingUp, label: 'Properties Sold', value: '1,200+' },
    { icon: Users, label: 'Happy Clients', value: '850+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Star, label: 'Years Experience', value: '15+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex h-[75vh] items-center justify-center overflow-hidden rounded-b-[2rem]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImageUrl})`
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        {/* Floating Elements */}
        <div className="absolute left-8 top-16 size-16 rounded-full bg-luxury-gold/20 animate-float" />
        <div className="absolute bottom-24 right-20 size-12 rounded-full bg-white/10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute right-16 top-1/3 size-8 rounded-full bg-luxury-gold/30 animate-float" style={{ animationDelay: '4s' }} />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white">
          <div className="mb-2 text-4xl font-serif font-bold text-foreground/30 md:text-6xl">
            Find Your Dream
          </div>
          <h1 className="mb-4 text-5xl font-serif font-bold text-luxury-gold md:text-7xl">
            Luxury Home
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90 md:text-xl">
            Discover exceptional properties in the world's most prestigious locations
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-gradient-gold px-8 font-semibold text-luxury-navy hover:bg-luxury-gold-dark">
              Browse Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-luxury-navy">
              Contact Agent
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-luxury-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-navy mb-4">
                Find Your Perfect Property
              </h2>
              <p className="text-lg text-luxury-gray max-w-2xl mx-auto">
                Use our advanced search to discover properties that match your exact requirements
              </p>
            </div>
            <SearchBar onSearch={handleSearch} className="animate-slide-up" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-luxury-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center text-white animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-luxury-navy" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-navy mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-luxury-gray max-w-2xl mx-auto">
              Handpicked selection of our most exclusive luxury properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property, index) => (
              <div
                key={property.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/properties">
              <Button size="lg" className="bg-gradient-luxury text-white hover:bg-luxury-navy-light">
                View All Properties
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our expert agents guide you through the luxury real estate market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-luxury-gold text-luxury-navy hover:bg-luxury-gold-dark">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-luxury-navy">
              Call (555) 123-LUXURY
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;