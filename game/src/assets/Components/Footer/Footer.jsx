// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-inmobiliaria">
      <div className="footer-container">
        {/* Sección de información de contacto */}
        <div className="footer-section">
          <h3>Nosotros</h3>
          <p>
          Somos una empresa inmobiliaria enfocada en crear comunidades o complejos residenciales
con énfasis en la sostenibilidad (uso de energías renovables, manejo de aguas pluviales,
arquitectura verde), atendiendo a la creciente demanda por vivir de manera responsable con el
medio ambiente
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
            <li><strong>Teléfono:</strong> +51 962387203   </li>
            <li><strong>Email:</strong> ecoresidencialpaqari@gmail.com      </li>
            <li><strong>Dirección:</strong> Distrito de Sauce - Jaen - Cajamarca - Peru</li>
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
        <p>&copy; {new Date().getFullYear()} Grupo Delare. Todo los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
