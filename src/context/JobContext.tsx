import { getCompanies, getJobsByFilters, getLocations } from '@/api/jobsAPI';
import type { Job } from '@/types';
import React, { useEffect, useState } from 'react';
import { JobContext } from './jobContextData';

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [companies, setCompanies] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [companiesData, locationsData, jobsData] = await Promise.all([
          getCompanies(),
          getLocations(),
          getJobsByFilters({}),
        ]);

        setCompanies(companiesData);
        setLocations(locationsData);
        setJobs(jobsData);
        setFilteredJobs(jobsData);
      } catch (err) {
        setError('Failed to load data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const applyFilters = async (filters: {
    searchTerm: string;
    company: string;
    location: string;
  }) => {
    try {
      setLoading(true);
      setError(null);
      const results = await getJobsByFilters(filters);
      setFilteredJobs(results);
    } catch (err) {
      setError('Failed to apply filters');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const resetFilters = async () => {
    try {
      setLoading(true);
      setError(null);
      const allJobs = await getJobsByFilters({});
      setFilteredJobs(allJobs);
    } catch (err) {
      setError('Failed to reset filters');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        companies,
        locations,
        loading,
        error,
        filteredJobs,
        applyFilters,
        resetFilters,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

