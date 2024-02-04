// primitive datatypes in js 
// n --> null
// n --> number
// b --> Boolean
// b --> BigInt
// s --> String
// s --> Symbol
// u --> undefined

let a = null;
let b = 234;
let c = true;
let d = BigInt("687");
let e = "Shivam";
let f = Symbol("I am learning js");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof e);

// objects in js -- non-primitive datatypes (kinda look like the dictionaries in python programming language)

const item = {
  Shivam: true,
  Dattatray: 324,
  Shinde: null,
};

console.log(item["Shivam"]);
