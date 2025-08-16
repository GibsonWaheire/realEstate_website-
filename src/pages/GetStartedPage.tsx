import * as React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft, 
  User, 
  Home, 
  DollarSign, 
  MapPin, 
  Calendar,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { mockAgents } from '@/data/agents';

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Property Preferences
  propertyType: string;
  budgetRange: string;
  preferredLocations: string;
  bedrooms: string;
  timeline: string;
  
  // Investment Goals
  investmentGoal: string;
  currentSituation: string;
  
  // Consultation Preferences
  consultationType: string;
  preferredDate: string;
  preferredTime: string;
  selectedAgent: string;
  additionalNotes: string;
}

const GetStartedPage = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyType: '',
    budgetRange: '',
    preferredLocations: '',
    bedrooms: '',
    timeline: '',
    investmentGoal: '',
    currentSituation: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    selectedAgent: '',
    additionalNotes: ''
  });

  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Consultation Booked Successfully!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });

      // Reset form or redirect
      setCurrentStep(totalSteps + 1); // Show success step
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem booking your consultation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return "Personal Information";
      case 2: return "Property Preferences";
      case 3: return "Investment Goals";
      case 4: return "Book Consultation";
      default: return "";
    }
  };

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return User;
      case 2: return Home;
      case 3: return DollarSign;
      case 4: return Calendar;
      default: return User;
    }
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.propertyType && formData.budgetRange && formData.timeline;
      case 3:
        return formData.investmentGoal && formData.currentSituation;
      case 4:
        return formData.consultationType && formData.preferredDate && formData.preferredTime;
      default:
        return false;
    }
  };

  if (currentStep > totalSteps) {
    // Success Page
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-luxury-navy mb-4">
              Consultation Booked Successfully!
            </h1>
            <p className="text-lg text-luxury-gray mb-8">
              Thank you for choosing LuxEstates. We've received your information and will contact you within 24 hours to confirm your consultation appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="gold" className="rounded-full">
                <Link to="/properties">Browse Properties</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/">Return Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-luxury-navy via-luxury-navy-light to-luxury-navy py-16 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Floating decorative elements */}
        <div className="absolute left-8 top-16 size-16 rounded-full bg-luxury-gold/20 animate-float" />
        <div className="absolute bottom-24 right-20 size-12 rounded-full bg-white/10 animate-float" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
            Get Started with LuxEstates
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Tell us about your property needs and book a consultation with our expert team
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-luxury-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
                const StepIcon = getStepIcon(step);
                const isActive = step === currentStep;
                const isCompleted = step < currentStep;
                
                return (
                  <div key={step} className="flex items-center">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                      isCompleted 
                        ? 'bg-green-500 text-white' 
                        : isActive 
                          ? 'bg-luxury-gold text-slate-900' 
                          : 'bg-white border-2 border-luxury-gray/30 text-luxury-gray'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : (
                        <StepIcon className="h-6 w-6" />
                      )}
                    </div>
                    <div className="ml-3 hidden sm:block">
                      <div className={`text-sm font-medium ${isActive ? 'text-luxury-navy' : 'text-luxury-gray'}`}>
                        Step {step}
                      </div>
                      <div className={`text-xs ${isActive ? 'text-luxury-gold' : 'text-luxury-gray/70'}`}>
                        {getStepTitle(step)}
                      </div>
                    </div>
                    {step < totalSteps && (
                      <div className={`hidden sm:block w-16 h-1 mx-4 rounded-full ${
                        step < currentStep ? 'bg-green-500' : 'bg-luxury-gray/30'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-luxury-navy text-center">
                  {getStepTitle(currentStep)}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="border-luxury-gray/30 focus:border-luxury-gold"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="border-luxury-gray/30 focus:border-luxury-gold"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-luxury-gray/30 focus:border-luxury-gold"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-luxury-gray/30 focus:border-luxury-gold"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Property Preferences */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Property Type *</Label>
                      <Select onValueChange={(value) => handleSelectChange('propertyType', value)}>
                        <SelectTrigger className="border-luxury-gray/30 focus:border-luxury-gold">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="luxury-residential">Luxury Residential</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="luxury-estate">Luxury Estate</SelectItem>
                          <SelectItem value="condominium">Luxury Condominium</SelectItem>
                          <SelectItem value="investment">Investment Property</SelectItem>
                          <SelectItem value="vacation">Vacation Home</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Budget Range *</Label>
                      <Select onValueChange={(value) => handleSelectChange('budgetRange', value)}>
                        <SelectTrigger className="border-luxury-gray/30 focus:border-luxury-gold">
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                          <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                          <SelectItem value="2m-5m">$2M - $5M</SelectItem>
                          <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                          <SelectItem value="10m+">$10M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredLocations">Preferred Locations</Label>
                      <Input
                        id="preferredLocations"
                        name="preferredLocations"
                        value={formData.preferredLocations}
                        onChange={handleInputChange}
                        className="border-luxury-gray/30 focus:border-luxury-gold"
                        placeholder="e.g., Beverly Hills, Manhattan, Miami Beach"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Bedrooms</Label>
                      <Select onValueChange={(value) => handleSelectChange('bedrooms', value)}>
                        <SelectTrigger className="border-luxury-gray/30 focus:border-luxury-gold">
                          <SelectValue placeholder="Select number of bedrooms" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Bedroom</SelectItem>
                          <SelectItem value="2">2 Bedrooms</SelectItem>
                          <SelectItem value="3">3 Bedrooms</SelectItem>
                          <SelectItem value="4">4 Bedrooms</SelectItem>
                          <SelectItem value="5+">5+ Bedrooms</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Timeline *</Label>
                      <Select onValueChange={(value) => handleSelectChange('timeline', value)}>
                        <SelectTrigger className="border-luxury-gray/30 focus:border-luxury-gold">
                          <SelectValue placeholder="When are you looking to buy?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediately</SelectItem>
                          <SelectItem value="1-3months">1-3 Months</SelectItem>
                          <SelectItem value="3-6months">3-6 Months</SelectItem>
                          <SelectItem value="6-12months">6-12 Months</SelectItem>
                          <SelectItem value="exploring">Just Exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 3: Investment Goals */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Investment Goal *</Label>
                      <Select onValueChange={(value) => handleSelectChange('investmentGoal', value)}>
                        <SelectTrigger className="border-luxury-gray/30 focus:border-luxury-gold">
                          <SelectValue placeholder="What's your primary goal?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primary-residence">Primary Residence</SelectItem>
                          <SelectItem value="investment">Investment Property</SelectItem>
                          <SelectItem value="vacation-home">Vacation Home</SelectItem>
                          <SelectItem value="relocation">Relocation</SelectItem>
                          <SelectItem value="upgrade">Upgrade Current Home</SelectItem>
                          <SelectItem value="diversification">Portfolio Diversification</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Current Situation *</Label>
                      <Select onValueChange={(value) => handleSelectChange('currentSituation', value)}>
                        <SelectTrigger className="border-luxury-gray/30 focus:border-luxury-gold">
                          <SelectValue placeholder="What's your current situation?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="first-time-buyer">First-time Buyer</SelectItem>
                          <SelectItem value="selling-current">Need to Sell Current Property</SelectItem>
                          <SelectItem value="cash-buyer">Cash Buyer</SelectItem>
                          <SelectItem value="financing-needed">Need Financing</SelectItem>
                          <SelectItem value="international-buyer">International Buyer</SelectItem>
                          <SelectItem value="relocating">Relocating for Work</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 4: Book Consultation */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Consultation Type *</Label>
                      <Select onValueChange={(value) => handleSelectChange('consultationType', value)}>
                        <SelectTrigger className="border-luxury-gray/30 focus:border-luxury-gold">
                          <SelectValue placeholder="Choose consultation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="virtual">Virtual Meeting</SelectItem>
                          <SelectItem value="in-person">In-Person Meeting</SelectItem>
                          <SelectItem value="phone">Phone Consultation</SelectItem>
                          <SelectItem value="property-tour">Property Tour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date *</Label>
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="border-luxury-gray/30 focus:border-luxury-gold"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred Time *</Label>
                        <Select onValueChange={(value) => handleSelectChange('preferredTime', value)}>
                          <SelectTrigger className="border-luxury-gray/30 focus:border-luxury-gold">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9am">9:00 AM</SelectItem>
                            <SelectItem value="10am">10:00 AM</SelectItem>
                            <SelectItem value="11am">11:00 AM</SelectItem>
                            <SelectItem value="1pm">1:00 PM</SelectItem>
                            <SelectItem value="2pm">2:00 PM</SelectItem>
                            <SelectItem value="3pm">3:00 PM</SelectItem>
                            <SelectItem value="4pm">4:00 PM</SelectItem>
                            <SelectItem value="5pm">5:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Select Preferred Agent</Label>
                      <Select onValueChange={(value) => handleSelectChange('selectedAgent', value)}>
                        <SelectTrigger className="border-luxury-gray/30 focus:border-luxury-gold">
                          <SelectValue placeholder="Choose an agent or let us assign one" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="auto-assign">Auto-assign Best Match</SelectItem>
                          {mockAgents.slice(0, 4).map((agent) => (
                            <SelectItem key={agent.id} value={agent.id}>
                              {agent.name} - {agent.specialization}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalNotes">Additional Notes</Label>
                      <Textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                        rows={4}
                        className="border-luxury-gray/30 focus:border-luxury-gold resize-none"
                        placeholder="Any specific requirements, questions, or additional information you'd like to share..."
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    disabled={currentStep === 1}
                    className="rounded-full px-6"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button
                      onClick={nextStep}
                      variant="gold"
                      disabled={!isStepValid(currentStep)}
                      className="rounded-full px-6"
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      variant="gold"
                      disabled={!isStepValid(currentStep) || isSubmitting}
                      className="rounded-full px-6"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-slate-900 border-t-transparent mr-2" />
                          Booking...
                        </>
                      ) : (
                        <>
                          Book Consultation
                          <Calendar className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStartedPage;
