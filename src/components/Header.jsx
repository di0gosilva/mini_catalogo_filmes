import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-3">
      <Link to="/" className="flex items-center gap-1 lg:gap-2">
        <h1 className="font-medium uppercase text-[18px]">LOGO</h1>
      </Link>

      <nav className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/movies">Filmes</Link>
      </nav>
    </header>
  )
}
