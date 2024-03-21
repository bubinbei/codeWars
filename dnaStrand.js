// In DNA strings, symbols "A" and "T" are complements of each other, 
// as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); 
// you need to return the other complementary side. DNA strand is never empty or there 
// is no DNA at all (again, except for Haskell).

function dnaStrand(dna){
    return [...dna].map(e => {
      if (e==='A') return'T'
      if (e==='T') return'A'
      if (e==='C') return'G'
      if (e==='G') return'C'
    }).join('')
   }