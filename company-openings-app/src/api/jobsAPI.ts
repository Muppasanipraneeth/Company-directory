import type { Job, PaginatedJobsResponse } from '@/types';
import { apiClient } from './apiClient';

// For paginated data
export const getJobs = async (
  page = 1,
  limit = 10,
): Promise<PaginatedJobsResponse> => {
  const response = await apiClient.get('/jobs', {
    params: { _page: page, _limit: limit },
  });
  const totalItems = Number(response.headers['x-total-count']);
  return {
    data: response.data,
    currentPage: page,
    totalPages: Math.ceil(totalItems / limit),
    totalItems,
  };
};

export const getInfiniteJobs = async ({
  pageParam = 1,
}): Promise<{ data: Job[]; nextPage: number | undefined }> => {
  const limit = 10;
  const response = await apiClient.get('/jobs', {
    params: { _page: pageParam, _limit: limit },
  });

  const totalItems = Number(response.headers['x-total-count']);
  const totalPages = Math.ceil(totalItems / limit);

  return {
    data: response.data,
    nextPage: pageParam < totalPages ? pageParam + 1 : undefined,
  };
};

// A flexible function to get jobs, can be extended with filters
export const getJobsByFilters = async (
  filters: Record<string, string | number> = {},
): Promise<Job[]> => {
  try {
    const response = await apiClient.get('/jobs', { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs by filters:', error);
    return [];
  }
};

export const getJobById = async (id: number): Promise<Job | null> => {
  try {
    const response = await apiClient.get(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching job by id:', error);
    return null;
  }
};

export const getCompanies = async (): Promise<string[]> => {
  try {
    const response = await apiClient.get('/jobs');
    const companies = Array.from(new Set((response.data as Job[]).map(job => job.company)));
    return companies.sort();
  } catch (error) {
    console.error('Error fetching companies:', error);
    return [];
  }
};

export const getLocations = async (): Promise<string[]> => {
  try {
    const response = await apiClient.get('/jobs');
    const locations = Array.from(new Set((response.data as Job[]).map(job => job.location)));
    return locations.sort();
  } catch (error) {
    console.error('Error fetching locations:', error);
    return [];
  }
};
