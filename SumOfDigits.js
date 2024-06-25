export function digitalRoot(n) {
    const sum = () => {
    n = [...n+''].map(e=>+e).reduce((b,a) => b-0 + a, 0)
    n > 9 ? sum() : 0
    return n
    }
    return sum()
  }