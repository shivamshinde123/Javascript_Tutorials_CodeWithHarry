
// changing the class name
let first = document.getElementById("first");
first.className = "text-black red"

console.log(first.classList)

// removing and adding one of the classes from the class list
first.classList.remove('red')
// first.classList.add('green')

// toggle method toggles the class (removes if present and vice versa)
first.classList.toggle('yellow')

// check if the class exists for an element
console.log(first.classList.contains('green'))