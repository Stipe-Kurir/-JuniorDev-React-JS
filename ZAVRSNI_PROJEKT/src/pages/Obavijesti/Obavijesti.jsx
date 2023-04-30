import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import stil from './obavijesti.module.css'
import UserContext from '../../components/Context/UserContext'
import { useState } from 'react'
import { useContext } from 'react'

const Obavijesti = () => {

const korisnik=useContext(UserContext);
//MORAT CES OVDJE DOHVACAT PODATKE IZ BAZE ZA OBAVIJESTI
//USe state za kliknut botun unos forma,kad se forma spremi 
//onda se botun stavi na false te se forma sakrije

//napravi da obavijesti scrollas posebno,a ne da moras spustat cilu stranicu

  return (
    <div>
     
     <Navbar />
       {korisnik.context==="admin" ?
       <div className={stil.ObavijestiContainer}>
       <div className={stil.UnosObavijesti}>
        <div className={stil.UnosBotun}>botun </div>
        <div className={stil.UnosForma}>forma</div>
       </div>
       <div className={stil.PrikazObavijesti}>Lista,jedno ispod druge,to mos vidit kako si napravia za rezultate ispis rezultata da se ispisuju</div>
       </div>:
       <div className={stil.ObavijestiContainer}>
        <div className={stil.PrikazObavijesti}>Lista,jedno ispod druge,to mos vidit kako si napravia za rezultate ispis rezultata da se ispisuju</div>
       </div>
       }
      <Footer />
    </div>
  )
}

export default Obavijesti
