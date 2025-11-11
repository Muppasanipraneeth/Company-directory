import { debounce } from 'lodash-es';
import { Search, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from './button';

interface FilterProps {
  companies: string[];
  locations: string[];
  onFilter: (filters: {
    searchTerm: string;
    company: string;
    location: string;
  }) => void;
  isLoading?: boolean;
}

export const JobFilters: React.FC<FilterProps> = ({
  companies,
  locations,
  onFilter,
  isLoading = false,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Create a debounced filter function using useRef to maintain reference
  const debouncedFilterRef = useRef(
    debounce((term: string, company: string, location: string) => {
      onFilter({
        searchTerm: term,
        company,
        location,
      });
    }, 500) // 500ms delay
  );

  // Trigger debounced search when any filter changes
  useEffect(() => {
    debouncedFilterRef.current(searchTerm, selectedCompany, selectedLocation);
  }, [searchTerm, selectedCompany, selectedLocation]);

  const handleFilter = () => {
    // Cancel pending debounced calls and execute immediately
    debouncedFilterRef.current.cancel();
    onFilter({
      searchTerm,
      company: selectedCompany,
      location: selectedLocation,
    });
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCompany('');
    setSelectedLocation('');
    debouncedFilterRef.current.cancel();
    onFilter({
      searchTerm: '',
      company: '',
      location: '',
    });
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search jobs by title, skills, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleFilter()}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all"
            disabled={isLoading}
          />
          {searchTerm && (
            <div className="absolute right-4 top-3.5 flex items-center gap-2">
              <div className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded">
                Searching...
              </div>
            </div>
          )}
        </div>
        <Button
          onClick={handleFilter}
          disabled={isLoading}
          className="px-6 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-all shadow-sm hover:shadow-md"
        >
          Search
        </Button>
      </div>

      {/* Filter Toggle */}
      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100"
      >
        <span>{showAdvanced ? '▼' : '▶'}</span>
        {showAdvanced ? 'Hide Advanced Filters' : 'Show Advanced Filters'}
      </button>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-slate-50 rounded-lg border border-slate-300 transition-all">
          {/* Company Filter */}
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-3">
              🏢 Company
            </label>
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 font-medium focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all cursor-pointer hover:border-slate-400"
            >
              <option value="">All Companies</option>
              {companies.map((company) => (
                <option key={company} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>

          {/* Location Filter */}
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-3">
              📍 Location
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 font-medium focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all cursor-pointer hover:border-slate-400"
            >
              <option value="">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Button */}
          <div className="md:col-span-2">
            <Button
              onClick={handleReset}
              variant="outline"
              className="w-full gap-2 border-2 border-slate-700 text-slate-700 hover:bg-slate-100 font-medium rounded-lg transition-all"
              disabled={isLoading}
            >
              <X className="w-4 h-4" />
              Clear All Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
