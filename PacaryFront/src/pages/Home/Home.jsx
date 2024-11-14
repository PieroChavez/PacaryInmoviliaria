// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import '../Home/Home.css'
import Header from '../../components/Header/Header'
//  import ExplorerMenu from '../../components/ExplorerMenu/ExplorerMenu'
//  import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
//  import Carousel from '../../components/carrucel/Carousel'
import Properties from '../../components/Hero/Properties'
import InfoCards from '../../components/InfoCars/InfoCars'
import StepsCards from '../../components/InfoCars/StepsCards/StepsCards'
import PropertyCard from '../../components/InfoCars/PropertyCards/PropertyCards'
import AppDownload from '../../components/AppDownloand/AppDownload'
import OurHistory from '../Cart/Our/OurHistory'
import Reviews from '../../components/InfoCars/Reviews/Review'
import OurCourses from '../../components/InfoCars/Reviews/OurCourser/OurCourser'
import VideoTutorials from '../../components/InfoCars/Videos/VideoTutoriales'



const Home = () => {
    const[category,setCategory]= useState('All')
  return (
    <div className='home'>

      
      
      
      
      
      <InfoCards/>
      <Properties/>
      <OurHistory/>
      <StepsCards/>

      <div className="property-conteiner">
        <PropertyCard
        image="https://via.placeholder.com/300"
        price="S/ 49,400 · USD 850,000"
        maintenance="S/ 800 Mantenimiento"
        address="Coronel Inclán 1072, Miraflores"
        details="280 m² tot. · 4 dorm. · 3 baños · 2 estac."
        description="Pent-house Duplex de Lujo con Jacuzzi privado. Miraflores, Lima Perú."
        logo="https://via.placeholder.com/120" 
        />
      </div>
      
      <Reviews/>
      <OurCourses/>
      <VideoTutorials/>
      <AppDownload/>
     

      
    </div>
  )
}

export default Home
