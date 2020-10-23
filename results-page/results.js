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

    tr.classList = 'tr';

    tdName.textContent = USER.name;
    tdName.classList = 'name';

    tdRace.textContent = USER.race;
    tdRace.classList = 'race';

    tdClass.textContent = USER.userClass;
    tdClass.classList = 'class';

    USER.rolls.forEach((item, i) => {
        const li = document.createElement('li');
        li.textContent = `${abilitiesArray[i]}: ${item.value}`;
        ulStats.append(li);
    });

    ulStats.classList = 'ul';

    tr.append(tdName, tdClass, tdRace, ulStats);

    return tr;
}



const tr = renderLineItems(charResults);
table.append(tr);
