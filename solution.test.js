import { solution } from "./solution.js";

test("solution", () => {
    expect(solution("world")).toBe("dlrow");
    expect(solution("hello")).toBe("olleh");
});
