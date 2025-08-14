import { useState, useMemo } from 'react';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SearchBar, { type SearchFilters } from '@/components/SearchBar';
import PropertyCard from '@/components/PropertyCard';
import { mockProperties, priceRanges } from '@/data/properties';

const PropertiesPage = () => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    location: '',
    priceRange: 'All Prices',
    propertyType: 'All',
    bedrooms: 'Any'
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('price-desc');

  const filteredProperties = useMemo(() => {
    let filtered = [...mockProperties];

    // Filter by location
    if (searchFilters.location) {
      filtered = filtered.filter(property =>
        property.location.toLowerCase().includes(searchFilters.location.toLowerCase())
      );
    }

    // Filter by property type
    if (searchFilters.propertyType !== 'All') {
      filtered = filtered.filter(property =>
        property.type === searchFilters.propertyType
      );
    }

    // Filter by price range
    if (searchFilters.priceRange !== 'All Prices') {
      const priceRange = priceRanges.find(range => range.label === searchFilters.priceRange);
      if (priceRange) {
        filtered = filtered.filter(property =>
          property.price >= priceRange.min && property.price <= priceRange.max
        );
      }
    }

    // Filter by bedrooms
    if (searchFilters.bedrooms !== 'Any') {
      const minBedrooms = parseInt(searchFilters.bedrooms);
      filtered = filtered.filter(property =>
        property.bedrooms >= minBedrooms
      );
    }

    // Sort properties
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'sqft-desc':
        filtered.sort((a, b) => b.sqft - a.sqft);
        break;
      case 'bedrooms-desc':
        filtered.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchFilters, sortBy]);

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
  };

  const clearFilters = () => {
    setSearchFilters({
      location: '',
      priceRange: 'All Prices',
      propertyType: 'All',
      bedrooms: 'Any'
    });
  };

  const hasActiveFilters = searchFilters.location || 
    searchFilters.priceRange !== 'All Prices' || 
    searchFilters.propertyType !== 'All' || 
    searchFilters.bedrooms !== 'Any';

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="bg-luxury-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-navy mb-4">
              Luxury Properties
            </h1>
            <p className="text-lg text-luxury-gray max-w-2xl mx-auto">
              Discover our exclusive collection of premium real estate properties
            </p>
          </div>
          
          <SearchBar onSearch={handleSearch} className="max-w-6xl mx-auto" />
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-luxury-gray" />
                <span className="text-sm font-medium text-luxury-gray">
                  {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'}
                </span>
              </div>
              
              {hasActiveFilters && (
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                    className="text-xs"
                  >
                    Clear All
                  </Button>
                  {searchFilters.location && (
                    <Badge variant="secondary" className="text-xs">
                      {searchFilters.location}
                    </Badge>
                  )}
                  {searchFilters.priceRange !== 'All Prices' && (
                    <Badge variant="secondary" className="text-xs">
                      {searchFilters.priceRange}
                    </Badge>
                  )}
                  {searchFilters.propertyType !== 'All' && (
                    <Badge variant="secondary" className="text-xs">
                      {searchFilters.propertyType}
                    </Badge>
                  )}
                  {searchFilters.bedrooms !== 'Any' && (
                    <Badge variant="secondary" className="text-xs">
                      {searchFilters.bedrooms}+ beds
                    </Badge>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center gap-4">
              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-luxury-gold focus:ring-luxury-gold"
              >
                <option value="price-desc">Price: High to Low</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="sqft-desc">Size: Largest First</option>
                <option value="bedrooms-desc">Bedrooms: Most First</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center border border-gray-200 rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="px-3"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="px-3"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {filteredProperties.map((property, index) => (
                <div
                  key={property.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <SlidersHorizontal className="w-16 h-16 text-luxury-gray mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-luxury-navy mb-2">
                No Properties Found
              </h3>
              <p className="text-luxury-gray mb-6">
                Try adjusting your search filters to find more properties.
              </p>
              <Button onClick={clearFilters} className="bg-gradient-luxury text-white">
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Load More Button (for future pagination) */}
          {filteredProperties.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white">
                Load More Properties
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;