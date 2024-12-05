// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Preventa.css";

const terrenos = [
  {
    id: 1,
    title: "Terreno en Zona Residencial",
    location: "Ciudad A, Sector B",
    price: "$50,000",
    img: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Terreno Campestre",
    location: "Zona Rural, Finca X",
    price: "$25,000",
    img: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Terreno Comercial",
    location: "Avenida Principal, Ciudad C",
    price: "$80,000",
    img: "https://via.placeholder.com/300",
  },
];

const Preventa = () => {
  return (
    <div className="preventa-container">
      <h1 className="preventa-title">Terrenos en Preventa</h1>
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
