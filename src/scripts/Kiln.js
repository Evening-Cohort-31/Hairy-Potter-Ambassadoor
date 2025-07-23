export const firePottery = (pottery, temperature) => {
    return {...pottery, fired: true, cracked: temperature > 2200 ? true : false}
    }