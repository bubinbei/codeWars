import { removeExclamationMarks } from "./removeExclamationMarks";

describe("removeExclamationMarks", () => {
    it("should remove all exclamation marks from a", () => {
        expect(removeExclamationMarks("Hello World!")).toBe("Hello World");
        expect(removeExclamationMarks("Hi! Hello!")).toBe("Hi Hello");
    });
});