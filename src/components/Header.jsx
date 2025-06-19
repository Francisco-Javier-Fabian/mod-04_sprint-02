const Header = ({ setIsModalOpen }) => {

  const handleOpenModal = () => setIsModalOpen(true)

  return (
    <header className="bg-stone-800 text-white p-4">
      <button
        onClick={handleOpenModal}
        className="bg-stone-900/90 hover:bg-stone-500 transform hover:scale-105 duration-300 text-white py-2 px-4 rounded"
      >
      <i class="bi bi-list font-medium flex text-center items-center text-lg gap-2">Mi lista</i> 
      </button>
    </header>
  )
}

export default Header