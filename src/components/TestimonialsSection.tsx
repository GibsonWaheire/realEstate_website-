import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Shield, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { testimonials } from '@/data/testimonials';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const featuredTestimonials = testimonials.filter(t => t.featured);
  const totalTestimonials = featuredTestimonials.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalTestimonials]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = featuredTestimonials[currentIndex];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-luxury-navy text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-16 w-32 h-32 rounded-full bg-luxury-gold animate-float" />
        <div className="absolute bottom-24 right-24 w-24 h-24 rounded-full bg-white animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute right-20 top-1/3 size-8 rounded-full bg-luxury-gold animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover why luxury property buyers and sellers choose LuxEstates for their most important real estate decisions
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Client Photo and Info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto ring-4 ring-luxury-gold/30"
                    />
                    {currentTestimonial.verified && (
                      <div className="absolute -bottom-2 -right-2 bg-luxury-gold text-luxury-navy rounded-full p-1.5">
                        <Shield className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-luxury-gold font-medium mb-1">
                    {currentTestimonial.title}
                  </p>
                  {currentTestimonial.company && (
                    <p className="text-white/70 text-sm mb-4">
                      {currentTestimonial.company}
                    </p>
                  )}
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                    {renderStars(currentTestimonial.rating)}
                  </div>
                  
                  {/* Property Details */}
                  <div className="space-y-2 text-sm text-white/70">
                    <div className="flex items-center justify-center lg:justify-start">
                      <MapPin className="h-4 w-4 mr-2 text-luxury-gold" />
                      {currentTestimonial.location}
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                      <Calendar className="h-4 w-4 mr-2 text-luxury-gold" />
                      {new Date(currentTestimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Quote className="h-12 w-12 text-luxury-gold/30 mb-4" />
                    <blockquote className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
                      "{currentTestimonial.review}"
                    </blockquote>
                    <Badge 
                      variant="outline" 
                      className="text-luxury-gold border-luxury-gold/50 bg-luxury-gold/10"
                    >
                      {currentTestimonial.propertyType}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="text-white hover:bg-white/10 hover:text-luxury-gold rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-luxury-gold scale-110' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="text-white hover:bg-white/10 hover:text-luxury-gold rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">98%</div>
            <div className="text-white/80">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">500+</div>
            <div className="text-white/80">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">4.9</div>
            <div className="text-white/80">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">15+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-white/80 mb-6 text-lg">
            Ready to join our satisfied clients?
          </p>
          <Button
            asChild
            variant="gold"
            size="lg"
            className="rounded-full px-8 py-4 text-lg font-semibold"
          >
            <a href="/get-started">Start Your Journey</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
