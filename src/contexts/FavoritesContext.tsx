import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

interface FavoritesContextType {
  favorites: Property[];
  addToFavorites: (property: Property) => void;
  removeFromFavorites: (propertyId: string) => void;
  isFavorite: (propertyId: string) => boolean;
  clearFavorites: () => void;
  favoritesCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Property[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('luxestates-favorites');
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        console.error('Error loading favorites from localStorage:', error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('luxestates-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (property: Property) => {
    if (!isFavorite(property.id)) {
      setFavorites(prev => [...prev, property]);
      
      // Track analytics event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'add_to_favorites', {
          currency: 'USD',
          value: parseInt(property.price.replace(/[^0-9]/g, '')) || 0,
          item_id: property.id,
          item_name: property.title,
          item_category: property.type,
          content_type: 'property'
        });
      }
    }
  };

  const removeFromFavorites = (propertyId: string) => {
    setFavorites(prev => prev.filter(p => p.id !== propertyId));
    
    // Track analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'remove_from_favorites', {
        item_id: propertyId,
        content_type: 'property'
      });
    }
  };

  const isFavorite = (propertyId: string) => {
    return favorites.some(p => p.id === propertyId);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const favoritesCount = favorites.length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        clearFavorites,
        favoritesCount,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
