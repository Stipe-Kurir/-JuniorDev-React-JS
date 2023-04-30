import React, { useContext ,useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import stil from './popis.module.css'
import Footer from '../../components/Footer/Footer'
import UserContext from '../../components/Context/UserContext'

const Popis = () => {

const korisnik=useContext(UserContext);

  return (
    <div>
      
      <Navbar />
      <div className={stil.PopisContainer}>
        {korisnik.context==="admin"?<div>popis admin</div>:<div>popis korisnik</div>}
      </div>
     
      <Footer />
    </div>
  )
}

export default Popis
