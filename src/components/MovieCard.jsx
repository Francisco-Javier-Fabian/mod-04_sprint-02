const MovieCard = ({ movie, onAdd, onRemove, isInWatchlist }) => {

  return (
    <div className='bg-stone-800 w-full xl:p-5 p-4 rounded-xl shadow-md text-center'>
      <div className="w-full md:h-80 lg:h-96 xl:h-[550px] overflow-hidden rounded-xl">
        <img src={`/assets/imgMovies/${movie.img}.jpg`} alt={movie.name} className="w-full h-full object-cover" />
      </div>
      <h2 className="text-lg lg:text-xl font-bold text-white my-3 lg:my-4">{movie.name}</h2>
      {isInWatchlist ? (
        <button
          onClick={() => onRemove(movie.id)}
          className=" bg-orange-800
          hover:bg-orange-800 text-white font-medium mt-2 px-4 py-2 rounded "
        >
          <i class="bi bi-bookmark-check
 md:text-lg flex gap-2 items-center justify-center">Quitar</i>
        </button>
      ) : (
        <button
          onClick={() => onAdd(movie)}
          className=" bg-stone-950 hover:bg-stone-900 text-white font-medium mt-2 mx-auto h-fit px-5 py-1.5 rounded"
        >
          <i class="bi bi-bookmark-plus  md:text-lg flex gap-2 items-center justify-center">Mi lista</i>
        </button>
      )}
    </div>
  )
}

export default MovieCard
