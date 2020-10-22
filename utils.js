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
export function numberImage(radio, img) {
    if (radio.value === 1) {
        img.src = '../assets/numbers/one.png';
    } if (radio.value === 2) {
        img.src = '../assets/numbers/two.png';
    } if (radio.value === 3) {
        img.src = '../assets/numbers/three.png';
    } if (radio.value === 4) {
        img.src = '../assets/numbers/four.png';
    } if (radio.value === 5) {
        img.src = '../assets/numbers/five.png';
    } if (radio.value === 6) {
        img.src = '../assets/numbers/six';
    } if (radio.value === 7) {
        img.src = '../assets/numbers/seven.png';
    } if (radio.value === 8) {
        img.src = '../assets/numbers/eight.png';
    } if (radio.value === 9) {
        img.src = '../assets/numbers/nine.png';
    } if (radio.value === 10) {
        img.src = '../assets/numbers/ten.png';
    } if (radio.value === 11) {
        img.src = '../assets/numbers/eleven.png';
    } if (radio.value === 12) {
        img.src = '../assets/numbers/twelve.png';
    } if (radio.value === 13) {
        img.src = '../assets/numbers/thirteen.png';
    } if (radio.value === 14) {
        img.src = '../assets/numbers/fourteen.png';
    } if (radio.value === 15) {
        img.src = '../assets/numbers/fifteen.png';
    } if (radio.value === 16) {
        img.src = '../assets/numbers/sixteen.png';
    } if (radio.value === 17) {
        img.src = '../assets/numbers/seventeen.png';
    } if (radio.value === 18) {
        img.src = '../assets/numbers/eighteen.png';
    }
}


