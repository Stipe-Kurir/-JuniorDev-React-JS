import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'
import stil from './home.module.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={stil.HomeContainer}>
        <div className={stil.Slider}><Slider/></div>
        <div className={stil.Informacije}>
          <div>naslov</div>
          <div>adresa </div>
          <div>tekst kad je osnovano </div>
          <div>kontakt broj </div>
          </div>
        <div className={stil.Lokacija}>
          <div className={stil.Mapa}>LOKACIJA</div>
          <div className={stil.Podaci}>LOKACIJA</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
