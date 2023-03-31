import "./skills.css"

import React from 'react'

const Skills = ({type,desc}) => {
  return (
    <div className="skillItems">
    <div className="skillType">{type}:</div>
    <div className="skillDesc">{desc}</div>
    </div>
  )
}

export default Skills