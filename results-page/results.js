import { getFromLocalStorage } from '../utils.js';
import { USER } from '../utils.js';

const button = document.getElementById('button');
const table = document.querySelector('tbody');

button.addEventListener('click', () => {
    document.location = '../index.html';
});

const charResults = getFromLocalStorage(USER);

const abilitiesArray = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];

function renderLineItems(USER) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdRace = document.createElement('td');
    const tdClass = document.createElement('td');
    const ulStats = document.createElement('ul');

    tdName.textContent = USER.name;
    tdRace.textContent = USER.race;
    tdClass.textContent = USER.userClass;
    USER.rolls.forEach((item, i) => {
        const li = document.createElement('li');
        li.textContent = `${abilitiesArray[i]}: ${item.value}`;
        ulStats.append(li);
    });
    
    tr.append(tdName, tdRace, tdClass, ulStats);

    return tr;
}

// function renderTable() {
//     const charResults = (getFromLocalStorage(USER));
//     console.log(charResults);
//     // Object.keys(charResults).map ((result) => {
//     //     const result = charResults;
//     //     const tr = renderLineItems(result);
        
//     //     console.log(result);
//     //     table.append(tr);

//     // });
//     // console.log(charResults);
//     // for (let i = 0; i < charResults.length; i++) {
//     // }
// }

const tr = renderLineItems(charResults);
table.append(tr);
