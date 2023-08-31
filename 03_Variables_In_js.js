// always use let or const to create variables. First choice to create a variable should be using const and then let.
// Never use var to create variable. It could introduce bugs in your code. But still learn how it works because it could be present in some old code.

let b = "Shivam"
let c = null
let d = undefined

// let is block scoped. Variables created using let can be updated
// but cannot be re-declared.

let p = 34
// let p = 45 // this will throw an error (re-declaring)
p = 45 // this won't throw an error (updating)

{
    let b = "Shinde"
    console.log(b)
}

console.log(b)

// variable created using const keyword cannot be updated or re-declared
const author = "Austin Kleon"
// author = "something else" // this will throw an error
// const author = "else" // this will throw an error

console.log(author)