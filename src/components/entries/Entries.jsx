import utils from '../../utils/utils.js'
import { useState, useEffect } from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import TableFilter from '../TableFilter.jsx'
import { filterTableEntries } from './entriesHelpers.js'

const Entries = ({ entries }) => {
  const [option, setOption] = useState('all')
  const [filterDate, setFilterDate] = useState('')
  const [filteredEntries, setFilteredEntries] = useState([])

  useEffect(() => {
    const filteredEntries = filterTableEntries(entries, option, filterDate)
    setFilteredEntries(filteredEntries)
  }, [option, filterDate])


  if (filteredEntries.length === 0) {
    return <div>No entries...</div>
  }

  const headerStyle = {
    fontWeight: "bold"
  }
  let index = 0

  return (
    <div>
      <TableFilter
        setOption={setOption}
        setFilterDate={setFilterDate}
      />
      <Table>
        <TableHead>
          <TableRow >
            <TableCell style={headerStyle}>#</TableCell>
            <TableCell style={headerStyle}>Date added</TableCell>
            <TableCell style={headerStyle}>Coin Type</TableCell>
            <TableCell style={headerStyle}>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredEntries.map(e => {
            index++
            return (
              <TableRow key={e.id}>
                <TableCell>{index}</TableCell>
                <TableCell>{utils.formatDate(e.dateAdded)}</TableCell>
                <TableCell>{e.coin}</TableCell>
                <TableCell>{utils.setAmountToFixed(e.amountAdded)}</TableCell>
              </TableRow>
            )
          })}

        </TableBody>
      </Table>
    </div >
  )
}

export default Entries
