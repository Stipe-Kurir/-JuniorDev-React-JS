import React from 'react'
import stil from "./navbar.module.css"
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {

const {context,setContext}=useContext(UserContext);

    const promjeniContext=(e)=>{
        setContext(e.target.value)
    }
    console.log(context);

  return (
    <div className={stil.NavContainer}>
        <div className={stil.NavNaslov}>
            <div className={stil.naslov}>
                AZIL ZA ŽIVOTINJE
            </div>
            <div className={stil.korisnik}>
                <div>
                    <input type="radio"  name="user" value="admin" defaultChecked={context==="admin"} onChange={promjeniContext}/>
                    <label htmlFor="admin">Admin</label>
                </div>

                <div>
                    <input type="radio"  name="user" value="korisnik" onChange={promjeniContext}/>
                    <label htmlFor="korisnik">Korisnik</label>
                </div>
                
            </div>
        </div>
        <div className={stil.NavOpcije}>
            <div className={stil.Opcija}><Link to="/">O NAMA</Link></div>
            <div className={stil.Opcija}><Link to="/popis">POPIS</Link></div>
            <div className={stil.Opcija}><Link to="/donacije">DONACIJE</Link></div>
            <div className={stil.Opcija}><Link to="/obavijesti">OBAVIJESTI</Link></div>
            <div className={stil.Opcija}><Link to="/unos">UNOS</Link></div>
        </div>
    </div>
  )
}

export default Navbar
