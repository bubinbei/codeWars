export function sumDigPow(a, b) {
    let arr = []
    for (let i = a ; i < b; i++) {
        let calc = [...'' + i].reduce((acc,el,ind) => acc + (el ** (ind+1)),0)
        if(calc==i) arr.push(i)
    }
    return arr
  }