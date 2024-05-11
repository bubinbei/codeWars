import { scramble } from "./scramble";

test("scramble", () => {
    expect(scramble('rkqodlw', 'world')).toBe(true)
    expect(scramble('cedewaraaossoqqyt', 'codewars')).toBe(true)
    expect(scramble('katas', 'steak')).toBe(false)
    expect(scramble('scriptjava', 'javascript')).toBe(true)
    expect(scramble('scriptingjava', 'javascript')).toBe(true)
})