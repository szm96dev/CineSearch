import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import MovieCard from '../components/MovieCard';
import { SectionHeader, Button, EmptyState } from '../components/ui';

const Favorites = () => {
  const { favorites, clearFavorites } = useFavorites();

  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeader
        title="My CineSearch Favorites"
        subtitle={`${favorites.length} ${favorites.length === 1 ? 'movie' : 'movies'} saved`}
        action={
          favorites.length > 0 && (
            <Button
              onClick={clearFavorites}
              variant="danger"
              size="sm"
            >
              Clear All
            </Button>
          )
        }
      />

      {favorites.length === 0 ? (
        <EmptyState
          icon="❤️"
          title="No Favorite Movies Yet"
          description="Start searching for movies and add them to your CineSearch favorites!"
          actionText="Search Movies"
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
