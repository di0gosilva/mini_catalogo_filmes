import { useEffect, useState } from 'react'

const API_KEY = "7035d828c4b28bc716dda6b15342ae46"
const BASE_URL = 'https://api.themoviedb.org/3'

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`);
        const data = await response.json();
        setMovies(data.results || [])
        setTotalPages(data.total_pages)
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
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

  return (
    <div className="max-w-6xl mx-auto flex flex-1 flex-col items-center justify-center gap-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">🎬 Catálogo de Filmes</h1>

      { loading && (
        <div className="text-4xl font-medium">Carregando filmes...</div>)
      }

      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {movies.map(movie => (
          <div key={movie.id} className="w-60">
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
          className={`flex pb-1 items-center justify-center w-12 h-12 rounded-full text-white text-2xl font-bold  ${page === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00ADB5] hover:bg-[#037c83]'}`}
        >
          ←
        </button>

        <span className="text-lg font-medium">
          {page} de {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className={`flex pb-1 items-center justify-center w-12 h-12 rounded-full text-white text-2xl font-bold ${page === totalPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00ADB5] hover:bg-[#037c83]'}`}
        >
          →
        </button>
      </div>
    </div>


    // <div className="flex flex-1 flex-col items-center justify-center gap-12 py-10">
    //   <h1 className="text-4xl font-medium">🎬 Catálogo de Filmes</h1>

    //   <div className="grid grid-cols-3 gap-20">
    //     {movies.map(movie => (
    //       <div key={movie.id} className="w-[300px] h-[450px] flex flex-col items-center justify-start">
    //         <img
    //           src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'https://via.placeholder.com/200x300?text=Sem+Imagem'}
    //           alt={movie.title}
    //           className="h-100 object-cover"
    //         />
    //         <h3 className="text-lg font-medium text-center break-words mt-2">{movie.title}</h3>
    //         <p className="text-gray-500">{movie.release_date ? movie.release_date.split('-')[0] : 'Ano desconhecido'}</p>
    //       </div>
    //     ))}
    //   </div>

    //   <div className='flex justify-center gap-3'>
    //     <button onClick={handlePrevious} disabled={page === 1}>
    //       Página Anterior
    //     </button>
    //     <span>Página {page} de {totalPages}</span>
    //     <button onClick={handleNext} disabled={page === totalPages}>
    //       Próxima Página
    //     </button>
    //   </div>
    // </div>
  );
}
