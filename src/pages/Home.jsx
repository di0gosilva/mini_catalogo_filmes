import React, { useState, useEffect } from 'react'
import { API_KEY } from '../config/data'
import { Link } from 'react-router-dom'

const BASE_URL = 'https://api.themoviedb.org/3'

function PopularMovies() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`)
        const data = await response.json()
        setMovies(data.results || [])
        setTotalPages(data.total_pages)
      } catch (error) {
        console.error('Erro ao buscar filmes:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPopularMovies()
  }, [page])

  const handlePrevious = () => {
    if (page > 1) {
      setPage(prev => prev - 1)
    }
  }

  const handleNext = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1)
    }
  }

  return (
    <div className="max-w-6xl mx-auto flex flex-1 flex-col items-center justify-center gap-10 my-10">
      <h1 className="text-4xl font-bold text-center">🎬 Catálogo de Filmes</h1>

      {loading && (
        <div className="text-4xl font-bold text-center">Carregando filmes...</div>
      )}

      <div className="flex flex-wrap justify-center gap-10">
        {movies.map(movie => (
          <div key={movie.id} className="w-58">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'https://via.placeholder.com/200x300?text=Sem+Imagem'}
                alt={movie.title}
                className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            </Link>
            <h3 className="text-center text-lg font-semibold mt-3">{movie.title}</h3>
            <p className="text-center text-gray-500">{movie.release_date ? movie.release_date.split('-')[0] : 'Ano desconhecido'}</p>
          </div>
        ))}
      </div>

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
    </div>
  );
}

export default PopularMovies;
