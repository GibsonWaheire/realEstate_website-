import * as React from 'react';
import { Mail, Phone, Globe, Linkedin, Instagram, Twitter, Award, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockAgents } from '@/data/agents';

const AgentsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-luxury-navy via-luxury-navy-light to-luxury-navy py-20 text-white">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Floating decorative elements */}
        <div className="absolute left-8 top-16 size-16 rounded-full bg-luxury-gold/20 animate-float" />
        <div className="absolute bottom-24 right-20 size-12 rounded-full bg-white/10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute right-16 top-1/3 size-8 rounded-full bg-luxury-gold/30 animate-float" style={{ animationDelay: '4s' }} />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
            Meet Our Expert Team
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Our luxury real estate specialists bring decades of combined experience and unmatched expertise to help you find your perfect property
          </p>
          
          {/* Team Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">$2.5B+</div>
              <div className="text-white/80">Total Sales Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">2,000+</div>
              <div className="text-white/80">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">95%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockAgents.map((agent, index) => (
              <Card 
                key={agent.id} 
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Agent Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Social Links Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {agent.social.linkedin && (
                        <Button size="sm" variant="outline" className="rounded-full bg-white/20 border-white/30 text-white hover:bg-white hover:text-luxury-navy">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      )}
                      {agent.social.instagram && (
                        <Button size="sm" variant="outline" className="rounded-full bg-white/20 border-white/30 text-white hover:bg-white hover:text-luxury-navy">
                          <Instagram className="h-4 w-4" />
                        </Button>
                      )}
                      {agent.social.twitter && (
                        <Button size="sm" variant="outline" className="rounded-full bg-white/20 border-white/30 text-white hover:bg-white hover:text-luxury-navy">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Agent Details */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-luxury-navy mb-1">{agent.name}</h3>
                      <p className="text-luxury-gray font-medium mb-2">{agent.title}</p>
                      <Badge variant="outline" className="text-luxury-gold border-luxury-gold">
                        {agent.specialization}
                      </Badge>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="text-center p-2 bg-luxury-light rounded-lg">
                        <div className="font-bold text-luxury-navy">{agent.experience}</div>
                        <div className="text-luxury-gray">Experience</div>
                      </div>
                      <div className="text-center p-2 bg-luxury-light rounded-lg">
                        <div className="font-bold text-luxury-navy">{agent.propertiesSold}+</div>
                        <div className="text-luxury-gray">Properties Sold</div>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-4">
                      <div className="text-sm text-luxury-gray mb-2">Languages:</div>
                      <div className="flex flex-wrap gap-1">
                        {agent.languages.map((language) => (
                          <Badge key={language} variant="secondary" className="text-xs">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-luxury-gray mb-6 line-clamp-3">
                      {agent.bio}
                    </p>

                    {/* Contact Buttons */}
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="gold" 
                        className="flex-1 rounded-full text-xs"
                        asChild
                      >
                        <a href={`mailto:${agent.email}`}>
                          <Mail className="h-3 w-3 mr-1" />
                          Email
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 rounded-full text-xs border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white"
                        asChild
                      >
                        <a href={`tel:${agent.phone}`}>
                          <Phone className="h-3 w-3 mr-1" />
                          Call
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Team Section */}
      <section className="py-20 bg-luxury-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-navy mb-4">
              Why Choose Our Team
            </h2>
            <p className="text-lg text-luxury-gray max-w-2xl mx-auto">
              Our agents combine local expertise with global reach to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-gold-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-luxury-navy mb-3">Award-Winning Excellence</h3>
              <p className="text-luxury-gray">
                Our agents consistently rank in the top percentile nationally and have received numerous industry awards for their outstanding service.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-gold-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-luxury-navy mb-3">Global Network</h3>
              <p className="text-luxury-gray">
                With connections worldwide and multilingual capabilities, we serve both local and international clients with the same dedication.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-gold-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-luxury-navy mb-3">Client-Focused Approach</h3>
              <p className="text-luxury-gray">
                Every client receives personalized attention and tailored solutions. Your success is our success, and we're committed to exceeding expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentsPage;
