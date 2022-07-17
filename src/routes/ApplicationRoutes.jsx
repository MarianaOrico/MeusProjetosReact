import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from '../pages/Sobre/Sobre'
import Comentarios from '../pages/Comentarios/Comentarios'
import Portfolio from '../pages/Portfolio/Portfolio'
import Menu from '../componentes/Menu/Menu'
import Contatos from '../pages/Contatos/Contatos'
import Diario from '../pages/Diario/Diario'

function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Sobre />} />
                <Route path="diario" element={<Diario />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="comentarios" element={<Comentarios />} />
                <Route path="contatos" element={<Contatos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ApplicationRoutes