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

export default {
  setAmountToFixed,
  formatDate
}
