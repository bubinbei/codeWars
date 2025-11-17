import { nameShuffler } from "./nameShuffler";

describe("nameShuffler", () => {
  it("nameShuffler", () => {
    let str = "john McClane";
    expect(nameShuffler(str)).toBe("McClane john")
  })})