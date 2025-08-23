
// question 1
let navbar_first_element = document.getElementById("home-link");
navbar_first_element.style.color = 'red'

// question 3
let elem = document.getElementById("container");
console.log(elem);
let elem_fchild  = elem.firstElementChild
console.log(elem_fchild);
elem_fchild.style.color = 'green'

let elem_lchild = elem.lastElementChild
elem_lchild.style.color = 'green'

// question 4
let li_tags = Array.from(document.querySelectorAll('li'));
for (let i = 0; i < li_tags.length; i++) {
    li_tags[i].style.backgroundColor = 'cyan'
}