// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

// export function arithmetic(a ,b ,c) {
//     if (c==="add") return a+b
//     if (c==="subtract") return a-b
//     if (c==="multiply") return a*b
//     return a/b
// }

// export const arithmetic = (a, b, operator) => ({
//     'add'     : a + b,
//     'subtract': a - b,
//     'multiply': a * b,
//     'divide'  : a / b
// }[operator] ?? "Unknown operator"); // Если операция не найдена → вернёт сообщение

export function arithmetic(a, b, operator){
    return (ops[operator] ?? "Unknown operator") (a, b); // Если операция не найдена → вернёт сообщение
  }
  
  const ops = {
    "add"      : (a, b) => a + b,
    "subtract" : (a, b) => a - b,
    "multiply" : (a, b) => a * b,
    "divide"   : (a, b) => a / b
  }