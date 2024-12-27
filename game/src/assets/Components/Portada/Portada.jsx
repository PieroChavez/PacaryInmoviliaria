// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Portada.css'; // Asegúrate de crear este archivo y agregar el CSS que proporcionaste
import pa_images from '../../images/pacari_off/pa';
const Portada = () => {
  const articles = [
    {
      id: 1,
      imgSrc: pa_images[0],
      title: 'LAGUNA AZUL',
      description: 'Es un paraíso natural que ofrece un atractivo único para inversores en busca de proyectos turísticos y residenciales. Ideal para el ecoturismo y el desarrollo de actividades recreativas',
      link: '#'
    },
    {
      id: 2,
      imgSrc: pa_images[4],
      title: 'NATURALEZA - RELAJACION',
      description: 'El distrito el Sauce es un paraíso natural caracterizado por paisajes de gran belleza: bosques nativos, lagunas, montañas, fauna, senderos y turismo de naturaleza, aguas termales, riqueza paisajística, clima templado. Este entorno natural es ideal para quienes buscan un refugio en la naturaleza, con paisajes tranquilos y una gran biodiversidad.',
      link: '#'
    },
    {
      id: 3,
      imgSrc: pa_images[9],
      title: 'AVENTURA - ACTIVIDADES ',
      description: 'En la laguna azul-Sauce, la adrenalina y la naturaleza se fusionan para ofrecer una experiencia única de deportes de aventura y extremo: canopy, kayak, trekking, descensos a rapel, visitas a cavernas, navegación en lagunas, pesca deportiva, etc. Estos deportes ofrecen una dosis de aventura que se combina perfectamente con la serenidad del paisaje.',
      link: '#'
    },
    {
      id: 4,
      imgSrc: pa_images[3],
      title: 'CASA BIOHUERTO - BIENESTAR',
      description: 'En PAQARI tienes la oportunidad de construir tu casa Biohuerto en medio de la naturaleza es un refugio perfecto para aquellos que buscan una conexión profunda con el entorno natural y un estilo de vida sostenible. La arquitectura respeta el entorno, utilizando materiales rústicos, que permiten la integración con el paisaje.',
      link: '#'
    },
    {
      id: 5,
      imgSrc: pa_images[4],
      title: 'Extra Slides',
      description: 'More content because...',
      link: '#'
    },
    {
      id: 6,
      imgSrc: pa_images[5],
      title: 'Resize Window',
      description: 'Try resizing the window',
      link: '#'
    },
    {
      id: 7,
      imgSrc: pa_images[6],
      title: 'Browser support',
      description: "You'll need to be in Chrome",
      link: '#'
    },
    {
      id: 8,
      imgSrc: pa_images[7],
      title: 'Your idea',
      description: 'What would you make?',
      link: '#'
    },
    {
      id: 9,
      imgSrc: pa_images[8],
      title: 'Fork',
      description: 'Fork this and make it your own!',
      link: '#'
    },
    
   
    
  ];

  return (
    <div className='portada-container'>
       {articles.map((article, index) => (
          <article key={article.id} style={{ '--index': index }}>
            <div className="article__img">
              <img src={article.imgSrc} alt={article.title} />
            </div>
            <div className="article__info">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.link}>Follow</a>
            </div>
          </article>
        ))}
      
      
      
    </div>
  );
};

export default Portada;
