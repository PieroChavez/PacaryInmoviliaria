// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  return (
    <div className="navbar-conten">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" >
          
            <Link className="nav-link active" to="/">  DELARE   </Link>

          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <Link className="nav-link active" to="/preventa">  Preventa   </Link>
              <Link className="nav-link active" to="/contacto">Contacto        </Link>
              <Link className="nav-link active" to="/nosotros">  Nosotros</Link>
             

             
        
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
