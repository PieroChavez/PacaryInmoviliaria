// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Preventa.css";
import pa_images from "../../images/pacari_off/pa";

const terrenos = [
  {
    id: 1,
    title: "CONDMINIO RESORT IKIGAY",
    location: "Vista a la Laguna Azul",
    price: "350 m2",
    img: pa_images[1],
  },
  {
    id: 2,
    title: "CONDOMINIO VIÑA DEL MARAÑON",
    location: "Cerca del Aeropuerto de Jaen",
    price: "300 m2",
    img: pa_images[2],
  },
  {
    id: 3,
    title: "OTRAS PROPIEDADES",
    location: "Cerca del Centro",
    price: "120 m2",
    img: pa_images[5],
  },
];

const Preventa = () => {
  return (
    <div className="preventa-container">
      <h1 className="preventa-title">NUESTROS PROYECTOS</h1>
      <div className="terrenos-grid">
        {terrenos.map((terreno) => (
          <div key={terreno.id} className="terreno-card">
            <img src={terreno.img} alt={terreno.title} className="terreno-img" />
            <div className="terreno-info">
              <h3>{terreno.title}</h3>
              <p>{terreno.location}</p>
              <p className="terreno-price">{terreno.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preventa;
