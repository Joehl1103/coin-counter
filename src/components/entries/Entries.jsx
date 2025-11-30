import utils from '../../utils/utils.js'
import { useState, useEffect } from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import TableFilter from '../TableFilter.jsx'
import { filterTableEntries } from './entriesHelpers.js'

const Entries = ({ entries }) => {
  const [option, setOption] = useState('all')
  const [filterDate, setFilterDate] = useState('')
  const [filteredEntries, setFilteredEntries] = useState([])
  const [displayConst, setDisplayConst] = useState('contents')
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

  function setDisplay() {
    if (displayConst === 'contents') {
      setDisplayConst('none')
      return
    }
    setDisplayConst('contents')
    return
  }
  let index = 0

  // const showHideButton = document.getElementById('showHideButton')
  // showHideButton.onMouseOver(() => {
  // })
  //
  return (
    <div >

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h2>Entries</h2>
        <button
          id='showHideButton'
          onClick={setDisplay}
          style={{ marginLeft: 5, marginTop: 24, height: 20 }}
        >{displayConst === 'contents' ? 'hide' : 'show'}</button>
        <p style={{ marginTop: 29, marginLeft: 5 }}><i>List of coin entries submitted by the user, by coin-type.</i></p>
      </div>
      <div style={{ display: displayConst }}>
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
    </div >
  )
}

export default Entries
