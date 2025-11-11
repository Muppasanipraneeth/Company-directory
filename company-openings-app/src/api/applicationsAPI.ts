import type { Application } from '@/types';
import { apiClient } from './apiClient';

export const getApplications = async (): Promise<Application[]> => {
  try {
    const response = await apiClient.get('/applications');
    return response.data;
  } catch (error) {
    console.error('Error fetching applications:', error);
    return [];
  }
};

export const getApplicationsByJobId = async (jobId: number): Promise<Application[]> => {
  try {
    const response = await apiClient.get(`/applications?jobId=${jobId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching applications for job:', error);
    return [];
  }
};

export const getApplicationsByPlatform = async (platform: string): Promise<Application[]> => {
  try {
    const response = await apiClient.get(`/applications?platform=${platform}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching applications by platform:', error);
    return [];
  }
};

export const createApplication = async (
  applicationData: Omit<Application, 'id'>,
): Promise<Application> => {
  try {
    const response = await apiClient.post('/applications', applicationData);
    return response.data;
  } catch (error) {
    console.error('Error creating application:', error);
    throw error;
  }
};

export const updateApplication = async (
  id: number,
  applicationData: Partial<Omit<Application, 'id'>>,
): Promise<Application> => {
  try {
    const response = await apiClient.patch(`/applications/${id}`, applicationData);
    return response.data;
  } catch (error) {
    console.error('Error updating application:', error);
    throw error;
  }
};

export const deleteApplication = async (id: number): Promise<void> => {
  try {
    await apiClient.delete(`/applications/${id}`);
  } catch (error) {
    console.error('Error deleting application:', error);
    throw error;
  }
};