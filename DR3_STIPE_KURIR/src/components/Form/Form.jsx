import {useEffect, useState} from 'react'
import Texfield from '../Textfield/Texfield'
import Radio from '../Radio/Radio'
import "./form.css"
import Checkbox from '../Checkbox/Checkbox'
import Order from '../Order/Order'
import Select from '../Select/Select'
import Mail from "../Mail/Mail"


const Form = () => {

  const [form,postaviForm]=useState({mail:"",ime:"",drzava:"",adresa:"",placanje:"Kartica",uvjeti:false});
  const [lista, postaviListu]=useState([]);

  const handleSubmit=(e)=>{
    if(form.uvjeti===false)
    {
      alert("Niste prihvatili uvjete za narudžbu");
      e.preventDefault();
    }
    else{
    e.preventDefault();
    postaviSadrzaj();
    }
  }

  const postaviSadrzaj=()=>
{
  const noviSadrzaj={
    id:Math.random(),
    mail:form.mail,
    ime:form.ime,
    drzava:form.drzava,
    adresa:form.adresa,
    placanje:form.placanje,
    uvjeti:form.uvjeti
  }
  postaviListu([...lista,noviSadrzaj])
}
  useEffect(()=>{
    vratiVrijednosti()
    console.log("pozvan useEffect")
  },[lista])

  const vratiVrijednosti=()=>{
    postaviForm({mail:"",ime:"",drzava:"",adresa:"",placanje:"Kartica",uvjeti:false})
  }

  const dodajMail=(e)=>{
    postaviForm({...form,mail:e.target.value})
  }
  const dodajIme=(e)=>{
    postaviForm({...form,ime:e.target.value})
  }
  const dodajAdresu=(e)=>{
    postaviForm({...form,adresa:e.target.value})
  }
  const placanjeRacuna=(e)=>{
    postaviForm({...form,placanje:e.target.value})
  }
  const promjenaUvjeta=()=>{
    postaviForm({...form,uvjeti:!form.uvjeti})
  }
  const promjenaDrzave=(e)=>{
    postaviForm({...form,drzava:e.target.value})
  }



  return (
    <div className='formContainer'>
      <div className='formTitle'><p className='lightElement'>Račun --</p><p className='boldElement'>Plaćanje</p></div>
      

        <form className='form' onSubmit={handleSubmit}>

        <div className='formElement'>
          <div className='formElementTitle'>Kontakt</div>
          <div className='formElementField'>
            <Mail ime={form.mail} akcija={dodajMail}/>
          </div>
        </div>

        <div className='formElement'>
          <div className='formElementTitle'>Adresa</div>
          <div className='formElementField'>
            <Texfield naziv="Ime:" ime={form.ime} akcija={dodajIme} />
            <Select naziv="Država:" ime={form.drzava} akcija={promjenaDrzave}/>
            <Texfield  naziv="Adresa stanovanja:" ime={form.adresa} akcija={dodajAdresu}/> 
          </div>
        </div>

        <div className='formElement'>
          <div className='formElementTitle'>Način plaćanja</div>
          <div className='formElementField'>
            <Radio ime={form.placanje} akcija={placanjeRacuna}/>
          </div>
        </div>


        <div className='formElement'>
         <Checkbox naziv={form.uvjeti} akcija={promjenaUvjeta}/>
        </div>
       
       <div className='orderElement'>
          <Order naziv="Naruči" />
       </div>

        </form>

      <div className='formElements'>

{/*
       <div className='formResult'>
        { form.uvjeti ? <div>{form.mail},{form.ime},{form.adresa},{form.placanje},{form.drzava},true</div>:<div>false uvjeti</div>}
      </div>
  */}
      <div>
      <div className='formResult'>
        <div className='formResultTitle'>Uneseni podaci:</div>
        <ul >
        <div className='ispisListe'>
      { //MALO UREDI LISTU
      lista && lista.map((item)=>{
              return <li className='listItems' key={item.id}>

                      <div className='listItem'>
                        <div className='listItemTitle'>Mail: </div> 
                        <div className='listItemEl'>{item.mail}</div>
                      </div>
                      <div className='listItem'>
                        <div className='listItemTitle'>Ime: </div> 
                        <div className='listItemEl'>{item.ime}</div>
                      </div>
                      <div className='listItem'>
                        <div className='listItemTitle'>Adresa: </div> 
                        <div className='listItemEl'>{item.adresa}</div>
                      </div>
                      <div className='listItem'>
                        <div className='listItemTitle'>Država: </div> 
                        <div className='listItemEl'>{item.drzava}</div>
                      </div>
                      <div className='listItem'>
                        <div className='listItemTitle'>Plaćanje: </div> 
                        <div className='listItemEl'>{item.placanje}</div>
                      </div>
                  
                    </li>
            })
          }
          </div>
          </ul>
      </div>
      </div>


      </div>

      
      
    </div>
  )
}

export default Form

