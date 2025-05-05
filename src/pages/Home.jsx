import React, { useState, useEffect } from 'react'
import MovieList from '../components/MovieList'
import MoviePagination from '../components/MoviePagination'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_API_KEY

export default function Home() {
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

      {loading && (
        <div className="text-4xl font-bold text-center">Carregando filmes...</div>
      )}

      <MovieList
        movies={movies}
      />

      {!loading && movies.length > 0 && (
        <MoviePagination
          handlePrevious={handlePrevious}
          page={page}
          totalPages={totalPages}
          handleNext={handleNext}
        />
      )}
    </div>
  );
}
