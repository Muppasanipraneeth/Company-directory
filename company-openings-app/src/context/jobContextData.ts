import type { Job } from '@/types';
import { createContext, useContext } from 'react';

export interface JobContextType {
  jobs: Job[];
  companies: string[];
  locations: string[];
  loading: boolean;
  error: string | null;
  filteredJobs: Job[];
  applyFilters: (filters: {
    searchTerm: string;
    company: string;
    location: string;
  }) => Promise<void>;
  resetFilters: () => Promise<void>;
}

export const JobContext = createContext<JobContextType | undefined>(undefined);

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within JobProvider');
  }
  return context;
};
