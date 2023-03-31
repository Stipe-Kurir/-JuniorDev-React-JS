import React from 'react'
import "./scoreCounter.css"


const ScoreCounter = ({broj,natpis,akcija}) => {
  const handleClick=()=>{
    if(broj===0 && natpis==="-")
    {
      console.log("nemože negativna vrijednost");
    }
    else
    akcija()
  }

  return (
    <div className='scoreCounterContainer'>
        <button className='scoreButton' onClick={handleClick}>{natpis}</button>
    </div>

  )
}

export default ScoreCounter
