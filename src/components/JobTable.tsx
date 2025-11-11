import React from 'react';
import type { Job } from '@/types';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JobTableProps {
  jobs: Job[];
  isLoading?: boolean;
}

export const JobTable: React.FC<JobTableProps> = ({ jobs, isLoading = false }) => {
  if (isLoading) {
    return null;
  }

  if (jobs.length === 0) {
    return null;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border/50 bg-card">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border/50 bg-muted/30">
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
              Job Title
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
              Company
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
              Location
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr
              key={job.id}
              className={`border-b border-border/30 transition-colors hover:bg-muted/50 ${
                index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
              }`}
            >
              <td className="px-6 py-4">
                <div className="font-medium text-foreground">{job.title}</div>
                <div className="text-xs text-muted-foreground line-clamp-1 mt-1">
                  {job.description}
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-muted-foreground">
                {job.company}
              </td>
              <td className="px-6 py-4 text-sm text-muted-foreground">
                {job.location}
              </td>
              <td className="px-6 py-4">
                <Button
                  asChild
                  size="sm"
                  variant="ghost"
                  className="gap-1 hover:text-primary"
                >
                  <Link to={`/jobs/${job.id}`}>
                    View <ArrowRight className="w-3 h-3" />
                  </Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
