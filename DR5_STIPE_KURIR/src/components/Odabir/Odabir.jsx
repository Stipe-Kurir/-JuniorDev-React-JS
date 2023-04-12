import {useState,useEffect} from 'react'
import stil from  "./odabir.module.css"
import axios from 'axios';



const Odabir = ({promjena}) => {

    const [podaci,postaviPodaci]=useState({
        odjeća:"",
        velicina:"",
        boja:"#000000",
        slika:"",
        datum:"",
        ducan:"",
        cijena:""
    });


    const [velicine, postaviVelicine] = useState([]);
    const [odjeca,postaviOdjeca]=useState([])
    


    useEffect(() => {
      Promise.all([
        axios.get("http://localhost:3001/Velicine"),
        axios.get("http://localhost:3001/Odjeca"),
      ])
        .then(([rezVelicine, rezOdjeca]) => {
          postaviVelicine(rezVelicine.data);
          postaviOdjeca(rezOdjeca.data);
        })
        .catch(err => console.log(err.message));
    }, []);


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

      const UnosVrijednosti=(e)=>{
        const {name, value}=e.target;
        postaviPodaci({...podaci,[name]:value})
      }

      const UnosOdjeće=(e)=>{
        const odj=e.target.value;
        if(e.target.value==="Suknje")
        postaviPodaci({...podaci,slika:"./skirt.png",odjeća:odj})
        else if(e.target.value==="Hlače")
        {
          postaviPodaci({...podaci,slika:"./trousers.png",odjeća:odj})
        }
        else if(e.target.value==="Majice")
        {
          postaviPodaci({...podaci,slika:"./t-shirt.png",odjeća:odj})
        }
        else{
          postaviPodaci({...podaci,slika:"./jacket.png",odjeća:odj})
        }
      }

      const UnesiPodatke=(e)=>{
        e.preventDefault();
        const ObradeniPodaci=obradiPodatke(podaci);

        axios.post("http://localhost:3001/Odabir", ObradeniPodaci)
        .then(rez => {
          axios.get("http://localhost:3001/Odabir")
            .then(rez => promjena(rez.data));
        })
    }
    

  return (
    <div className={stil.Elementi}>

      <div className={stil.Naslov}>DODAJ NOVU ODJEĆU</div>

      <form onSubmit={UnesiPodatke} className={stil.forma}>

        <div className={stil.Odabir}>
         
            <select className={stil.OdabirButton} name="odjeća" id="odjeća-select" required value={podaci.odjeća} onChange={UnosOdjeće} >
                <option value={""}>Odaberite komad odjeće</option>
                {odjeca.map(odj => (
               <option key={odj} value={odj}>
                {odj}
                </option>
            ))}
            </select>
 
        </div>

        <div className={stil.Odabir}> 
        
          <select className={stil.OdabirButton} name="velicina" id="velicina-select" required value={podaci.velicina} onChange={UnosVrijednosti} >
            <option value=''>Odaberi velicinu</option>
            {velicine.map(velicina => (
               <option key={velicina} value={velicina}>
                {velicina}
                </option>
            ))}
            </select>

        </div>

        <div className={stil.Odabir}> 
            <input 
            className={stil.OdabirButton}
            type="color"
            name="boja"
            value={podaci.boja}
            onChange={UnosVrijednosti}
            required
             >
            </input>         
        </div>

        <div className={stil.Odabir}> 
              <input 
              className={stil.OdabirUnos}
              type="date"
              name="datum"
              value={podaci.datum}
              onChange={UnosVrijednosti}
              required
              placeholder='Unesite datum kupnje'>
              </input>
        </div>

        <div className={stil.Odabir}> 
      
            <input 
            className={stil.OdabirUnos}
            type="text"
            name="ducan"
            value={podaci.ducan}
            onChange={UnosVrijednosti}
            required
            placeholder='Unesite dućan kupnje'>  
            </input>
    
        </div>

        <div className={stil.Odabir}> 
            <input 
            className={stil.OdabirUnos}
            type="number"
            name="cijena"
            min="0"
            step={0.01}
            value={podaci.cijena}
            onChange={UnosVrijednosti}
            required
            placeholder='Unesite iznos odjeće(€)'>
            </input>
          
        </div>

            <button  className={stil.submitBottun} type="submit">Unesi</button>

      </form>
    </div>
  )
}

export default Odabir

