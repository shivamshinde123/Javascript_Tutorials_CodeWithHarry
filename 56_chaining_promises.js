//
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Resolve after 2 seconds")
//         resolve(56)
//     }, 2000)
// })
//
// p1.then( (value) => {
//     console.log(value)
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise2 ")
//         }, 2000)
//     })
//     return p2
// }).then( (value) => {
//     console.log("We are done")
//     return 2
// }).then( (value) => {
//     console.log("This time, we are done for sure!")
// })

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        document.body.appendChild(script);

        script.onload = () => {
            resolve("Script loaded!");
        }

        script.onerror = () => {
            reject("Script error!");
        }
    })
}

let src1 = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js\n"
let src2 = "https://localhost:3000/index.js"
let p1 = loadScript(src1)
p1.then( (value) => {
    console.log(value)
}).then( (value) => {
    console.log("Second script loading!")
    op = loadScript(src2)
    console.log("Second script loaded!")
    return op
}).catch( (error) => {
    console.log("We are sorry but we are having problems loading this script")
})

