import type { Application, ApplicationPlatform, ApplicationStatus } from '@/types';
import { Calendar, Edit2, ExternalLink, MessageSquare, Trash2, User } from 'lucide-react';
import React from 'react';

const statusColors: Record<ApplicationStatus, string> = {
  applied: 'bg-slate-100 text-slate-800',
  interview_scheduled: 'bg-slate-100 text-slate-800',
  interview_completed: 'bg-slate-100 text-slate-800',
  offered: 'bg-slate-100 text-slate-800',
  rejected: 'bg-slate-100 text-slate-800',
  accepted: 'bg-slate-100 text-slate-800',
  withdrawn: 'bg-slate-100 text-slate-800',
};

const platformIcons: Record<ApplicationPlatform, string> = {
  linkedin: '💼',
  indeed: '🔍',
  glassdoor: '⭐',
  company_website: '🌐',
  other: '📝',
};

const statusLabels: Record<ApplicationStatus, string> = {
  applied: 'Applied',
  interview_scheduled: 'Interview Scheduled',
  interview_completed: 'Interview Completed',
  offered: 'Offer Received',
  rejected: 'Rejected',
  accepted: 'Accepted',
  withdrawn: 'Withdrawn',
};

interface ApplicationCardProps {
  application: Application;
  onStatusChange?: (id: number, status: ApplicationStatus) => void;
  onDelete?: (id: number) => void;
  onEdit?: (application: Application) => void;
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({
  application,
  onStatusChange,
  onDelete,
  onEdit,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4 hover:shadow-md transition-all duration-200 border border-slate-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Header with Icon and Title */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
              <span className="text-lg">{platformIcons[application.platform]}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{application.jobTitle}</h3>
              <p className="text-sm font-medium text-slate-600">{application.company}</p>
            </div>
          </div>

          {/* Date Information with Icons */}
          <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-slate-400" />
              <span>Applied: {formatDate(application.appliedDate)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-slate-400" />
              <span>Updated: {formatDate(application.lastUpdated)}</span>
            </div>
          </div>

          {/* Profile Link if available */}
          {application.profileLink && (
            <div className="mb-3 flex items-center gap-2">
              <a
                href={application.profileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                View Profile
              </a>
            </div>
          )}

          {/* Notes Section */}
          {application.notes && (
            <div className="mb-3 flex gap-2 rounded-lg bg-slate-100 p-3 border border-slate-300">
              <MessageSquare className="h-4 w-4 text-slate-700 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700">{application.notes}</p>
            </div>
          )}

          {/* Referrer Section */}
          {application.referrer && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <User className="h-4 w-4 text-gray-400" />
              <span>
                <span className="font-medium">Referrer:</span> {application.referrer}
              </span>
            </div>
          )}
        </div>

        {/* Status Badge */}
        <div className="ml-4 flex flex-col items-end gap-3">
          <span className={`px-4 py-2 rounded-full text-xs font-bold ${statusColors[application.status]}`}>
            {statusLabels[application.status]}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex gap-2 justify-end">
        {onStatusChange && (
          <select
            value={application.status}
            onChange={(e) => onStatusChange(application.id, e.target.value as ApplicationStatus)}
            className="px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white text-slate-900 hover:border-slate-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
          >
            {(Object.keys(statusLabels) as ApplicationStatus[]).map((status) => (
              <option key={status} value={status}>
                {statusLabels[status]}
              </option>
            ))}
          </select>
        )}
        {onEdit && (
          <button
            onClick={() => onEdit(application)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 shadow-sm hover:shadow-md"
          >
            <Edit2 className="h-4 w-4" />
            Edit
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(application.id)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 shadow-sm hover:shadow-md"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
