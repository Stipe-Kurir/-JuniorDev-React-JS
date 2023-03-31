import React from 'react'
import "./stats.css"
const Stats = ({natpis,akcija,udarci}) => {
  const handleClick=()=>{
    if(udarci===0 && natpis==="-")
    {
      console.log("nemože negativna vrijednost");
    }
    else
    akcija()
  }

  return (
    <div className='statElement'>
     <button className='buttonStat' onClick={handleClick} >{natpis}</button>
    </div>
  )
}

export default Stats
