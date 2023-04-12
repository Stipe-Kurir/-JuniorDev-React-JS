import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Odabir from "./components/Odabir/Odabir";
import Prikaz from "./components/Prikaz/Prikaz";
import FilterPrikaz from "./components/FilterPrikaz/FilterPrikaz";


 
function App() {
  const [odabir, postaviOdabir] = useState([]);
  const [filter,postaviFilter]=useState("");
 

  useEffect(() => {
    axios
      .get("http://localhost:3001/Odabir")
      .then(res => postaviOdabir(res.data));
  }, []);

  
  

  console.log(odabir)
  

  return (
    <div className="appContainer">

      <div className="appDisplay">

        <div className="appTitle">MOJA GARDEROBA</div>

        <div className="appElements"> 

          <div className="dodajElemente">
            <Odabir promjena={postaviOdabir} />
          </div>

          <div className="prikaziElemente">
              <div className="filter">

               <div className="filterTitle"> FILTER</div>

               <FilterPrikaz filter={filter} postaviFilter={postaviFilter}/>

              </div>
              
              <div className="tablica">
                <Prikaz podaci={odabir} promjena={postaviOdabir} filter={filter}  />  
              </div>

          </div>
          
        </div>

      </div>

    </div>
  );
}
 
export default App;