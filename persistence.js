// export function persistence(num) {
//     let a = 0
//     function repit (num){
//       if(num>=9) {
//         // console.log([...''+num])
//         num = [...''+num].reduce(function(a, b){ return a * b; }, 1)
//         a++
//         repit(num)
//         }else{
//           // console.log(num + ' - ' + a)
//           return a
//         }
//     }
//       repit (num)
//       return a
//   }

// тут немного подумал, ни к чему плодить функции, можно и одной обойтись

export function persistence(num, a = 0) {
    if(num>9) {
      num = [...''+num].reduce((a, b)=> {return a * b},1)
      a++
      }else{
        return a
      }
return persistence(num, a)
}
