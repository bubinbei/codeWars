// You are going to be given a word. 
// Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

export const getMiddle = (s:string) => s.length%2 ? s[Math.ceil(s.length/2-1)] : s[s.length/2-1]+s[s.length/2]