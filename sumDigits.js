// Write a function named sumDigits which takes a number as
//  input and returns the sum of the absolute value of each
//   of the number's decimal digits.

// 12 --> 3

//  [...(""+number)] - только строку можно привести к массиву через оператор спред, по этому тут ""
// ~~ - в данном случае преобразует строку в цифру, а ещё с помошью него можно округлять и кое что ещё
const sumDigits = number => [...(""+number)].reduce((acc,el) => acc+~~el,0)
