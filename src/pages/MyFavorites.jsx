import React, { useEffect, useState } from 'react'
import FavoriteMovieCard from '../components/FavoriteMovieCard'
import { Link } from 'react-router-dom'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_API_KEY

export default function MyFavorites() {
  const [favoriteMovies, setFavoriteMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFavorites = async () => {
      const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || []

      if (savedFavorites.length === 0) {
        setFavoriteMovies([])
        setLoading(false)
        return
      }

      try {
        const promises = savedFavorites.map(id =>
          fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`).then(res => res.json())
        )

        const movies = await Promise.all(promises)
        setFavoriteMovies(movies)
      } catch (error) {
        console.error('Erro ao buscar filmes favoritos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFavorites()
  }, [])

  const removeFavorite = (movieId) => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
    const updatedFavorites = savedFavorites.filter(id => id !== movieId)

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    setFavoriteMovies(prev => prev.filter(movie => movie.id !== movieId))
  }

  return (
      <div className="max-w-6xl mx-auto flex flex-1 flex-col items-center justify-center gap-10 my-10">
        <Link
            to="/"
            className="hover:underline mb-4 inline-block"
          >
            ← Voltar
        </Link>
        <h1 className="text-4xl font-bold text-center">Meus Favoritos ❤️</h1>

        {loading && (
          <div className="text-4xl font-bold text-center">Carregando filmes...</div>
        )}

        <FavoriteMovieCard
          favoriteMovies={favoriteMovies}
          removeFavorite={removeFavorite}
        />

        {favoriteMovies.length === 0 && (
          <h1 className="text-3xl font-bold text-center">Você ainda não tem filmes favoritados.</h1>
        )}
      </div>
  )
}
