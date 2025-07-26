// Accepts pottery object and temperature, returns a shallow copy of the passed in object with new keys: fired (always true), and cracked (based off temperature)
export const firePottery = (pottery, temperature) => {
    return {...pottery, fired: true, cracked: temperature > 2200 ? true : false}
    }