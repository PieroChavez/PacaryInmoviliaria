// eslint-disable-next-line no-unused-vars
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap para el carrusel y el diseño
import "./Nosotros.css"; // Archivo CSS personalizado
import pa_images from "../../images/pacari_off/pa";

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      {/* Carrusel */}
      <div id="nosotrosCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={pa_images[10]}
              className="d-block w-100"
              
            />
            
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/1920/1080?random=12"
              className="d-block w-100"
              alt="Imagen 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Experiencia confiable</h5>
              <p>Más de 20 años liderando el sector inmobiliario.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/1920/1080?random=13"
              className="d-block w-100"
              alt="Imagen 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Innovación y diseño</h5>
              <p>Creando espacios únicos para cada estilo de vida.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#nosotrosCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#nosotrosCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* Collage de imágenes */}
      <div className="nosotros-collage mt-5">
        <div className="row g-3">
          <div className="col-md-4">
            <img
              src="https://picsum.photos/600/400?random=21"
              className="img-fluid rounded"
              alt="Collage 1"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://picsum.photos/600/400?random=22"
              className="img-fluid rounded"
              alt="Collage 2"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://picsum.photos/600/400?random=23"
              className="img-fluid rounded"
              alt="Collage 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
