import assert from "node:assert";
import { describe, it, expect } from "vitest";
import { filterTableEntries } from "./Entries.helpers.js";

const entries = [
  {
    id: "1",
    dateAdded: new Date("2025-08-30").toISOString(),
    coin: "quarter",
    amountAdded: 1,
  },
  {
    id: "2",
    dateAdded: new Date("2025-08-31").toISOString(),
    coin: "quarter",
    amountAdded: 1,
  },
  {
    id: "3",
    dateAdded: new Date("2025-09-01").toISOString(),
    coin: "quarter",
    amountAdded: 1,
  },
  {
    id: "4",
    dateAdded: new Date("2025-09-02").toISOString(),
    coin: "quarter",
    amountAdded: 1,
  },
];

describe("filterTableEntries", () => {
  it.only("checkForFilteredDate returns entries filtered by Date if date", () => {
    const entriesFilteredByDate = filterTableEntries(
      entries,
      "all",
      "2025-09-01",
    );
    expect(entriesFilteredByDate).toEqual([
      {
        amountAdded: 1,
        coin: "quarter",
        dateAdded: new Date("2025-09-01").toISOString(),
        id: "3",
      },
    ]);
  });

  it("checkForFilteredDate returns all entries if no date", () => {
    const entriesFilteredByDate = filterTableEntries(entries, "all", "");
    assert.equal(entriesFilteredByDate.length, 4);
  });
});
