import React from 'react'

import stil from "./filterPrikaz.module.css"


const FilterPrikaz = ({filter,postaviFilter}) => {

    const handleFilter=(e)=>{
        if(e.target.value!=="")
        postaviFilter(e.target.value)
        else
        postaviFilter("")

      }
  return (
    
       <div className={stil.radioElement}>
                  
                  <div className={stil.element}>
                    <input type="radio" id="sve" name="sve"  onChange={handleFilter} value="" checked={filter===""}required />
                    <label htmlFor="element">Sve</label>
                  </div>
                  <div className={stil.element}>
                    <input type="radio" id="suknja" name="suknja" onChange={handleFilter} value="Suknje" checked={filter==="Suknje"} required />
                    <label htmlFor="element">Suknje</label>
                  </div>
                  <div className={stil.element}>
                    <input type="radio" id="hlace" name="hlace" onChange={handleFilter} value="Hlače" checked={filter==="Hlače"} required />
                    <label htmlFor="element">Hlače</label>
                  </div>
                  <div className={stil.element}>
                    <input type="radio" id="majice" name="majice" onChange={handleFilter} value="Majice" checked={filter==="Majice"} required />
                    <label htmlFor="element">Majice</label>
                  </div>
                  <div className={stil.element}>
                    <input type="radio" id="jakete" name="jakete" onChange={handleFilter} value="Jakete" checked={filter==="Jakete"} required />
                    <label htmlFor="element">Jakete</label>
                  </div>
                  
        </div>

  )
}

export default FilterPrikaz
