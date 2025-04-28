import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex items-center justify-between mx-auto w-full px-10">
      <Link to="/" className="flex items-center hover:text-[#00ADB5] transition duration-300">
        <h1 className="font-medium uppercase text-[18px]">LOGO</h1>
      </Link>

      <nav className="flex gap-5">
        <Link className='hover:text-[#00ADB5] transition duration-300' to="/">Home</Link>
        <Link className='hover:text-[#00ADB5] transition duration-300' to="/movies">Filmes</Link>
      </nav>
    </header>
  )
}
