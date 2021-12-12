import { useState } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import CryptoTable from './components/CryptoTable'

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  width: 90%;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const Contenedor = styled.div`
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`


function App() {
  const [currency, setCurrency] = useState('USD')

  return (
    <Contenedor>
      <div>
        <Heading>Elige la moneda</Heading>
        <Formulario currencySelec={currency} setCurrency={setCurrency} />

      </div>
      <div>
        <Heading>Tabla de Criptomonedas</Heading>
        <CryptoTable currency={currency}/>
      </div>
    </Contenedor>
  )
}

export default App
