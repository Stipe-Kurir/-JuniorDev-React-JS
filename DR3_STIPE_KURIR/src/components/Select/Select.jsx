import React from 'react'
import "./select.css"

const Select = ({naziv,ime,akcija}) => {
  const pozivAkcije=(e)=>{
    akcija(e)
  }

  return (
    <div className='selectElement'>
        <div className='selectName'>{naziv}</div>
      {ime==""?
      ( <select className='select' name="element" id="element-select" required value={""} onChange={pozivAkcije} >
            <option value="">Odaberite državu</option>
            <option value="Hrvatska">Hrvatska</option>
            <option value="Bosna i Hercegovina">Bosna i Hercegovina</option>
            <option value="Srbija">Srbija</option>
            <option value="Slovenija">Slovenija</option>
            <option value="Crna Gora">Crna Gora</option>
            <option value="Albanija">Albanija</option>
        </select>
      ):( <select className='select' name="element" id="element-select" required onChange={pozivAkcije}>
            <option  value="">Odaberite državu</option>
            <option value="Hrvatska">Hrvatska</option>
            <option value="Bosna i Hercegovina">Bosna i Hercegovina</option>
            <option value="Srbija">Srbija</option>
            <option value="Slovenija">Slovenija</option>
            <option value="Crna Gora">Crna Gora</option>
            <option value="Albanija">Albanija</option>
          </select>
          )}
        

    </div>
  )
}

export default Select
