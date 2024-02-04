
let arr = [23, 83, 29]

// array map method (it creates new array)
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
})

console.log(a)

// filter method -- gives a new array of elements that pass the given condition in a function
let arr2 = [23, 87, 97, 8, 238, 28, 32]
let a2 = arr2.filter((element) => {
    return element > 50
})
console.log(a2)

// array reduce method
let arr3 = [1, 23, 54, 83, 29, 30]
let newarr3 = arr3.reduce((element1, element2) => {
    return element1 + element2
})
console.log(newarr3)