import raceData from '../data/race.js';
import script from '../data/wizard-Script.js';
import { USER } from '../app.js';
import { findById } from '../utils.js';

const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('.races');

populateRace(radios);

function populateRace(raceData) {
    radios[0].value = raceData[0];
    radios[1].value = raceData[1];
    radios[2].value = raceData[2];
    radios[3].value = raceData[3];
    radios[4].value = raceData[4];
    radios[5].value = raceData[5];
    radios[6].value = raceData[6];
    radios[7].value = raceData[7];
    radios[8].value = raceData[8];

    images[0].src = raceData[0].url_image;
    images[1].src = raceData[1].url_image;
    images[2].src = raceData[2].url_image;
    images[3].src = raceData[3].url_image;
    images[4].src = raceData[4].url_image;
    images[5].src = raceData[5].url_image;
    images[6].src = raceData[6].url_image;
    images[7].src = raceData[7].url_image;
    images[8].src = raceData[8].url_image;
}

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', (e) => {
        const id = e.target.value;
        const raceChoice = findById(raceData, id);

        return updateUser(raceChoice);
    });
}

function updateUser() {
    const user = JSON.parse(localStorage.getItem('USER'));
    localStorage.setItem('USER', JSON.stringify(user));
}