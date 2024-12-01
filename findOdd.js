export function findOdd (A) {
    const b = {}
    A.forEach(e=> b[e] ? b[e] === b[e]++ : b[e] = 1)
    for (let key in b) if (b[key]%2) return ~~key
}
