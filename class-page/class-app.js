import classData from '../data/class.js';
import script from '../data/wizard-Script.js';
import { USER } from '../utils.js';
import { findById } from '../utils.js';

const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('.classes');

function populateClass(classData) {
    radios[0].value = classData[0].id;
    radios[1].value = classData[1].id;
    radios[2].value = classData[2].id;
    radios[3].value = classData[3].id;
    radios[4].value = classData[4].id;
    radios[5].value = classData[5].id;
    radios[6].value = classData[6].id;
    radios[7].value = classData[7].id;
    radios[8].value = classData[8].id;
    radios[9].value = classData[9].id;
    radios[10].value = classData[10].id;
    radios[11].value = classData[11].id;

    images[0].src = classData[0].image;
    images[1].src = classData[1].image;
    images[2].src = classData[2].image;
    images[3].src = classData[3].image;
    images[4].src = classData[4].image;
    images[5].src = classData[5].image;
    images[6].src = classData[6].image;
    images[7].src = classData[7].image;
    images[8].src = classData[8].image;
    images[9].src = classData[9].image;
    images[10].src = classData[10].image;
    images[11].src = classData[11].image;

}

function updateUser() {
    const user = JSON.parse(localStorage.getItem(USER));
    localStorage.setItem(USER, JSON.stringify(user));
}

populateClass(classData);

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', (e) => {
        const id = e.target.value;
        const classChoice = findById(classData, id);
        
        return updateUser(classChoice);
    });
}