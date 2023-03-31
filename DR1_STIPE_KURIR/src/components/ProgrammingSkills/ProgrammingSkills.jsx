import "./programmingSkills.css"
import React from 'react'

const ProgrammingSkills = ({item,desc}) => {
  return (
    <div className="itemsProg">
    <p className="itemProg">-{item} </p>
      <p className="itemDescProg">{desc}</p>
    </div>
  )
}

export default ProgrammingSkills
