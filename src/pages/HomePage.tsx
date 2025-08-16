import * as React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import PropertyCard from '@/components/PropertyCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import { mockProperties } from '@/data/properties';
const heroImages = [
  'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop',
]

const HomePage = () => {
  const handleSearch = () => {};

  const [slide, setSlide] = React.useState(0)
  React.useEffect(() => {
    // Preload next images
    heroImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

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
      <section className="relative flex h-[82vh] items-center justify-center overflow-hidden">
        {/* Slideshow */}
        {heroImages.map((src, idx) => (
          <div
            key={src}
            className={
              'absolute inset-0 bg-cover bg-center will-change-transform kenburns transition-opacity duration-1000 ease-out ' +
              (idx === slide ? 'opacity-100' : 'opacity-0')
            }
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden={idx !== slide}
          />
        ))}
        {/* Readability overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70" />
        
        {/* Floating Elements */}
        <div className="absolute left-8 top-16 size-16 rounded-full bg-luxury-gold/20 animate-float" />
        <div className="absolute bottom-24 right-20 size-12 rounded-full bg-white/10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute right-16 top-1/3 size-8 rounded-full bg-luxury-gold/30 animate-float" style={{ animationDelay: '4s' }} />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white">
          <div className="mb-3 animate-[fade-up_0.7s_ease-out_forwards] text-5xl font-serif font-bold text-white/30 md:text-7xl">
            Find Your Dream
          </div>
          <h1 className="typewriter mx-auto mb-5 max-w-[20ch] text-6xl font-serif font-bold text-luxury-gold md:text-8xl">
            Luxury Home
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90 md:text-xl">
            Discover exceptional properties in the world's most prestigious locations
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="gold" className="group relative overflow-hidden rounded-full px-10 py-6 text-base md:text-lg font-semibold text-slate-900 shadow-xl transition-transform duration-300 hover:scale-105 active:scale-100">
              <Link to="/properties">
                <span className="relative z-10 flex items-center">
                  Browse Properties
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
                <span className="pointer-events-none absolute inset-0 -left-full z-0 h-full w-1/2 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="gold" className="group relative overflow-hidden rounded-full px-10 py-6 text-base md:text-lg font-semibold text-slate-900 shadow-xl transition-transform duration-300 hover:scale-105 active:scale-100">
              <a href="tel:+1555123LUXURY">
                <span className="relative z-10">Call (555) 123-LUXURY</span>
                <span className="pointer-events-none absolute inset-0 -left-full z-0 h-full w-1/2 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="bounce-slow absolute bottom-8 left-1/2 -translate-x-1/2">
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
      <section className="bg-luxury-navy py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center text-white ring-1 ring-white/10 transition-all duration-300 animate-fade-in hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Shine sweep */}
                <span className="pointer-events-none absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/10 opacity-0 blur-lg transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

                {/* Icon */}
                <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 text-luxury-navy shadow-md transition-transform duration-300 group-hover:scale-110">
                  <stat.icon className="h-8 w-8" />
                </div>

                {/* Value */}
                <div className="mb-1 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>

                {/* Accent bar */}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
            <Button
              asChild
              size="lg"
              variant="gold"
              className="group relative rounded-full px-8 py-4 font-semibold text-slate-900 shadow-xl"
            >
              <Link to="/properties">
                <span className="relative z-10 inline-flex items-center">
                  View All Properties
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
                <span className="pointer-events-none absolute inset-0 -left-full z-0 h-full w-1/2 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

    </div>
  );
};

export default HomePage;