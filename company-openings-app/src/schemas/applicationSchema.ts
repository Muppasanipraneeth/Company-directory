import { z } from 'zod';

export const applicationSchema = z.object({
  jobId: z.number().int().nonnegative('Job ID must be a positive number'),
  jobTitle: z.string().min(2, 'Job title must be at least 2 characters').max(255, 'Job title must be less than 255 characters'),
  company: z.string().min(2, 'Company name must be at least 2 characters').max(255, 'Company name must be less than 255 characters'),
  platform: z.enum(['linkedin', 'indeed', 'glassdoor', 'company_website', 'other']),
  status: z.enum(['applied', 'interview_scheduled', 'interview_completed', 'offered', 'rejected', 'accepted', 'withdrawn']),
  appliedDate: z.string().refine((date) => !Number.isNaN(Date.parse(date)), {
    message: 'Please select a valid date',
  }),
  notes: z.string().optional(),
  profileLink: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  referrer: z.string().optional(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;
