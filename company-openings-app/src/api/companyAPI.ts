import type { Job, PaginatedJobsResponse } from '../types';
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
  const response = await apiClient.get('/jobs', { params: filters });
  return response.data;
};
