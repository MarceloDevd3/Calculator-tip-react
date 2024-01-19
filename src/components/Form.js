import React, { useState } from 'react';

import dolar from './images/icon-dollar.svg'
import person from './images/icon-person.svg'

export default  function Form() {


  const [price, setPrice] = useState('')
  const [porcent, setPorcent] = useState('')
  const [people, setPeople] = useState(0)
  const [menssageErr, setMessegeErr] = useState('')
  const [menssageSucess, setMenssageSucess] = useState('')
  
    const ChangePrice = (prices) => {
     setPrice(prices)
     if( prices >= 1 )  {
      setMenssageSucess('eror detectador')
     }else {
      setMenssageSucess('') 
     }
     }
     

  const hundleButton = (valor) => {
    setPorcent(valor)   
  }

  const ChangePeople = (NumberOfPeople) => {
    setPeople(NumberOfPeople)
    if( NumberOfPeople === 0 || NumberOfPeople === '' )  {
     setMessegeErr('eror detectador')
    }else {
     setMessegeErr('') 
    }
  }

  const real = Number(price)
  const gorjeta = parseInt(porcent)
  const convidados = parseInt(people)
  const totalTip = ( real * (gorjeta / 100) / convidados)

  function AmountTip() {
    if(price && porcent && people){
      return totalTip 
    } else {
      return 0 
    }
  }


  function AmountPeople() {
    if(price && porcent && people){
      return (real  + totalTip) / convidados 
    }else {
      return 0
    }
  }
  function reset() {
   setPrice(0)
   setPorcent(0)
   setPeople(0)
  }

  

  
   
 

  return (
    <div className='container'>
       <h1>Spli <br/> tter</h1>
       <section className='form-container'>
       <section className='form-Zone'>
         <label htmlFor='price'>bill</label>
         
          <div className='price'>
           <input type='text'
           className={menssageSucess ? 'sucess-box' : '' }
           name="price"
           id="price"
           value={price}
           onChange={(e) => ChangePrice(e.target.value)}
           />
          <img src={dolar} className='dollar' alt='Icon-dollar' />
      
          </div>
          <article className='Btn-container'>
          <span>Select Tip %</span>
           <div className='row-btn'>
            <button onClick={() => hundleButton(5)}>5%</button>
            <button onClick={() => hundleButton(10)}>10%</button>
            <button onClick={() => hundleButton(15)}>15%</button>
            <button onClick={() => hundleButton(25)}>25%</button>
            <button onClick={() => hundleButton(50)}>50%</button>
             <input type='text' value={porcent} placeholder='Custom'
           onChange={(e) => hundleButton(e.target.value)} />
           </div>
          </article>
          <div className='row'>
          <label htmlFor='person'>Number Of People</label>
          <label>{menssageErr ? "can't be zero" : " "}</label>
          </div>
          <div className='people'>
           <input className={menssageErr ? 'error-box' : '' }
            type="text"
           value={people}
           id='person'
           name='people'
           onChange={(e) => ChangePeople(e.target.value)}
           />
           <img src={person} className='person' alt='icon-person' />
          </div>
       </section>
       <article className='Price-display'>
          <div className='row'>
          <div className='line'>
          <p>Tip Amount  <br/> <small>/ person</small></p>
          </div>
          <div className='line-price'>
          <p>${(AmountTip().toFixed(2))}</p>
          </div>
          </div>
          <div className='row'>
          <div className='line'>
          <p>Total <br/> <small>/ Person</small></p>
          </div>
          <div className='line-price'>
          <p>${(AmountPeople().toFixed(2))}</p>
          </div>
          </div>
          <button onClick={reset}>Reset</button>
       </article>
       </section>
    </div>
  ) 
}


