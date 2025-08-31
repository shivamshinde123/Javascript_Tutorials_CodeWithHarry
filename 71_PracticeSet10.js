

// question 1: fetching the data
// let city = prompt("Enter your city")
// let url = `http://goweather.xyz/weather/${city}`
// fetch(url)
//     .then(response => {
//         console.log(response.ok)
//         console.log(response.status)
//         return response.json()
//     })
//     .then(data => {
//         alert(`Temperature of the city ${city} is ${data.temperature}`)
//     })
//     .catch(error => {
//         console.error("Error fetching weather data:", error)
//         alert("Could not fetch weather data. Please try again.")
//     })

// question 2: note-taking app
let a = prompt("Enter your note")
localStorage.setItem('note', a)

// question 3
let fetched_note = localStorage.getItem('note')
console.log(fetched_note)

// question 4
let c = confirm("Do you really want to delete this note?")
if (c) {
    localStorage.removeItem('note')
    alert('Note deleted successfully.')
}

