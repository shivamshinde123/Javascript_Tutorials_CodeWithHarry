
let btn = document.getElementsByTagName('button')[0];
console.log(btn);

btn.onclick = () => {
    let b = document.createElement("div");
    b.innerHTML = "<h1>Hey There!</h1>"
    b.className = "container2"
    document.body.append(b)
}