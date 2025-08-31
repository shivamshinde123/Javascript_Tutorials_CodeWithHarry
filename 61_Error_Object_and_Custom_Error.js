


try {
    let age = prompt("What is your age?");
    age = Number.parseInt(age);
    if (age > 120){
        throw new Error("This is probably not true")
    }
}
catch(err){
    console.log("error name: ")
    console.log(err.name);
    console.log("error message: ")
    console.log(err.message);
    console.log("error stack: ")
    console.log(err.stack);
}

console.log("This script is still running")