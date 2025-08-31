

const createToDo = async () => {
    let options = {
        method: 'POST',
        headers: {"content-type": 'application/json'},
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 5
        })
    }

    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    return p.json()
}

const getToDo = async (id) => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts" + id)
    await response.json()
}

const main_func = async () => {
    let todo = await createToDo()
    console.log(todo)
    console.log(await getToDo(101))
}

main_func()


