import utils from './utils/utils.js'
const Entries = ({ entries }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Date added</td>
            <td>Coin Type</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody>
          {entries.map(e => {
            return (
              <tr key={e.id}>
                <td>{utils.formatDate(e.dateAdded)}</td>
                <td>{e.coin}</td>
                <td>{utils.setAmountToFixed(e.amountAdded)}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}

export default Entries
