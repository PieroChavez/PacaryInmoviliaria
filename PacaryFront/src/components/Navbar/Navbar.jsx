/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import SearchBar from './Search/SearchBar'


const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]= useState('menu');
    
    const {getTotalCartAmount}=useContext(StoreContext);


  return (
<div className='navbar'>
  <ul className="navbar-menu">
    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Inicio</Link>
    <a href='#footer' onClick={() => setMenu("contac-us")} className={menu === "contac-us" ? "active" : ""}>Contacto</a>
    <a href='#footer' onClick={() => setMenu("contac-us")} className={menu === "contac-us" ? "active" : ""}>Ofertas</a>
    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Tours</Link>

  </ul>
  
  <Link to='/'><h1><img src={assets.viña} alt="" className="logo" /></h1></Link>
  
  <div className="navbar-right">
    <div className="nav-search-ix   con">
      <SearchBar/>
      <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
    </div>
    <button onClick={() => setShowLogin(true)}>
      <p className='iniciar'>Información</p>
    </button>
  </div>
</div>
  )
}

export default Navbar
