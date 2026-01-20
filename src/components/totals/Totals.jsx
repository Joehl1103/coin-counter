import CoinDisplay from './CoinDisplay.jsx'
import Total from './Total.jsx'

function Totals({ entries }) {
  return (
    <>
      <h2>Totals</h2>
      <Total entries={entries} />
      <CoinDisplay />
    </>
  )
}

export default Totals
