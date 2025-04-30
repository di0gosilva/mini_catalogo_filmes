import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_KEY } from '../config/data'

const BASE_URL = 'https://api.themoviedb.org/3'

export default function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
        const data = await response.json()
        setMovie(data)
      } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovieDetails()
  }, [id])

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link
        to="/"
        className="hover:underline mb-4 inline-block"
      >
        ← Voltar
      </Link>

      {loading && (
        <div className="text-4xl font-bold text-center">Carregando detalhes...</div>
      )}

      {movie && (
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <img
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/300x450?text=Sem+Imagem'}
            alt={movie.title}
            className="rounded-lg shadow-md"
          />
          <div>
            <p><strong>Gênero:</strong> {movie.genres.map(genre => genre.name).join(', ')} </p>
            <p><strong>Nota:</strong> {movie.vote_average.toFixed(1)} / 10</p>
            <p><strong>Data de lançamento:</strong> {new Date(movie.release_date).toLocaleDateString('pt-BR')}</p>
          </div>
          <p className="text-center">{movie.overview}</p>
        </div>
      )}
    </div>
  )
}
