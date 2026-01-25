import Notification from "./components/Notification.jsx";
import Totals from "./components/totals/Totals.jsx";
import Entries from "./components/entries/Entries.jsx";
import NewEntryForm from "./components/NewEntryForm.jsx";
import { useState } from "react";

function Body(props) {
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState(false);
  console.log("notificationMessage in body", notificationMessage);

  function handleNotification(notificationMessage, type) {
    setNotificationMessage(notificationMessage);
    setNotificationType(type);
    setTimeout(() => {
      setNotificationMessage("");
    }, 5000);
  }

  const notificationDivStyle = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  };

  return (
    <div style={{ padding: "20px" }}>
      {notificationMessage.length > 0 ? (
        <div style={notificationDivStyle}>
          <Notification
            notificationMessage={notificationMessage}
            setNotificationMessage={setNotificationMessage}
            notificationType={notificationType}
          />
        </div>
      ) : null}
      <Totals entries={props.entries} setEntries={props.setEntries} />
      <NewEntryForm
        signalReset={props.signalReset}
        handleNotification={handleNotification}
      />
      <Entries
        entries={props.entries}
        setEntries={props.setEntries}
        handleNotification={handleNotification}
      />
    </div>
  );
}

export default Body;
