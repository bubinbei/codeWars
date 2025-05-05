import {problem} from './problem'

test("problem", () => {
    expect(problem('rkqo')).toBe('Error')
    expect(problem(1)).toBe(56)
    expect(problem(0)).toBe(6)
    expect(problem(1.2)).toBe(66)
    expect(problem(3)).toBe(156)
    expect(problem("RyanIsCool")).toBe("Error")
    expect(problem(-3)).toBe(-144)
    expect(problem('')).toBe('Error')
    expect(problem(0.03)).toBe(7.5)
    })