import { findById, getFromLocalStorage, setInLocalStorage, USER } from '../utils.js';
import race from '../data/race.js';
import classes from '../data/class.js';
// Pull from localStorage
const userdata = getFromLocalStorage(USER);
const rolls = userdata.rolls;

//Attributes from DOM
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

//drop down options
const strOptions = document.getElementById('strOptions');
const dexOptions = document.getElementById('dexOptions');
const conOptions = document.getElementById('conOptions');
const intOptions = document.getElementById('intOptions');
const wisOptions = document.getElementById('wisOptions');
const chaOptions = document.getElementById('chaOptions');

// AC Initiative and Speed from DOM
const armorClass = document.getElementById('ac');
const initiative = document.getElementById('initiative');
const speed = document.getElementById('speed');

// roll display
const rollOne = document.getElementById('rollOne');
rollOne.textContent = userdata.rolls[0];
const rollTwo = document.getElementById('rollTwo');
rollTwo.textContent = userdata.rolls[1];
const rollThree = document.getElementById('rollThree');
rollThree.textContent = userdata.rolls[2];
const rollFour = document.getElementById('rollFour');
rollFour.textContent = userdata.rolls[3];
const rollFive = document.getElementById('rollFive');
rollFive.textContent = userdata.rolls[4];
const rollSix = document.getElementById('rollSix');
rollSix.textContent = userdata.rolls[5];

//albilty modifier setting
function populateRolls(select, rolls) {
    for (let i = 0; i < rolls.length; i++) {
        const option = document.createElement('option');
        option.textContent = rolls[i];
        option.value = rolls[i];
        select.append(option);
    }
}

strOptions.addEventListener('change', (e) => {
    e.preventDefault;
    let raceInfo = findById(race, userdata.race);
    let strBonus = raceInfo.strength;
    if (!raceInfo.strength) {
        strBonus = 0;
    }
    strength.textContent = Number(strBonus) + Number(e.target.value);
    strOptions.style.display = 'none';
});




populateRolls(strOptions, rolls);
populateRolls(dexOptions, rolls);
populateRolls(conOptions, rolls);
populateRolls(intOptions, rolls);
populateRolls(wisOptions, rolls);
populateRolls(chaOptions, rolls);  