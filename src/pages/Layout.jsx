import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function Layout() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='mx-auto max-w-[1024px] w-full px-3'>
        <Header />
      </div>

      <div className='flex flex-1 mx-auto max-w-[1024px] w-full px-3'>
        <Outlet />
      </div>

      <footer className="h-10 flex items-center justify-between max-w-[1024px] w-full px-3 mx-auto text-sm">
        <p>Todos os direitos reservados.</p>
        <p>&copy; Diogo Silva 2025</p>
      </footer>
    </div>
  )
}
