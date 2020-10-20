// import functions and grab DOM elements

import { rollDice, imagePicker, attributeNumber, setInLocalStorage } from './utils.js';
const USER = 'USER';

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
const roll = document.getElementById('roll');
const LiOne = document.getElementById('one');
const LiTwo = document.getElementById('two');
const LiThree = document.getElementById('three');
const LiFour = document.getElementById('four');
const LiFive = document.getElementById('five');
const LiSix = document.getElementById('six');
const nameButton = document.getElementById('nameButton');

nameButton.addEventListener('click', () => {
    const userName = name.value;
    nameButton.classList.add('display');
    nameButton.style.display = 'none';
    console.log(userName);

});  







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
    let totalOfRoll = attributeNumber(rollArray);
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
        
        const userData = [
            {
                name: name.value,
                rolls: {},   
                class: {},
                race: {}
            }
        ];
        userData.rolls = rollTracker;
        setInLocalStorage(userData, USER);    
    }
});

const nextPage = document.getElementById('next');
nextPage.addEventListener('click', () => {
    window.location.href = './race-page/index.html';   
});










