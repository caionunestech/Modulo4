import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import Contato from './views/Contato'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Promocao from './views/Promocao'
import Destinos from './views/Destinos'
import './css.style/style.css'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Destinos" element={<Destinos />} />
        <Route path="/Promocao" element={<Promocao />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
