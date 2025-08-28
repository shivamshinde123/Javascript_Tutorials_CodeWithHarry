
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value1")
    }, 11000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Value2")
        reject(new Error("Error in promise 2"))
    }, 2000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value3")
    }, 3000)
})



// let promise_all = Promise.all([p1, p2, p3])
// promise_all.then(result => {
//     console.log(result)
// })

// let promise_all = Promise.allSettled([p1, p2, p3])
// promise_all.then(result => {
//     console.log(result)
// })

// let promise_all = Promise.race([p1, p2, p3])
// promise_all.then(result => {
//     console.log(result)
// })

// let promise_all = Promise.any([p1, p2, p3])
// promise_all.then(result => {
//     console.log(result)
// })

// let promise_all = Promise.resolve(7)
// promise_all.then(result => {
//     console.log(result)
// })

let promise_all = Promise.reject(new Error("New Error"))
promise_all.then(result => {
    console.log(result)
})