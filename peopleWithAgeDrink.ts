// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

export function peopleWithAgeDrink(old: number): string {
    let out = "drink whisky"
    if (old < 21 ) out = "drink beer"
    if (old < 18 ) out = "drink coke"
    if (old < 14 ) out = "drink toddy"
    return out;
  }