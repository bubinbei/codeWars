import { noSpace } from "./noSpace";

test("noSpace", () => {
    expect(noSpace("1 2 3")).toBe("123")
})