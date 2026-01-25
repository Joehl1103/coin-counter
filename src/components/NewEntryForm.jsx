import service from "../services.js";
import { useState } from "react";

const COIN_VALUES = {
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01,
};

function getCoinValue(coinType) {
  switch (coinType) {
    case "quarter":
      return COIN_VALUES.QUARTER;
      break;
    case "dime":
      return COIN_VALUES.DIME;
      break;
    case "nickel":
      return COIN_VALUES.NICKEL;
      break;
    case "penny":
      return COIN_VALUES.PENNY;
      break;
    default:
      throw new Error(`Unrecognized coin type: ${coinType}`);
  }
}

function NewEntryForm({ signalReset, setNotificationMessage }) {
  const [coinType, setCoinType] = useState("quarter");
  const [count, setCount] = useState(0);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!count || count === 0) {
      setNotificationMessage("Number of coins should be greater than 0.");
      return;
    }
    const amountAdded = getCoinValue(coinType) * count;
    if (!amountAdded || isNaN(amountAdded)) {
      throw new Error(
        `Something is wrong with the amountAdded: ${amountAdded}.`,
      );
    }
    const newEntry = {
      dateAdded: new Date(),
      coin: coinType,
      amountAdded: amountAdded,
    };
    service
      .addEntry(newEntry)
      .then(() => {
        setCoinType("");
        setCount(0);
        signalReset();
      })
      .catch((error) => {
        setNotificationMessage(error.message);
        return;
      });
  };

  return (
    <div>
      <h2>Add some coins</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>coin type</label>{" "}
          <select
            type="option"
            value={coinType}
            onChange={(e) => setCoinType(e.target.value)}
          >
            <option value="quarter">quarter</option>
            <option value="dime">dime</option>
            <option value="nickel">nickel</option>
            <option value="penny">penny</option>
          </select>
        </div>
        <div>
          <label>number of coins</label>{" "}
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default NewEntryForm;
