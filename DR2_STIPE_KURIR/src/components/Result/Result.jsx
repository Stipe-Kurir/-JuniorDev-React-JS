import React from 'react'
import "./result.css"

const Result = ({domaci,gosti,vrijeme,akcija}) => {
  const handleClick=()=>{
    akcija()
  }
  return (
    <div className='resultContainer'>
      <div className='scoreItems'>
        <div className='scoreItem'>{domaci}</div>
        <div className='scoreItem'>:</div>
        <div className='scoreItem'>{gosti}</div>
      </div>
      <div className='timeItems' >
        {vrijeme==90 ?
        (<>
        <button className='timeCounter' onClick={handleClick} disabled>+</button>
        {vrijeme}<p>'</p>
        </>):
        (
        <><button className='timeCounter' onClick={handleClick} >+</button>
        {vrijeme}<p>'</p>
        </>)
        }
        </div>
    </div>
  )
}

export default Result
