// src/pages/PaginatedJobsPage.tsx
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getJobs } from '../api/companyAPI';

export const PaginatedJobsPage = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ['jobs', page], // The query key includes the page number
    queryFn: () => getJobs(page),
    // In TanStack Query v5, `keepPreviousData` is replaced by `placeholderData`
    placeholderData: (previousData) => previousData, // Smooth UX: shows old data while new data is fetching
  });

  if (isLoading) {
    return <div className="text-center p-8">Loading jobs...</div>;
  }

  if (isError) {
    return (
      <div className="text-center p-8 text-red-500">
        Error: {(error as Error).message}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Company Openings</h1>

      {/* Job List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.data.map((job) => (
          <div key={job.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-4 mt-8">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {page} of {data?.totalPages}
        </span>
        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={!data || page === data.totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {isFetching && <div className="text-center mt-2">Fetching...</div>}
    </div>
  );
};