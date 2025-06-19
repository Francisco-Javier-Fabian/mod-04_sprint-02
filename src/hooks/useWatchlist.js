import { useEffect } from "react";

export function useWatchlist(watchlist, setWatchlist, key = "watchlist") {
  
  // Guardar en localStorage cuando watchlist cambie
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(watchlist));
  }, [watchlist, key]);
  
  // Añadir pelicula nueva a watchlist
  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  }

  // Remover una pelicula de watchlist
  const handleRemoveMovie = (movieId) => {
    setWatchlist((prevWatchlist) => prevWatchlist.filter(movie => movie.id !== movieId))
  }


  return { addToWatchlist, handleRemoveMovie };
}

