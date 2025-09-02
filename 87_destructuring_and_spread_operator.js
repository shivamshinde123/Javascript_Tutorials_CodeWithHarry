
// destructuring in JS -- assignment starts from the start of the array
// let arr = [3, 5, 6, 7, 9, 10]
// let [a, b, ...rest] = arr

// console.log(a,b)
// console.log(rest)

// let arr = [3, 5, 6, 7, 9, 10]
// let [a, , ,...rest] = arr
//
// console.log(a)
// console.log(rest)

// let {a, b} = {a:1, b:5}
// console.log(a, b)

// spread operator
let arr1 = [1, 2, 3, 4, 5];
let obj1 = {...arr1}
console.log(obj1)

function sum(v1, v2, v3){
    return v1 + v2 + v3;
}

console.log(sum(...arr1))

let obj2 = {
    name: "Shivam",
    company: "XYZ",
    address: "abc"
}

console.log({...obj2, name:"John", company:"klm"}) // don't write the ..obj here after overriding the name and company here cause that way you will override again with obj2 values