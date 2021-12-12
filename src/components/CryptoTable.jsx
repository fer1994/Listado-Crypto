import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
const CryptoTable = ({currency}) => {
  const [cryptoList, setCryptoList] = useState([])
  const [timeInterval, setTimeInterval] = useState(0);
  const Table = styled.table`
    font-family: 'Lato', sans-serif;
    border: 1px solid #969696;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
    color: #E0E0E0;
    border-radius: 10px;
    width: 100%;
    min-width: 600px;
  `
  const Tbody = styled.tbody`
    width: 100%;
    min-width: 500px; 
    overflow:scroll;
  `

  const Tr = styled.tr`
    height: 50px;
    text-align: center;
    border: 1px solid #969696;
    padding: .35em;
  `

  const Container = styled.div`
    overflow-x: auto;
  `

  const duration = 1000; // ms
  const animStr = (i) => `fadeIn ${duration}ms ease-out forwards`;
  let timer = null

  setTimeout(() => {
    setTimeInterval(timeInterval + 1);
  }, 5000)

  useEffect(() => {
    apiCripto(); // API call
  }, [timeInterval])

  useEffect(() => {
    apiCripto(); // API call
  }, [currency])

  useEffect( () => () => clearInterval(timeInterval), [] );

  const apiCripto = async () => {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${currency}`
    const rta = await fetch(url)
    const parsedRta = await rta.json()
    setCryptoList(parsedRta.Data.map(crypto => {
      return crypto.RAW
    }))
  }

  return (
    <Container>
      <Table>
        <Tbody>
          <Tr>
            <th>Moneda</th>
            <th>Cripto</th>
            <th>Precio</th>
            <th>Volumen 24hs</th>
            <th>Cambios en 24hs</th>
            <th>Precio Maximo</th>
            <th>Precio Minimo</th>
          </Tr>
          {cryptoList.map((crypto, i)=> {
            return (
              <Tr key={crypto[Object.keys(crypto)[0]].FROMSYMBOL} style={{ animation: animStr(i) }}>
                <td>{crypto[Object.keys(crypto)[0]].TOSYMBOL }</td>
                <td>{crypto[Object.keys(crypto)[0]].FROMSYMBOL}</td>
                <td>{crypto[Object.keys(crypto)[0]].PRICE.toFixed(2)}</td>
                <td>{crypto[Object.keys(crypto)[0]].VOLUME24HOUR.toFixed(2)}</td>
                <td>{crypto[Object.keys(crypto)[0]].CHANGE24HOUR.toFixed(2)}</td>
                <td>{crypto[Object.keys(crypto)[0]].HIGHDAY.toFixed(2)}</td>
                <td>{crypto[Object.keys(crypto)[0]].LOWDAY.toFixed(2)}</td>
              </Tr>
            )
          })}
       </Tbody>
      </Table>

    </Container>
  )
}

export default CryptoTable
