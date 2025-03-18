import { removeConsecutiveDuplicates } from "./removeConsecutiveDuplicates";

test("removeConsecutiveDuplicates", () => {
    expect(removeConsecutiveDuplicates("")).toBe("")
    expect(removeConsecutiveDuplicates("alpha")).toBe("alpha")
    expect(removeConsecutiveDuplicates("alpha alphaalpha alphaalphaalpha")).toBe("alpha alphaalpha alphaalphaalpha")
    expect(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")).toBe("alpha beta gamma delta alpha beta gamma delta")
    expect(removeConsecutiveDuplicates("alpha alpha alpha alpha")).toBe("alpha")
    expect(removeConsecutiveDuplicates("alpha beta alpha")).toBe("alpha beta alpha")
    expect(removeConsecutiveDuplicates("alpha alphabeta alphagamma")).toBe("alpha alphabeta alphagamma")
    expect(removeConsecutiveDuplicates("alpha alpha beta alpha alpha")).toBe("alpha beta alpha")
    expect(removeConsecutiveDuplicates("alpha beta beta")).toBe("alpha beta")

})