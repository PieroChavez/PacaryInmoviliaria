// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './assets/Components/Nabvar/Navbar';
import Footer from './assets/Components/Footer/Footer';
import Home from './assets/pages/Home/Home';
import Nosotros from './assets/pages/Nosotros/Nosotros';
import Contacto from './assets/pages/Contacto/Contacto';
import Preventa from './assets/pages/Preventa/Preventa';

function App() {
  return (
    <Router>
      <div>
        {/* La barra de navegación permanece fija en todas las páginas */}
        <Navbar />  
        
        {/* Definición de las rutas */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Preventa" element={<Preventa />} />
        </Routes>

        {/* El pie de página permanece fijo en todas las páginas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
