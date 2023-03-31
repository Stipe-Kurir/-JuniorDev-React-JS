function Tipka(props){

    function handleClick(){
    // Pozivamo iz props-a
    props.akcija()
    }
   
    return(
    <div className="tipkaOkvir">
    <button onClick={handleClick}>{props.natpis}</button>
    </div>
    )
   }
   export default Tipka
   

   /*
   import "./App.css";
import { useState } from "react";

import Prikaz from "./Prikaz";
import Tipka from "./Tipka";

function App() {
 const [broj, postaviBroj] = useState(5);

 const umanjiBroj = () => {
 postaviBroj(broj - 1);
 }

 return (
 <div>
 <Prikaz broj={broj} />
 <div>
 <Tipka natpis='-' akcija={umanjiBroj} />
 <Tipka natpis="0" akcija={() => postaviBroj(0)} />
 <Tipka natpis="+" akcija={() => postaviBroj(broj+1)} />
 </div>
 </div>
 );
}

export default App;
 */