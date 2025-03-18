import { persistence } from "./persistence";

test("persistence", () => {
    expect(persistence(39)).toBe(3)
    expect(persistence(4)).toBe(0)
    expect(persistence(25)).toBe(2)
    expect(persistence(999)).toBe(4)
})