import {squareDigits} from './squareDigits.js'

test('squareDigits', () => {
    expect(squareDigits(0)).toBe(0)
    expect(squareDigits(1)).toBe(1)
    expect(squareDigits(9)).toBe(81)
    expect(squareDigits(99)).toBe(8181)
    expect(squareDigits(9119)).toBe(811181)
    expect(squareDigits(2483)).toBe(416649)
    expect(squareDigits(3212)).toBe(9414)
})