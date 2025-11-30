import { useState, useEffect } from 'react'
import service from './services'
import { compareDates } from './utils/utils.js'
import './styles.css'
import Entries from './components/entries/Entries'
import Total from './components/Total'
import CoinDisplay from './components/CoinDisplay.jsx'
import NewEntryForm from './components/NewEntryForm.jsx'
import Notification from './components/Notification.jsx'

function App() {
  const [entries, setEntries] = useState([])
  const [refetchEntries, setRefetchEntries] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')

  useEffect(() => {
    service.getEntries()
      .then(e => {
        const sortedEntries = e.sort((a, b) => compareDates(a.dateAdded, b.dateAdded))
        setEntries(sortedEntries)
      })
  }, [refetchEntries])

  function signalReset() {
    setRefetchEntries(!refetchEntries)
  }

  if (entries.length === 0) {
    return <div>No data</div>
  }
  return (
    <>
      {notificationMessage.length > 0 ? <Notification
        notificationMessage={notificationMessage}
        setNotificationMessage={setNotificationMessage} /> : null}
      <h2>Totals</h2>
      <Total entries={entries} />
      <CoinDisplay />
      <h2>Add some coins</h2>
      <NewEntryForm
        signalReset={signalReset}
        setNotificationMessage={setNotificationMessage}
      />
      <h2>Entries</h2>
      <Entries entries={entries} />
    </>
  )
}

export default App
