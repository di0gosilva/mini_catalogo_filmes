import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  return (
    <div className='min-h-screen flex flex-col bg-[#121212] text-white'>
      <div className='bg-[#1E1E1E] py-3'>
        <Header />
      </div>

      <div className='flex flex-1 mx-auto w-full px-10'>
        <Outlet />
      </div>

      <footer className="text-sm bg-[#1E1E1E] py-3">
        <div className='px-10 mx-auto w-full flex items-center justify-between '>
          <p>Todos os direitos reservados.</p>
          <p>&copy; Diogo Silva 2025</p>
        </div>
      </footer>
    </div>
  )
}
