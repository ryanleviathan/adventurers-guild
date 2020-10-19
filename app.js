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




let diceCountArray = [];

roll.addEventListener('click', () => {
diceOne.value = Number(rollDice());
diceTwo.value = Number(rollDice());
diceThree.value = Number(rollDice());
diceFour.value = Number(rollDice());
imagePicker(imgOne, diceOne);
imagePicker(imgTwo, diceTwo);
imagePicker(imgThree, diceThree);
imagePicker(imgFour, diceFour);



})









