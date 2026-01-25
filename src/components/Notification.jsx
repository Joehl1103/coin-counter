function Notification({
  notificationMessage,
  setNotificationMessage,
  notificationType,
}) {
  const styleObject = {
    border: "solid",
    borderWidth: 1,
    backgroundColor: notificationType ? "#9cffcc" : "#ff9c9c",
    padding: 10,
    margin: 5,
    width: 500,
    textAlign: "center",
  };

  function returnDismissButton() {
    return <button onClick={() => setNotificationMessage("")}>dismiss</button>;
  }

  console.log("notificationMessage", notificationMessage);

  function returnErrorAndDismiss(notificationMessage) {
    return (
      <div>
        {notificationMessage || notificationMessage.length > 0 ? (
          <>
            {notificationMessage} {returnDismissButton()}
          </>
        ) : (
          "Something went wrong"
        )}
      </div>
    );
  }
  return (
    <div style={styleObject}>{returnErrorAndDismiss(notificationMessage)}</div>
  );
}

export default Notification;
