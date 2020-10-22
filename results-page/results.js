import { getFromLocalStorage } from '../utils.js';
import { USER } from '../utils.js';

const button = document.getElementById('button');

button.addEventListener('click', () => {
    document.location = '../index.html';
});

function renderTable() {
    const table = document.querySelector('tbody');
    const charResults = getFromLocalStorage(USER) || [];

    for (let i = 0; i < charResults.length; i++) {
        const result = charResults[i];
        const tr = renderLineItems(result);

        table.append(tr);
    }
}

renderTable();

function renderLineItems(USER) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdRace = document.createElement('td');
    const tdClass = document.createElement('td');
    const tdStats = document.createElement('td');

    tdName.textContent = USER.name;
    tdRace.textContent = USER.race;
    tdClass.textContent = USER.userClass;

    tr.append(tdName, tdRace, tdClass);

    return tr;
}