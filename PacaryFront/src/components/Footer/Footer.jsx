import React from 'react'
import '../Footer/Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <h2> RUEDA COMPANY SAC</h2>
          

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque quos deleniti numquam dignissimos vel consectetur officia vitae velit debitis optio maxime sint, ipsa facere voluptatem rerum laborum est reiciendis.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>Abaut us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
          <div className="footer-content-right">
             <h2>CONTACTO</h2>
             <ul>
                 <li>+51 945848943</li>
                 <li>artebaristachyo@gmail.com</li>
             </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Rueda Company SAC</p>
    </div>
  )
}

export default Footer
