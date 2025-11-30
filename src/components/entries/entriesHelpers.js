
function checkForFilterDate(entries, filterDate) {
  if (filterDate.length > 0) {
    return entries.filter(e => e.dateAdded >= filterDate)
  }
  return entries
}

function checkForOption(entries, option) {
  if (option !== 'all') {
    return entries.slice(0, Number(option))
  }
  return entries
}

export function filterTableEntries(entries, option, filterDate) {
  const entriesFilteredByDate = checkForFilterDate(entries, filterDate)
  return checkForOption(entriesFilteredByDate, option)
}
