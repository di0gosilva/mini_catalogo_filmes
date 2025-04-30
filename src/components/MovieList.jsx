import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

export default function MovieList({ movies}) {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {movies.map(movie => (
        <MovieCard
          movie={movie}
        />
      ))}
    </div>
  )
}
