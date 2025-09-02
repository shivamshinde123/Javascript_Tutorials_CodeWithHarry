
// question 1
console.log("Hello")
setTimeout(() => {
    console.log("World")
}, 2000)

// question 2
let arr = [1,2,3,4]
const sum_func = (v1, v2, v3, v4) => {
    return v1 + v2 + v3 + v4
}
console.log(sum_func(...arr))

// question 3
( (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(3298)
        }, n)
    })
})(2000).then((result) => {
    console.log(`The promise was resolved with the value ${result}`)
}).catch(err=>{
    console.error(err);
})

// question 4
const interest_calculator = (p, n, r) => {
    return (p*n*r)/100
}

let p = 1000
let n = 10
let r = 10
console.log(`The interest for the principal: ${p}, period: ${n}, and rate of interest ${r}% is ${interest_calculator(p,n,r)}.`)