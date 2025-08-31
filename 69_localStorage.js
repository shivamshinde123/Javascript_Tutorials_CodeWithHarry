
let key = prompt("Enter your key")
let value = prompt("Enter your value")

localStorage.setItem(key, value)

console.log(`The value at the key ${key} is ${localStorage.getItem(key)}`)

if (value === "red" || value === "blue") {
    localStorage.removeItem(key)
}

if (key == 0){
    localStorage.removeItem(key)
}




