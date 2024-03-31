// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

export const reverseSeq   = (n: number): number[] => Array.from({length:n},(_,i)=>i+1).reverse()
export const reverseSeq_2 = (n: number): number[] => [...Array(n+1).keys()].slice(1,n+1).reverse()