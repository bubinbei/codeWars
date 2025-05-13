import { dutyFree } from "./dutyFree";

test("dutyFree", () => {
    expect(dutyFree(12, 50, 1000)).toBe(166);
    expect(dutyFree(17, 10, 500)).toBe(294);
    expect(dutyFree(24, 35, 3000)).toBe(357);
 
})