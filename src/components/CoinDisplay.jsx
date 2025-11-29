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


  return (
    <div>
      <div id='quarters'>Quarters: {utils.setAmountToFixed(quarters)}</div>
      <div id='dimes'>Dimes: {utils.setAmountToFixed(dimes)}</div>
      <div id='nickels'>Nickels: {utils.setAmountToFixed(nickels)}</div>
      <div id='pennies'>Pennies: {utils.setAmountToFixed(pennies)}</div>
    </div>
  )
}

export default CoinDisplay
