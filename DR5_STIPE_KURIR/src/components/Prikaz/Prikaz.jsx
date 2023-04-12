import {useEffect, useState} from 'react'
import RedakTablice from '../RedakTablice/RedakTablice'
import stil from "./prikaz.module.css"


const Prikaz = ({podaci,promjena,filter}) => {
 

  const [brojac,postaviBrojac]=useState(0)

  useEffect(()=>{
    console.log("brojac",brojac)
  },[brojac])


  const handleBrojac=(value)=>{
    postaviBrojac(trenutni=>{
      return trenutni+value
    })
  }


  return (
    <div className={stil.prikaz}>
  
        <table>
          {brojac ?  <thead>
              <tr>
                <th>Vrsta</th>
                <th>Velicina</th>
                <th>Slika</th>
                <th>Boja</th>
                <th>Opcije</th>
                <th>Datum</th>
                <th>Ducan</th>
                <th>Cijena</th>
              </tr>
            </thead> :
            <thead>
             <tr>
             <th>Vrsta</th>
             <th>Velicina</th>
             <th>Slika</th>
             <th>Boja</th>
             <th>Opcije</th>
           </tr>
         </thead> 
         }
           
            <tbody>
              {
                podaci.filter(podatak=>podatak.odabrano.odjeća.includes(filter)).map(rez=>(
                  <RedakTablice 
                  key={rez.id}
                  podaci={rez}
                  postaviOdabir={promjena}
                  postaviDetalji={handleBrojac}
                  />
                ))
              }
            </tbody>
        </table>
     
    </div>
  )
}

export default Prikaz





