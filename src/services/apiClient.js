import axios from 'axios';

// Create axios instance
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_OMDB_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add API key
apiClient.interceptors.request.use(
  (config) => {
    // Add API key to all requests
    config.params = {
      ...config.params,
      apikey: process.env.REACT_APP_OMDB_API_KEY || 'demo',
    };
    
    console.log('Making API request:', config.url);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors and transform data
apiClient.interceptors.response.use(
  (response) => {
    console.log('API response received:', response.data);
    
    // Check if the response indicates an error from OMDb API
    if (response.data.Response === 'False') {
      const error = new Error(response.data.Error || 'Movie not found');
      error.response = response;
      return Promise.reject(error);
    }
    
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    
    // Handle different types of errors
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      let message = 'An error occurred';
      
      switch (status) {
        case 401:
          message = 'Invalid API key';
          break;
        case 403:
          message = 'API access forbidden';
          break;
        case 404:
          message = 'Movie not found';
          break;
        case 429:
          message = 'Too many requests. Please try again later';
          break;
        case 500:
          message = 'Server error. Please try again later';
          break;
        default:
          message = error.response.data?.Error || 'An error occurred';
      }
      
      error.message = message;
    } else if (error.request) {
      // Network error
      error.message = 'Network error. Please check your connection';
    } else {
      // Other error
      error.message = error.message || 'An unexpected error occurred';
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
