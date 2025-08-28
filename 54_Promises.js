
let promise = new Promise(function (resolve, reject) {
    alert("Hello World!")
    resolve(56)
})


console.log("Hello One")
setTimeout(function () {
    console.log("Hello Two in 2 seconds")
}, 2000)
console.log("My name is Hello three")

console.log(promise)


// fetch google.com homepage ==do this next==> console.log("google.com homepage done")
// fetch data from the data API
// fetch pictures from the server
// print downloading
// rest of the script


// in the above pseudocode, we would like for the first three to run parallelly, so in such cases
// promises will help. We don't want our execution to stop and wait for it to finish for the next
// one to run.