import axios from 'axios'
import { useState} from 'react'
import stil from "./redaktablice.module.css"


const RedakTablice = ({podaci,postaviOdabir,postaviDetalji}) => {


  const [uredi,postaviUredi]=useState(false)
  const [promjenjeno,postaviPromjenjeno]=useState({});
  const [det,postaviDet]=useState(false)


function obradiPodatke(objekt){
  return {
      "odabrano": {
          "odjeća": objekt.odjeća,
          "velicina": objekt.velicina,
          "slika":objekt.slika ,
          "boja":objekt.boja
        },
        "dodatno": {
          "datum_kupnje": objekt.datum,
          "ducan_kupnje": objekt.ducan,
          "cijena_kupnje": objekt.cijena
        }
  }
}



    async function handleBrisanje(){

      const confirmBox = window.confirm(
        "Želite li izbrisati odabrano stavku?"
      )
      if (confirmBox === true) {
        await axios.delete(`http://localhost:3001/Odabir/${podaci.id}`);
        const rezultat=await axios.get("http://localhost:3001/Odabir");
        postaviOdabir(rezultat.data)
      }
      else{
        return
      } 

    }

  async function handleUredi(){
    const rezultat=obradiPodatke(promjenjeno);
    await axios.patch(`http://localhost:3001/Odabir/${podaci.id}`,rezultat);
    const rez=await axios.get("http://localhost:3001/Odabir");
    postaviOdabir(rez.data)
    postaviUredi(!uredi)
    
  }

  function zapocniUredi() {
    postaviPromjenjeno({
      odjeća:podaci.odabrano.odjeća,
      velicina:podaci.odabrano.velicina,
      slika:podaci.odabrano.slika,
      boja:podaci.odabrano.boja,
      datum:podaci.dodatno.datum_kupnje,
      ducan:podaci.dodatno.ducan_kupnje,
      cijena:podaci.dodatno.cijena_kupnje
    });

    postaviUredi(!uredi)
  }



  const UnosVrijednosti=(e)=>{
    const {name,value}=e.target;
    postaviPromjenjeno({...promjenjeno,[name]:value});
  }

   const handleDetalji=(value)=>{
      postaviDet(value)
      postaviDetalji(value);
   }

  return (
    <>
       
        {
          
        uredi? 
        <tr>
          {det===1 ?
          <> 
           <td>{podaci.odabrano.odjeća}</td>
        
       <td> 
          <select className name="velicina" id="velicina-select" required value={promjenjeno.velicina} onChange={UnosVrijednosti} >
            <option value={"S"}>S</option>
            <option value={"M"}>M</option>
            <option value={"L"}>L</option>
            <option value={"XL"}>XL</option>
           
            </select>
       </td> 
        <td><img className={stil.Slika} src={podaci.odabrano.slika}></img></td>
        <td> <div style={{ width:40,height:40,backgroundColor:`${podaci.odabrano.boja}`}}></div></td>
       
       <td >
       <div className={stil.botuni}>
        <button  onClick={handleUredi}>Spremi </button>
          <button onClick={handleBrisanje}>Izbrisi </button>
          <button onClick={()=>handleDetalji(-1)}>Zadano </button>
        </div>
       </td> 
       <td>
              <input
              className={stil.Input} 
                type="date"
                name="datum"
                value={promjenjeno.datum}
                onChange={UnosVrijednosti}
                required>
              </input>
       </td> 
       <td>
              <input 
            className={stil.Input}
            type="text"
            name="ducan"
            value={promjenjeno.ducan}
            onChange={UnosVrijednosti}
            required
            placeholder='Unesite dućan kupnje'>  
            </input>
       </td> 
       <td>
              <input 
              className={stil.Input}
                type="text"
                name="cijena"
                value={promjenjeno.cijena}
                onChange={UnosVrijednosti}
                required>
              </input>
       </td> 
       </> :
       <> 
        <td>{podaci.odabrano.odjeća}</td>
   
    <td>
    <select className={stil.Input} name="velicina" id="velicina-select" required value={promjenjeno.velicina} onChange={UnosVrijednosti} >
            <option value={"S"}>S</option>
            <option value={"M"}>M</option>
            <option value={"L"}>L</option>
            <option value={"XL"}>XL</option>
           
            </select>
    </td> 
    <td><img className={stil.Slika} src={podaci.odabrano.slika}></img></td>
    <td> <div style={{ width:40,height:40, backgroundColor:`${podaci.odabrano.boja}`}}></div></td>
    
    <td >
    <div className={stil.botuni}>
          <button  onClick={handleUredi}>Spremi </button>
          <button onClick={handleBrisanje}>Izbrisi </button>
          <button onClick={()=>handleDetalji(1)}>Detalji </button>
        </div>
       </td> 
    </>
       }
        
    </tr>

        :
        <tr>
        {
          det ===1 ?
          <>
          <td>{podaci.odabrano.odjeća}</td>
          <td>{podaci.odabrano.velicina}</td>
          <td><img className={stil.Slika} src={podaci.odabrano.slika}></img></td>
          <td> <div style={{ width:40,height:40, backgroundColor:`${podaci.odabrano.boja}`}}></div></td>
          <td >
            <div className={stil.botuni}>
              <button  onClick={zapocniUredi}>Uredi </button>
              <button onClick={handleBrisanje}>Izbrisi </button>
              <button onClick={()=>handleDetalji(-1)}>Zadano </button>
            </div>
          </td>
          <td>{podaci.dodatno.datum_kupnje}</td>
          <td>{podaci.dodatno.ducan_kupnje}</td>
          <td>{podaci.dodatno.cijena_kupnje}€</td>
          </>
          :
          <>
          <td>{podaci.odabrano.odjeća}</td>
          <td>{podaci.odabrano.velicina}</td>
          <td><img className={stil.Slika} src={podaci.odabrano.slika}></img></td>
          <td> <div style={{ width:40,height:40, backgroundColor:`${podaci.odabrano.boja}`}}></div></td>
          <td >
            <div className={stil.botuni}>
              <button  onClick={zapocniUredi}>Uredi </button>
              <button onClick={handleBrisanje}>Izbrisi </button>
              <button onClick={()=>handleDetalji(1)}>Detalji </button>
            </div>
          </td>
          </>
        }
        </tr>
       
    
        }
    </>
  )

}

export default RedakTablice




