import { capitals } from "./capitals.js";

test("capitals", () => {    
    expect(capitals("CodEWaRs")).toEqual([0, 3, 4, 6])
    expect(capitals("aAbB")).toEqual([1,3])
})