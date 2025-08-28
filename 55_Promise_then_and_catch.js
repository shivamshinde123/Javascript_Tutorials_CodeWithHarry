
let p1 = new Promise( (resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        alert("I am a promise and I am fulfilled")
        resolve(true)
    }, 5000)
})

let p2 = new Promise( (resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        alert("I am a promise and I am rejected")
        reject(new Error('I am an error'))
    }, 5000)
})

// to get the value
p1.then( (value) => {
    console.log(value)
})

// // to catch the error
// p2.catch( (error) => {
//     console.log("Some error occurred in p2")
// })

// to get the value and error if any
p2.then( (value) => {
    console.log(value)
}, (error) => {
    console.log(error)
})

console.log(p1, p2)