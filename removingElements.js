// Take an array and remove every second element from the array. 
// Always keep the first element and start removing with the next element.

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => [1, 3, 5, 7, 9]

const removeEveryOther = arr => arr.filter((el,i) => !(i%2))
