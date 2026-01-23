import { describe, it, expect, beforeAll, afterAll } from "vitest";
import request from "supertest";
import { getEntries } from "./services.js";

describe("Coin Counter API", () => {
  it("entries returns entries", async () => {
    const response = await getEntries();
    console.log("response", response);
    expect(response).toBeTruthy();
    expect(response.length).toBeGreaterThan(0);
    expect(response[0]).toHaveProperty("id");
    expect(response[0]).toHaveProperty("dateAdded");
    expect(response[0]).toHaveProperty("coin");
    expect(response[0]).toHaveProperty("amountAdded");
  });
});
