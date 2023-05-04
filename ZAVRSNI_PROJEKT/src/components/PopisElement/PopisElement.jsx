import React from 'react'
import stil from'./popisElement.module.css'
import UserContext from '../../components/Context/UserContext'
import  { useContext,useState } from 'react'
import FormaUredi from '../FormaUredi/FormaUredi'


const PopisElement = ({podaci,funk,postaviPodatke}) => {

    const korisnik=useContext(UserContext);
    // console.log("PODACI UDOMLJENJA:",podaci.udomljen)

    const [uredi,postaviUredi]=useState(false);

   const Uredi=()=>{
      postaviUredi(!uredi)
    }
    async function Udomi()
    {
      funk(podaci.id)
    }

  return (
    <div className={podaci.udomljen==="udomljen" ? stil.PopisElement : stil.PopisElementNijeUdomljen}>
        <div className={stil.Slika}>Slika</div>
  
    {korisnik.context==="admin"?

        <>
        {uredi ?

                <FormaUredi podaci={podaci} postaviPodatke={postaviPodatke} funk={Uredi}/>
                :
                <div className={stil.Podaci}>
                  <div className={stil.PodaciElm}>IME: {podaci.ime}</div>
                  <div className={stil.PodaciElm}>VRSTA: {podaci.vrsta}</div>
                  <div className={stil.PodaciElm}>STATUS: {podaci.udomljen}</div>
                  <div className={stil.PodaciElm}>ČIPIRAN: {podaci.cip?"Čipiran":"Nije čipiran"}</div>
                  <div className={stil.PodaciElm}>GODINE: {podaci.godine}</div>
                  <div className={stil.PodaciElm}>ZADNJI PREGLED: {podaci.pregled}</div>
                  <div className={stil.PodaciElmOpis}>OPIS: {podaci.opis}</div>
                </div>
        }
        <div className={stil.Botuni} >

          {podaci.udomljen==="udomljen" ? 
            
            <div className={stil.BotunRaspored}>
              {uredi?
                <></>
                :
                <button className={stil.BotunUrediStil} onClick={Uredi}>UREDI</button>
              }
            </div>

          :

              <div className={stil.BotuniRaspored}>
                <div className={stil.BotunUdomi}>
                  <button className={stil.BotunUdomiStil}  onClick={Udomi}>UDOMI</button>
                </div>
                <div className={stil.BotunUredi}>
                {uredi?

                  <></>
                  :
                  <button className={stil.BotunUrediStil} onClick={Uredi}>UREDI</button>

              }
                </div>
              </div>

          }
            </div>

        </>

        :


        <>
        <div className={stil.Podaci}>
          <div className={stil.PodaciElm}>IME: {podaci.ime}</div>
          <div className={stil.PodaciElm}>VRSTA: {podaci.vrsta}</div>
          <div className={stil.PodaciElm}>STATUS: {podaci.udomljen}</div>
          <div className={stil.PodaciElm}>ČIPIRAN: {podaci.cip?"Čipiran":"Nije čipiran"}</div>
          <div className={stil.PodaciElm}>GODINE: {podaci.godine}</div>
          <div className={stil.PodaciElm}>ZADNJI PREGLED: {podaci.pregled}</div>
          <div className={stil.PodaciElmOpis}>OPIS: {podaci.opis}</div>
       </div>
        <div className={stil.Botuni}>
            {
            podaci.udomljen==="udomljen" ? 
              <div></div>
              :
              <div className={stil.BotunRaspored}>
                <button className={stil.BotunUdomiStil} onClick={funk}>UDOMI</button>
              </div>

            }
        </div>
        </>
        
    }
    </div>
  )
}

export default PopisElement
