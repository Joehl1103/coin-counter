import utils from '../utils/utils.js'
import { useState, useEffect } from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import TableFilter from './TableFilter.jsx'

const Entries = ({ entries }) => {
  const [option, setOption] = useState('all')
  const [filteredEntries, setFilteredEntries] = useState([])
  useEffect(() => {
    if (option === 'all') {
      setFilteredEntries(entries)
    } else {
      const optionAsNumber = Number(option)
      setFilteredEntries(entries.slice(0, optionAsNumber))
    }
  }, [entries, filteredEntries])

  function handleSettingOption(event) {
    event.preventDefault()
    setOption(event.target.value)
  }
  if (filteredEntries.length === 0) {
    return <div>No entries...</div>
  }
  return (
    <div>
      <TableFilter
        handleSettingOption={handleSettingOption} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date added</TableCell>
            <TableCell>Coin Type</TableCell>
            <TableCell>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredEntries.map(e => {
            return (
              <TableRow key={e.id}>
                <TableCell>{utils.formatDate(e.dateAdded)}</TableCell>
                <TableCell>{e.coin}</TableCell>
                <TableCell>{utils.setAmountToFixed(e.amountAdded)}</TableCell>
              </TableRow>
            )
          })}

        </TableBody>
      </Table>
    </div>
  )
}

export default Entries
