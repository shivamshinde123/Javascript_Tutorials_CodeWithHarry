
// log
console.log(document.getElementsByTagName('span')[0])

// dir
console.dir(document.getElementsByTagName('span')[0])

// nodeName -- gets the node name
console.log(document.getElementsByTagName('span')[0].nodeName)

// tagName -- gets the tag name (works only for elements)
console.log(document.getElementsByTagName('span')[0].tagName)

// innerHTML -- html inside the element
let first = document.getElementById('first');
console.log(first.innerHTML)
first.innerHTML = 'Hey, <i>I am new span</i>'

// outerHTML -- html inside the element + element itself
let x = document.getElementById('first');
console.log(x.outerHTML)
x.outerHTML = "Hey, <b>What's up</b>"

// node value or data -- gets the text or data inside the non-element node
console.log(document.body.firstChild.nextSibling.data)
console.log(document.body.firstChild.nextSibling.nodeValue)

// textContent -- gets the text inside the element
console.log(first.textContent);

// hidden attribute -- un-hiding the element
let hidden_elem = document.getElementsByTagName('div')[0]
hidden_elem.hidden = false