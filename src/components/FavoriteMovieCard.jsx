import { Link } from 'react-router-dom'

export default function FavoriteMovieCard({ favoriteMovies, removeFavorite}) {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {favoriteMovies.map(movie => (
        <div key={movie.id} className="w-58">
        <Link title='Ver detalhes' to={`/movie/${movie.id}`}>
          <img
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'https://via.placeholder.com/200x300?text=Sem+Imagem'}
            alt={movie.title}
            className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        </Link>
        <h3 className="text-center text-lg font-semibold mt-3">{movie.title}</h3>
        <div className="flex items-center justify-evenly">
          <p className='text-center'>⭐ {movie.vote_average.toFixed(1)}</p>
          <button
            className="text-[18px] cursor-pointer"
            onClick={() => removeFavorite(movie.id)}
            title="Remover dos favoritos"
          >️️️
            ❤️
          </button>
        </div>
      </div>
      ))}
    </div>
  )
}
