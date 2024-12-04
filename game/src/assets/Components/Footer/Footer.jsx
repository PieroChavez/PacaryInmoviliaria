// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-inmobiliaria">
      <div className="footer-container">
        {/* Sección de información de contacto */}
        <div className="footer-section">
          <h3>Sobre Nosotros</h3>
          <p>
            Somos una empresa líder en bienes raíces, dedicada a ayudarte a encontrar la propiedad de tus sueños.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#about">Quiénes Somos</a></li>
            <li><a href="#properties">Propiedades</a></li>
            <li><a href="#contact">Contáctanos</a></li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div className="footer-section">
          <h3>Contáctanos</h3>
          <ul>
            <li><strong>Teléfono:</strong> +34 123 456 789</li>
            <li><strong>Email:</strong> info@inmobiliaria.com</li>
            <li><strong>Dirección:</strong> Calle Ejemplo 123, Madrid, España</li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer-section social-media">
          <h3>Síguenos</h3>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Inmobiliaria Ejemplo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
