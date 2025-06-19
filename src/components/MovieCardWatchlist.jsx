const MovieCardWatchlist = ({ movie, onRemove }) => {

  return (

    <li key={movie.id} className="bg-gray-800 flex gap-3 items-center justify-between p-2 mb-3 rounded-lg">
      <div className="min-w-20 max-w-20 h-20 overflow-hidden rounded-lg">
      <img src={`/assets/imgMovies/${movie.img}.jpg`} alt={movie.name} className="w-full h-full object-cover"/>
      </div>
      <span className="text-white">{movie.name}</span>
      <button
        className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-md"
        onClick={() => onRemove(movie.id)}
      ><i class="bi bi-trash3 text-lg"></i>
       
      </button>
    </li>

  )
}

export default MovieCardWatchlist