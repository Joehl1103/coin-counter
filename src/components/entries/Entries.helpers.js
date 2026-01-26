function checkForFilterDate(entries, filterDate) {
  if (filterDate.length > 0) {
    return entries.filter((e) => {
      const dateOnly = e.dateAdded.substring(0, 10);
      if (dateOnly === filterDate) {
        console.log(e);
      }
      return dateOnly === filterDate;
    });
  }
  return entries;
}

function checkForOption(entries, option) {
  if (option === "all") {
    return entries;
  }
  const optNum = Number(option);
  if (isNaN(optNum)) {
    throw new Error("option is not a number");
  }
  if (![100, 50, 10].includes(optNum)) {
    throw new Error(
      `option (${option}) is not among the listed options: 100, 50, 10`,
    );
  }
  return entries.slice(0, optNum);
}

export function filterTableEntries(entries, option, filterDate) {
  const entriesFilteredByDate = checkForFilterDate(entries, filterDate);
  return checkForOption(entriesFilteredByDate, option);
}
