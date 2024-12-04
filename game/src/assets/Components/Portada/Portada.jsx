// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Portada.css'; // Asegúrate de crear este archivo y agregar el CSS que proporcionaste

const Portada = () => {
  const articles = [
    {
      id: 1,
      imgSrc: 'https://picsum.photos/1920/1080?random=1',
      title: 'CSS Scroll Animations',
      description: 'Check out this rad demo',
      link: '#'
    },
    {
      id: 2,
      imgSrc: 'https://picsum.photos/1920/1080?random=2',
      title: 'Animate on scroll',
      description: 'Works with media queries too',
      link: '#'
    },
    {
      id: 3,
      imgSrc: 'https://picsum.photos/1920/1080?random=3',
      title: 'Parallax Effects',
      description: 'Tweak your timings',
      link: '#'
    },
    {
      id: 4,
      imgSrc: 'https://picsum.photos/1920/1080?random=4',
      title: 'Drive Keyframes',
      description: 'CSS alone and...',
      link: '#'
    },
    {
      id: 5,
      imgSrc: 'https://picsum.photos/1920/1080?random=5',
      title: 'Extra Slides',
      description: 'More content because...',
      link: '#'
    },
    {
      id: 6,
      imgSrc: 'https://picsum.photos/1920/1080?random=6',
      title: 'Resize Window',
      description: 'Try resizing the window',
      link: '#'
    },
    {
      id: 7,
      imgSrc: 'https://picsum.photos/1920/1080?random=7',
      title: 'Browser support',
      description: "You'll need to be in Chrome",
      link: '#'
    },
    {
      id: 8,
      imgSrc: 'https://picsum.photos/1920/1080?random=8',
      title: 'Your idea',
      description: 'What would you make?',
      link: '#'
    },
    {
      id: 9,
      imgSrc: 'https://picsum.photos/1920/1080?random=9',
      title: 'Fork',
      description: 'Fork this and make it your own!',
      link: '#'
    },
    {
      id: 10,
      imgSrc: 'https://picsum.photos/1920/1080?random=10',
      title: 'Heart',
      description: 'If you like this, heart it (3x)',
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
