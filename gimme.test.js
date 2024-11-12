import {gimme} from "./gimme.js"

test("gimme", () => {
expect(gimme([2, 3, 1])).toBe(0)
expect(gimme([5, 10, 14])).toBe(1)
expect(gimme([5.9, 10.4, 14.2])).toBe(1)
})