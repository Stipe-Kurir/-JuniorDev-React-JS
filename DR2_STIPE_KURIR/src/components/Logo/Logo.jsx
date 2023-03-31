import React from 'react'
import './logo.css'

const Logo = ({slika,naziv}) => {
  return (
    <div className='logoContainer'>
        <div className='LogoImage'>
          <img src={slika} alt="" width="120px" height="120px"/>
        </div>
        <div className='LogoName'>{naziv}</div>
    </div>
  )
}

export default Logo
