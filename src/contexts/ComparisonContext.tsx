import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
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

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};

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
