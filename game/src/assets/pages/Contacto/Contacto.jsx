// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className='contacto container'>
      <h1>Saludos</h1>
      
      <section className="form_wrap">
        <section className="cantact_info">
          <section className="info_title">
            <span className="fa fa-user-circle"></span>
            <h2>INFORMACION<br/>DE CONTACTO</h2>
          </section>
          <section className="info_items">
            <p><span className="fa fa-envelope"></span> info.contact@gmail.com</p>
            <p><span className="fa fa-mobile"></span> +1(585) 902-8665</p>
          </section>
        </section>

        <form action="" className="form_contact">
          <h2>Envía un mensaje</h2>
          <div className="user_info">
            <label htmlFor="names">Nombres *</label>
            <input type="text" id="names" required />

            <label htmlFor="phone">Teléfono / Celular</label>
            <input type="text" id="phone" />

            <label htmlFor="email">Correo electrónico *</label>
            <input type="email" id="email" required />

            <label htmlFor="mensaje">Mensaje *</label>
            <textarea id="mensaje" required></textarea>

            <input type="button" value="Enviar Mensaje" id="btnSend" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contacto;