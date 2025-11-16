export function isValidWalk(walk) {
  const step = {
    'n_s': 0,
    'w_e': 0
  }
  walk.forEach(e => {
    e === 'n' && step.n_s++;
    e === 's' && step.n_s--;
    e === 'w' && step.w_e++;
    e === 'e' && step.w_e--;
  });
  return step.n_s === 0 && step.w_e === 0 ? true : false;
}
