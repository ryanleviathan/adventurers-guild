// import functions and grab DOM elements
import { rollDice, imagePicker } from './utils.js';
// initialize state

// set event listeners to update state and DOM
const dialog = document.getElementById('dialog');
const name = document.querySelector('input');
const diceOne = document.getElementById('diceOne');
const diceTwo = document.getElementById('diceTwo');
const diceThree = document.getElementById('diceThree');
const diceFour = document.getElementById('diceFour');
const imgOne = document.getElementById('imgOne');
const imgTwo = document.getElementById('imgTwo');
const imgThree = document.getElementById('imgThree');
const imgFour = document.getElementById('imgFour');
const roll = document.querySelector('button');
const LiOne = document.getElementById('one');
const LiTwo = document.getElementById('two');
const LiThree = document.getElementById('three');
const LiFour = document.getElementById('four');
const LiFive = document.getElementById('five');
const LiSix = document.getElementById('six');






let rollTracker = [];


let rollsRemaining = 6;

roll.addEventListener('click', () => {
diceOne.value = Number(rollDice());
diceTwo.value = Number(rollDice());
diceThree.value = Number(rollDice());
diceFour.value = Number(rollDice());
imagePicker(imgOne, diceOne);
imagePicker(imgTwo, diceTwo);
imagePicker(imgThree, diceThree);
imagePicker(imgFour, diceFour);

    let rollArray = [];
    
    rollArray.push(diceOne.value, diceTwo.value, diceThree.value, diceFour.value);
    

    let lowestRoll = Math.min(rollArray[0], rollArray[1], rollArray[2], rollArray[3]);
    let totalOfRoll = Number(rollArray[0]) + Number(rollArray[1]) + Number(rollArray[2]) + Number(rollArray[3]) - lowestRoll;
    rollTracker.push(totalOfRoll);
    console.log(totalOfRoll);
    

    LiOne.textContent = rollTracker[0];
    LiTwo.textContent = rollTracker[1];
    LiThree.textContent = rollTracker[2];
    LiFour.textContent = rollTracker[3];
    LiFive.textContent = rollTracker[4];
    LiSix.textContent = rollTracker[5];

    rollsRemaining--;
    if (rollsRemaining === 0) {
        roll.disabled = true;
    }
    


});









