import { useState, useEffect } from 'react'
import service from './services'
import Entries from './Entries'
import './styles.css'
import Total from './Total'
import utils from './utils/utils.js'

function App() {
  const [coinType, setCoinType] = useState('quarter')
  const [count, setCount] = useState(0)
  const [stateReset, setStateReset] = useState(true)
  const [quarters, setQuarters] = useState(0)
  const [nickels, setNickels] = useState(0)
  const [dimes, setDimes] = useState(0)
  const [pennies, setPennies] = useState(0)
  const [entries, setEntries] = useState([])

  useEffect(() => {
    service.getAllCoins()
      .then(coinObject => {
        setQuarters(coinObject[0].total)
        setDimes(coinObject[1].total)
        setNickels(coinObject[2].total)
        setPennies(coinObject[3].total)
      })
    service.getEntries()
      .then(e => {
        setEntries(e)
      })
  }, [stateReset])

  const handleSubmit = async (event) => {
    event.preventDefault()
    service.getCoinObject(coinType)
      .then(coinObject => {
        const amountAdded = coinObject.value * count
        service.updateTotal(total, amountAdded, coinType)
          .then(() => {
            const newEntry = {
              "dateAdded": new Date(),
              "coin": coinType,
              "amountAdded": amountAdded
            }
            service.addEntry(newEntry)
            setCoinType('')
            setCount(0)
            const newStateReset = !stateReset
            setStateReset(newStateReset)
          })
      })
  }

  return (
    <>
      <h2>Totals</h2>
      <Total entries={entries} />
      <div id='quarters'>Quarters: {utils.setAmountToFixed(quarters)}</div>
      <div id='dimes'>Dimes: {utils.setAmountToFixed(dimes)}</div>
      <div id='nickels'>Nickels: {utils.setAmountToFixed(nickels)}</div>
      <div id='pennies'>Pennies: {utils.setAmountToFixed(pennies)}</div>
      <h2>Add some coins</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>coin type</label>{" "}
          <select type="option" value={coinType} onChange={(e) => setCoinType(e.target.value)}>
            <option value="quarter">quarter</option>
            <option value="dime">dime</option>
            <option value="nickel">nickel</option>
            <option value="penny">penny</option>
          </select>
        </div>
        <div>
          <label>number of coins</label>{" "}
          <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Entries</h2>
      <Entries entries={entries} />
    </>
  )
}

export default App
