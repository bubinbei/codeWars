// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// найти мкс и мин число в строке чисел, разделенных пробелами

// highAndLow("1 2 3 4 5")  // return "5 1"
// highAndLow("1 2 -3 4 5") // return "5 -3"
// highAndLow("1 9 3 4 -5") // return "9 -5"

// export function highAndLow(numbers, _ = numbers.split(' ')) {
// return Math.max(..._) + ' ' + Math.min(..._)
// }

export function highAndLow(numbers, _ = numbers.split(' ')) {
return _.sort((a,b)=>b-a)[0] + ' ' + _.sort((a,b)=>a-b)[0]
}