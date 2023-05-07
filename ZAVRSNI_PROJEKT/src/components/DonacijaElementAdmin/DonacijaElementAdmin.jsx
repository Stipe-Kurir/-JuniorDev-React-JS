import React from 'react'
import stil from './donacijaElement.module.css'
import {  useState} from 'react'
import axios from 'axios'


const DonacijaElementAdmin = ({donacije,postaviDonacije}) => {

  //NAPRAVITI SVE POSEBNE FUNK--> za admina je ovo
  //Izbrisi->izbrisati komponentu
  //donirano->stavi kategoriju iz trazi u donirano
  //Prihvati->stavi kategoriju iz nudi u donirano
  //Ponovi->stavi kategoriju iz donirano u trazi

  //KOD KORISNIKA cemo napraviti posebnu komponentu->DonacijaElementKorisnik
  //On ce imati SAMO botun doniraj za kategoriju trazi->i on stavi u kategoruju donirano
  //Ostalo nece imati botune

  
  
  async function handleIzbrisi(){

    const confirmBox = window.confirm(
      "Želite li izbrisati odabrano stavku?"
    )
    if (confirmBox === true) {
      await axios.delete(`http://localhost:3001/donacije/${donacije.id}`);
      const rezultat=await axios.get("http://localhost:3001/donacije");
      postaviDonacije(rezultat.data)
    }
    else{
      return
    } 

  }

  async function handleDonirano(){

   await axios.patch(`http://localhost:3001/donacije/${donacije.id}`, {kategorija:"donirano"})
    const rezultat= await axios.get("http://localhost:3001/donacije")
    postaviDonacije(rezultat.data)

  }

async function handlePonovi(){

          await axios.patch(`http://localhost:3001/donacije/${donacije.id}`, {kategorija:"trazi"})
          const rezultat= await axios.get("http://localhost:3001/donacije")
          postaviDonacije(rezultat.data)
   
  }




  const [filter,postaviFilter]=useState(donacije.kategorija)

  console.log("trenutni filter za donaciju",filter)



  
  console.log("DONACIJE U ELEMENTU",donacije)
  return (
    <div className={stil.DonacijaPrikaz}>

      <div className={stil.DonacijaElementi}>
        <div className={stil.DonacijaEl}><b>TIP:</b> {donacije.tip}</div>
        <div className={stil.DonacijaEl}><b>VRIJEDNOST:</b> {donacije.vrijednost} €</div>
        <div className={stil.DonacijaEl}>OPIS:{donacije.opis}</div>
      </div>

      <div className={stil.DonacijaElementiBotuni}>

      {
      filter==="trazi" && <div className={stil.DvaBotuna}>
                            <button className={stil.BotunStil} onClick={handleDonirano}>DONIRANO</button>
                            <button className={stil.BotunStil} onClick={handleIzbrisi}>IZBRIŠI</button>
                          </div>
      }

     {
     filter==="nudi" && <div className={stil.JedanBotun}>
                           <button className={stil.BotunStil} onClick={handleDonirano}>PRIHVATI</button>
                        </div>
     }

     {
     filter==="donirano" && <div className={stil.DvaBotuna}>
                              <button  className={stil.BotunStil} onClick={handlePonovi}>PONOVI</button>
                              <button className={stil.BotunStil} onClick={handleIzbrisi}>IZBRIŠI</button>
                             </div>
     }

      </div>

     
    </div>
  )
}

export default DonacijaElementAdmin
