import * as React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-luxury-navy text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-luxury-gold animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-white animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-luxury-gold animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Let our expert agents guide you through the luxury real estate market and find the perfect property that matches your lifestyle
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              variant="gold"
              className="group relative overflow-hidden rounded-full px-10 py-6 text-lg font-semibold text-slate-900 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-100 min-w-[250px]"
            >
              <Link to="/contact">
                <Calendar className="mr-3 h-5 w-5" />
                <span className="relative z-10">Schedule Consultation</span>
                <span className="pointer-events-none absolute inset-0 -left-full z-0 h-full w-1/2 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
              </Link>
            </Button>
            
            <div className="text-white/60 font-medium">OR</div>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group relative overflow-hidden rounded-full px-10 py-6 text-lg font-semibold text-white border-2 border-white/20 bg-transparent shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/30 active:scale-100 min-w-[250px]"
            >
              <a href="tel:+1555123LUXURY">
                <Phone className="mr-3 h-5 w-5" />
                <span className="relative z-10">Call (555) 123-LUXURY</span>
              </a>
            </Button>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center text-white ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20">
              {/* Shine sweep */}
              <span className="pointer-events-none absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/10 opacity-0 blur-lg transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
              
              {/* Icon */}
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 text-luxury-navy shadow-md transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="h-8 w-8" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-white">Free Consultation</h3>
              <p className="text-white/80">Get expert advice tailored to your needs</p>
              
              {/* Accent bar */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center text-white ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20">
              {/* Shine sweep */}
              <span className="pointer-events-none absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/10 opacity-0 blur-lg transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
              
              {/* Icon */}
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 text-luxury-navy shadow-md transition-transform duration-300 group-hover:scale-110">
                <Calendar className="h-8 w-8" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-white">Flexible Scheduling</h3>
              <p className="text-white/80">Available 7 days a week for your convenience</p>
              
              {/* Accent bar */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 text-center text-white ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20">
              {/* Shine sweep */}
              <span className="pointer-events-none absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/10 opacity-0 blur-lg transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
              
              {/* Icon */}
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 text-luxury-navy shadow-md transition-transform duration-300 group-hover:scale-110">
                <Phone className="h-8 w-8" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-white">24/7 Support</h3>
              <p className="text-white/80">Our team is always here to help you</p>
              
              {/* Accent bar */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
