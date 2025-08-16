import * as React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: '',
    propertyType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: '',
        propertyType: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['123 Luxury Avenue', 'Beverly Hills, CA 90210'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-LUXURY', '+1 (555) 456-7890'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@luxestates.com', 'support@luxestates.com'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 7:00 PM', 'Saturday - Sunday: 10:00 AM - 5:00 PM'],
      action: 'Schedule Appointment'
    }
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
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to find your dream property? Our luxury real estate experts are here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-luxury-navy flex items-center">
                    <MessageSquare className="mr-3 h-6 w-6 text-luxury-gold" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-luxury-gray">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="border-luxury-gray/30 focus:border-luxury-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="border-luxury-gray/30 focus:border-luxury-gold"
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-luxury-gray/30 focus:border-luxury-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-luxury-gray/30 focus:border-luxury-gold"
                        />
                      </div>
                    </div>

                    {/* Select Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="propertyType">Property Type</Label>
                        <Select onValueChange={(value) => handleSelectChange('propertyType', value)}>
                          <SelectTrigger className="border-luxury-gray/30 focus:border-luxury-gold">
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="luxury-estate">Luxury Estate</SelectItem>
                            <SelectItem value="condominium">Condominium</SelectItem>
                            <SelectItem value="investment">Investment Property</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                        <Select onValueChange={(value) => handleSelectChange('preferredContact', value)}>
                          <SelectTrigger className="border-luxury-gray/30 focus:border-luxury-gold">
                            <SelectValue placeholder="How should we contact you?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Phone</SelectItem>
                            <SelectItem value="text">Text Message</SelectItem>
                            <SelectItem value="either">Either Email or Phone</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="How can we help you?"
                        className="border-luxury-gray/30 focus:border-luxury-gold"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell us about your property needs, budget, preferred locations, or any questions you have..."
                        className="border-luxury-gray/30 focus:border-luxury-gold resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      variant="gold"
                      disabled={isSubmitting}
                      className="w-full group relative overflow-hidden rounded-full px-8 py-4 font-semibold text-slate-900 shadow-xl transition-transform duration-300 hover:scale-105 active:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-slate-900 border-t-transparent mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          <span className="relative z-10">Send Message</span>
                          <span className="pointer-events-none absolute inset-0 -left-full z-0 h-full w-1/2 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-gold-dark flex items-center justify-center shadow-md">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-luxury-navy mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-luxury-gray text-sm mb-1">{detail}</p>
                        ))}
                        <Button
                          variant="link"
                          size="sm"
                          className="text-luxury-gold hover:text-luxury-gold-dark p-0 h-auto font-medium"
                        >
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-luxury-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-navy mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-luxury-gray max-w-2xl mx-auto">
              Located in the heart of Beverly Hills, our office is easily accessible and designed to provide you with a comfortable consultation experience.
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-luxury-gray/20 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-luxury-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-luxury-navy mb-2">Interactive Map</h3>
              <p className="text-luxury-gray mb-4">123 Luxury Avenue, Beverly Hills, CA 90210</p>
              <Button variant="gold" size="lg" className="rounded-full">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Visit
              </Button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-luxury-gold/20" />
            <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-luxury-gold/10" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
