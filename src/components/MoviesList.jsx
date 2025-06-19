import movies from '../api/movie.json'
import MovieCard from './MovieCard'

const MoviesList = ({ watchlist, addToWatchlist, handleRemoveMovie }) => {

  const isInWatchlist = (movieId) => 
    watchlist.some((movie) => movie.id === movieId);

 return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-8 py-4 px-5 xl:py-10 xl:px-24">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isInWatchlist={isInWatchlist(movie.id)}
          onAdd={addToWatchlist}
          onRemove={handleRemoveMovie}
        />
      ))}
    </div>
  );

}

export default MoviesList