import { pipeFix } from "./pipeFix";


test('should work for example test cases', () => {
  expect(pipeFix([1, 2, 3, 5, 6, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(pipeFix([1, 3, 5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(pipeFix([-1, 0, 1, 2, 3, 5])).toEqual([-1, 0, 1, 2, 3, 4, 5]);
  expect(pipeFix([1, 2, 3])).toEqual([1, 2, 3]);
});