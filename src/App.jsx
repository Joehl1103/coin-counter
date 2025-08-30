import { useState, useEffect } from 'react'
import service from './services'

function App() {
  const [coinType, setCoinType] = useState('quarter')
  console.log('coin type',coinType)
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(null)
  const [stateReset,setStateReset] = useState(true)
  const [quarters,setQuarters] = useState(0)
  const [dimes, setDimes] = useState(0)
  const [pennies,setPennies] = useState(0)

  useEffect(() => {
    service.getTotal()
      .then(t => { 
        const response = t 
        setTotal(t)
      })
    service.getAllCoins()
      .then(coinObject => {
        setQuarters(coinObject[0].total)
        setDimes(coinObject[1].total)
        setPennies(coinObject[2].total)
      })
  },[stateReset])

  const handleSubmit = async (event) => {
    event.preventDefault()
    service.getCoinObject(coinType)
      .then(coinObject => {
        console.log('coin type in handleSubmit',coinType)
        const amountAdded = coinObject.value * count 
        console.log('amountAdded',amountAdded)
        service.updateTotal(total,amountAdded,coinType)
          .then(() => {
            console.log('updated')
              const newEntry = {
                    "date-added": new Date(),
                    "coin": coinType,
                    "amount-added": amountAdded
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
    <div>Grand total: {total ? (total.toString().length > 4 ? total.toFixed(2) : total) : `error`}</div>
    <div>Quarters: {quarters ? (quarters.toString().length > 4 ? quarters.toFixed(2) : quarters) : `error`}</div>
    <div>Dimes: {dimes ? (dimes.toString().length > 4 ? dimes.toFixed(2) : dimes) : `error`}</div>
    <div>Pennies: {pennies ? (pennies.toString().length > 4 ? pennies.toFixed(2) : pennies) : `error`}</div>
    <h2>Add some coins</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>coin type</label>{" "}
        <select type="option" value={coinType} onChange={(e) => setCoinType(e.target.value)}>
          <option value="quarter">quarter</option>
          <option value="dime">dime</option>
          <option value="penny">penny</option>
        </select>
      </div>
      <div>
      <label>number of coins</label>{" "}
      <input type="number" value={count} onChange={(e) => setCount(e.target.value)}/>
      </div>
      <button type="submit">add</button>
    </form>
  </>
)
}

export default App
