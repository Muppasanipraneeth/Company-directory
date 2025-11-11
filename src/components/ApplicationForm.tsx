import type { Application, ApplicationPlatform, ApplicationStatus } from '@/types';
import React, { useState } from 'react';

interface ApplicationFormProps {
  jobs?: { id: number; title: string; company: string }[];
  initialData?: Application;
  onSubmit: (data: Omit<Application, 'id'>) => void;
  onCancel?: () => void;
  isLoading?: boolean;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  jobs = [],
  initialData,
  onSubmit,
  onCancel,
  isLoading = false,
}) => {
  const [jobId, setJobId] = useState(initialData?.jobId.toString() || '');
  const [jobTitle, setJobTitle] = useState(initialData?.jobTitle || '');
  const [company, setCompany] = useState(initialData?.company || '');
  const [platform, setPlatform] = useState<ApplicationPlatform>(initialData?.platform || 'linkedin');
  const [status, setStatus] = useState<ApplicationStatus>(initialData?.status || 'applied');
  const [appliedDate, setAppliedDate] = useState(initialData?.appliedDate || new Date().toISOString().split('T')[0]);
  const [notes, setNotes] = useState(initialData?.notes || '');
  const [profileLink, setProfileLink] = useState(initialData?.profileLink || '');
  const [referrer, setReferrer] = useState(initialData?.referrer || '');
  const [error, setError] = useState<string | null>(null);

  const handleJobSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    setJobId(selectedId);

    const selectedJob = jobs.find(j => j.id.toString() === selectedId);
    if (selectedJob) {
      setJobTitle(selectedJob.title);
      setCompany(selectedJob.company);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!jobId && !jobTitle) {
      setError('Please select or enter a job title');
      return;
    }

    if (!company) {
      setError('Please enter a company name');
      return;
    }

    if (!appliedDate) {
      setError('Please select an application date');
      return;
    }

    try {
      const formData: Omit<Application, 'id'> = {
        jobId: jobId ? parseInt(jobId) : 0,
        jobTitle: jobTitle || '',
        company,
        platform,
        status,
        appliedDate,
        lastUpdated: new Date().toISOString().split('T')[0],
        notes: notes || undefined,
        profileLink: profileLink || undefined,
        referrer: referrer || undefined,
      };

      onSubmit(formData);
    } catch {
      setError('Failed to submit form');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">
        {initialData ? 'Edit Application' : 'Track New Application'}
      </h2>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Job Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job (Optional - select from list)
          </label>
          <select
            value={jobId}
            onChange={handleJobSelect}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select a job --</option>
            {jobs.map((job) => (
              <option key={job.id} value={job.id}>
                {job.title} @ {job.company}
              </option>
            ))}
          </select>
        </div>

        {/* Platform */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Platform *
          </label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value as ApplicationPlatform)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="linkedin">LinkedIn</option>
            <option value="indeed">Indeed</option>
            <option value="glassdoor">Glassdoor</option>
            <option value="company_website">Company Website</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Title *
          </label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="e.g., Senior Frontend Developer"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company *
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g., Tech Company Inc."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Applied Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date Applied *
          </label>
          <input
            type="date"
            value={appliedDate}
            onChange={(e) => setAppliedDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status *
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as ApplicationStatus)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="applied">Applied</option>
            <option value="interview_scheduled">Interview Scheduled</option>
            <option value="interview_completed">Interview Completed</option>
            <option value="offered">Offer Received</option>
            <option value="rejected">Rejected</option>
            <option value="accepted">Accepted</option>
            <option value="withdrawn">Withdrawn</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Referrer */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Referrer (Optional)
          </label>
          <input
            type="text"
            value={referrer}
            onChange={(e) => setReferrer(e.target.value)}
            placeholder="Who referred you?"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Profile Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Link (Optional)
          </label>
          <input
            type="url"
            value={profileLink}
            onChange={(e) => setProfileLink(e.target.value)}
            placeholder="https://linkedin.com/in/yourprofile"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Notes */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Notes (Optional)
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add any notes about this application..."
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-end">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            disabled={isLoading}
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : initialData ? 'Update Application' : 'Track Application'}
        </button>
      </div>
    </form>
  );
};
