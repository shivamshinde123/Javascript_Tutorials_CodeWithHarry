
let dropdown_elements = document.body.querySelector("#navbar")
let anchortags = dropdown_elements.querySelectorAll(".anchor")

for (let i=0; i<anchortags.length; i++){
    console.log(anchortags[i])
    anchortags[i].style.color = "yellowgreen"
}








