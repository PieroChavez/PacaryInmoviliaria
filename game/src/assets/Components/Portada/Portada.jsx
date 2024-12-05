// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Portada.css'; // Asegúrate de crear este archivo y agregar el CSS que proporcionaste
import pa_images from '../../images/pacari_off/pa';
const Portada = () => {
  const articles = [
    {
      id: 1,
      imgSrc: pa_images[0],
      title: 'CSS Scroll Animations',
      description: 'Check out this rad demo',
      link: '#'
    },
    {
      id: 2,
      imgSrc: pa_images[1],
      title: 'Animate on scroll',
      description: 'Works with media queries too',
      link: '#'
    },
    {
      id: 3,
      imgSrc: pa_images[2],
      title: 'Parallax Effects',
      description: 'Tweak your timings',
      link: '#'
    },
    {
      id: 4,
      imgSrc: pa_images[3],
      title: 'Drive Keyframes',
      description: 'CSS alone and...',
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
