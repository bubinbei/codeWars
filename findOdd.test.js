import {findOdd} from './findOdd'

test('should first', () => { 
    expect(findOdd([1,1,2])).toEqual(2)
    expect(findOdd([0,1,0,1,0])).toEqual(0)
    expect(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])).toEqual(4)
 })