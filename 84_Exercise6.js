
let submit_btn = document.querySelector("#submit-btn");
let delete_btn = document.querySelector("#delete-btn");
let title = document.querySelector("#title");
let desc = document.querySelector("#desc");
let todo = document.querySelector('#todo')

submit_btn.addEventListener("click", function(e) {
    e.preventDefault();
    let title_value = title.value;
    let desc_value = desc.value;
    localStorage.setItem("todo", JSON.stringify([title_value, desc_value]));
    console.log(e);

    // showing the newly added note
    todo.innerHTML = `
    <h1>${title_value}</h1>
    <p>${desc_value}</p>
    `
    title.value = "";
    desc.value = "";
})

delete_btn.addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.removeItem('todo')

    // removing the todo from the view
    todo.innerHTML = ``;
})