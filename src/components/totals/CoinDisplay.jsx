import service from "./../../services.js";
import { useState, useEffect } from "react";
import utils from "../../utils/utils.js";
import * as styles from "./CoinDisplay.styles.js";

function CoinDisplay({ entries }) {
  const [quarters, setQuarters] = useState([]);
  const [nickels, setNickels] = useState([]);
  const [dimes, setDimes] = useState([]);
  const [pennies, setPennies] = useState([]);
  const [n_a, setN_A] = useState([]);

  const COIN_NAMES = {
    PENNY: "penny",
    DIME: "dime",
    NICKEL: "nickel",
    QUARTER: "quarter",
    N_A: "n/a",
  };

  useEffect(() => {
    service.getEntries().then((entries) => {
      setQuarters(entries.filter((e) => e.coin === COIN_NAMES.QUARTER));
      setDimes(entries.filter((e) => e.coin === COIN_NAMES.DIME));
      setNickels(entries.filter((e) => e.coin === COIN_NAMES.NICKEL));
      setPennies(entries.filter((e) => e.coin === COIN_NAMES.PENNY));
      setN_A(entries.filter((e) => e.coin === COIN_NAMES.N_A));
    });
  }, [entries]);

  function calcTotal(coinArray) {
    if (coinArray.length === 0) {
      return 0;
    }
    return coinArray.reduce((acc, current) => {
      return acc + current.amountAdded;
    }, 0);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
      }}
    >
      <div id="quarters" style={styles.coinDisplayStyle}>
        <p style={styles.returnIcon("greenyellow")}></p>
        <p>Quarters: ${utils.setAmountToFixed(calcTotal(quarters))}</p>
      </div>
      <div id="dimes" style={styles.coinDisplayStyle}>
        <p style={styles.returnIcon("rgb(255, 0, 251)")}></p>
        <p>Dimes: ${utils.setAmountToFixed(calcTotal(dimes))}</p>
      </div>
      <div id="nickels" style={styles.coinDisplayStyle}>
        <p style={styles.returnIcon("yellow")}></p>
        <p>Nickels: ${utils.setAmountToFixed(calcTotal(nickels))}</p>
      </div>
      <div id="pennies" style={styles.coinDisplayStyle}>
        <p style={styles.returnIcon("rgb(175, 0, 175)")}></p>
        <p>Pennies: ${utils.setAmountToFixed(calcTotal(pennies))}</p>
      </div>
      <div id="n_a" style={styles.coinDisplayStyle}>
        <p style={styles.returnIcon("rgb(213,213,213")}></p>
        <p>unknown: ${utils.setAmountToFixed(calcTotal(n_a))}</p>
      </div>
    </div>
  );
}

export default CoinDisplay;
