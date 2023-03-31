import React from 'react'
import Logo from '../Logo/Logo';
import ResetAll from '../ResetAll/ResetAll';
import Result from '../Result/Result';
import ScoreCounter from '../ScoreCounter/ScoreCounter';
import "./window.css"
import { useState } from 'react';
import Stats from '../Stats/Stats';

const pocetnaVrijednost = {
  prvi: 0,
  drugi: 0
}

const Window = () => {
    
    //datum
    var datum=new Date();
    var trenutniDatum=datum.getDate()+'/'+(datum.getMonth()+1)+'/'+datum.getFullYear();

    //kronologija i statistika
    const [kronologija,setKronologija]=useState(true);
    
    const prikazKronologija=()=>{
      setKronologija(true);
    }
    const prikazStatistika=()=>{
      setKronologija(false);
    }

    //minuta utakmice
    const [minute,postaviMinute]=useState(0);
   
    const promjeniMinut=()=>{
        postaviMinute(minute+1);
    }

    const resetVrijednosti=()=>{
      postaviMinute(0);
      postaviDomaciBroj(0);
      postaviDomaciBroj(0);
      postaviGostiBroj(0);
      postaviGostiBroj(0);
      postaviUdarce({domaciUdarci:0,gostiUdarci:0});
      postaviPrekrsaje({domaciPrekrsaji:0,gostiPrekrsaji:0});
      postaviKartone({domaciKartoni:0,gostiKartoni:0});
      postaviListu([]);
    }
     const [udarci,postaviUdarce]=useState({domaciUdarci:0,gostiUdarci:0});

    const uvecajDomaciUdarci=()=>{
      const noviUdarci = {
        domaciUdarci: udarci.domaciUdarci + 1,
        gostiUdarci: udarci.gostiUdarci
      }
      postaviUdarce(noviUdarci)
    }
    const umanjiDomaciUdarci=()=>{
      const noviUdarci = {
        domaciUdarci: udarci.domaciUdarci - 1,
        gostiUdarci: udarci.gostiUdarci
      }
      postaviUdarce(noviUdarci)
    }

    const uvecajGostiUdarci=()=>{
      const noviUdarci = {
        domaciUdarci: udarci.domaciUdarci ,
        gostiUdarci: udarci.gostiUdarci + 1
      }
      postaviUdarce(noviUdarci)
    }
    const umanjiGostiUdarci=()=>{
      const noviUdarci = {
        domaciUdarci: udarci.domaciUdarci,
        gostiUdarci: udarci.gostiUdarci - 1
      }
      postaviUdarce(noviUdarci)
    }

    const [prekrsaji,postaviPrekrsaje]=useState({domaciPrekrsaji:0,gostiPrekrsaji:0});

    const uvecajDomaciPrekrsaji=()=>{
      const noviPrekrsaji = {
        domaciPrekrsaji: prekrsaji.domaciPrekrsaji + 1,
        gostiPrekrsaji: prekrsaji.gostiPrekrsaji
      }
      postaviPrekrsaje(noviPrekrsaji)
    }
    const umanjiDomaciPrekrsaji=()=>{
      const noviPrekrsaji = {
        domaciPrekrsaji: prekrsaji.domaciPrekrsaji - 1,
        gostiPrekrsaji: prekrsaji.gostiPrekrsaji
      }
      postaviPrekrsaje(noviPrekrsaji)
    }

    const uvecajGostiPrekrsaji=()=>{
      const noviPrekrsaji = {
        domaciPrekrsaji: prekrsaji.domaciPrekrsaji ,
        gostiPrekrsaji: prekrsaji.gostiPrekrsaji + 1
      }
      postaviPrekrsaje(noviPrekrsaji)
    }
    const umanjiGostiPrekrsaji=()=>{
      const noviPrekrsaji = {
        domaciPrekrsaji: prekrsaji.domaciPrekrsaji,
        gostiPrekrsaji:prekrsaji.gostiPrekrsaji - 1
      }
      postaviPrekrsaje(noviPrekrsaji)
    }


    const [kartoni,postaviKartone]=useState({domaciKartoni:0,gostiKartoni:0});

    const uvecajDomaciKartoni=()=>{
      const noviKartoni = {
        domaciKartoni: kartoni.domaciKartoni + 1,
        gostiKartoni: kartoni.gostiKartoni
      }
      postaviKartone(noviKartoni)
    }
    const umanjiDomaciKartoni=()=>{
      const noviKartoni = {
        domaciKartoni: kartoni.domaciKartoni - 1,
        gostiKartoni: kartoni.gostiKartoni
      }
      postaviKartone(noviKartoni)
    }

    const uvecajGostiKartoni=()=>{
      const noviKartoni = {
        domaciKartoni: kartoni.domaciKartoni ,
        gostiKartoni: kartoni.gostiKartoni + 1
      }
      postaviKartone(noviKartoni)
    }

    const umanjiGostiKartoni=()=>{
      const noviKartoni = {
        domaciKartoni: kartoni.domaciKartoni,
        gostiKartoni: kartoni.gostiKartoni - 1
      }
      postaviKartone(noviKartoni)
    } 


    //domaci i gostujući broj za rezultat
    const [domaciBroj, postaviDomaciBroj]=useState(0);
    const [gostiBroj, postaviGostiBroj]=useState(0);
    const [lista, postaviListu]=useState([]);
    

   

    //FUNKCIJE KOJIMA MIJENJAMO REZULTAT 
    const promjeniDomaciPozitivno=()=>{
      postaviDomaciBroj(domaciBroj+1);

      var dom=(domaciBroj+1).toString();
      var gost=(gostiBroj).toString();
      var min=(minute).toString();
      var rez=dom+":"+gost+" - "+min+" min";
      
      const noviRez={
        id:Math.random(),
        team:"dom",
        result:rez,
      };

      console.log(noviRez);
      postaviListu([...lista,noviRez])

    }
    const promjeniDomaciNegativno=()=>{
        postaviDomaciBroj(domaciBroj-1);

    }
    const promjeniGostiPozitivno=()=>{
      postaviGostiBroj(gostiBroj+1);

        var dom=(domaciBroj).toString();
        var gost=(gostiBroj+1).toString();
        var min=(minute).toString();
        var rez=dom+":"+gost+" - "+min+" min";
        
        console.log(rez);
        const noviRez={
          id:Math.random(),
          team:"gost",
          result:rez,
        };
        console.log(noviRez);
        postaviListu([...lista,noviRez])
    }
    const promjeniGostiNegativno=()=>{
        postaviGostiBroj(gostiBroj-1);  
    }

      const removeItem=()=>{
        
            var element=lista.pop();
            console.log(element);
            if(element.team=="dom")
            {
              promjeniDomaciNegativno();
              const novaLista=lista.filter((l)=>l.id !== element.id);
              postaviListu(novaLista);
            }
           else{
                promjeniGostiNegativno();
                const novaLista=lista.filter((l)=>l.id !== element.id);
                postaviListu(novaLista);
          }
          
      }

  return (
    <div className='windowContainer'>
      <div className='windowDate'>{trenutniDatum}</div>
      <div className='windowElements'>
        <Logo slika="./Hajduk_Split.png" naziv="Hajduk"/>
        <Result domaci={domaciBroj} gosti={gostiBroj} vrijeme={minute} akcija={promjeniMinut} />
        <Logo slika="./Dinamo_Zagreb.png" naziv="Dinamo Zagreb"/>
      </div>
      <div className='windowSettings'>
      <div className='scoreCounterTitle'>Set score</div>
      <div className='windowScoreButtons'>
        <ScoreCounter  broj={domaciBroj} natpis="+" akcija={promjeniDomaciPozitivno} />
        <ScoreCounter  broj={gostiBroj} natpis="+" akcija={promjeniGostiPozitivno} />
        

      </div>
      </div>
      <div className='windowReset'>
        <ResetAll natpis="Reset all" akcija={resetVrijednosti}/>
      </div>

      <div className='matchMoments'>

        <div className='matchMomentsTitle'>
          {kronologija?
          (<> 
          <button onClick={prikazKronologija} className="buttonGreen">Kronologija</button>
          <button onClick={prikazStatistika} className="regularButton">Statistika</button>
          </>):(
          <>
          <button onClick={prikazKronologija} className="regularButton">Kronologija</button>
          <button onClick={prikazStatistika} className="buttonGreen">Statistika</button>
          </>
          )}
        </div>


          {kronologija?
          (
          <div className='prikazKronologije'>
            <div className='listaTitle'>POVRAT NA PRETHODNI UNESENI REZULTAT</div>
            <ul >
            {lista.length>0 ?( 
              <div className='pov' >
            <button className="povrat" onClick={()=>removeItem()}  >-</button>
            <div className='povratElements'>
            {lista.map((item)=>{
              return <li key={item.id}>{item.result}  
                    </li>
            })
          }
            </div>
          </div>
            ):(<div className='pov'>
              <button className="povrat" onClick={()=>removeItem()} disabled>-</button>
              <div className='povratElements' >
            {lista.map((item)=>{
              return <li key={item.id}>{item.result}  
                    </li>
            })
          }
            </div>
          </div>
            )}
            </ul>
          </div>
          ):
          (
            <div className='prikazStatistike'>
              <div className='statsContainer'>
                 <div className='statsTeams'>
                    <div className='statTeam'>HOME</div>
                    <div className='statTeam'>AWAY</div>
                 </div>
                 <div className='statsElements'>

                  <div className='statElm'>

                   <div className='itemNumber'>{udarci.domaciUdarci}</div>
                    <div className='itemCounter'>
                        <Stats  natpis="+" akcija={uvecajDomaciUdarci} udarci={udarci.domaciUdarci} />
                        <Stats natpis="-" akcija={umanjiDomaciUdarci} udarci={udarci.domaciUdarci} />
                    </div>
                    <p className='titleStat'>udarci</p>
                    <div className='itemCounter'>
                       <Stats  natpis="+" akcija={uvecajGostiUdarci} udarci={udarci.gostiUdarci} />
                       <Stats  natpis="-" akcija={umanjiGostiUdarci} udarci={udarci.gostiUdarci}/>
                    </div>
                   <div className='itemNumber'>{udarci.gostiUdarci}</div>
                  
                  </div> 
                  <div className='statElm'>

                   <div className='itemNumber'>{prekrsaji.domaciPrekrsaji}</div>
                    <div className='itemCounter'>
                        <Stats  natpis="+" akcija={uvecajDomaciPrekrsaji} udarci={prekrsaji.domaciPrekrsaji} />
                        <Stats natpis="-" akcija={umanjiDomaciPrekrsaji} udarci={prekrsaji.domaciPrekrsaji} />
                    </div>
                    <p className='titleStat'>prekršaji</p>
                    <div className='itemCounter'>
                       <Stats  natpis="+" akcija={uvecajGostiPrekrsaji} udarci={prekrsaji.gostiPrekrsaji} />
                       <Stats  natpis="-" akcija={umanjiGostiPrekrsaji} udarci={prekrsaji.gostiPrekrsaji}/>
                    </div>
                   <div className='itemNumber'>{prekrsaji.gostiPrekrsaji}</div>
                  
                  </div> 
                  <div className='statElm'>

                   <div className='itemNumber'>{kartoni.domaciKartoni}</div>
                    <div className='itemCounter'>
                        <Stats  natpis="+" akcija={uvecajDomaciKartoni} udarci={kartoni.domaciKartoni} />
                        <Stats natpis="-" akcija={umanjiDomaciKartoni} udarci={kartoni.domaciKartoni} /> 
                    </div>
                    <p className='titleStat'>kartoni</p>
                    <div className='itemCounter'>
                       <Stats  natpis="+" akcija={uvecajGostiKartoni} udarci={kartoni.gostiKartoni} />
                       <Stats  natpis="-" akcija={umanjiGostiKartoni} udarci={kartoni.gostiKartoni}/>
                    </div>
                   <div className='itemNumber'>{kartoni.gostiKartoni}</div>
                  
                  </div> 

                 </div>
              </div>
            </div>
          )

          }
          
      </div>

    </div>
  )
}

export default Window



/* 
const removeItem=(item)=>{
        if(item.team=="dom")
          {
            promjeniDomaciNegativno();
            const novaLista=lista.filter((l)=>l.id !== item.id);
            postaviListu(novaLista);
          }
         else{
              promjeniGostiNegativno();
              const novaLista=lista.filter((l)=>l.id !== item.id);
              postaviListu(novaLista);
        }
      }








const promjeniDomaciPozitivno=()=>{
      postaviDomaciBroj(domaciBroj+1);

      var dom=(domaciBroj+1).toString();
      var gost=(gostiBroj).toString();
      var min=(minute).toString();
      var rez=dom+":"+gost+" "+min+" min";
      
      const noviRez={
        id:Math.random(),
        team:"dom",
        result:rez,
      };
      console.log(noviRez);
      postaviListu([...lista,noviRez])

    }

     const promjeniNegativno=(item)=>{
    if(item.team==="gost")
    {
      promjeniGostiNegativno()
      const novaLista=lista.filter((l)=>l.id !== item.id);
      postaviListu(novaLista);
    }
    else
    {
      promjeniDomaciNegativno()
      const novaLista=lista.filter((l)=>l.id !== item.id);
      postaviListu(novaLista);
    }
  }

    const promjeniDomaciNegativno=(id)=>{
        postaviDomaciBroj(domaciBroj-1);

        const novaLista=
          lista.filter((item)=>item.id!==id);
        
        postaviListu(novaLista)

    }
    const promjeniGostiPozitivno=()=>{
      postaviGostiBroj(gostiBroj+1);

        var dom=(domaciBroj).toString();
        var gost=(gostiBroj+1).toString();
        var min=(minute).toString();
        var rez=dom+":"+gost+" "+min+" min";
        
        console.log(rez);
        const noviRez={
          id:Math.random(),
          team:"gost",
          result:rez,
        };
        console.log(noviRez);
        postaviListu([...lista,noviRez])
    }



    const promjeniGostiNegativno=(id)=>{
        postaviGostiBroj(gostiBroj-1);

         const novaLista=
          lista.filter((item)=>item.id!==id);
        
        postaviListu(novaLista)
        
    } */