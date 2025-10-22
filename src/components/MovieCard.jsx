import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';
import { Card } from './ui';

const MovieCard = ({ movie }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(movie);
  };

  return (
    <Link to={`/movie/${movie.imdbID}`} className="block">
      <Card hover size="sm" className="overflow-hidden relative group h-full flex flex-col">
        <div className="relative flex-1">
          {/* Movie Poster */}
          <div className="aspect-[2/3] bg-gray-200 dark:bg-gray-700">
            {movie.Poster && movie.Poster !== 'N/A' ? (
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center text-gray-400 dark:text-gray-500">
                  <div className="text-4xl mb-2">🎬</div>
                  <p className="text-sm">No Image</p>
                </div>
              </div>
            )}
          </div>

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-2 right-2 p-2 bg-white dark:bg-gray-800 bg-opacity-90 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200 ${
              isFavorite(movie.imdbID) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
            }`}
            title={isFavorite(movie.imdbID) ? 'Remove from favorites' : 'Add to favorites'}
          >
            <svg
              className="w-5 h-5"
              fill={isFavorite(movie.imdbID) ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* Movie Info */}
        <div className="p-3 flex-shrink-0">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {movie.Title}
          </h3>
          
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>{movie.Year}</span>
            <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
              {movie.Type}
            </span>
          </div>

          {movie.imdbID && (
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
              <span className="mr-1">IMDb:</span>
              <span className="font-medium">{movie.imdbID}</span>
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default MovieCard;
