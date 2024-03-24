// Write a function that removes the spaces from the string, 
// then return the resultant string.

// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"

export function noSpace(x:string):string {
    return [...x].filter(e=>e!==' ').join('')
  }