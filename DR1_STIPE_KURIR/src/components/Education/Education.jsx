import "./education.css"
import React from 'react'

const Education = ({datum,info}) => {
  return (
    <div className="educationItems">
      <div className="educationDatum">{datum}</div>
      <div className="educationInfo">{info}</div>
    </div>
  )
}

export default Education
