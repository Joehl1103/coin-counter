import assert from 'node:assert'
import { describe, test } from 'node:test'
import { filterTableEntries } from './entriesHelpers.js'

const entries = [
  {
    "id": "1",
    "dateAdded": "2025-08-30",
    "coin": "quarter",
    "amountAdded": 1
  },
  {
    "id": "2",
    "dateAdded": "2025-08-31",
    "coin": "quarter",
    "amountAdded": 1
  },
  {
    "id": "3",
    "dateAdded": "2025-09-01",
    "coin": "quarter",
    "amountAdded": 1
  },
  {
    "id": "4",
    "dateAdded": "2025-09-02",
    "coin": "quarter",
    "amountAdded": 1
  }
]

describe('filterTableEntries', () => {
  test('checkForFilteredDate returns entries filtered by Date if date', () => {
    const entriesFilteredByDate = filterTableEntries(entries, 'all', '2025-09-01')
    assert.deepStrictEqual(entriesFilteredByDate, [{
      "id": "3",
      "dateAdded": "2025-09-01",
      "coin": "quarter",
      "amountAdded": 1
    },
    {
      "id": "4",
      "dateAdded": "2025-09-02",
      "coin": "quarter",
      "amountAdded": 1
    }
    ])
  })

  test('checkForFilteredDate returns all entries if no date', () => {
    const entriesFilteredByDate = filterTableEntries(entries, 'all', '')
    assert.equal(entriesFilteredByDate.length, 4)
  })
})
