
let ele = document.getElementById("id1")

// matches method -- check if the element matches the given the css selector
console.log(ele.matches(".box"))
console.log(ele.matches(".boss"))

// closest method -- returns an elements with given css selector in its ancestors
let newele = document.getElementById("sp1")
console.log(newele.closest("#sp1"))
console.log(newele.closest(".box"))

// contains methods -- check for the presence of one element inside the other. true if present, false otherwise
console.log(ele.contains(ele))
console.log(ele.contains(newele))