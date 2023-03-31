import React from 'react'
import "./checkbox.css"

const Checkbox = ({naziv,akcija}) => {
  const handleClick=()=>
  {
    akcija()
  }
  return (
    <div className='checkElem' >
    <input  className='checkboxElement' type="checkbox" id="scales" name="scales" value={!naziv} checked={naziv==true}  onChange={handleClick} />
      <label className='label' htmlFor="scales">Prihvaćam uvjete narudžbe</label>
  </div>
  )
}

export default Checkbox
