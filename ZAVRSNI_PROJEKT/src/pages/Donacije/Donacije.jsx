import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import stil from './donacije.module.css'
import { useContext } from 'react'
import UserContext from '../../components/Context/UserContext'

const Donacije = () => {
  
  const korisnik=useContext(UserContext)

  
  return (
    <div>
      <Navbar />
      <div className={stil.DonacijeContainer}>
      {korisnik.context==="admin"?<div>DONACIJE ADMIN</div>:<div>DONACIJE KORISNIK</div>}
      </div>
      <Footer />
    </div>
  )
}

export default Donacije
