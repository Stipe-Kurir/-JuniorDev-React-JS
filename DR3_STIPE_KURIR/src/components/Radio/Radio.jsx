import React from 'react'
import "./radio.css"

const Radio = ({ime,akcija}) => {

  const postaviPlacanje=(e)=>{
    akcija(e);
  }
  
  return (
    <div className='radioElement'>
    <div className='element'>
     <input type="radio" id="element" name="element" onChange={postaviPlacanje} checked={ime=="Kartica"}  value="Kartica" required />
     <label htmlFor="element">Kartica</label>
     </div>
     <div className='element'>
     <input type="radio" id="element" name="element" onChange={postaviPlacanje}  value="Pouzeće" required />
     <label htmlFor="element">Pouzeće</label>
     </div>
 
   </div>
    
  )
}

export default Radio
