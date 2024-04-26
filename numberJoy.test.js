import numberJoy from './numberJoy'


test('проверка числа на харшад', () => {
    expect(numberJoy(1729)).toBe(true)
})