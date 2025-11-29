function Notification({ notificationMessage, setNotificationMessage }) {
  console.log('message', notificationMessage)
  const styleObject = {
    border: "solid",
    padding: 5,
    margin: 5,
  }
  function returnDismissButton() {
    return <button onClick={() => setNotificationMessage('')}>dismiss</button>
  }

  function returnErrorAndDismiss() {
    return <div>{!notificationMessage || notificationMessage.length === 0 ? notificationMessage : 'Something went wrong'} {returnDismissButton()}</div>
  }
  return (
    <div style={styleObject}>
      <p>{returnErrorAndDismiss()}</p>
    </div>
  )
}

export default Notification


