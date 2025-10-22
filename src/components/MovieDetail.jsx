import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/movieService';
import { useFavorites } from '../contexts/FavoritesContext';
import LoadingSpinner from './LoadingSpinner';
import { Card, Button, EmptyState, RatingBadge, MovieInfo, BackButton } from './ui';

const MovieDetail = () => {
  const { imdbID } = useParams();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const movieData = await getMovieDetails(imdbID);
        setMovie(movieData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (imdbID) {
      fetchMovieDetails();
    }
  }, [imdbID]);

  const handleFavoriteToggle = () => {
    toggleFavorite(movie);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <EmptyState
        icon="😞"
        title="Movie Not Found"
        description={error}
        actionText="Back to Search"
      />
    );
  }

  if (!movie) {
    return (
      <EmptyState
        icon="🎬"
        title="No Movie Selected"
        description="Please select a movie to view details"
        actionText="Search Movies"
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="overflow-hidden">
        <div className="md:flex">
          {/* Movie Poster */}
          <div className="md:w-1/3">
            {movie.Poster && movie.Poster !== 'N/A' ? (
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-96 md:h-full object-cover"
              />
            ) : (
              <div className="w-full h-96 md:h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center text-gray-400 dark:text-gray-500">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-lg">No Image Available</p>
                </div>
              </div>
            )}
          </div>

          {/* Movie Details */}
          <div className="md:w-2/3 p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {movie.Title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  {movie.Year} • {movie.Rated} • {movie.Runtime}
                </p>
              </div>
              
              <Button
                onClick={handleFavoriteToggle}
                variant={isFavorite(movie.imdbID) ? 'danger' : 'secondary'}
                icon={
                  <svg className="w-5 h-5" fill={isFavorite(movie.imdbID) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                }
              >
                {isFavorite(movie.imdbID) ? 'Favorited' : 'Add to Favorites'}
              </Button>
            </div>

            {/* Plot */}
            {movie.Plot && movie.Plot !== 'N/A' && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Plot</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{movie.Plot}</p>
              </div>
            )}

            {/* Movie Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <MovieInfo label="Director" value={movie.Director} />
              <MovieInfo label="Cast" value={movie.Actors} />
              <MovieInfo label="Genre" value={movie.Genre} />
              <MovieInfo label="Language" value={movie.Language} />
            </div>

            {/* Ratings */}
            {movie.Ratings && movie.Ratings.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Ratings</h3>
                <div className="flex flex-wrap gap-4">
                  {movie.Ratings.map((rating, index) => (
                    <RatingBadge
                      key={index}
                      source={rating.Source}
                      value={rating.Value}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* IMDb Rating */}
            {movie.imdbRating && movie.imdbRating !== 'N/A' && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">IMDb Rating</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-yellow-500">★</span>
                    <span className="text-xl font-bold text-gray-900 dark:text-white ml-1">
                      {movie.imdbRating}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-1">/10</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">
                    ({movie.imdbVotes} votes)
                  </span>
                </div>
              </div>
            )}

            {/* Back Button */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <BackButton />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MovieDetail;
