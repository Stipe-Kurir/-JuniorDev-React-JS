import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import stil from './unos.module.css'
import { useContext } from 'react'
import UserContext from '../../components/Context/UserContext'

const Unos = () => {

  const korisnik=useContext(UserContext);

  return (
    <div>
      <Navbar />
      <div className={stil.UnosContainer}>
       {korisnik.context==="admin" ?
       <div>ADMIN</div>:
       <div>NEDOZBOLJEN PRISTUP NISTE ADMIn</div>
       }
       </div>
      <Footer />
    </div>
  )
}

export default Unos
