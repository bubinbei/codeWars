// What if we need the length of the words separated by a space to be added
//  at the end of that same word and have it returned as an array?

// "apple ban" --> ["apple 5", "ban 3"]

export const addLength = (str: string): string[] => str.split(" ").map(e=> e + " " + e.length)