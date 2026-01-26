import assert from "node:assert";
import { describe, it, expect } from "vitest";
import { filterTableEntries } from "./Entries.helpers.js";

const entries = [
  {
    id: "1",
    dateAdded: "2025-08-30",
    coin: "quarter",
    amountAdded: 1,
  },
  {
    id: "2",
    dateAdded: "2025-08-31",
    coin: "quarter",
    amountAdded: 1,
  },
  {
    id: "3",
    dateAdded: "2025-09-01",
    coin: "quarter",
    amountAdded: 1,
  },
  {
    id: "4",
    dateAdded: "2025-09-02",
    coin: "quarter",
    amountAdded: 1,
  },
];

describe("filterTableEntries", () => {
  it("checkForFilteredDate returns entries filtered by Date if date", () => {
    const entriesFilteredByDate = filterTableEntries(
      entries,
      "all",
      "2025-09-01",
    );
    expect(entriesFilteredByDate).toEqual([
      {
        amountAdded: 1,
        coin: "quarter",
        dateAdded: "2025-09-01",
        id: "3",
      },
      {
        amountAdded: 1,
        coin: "quarter",
        dateAdded: "2025-09-02",
        id: "4",
      },
    ]);
  });

  it("checkForFilteredDate returns all entries if no date", () => {
    const entriesFilteredByDate = filterTableEntries(entries, "all", "");
    assert.equal(entriesFilteredByDate.length, 4);
  });
});
