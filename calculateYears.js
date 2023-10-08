// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
//     The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
//     Note to Tax: not the invested principal is taxed, but only the year's accrued interest
// Example:
    function calculateYears(principal, interest, tax, desired) {
    let a
    let sum = principal
    let b=0
    for(;sum < desired;sum= sum + a){
        a = (sum*interest)-(sum*interest*tax)
        b++
    }
    return Math.ceil(b)
}
console.log(calculateYears(1000,0.01625,0.18,1200))