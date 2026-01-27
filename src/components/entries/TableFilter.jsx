import { useState, useRef } from "react";

function TableFilter({ setOption, setFilterDate }) {
  const [tempDate, setTempDate] = useState("");
  const dateInputRef = useRef(null);

  function handleSettingOption(event) {
    event.preventDefault();
    setOption(event.target.value);
  }

  function submitDate(event) {
    event.preventDefault();
    setFilterDate(tempDate);
  }

  function clear(event) {
    event.preventDefault();
    setFilterDate("");
    setTempDate("");
    dateInputRef.current.value = "";
  }
  return (
    <div>
      <div>
        Number of entries:
        <select onChange={(event) => handleSettingOption(event)}>
          <option>all</option>
          <option>100</option>
          <option>50</option>
          <option>10</option>
        </select>
      </div>
      <div>
        <form onSubmit={(event) => submitDate(event)}>
          <label>Filter by date:</label>
          <input
            ref={dateInputRef}
            onChange={(event) => setTempDate(event.target.value)}
            type="date"
          />
          <button type="submit">set date</button>
          <button onClick={(event) => clear(event)}>clear</button>
        </form>
      </div>
    </div>
  );
}

export default TableFilter;
