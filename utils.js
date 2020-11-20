export const USER = 'USER';

export function rollDice() {
    const roll = Math.ceil(Math.random() * 6);
    return roll;
}
export function imagePicker(img, dice) {
    img.src = `./assets/d6-assets/${dice.value}.png`;
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
// looks like this is defined in character utils as well--pick one place
export function modifier(attribute) {
    const modVal = Number(attribute.textContent);
    if (modVal === 1) {
        return -5;
    } if (modVal === 2 || modVal === 3) {
        return -4;
    } if (modVal === 4 || modVal === 5) {
        return -3;
    } if (modVal === 6 || modVal === 7) {
        return -2;
    } if (modVal === 8 || modVal === 9) {
        return -1;
    } if (modVal === 10 || modVal === 11) {
        return 0;
    } if (modVal === 12 || modVal === 13) {
        return 1;
    } if (modVal === 14 || modVal === 15) {
        return 2;
    } if (modVal === 16 || modVal === 17) {
        return 3;
    } if (modVal === 18 || modVal === 19) {
        return 4;
    } if (modVal === 20 || modVal === 21) {
        return 5;
    } if (modVal === 22 || modVal === 23) {
        return 6;
    }
}