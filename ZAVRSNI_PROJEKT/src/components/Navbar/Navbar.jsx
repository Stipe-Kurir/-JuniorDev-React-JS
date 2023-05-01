import React from 'react'
import stil from "./navbar.module.css"
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {

const navigationAdmin=[
    {name:'o nama',href:'/'},
    {name:'popis',href:'/popis'},
    {name:'donacije',href:'/donacije'},
    {name:'obavijesti',href:'/obavijesti'},
    {name:'unos',href:'/unos'},
]


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
                    <input type="radio"  name="user" value="korisnik" defaultChecked={context==="korisnik"} onChange={promjeniContext}/>
                    <label htmlFor="korisnik">Korisnik</label>
                </div>
                
            </div>
        </div>
      

        <div className={stil.NavOpcije}>
            {navigationAdmin.map((item)=>(
                <NavLink
                key={item.name}
                to={item.href}
                //destrukturira si da ti samo vrati isActive
                className={({isActive})=>{
                    return stil.Opcija ,
                    (isActive ? stil.OpcijaAktivna:
                        stil.Opcija)  
                }}
                >
                    {item.name}
                </NavLink>
            ))

            }
           
        </div> 
        
       
    </div>
  )
}

export default Navbar

