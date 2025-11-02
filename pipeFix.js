export const pipeFix = (numbers) => {
  const min = numbers.sort((a, b) => a - b)[0];
  const max = numbers.sort((a, b) => b - a)[0];
  return Array(max - min + 1).fill(min).map((e, i) => e + i);
}