import utils from '../utils/utils.js'

function Total({ entries }) {
  function calculateTotal(entries) {
    return entries
      .reduce((sum, entry) => sum += entry.amountAdded, 0)
  }
  return (
    <>
      Grand Total: {utils.setAmountToFixed(calculateTotal(entries))}
    </>
  )
}

export default Total
