// Write a function that removes the spaces from the string, 
// then return the resultant string.

// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"

export function noSpace(x) {
    return [...x].filter(e=>e!==' ').join('')
  }

//   x.replace(/\s/g, '');
//   x.split(' ').join('');
//   x.replaceAll(' ', '');
//   x.replace(/ /g , "");