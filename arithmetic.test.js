import { arithmetic } from "./arithmetic";

test("arithmetic", () => {
    expect(arithmetic(5, 2, "add")).toBe(7)
    expect(arithmetic(5, 2, "subtract")).toBe(3)
    expect(arithmetic(5, 2, "multiply")).toBe(10)
    expect(arithmetic(5, 2, "divide")).toBe(2.5)
})