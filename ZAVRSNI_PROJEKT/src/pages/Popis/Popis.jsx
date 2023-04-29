import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import stil from './popis.module.css'
import Footer from '../../components/Footer/Footer'

const Popis = () => {
  return (
    <div>
      <Navbar />
      <div className={stil.PopisContainer}>
        Popis
      </div>
      <Footer />
    </div>
  )
}

export default Popis
