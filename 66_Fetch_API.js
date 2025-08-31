
let city = 'NewYork'
let p = fetch(`http://goweather.xyz/weather/${city}`)
p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response.json()
}).then((response) => {
    console.log(response)
})