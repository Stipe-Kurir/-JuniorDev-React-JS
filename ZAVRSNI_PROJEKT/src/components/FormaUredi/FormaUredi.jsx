import React from 'react'
import stil from "./formaUredi.module.css"
import {useState} from 'react'
import axios from 'axios'

const FormaUredi = ({podaci,postaviPodatke,funk}) => {


  const UnosVrijednosti=(e)=>{
    const {name, value}=e.target;
    postaviPromjenjeno({...promjenjeno,[name]:value})
  }


  const [promjenjeno,postaviPromjenjeno]=useState({
    id:podaci.id,
    ime:podaci.ime,
    vrsta:podaci.vrsta,
    cip:podaci.cip,
    godine:podaci.godine,
    opis:podaci.opis,
    pregled:podaci.pregled,
    udomljen:podaci.udomljen
  });


  const UnosCheckCip=()=>{
    if(promjenjeno.cip===false)
    {
       postaviPromjenjeno({...promjenjeno,cip:true})
    }
      else{
        postaviPromjenjeno({...promjenjeno,cip:false})
      }
  }
  const UnosCheckUdomljen=()=>{
    if(promjenjeno.udomljen==="udomljen")
    {
       postaviPromjenjeno({...promjenjeno,udomljen:"nije udomljen"})
    }
      else{
        postaviPromjenjeno({...promjenjeno,udomljen:"udomljen"})
      }
  }

  function obradiPodatke(objekt){
    return {
      "id":objekt.id,
      "ime":objekt.ime,
      "vrsta":objekt.vrsta,
      "cip":objekt.cip,
      "godine":objekt.godine,
      "opis":objekt.opis,
      "pregled":objekt.pregled,
      "udomljen":objekt.udomljen
    }
  }

  async function Spremi(e){
    e.preventDefault()
    const rezultat=obradiPodatke(promjenjeno);
    await axios.patch(`http://localhost:3001/zivotinje/${promjenjeno.id}`,rezultat);
    const rez=await axios.get("http://localhost:3001/zivotinje");
    postaviPodatke(rez.data)
    funk()
  }


  // console.log("PROMJENJENO:",promjenjeno)


  return (
    <form className={stil.Podaci} onSubmit={Spremi}>
          <div className={stil.PodaciElm}>IME: {promjenjeno.ime}</div>
          <div className={stil.PodaciElm}>VRSTA: {promjenjeno.vrsta}</div>

          <div className={stil.PodaciElm}>
            UDOMLJEN: 
            <input  type="checkbox" onChange={UnosCheckUdomljen} id="udomljen"  value={promjenjeno.udomljen} checked={promjenjeno.udomljen==="udomljen"}
              name="udomljen" />
          </div>
          <div className={stil.PodaciElm}>
            ČIPIRAN: 
            <input  type="checkbox" onChange={UnosCheckCip} id="cip"  value={promjenjeno.cip} checked={promjenjeno.cip===true}
              name="cip" />
            </div>
          <div className={stil.PodaciElm}>
             GODINE:<input type="number" id="godine" name="godine" min={0} value={promjenjeno.godine} onChange={UnosVrijednosti} required/> 
            </div>
          <div className={stil.PodaciElm}>
            ZADNJI PREGLED: 
            <input 
              // className={stil.OdabirUnos}
              type="date"
              id="pregled"
              name="pregled"
              value={promjenjeno.pregled} 
              onChange={UnosVrijednosti}
              required>
              </input>
            </div>
          <div className={stil.PodaciElmOpis}>
            OPIS:  <input className={stil.input} type="text" id="opis" name="opis"  maxLength="100" value={promjenjeno.opis} onChange={UnosVrijednosti}  />
            </div>

          <button className={stil.BotunUrediStil} type="submit">SPREMI</button>
        </form>
  )
}

export default FormaUredi
