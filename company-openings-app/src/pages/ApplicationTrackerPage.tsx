import { createApplication, deleteApplication, getApplications, updateApplication } from '@/api/applicationsAPI';
import { getJobsByFilters } from '@/api/jobsAPI';
import { ApplicationCard } from '@/components/ApplicationCard';
import { ApplicationFormRHF } from '@/components/ApplicationFormRHF';
import { Button } from '@/components/ui/button';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';
import { Modal } from '@/components/ui/modal';
import type { Application, ApplicationStatus, Job } from '@/types';
import React, { useEffect, useState } from 'react';

export const ApplicationTrackerPage: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingApp, setEditingApp] = useState<Application | null>(null);
  const [filterStatus, setFilterStatus] = useState<ApplicationStatus | 'all'>('all');
  const [filterPlatform, setFilterPlatform] = useState<string>('all');
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [appToDelete, setAppToDelete] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [appsData, jobsData] = await Promise.all([
        getApplications(),
        getJobsByFilters({}),
      ]);
      console.log(appsData, 'data');

      setApplications(appsData);
      setJobs(jobsData);
    } catch (err) {
      console.error('Error loading data:', err);
      setError('Failed to load applications');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: Omit<Application, 'id'>) => {
    try {
      setIsSubmitting(true);
      setError(null);

      if (editingApp) {
        const updated = await updateApplication(editingApp.id, data);
        setApplications(applications.map(app => (app.id === editingApp.id ? updated : app)));
      } else {
        const created = await createApplication(data);
        setApplications([created, ...applications]);
      }

      setIsFormModalOpen(false);
      setEditingApp(null);
    } catch (err) {
      console.error('Error saving application:', err);
      setError('Failed to save application');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStatusChange = async (id: number, status: ApplicationStatus) => {
    try {
      const appToUpdate = applications.find((app) => app.id === id);
      if (!appToUpdate) return;

      const updated = await updateApplication(id, {
        ...appToUpdate,
        status,
        lastUpdated: new Date().toISOString().split('T')[0],
      });
      setApplications(applications.map(app => (app.id === id ? updated : app)));
    } catch (err) {
      console.error('Error updating status:', err);
      setError('Failed to update application status');
    }
  };

  const handleDelete = async (id: number) => {
    setAppToDelete(id);
    setDeleteConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (appToDelete === null) return;

    try {
      await deleteApplication(appToDelete);
      setApplications(applications.filter(app => app.id !== appToDelete));
      setDeleteConfirmOpen(false);
      setAppToDelete(null);
    } catch (err) {
      console.error('Error deleting application:', err);
      setError('Failed to delete application');
    }
  };

  const handleEdit = (app: Application) => {
    setEditingApp(app);
    setIsFormModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsFormModalOpen(false);
    setEditingApp(null);
  };

  const filteredApplications = applications.filter(app => {
    const statusMatch = filterStatus === 'all' || app.status === filterStatus;
    const platformMatch = filterPlatform === 'all' || app.platform === filterPlatform;
    return statusMatch && platformMatch;
  });

  const stats = {
    total: applications.length,
    applied: applications.filter(a => a.status === 'applied').length,
    interviews: applications.filter(a => a.status === 'interview_scheduled' || a.status === 'interview_completed').length,
    offers: applications.filter(a => a.status === 'offered').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
  };

  if (loading && applications.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-gray-900">Application Tracker</h1>
          <Button
            variant='ghost'
            onClick={() => {
              setEditingApp(null);
              setIsFormModalOpen(true);
            }}
            className="px-6 py-2 bg-black  text-white rounded-lg transition-colors font-medium"
          >
            + Track New Application
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-gray-600 text-sm font-medium">Total</p>
            <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="text-gray-600 text-sm font-medium">Applied</p>
            <p className="text-3xl font-bold text-purple-600">{stats.applied}</p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
            <p className="text-gray-600 text-sm font-medium">Interviews</p>
            <p className="text-3xl font-bold text-indigo-600">{stats.interviews}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-gray-600 text-sm font-medium">Offers</p>
            <p className="text-3xl font-bold text-green-600">{stats.offers}</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <p className="text-gray-600 text-sm font-medium">Rejected</p>
            <p className="text-3xl font-bold text-red-600">{stats.rejected}</p>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <Modal
        open={isFormModalOpen}
        onOpenChange={handleCloseModal}
        title={editingApp ? 'Edit Application' : 'Track New Application'}
        description={editingApp ? 'Update your application details' : 'Add a new application to track'}
      >
        <ApplicationFormRHF
          jobs={jobs}
          initialData={editingApp || undefined}
          onSubmit={handleSubmit}
          onCancel={handleCloseModal}
          isLoading={isSubmitting}
        />
      </Modal>

      <ConfirmDialog
        open={deleteConfirmOpen}
        onOpenChange={setDeleteConfirmOpen}
        title="Delete Application"
        description="Are you sure you want to delete this application? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleConfirmDelete}
        variant="danger"
      />

      {applications.length > 0 && (
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Status
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as ApplicationStatus | 'all')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Statuses</option>
              <option value="applied">Applied</option>
              <option value="interview_scheduled">Interview Scheduled</option>
              <option value="interview_completed">Interview Completed</option>
              <option value="offered">Offer Received</option>
              <option value="rejected">Rejected</option>
              <option value="accepted">Accepted</option>
              <option value="withdrawn">Withdrawn</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Platform
            </label>
            <select
              value={filterPlatform}
              onChange={(e) => setFilterPlatform(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Platforms</option>
              <option value="linkedin">LinkedIn</option>
              <option value="indeed">Indeed</option>
              <option value="glassdoor">Glassdoor</option>
              <option value="company_website">Company Website</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      )}

      {/* Applications List */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Your Applications {filteredApplications.length < applications.length && `(${filteredApplications.length} of ${applications.length})`}
        </h2>

        {filteredApplications.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600 text-lg">
              {applications.length === 0
                ? 'No applications tracked yet.'
                : 'No applications match your filters.'}
            </p>
            <p className="text-gray-500 mt-2">
              {applications.length === 0 && 'Click "Track New Application" to get started!'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredApplications.map((app) => (
              <ApplicationCard
                key={app.id}
                application={app}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationTrackerPage;
