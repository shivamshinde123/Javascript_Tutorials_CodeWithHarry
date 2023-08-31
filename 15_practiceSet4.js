

// question 1
let my_str = "har\"ry"
console.log(my_str.length)

// question 2
const sentence = "The quick brown fox jumps over the lazy dog";
const word = "fox";
console.log(sentence.includes(word))
console.log(`The word ${word} ${sentence.includes(word) ? "is" : "is not"} in the sentence`);

// question 3
console.log(sentence.toLowerCase())
console.log(sentence.toUpperCase())

// question 4
const request = "Please give me Rs 1000."
let amount = request.slice("Please give me Rs ".length)
console.log(amount)
console.log(typeof amount)
console.log(Number.parseInt(amount))


