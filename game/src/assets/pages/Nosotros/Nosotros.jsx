// eslint-disable-next-line no-unused-vars
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap para el carrusel y el diseño
import "./Nosotros.css"; // Archivo CSS personalizado
import pa_images from "../../images/pacari_off/pa";
import rueda from "../../images/rueda_img/rueda";




const Nosotros = () => {
  return (

    <main>
      <div className="heading-nosotros">
        <h1>NOSOTROS<br /> </h1>
        <aside>
          <p>Compromiso con el cuidado del medio ambiente.</p>
          <p>Since 2010</p>
        </aside>
      </div>
      <div className="container-nosotros">
        <div className="card">
          <div className="card-inner">
            <div className="box">
              <div className="imgBox">
                <img
                  src={pa_images[10]}
                  alt="Awesome views"
                />
              </div>
              <div className="more">
                <ul >
                  <li>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://images.unsplash.com/photo-1600298882283-40b4dcb8b211?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1667987781458-c45c1ad5dfe1?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://images.unsplash.com/photo-1600298882698-312a4137fd33?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <span>50+</span>
                  </li>
                </ul>
              </div>
              <div className="tag">
                <a href="#">#Awesome views</a>
              </div>
            </div>
          </div>
        </div>
       
        <div className="card">
          <p>
            <a href="#">More about tours</a>
          </p>
          <div className="card-inner">
            <div className="box">
              <div className="imgBox">
                <img
                  src={pa_images[5]}
                  alt="Hiking"
                />
              </div>
              <div className="more">
                <a href="#" className="arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
              <div className="tag">
                <a href="#">#Hiking</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>





  );
};

export default Nosotros;
