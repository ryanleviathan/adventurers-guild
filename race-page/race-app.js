import raceData from '../data/race.js';
import script from '../data/wizard-Script.js';
import { USER } from '../utils.js';
import { findById, getFromLocalStorage, setInLocalStorage } from '../utils.js';

const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('.races');
const wizardDialogBox = document.getElementById('dialog');
const button = document.getElementById('button');

// no need to define this in every file--define it once and import it
import playWizAudio from './some-utils-file.js';

// Wizard Audio
const wizAudio = document.getElementById('wiz-audio');

const wiz6 = ('../assets/wizard-audio/006.mp3');


populateRace(raceData);

wizardDialogBox.textContent = script[5].description;
window.onload = playWizAudio(wiz6);

function populateRace() {
    for (let i = 0; i < 9; i++) {
        radios[i].value = raceData[i].id;
        images[i].src = raceData[i].image;
    }
}

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', (e) => {
        const raceId = e.target.value;
        const raceChecked = findById(raceData, raceId);
        const dialog = raceChecked.description;
        const wizAudio = raceChecked.audio;

        playWizAudio(wizAudio);
        return wizardDialogBox.textContent = dialog;
    });
}

button.addEventListener('click', () => {
    const checked = document.querySelector(':checked');
    const race = checked.value;
    const userData = getFromLocalStorage(USER);
    userData.race = race;
    
    setInLocalStorage(USER, userData);

    window.location = '../class-page/index.html';
});