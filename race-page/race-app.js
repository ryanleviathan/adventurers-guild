import raceData from '../data/race.js';
import { USER } from '../utils.js';
import { findById, getFromLocalStorage, setInLocalStorage } from '../utils.js';

const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('.races');
const wizardDialogBox = document.getElementById('dialog');
const button = document.getElementById('button');

populateRace(raceData);

function populateRace() {
    radios[0].value = raceData[0].id;
    radios[1].value = raceData[1].id;
    radios[2].value = raceData[2].id;
    radios[3].value = raceData[3].id;
    radios[4].value = raceData[4].id;
    radios[5].value = raceData[5].id;
    radios[6].value = raceData[6].id;
    radios[7].value = raceData[7].id;
    radios[8].value = raceData[8].id;

    images[0].src = raceData[0].image;
    images[1].src = raceData[1].image;
    images[2].src = raceData[2].image;
    images[3].src = raceData[3].image;
    images[4].src = raceData[4].image;
    images[5].src = raceData[5].image;
    images[6].src = raceData[6].image;
    images[7].src = raceData[7].image;
    images[8].src = raceData[8].image;
}

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', (e) => {
        const raceId = e.target.value;
        const raceChecked = findById(raceData, raceId);
        const dialog = raceChecked.description;

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














function updateUser() {
    const user = JSON.parse(localStorage.getItem('USER'));
    localStorage.setItem('USER', JSON.stringify(user));
}