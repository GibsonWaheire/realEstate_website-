import * as React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Trophy, Target, Users, TrendingUp, Award, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with the highest ethical standards, ensuring transparency and honesty in every transaction.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for luxury real estate drives us to go above and beyond for every client.'
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'We strive for perfection in everything we do, from service delivery to client satisfaction.'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'We are committed to achieving the best possible outcomes for our clients, every time.'
    }
  ];

  const milestones = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'LuxEstates was established with a vision to redefine luxury real estate services.'
    },
    {
      year: '2012',
      title: 'First $100M Year',
      description: 'Achieved our first $100 million in annual sales, establishing our market presence.'
    },
    {
      year: '2016',
      title: 'International Expansion',
      description: 'Expanded our services internationally, connecting global clients with luxury properties.'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Launched cutting-edge virtual tour technology and digital marketing solutions.'
    },
    {
      year: '2023',
      title: '$2.5B+ in Sales',
      description: 'Surpassed $2.5 billion in total sales volume, cementing our industry leadership.'
    }
  ];

  const stats = [
    { icon: TrendingUp, label: 'Total Sales Volume', value: '$2.5B+' },
    { icon: Users, label: 'Happy Clients', value: '2,500+' },
    { icon: Award, label: 'Industry Awards', value: '45+' },
    { icon: Star, label: 'Years of Excellence', value: '15+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-luxury-navy via-luxury-navy-light to-luxury-navy py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Floating decorative elements */}
        <div className="absolute left-8 top-16 size-16 rounded-full bg-luxury-gold/20 animate-float" />
        <div className="absolute bottom-24 right-20 size-12 rounded-full bg-white/10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute right-16 top-1/3 size-8 rounded-full bg-luxury-gold/30 animate-float" style={{ animationDelay: '4s' }} />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
            About LuxEstates
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            For over 15 years, we've been the trusted partner for discerning clients seeking the finest luxury properties. Our commitment to excellence and personalized service has made us a leader in the luxury real estate market.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-navy mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-luxury-gray leading-relaxed">
                <p>
                  Founded in 2008 by a team of visionary real estate professionals, LuxEstates was born from a simple yet powerful belief: that luxury real estate deserves a service as exceptional as the properties themselves.
                </p>
                <p>
                  What started as a boutique firm has grown into one of the most respected names in luxury real estate, representing some of the world's most prestigious properties and serving an exclusive clientele of high-net-worth individuals, celebrities, and international investors.
                </p>
                <p>
                  Our success is built on three pillars: uncompromising integrity, deep market expertise, and an unwavering commitment to our clients' success. Every transaction is approached with the same level of dedication, whether it's a $1 million condo or a $50 million estate.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop"
                alt="Luxury office interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-luxury-gold rounded-2xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-luxury-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-luxury-gray max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="group text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-gold-dark flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-luxury-navy mb-3">{value.title}</h3>
                  <p className="text-luxury-gray text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-luxury-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center text-white ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20"
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

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-navy mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-luxury-gray max-w-2xl mx-auto">
              Key milestones that have shaped our company
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-luxury-gold/30 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-luxury-gold mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-luxury-navy mb-3">{milestone.title}</h3>
                        <p className="text-luxury-gray">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-4 h-4 rounded-full bg-luxury-gold shadow-lg z-10 hidden md:block" />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luxury-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-navy mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-luxury-gray max-w-2xl mx-auto mb-8">
            Experience the LuxEstates difference. Let our expert team help you find your perfect luxury property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="gold"
              className="group relative overflow-hidden rounded-full px-8 py-4 font-semibold text-slate-900 shadow-xl transition-transform duration-300 hover:scale-105 active:scale-100"
            >
              <Link to="/agents">
                <span className="relative z-10 inline-flex items-center">
                  Meet Our Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
                <span className="pointer-events-none absolute inset-0 -left-full z-0 h-full w-1/2 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group relative overflow-hidden rounded-full px-8 py-4 font-semibold border-2 border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white shadow-xl transition-transform duration-300 hover:scale-105 active:scale-100"
            >
              <Link to="/contact">
                <span className="relative z-10 inline-flex items-center">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
