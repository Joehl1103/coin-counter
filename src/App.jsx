import { useState, useEffect } from 'react'
import service from './services'
import { compareDates } from './utils/utils.js'
import Entries from './components/entries/Entries'
import Totals from './components/totals/Totals.jsx'
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
      <h1 style={{ textAlign: 'center' }}>Coin-Counter</h1>
      {notificationMessage.length > 0 ? <Notification
        notificationMessage={notificationMessage}
        setNotificationMessage={setNotificationMessage} /> : null}
      <Totals entries={entries} />
      <NewEntryForm
        signalReset={signalReset}
        setNotificationMessage={setNotificationMessage}
      />
      <Entries entries={entries} />
      <p>Built in 2025 by J. Loomis</p>
    </>
  )
}

export default App
