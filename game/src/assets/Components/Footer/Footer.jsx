// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-inmobiliaria-unique">
      <div className="footer-container-unique">
        {/* Sección de información de contacto */}
        <div className="footer-section-unique">
          <h3>Nosotros</h3>
          <p>
            Somos una empresa inmobiliaria enfocada en crear comunidades o complejos residenciales
            con énfasis en la sostenibilidad (uso de energías renovables, manejo de aguas pluviales,
            arquitectura verde), atendiendo a la creciente demanda por vivir de manera responsable con el
            medio ambiente
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-section-unique">
          <h3>Enlaces Rápidos</h3>
          <ul className='footer-links-unique'>
            <li className='footer-links-item-unique'><a className='footer-links-anchor-unique' href="#services">Servicios</a></li>
            <li className='footer-links-item-unique'><a className='footer-links-anchor-unique' href="#about">Quiénes Somos</a></li>
            <li className='footer-links-item-unique'><a className='footer-links-anchor-unique' href="#properties">Propiedades</a></li>
            <li className='footer-links-item-unique'><a className='footer-links-anchor-unique' href="#contact">Contáctanos</a></li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div className="footer-section-contact-unique">
          <h3>Contáctanos</h3>
          <ul className='contact-info-unique'>
            <li className='info-unique'><strong>Teléfono:</strong> +51 962387203</li>
            <li className='info-unique'><strong>Email:</strong> ecoresidencialpaqari@gmail.com</li>
            <li className='info-unique'><strong>Dirección:</strong> Distrito de Sauce - Jaen - Cajamarca - Peru</li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer-section-social-unique">
          <h3>Síguenos</h3>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-unique">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-unique">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-unique">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-unique">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom-unique">
        <p>&copy; {new Date().getFullYear()} Grupo Delare. Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
