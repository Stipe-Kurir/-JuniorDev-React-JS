import React from 'react'
import stil from './footer.module.css'

const Footer = () => {
  return (
    <div className={stil.footer}>
      <div className={stil.footerInfo}>ZAVRŠNI PROJEKT STIPE KURIR</div>
      <div className={stil.footerPreporucene}>
        <div>NEKA OD SKLONIŠTA U HRVATSKOJ</div>
        <div className={stil.Item}><a href="https://www.noina-arka.hr/" target="_blank">Noina arka</a></div>
        <div className={stil.Item}><a href="http://www.azilzagreb.com/" target="_blank">Dumovec</a></div>
      </div>
    </div>
  )
}

export default Footer
