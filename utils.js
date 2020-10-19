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