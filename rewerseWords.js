function reverseWords(str) {
  let a = str.split(' ')
  let f = ''
  for(let i = 0; i<a.length; i++){
    for(let d=a[i].length-1; d>=0; d--){
      f+=a[i][d]
    }
     f+=' '
  }
  return  f.slice(0, -1);
}
