function TableFilter({ handleSettingOption }) {
  return (
    <div>
      <p>Number of entries:
        <select onChange={(event) => handleSettingOption(event)}>
          <option>all</option>
          <option>100</option>
          <option>50</option>
          <option>10</option>
        </select>
      </p>
    </div>
  )
}

export default TableFilter
