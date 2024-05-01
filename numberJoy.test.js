// c:/word/codeWars/numberJoy.test.js
import { numberJoy } from './numberJoy.js'

test('проверка числа на харшад', () => {
    expect(numberJoy(1729)).toBe(true)
    expect(numberJoy(1728)).toBe(false)
})