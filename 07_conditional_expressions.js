
let a = prompt("Hey what's your age?");
console.log(a);
// prompt will store everything as string
a = Number.parseInt(a); //typecasting string to a number
// console.log(a);

// if (a<=0){
//     alert("This is an invalid age");
// }
// else if (a < 9){
//     alert("You are a kid and you cannot even think of driving")
// }
// else if (a < 18 && a > 9){
//     alert("You can think of driving after age of 18")
// }
// else{
//     alert("You can drive since you are more than age of 18");
// }

// const favfruit = "Muskmelon";
// switch (favfruit) {
//     case "Mango":
//         console.log("This is not my favorite fruit.");
//         break;

//     case "Banana":
//         console.log("This is not my favorite fruit.");
//         break;
    
//     default:
//         console.log("Muskmelon is my favorite fruit.");
// }

// ternary operator
console.log(a < 18 ? "Cannot drive": "Can drive")