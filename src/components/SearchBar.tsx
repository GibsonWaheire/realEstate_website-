import { useState } from 'react';
import { Search, MapPin, DollarSign, Home, Bed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { propertyTypes, priceRanges } from '@/data/properties';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  className?: string;
}

export interface SearchFilters {
  location: string;
  priceRange: string;
  propertyType: string;
  bedrooms: string;
}

const SearchBar = ({ onSearch, className = '' }: SearchBarProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    priceRange: 'All Prices',
    propertyType: 'All',
    bedrooms: 'Any'
  });

  const handleSearch = () => {
    onSearch(filters);
  };

  const handleInputChange = (field: keyof SearchFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className={`bg-white rounded-2xl p-6 card-shadow ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Location */}
        <div className="relative">
          <label className="block text-sm font-medium text-luxury-gray mb-2">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-gray" />
            <Input
              type="text"
              placeholder="City, State"
              className="pl-10 border-gray-200 focus:border-luxury-gold focus:ring-luxury-gold"
              value={filters.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
            />
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-luxury-gray mb-2">
            Price Range
          </label>
          <Select value={filters.priceRange} onValueChange={(value) => handleInputChange('priceRange', value)}>
            <SelectTrigger className="border-gray-200 focus:border-luxury-gold focus:ring-luxury-gold">
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 text-luxury-gray mr-2" />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range) => (
                <SelectItem key={range.label} value={range.label}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-luxury-gray mb-2">
            Property Type
          </label>
          <Select value={filters.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
            <SelectTrigger className="border-gray-200 focus:border-luxury-gold focus:ring-luxury-gold">
              <div className="flex items-center">
                <Home className="w-4 h-4 text-luxury-gray mr-2" />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-luxury-gray mb-2">
            Bedrooms
          </label>
          <Select value={filters.bedrooms} onValueChange={(value) => handleInputChange('bedrooms', value)}>
            <SelectTrigger className="border-gray-200 focus:border-luxury-gold focus:ring-luxury-gold">
              <div className="flex items-center">
                <Bed className="w-4 h-4 text-luxury-gray mr-2" />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button
            onClick={handleSearch}
            className="w-full bg-gradient-luxury text-white hover:bg-luxury-navy-light h-10"
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;