import { sumDigPow } from "./sumDigPow";

test('sumDigPow', () => { 
    expect(sumDigPow(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(sumDigPow(1, 100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
    expect(sumDigPow(10, 100)).toEqual([89])
    expect(sumDigPow(90, 100)).toEqual([])
    expect(sumDigPow(90, 150)).toEqual([135])
    expect(sumDigPow(50, 150)).toEqual([89, 135])
    expect(sumDigPow(10, 150)).toEqual([89, 135])
 })