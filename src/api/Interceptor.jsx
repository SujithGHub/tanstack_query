import axios from 'axios';
import { BASE_URL } from './EndPoints';

const axiosInstance = axios.create({
  baseURL: BASE_URL, // Set your base URL here
  timeout: 5000, // Optional: Set a timeout
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add headers or modify the request here
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Transform or log response here
    return response;
  },
  (error) => {
    // Handle errors globally
    console.error('Response Error:', error.response);
    // You can show a toast notification or redirect on certain errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
