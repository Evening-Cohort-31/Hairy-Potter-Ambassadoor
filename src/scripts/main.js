// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 5)
let plate = makePottery("Plate", 2, 1)
let bowl = makePottery("Bowl", 3, 3)
let vase = makePottery("Vase", 5, 7)
let pot = makePottery("Pot", 7, 4)

//Log created pottery
console.log(mug, plate, bowl, vase, pot)

// Move created pottery into an array
let unfiredArray = [mug, plate, bowl, vase, pot]

// Declare variables for fired Pottery
let firedMug
let firedPlate
let firedBowl
let firedVase
let firedPot

// Moved fired variables into an array, keeping the same index location as the unfired
let firedArray = [firedMug, firedPlate, firedBowl, firedVase, firedPot]

// Loop through the unfired pottery, providing a random temperature and assigning the returned object to the fired variables. 
unfiredArray.map((pottery, index) => {
    pottery = firePottery(pottery, Math.floor(Math.random() * 3000))
    firedArray[index] = pottery
})

// Log the fired pottery. 
console.log(firedArray)


// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

