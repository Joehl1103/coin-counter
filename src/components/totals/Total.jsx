import utils from "../../utils.js";
import * as styles from "./Total.styles.js";

function Total({ entries }) {
  function calculateTotal(entries) {
    return entries.reduce((sum, entry) => (sum += entry.amountAdded), 0);
  }
  return (
    <div style={styles.totalDiv}>
      Grand Total: ${utils.setAmountToFixed(calculateTotal(entries))}
    </div>
  );
}

export default Total;
