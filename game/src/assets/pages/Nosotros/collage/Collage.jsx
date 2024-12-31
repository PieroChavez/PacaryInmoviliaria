import React from 'react';
import './Collage.css';

function Collage() {
  return (
    <div className='collage-container'>
      <div className='image-item'>
        <img src="image1.jpg" alt="Imagen 1" />
      </div>
      <div className='image-item'>
        <img src="image2.jpg" alt="Imagen 2" />
      </div>
      <div className='image-item'>
        <img src="image3.jpg" alt="Imagen 3" />
      </div>
      <div className='image-item'>
        <img src="image4.jpg" alt="Imagen 4" />
      </div>
      <div className='image-item'>
        <img src="image5.jpg" alt="Imagen 5" />
      </div>
    </div>
  );
}

export default Collage;
