function setAmountToFixed(coinType) {
  return coinType ? (coinType.toString().length > 4 ? coinType.toFixed(2) : coinType) : 'error'
}

function formatDate(dateString) {
  const dateStringAsDate = new Date(dateString)
  const year = dateStringAsDate.getFullYear()
  const month = dateStringAsDate.getMonth() + 1
  const day = dateStringAsDate.getDate()
  return `${year}-${month}-${day}`
}

export function compareDates(a, b) {
  if (a < b) {
    return 1
  }
  if (a > b) {
    return -1
  }
  return 0
}

export default {
  setAmountToFixed,
  formatDate,
  compareDates
}
