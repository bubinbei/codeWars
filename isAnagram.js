export const isAnagram = (t, o, _ = b => [...b.toLowerCase()].sort().join('')) => _(t) == _(o)

//export function isAnagram(test, original){
//  return [...test.toLowerCase()].sort().join('') == [...original.toLowerCase()].sort().join('')
// }