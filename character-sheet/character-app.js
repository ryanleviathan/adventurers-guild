import { findById, getFromLocalStorage, USER, imageArray, modifier, setInLocalStorage } from '../utils.js';

import { wizDialogIntro } from './character-utils.js';
import race from '../data/race.js';
// import classes from '../data/class.js';
// import script from '../data/wizard-Script.js';
// Pull from localStorage
const userData = getFromLocalStorage(USER);

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
const button = document.getElementById('button');

button.addEventListener('click', () => {
    const statsElementsArray = document.querySelectorAll('.abilities');
    const statsArray = [];
    statsElementsArray.forEach((item, i) => {
        statsArray.push({
            id: `roll-${i}`,
            value: item.textContent
        });
    });
    userData.rolls = statsArray;
    setInLocalStorage(USER, userData);
    document.location = '../results-page/index.html';
});

// AC Initiative and Speed from DOM
// const armorClass = document.getElementById('ac');
const initiative = document.getElementById('initiative');
const speed = document.getElementById('speed');
const speedMod = findById(race, userData.race);
speed.textContent = speedMod.speed;

// roll display
const rollOneImg = document.getElementById('roll-one-output');
const rollOneValue = document.getElementById('roll-one');
rollOneValue.value = userData.rolls[0].value;
rollOneImg.src = imageArray[Number(rollOneValue.value) - 1];


const rollTwoImg = document.getElementById('roll-two-output');
const rollTwoValue = document.getElementById('roll-two');
rollTwoValue.value = userData.rolls[1].value;
rollTwoImg.src = imageArray[Number(rollTwoValue.value) - 1];

const rollThreeImg = document.getElementById('roll-three-output');
const rollThreeValue = document.getElementById('roll-three');
rollThreeValue.value = userData.rolls[2].value;
rollThreeImg.src = imageArray[Number(rollThreeValue.value) - 1];

const rollFourImg = document.getElementById('roll-four-output');
const rollFourValue = document.getElementById('roll-four');
rollFourValue.value = userData.rolls[3].value;
rollFourImg.src = imageArray[Number(rollFourValue.value) - 1];

const rollFiveImg = document.getElementById('roll-five-output');
const rollFiveValue = document.getElementById('roll-five');
rollFiveValue.value = userData.rolls[4].value;
rollFiveImg.src = imageArray[Number(rollFiveValue.value) - 1];

const rollSixImg = document.getElementById('roll-six-output');
const rollSixValue = document.getElementById('roll-six');
rollSixValue.value = userData.rolls[5].value;
rollSixImg.src = imageArray[Number(rollSixValue.value) - 1];

const radios = document.querySelectorAll('input');
const abilities = document.querySelectorAll('.abilities');

// Wizard dialog intializing

wizDialogIntro();

// Wizard Audio
const wizAudio = document.getElementById('wiz-audio');

function playWizAudio(wiz) {
    wizAudio.src = wiz;
    wizAudio.load();
    wizAudio.play().then(_ => {
        
    });
}

// good idea storing these in consts
const wizDex = ('../assets/wizard-audio/csDex.mp3');
const wizCon = ('../assets/wizard-audio/csCon.mp3');
const wizInt = ('../assets/wizard-audio/csInt.mp3');
const wizWis = ('../assets/wizard-audio/csWis.mp3');
const wizCha = ('../assets/wizard-audio/csCha.mp3');
const wizFinal = ('../assets/wizard-audio/csFinal.mp3');

// this would probably work. Ideally I would want to have more of this data living in objects, so it's organized into json to be configured late
function doStuff(el, modEl, wizAudio, checkedValue, message, key) {
    abilities[0].textContent = checkedValue;

    let raceInfo = findById(race, userData.race);
    let strBonus = raceInfo.strength;
    if (!raceInfo[key]) {
        strBonus = 0;
    }
    strength.textContent = Number(strBonus) + Number(checkedValue);
    strengthMod.textContent = modifier(strength);
    dialog.textContent = message;
    playWizAudio(wizAudio);

}
// Sets ability scores by player selection going in order from Strength to Charisma. It also sets the ability modifier, talks you through selections, and sets initiative based on Dexterity modifier

function populateAbilityScores(abilities) {
    for (let i = 0; i < radios.length; i++) {
        const radio = radios[i];
        radio.addEventListener('click', (e) => {
            const checkedValue = e.target.value;

            if (abilities[0].textContent === 'str') {
                abilities[0].textContent = checkedValue;

                doStuff(
                    strength, 
                    strengthMod, 
                    wizDex, 
                    `Now, you'll be choosing your Dexterity stat.`, 
                    'strength'
                );
            } else if (abilities[1].textContent === 'dex') {
                abilities[1].textContent = checkedValue;

                doStuff(
                    dexterity, 
                    dexterityMod, 
                    wizCon, 
                    `Now, you'll be choosing your Constitution stat.`, 
                    'dexterity'
                );
        
            } else if (abilities[2].textContent === 'con') {
                abilities[2].textContent = checkedValue;

                doStuff(
                    constitution, 
                    constitutionMod, 
                    wizInt, 
                    `Now, you'll be choosing your Intelligence stat.`, 
                    'constitution'
                );
            } else if (abilities[3].textContent === 'int') {
                abilities[3].textContent = checkedValue;

                
                doStuff(
                    intelligence, 
                    intelligenceMod, 
                    wizWis, 
                    `Now, you'll be choosing your Wisdom stat.`, 
                    'wisdom'
                );
            } else if (abilities[4].textContent === 'wis') {
                abilities[4].textContent = checkedValue;
     
                doStuff(
                    constitution, 
                    constitutionMod, 
                    wizCha, 
                    `Now, you'll be choosing your Charisma stat.`, 
                    'wisdom'
                );
            } else if (abilities[5].textContent === 'cha') {
                abilities[5].textContent = checkedValue;
                     
                doStuff(
                    charisma, 
                    charismaMod, 
                    wizFinal, 
                    `Congratulations ${userData.name}! If you look to the left side of your character sheet, you'll see your ability scores and modifiers have been populated! Your initiative bonus and speed have also been applied below your class and race. The rest of your character sheet you'll fill out once you've made your level 1 equipment selections and spells, if pertinant. Always ask your DM if you have questions.`, 
                    'charisma'
                );
            }
        });
    }
}

populateAbilityScores(abilities);