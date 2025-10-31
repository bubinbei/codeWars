import {printArray} from './printArray';

test('prints array as a string', () => {
    expect(printArray([])).toBe("");
    expect(printArray([1, 2, 3])).toBe("1,2,3");  
    expect(printArray(["a", "b", "c"])).toBe("a,b,c");
    expect(printArray([true, false, true])).toBe("true,false,true");

}); 