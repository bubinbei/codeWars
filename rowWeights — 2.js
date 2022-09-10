function rowWeights(array){
  let a = 0
  let b = 0
  array.forEach((el,i)=> (i+1)%2 ? a+=el : b+=el)
  return [a,b]
}
