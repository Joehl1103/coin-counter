import service from './services'
const Entries = ({ entries }) => {
    console.log('entries in Entries',entries)
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
                            <td>{e.dateAdded}</td>
                            <td>{e.coin}</td>
                            <td>{e.amountAdded}</td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    </div>
   ) 
}

export default Entries