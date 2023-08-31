

// functions in js
let a = 1
let b = 2
let c = 3

// creating a function using syntax 1
function onePlusAvg(a,b) {
    return Math.round(1 + (a+b)/2)
}

// creating a function using syntax 2 (this is called arrow function)
const sum = (p,q) => {
    return p + q
}

console.log(onePlusAvg(b,c))
console.log(onePlusAvg(b,a))
console.log(onePlusAvg(a,c))
console.log(sum(2,50))