import { applicationSchema, type ApplicationFormData } from '@/schemas/applicationSchema';
import type { Application, ApplicationPlatform, ApplicationStatus } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

interface ApplicationFormRHFProps {
  jobs?: { id: number; title: string; company: string }[];
  initialData?: Application;
  onSubmit: (data: Omit<Application, 'id'>) => Promise<void>;
  onCancel?: () => void;
  isLoading?: boolean;
}

export const ApplicationFormRHF: React.FC<ApplicationFormRHFProps> = ({
  jobs = [],
  initialData,
  onSubmit,
  onCancel,
  isLoading = false,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: initialData
      ? {
        jobId: initialData.jobId,
        jobTitle: initialData.jobTitle,
        company: initialData.company,
        platform: initialData.platform,
        status: initialData.status,
        appliedDate: initialData.appliedDate,
        notes: initialData.notes,
        profileLink: initialData.profileLink,
        referrer: initialData.referrer,
      }
      : {
        jobId: 0,
        jobTitle: '',
        company: '',
        platform: 'linkedin',
        status: 'applied',
        appliedDate: new Date().toISOString().split('T')[0],
        notes: '',
        profileLink: '',
        referrer: '',
      },
  });

  const selectedJobId = watch('jobId');

  React.useEffect(() => {
    if (selectedJobId && selectedJobId > 0) {
      const selectedJob = jobs.find(j => j.id === selectedJobId);
      if (selectedJob) {
        reset((prev) => ({
          ...prev,
          jobTitle: selectedJob.title,
          company: selectedJob.company,
        }));
      }
    }
  }, [selectedJobId, jobs, reset]);

  const onSubmitForm = async (data: ApplicationFormData) => {
    try {
      const formData: Omit<Application, 'id'> = {
        jobId: data.jobId,
        jobTitle: data.jobTitle,
        company: data.company,
        platform: data.platform as ApplicationPlatform,
        status: data.status as ApplicationStatus,
        appliedDate: data.appliedDate,
        lastUpdated: new Date().toISOString().split('T')[0],
        notes: data.notes || undefined,
        profileLink: data.profileLink || undefined,
        referrer: data.referrer || undefined,
      };

      await onSubmit(formData);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const isSubmittingForm = isSubmitting || isLoading;

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Job Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job (Optional)</label>
          <select
            {...register('jobId', { valueAsNumber: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={0}>-- Select a job --</option>
            {jobs.map((job) => (
              <option key={job.id} value={job.id}>
                {job.title} @ {job.company}
              </option>
            ))}
          </select>
          {errors.jobId && <p className="mt-1 text-sm text-red-600">{errors.jobId.message}</p>}
        </div>

        {/* Platform */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Platform <span className="text-red-500">*</span>
          </label>
          <select
            {...register('platform')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="linkedin">LinkedIn</option>
            <option value="indeed">Indeed</option>
            <option value="glassdoor">Glassdoor</option>
            <option value="company_website">Company Website</option>
            <option value="other">Other</option>
          </select>
          {errors.platform && <p className="mt-1 text-sm text-red-600">{errors.platform.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g., Senior Frontend Developer"
            {...register('jobTitle')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.jobTitle && <p className="mt-1 text-sm text-red-600">{errors.jobTitle.message}</p>}
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g., Tech Company Inc."
            {...register('company')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Applied Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date Applied <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            {...register('appliedDate')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.appliedDate && <p className="mt-1 text-sm text-red-600">{errors.appliedDate.message}</p>}
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status <span className="text-red-500">*</span>
          </label>
          <select
            {...register('status')}
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
          {errors.status && <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Referrer */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Referrer (Optional)</label>
          <input
            type="text"
            placeholder="Who referred you?"
            {...register('referrer')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.referrer && <p className="mt-1 text-sm text-red-600">{errors.referrer.message}</p>}
        </div>

        {/* Profile Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Profile Link (Optional)</label>
          <input
            type="url"
            placeholder="https://linkedin.com/in/yourprofile"
            {...register('profileLink')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.profileLink && <p className="mt-1 text-sm text-red-600">{errors.profileLink.message}</p>}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
        <textarea
          placeholder="Add any notes about this application..."
          rows={4}
          {...register('notes')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.notes && <p className="mt-1 text-sm text-red-600">{errors.notes.message}</p>}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-end pt-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmittingForm}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={isSubmittingForm}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {isSubmittingForm ? 'Saving...' : initialData ? 'Update Application' : 'Track Application'}
        </button>
      </div>
    </form>
  );
};
