import { getCompanies, getJobsByFilters, getLocations } from '@/api/jobsAPI';
import { JobCard } from '@/components/JobCard';
import { JobTable } from '@/components/JobTable';
import { Button } from '@/components/ui/button';
import { JobFilters } from '@/components/ui/job-filters';
import type { Job } from '@/types';
import { AlertCircle, Grid3x3, List, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [companies, setCompanies] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [companiesData, locationsData] = await Promise.all([
          getCompanies(),
          getLocations(),
        ]);

        setCompanies(companiesData);
        setLocations(locationsData);

        const allJobs = await getJobsByFilters({});
        setJobs(allJobs);
      } catch (err) {
        setError('Failed to load data. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  // Handle filtering
  const handleFilter = async (newFilters: {
    searchTerm: string;
    company: string;
    location: string;
  }) => {
    try {
      setLoading(true);
      setError(null);

      const filteredJobs = await getJobsByFilters(newFilters);
      setJobs(filteredJobs);
    } catch (err) {
      setError('Failed to fetch jobs. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <Loader2 className="w-6 h-6" />
            </div>
            <h1 className="text-4xl font-bold">Job Opportunities</h1>
          </div>
          <p className="text-slate-300 text-lg max-w-2xl">
            Discover your next career move from our curated collection of exciting opportunities
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold">{jobs.length}</div>
              <div className="text-slate-300 text-sm">Active Positions</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{companies.length}</div>
              <div className="text-slate-300 text-sm">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{locations.length}</div>
              <div className="text-slate-300 text-sm">Locations</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters Section with Enhanced Styling */}
        <div className="mb-12 bg-white rounded-lg shadow-sm p-8 border border-slate-200">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Search & Filter</h2>
            <p className="text-slate-600">Find the perfect job match using our advanced filters</p>
          </div>
          <JobFilters
            companies={companies}
            locations={locations}
            onFilter={handleFilter}
            isLoading={loading}
          />
        </div>

        {/* Results Toolbar */}
        {!loading && jobs.length > 0 && (
          <div className="mb-6 flex items-center justify-between bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                <Loader2 className="w-4 h-4" />
                Found {jobs.length} job{jobs.length !== 1 ? 's' : ''}
              </span>
            </div>
            {!loading && jobs.length > 0 && (
              <div className="flex gap-2">
                <Button
                  onClick={() => setViewMode('grid')}
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  className="gap-2"
                >
                  <Grid3x3 className="w-4 h-4" />
                  Grid
                </Button>
                <Button
                  onClick={() => setViewMode('table')}
                  variant={viewMode === 'table' ? 'default' : 'outline'}
                  size="sm"
                  className="gap-2"
                >
                  <List className="w-4 h-4" />
                  Table
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mb-8 p-6 bg-slate-100 border-l-4 border-slate-700 rounded-lg flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-slate-700 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Error Loading Jobs</h3>
              <p className="text-sm text-slate-700">{error}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-16 h-16">
                <Loader2 className="w-16 h-16 animate-spin text-slate-900 absolute inset-0" />
              </div>
              <p className="text-slate-600 font-medium">Finding amazing opportunities...</p>
              <p className="text-sm text-slate-500">This should only take a moment</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && jobs.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 px-4">
            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mb-6">
              <AlertCircle className="w-12 h-12 text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No jobs found</h3>
            <p className="text-slate-600 mb-8 max-w-md text-center">
              We couldn't find any jobs matching your criteria. Try adjusting your filters or search terms
            </p>
            <Button
              onClick={() => {
                setJobs([]);
                setLoading(true);
                handleFilter({ searchTerm: '', company: '', location: '' });
              }}
              className="gap-2 bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow-md"
            >
              <Loader2 className="w-4 h-4" />
              Reset Filters
            </Button>
          </div>
        )}

        {/* Jobs Grid */}
        {!loading && jobs.length > 0 && (
          <div>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden animate-fadeIn">
                <JobTable jobs={jobs} isLoading={loading} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
