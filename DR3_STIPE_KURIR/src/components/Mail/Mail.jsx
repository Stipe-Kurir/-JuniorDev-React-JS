import React from 'react'
import "./mail.css"

const Mail = ({ime,akcija}) => {

  const pozivAkcije=(e)=>{
    akcija(e);
  }

  return (
    <div className='mailElement'>
            <div className='mailName'>Mail</div>
            <input  className="mailText" type="email" id="mailAdr" value={ime} onChange={pozivAkcije} placeholder="Unesite mail..."required/>
    </div>
  )
}

export default Mail
