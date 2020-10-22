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
            `Nice to make your acquaintance ${userData.name}! Welcome to The Adventurers Guild Character Creation Page! My name is Archion Urasus.`
    },
    {
        id: '003',
        title: 'Intro To D&D',
        description:
            `Dungeons and Dragons is a wonderful game that expands your imagination! The first step to any great campaign is character creation! I'm here to guide you through the process.`
    },
    {
        id: '004',
        title: 'The Process',
        description:
            `Can you see the four dice below me? Let's roll all of the dice! We'll remove the lowest of the dice rolls, keeping the sum of the highest three! We'll do this 6 times to generate 6 stats. Don't worry, I'll keep track of your rolls and fill you in on how to use these numbers later.`
    },
    {
        id: '005',
        title: 'the rolls',
        description: 'Very good! Now that we have your dice rolls we can move on to the next step!'

    },
    {
        id: '006',
        title: 'race intro',
        description: 'You have the privilege of being represented by one of the nine (base) races in your campaign. Each race comes with a speed value, attribute modifiers, and traits that you wills shape how you interact with the world for the rest of your campaign. Here is the list of available races. Please click on one for a brief description.'

    },
    {
        id:'007',
        title: 'class intro',
        description: 'You will now choose between twelve different classes. Every class comes with a set amount of hit points, primary abilities, class proficiencies, starting equipment, and special features. This decision will further enhances how you interact with the world in which your campaign is set in. Please select a class so I can give a description of each class.'
    }
];
