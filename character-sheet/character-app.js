import { findById, getFromLocalStorage, setInLocalStorage, USER, numberImage, imageArray } from '../utils.js';
import race from '../data/race.js';
import classes from '../data/class.js';
// Pull from localStorage
const userData = getFromLocalStorage(USER);
const rolls = userData.rolls;

//Attributes from DOM
const dialog = document.getElementById('dialog');
const strength = document.getElementById('str');
const strengthMod = document.getElementById('strMod');
const dexterity = document.getElementById('dex');
const dexterityMod = document.getElementById('dexMod');
const constitution = document.getElementById('con');
const constitutionMod = document.getElementById('conMod');
const intelligence = document.getElementById('int');
const intelligenceMod = document.getElementById('intMod');
const wisdom = document.getElementById('wis');
const wisdomMod = document.getElementById('wisMod');
const charisma = document.getElementById('cha');
const charismaMod = document.getElementById('chaMod');


// AC Initiative and Speed from DOM
const armorClass = document.getElementById('ac');
const initiative = document.getElementById('initiative');
const speed = document.getElementById('speed');

//Wizard dialog intializing
const userClass = findById(classes, userData.userClass);
const primAbility = userClass.primaryAbility;

dialog.textContent = `Welcome to the character sheet page! Based on your selections you are a ${userData.race} and your class is a ${userData.userClass}. Your primary ability is ${primAbility}.`;

// roll display
const rollOneImg = document.getElementById('roll-one-output');
const rollOneValue = document.getElementById('roll-one');
rollOneValue.value = userData.rolls[0].value;
rollOneImg.src = imageArray[Number(rollOneValue.value) + 1];


const rollTwoImg = document.getElementById('roll-two-output');
const rollTwoValue = document.getElementById('roll-two');
rollTwoValue.value = userData.rolls[1].value;
rollTwoImg.src = imageArray[Number(rollTwoValue.value) + 1];

const rollThreeImg = document.getElementById('roll-three-output');
const rollThreeValue = document.getElementById('roll-three');
rollThreeValue.value = userData.rolls[2].value;
rollThreeImg.src = imageArray[Number(rollThreeValue.value) + 1];

const rollFourImg = document.getElementById('roll-four-output');
const rollFourValue = document.getElementById('roll-four');
rollFourValue.value = userData.rolls[3].value;
rollFourImg.src = imageArray[Number(rollFourValue.value) + 1];

const rollFiveImg = document.getElementById('roll-five-output');
const rollFiveValue = document.getElementById('roll-five');
rollFiveValue.value = userData.rolls[4].value;
rollFiveImg.src = imageArray[Number(rollFiveValue.value) + 1];

const rollSixImg = document.getElementById('roll-six-output');
const rollSixValue = document.getElementById('roll-six');
rollSixValue.value = userData.rolls[5].value;
rollSixImg.src = imageArray[Number(rollSixValue.value) + 1];

const radios = document.querySelectorAll('input');




export function loopRadios() {
    for (let i = 0; i < radios.length; i++) {
        const radio = radios[i];
        radio.addEventListener('click', (e) => {
            console.log(e.target.value);
            return e.target.value;
        });
    }
}

function renderStr() {
    let strAbil = userData.rolls.value;

    strength.textContent = strAbil;
}



// dialog.textContent = script[1].description;

// setTimeout(() => { dialog.textContent = script[2].description; }, 10000);
// setTimeout(() => { dialog.textContent = script[3].description; }, 10000);


// function setAbilityScore() {
//     let raceInfo = findById(race, userdata.race);
//     let dexBonus = raceInfo.dexterity;
//     if (!raceInfo.dexterity) {
//             dexBonus = 0;
//     }
// }
//albilty modifier setting
// dexOptions.addEventListener('change', (e) => {
        //     }
//     dexterity.textContent = Number(dexBonus) + Number(e.target.value);
//     dexOptions.style.display = 'none';
// });


// function populateRolls(select, rolls) {
//     for (let i = 0; i < rolls.length; i++) {
//         const option = document.createElement('option');
//         option.textContent = rolls[i].value;
//         option.value = rolls[i].value;
//         option.id = rolls[i].id;
//         select.append(option);
//     }
// }

// populateRolls(strOptions, rolls);
// populateRolls(dexOptions, rolls);
// populateRolls(conOptions, rolls);
// populateRolls(intOptions, rolls);
// populateRolls(wisOptions, rolls);
// populateRolls(chaOptions, rolls);
