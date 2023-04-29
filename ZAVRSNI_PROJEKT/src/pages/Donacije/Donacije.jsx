import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import stil from './donacije.module.css'

const Donacije = () => {
  return (
    <div>
      <Navbar />
      <div className={stil.DonacijeContainer}>
        Donacije
      </div>
      <Footer />
    </div>
  )
}

export default Donacije
