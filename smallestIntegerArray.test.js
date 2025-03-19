import { SmallestIntegerFinder } from "./smallestIntegerArray";

test('should first', () => { 
    const finder = new SmallestIntegerFinder();
    expect(finder.findSmallestInt([1,1,2])).toEqual(1)
    expect(finder.findSmallestInt([0,1,0,1,0])).toEqual(0)
    expect(finder.findSmallestInt([1,2,2,3,3,3,4,3,3,3,2,2,1])).toEqual(1)
 })