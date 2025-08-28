
// question 2 and 3
document.getElementById('google').addEventListener('click', function(e) {
    let url = 'https://www.google.com/search?q=javascript';
    let win = window.open(url, "", "width=500,height=500,scrollbars=yes, resizable=yes")
    win.focus()
})

// question 4 -- will learn all the concepts such as async, await in later lectures

const fetchContent = async (url) => {
    con = await fetch(url)
    let a = await con.json()
    return a;
}

setInterval(async function() {
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
}, 3000)

setInterval(()=>{
    document.querySelector('#bulb').classList.toggle('bulb')
}, 1000)