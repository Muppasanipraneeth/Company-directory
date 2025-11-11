export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}

export interface PaginatedJobsResponse {
  data: Job[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export type ApplicationStatus = 
  | 'applied' 
  | 'interview_scheduled' 
  | 'interview_completed' 
  | 'offered' 
  | 'rejected' 
  | 'accepted' 
  | 'withdrawn';

export type ApplicationPlatform = 
  | 'linkedin' 
  | 'indeed' 
  | 'glassdoor' 
  | 'company_website' 
  | 'other';

export interface Application {
  id: number;
  jobId: number;
  jobTitle: string;
  company: string;
  platform: ApplicationPlatform;
  status: ApplicationStatus;
  appliedDate: string;
  lastUpdated: string;
  notes?: string;
  profileLink?: string;
  referrer?: string;
}
