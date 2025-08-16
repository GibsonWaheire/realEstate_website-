import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Bed, Bath, Square, MapPin, Heart, Scale, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useComparison } from '@/hooks/useComparison';
import { useFavorites } from '@/contexts/FavoritesContext';
import type { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToComparison, isInComparison, canAddMore } = useComparison();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden card-shadow hover:hover-shadow transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Carousel */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Image Navigation */}
        {property.images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              onClick={prevImage}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              onClick={nextImage}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </>
        )}

        {/* Property Type Badge */}
        <Badge className="absolute top-4 left-4 bg-luxury-gold text-luxury-navy font-medium">
          {property.type}
        </Badge>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          {/* Comparison Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`bg-white/80 hover:bg-white ${
              isInComparison(property.id) 
                ? 'text-luxury-gold' 
                : canAddMore 
                  ? 'text-gray-600 hover:text-luxury-gold' 
                  : 'text-gray-400 cursor-not-allowed'
            }`}
            onClick={(e) => {
              e.preventDefault();
              if (canAddMore && !isInComparison(property.id)) {
                addToComparison(property);
              }
            }}
            disabled={!canAddMore && !isInComparison(property.id)}
          >
            {isInComparison(property.id) ? (
              <Check className="w-4 h-4" />
            ) : (
              <Scale className="w-4 h-4" />
            )}
          </Button>

          {/* Like Button */}
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 hover:bg-white"
            onClick={(e) => {
              e.preventDefault();
              if (isFavorite(property.id)) {
                removeFromFavorites(property.id);
              } else {
                addToFavorites(property);
              }
            }}
          >
            <Heart className={`w-4 h-4 ${isFavorite(property.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </Button>
        </div>

        {/* Image Indicators */}
        {property.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {property.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Property Details */}
      <Link to={`/properties/${property.id}`} className="block p-6">
        <div className="space-y-4">
          {/* Price */}
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-luxury-navy">
              {formatPrice(property.price)}
            </h3>
          </div>

          {/* Title */}
          <h4 className="text-lg font-semibold text-foreground group-hover:text-luxury-gold transition-colors">
            {property.title}
          </h4>

          {/* Location */}
          <div className="flex items-center text-luxury-gray">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{property.location}</span>
          </div>

          {/* Property Features */}
          <div className="flex items-center justify-between text-sm text-luxury-gray">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                <span>{property.bedrooms} bed</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                <span>{property.bathrooms} bath</span>
              </div>
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                <span>{property.sqft.toLocaleString()} sqft</span>
              </div>
            </div>
          </div>

          {/* Agent Info */}
          <div className="flex items-center pt-4 border-t border-gray-100">
            <img
              src={property.agent.image}
              alt={property.agent.name}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div>
              <p className="text-sm font-medium text-foreground">{property.agent.name}</p>
              <p className="text-xs text-luxury-gray">Listing Agent</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;