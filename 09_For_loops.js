//for loop --> loop a block of code no of times
// for in loop --> loops through the keys of an object
// for of loop --> loops through iterables such as array, set, strings, etc.
// while loop --> loops a block based on a specific condition
// do-while loop --> while loop variant which runs atleast once

// for loop
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);

// creating a program to find the factorial of a number using for loop
let factorial = 1;
let num = prompt("Enter a number")
for (let i = 1; i <= num; i++){
    factorial *= i
}

// for in loop
let obj = {
    shivam: 95,
    harry: 80,
    harmoyoni: 49
}

for (let a in obj){
    console.log(a)
}

// for of loop
for (let b of "Shivam"){
    console.log(b)
}

