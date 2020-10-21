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
        option.textContent = rolls[i].value;
        option.value = rolls[i];
        select.append(option);
    }
}

populateRolls(strOptions, rolls);
populateRolls(dexOptions, rolls);
populateRolls(conOptions, rolls);
populateRolls(intOptions, rolls);
populateRolls(wisOptions, rolls);
populateRolls(chaOptions, rolls);

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

dexOptions.addEventListener('change', (e) => {
    e.preventDefault;
    let raceInfo = findById(race, userdata.race);
    let dexBonus = raceInfo.dexterity;
    if (!raceInfo.dexterity) {
        dexBonus = 0;
    }
    dexterity.textContent = Number(dexBonus) + Number(e.target.value);
    dexOptions.style.display = 'none';
});

conOptions.addEventListener('change', (e) => {
    e.preventDefault;
    let raceInfo = findById(race, userdata.race);
    let conBonus = raceInfo.constitution;
    if (!raceInfo.constitution) {
        conBonus = 0;
    }
    constitution.textContent = Number(conBonus) + Number(e.target.value);
    conOptions.style.display = 'none';
});

intOptions.addEventListener('change', (e) => {
    e.preventDefault;
    let raceInfo = findById(race, userdata.race);
    let intBonus = raceInfo.intelligence;
    if (!raceInfo.intelligence) {
        intBonus = 0;
    }
    intelligence.textContent = Number(intBonus) + Number(e.target.value);
    intOptions.style.display = 'none';
});

wisOptions.addEventListener('change', (e) => {
    e.preventDefault;
    let raceInfo = findById(race, userdata.race);
    let wisBonus = raceInfo.wisdom;
    if (!raceInfo.wisdom) {
        wisBonus = 0;
    }
    wisdom.textContent = Number(wisBonus) + Number(e.target.value);
    wisOptions.style.display = 'none';
});

chaOptions.addEventListener('change', (e) => {
    e.preventDefault;
    let raceInfo = findById(race, userdata.race);
    let chaBonus = raceInfo.charisma;
    if (!raceInfo.charisma) {
        chaBonus = 0;
    }
    charisma.textContent = Number(chaBonus) + Number(e.target.value);
    chaOptions.style.display = 'none';
});