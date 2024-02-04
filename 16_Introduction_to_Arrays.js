
// creating an array (can have values with different datatypes)
let marks_class_12 = [91, 82, 63, 84, null]
console.log(marks_class_12)

// accessing the values of an array
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[0])
console.log(marks_class_12[10]) // this will give the undefined value since 10 index is not present in the array 

// finding the length of an array
console.log(marks_class_12.length)

// adding the new element to an array 
marks_class_12[5] = 100;
console.log(marks_class_12) 

// changing the value of an array (arrays are mutable)
marks_class_12[2] = 77;
console.log(marks_class_12)

// typeof array --> arrays are object type (DOUBT)
console.log(typeof marks_class_12)

// You can have different types of variables in the array. You can have functions, objects, arrays in arrays.