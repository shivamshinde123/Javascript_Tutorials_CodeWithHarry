

// string length
let my_name = "Shivam"
console.log(my_name.length)

// to upper case
console.log(my_name.toUpperCase())

// to lower case 
console.log(my_name.toLowerCase())

// slicing
console.log(my_name.slice(1,4)) // first index included and second one excluded
console.log(my_name.slice(2)) // up to last

// replace
let a = "Shivam Bhai"
console.log(a.replace("Bhai", "Bhau"))

// concat
let surname = "Shinde"
console.log(my_name.concat(" ", surname, " is my name."))

// trimming the extra space
let friend = "    meena   "
console.log(friend)
console.log(friend.trim())

// NOTE: Strings are immutable
let fr = "shivika"
// fr[2] = "s" // this won't work
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])

// original string won't change whenever you apply any methods on it. It will create a new string

