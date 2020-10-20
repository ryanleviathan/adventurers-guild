
import { getFromLocalStorage } from '../utils.js';
let userData = getFromLocalStorage('USER');
if (!userData) {
    userData = {
        name: 'Traveler',
    };

}
export default [
    {
        id: '001',
        title: 'Welcome',

        description:
            `Welcome young adventurer! What is your name?`
    },
    {
        id: '002',
        title: 'Nice to Meet you',
        description:
            `Nice to make your acquaintance ${userData.name}! Welcome to "The Adventurers Guild Character Creation Page" my name is Archion Urasus!`
    },
    {
        id: '003',
        title: 'Intro To D&D',
        description:
            `Dungeons and Dragons is a wonderful game that expands your imagination! The first step to any Great campaign is character creation!
        allow me to guid you through the process`
    },
    {
        id: '004',
        title: 'The Process',
        description:
            `can you see the four dice below me? ok so we must first roll all of the dice, however we are going to remove the lowest of the dice and keep the
        sum of the highest three! we are going to do this 6 times. Don't worry I'll keep track of your rolls`
    }];
