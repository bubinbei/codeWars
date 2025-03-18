export const removeConsecutiveDuplicates = (string) => string.split(' ').filter((el, i, arr ) => el !== arr[i-1]).join(' ')
  