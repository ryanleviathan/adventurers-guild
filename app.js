// import functions and grab DOM elements
import script from './data/wizard-Script.js';
import { USER } from './utils.js';
import { rollDice, imagePicker, attributeNumber, setInLocalStorage } from './utils.js';


// initialize state

// set event listeners to update state and DOM
const audio = document.getElementById('audio');
const wizAudio = document.getElementById('wiz-audio');
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

let userData;

dialog.textContent = 'Welcome young adventurer! What is your name?';

// Wizard Dialog
const wiz1 = ('./assets/wizard-audio/001.mp3');
const wiz2 = ('./assets/wizard-audio/002.mp3');
const wiz3 = ('./assets/wizard-audio/003.mp3');
const wiz4 = ('./assets/wizard-audio/004.mp3');
const wiz5 = ('./assets/wizard-audio/005.mp3');

// very cool function--great code reuse
function playWizAudio(wiz) {
    wizAudio.src = wiz;
    wizAudio.load();
    // was this prmise chain required to get it to work?
    wizAudio.play().then(_ => {

    });
}

function playAudio() {
    audio.play();
    audio.volume = 0.2;
}

name.addEventListener('click', () => {
    playWizAudio(wiz1);
});

nameButton.addEventListener('click', () => {
    playAudio();
    playWizAudio(wiz2);
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
    setTimeout(() => { playWizAudio(wiz3); }, 10000);

    setTimeout(() => { dialog.textContent = script[3].description; }, 25000);
    setTimeout(() => { playWizAudio(wiz4); }, 25000);

});

let rollTracker = [];
let rollsRemaining = 6;
let rollsToPush = [];

roll.addEventListener('click', () => {
    // probably could have stored these dice in an array and handled this in a for loop
    /* */
    const dice = [diceOne, diceTwo, diceThree, diceFour];
    const images = [imgOne, imgTwo, imgThree, imgFour];

    for (let i = 0; i < dice.length; i++) {
        dice[i].value = Number(rollDice());
        imagePicker(images[i], dice[i]);
    }



    const rollArray = [diceOne.value, diceTwo.value, diceThree.value, diceFour.value];

    const totalOfRoll = attributeNumber(rollArray);
    rollTracker.push(totalOfRoll);

    const lis = [LiOne, LiTwo, LiThree, LiFour, LiFive, LiSix];

    for (let i = 0; i < lis.length; i++) {
        lis[i].textContent = rollTracker[0];
    }

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
        playWizAudio(wiz5);
    }
});

const nextPage = document.getElementById('next');
nextPage.addEventListener('click', () => {
    window.location.href = './race-page/index.html';
});










