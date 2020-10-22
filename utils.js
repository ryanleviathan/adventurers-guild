export const USER = 'USER';

export function rollDice() {
    const roll = Math.ceil(Math.random() * 6);
    return roll;
}
export function imagePicker(img, dice) {
    if (dice.value === 1) {
        img.src = './assets/d6-assets/1.png';
    } if (dice.value === 2) {
        img.src = './assets/d6-assets/2.png';
    } if (dice.value === 3) {
        img.src = './assets/d6-assets/3.png';
    } if (dice.value === 4) {
        img.src = './assets/d6-assets/4.png';
    } if (dice.value === 5) {
        img.src = './assets/d6-assets/5.png';
    } if (dice.value === 6) {
        img.src = './assets/d6-assets/6.png';
    }
}
export function attributeNumber(rollArray) {
    const lowest = Math.min(rollArray[0], rollArray[1], rollArray[2], rollArray[3]);
    const totalOfAll = rollArray[0] + rollArray[1] + rollArray[2] + rollArray[3];
    const totalOfHighestThree = totalOfAll - lowest;
    return totalOfHighestThree;
}
export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);
    localStorage.setItem(key, stringyItem);
    return value;
}
export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
}
export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId)
            return item;
    }
}
export const imageArray = [
    '../assets/numbers/one.png',
    '../assets/numbers/two.png',
    '../assets/numbers/three.png',
    '../assets/numbers/four.png',
    '../assets/numbers/five.png',
    '../assets/numbers/six.png',
    '../assets/numbers/seven.png',
    '../assets/numbers/eight.png',
    '../assets/numbers/nine.png',
    '../assets/numbers/ten.png',
    '../assets/numbers/eleven.png',
    '../assets/numbers/twelve.png',
    '../assets/numbers/thirteen.png',
    '../assets/numbers/fourteen.png',
    '../assets/numbers/fifteen.png',
    '../assets/numbers/sixteen.png',
    '../assets/numbers/seventeen.png',
    '../assets/numbers/eighteen.png',
];
export function numberImage(image, radio) {
    image.src = imageArray[Number(radio.value) + 1];
}