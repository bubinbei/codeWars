import {minMax} from './minMax'

test('minMax', () => {
    expect(minMax([2, 3, 4, 5])).toEqual([2, 5])
    expect(minMax([233, 5])).toEqual([5, 233])
    expect(minMax([3])).toEqual([3, 3])
})