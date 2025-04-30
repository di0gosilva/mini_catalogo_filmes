export default function MoviePagination({
  handlePrevious,
  page,
  totalPages,
  handleNext
}) {
  return (
    <div className="flex justify-center items-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          className={`flex items-center justify-center pt-1  px-4 py-2 rounded-full text-white text-xl font-semibold ${page === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00ADB5] hover:bg-[#428d92]'}`}
        >
          «
        </button>

        <span className="text-lg font-medium">
          {page} de {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className={`flex items-center justify-center pt-1 px-4 py-2 rounded-full text-white text-xl font-semibold ${page === totalPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00ADB5] hover:bg-[#428d92]'}`}
        >
          »
        </button>
      </div>
  )
}
