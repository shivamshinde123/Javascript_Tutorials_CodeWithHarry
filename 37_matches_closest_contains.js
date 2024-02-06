
let ele = document.getElementById("id1")

// matches method
console.log(ele.matches(".box"))
console.log(ele.matches(".boss"))

// closest method
let newele = document.getElementById("sp1")
console.log(newele.closest("#sp1"))
console.log(newele.closest(".box"))

// contains methods
console.log(ele.contains(ele))
console.log(ele.contains(newele))