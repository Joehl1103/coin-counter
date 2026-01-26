import { useMemo } from "react";
import utils from "../../utils/utils.js";
import * as styles from "./CoinDisplay.styles.js";

const COIN_NAMES = {
  PENNY: "penny",
  DIME: "dime",
  NICKEL: "nickel",
  QUARTER: "quarter",
  N_A: "n/a",
};

function CoinDisplay({ entries }) {
  const { quarters, dimes, nickels, pennies, n_a } = useMemo(() => ({
    quarters: entries.filter((e) => e.coin === COIN_NAMES.QUARTER),
    dimes: entries.filter((e) => e.coin === COIN_NAMES.DIME),
    nickels: entries.filter((e) => e.coin === COIN_NAMES.NICKEL),
    pennies: entries.filter((e) => e.coin === COIN_NAMES.PENNY),
    n_a: entries.filter((e) => e.coin === COIN_NAMES.N_A),
  }), [entries]);

  function calcTotal(coinArray) {
    if (coinArray.length === 0) {
      return 0;
    }
    return coinArray.reduce((acc, current) => acc + current.amountAdded, 0);
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
        <p style={styles.returnIcon("rgb(213,213,213)")}></p>
        <p>unknown: ${utils.setAmountToFixed(calcTotal(n_a))}</p>
      </div>
    </div>
  );
}

export default CoinDisplay;
