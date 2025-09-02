// example 1
// message = "Good global"
//
// function hello1() {
//     let message = "Good Morning"
//     {
//         let message = "Good afternoon"
//         console.log("Hello1 " + message)
//     }
//     let c = function hello2() {
//         console.log("I am c function " + message)
//     }
//     return c
// }
//
// let c = hello1()
// c()

//example 2
function returnFunction() {
    const x = () => {
        let a = 1
        console.log(a);
        const y = () => {
            let a = 2
            console.log(a);
            const z = () => {
                let a = 3
                console.log(a);
            }
        }
        y()
    }
    return x
}

let a = returnFunction()
a();
