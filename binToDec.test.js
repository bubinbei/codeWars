import { binToDec } from './binToDec';


test('binToDec', () => {
    expect(binToDec('1')).toBe(1)
    expect(binToDec('0')).toBe(0)
    expect(binToDec('10')).toBe(2)
    expect(binToDec('1001001')).toBe(73)
})