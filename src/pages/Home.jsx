import React, { useState, useEffect } from 'react';
import { API_KEY } from '../config/data';

const BASE_URL = 'https://api.themoviedb.org/3';

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchPopularMovies() {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`);
        const data = await response.json();
        setMovies(data.results || []);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error('Erro ao buscar filmes populares:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPopularMovies();
  }, [page]);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
  };

  if (loading) {
    return <div className="text-center text-xl mt-10">Carregando filmes...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Filmes Populares</h1>

      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {movies.map(movie => (
          <div key={movie.id} className="w-48">
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'https://via.placeholder.com/200x300?text=Sem+Imagem'}
              alt={movie.title}
              className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform"
            />
            <h3 className="text-center text-lg font-semibold mt-2">{movie.title}</h3>
            <p className="text-center text-gray-500">{movie.release_date ? movie.release_date.split('-')[0] : 'Ano desconhecido'}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          className={`px-4 py-2 rounded-full text-white font-semibold ${page === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          «
        </button>

        <span className="text-lg font-medium">
          Página {page} de {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-full text-white font-semibold ${page === totalPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          »
        </button>
      </div>
    </div>
  );
}

export default PopularMovies;
