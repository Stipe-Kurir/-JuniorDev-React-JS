import React from 'react'
import "./texfield.css"

const Texfield = ({naziv,ime,akcija}) => {
  const pozivAkcije=(e)=>{
    akcija(e);
  }
  return (
    <div className='fieldElement'>
            <div className='fieldName'>{naziv}</div>
            <input  className="fieldText" type="text"  id="ime" minLength="5" required  value={ime} onChange={pozivAkcije}/>
    </div>
  )
}

export default Texfield
