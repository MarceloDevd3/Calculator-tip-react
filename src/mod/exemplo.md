const [price, setPrice] = useState(0)
  const [porcent, setPorcent] = useState(0)
  const [people, setPeople] = useState(0)
  const [error, setError] = useState('error here')


    const ChangePrice = (prices) => {
    setPrice(prices)
  }

  const hundleButton = (valor) => {
    setPorcent(valor)   
  }


  const ChangePeople = (NumberOfPeople) => {
    setPeople(NumberOfPeople)
  }


   

  function update() {
    const real = Number(price)
    const gorjeta = Number(porcent)
    const convidados = Number(people)
    return real + gorjeta
  }

  function Tip(){
    const real = parseInt(price)
    const gorjeta = parseInt(porcent)
    const convidados = parseInt(people)
    return Number(real /convidados) || 0   
  }

  console.log(error)


   <p>R$ {(update().toFixed(2))}</p>
   <p>R$ {(Tip().toFixed(2))}</p>
 


  

