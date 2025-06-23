import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./pages/homePage/index.jsx";
import ParrandasPage from "./pages/salonPage/index.jsx";

import NovenasPage from "./pages/novenasPage.jsx";
import JuegosPage from "./pages/juegosPage.jsx";
import NotFound from "./pages/notFound.jsx";
import RecetasPage from "./pages/recetasPage/index.jsx";


function App() {
    return (
        <Router>
            <Routes >
                <Route path="/" element={<Index />} />
                <Route path="/salon-de-parrandas" element={<ParrandasPage />} />
                <Route path="/recetas" element={<RecetasPage />} />
                <Route path="/novenas" element={<NovenasPage />} />
                <Route path="/juegos-y-rituales" element={<JuegosPage />} />
                {/* 404 fallback */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
