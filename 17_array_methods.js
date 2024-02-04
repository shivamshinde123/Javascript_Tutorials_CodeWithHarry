

let num = [1, 2, 3, 4, 5]

// converting an array to string
let b = num.toString()
console.log(b)
console.log(typeof b)

// joining array elements with separator
let c = num.join(" and ")
console.log(c)
console.log(typeof c)

// popping last element from an array and updating the original array
let r = num.pop() // pop returns the popped element
console.log(num, r)

// adding the element at last 
let n = num.push(34) // push return the new array length
console.log(num, n)

// removing the first element and then returning it 
let p = num.shift() // shift returns the removed element
console.log(num, p)

// add the element at the beginning of an array and then returning the length of an array
let k = num.unshift(45) // returns the new array length
console.log(num, k)