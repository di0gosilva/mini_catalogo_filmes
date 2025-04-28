import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/movies' element={<MovieDetails />} />
            <Route path='*' element={<h1>Erro! Página não encontrada.</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
