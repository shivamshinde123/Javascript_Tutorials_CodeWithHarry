console.log("logging")
console.assert(34<23)
console.error("error")
console.warn("warning")
console.info("info")

// how much time does it take to run the following code
console.time("forloop")
for (let i = 0; i < 5; i++){
  console.log(i)
}
console.timeEnd("forloop")

