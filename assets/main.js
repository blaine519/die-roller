const dieRolls = []

const rollButton = document.querySelector('#roll-button')
const numOfDice = document.querySelector('#num-of-dice')

const numOfSides = document.querySelector('#num-sides-of-dice')
const sidesEnterButton = document.querySelector('#sides-enter-button')

const showAllRollsButton = document.querySelector('#show-all-rolls-button')

const total = document.querySelector('#total')

const allRollsList = document.querySelector('#all-rolls-list')

let index = 0
let sum = 0

sidesEnterButton.addEventListener('click', function() {
    let numSidesInput = numOfSides.value

    rollButton.addEventListener('click', function() {
        let numDiceInput = numOfDice.value

        while (index < numDiceInput) {
            let numResult = Math.floor(Math.random() * numSidesInput) + 1
            dieRolls.push(numResult)
            index +=1

            sum = dieRolls.reduce((acc, currentValue) => {
                return acc + currentValue
            }, 0)


        }
        console.log(dieRolls)
        total.innerHTML += sum
        
        
    })

   
})

