// import functions and grab DOM elements
import script from './data/wizard-Script.js';
import { USER } from './utils.js';
import { rollDice, imagePicker, attributeNumber, setInLocalStorage } from './utils.js';


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

dialog.textContent = 'Welcome young adventurer! What is your name?';
let userData;

nameButton.addEventListener('click', () => {
    const userName = name.value;
    nameButton.classList.add('display');
    nameButton.style.display = 'none';
    userData =
    {
        name: userName,
        rolls: {},
        userClass: {},
        race: {}
    };

    setInLocalStorage(USER, userData);

    dialog.textContent = script[1].description;

    setTimeout(() => { dialog.textContent = script[2].description; }, 10000);
    setTimeout(() => { dialog.textContent = script[3].description; }, 10000);
});

let rollTracker = [];
let rollsRemaining = 6;
let rollsToPush = []

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

    LiOne.textContent = rollTracker[0];
    LiTwo.textContent = rollTracker[1];
    LiThree.textContent = rollTracker[2];
    LiFour.textContent = rollTracker[3];
    LiFive.textContent = rollTracker[4];
    LiSix.textContent = rollTracker[5];

    --rollsRemaining;

    if (rollsRemaining === 0) {

        roll.disabled = true;

        for (let i = 0; i < rollTracker.length; i++) {

            rollTracker[i] = {
                id: `roll-${[i]}`,
                value: rollTracker[i]
            };
            rollsToPush.push(rollTracker[i]);
        }
        console.log(rollsToPush);


        userData.rolls = rollsToPush;
        setInLocalStorage(USER, userData);
        dialog.textContent = script[4].description;
    }
});

const nextPage = document.getElementById('next');
nextPage.addEventListener('click', () => {
    window.location.href = './race-page/index.html';
});










