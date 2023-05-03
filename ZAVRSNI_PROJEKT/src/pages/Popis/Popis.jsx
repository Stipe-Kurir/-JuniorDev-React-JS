import React, { useContext ,useState,useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import stil from './popis.module.css'
import Footer from '../../components/Footer/Footer'
import UserContext from '../../components/Context/UserContext'
import Radio from '../../components/Radio/Radio'
import PopisElement from '../../components/PopisElement/PopisElement'
import axios from "axios";

const Popis = () => {


  

const [filterStatus,postaviFilterStatus]=useState("");
const [filterVrsta,postaviFilterVrsta]=useState("Sve");


const [podaci,postaviPodatke]=useState([])


useEffect(() => {
  axios
    .get("http://localhost:3001/zivotinje")
    .then(res => postaviPodatke(res.data));
}, []);


// console.log("FILTER VRSTA",filterVrsta)
// console.log("FILTER STATUS",filterStatus)

//RADI SAMO NAMISTI ZA UDOMLNJENE
 async function handleUredi(){

  
  await axios.patch(`http://localhost:3001/zivotinje/2`,{"godine":40});
 
  
 }


  return (

    <div>
      
       <Navbar />

        <div className={stil.PopisContainer}>

          <div className={stil.Popis}>

            <div className={stil.PopisFilter}>
              <div className={stil.PopisFilterSticky}>
                <div className={stil.FilterElement}>
                  <div className={stil.FilterNaslov}>VRSTA:</div>

                  <div className={stil.FilterRadioElm}>
                  <Radio filter={filterVrsta}   postaviFilter={postaviFilterVrsta} vr={"Sve"} />
                  <Radio filter={filterVrsta}   postaviFilter={postaviFilterVrsta}  vr={"Pas"} />
                  <Radio filter={filterVrsta}   postaviFilter={postaviFilterVrsta} vr={"Mačka"} />
                  </div>
                </div>
                <div className={stil.FilterElement}>
                  <div className={stil.FilterNaslov}>STATUS:</div>
                  <div className={stil.FilterRadioElm}>
                  <Radio filter={filterStatus}  postaviFilter={postaviFilterStatus} vr={""} />
                  {/* NEŠTO NE RADI PROVJERI ZAŠTO 
                  <Radio filter={filterStatus}  postaviFilter={postaviFilterStatus} vr={"udomljen"} /> 
                  */}
                  <Radio filter={filterStatus}  postaviFilter={postaviFilterStatus}  vr={"nije udomljen"} />
                  
                  
                  
                  </div>
                </div>
              </div>
            </div> 

            <div className={stil.PopisPrikaz}>
              <div className={stil.PopisPrikazElementi}>
                {filterVrsta==="Sve" 
                ? 
                <>
                {
                  podaci.filter(podatak=>podatak.udomljen.includes(filterStatus))
                  .filter(podatak=>podatak.vrsta.includes(""))
                  .map(rez=>
                  <PopisElement 
                  key={rez.id}
                  podaci={rez}  
                  // funk={handleUredi}
                 
                  />
                  )
                 }
                 </>
                 :
                 <>
                  {
                    podaci.filter(podatak=>podatak.udomljen.includes(filterStatus))
                    .filter(podatak=>podatak.vrsta.includes(filterVrsta))
                    .map(rez=>
                  <PopisElement 
                  key={rez.id}
                  podaci={rez}  
                  // funk={handleUredi}
                  />
                  )
                 }
                 </>
               }  
                
              </div>
            </div>
          </div>

      </div>
      
      <Footer />
    </div>
  )
}

export default Popis
