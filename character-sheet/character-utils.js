


export function modifier(attribute) {
    const modVal = Number(attribute.textcontent);
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
export function armorClass(userData, dexMod) {
    const

}





strengthMod.textcontent = modifier(strength);
dexterityMod.textcontent = modifier(dexterity);
constitutionMod.textcontent = modifier(constitution);
intelligenceMod.textcontent = modifier(intelligence);
wisdomMod.textcontent = modifier(wisdom);
charismaMod.textcontent = modifier(charisma);




speed.textcontent = userData.race.speed;
initiative.textcontent = dexterityMod.textcontent; 