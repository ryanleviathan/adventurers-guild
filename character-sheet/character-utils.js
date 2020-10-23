import classes from '../data/class.js';
import { findById, getFromLocalStorage, USER } from '../utils.js';
// import race from '../data/race.js';

export function modifier(attribute) {
    const modVal = Number(attribute.textcontent);
    if (modVal === 1) {
        return -5;
    } if (modVal === 2 || modVal === 3) {
        return -4;
    } if (modVal === 4 || modVal === 5) {
        return -3;
    } if (modVal === 6 || modVal === 7) {
        return -2;
    } if (modVal === 8 || modVal === 9) {
        return -1;
    } if (modVal === 10 || modVal === 11) {
        return 0;
    } if (modVal === 12 || modVal === 13) {
        return 1;
    } if (modVal === 14 || modVal === 15) {
        return 2;
    } if (modVal === 16 || modVal === 17) {
        return 3;
    } if (modVal === 18 || modVal === 19) {
        return 4;
    } if (modVal === 20 || modVal === 21) {
        return 5;
    } if (modVal === 22 || modVal === 23) {
        return 6;
    }
}

const userData = getFromLocalStorage(USER);
const userClass = findById(classes, userData.userClass);
const dialog = document.getElementById('dialog');
const characterName = document.getElementById('character-name');
const characterClass = document.getElementById('class-name');
const characterRace = document.getElementById('race-name');

// Wizard Audio
const wizAudio = document.getElementById('wiz-audio');

function playWizAudio(wiz) {
    wizAudio.src = wiz;
    wizAudio.load();
    wizAudio.play().then(_ => {

    })
}

const wiz1 = ('../assets/wizard-audio/cs1.mp3');
const wiz2 = ('../assets/wizard-audio/cs2.mp3');
const wiz3 = ('../assets/wizard-audio/cs3.mp3');
const wiz4 = ('../assets/wizard-audio/cs4.mp3');
const wiz5 = ('../assets/wizard-audio/cs5.mp3');
const wiz6 = ('../assets/wizard-audio/cs6.mp3');
const wiz7 = ('../assets/wizard-audio/cs7.mp3');
const wiz8 = ('../assets/wizard-audio/cs8.mp3');
const wiz9 = ('../assets/wizard-audio/cs9.mp3');
const wiz10 = ('../assets/wizard-audio/cs10.mp3');
const wiz11 = ('../assets/wizard-audio/cs11.mp3');
const wizBard = ('../assets/wizard-audio/csIfBard.mp3');
const wizStr = ('../assets/wizard-audio/csStr.mp3');

export function wizDialogIntro() {
    const primAbility = userClass.primaryAbility;

    dialog.textContent = `Welcome to the character sheet page! We'll start by putting your name, ${userData.name}, in the character's name box at the top of your character sheet.`;
    characterName.textContent = userData.name;
    window.onload = playWizAudio(wiz1);

    setTimeout(() => { dialog.textContent = `Now, we'll place your class in the top box to the right of your name.`; }, 8000);
    setTimeout(() => { characterClass.textContent = userData.userClass; }, 8000);
    setTimeout(() => { playWizAudio(wiz2); }, 8000);

    setTimeout(() => { dialog.textContent = `Now, we'll place your race in the box below your class.`; }, 12000);
    setTimeout(() => { characterRace.textContent = userData.race; }, 12000);
    setTimeout(() => { playWizAudio(wiz3); }, 12000);

    setTimeout(() => { dialog.textContent = `Now we'll select your Ability Scores. Based on your selections you are a ${userData.race} and your class is ${userData.userClass}. Your primary ability is ${primAbility}.`; }, 16000);
    setTimeout(() => { playWizAudio(wiz4); }, 16000);

    setTimeout(() => { dialog.textContent = `${userData.name}, you'll be using those dice rolls I saved for you earlier. The value of your rolls will become your Ability Scores! Before we do that, first we need to understand what the stats do.`; }, 26000);
    setTimeout(() => { playWizAudio(wiz5); }, 26000);

    setTimeout(() => { dialog.textContent = `Strength is being able to crush a tomato.`; }, 36000);
    setTimeout(() => { playWizAudio(wiz6); }, 36000);

    setTimeout(() => { dialog.textContent = `Dexterity is being able to dodge a tomato.`; }, 41000);
    setTimeout(() => { playWizAudio(wiz7); }, 41000);

    setTimeout(() => { dialog.textContent = `Constitution is being able to eat a bad tomato.`; }, 46000);
    setTimeout(() => { playWizAudio(wiz8); }, 46000);

    setTimeout(() => { dialog.textContent = `Intelligence is knowing a tomato is a fruit.`; }, 51000);
    setTimeout(() => { playWizAudio(wiz9); }, 51000);

    setTimeout(() => { dialog.textContent = `Wisdom is knowing not to put a tomato in a fruit salad.`; }, 56000);
    setTimeout(() => { playWizAudio(wiz10); }, 56000);

    setTimeout(() => { dialog.textContent = `Charisma is being able to sell a tomato-based fruit salad.`; }, 61000);
    setTimeout(() => { playWizAudio(wiz11); }, 61000);

    if (userData.userClass === 'bard') {
        setTimeout(() => { dialog.textContent = `Since you're a Bard, you know a tomato-based fruit salad is called salsa.`; }, 66000);
        setTimeout(() => { playWizAudio(wizBard); }, 66000);
        setTimeout(() => { dialog.textContent = `Remember your primary ability is ${primAbility}, ${userData.name}! Click on one of your Ability Score values to my left to make your choice. Don't worry, I'll do the math for you. First, you'll be deciding your Strength stat.`; }, 70000);
        setTimeout(() => { playWizAudio(wizStr); }, 70000);
    } else {
        setTimeout(() => { dialog.textContent = `Remember your primary ability is ${primAbility}, ${userData.name}! Click on one of your Ability Score values to my left to make your choice. Don't worry, I'll do the math for you. First, you'll be deciding your Strength stat.`; }, 66000);
        setTimeout(() => { playWizAudio(wizStr); }, 66000);
    }
}