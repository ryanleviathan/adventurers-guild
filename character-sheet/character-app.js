import { findById, getFromLocalStorage, USER, imageArray, modifier } from '../utils.js';
import race from '../data/race.js';
import classes from '../data/class.js';
import script from '../data/wizard-Script.js';
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


// AC Initiative and Speed from DOM
const armorClass = document.getElementById('ac');
const initiative = document.getElementById('initiative');
const speed = document.getElementById('speed');

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

//Wizard dialog intializing
const userClass = findById(classes, userData.userClass);
const primAbility = userClass.primaryAbility;

setTimeout(() => { dialog.textContent = `Welcome to the character sheet page! Based on your selections you are a ${userData.race} and your class is ${userData.userClass}. Your primary ability is ${primAbility}.`; }, 0);

setTimeout(() => { dialog.textContent = `${userData.name}, you'll be using those dice rolls I saved for you earlier. The value of your rolls will become your Ability Scores! Before we do that, first we need to understand what the stats do.`; }, 10000);

setTimeout(() => { dialog.textContent = `Strength is being able to crush a tomato.`; }, 24000);

setTimeout(() => { dialog.textContent = `Dexterity is being able to dodge a tomato.`; }, 29000);

setTimeout(() => { dialog.textContent = `Constitution is being able to eat a bad tomato.`; }, 34000);

setTimeout(() => { dialog.textContent = `Intelligence is knowing a tomato is a fruit.`; }, 39000);

setTimeout(() => { dialog.textContent = `Wisdom is knowing not to put a tomato in a fruit salad.`; }, 34000);

setTimeout(() => { dialog.textContent = `Charisma is being able to sell a tomato-based fruit salad.`; }, 39000);

if (userData.userClass === 'bard') {
    setTimeout(() => { dialog.textContent = `Since you're a Bard, you know a tomato-based fruit salad is called salsa.`; }, 44000);
} else {
    setTimeout(() => { dialog.textContent = `Remember your primary ability is ${primAbility}, ${userData.name}! Click on one of your Ability Score values to my left to make your choice. Don't worry, I'll do the math for you. First, you'll be deciding your Stregnth stat.`; }, 49000);
}

export function populateAbilityScores(abilities) {
    for (let i = 0; i < radios.length; i++) {
        const radio = radios[i];
        radio.addEventListener('click', (e) => {
            const checkedValue = e.target.value;

            if (abilities[0].textContent === 'str') {
                abilities[0].textContent = checkedValue;

                let raceInfo = findById(race, userData.race);
                let strBonus = raceInfo.strength;
                if (!raceInfo.strength) {
                    strBonus = 0;
                }
                strength.textContent = Number(strBonus) + Number(checkedValue);
                strengthMod.textContent = modifier(strength);
                dialog.textContent = `Now, you'll be choosing your Dexterity stat.`;

            } else if (abilities[1].textContent === 'dex') {
                abilities[1].textContent = checkedValue;

                let raceInfo = findById(race, userData.race);
                let dexBonus = raceInfo.dexterity;
                if (!raceInfo.dexterity) {
                    dexBonus = 0;
                }
                dexterity.textContent = Number(dexBonus) + Number(checkedValue);
                dexterityMod.textContent = modifier(dexterity);
                initiative.textContent = modifier(dexterity);
                dialog.textContent = `Now, you'll be choosing your Constitution stat.`;

            } else if (abilities[2].textContent === 'con') {
                abilities[2].textContent = checkedValue;

                let raceInfo = findById(race, userData.race);
                let conBonus = raceInfo.constitution;
                if (!raceInfo.constitution) {
                    conBonus = 0;
                }
                constitution.textContent = Number(conBonus) + Number(checkedValue);
                constitutionMod.textContent = modifier(constitution);
                dialog.textContent = `Now, you'll be choosing your Intelligence stat.`;

            } else if (abilities[3].textContent === 'int') {
                abilities[3].textContent = checkedValue;

                let raceInfo = findById(race, userData.race);
                let intBonus = raceInfo.intelligence;
                if (!raceInfo.intelligence) {
                    intBonus = 0;
                }
                intelligence.textContent = Number(intBonus) + Number(checkedValue);
                intelligenceMod.textContent = modifier(intelligence);
                dialog.textContent = `Now, you'll be choosing your Wisdom stat.`;

            } else if (abilities[4].textContent === 'wis') {
                abilities[4].textContent = checkedValue;

                let raceInfo = findById(race, userData.race);
                let wisBonus = raceInfo.wisdom;
                if (!raceInfo.wisdom) {
                    wisBonus = 0;
                }
                wisdom.textContent = Number(wisBonus) + Number(checkedValue);
                wisdomMod.textContent = modifier(wisdom);
                dialog.textContent = `Now, you'll be choosing your final stat Charisma.`;

            } else if (abilities[5].textContent === 'cha') {
                abilities[5].textContent = checkedValue;

                let raceInfo = findById(race, userData.race);
                let chaBonus = raceInfo.charisma;
                if (!raceInfo.charisma) {
                    chaBonus = 0;
                }
                charisma.textContent = Number(chaBonus) + Number(checkedValue);
                charismaMod.textContent = modifier(charisma);
                dialog.textContent = `Congratulations ${userData.name}! If you look to the left side of your character sheet, you'll see your ability scores and modifiers have been populated! Your initiative bonus and speed have also been applied below your class and race.`;

            }
        });
    }
}
populateAbilityScores(abilities);
const speedMod = findById(race, userData.race);
speed.textContent = speedMod.speed;









// dialog.textContent = script[1].description;

// setTimeout(() => { dialog.textContent = script[2].description; }, 10000);
// setTimeout(() => { dialog.textContent = script[3].description; }, 10000);




