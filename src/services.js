import axios from 'axios'

const baseUrl = 'http://localhost:3000'

const getTotal = async () => {
  const response = await axios.get(`${baseUrl}/total`)
  const total = response.data[0].value
  return total
}

const getCoinObject = async (type) => {
  const response = await axios.get(`${baseUrl}/coin-values/${type}`)
  return response.data
}

const getAllCoins = async () => {
  const response = await axios.get(`${baseUrl}/coin-values/`)
  return response.data
}

const updateTotal = async (total, amountAdded, type) => {
  const newTotalObject = {
    id: 1,
    value: total + amountAdded
  }
  await axios.put(`${baseUrl}/total/grand`, newTotalObject)
  const coinTypeObject = await getCoinObject(type)
  const newCoinObject = {
    ...coinTypeObject,
    total: coinTypeObject.total + amountAdded
  }
  await axios.put(`${baseUrl}/coin-values/${type}`, newCoinObject)
}

const getCoinValue = async (type) => {
  const response = await axios.get(`${baseUrl}/coin-values/`)
  let value = null
  response.data.forEach(obj => {
    if (obj.id === type) {
      value = obj.value
    }
  })
  return value
}

const addEntry = async (entry) => {
  await axios.post(`${baseUrl}/entries`, entry)
}

const getEntries = async () => {
  const response = await axios.get(`${baseUrl}/entries`)
  const entries = response.data.slice(response.data[1], response.data.length)
  return entries
}

export default { getTotal, updateTotal, getAllCoins, getCoinObject, addEntry, getEntries } 
