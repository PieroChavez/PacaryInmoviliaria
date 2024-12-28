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
      imgSrc: pa_images[10],
      title: 'CASA BIOHUERTO - BIENESTAR',
      description: 'En PAQARI tienes la oportunidad de construir tu casa Biohuerto en medio de la naturaleza es un refugio perfecto para aquellos que buscan una conexión profunda con el entorno natural y un estilo de vida sostenible. La arquitectura respeta el entorno, utilizando materiales rústicos, que permiten la integración con el paisaje.',
      link: '#'
    },
    {
      id: 5,
      imgSrc: pa_images[1],
      title: 'UBICACION ESTRATEGICA',
      description: 'Paqari se ubica a 3 minutos de la imponente laguna azul, ideal para quienes buscan estar cerca del corazón de la naturaleza sin renunciar a la comodidad. Con acceso rápido y directo, la propiedad permite disfrutar de la tranquilidad del entorno sin estar alejado de los servicios esenciales.',
      link: '#'
    },
    {
      id: 6,
      imgSrc: pa_images[5],
      title: 'OPORTUNIDAD DE NEGOCIOS RENTABLES',
      description: 'En PAQARI tienes la oportunidad de capitalizar con el gran potencial turístico en constante crecimiento que presenta el Sauce por experiencias de ecoturismo y turismo de aventura donde ofrece oportunidades para proyectos de alojamientos ecológicos, glampings y cabañas sustentables.',
      link: '#'
    },
    {
      id: 7,
      imgSrc: pa_images[5],
      title: 'LOTES PANORAMICOS',
      description: "PAQARI te brinda lotes amplios desde 300 m2 con impresionantes vistas panorámicas y son una verdadera joya para quienes buscan disfrutar de la serenidad del campo en conexión con la naturaleza y el cantico de las aves. ",
      link: '#'
    },
    {
      id: 8,
      imgSrc: pa_images[7],
      title: 'RENACER - ETERNIDAD',
      description: 'En PAQARI despertar cada mañana con la eterna vista a la laguna azul es sumergirse en una experiencia de renovación profunda. El paisaje invita a dejar atrás las preocupaciones del mundo acelerado, mientras el aire puro, la quietud del agua y la majestuosidad de los bosques restauran  el alma permitiendo el equilibrio que tu vida necesita.',
      link: '#'
    },
    {
      id: 9,
      imgSrc: pa_images[8],
      title: 'SEGURIDAD LEGAL',
      description: 'Tu inversión en PAQARI está respaldada por una seguridad legal',
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
