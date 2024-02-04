

// question 2
// let arr = [23, 20, 49, 204, 84]
// while (true){
//     let newele = Number.parseInt(prompt("Enter an element"))
//     arr.push(newele)
//     console.log(arr)
//     if (newele === 0){
//         break
//     }
// }

// question 3
let arr2 = [100, 34, 29, 10, 19, 40, 48]
let filteredArr = arr2.filter((element)=>{
    return element % 10 === 0
})
console.log(filteredArr)

// question 4
let newarr = arr2.map((element) => {
    return element**2
})
console.log(newarr)

// question 5
let arr5 = []
let factorial = (n) => {
    for (let i=1; i<= n; i++){
        arr5.push(i)
    }

    return arr5.reduce((element1, element2) => {
        return element1 * element2
    })
}

console.log(factorial(5))

//question from the challenge
let randomNum = math.random() * 100
let guess = Number.parseInt(prompt("Give me your guess..."))
if (randomNum === guess) {
    console.log("You guessed it right.")
}
else{
    console.log("Your guess is wrong.")
}