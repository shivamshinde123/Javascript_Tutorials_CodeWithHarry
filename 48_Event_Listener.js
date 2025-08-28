
const f = function(e){
    console.log(e.target) // e is the event object
    console.log(e.type, e.clientX, e.clientY)
    alert("Hello World1!");
}

const g = function(e){
    console.log(e.target) // e is the event object
    console.log(e.type, e.clientX, e.clientY)
    alert("Hello World2!");
}

let btn = document.getElementById("btn")
btn.addEventListener("click", f)


btn.addEventListener("click", g)


let a = prompt("What is your favorite number?")
a = Number.parseInt(a)


if (a === 3) {
    // remove event listener only works when you use the defined function in them
    btn.removeEventListener('click', f)

    // following code won't remove any event listener because the function used here has different
    // address as compared to the one created during adding of event listener
    // btn.removeEventListener('click', () => {
    //     alert("Hello World2!")
    // })
}