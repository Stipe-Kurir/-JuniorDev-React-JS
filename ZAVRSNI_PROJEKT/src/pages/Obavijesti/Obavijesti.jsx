import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import stil from './obavijesti.module.css'

const Obavijesti = () => {
  return (
    <div>
      <Navbar />
      <div className={stil.ObavijestiContainer}>
        Obavijesti
      </div>
      <Footer />
    </div>
  )
}

export default Obavijesti
