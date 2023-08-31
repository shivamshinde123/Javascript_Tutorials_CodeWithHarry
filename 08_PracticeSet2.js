
//questions

//question 1
let age = prompt("What is your age?");

if (age >= 10 && age <= 20){
    console.log("You have a right age!")
}
else{
    console.log("You don't have a right age!")
}

//question 2
let bookname = prompt("Enter the name of your favorite book");
switch (bookname) {
    case "kimayagar":
        console.log("Favorite book");    
        break;
    case "manat":
        console.log("Favorite book");
        break;
    default:
        console.log("You have entered the unfavorite book")
        break;
}

//question 3
let number = prompt("Enter a number")
console.log((number%2 == 0 && number%3 == 0)? "Divisible by 6": "Not divisible by 6");


//question 4
let number1 = prompt("Enter a number")
console.log((number1%2 == 0 || number1%3 == 0)? "Divisible by 2 or 3": "Not divisible by 2 or 3");

//question 5
let age1 = prompt("Enter your age");
console.log(age1 >= 18? "You can drive": "You cannot drive");