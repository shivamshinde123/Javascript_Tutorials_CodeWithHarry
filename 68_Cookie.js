
console.log(document.cookie)

// adding a new cookie
document.cookie = "address=latur"

console.log(document.cookie)

// updating a cookie
document.cookie = "address=worcester"

console.log(document.cookie)

let key = prompt("Enter your key")
let value = prompt("Enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;


