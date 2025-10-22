import React, { useState } from 'react';
import { searchMovies } from '../services/movieService';
import MovieCard from './MovieCard';
import LoadingSpinner from './LoadingSpinner';
import { Input, Button, Card, EmptyState } from './ui';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const result = await searchMovies(query.trim());
      setMovies(result.movies);
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (error) setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Search Form */}
      <Card className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Discover Your Next Favorite Movie
        </h1>
        
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search for movies..."
              className="text-lg"
              disabled={loading}
            />
          </div>
          <Button
            type="submit"
            disabled={loading || !query.trim()}
            loading={loading}
            className="px-6 py-3"
          >
            {loading ? 'Searching...' : 'Search'}
          </Button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-600 dark:text-red-400 text-center">{error}</p>
          </div>
        )}
      </Card>

      {/* Search Results */}
      {hasSearched && (
        <div className="animate-fade-in">
          {loading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner />
            </div>
          ) : movies.length > 0 ? (
            <>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Search Results ({movies.length} movies found)
            </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
                {movies.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
              </div>
            </>
          ) : (
            <EmptyState
              icon="🔍"
              title="No movies found"
              description="Try searching with a different keyword"
              actionText="Try Again"
              actionLink="/"
            />
          )}
        </div>
      )}

      {/* Welcome Message */}
      {!hasSearched && (
        <EmptyState
          icon="🎬"
          title="Welcome to CineSearch"
          description="Discover your next favorite movie with our powerful search engine!"
          actionText="Start Searching"
          actionLink="#"
        />
      )}
    </div>
  );
};

export default MovieSearch;
