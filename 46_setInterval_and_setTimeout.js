

const sum = (a,b) =>{
    console.log("I am running", a + b)
    return a + b;
}

setTimeout(sum, 3000, 1, 2)


// clearTimeout function to clear the set timeout

// setInterval(function (){
//     alert("setInterval function")
// }, 3000)

// clearInterval function to clear the set interval