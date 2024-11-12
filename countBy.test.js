import {countBy} from './countBy'

test('should first', () => { 
  
    
    expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10])
    expect(countBy(5, 3)).toEqual([5, 10, 15])
 })