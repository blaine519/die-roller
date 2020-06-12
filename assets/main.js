const dieRolls = []

const rollButton = document.querySelector('#roll-button')
const numOfDice = document.querySelector('#num-of-dice')

// const numOfSides = document.querySelector('#num-sides-of-dice')
// const sidesEnterButton = document.querySelector('#sides-enter-button')

const showAllRollsButton = document.querySelector('#show-all-rolls-button')

const total = document.querySelector('#total')

const allRollsList = document.querySelector('#all-rolls-list')

let index = 0
let sum = 0
let numDiceInput = 0
let numResult = 0


rollButton.addEventListener('click', function () {
    numDiceInput = numOfDice.value

    while (index < numDiceInput) {
        numResult = Math.floor(Math.random() * 6) + 1
        dieRolls.push(numResult)

        sum = dieRolls.reduce((acc, currentValue) => {
            return acc + currentValue
        }, 0)

        index += 1

    }

    console.log(dieRolls)
    total.innerHTML += sum

    showAllRollsButton.addEventListener('click', function() {
        let dieRollIndex = 0
        while (dieRollIndex < numDiceInput) {
            const newDiceString = '<li class="dice">' + dieRolls[dieRollIndex] + '</li>'
            allRollsList.innerHTML += newDiceString
            dieRollIndex += 1
        }
    })

})