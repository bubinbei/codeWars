// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

export function strCount(str: string, letter: string): number {
    return [...str].filter(e=>e===letter).length
  }