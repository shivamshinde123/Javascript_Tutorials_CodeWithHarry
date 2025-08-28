
// one way to add html to the body
let a = document.getElementsByTagName('div')[0]
// console.log(a)
// a.innerHTML += "<h1>Hello World!</h1>"

// another way to add html to body
let div = document.createElement('div');
div.className = "container2"
div.innerHTML = "<h1>Hello World!</h1>"
// a.append(div)
// a.prepend(div)
// a.before(div)
a.after(div)

a.replaceWith(div)
