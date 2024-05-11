// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// как это работает сам не понимаю, ёбаный чат GPT
export function scramble(str1, str2) {
const ddd = {}
const bbb = {}
let a = [...str2].forEach(el=>ddd[el]=0)
a = [...str2].forEach(el=>ddd[el]++)
a = [...str1].forEach(el=>bbb[el]=0)
a = [...str1].forEach(el=>bbb[el]++)
const keys = Object.keys(ddd);
return keys.map(el=>ddd[el]<=bbb[el]).find(el=>!el)===false?false:true
}
  