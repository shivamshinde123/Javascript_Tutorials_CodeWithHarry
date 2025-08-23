
let first = document.getElementById("first");

// getting an attribute
let a = first.getAttribute('class')
console.log(a)

// checking if the attribute is present
console.log(first.hasAttribute('style'))

// set an attribute
// first.setAttribute('hidden', 'true')

// remove attribute
// first.removeAttribute('hidden')

console.log(first.attributes)

// custom attributes
console.log(first.dataset)  // fetching all the custom attributes. they are stored in dataset
console.log(first.dataset.game)
console.log(first.dataset.player)