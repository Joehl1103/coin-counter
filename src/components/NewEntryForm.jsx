import service from '../services.js'
import { useState } from 'react'

function NewEntryForm({ signalReset, setNotificationMessage }) {
  const [coinType, setCoinType] = useState('quarter')
  const [count, setCount] = useState(0)
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!count || count === 0) {
      setNotificationMessage('Number of coins should be greater than 0.')
      return
    }
    service.getCoinObject(coinType)
      .then(coinObject => {
        if (!coinObject.value || coinObject.value.length === 0) {
          throw new Error(`Coin value is unknown: ${coinObject.value}`)
        }
        const amountAdded = coinObject.value * count
        if (!amountAdded || isNaN(amountAdded)) {
          throw new Error(`Something is wrong with the amountAdded: ${amountAdded}.`)
        }
        const newEntry = {
          "dateAdded": new Date(),
          "coin": coinType,
          "amountAdded": amountAdded
        }
        service.addEntry(newEntry)
          .then(e => {
            setCoinType('')
            setCount(0)
            signalReset()
          })
          .catch(error => {
            setNotificationMessage(error.message)
            return
          })
      })
      .catch(error => {
        setNotificationMessage(error.message)
        return
      })
  }

  return (
    <div>
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
    </div>
  )
}

export default NewEntryForm
