import utils from "../../utils/utils.js";
import { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  GlobalStyles,
} from "@mui/material";
import TableFilter from "./TableFilter.jsx";
import { filterTableEntries } from "./Entries.helpers.js";
import * as styles from "./Entries.styles.js";
import service from "./../../services.js";

const Entries = ({ entries, setEntries }) => {
  const [option, setOption] = useState("all");
  const [filterDate, setFilterDate] = useState("");
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [displayConst, setDisplayConst] = useState("contents");
  useEffect(() => {
    const filteredEntries = filterTableEntries(entries, option, filterDate);
    setFilteredEntries(filteredEntries);
  }, [entries, option, filterDate]);

  if (filteredEntries.length === 0) {
    return <div>No entries...</div>;
  }

  function setDisplay() {
    if (displayConst === "contents") {
      setDisplayConst("none");
      return;
    }
    setDisplayConst("contents");
    return;
  }
  let index = 0;

  function handleDelete(id) {
    if (window.confirm("Are you sure that you want to delete this entry?")) {
      service.deleteEntry(id);
      const newEntries = entries.filter((e) => e.id !== id);
      setEntries(newEntries);
    }
  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h2>Entries</h2>
        <button
          id="showHideButton"
          onClick={setDisplay}
          style={{ marginLeft: 5, marginTop: 24, height: 20 }}
        >
          {displayConst === "contents" ? "hide" : "show"}
        </button>
        <p style={{ marginTop: 29, marginLeft: 5 }}>
          <i>List of coin entries submitted by the user, by coin-type.</i>
        </p>
      </div>
      <div style={{ display: displayConst }}>
        <TableFilter setOption={setOption} setFilterDate={setFilterDate} />
        <GlobalStyles styles={{ fontFamily: "var(--font-main)" }} />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styles.headerStyle}>#</TableCell>
              <TableCell style={styles.headerStyle}>Date added</TableCell>
              <TableCell style={styles.headerStyle}>Coin Type</TableCell>
              <TableCell style={styles.headerStyle}>Amount</TableCell>
              <TableCell style={styles.headerStyle}>🗑️</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEntries.map((e) => {
              index++;
              return (
                <TableRow key={e.id}>
                  <TableCell>{index}</TableCell>
                  <TableCell>{utils.formatDate(e.dateAdded)}</TableCell>
                  <TableCell>{e.coin}</TableCell>
                  <TableCell>{utils.setAmountToFixed(e.amountAdded)}</TableCell>
                  <TableCell>
                    <button onClick={() => handleDelete(e.id)}>🧨</button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Entries;
