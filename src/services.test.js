import { describe, it, expect, beforeEach, vi } from "vitest";
import axios from "axios";
import service from "./services.js";

vi.mock("axios");

const baseUrl = "http://localhost:3000/entries";

describe("Coin Counter API", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("deletes entry", async () => {
    axios.delete.mockResolvedValue({ data: {} });
    await service.deleteEntry("test-id");
    expect(axios.delete).toHaveBeenCalledWith(`${baseUrl}/test-id`);
  });
});
