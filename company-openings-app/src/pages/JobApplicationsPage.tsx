import { deleteApplication, getApplicationsByJobId, updateApplication } from '@/api/applicationsAPI';
import { getJobsByFilters } from '@/api/jobsAPI';
import { ApplicationCard } from '@/components/ApplicationCard';
import type { Application, ApplicationStatus, Job } from '@/types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const JobApplicationsPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [applications, setApplications] = useState<Application[]>([]);
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      if (!jobId) return;

      try {
        setLoading(true);
        setError(null);

        const appsData = await getApplicationsByJobId(parseInt(jobId));
        setApplications(appsData);

        const jobsData = await getJobsByFilters({});
        const foundJob = jobsData.find((j: Job) => j.id === parseInt(jobId));
        setJob(foundJob || null);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load applications');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [jobId]);

  const handleStatusChange = async (id: number, status: ApplicationStatus) => {
    try {
      const updated = await updateApplication(id, {
        status,
        lastUpdated: new Date().toISOString().split('T')[0],
      });
      setApplications(applications.map(app => (app.id === id ? updated : app)));
    } catch (err) {
      console.error('Error updating application:', err);
      setError('Failed to update application status');
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this application record?')) {
      return;
    }

    try {
      await deleteApplication(id);
      setApplications(applications.filter(app => app.id !== id));
    } catch (err) {
      console.error('Error deleting application:', err);
      setError('Failed to delete application');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {job && (
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
          <p className="text-lg text-gray-600 mt-1">{job.company} • {job.location}</p>
          <p className="text-gray-700 mt-4">{job.description}</p>
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Your Applications ({applications.length})
        </h2>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {applications.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600 text-lg">
              No applications tracked yet for this job.
            </p>
            <p className="text-gray-500 mt-2">
              Use the Application Tracker to start tracking your applications!
            </p>
          </div>
        ) : (
          <div>
            {applications.map((app) => (
              <ApplicationCard
                key={app.id}
                application={app}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplicationsPage;
