import classData from '../data/class.js';
import script from '../data/wizard-Script.js';
import { USER } from '../utils.js';
import { findById, getFromLocalStorage, setInLocalStorage } from '../utils.js';

const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('.classes');
const dialogue = document.getElementById('dialog');
const submitButton = document.getElementById('button');
import playWizAudio from './some-utils-file.js';
// Wizard Audio

const wiz7 = ('../assets/wizard-audio/007.mp3');

function populateClass(classData) {
    for (let i = 0; i < 12; i++) {
        radios[i].value = classData[i].id;
        images[i].src = classData[i].image;  
    }
}

populateClass(classData);

dialogue.textContent = script[6].description;
window.onload = playWizAudio(wiz7);

//radios will pull class data and populate wizard dialogue & avatar sections with relevant information
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', (e) => {
        const classId = e.target.value;
        const classChecked = findById(classData, classId);
        const wizardDialogue = classChecked.description;
        const wizAudio = classChecked.audio;

        playWizAudio(wizAudio);
        return dialogue.textContent = wizardDialogue;
    });
}

//submit button will add selected class to USER in local storage
submitButton.addEventListener('click', () => {

    const checked = document.querySelector(':checked');
    const userClass = checked.value;
    const userData = getFromLocalStorage(USER);
    userData.userClass = userClass;

    setInLocalStorage(USER, userData);
    window.location = '../character-sheet/index.html';
});
