import service from './../../services.js'
import { useState, useEffect } from 'react'
import utils from '../../utils/utils.js'
import * as styles from './CoinDisplay.styles.js'

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



  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 5, justifyContent: 'center' }}>
      <div id='quarters' style={styles.coinDisplayStyle}>
        <p style={styles.returnIcon('greenyellow')}></p>
        <p>Quarters: ${utils.setAmountToFixed(quarters)}</p>
      </div>
      <div id='dimes' style={styles.coinDisplayStyle}>
        <p style={styles.returnIcon('rgb(255, 0, 251)')}></p>
        <p>Dimes: ${utils.setAmountToFixed(dimes)}</p>
      </div>
      <div id='nickels' style={styles.coinDisplayStyle}>
        <p style={styles.returnIcon('yellow')}></p>
        <p>Nickels: ${utils.setAmountToFixed(nickels)}</p>
      </div>
      <div id='pennies' style={styles.coinDisplayStyle}>
        <p style={styles.returnIcon('rgb(175, 0, 175)')}></p>
        <p>Pennies: ${utils.setAmountToFixed(pennies)}</p>
      </div>
    </div >
  )
}

export default CoinDisplay
