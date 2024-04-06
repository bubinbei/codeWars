// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// * "String"      -> "SSttrriinngg"

export const doubleChar = (str: string): string => [...str].map(e=>e+e).join('')