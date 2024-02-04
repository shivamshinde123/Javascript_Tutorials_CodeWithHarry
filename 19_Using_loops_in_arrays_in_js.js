
let num = [2, 52, 29, 21, 99]

// for loop
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}


// for each loop -- does the operation on the source array
num.forEach((element) => {
    console.log(element * element)
})

// Array.from is used to create an array from html collection
let name = "Shivam"
let arr = Array.from(name)
console.log(arr)

// for..of loop
for (let i of num) {
    console.log(i)
}

// for..in loop -- gives the index values of the array
for (let i in num) {
    console.log(i)
}


