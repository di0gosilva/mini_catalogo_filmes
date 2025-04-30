import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails"
import MyFavorites from "./pages/MyFavorites"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
            <Route path='/favoritos' element={<MyFavorites />} />
            <Route path='*' element={<h1>Erro! Página não encontrada.</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
