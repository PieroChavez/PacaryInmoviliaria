// src/components/Hero.jsx
import React from 'react';
import '../Hero/Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h2>Encuentra tu terreno ideal en Tarapoto</h2>
        <p>Ofrecemos las mejores ubicaciones y precios en la región.</p>
        <button>Ver Propiedades</button>
      </div>
    </section>
  );
};

export default Hero;
