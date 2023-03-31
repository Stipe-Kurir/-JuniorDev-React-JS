import React from 'react'
import "./resetAll.css"
const ResetAll = ({natpis,akcija}) => {
  const handleClick=()=>{
    akcija();
  }
  return (
    <div className='resetContainer'>
    <button className='resetButton' onClick={handleClick}>{natpis}</button>
    </div>
  )
}

export default ResetAll
