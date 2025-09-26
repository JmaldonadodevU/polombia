import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import './App.css'
import Home  from './components/home'
import Map from './components/map'
import About from './components/about'
import Details from './components/details'
import Favorites from './components/favorites' 

function App() {
  return (
    <>
      <Router>
        <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/informativa">Informativa</Link>
          <Link to="/mapa">Mapa</Link>
          <Link to="/favoritos">Favoritos</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informativa" element={<About />} />
          <Route path="/mapa" element={<Map />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/detalle/:depto/:municipio" element={<Details />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
