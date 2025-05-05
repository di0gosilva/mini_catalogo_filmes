import { useEffect, useState } from "react"

export default function MovieDetailsCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
    setIsFavorite(savedFavorites.includes(movie.id))
  }, [movie.id])

  const toggleFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
    const favorited = savedFavorites.includes(movie.id)

    const updatedFavorites = favorited
      ? savedFavorites.filter(id => id !== movie.id)
      : [...savedFavorites, movie.id]

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    setIsFavorite(!favorited)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold">{movie.title}</h1>
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/300x450?text=Sem+Imagem'}
        alt={movie.title}
        className="rounded-lg shadow-md"
      />
      <div className="flex items-center justify-between gap-30">
        <div>
          <p><strong>Gênero:</strong> {movie.genres.map(genre => genre.name).join(', ')} </p>
          <p><strong>Nota:</strong> {movie.vote_average.toFixed(1)} / 10</p>
          <p><strong>Data de lançamento:</strong> {new Date(movie.release_date).toLocaleDateString('pt-BR')}</p>
        </div>
        <button
          className="text-4xl cursor-pointer"
          onClick={() => toggleFavorite()}
          title="Adicionar aos favoritos"
        >️️️
        {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <p className="text-center">{movie.overview}</p>
    </div>
  )
}
