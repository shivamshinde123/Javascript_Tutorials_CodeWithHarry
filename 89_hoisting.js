

// in js, we can run the variable and function before it is initialized
// this is because, before running the code, js moves all the declarations to the top

// following two lines will run successfully due to js hoisting
console.log(a)
greet()

function greet(){
    console.log("Good morning!")
}

var a = 9; // declaration hoisted to the top but initialization is not
console.log(a);


// Hoisting is (to many developers) an unknown or overlooked behavior
// of JS. If a developer doesn't understand hoisting, programs may contain
// bugs (errors). To avoid bugs, always declare all variables at the
// beginning of every scope. Since this is how JS interprets the code,
// it is always a good rule.