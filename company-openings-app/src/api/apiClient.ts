import axios from 'axios';

export const apiClient = axios.create({
  // This points to your json-server
  baseURL: 'http://localhost:3000',
});