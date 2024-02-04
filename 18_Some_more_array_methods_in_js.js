
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17]
let num_even_more = [111, 112, 113]
console.log(num.length)
delete num[0] // This won't affect the length of the array
console.log(num.length)
console.log(num)

// concat
let newArr = num.concat(num_more, num_even_more) // This will create a new array but won't change the existing array
console.log(newArr)

// sort
let sortedArr = num.sort() // this modifies the original array, 
// default: sort method sorts alphabetically i.e., it will give numbers starting with 1 then 2 then 3 and so on...
console.log(sortedArr)
console.log(num)

// sort using compare function
let compare = (a,b) => {
    return a - b
}
let sortedUsingFunction = num.sort(compare)
console.log(sortedUsingFunction)

// reverse
let reversedArr = num.reverse()
console.log(reversedArr)

// splice and slice
// splice -- used to remove some elements and adding other elements in place of them to an array
let deletedValues = num.splice(2,3, 1000, 2000, 3000) // modifies the source array
console.log(deletedValues)
console.log(num) // this will be updated

// slice -- gets the piece of array and returns it
let newNum = num.slice(3,5) // slice from 3(inclusive) to 5(exclusive)
console.log(newNum) // this won't modify the source array


