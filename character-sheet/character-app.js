import { findById, getFromLocalStorage, setInLocalStorage, USER } from '../utils.js';
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
const rollOneText = document.getElementById('roll-one-output');
const rollOneValue = document.getElementById('roll-one');
rollOneText.textContent = userData.rolls[0].value;
rollOneValue.value = userData.rolls[0].value;

const rollTwoText = document.getElementById('roll-two-output');
const rollTwoValue = document.getElementById('roll-two');
rollTwoText.textContent = userData.rolls[1].value;
rollTwoValue.value = userData.rolls[1].value;

const rollThreeText = document.getElementById('roll-three-output');
const rollThreeValue = document.getElementById('roll-three');
rollThreeText.textContent = userData.rolls[2].value;
rollThreeValue.value = userData.rolls[2].value;

const rollFourText = document.getElementById('roll-four-output');
const rollFourValue = document.getElementById('roll-four');
rollFourText.textContent = userData.rolls[3].value;
rollFourValue.value = userData.rolls[3].value;

const rollFiveText = document.getElementById('roll-five-output');
const rollFiveValue = document.getElementById('roll-five');
rollFiveText.textContent = userData.rolls[4].value;
rollFiveValue.value = userData.rolls[4].value;

const rollSixText = document.getElementById('roll-six-output');
const rollSixValue = document.getElementById('roll-six');
rollSixText.textContent = userData.rolls[5].value;
rollSixValue.value = userData.rolls[5].value;

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
