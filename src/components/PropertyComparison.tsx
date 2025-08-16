import React from 'react';
import { X, Home, Bed, Bath, Square, MapPin, DollarSign } from 'lucide-react';

// Extend Window interface for analytics functions
declare global {
  interface Window {
    trackPropertyView?: (propertyId: string, propertyType: string, price: number) => void;
  }
}
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useComparison } from '@/hooks/useComparison';

const PropertyComparison: React.FC = () => {
  const { comparedProperties, removeFromComparison, clearComparison } = useComparison();

  if (comparedProperties.length === 0) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <Home className="h-16 w-16 text-luxury-gold mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-luxury-navy mb-4">
              Property Comparison
            </h1>
            <p className="text-lg text-luxury-gray mb-8">
              Add properties to compare their features, prices, and details side by side.
            </p>
            <Button
              asChild
              variant="gold"
              size="lg"
              className="rounded-full px-8 py-4"
            >
              <a href="/properties">Browse Properties</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-luxury-navy mb-2">
              Property Comparison
            </h1>
            <p className="text-luxury-gray">
              Comparing {comparedProperties.length} propert{comparedProperties.length === 1 ? 'y' : 'ies'}
            </p>
          </div>
          <Button
            onClick={clearComparison}
            variant="outline"
            className="border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white"
          >
            Clear All
          </Button>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparedProperties.map((property, index) => (
            <Card key={property.id} className="relative border-0 shadow-xl overflow-hidden">
              {/* Remove Button */}
              <Button
                onClick={() => removeFromComparison(property.id)}
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 z-10 rounded-full w-8 h-8 p-0 bg-white/90 border-red-200 text-red-600 hover:bg-red-50"
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Property Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-luxury-gold text-slate-900 font-semibold">
                    #{index + 1}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-serif text-luxury-navy line-clamp-2">
                  {property.title}
                </CardTitle>
                <div className="flex items-center text-luxury-gray text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Price */}
                <div className="flex items-center justify-between p-3 bg-luxury-light rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-luxury-gold mr-2" />
                    <span className="text-sm text-luxury-gray">Price</span>
                  </div>
                  <span className="font-bold text-luxury-navy">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(property.price)}
                  </span>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-luxury-light rounded-lg">
                    <Bed className="h-5 w-5 text-luxury-gold mx-auto mb-1" />
                    <div className="font-semibold text-luxury-navy">{property.bedrooms}</div>
                    <div className="text-xs text-luxury-gray">Bedrooms</div>
                  </div>
                  <div className="text-center p-3 bg-luxury-light rounded-lg">
                    <Bath className="h-5 w-5 text-luxury-gold mx-auto mb-1" />
                    <div className="font-semibold text-luxury-navy">{property.bathrooms}</div>
                    <div className="text-xs text-luxury-gray">Bathrooms</div>
                  </div>
                  <div className="text-center p-3 bg-luxury-light rounded-lg">
                    <Square className="h-5 w-5 text-luxury-gold mx-auto mb-1" />
                    <div className="font-semibold text-luxury-navy">{property.sqft.toLocaleString()}</div>
                    <div className="text-xs text-luxury-gray">Sq Ft</div>
                  </div>
                </div>

                {/* Property Type */}
                <div className="flex items-center justify-between p-3 bg-luxury-light rounded-lg">
                  <div className="flex items-center">
                    <Home className="h-5 w-5 text-luxury-gold mr-2" />
                    <span className="text-sm text-luxury-gray">Type</span>
                  </div>
                  <Badge variant="outline" className="text-luxury-gold border-luxury-gold">
                    {property.type}
                  </Badge>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-luxury-navy mb-2">Key Features</h4>
                  <div className="space-y-1">
                    {property.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-luxury-gray">
                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold mr-2" />
                        {feature}
                      </div>
                    ))}
                    {property.features.length > 4 && (
                      <div className="text-sm text-luxury-gold">
                        +{property.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="gold"
                  size="sm"
                  className="w-full rounded-full mt-4"
                  onClick={() => {
                    // Track property view
                    if (typeof window !== 'undefined' && window.trackPropertyView) {
                      window.trackPropertyView(property.id, property.type, property.price);
                    }
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table for Desktop */}
        {comparedProperties.length > 1 && (
          <Card className="mt-12 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-luxury-navy">
                Side-by-Side Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-luxury-gray/20">
                      <th className="text-left py-4 px-2 font-semibold text-luxury-navy">Feature</th>
                      {comparedProperties.map((property, index) => (
                        <th key={property.id} className="text-center py-4 px-2 font-semibold text-luxury-navy">
                          Property #{index + 1}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-luxury-gray/10">
                    <tr>
                      <td className="py-4 px-2 font-medium text-luxury-gray">Price</td>
                      {comparedProperties.map((property) => (
                        <td key={property.id} className="py-4 px-2 text-center font-bold text-luxury-navy">
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }).format(property.price)}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-4 px-2 font-medium text-luxury-gray">Location</td>
                      {comparedProperties.map((property) => (
                        <td key={property.id} className="py-4 px-2 text-center text-luxury-navy">
                          {property.location}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-4 px-2 font-medium text-luxury-gray">Bedrooms</td>
                      {comparedProperties.map((property) => (
                        <td key={property.id} className="py-4 px-2 text-center text-luxury-navy">
                          {property.bedrooms}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-4 px-2 font-medium text-luxury-gray">Bathrooms</td>
                      {comparedProperties.map((property) => (
                        <td key={property.id} className="py-4 px-2 text-center text-luxury-navy">
                          {property.bathrooms}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-4 px-2 font-medium text-luxury-gray">Square Feet</td>
                      {comparedProperties.map((property) => (
                        <td key={property.id} className="py-4 px-2 text-center text-luxury-navy">
                          {property.sqft.toLocaleString()} sq ft
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-4 px-2 font-medium text-luxury-gray">Property Type</td>
                      {comparedProperties.map((property) => (
                        <td key={property.id} className="py-4 px-2 text-center">
                          <Badge variant="outline" className="text-luxury-gold border-luxury-gold">
                            {property.type}
                          </Badge>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add More Properties */}
        {comparedProperties.length < 3 && (
          <div className="text-center mt-12">
            <p className="text-luxury-gray mb-4">
              You can compare up to 3 properties. Add {3 - comparedProperties.length} more to compare.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white"
            >
              <a href="/properties">Add More Properties</a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyComparison;
