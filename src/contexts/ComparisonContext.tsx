import React, { createContext, useState, type ReactNode } from 'react';

// Extend Window interface for analytics functions
declare global {
  interface Window {
    trackPropertyComparison?: (propertyIds: string[]) => void;
  }
}

interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
  images: string[];
  description: string;
  features: string[];
}

interface ComparisonContextType {
  comparedProperties: Property[];
  addToComparison: (property: Property) => void;
  removeFromComparison: (propertyId: string) => void;
  clearComparison: () => void;
  isInComparison: (propertyId: string) => boolean;
  canAddMore: boolean;
}

export const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

interface ComparisonProviderProps {
  children: ReactNode;
}

export const ComparisonProvider: React.FC<ComparisonProviderProps> = ({ children }) => {
  const [comparedProperties, setComparedProperties] = useState<Property[]>([]);
  const maxComparisons = 3;

  const addToComparison = (property: Property) => {
    if (comparedProperties.length < maxComparisons && !isInComparison(property.id)) {
      setComparedProperties(prev => [...prev, property]);
      
      // Track comparison event
      if (typeof window !== 'undefined' && window.trackPropertyComparison) {
        const propertyIds = [...comparedProperties.map(p => p.id), property.id];
        window.trackPropertyComparison(propertyIds);
      }
    }
  };

  const removeFromComparison = (propertyId: string) => {
    setComparedProperties(prev => prev.filter(p => p.id !== propertyId));
  };

  const clearComparison = () => {
    setComparedProperties([]);
  };

  const isInComparison = (propertyId: string) => {
    return comparedProperties.some(p => p.id === propertyId);
  };

  const canAddMore = comparedProperties.length < maxComparisons;

  return (
    <ComparisonContext.Provider
      value={{
        comparedProperties,
        addToComparison,
        removeFromComparison,
        clearComparison,
        isInComparison,
        canAddMore,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
};
