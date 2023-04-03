import {useState} from 'react'
import stil from "./Quiz.module.css"
import axios from 'axios'
import Question from '../Question/Question'



const Quiz = () => {

  const [pitanja,postaviPitanja]=useState() 
  const [restart,postaviRestart]=useState()
  const [brojPitanja,postaviBrojPitanja]=useState(3)
  const [kategorija,postaviKategoriju]=useState(0)
  const [tezina,postaviTezinu]=useState(0)

    /*vraca na pocetak*/ 
  const promjeniZadano=()=>{
    postaviPitanja(restart);
    postaviBrojPitanja(3)
    postaviKategoriju(0)
    postaviTezinu(0)
  }
  

  const dohvatiPitanja=()=>{
      const url=`https://opentdb.com/api.php?amount=${brojPitanja}&category=${kategorija}&difficulty=${tezina}`
      axios.get(url)
      .then(res=>postaviPitanja(res.data.results))
    
  }
  
  console.log(pitanja)

  const promjeniBrojPitanja=(e)=>{
   postaviBrojPitanja(e.target.value)
  }
  const promjeniKategoriju=(e)=>{
    postaviKategoriju(e.target.value)
  }
  const promjeniTezinu=(e)=>{
    postaviTezinu(e.target.value)
  }

  return (
    <div className={stil.quizContainer}>
   
      {pitanja ?
      ( <Question pitanja={pitanja} pocetak={promjeniZadano} broj={brojPitanja}/>
      ):
      (
      <div className={stil.odabir}> 

        <div className={stil.opcija}>
          <div className={stil.naslov}>Odaberite broj pitanja</div>
            <select className={stil.quizButton} name="element" id="element-select" required value={brojPitanja} onChange={promjeniBrojPitanja} >
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={7}>7</option>
                <option value={10}>10</option>
            </select>
          </div>

          <div className={stil.opcija}>
            <div className={stil.naslov}>Odaberite kategoriju</div>
            <select className={stil.quizButton} name="element" id="element-select" required value={kategorija} onChange={promjeniKategoriju} >
                <option value={0}>Sve</option>
                <option value={9}>General Knowledge</option>
                <option value={10}>Books</option>
                <option value={11}>Film</option>
                <option value={21}>Sports</option>
            </select>
          </div>

          <div className={stil.opcija}>
            <div className={stil.naslov}>Odaberite težinu</div>
            <select className={stil.quizButton} name="element" id="element-select" required value={tezina} onChange={promjeniTezinu} >
                <option value={0}>Sve</option>
                <option value={"easy"}>Easy</option>
                <option value={"medium"}>Medium</option>
                <option value={"hard"}>Hard</option>     
            </select>
          </div>
      
        <button className={stil.startButton} onClick={dohvatiPitanja} >START</button>
      </div>
      
      )
      }
    </div>
  )
}

export default Quiz


  