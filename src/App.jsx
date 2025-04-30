import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
            <Route path='/favoritos' element={<h1>Favoritos</h1>} />
            <Route path='*' element={<h1>Erro! Página não encontrada.</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
