import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div key={movie.id} className="w-58">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'https://via.placeholder.com/200x300?text=Sem+Imagem'}
          alt={movie.title}
          className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform"
        />
      </Link>
      <h3 className="text-center text-lg font-semibold mt-3">{movie.title}</h3>
      <p className='text-center'>⭐ {movie.vote_average.toFixed(1)}</p>
    </div>
  )
}
