// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// { 6, 2, 1, 8, 10 } => 16

export const sumArray = (array:number[] | null) : number => array ? array.sort((a,b)=>a-b).slice(1,-1).reduce((acc,el) => acc + el,0):0