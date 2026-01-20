import Notification from './components/Notification.jsx'
import Totals from './components/totals/Totals.jsx'
import Entries from './components/entries/Entries.jsx'
import NewEntryForm from './components/NewEntryForm.jsx'

function Body(props) {
  return (
    <div className="body">
      {props.notificationMessage.length > 0 ? <Notification
        notificationMessage={props.notificationMessage}
        setNotificationMessage={props.setNotificationMessage} /> : null}
      <Totals entries={props.entries} />
      <NewEntryForm
        signalReset={props.signalReset}
        setNotificationMessage={props.setNotificationMessage}
      />
      <Entries entries={props.entries} />
    </div>
  )
}

export default Body
