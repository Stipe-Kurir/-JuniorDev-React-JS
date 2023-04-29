import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import stil from './unos.module.css'

const Unos = () => {
  return (
    <div>
      <Navbar />
      <div className={stil.UnosContainer}>
       Unos
      </div>
      <Footer />
    </div>
  )
}

export default Unos
