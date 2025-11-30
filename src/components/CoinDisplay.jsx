import service from './../services.js'
import { useState, useEffect } from 'react'
import utils from '../utils/utils.js'

function CoinDisplay() {
  const [quarters, setQuarters] = useState(0)
  const [nickels, setNickels] = useState(0)
  const [dimes, setDimes] = useState(0)
  const [pennies, setPennies] = useState(0)

  useEffect(() => {
    service.getAllCoins()
      .then(coinObject => {
        setQuarters(coinObject[0].total)
        setDimes(coinObject[1].total)
        setNickels(coinObject[2].total)
        setPennies(coinObject[3].total)
      })
  }, [])

  const coinDisplayStyle = {
    margin: 0,
    padding: 0,
    width: 125,
    display: 'flex',
    flexDirection: 'row',
    gap: 5
  }

  function returnIcon(color) {

    return {
      width: 20,
      height: 20,
      backgroundColor: color
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div id='quarters' style={coinDisplayStyle}>
        <p style={returnIcon('greenyellow')}></p>
        <p>Quarters: {utils.setAmountToFixed(quarters)}</p>
      </div>
      <div id='dimes' style={coinDisplayStyle}>
        <p style={returnIcon('rgb(255, 0, 251)')}></p>
        <p>Dimes: {utils.setAmountToFixed(dimes)}</p>
      </div>
      <div id='nickels' style={coinDisplayStyle}>
        <p style={returnIcon('yellow')}></p>
        <p>Nickels: {utils.setAmountToFixed(nickels)}</p>
      </div>
      <div id='pennies' style={coinDisplayStyle}>
        <p style={returnIcon('rgb(175, 0, 175)')}></p>
        <p>Pennies: {utils.setAmountToFixed(pennies)}</p>
      </div>
    </div >
  )
}

export default CoinDisplay
