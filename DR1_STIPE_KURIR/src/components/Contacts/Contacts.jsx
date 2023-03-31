import "./contacts.css"
import React from 'react'

const Contacts = ({sex,datum,nacionalnost,lokacija,mobitel,mail,github}) => {
  return (
    <div className="contacts">
        <div className="title">PERSONAL INFORMATION</div>
        <div className="item">
          <p className="contactsDesc">Sex:</p> {sex}
        </div>
        <div className="item">
        <p className="contactsDesc">Date of birth:</p> {datum}
        </div>
        <div className="item">
        <p className="contactsDesc">Nationality:</p> {nacionalnost}
        </div>
        <div className="item">
            <img src="location.png" alt=" " height="15px" width="15px"/>
            <p>{lokacija}</p>
            </div>
        <div className="item">
            <img src="telephone.png" alt=" " height="15px" width="15px" className="img"/>
            <p>{mobitel}</p>
            </div>
            <div className="item">
            <img src="email.png" alt=" " height="15px" width="15px"/>
            <p>{mail}</p>
            </div>
            <div className="item">
            <img src="link.png" alt=" " height="15px" width="15px"/>
            <a href={github} target="_blank" className="git">github/Stipe-Kurir</a>
            </div>
    </div>
  )
}

export default Contacts
