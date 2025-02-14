export function removeExclamationMarks(s) {
    // return s.split('!').join('')
    return [...s].filter(e=>e!=='!').join('')
}