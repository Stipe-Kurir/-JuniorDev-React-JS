import React from 'react'
import stil from'./popisElement.module.css'
import UserContext from '../../components/Context/UserContext'
import  { useContext } from 'react'


const PopisElement = ({podaci}) => {

    const korisnik=useContext(UserContext);
    console.log("PODACI UDOMLJENJA:",podaci.udomljen)


  return (
    <div className={podaci.udomljen==="udomljen" ? stil.PopisElement : stil.PopisElementNijeUdomljen}>
        <div className={stil.Slika}>Slika</div>
        <div className={stil.Podaci}>
            <div className={stil.PodaciElm}>IME: {podaci.ime}</div>
            <div className={stil.PodaciElm}>VRSTA: {podaci.vrsta}</div>
            <div className={stil.PodaciElm}>STATUS: {podaci.udomljen}</div>
            <div className={stil.PodaciElm}>OPIS: {podaci.opis}</div>
        </div>
        {korisnik.context==="admin"?
        
        <div className={stil.Botuni} >Za ADMIN udomi i uredi</div>
        :
        <div className={stil.Botuni}>Za KORISNIK udomi</div>
    }
    </div>
  )
}

export default PopisElement
