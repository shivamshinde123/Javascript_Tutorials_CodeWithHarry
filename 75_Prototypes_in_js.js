
let a = {
    name2:"Shivam",
    language: "Javascript",
    run: () => {alert("Self running Javascript")}
}

console.log(a)

let p = {
    run: () => {
        alert("Running JS")
    }
}

a.__proto__ = {
    name: "Jackie"
}

console.log(a.name)