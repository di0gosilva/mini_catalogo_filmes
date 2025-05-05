import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_KEY } from '../config/data'
import MovieDetailsCard from "../components/MovieDetailsCard"

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
    <div className="max-w-4xl mx-auto flex flex-1 flex-col items-center justify-center gap-10 my-10">
      <Link
        to="/"
        className="hover:underline inline-block"
      >
        ← Voltar
      </Link>

      {loading && (
        <div className="text-4xl font-bold text-center">Carregando detalhes...</div>
      )}

      {movie && (
        <MovieDetailsCard movie={movie} />
      )}
    </div>
  )
}
