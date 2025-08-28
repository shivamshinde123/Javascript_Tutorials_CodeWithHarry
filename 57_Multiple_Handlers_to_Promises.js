

let p1 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        console.log("Hey, I am not yet resolved!")
        resolve(1)
    }, 5000)
})

p1.then( (result) => {
    console.log("Congratulations! This promise is now resolved.")
})

p1.then( (result) => {
    console.log("Lorem Ipsum")
})