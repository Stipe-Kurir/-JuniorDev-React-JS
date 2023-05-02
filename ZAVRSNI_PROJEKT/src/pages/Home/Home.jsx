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
          <div className={stil.Mapa}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23145.78566548937!2d16.430057908382523!3d43.518537925574776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e167f3d0df5%3A0x15ea7055fa940980!2sAnimalis%20Centrum!5e0!3m2!1shr!2shr!4v1682804239024!5m2!1shr!2shr" 
            width="400px" 
            height="300px"
             style={{border:0}} 
             allowFullScreen="" 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade">

             </iframe>
          </div>
          <div className={stil.Podaci}>LOKACIJA</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
