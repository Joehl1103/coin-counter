import {
  describe,
  it,
  expect,
  beforeEach,
  beforeAll,
  afterAll,
  vi,
} from "vitest";
import axios from "axios";
import request from "supertest";
import service from "./services.js";

vi.mock("axios");

const baseUrl = "http://localhost:3000/entries";

describe("Coin Counter API", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // it("entries returns entries", async () => {
  //   const response = await service.getEntries();
  //   expect(response).toBeTruthy();
  //   expect(response.length).toBeGreaterThan(0);
  //   expect(response[0]).toHaveProperty("id");
  //   expect(response[0]).toHaveProperty("dateAdded");
  //   expect(response[0]).toHaveProperty("coin");
  //   expect(response[0]).toHaveProperty("amountAdded");
  // });
  //
  // it("getEntryById", async () => {
  //   const response = await service.getEntryById("startingAmount");
  //   expect(response).toBeTruthy();
  //   expect(response.length).toEqual(1);
  //   expect(response).toStrictEqual([
  //     {
  //       id: "startingAmount",
  //       dateAdded: "2025-08-30",
  //       coin: "n/a",
  //       amountAdded: 15.28,
  //     },
  //   ]);
  // });
  //
  it("deletes entry", async () => {
    axios.delete.mockResolvedValue({ data: {} });
    await service.deleteEntry("test-id");
    expect(axios.delete).toHaveBeenCalledWith(`${baseUrl}/test-id`);
  });
});
