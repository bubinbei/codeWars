import {check} from "./check.js"

test('should first', () => { 
    expect(check([1000,0.01625,'s',0.18,1200], 's')).toBe(true)
    expect(check([1000,0.01625,'s',0.18,1200], 0)).toBe(false)
    expect(check([1000,0.01625,'s',0.18,1200], 1200)).toBe(true)
    expect(check([1000,0.01625,'s',0.18,1200], 1000)).toBe(true)
})