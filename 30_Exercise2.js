
let choices = ['G', 'W', 'S']

const selectRandom = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

let gameContinue = true

while (gameContinue) {
    let userChoice = prompt("Enter your choice out of 'G', 'W', 'S'.")
    if (choices.includes(userChoice)) {
        let compChoice = selectRandom(choices)
        if (userChoice === 'G' && compChoice === 'W') {
            alert("You lose cause computer chose 'W'")
        }
        else if (userChoice === 'G' && compChoice === 'S') {
            alert("You won cause computer chose 'S'")
        }
        else if (userChoice === 'W' && compChoice === 'G') {
            alert("You won cause computer chose 'G'")
        }
        else if (userChoice === 'W' && compChoice === 'S') {
            alert("You lose cause computer chose 'S'")
        }
        else if (userChoice === 'S' && compChoice === 'W') {
            alert("You won cause computer chose 'W'")
        }
        else if (userChoice === 'S' && compChoice === 'G') {
            alert("You lose cause computer chose W")
        }
        else {
            alert('Draw Match')
        }

    }
    else {
        alert('Please enter a valid choice')
    }

    gameContinue = prompt("Do you want to play again?")
}