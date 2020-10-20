import { findById, getFromLocalStorage, setInLocalStorage, USER } from '../utils.js';






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
//
// AC Initiative and Speed from DOM
const armorClass = document.getElementById(armorClass);
const initiative = document.getElementById('initiative');
const speed = document.getElementById('speed');
//

const userdata = getFromLocalStorage(USER);
