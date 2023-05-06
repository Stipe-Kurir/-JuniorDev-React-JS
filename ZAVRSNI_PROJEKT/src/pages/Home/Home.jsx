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
          <div>naslov </div>
          <div>tekst kad je osnovano - lorem ipsum </div>
          </div>
        <div className={stil.Lokacija}>
          <div className={stil.Mapa}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23147.551773749186!2d16.454899193857255!3d43.51393371692611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355f618d496d35%3A0x2a62d294893c7fe5!2sSportski%20tereni%20Visoka!5e0!3m2!1shr!2shr!4v1683362324541!5m2!1shr!2shr" 
          width="400" 
          height="300" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
          <div className={stil.Podaci}>
            <div>KAKO DO NAS</div>
          <div>LOKACIJA</div>
          <div>MAIL</div>
          <div>kontakt broj </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
