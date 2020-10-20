import classData from '../data/class.js';
import script from '../data/wizard-Script.js'
import { USER } from '../app.js';
import { findById } from 'utils.js';

const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('.classes');

function populateClass(classData) {
    radios[0].value = classData[0];
    radios[1].value = classData[1];
    radios[2].value = classData[2];
    radios[3].value = classData[3];
    radios[4].value = classData[4];
    radios[5].value = classData[5];
    radios[6].value = classData[6];
    radios[7].value = classData[7];
    radios[8].value = classData[8];
    radios[9].value = classData[9];
    radios[10].value = classData[10];
    radios[11].value = classData[11];

    images[0].src = classData[0].url_image;
    images[1].src = classData[1].url_image;
    images[2].src = classData[2].url_image;
    images[3].src = classData[3].url_image;
    images[4].src = classData[4].url_image;
    images[5].src = classData[5].url_image;
    images[6].src = classData[6].url_image;
    images[7].src = classData[7].url_image;
    images[8].src = classData[8].url_image;
    images[9].src = classData[9].url_image;
    images[10].src = classData[10].url_image;
    images[11].src = classData[11].url_image;

}

populateClass(classData);