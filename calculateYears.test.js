import { calculateYears } from './calculateYears.js'

test('calculateYears', () => {
    
    expect(calculateYears(1000,0.01625,0.18,1200)).toBe(14)

    

})