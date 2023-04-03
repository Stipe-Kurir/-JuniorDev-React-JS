import React,{useState,useEffect} from 'react'
import stil from "./Question.module.css"


const Question = ({pitanja,pocetak,broj}) => {  

    const [trenutnoPitanje,postaviTrenutnoPitanje]=useState(0)
    const [odgovori,postaviOdgovore]=useState()
    const [odabrano,postaviOdabrano]=useState()
    const [rezultat,postaviRezultat]=useState(0)
  

    useEffect(()=>{
        console.log(pitanja);
        postaviOdgovore(
            promjeniRaspored([
                pitanja[trenutnoPitanje]?.correct_answer,
                ...pitanja[trenutnoPitanje]?.incorrect_answers,
            ])
        ); 
    },[trenutnoPitanje,pitanja])

    /*Funkcija provjeri je li odgovor tocan */
    const handleAnswer=(odg)=>{
        postaviOdabrano(odg)
        if(odg===pitanja[trenutnoPitanje].correct_answer)
         postaviRezultat(rezultat+1)

    }
    /*funkcija provjerava za odabrani odgovor ukoliko je tocan onda zeleno,inace crvena boja*/
    const handleStil=(odg)=>{
        if (odabrano === odg && odabrano === pitanja[trenutnoPitanje].correct_answer) return stil.tocno;
        else if (odabrano === odg && odabrano !== pitanja[trenutnoPitanje].correct_answer ) return stil.krivo;
        else if (odg === pitanja[trenutnoPitanje].correct_answer ) return stil.tocno;
    }
    /*sortiranje odgovora */
    const promjeniRaspored=(odg)=>{
        return odg.sort(()=>Math.random()-0.5);
    }

    console.log(odgovori)
    console.log(rezultat)
    

    /* funkcija kojom promjenimo pitanje te postavimo odabrano na prazno kako bi mogli birat u iducem pitanju*/
    const promjeniPitanje=()=>{
        postaviTrenutnoPitanje(trenutnoPitanje+1)
        postaviOdabrano();
      }

      /*poziv da se vrati na pocetne uvjete*/
      const vratiZadano=()=>{
        pocetak();
      }


  return (
    <div className={stil.sadrzajContainer} >

        <div className={stil.pitanjaOdgovori}>
            <div className={stil.pitanje}><b>Pitanje {trenutnoPitanje+1}: </b>{pitanja[trenutnoPitanje].question}</div>
            <div className={stil.odgovor}>
                {odgovori && odgovori.map((odg)=>(
                    <button key={odg} className={`${stil.botunOdgovor} ${odabrano && handleStil(odg)}`} onClick={()=>handleAnswer(odg)}  disabled={odabrano}>{odg}</button>
                ))}
                {trenutnoPitanje ==broj-1  ? (<button  className={stil.botunDalje} onClick={vratiZadano} hidden={!odabrano}>RESTART</button> )
            :(<button className={stil.botunDalje} onClick={promjeniPitanje} hidden={!odabrano}>NEXT</button>) }
            </div>
        </div>

        <div className={stil.rezultatSadrzaj}>
            <div className={stil.trenutnopitanje}> 
                <div className={stil.title}>Pitanje:</div>
                <div className={stil.status}>{trenutnoPitanje+1}/{broj}</div>
            </div>
            <div className={stil.trenutnopitanje}> 
                <div className={stil.title}>Rezultat:</div>
                <div className={stil.status}>{rezultat}</div>
            </div>       
        </div>

    
   
    </div>
  )
}

export default Question







