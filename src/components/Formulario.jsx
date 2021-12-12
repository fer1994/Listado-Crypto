import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { currency } from '../data/currency'

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;
  &:hover {
    cursor: pointer;
    background-color: #7A7DFE;
  }
`

const Formulario = ({currencySelec, setCurrency}) => {
  const [currencySelected, SelectMoney] = useSelectMonedas('Elige tu Moneda', currency, currencySelec)

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if(currencySelected) {
      setCurrency(currencySelected)
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <SelectMoney />
      <InputSubmit type="submit" value={`Buscar por ${currencySelected}`} />
    </form>
  )
}  
export default Formulario
