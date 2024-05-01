import {basicOp} from './basicMathematicalOperations.js'

test('basicMathematicalOperations', () => {
    expect(basicOp('+', 4, 7)).toBe(11)
    expect(basicOp('-', 4, 7)).toBe(-3)
    expect(basicOp('*', 4, 7)).toBe(28)
    expect(basicOp('/', 21, 7)).toBe(3)
})