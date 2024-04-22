const findEvenIndex = (arr,t1 = 0,t2 = 0) => {
    t1 = arr.map((e,i,a) => t1=e+t1 )
    t2 = arr.reverse().map((e,i,a) => t2=e+t2 ).reverse()
    return [t1,t2,t1.findIndex((e,i)=>t1[i-1]===t2[i+1]),t3]
  }