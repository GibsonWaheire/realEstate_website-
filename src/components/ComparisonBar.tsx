import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, X, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useComparison } from '@/hooks/useComparison';

const ComparisonBar: React.FC = () => {
  const { comparedProperties, removeFromComparison, clearComparison } = useComparison();

  if (comparedProperties.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
      <div className="bg-luxury-navy text-white rounded-full shadow-2xl border border-luxury-gold/20 px-6 py-4 flex items-center space-x-4 max-w-md">
        {/* Icon and Count */}
        <div className="flex items-center space-x-2">
          <Scale className="h-5 w-5 text-luxury-gold" />
          <span className="font-semibold">
            {comparedProperties.length} Propert{comparedProperties.length === 1 ? 'y' : 'ies'}
          </span>
        </div>

        {/* Property Thumbnails */}
        <div className="flex space-x-1">
          {comparedProperties.slice(0, 3).map((property) => (
            <div key={property.id} className="relative group">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-8 h-8 rounded object-cover border border-luxury-gold/30"
              />
              <Button
                onClick={() => removeFromComparison(property.id)}
                variant="ghost"
                size="sm"
                className="absolute -top-2 -right-2 w-4 h-4 p-0 rounded-full bg-red-500 hover:bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-2 w-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Button
            asChild
            variant="gold"
            size="sm"
            className="rounded-full px-4 py-2 text-xs font-semibold"
          >
            <Link to="/compare">
              <Eye className="h-3 w-3 mr-1" />
              Compare
            </Link>
          </Button>
          
          <Button
            onClick={clearComparison}
            variant="ghost"
            size="sm"
            className="rounded-full w-6 h-6 p-0 text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonBar;
