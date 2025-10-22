import apiClient from './apiClient';

// Search movies by title
export const searchMovies = async (query, page = 1) => {
  try {
    const response = await apiClient.get('/', {
      params: {
        s: query,
        page: page,
        type: 'movie', // Only search for movies
      },
    });
    
    return {
      movies: response.data.Search || [],
      totalResults: parseInt(response.data.totalResults) || 0,
      currentPage: page,
    };
  } catch (error) {
    throw error;
  }
};

// Get movie details by IMDb ID
export const getMovieDetails = async (imdbID) => {
  try {
    const response = await apiClient.get('/', {
      params: {
        i: imdbID,
        plot: 'full', // Get full plot
      },
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get movie by title (for direct search)
export const getMovieByTitle = async (title) => {
  try {
    const response = await apiClient.get('/', {
      params: {
        t: title,
        plot: 'full',
      },
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};


