import { useState } from 'react'
import Header from './components/Header'
import WatchlistModal from './components/WatchlistModal'
import MoviesList from './components/MoviesList'
import { useWatchlist } from './hooks/useWatchlist'

const App = () => {

  // Estado para abrir el Modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Estado para la lista de peliculas guardadas
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem("watchlist");
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  })
  // borrar handleRemoveAll
  const { addToWatchlist, handleRemoveMovie } = useWatchlist(watchlist, setWatchlist);

  return (
    <div className='min-h-screen bg-stone-800/90'>
      <Header setIsModalOpen={setIsModalOpen} />

      <WatchlistModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        watchlist={watchlist}
        setWatchlist={setWatchlist}
        handleRemoveMovie={handleRemoveMovie}
        
      />

      <MoviesList
        watchlist={watchlist}
        setWatchlist={setWatchlist}
        addToWatchlist={addToWatchlist}
        handleRemoveMovie={handleRemoveMovie}
      />

    </div>
  )
}

export default App