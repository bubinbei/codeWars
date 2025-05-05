import { hoopCount } from "./hoopCount.js";

test("hoopCount", () => {
    expect(hoopCount(10)).toBe("Great, now move on to tricks")
    expect(hoopCount(4)).toBe("Keep at it until you get it")
})