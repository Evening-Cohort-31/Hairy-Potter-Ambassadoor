const potteryToSell = [];

//Determine if pottery can be sold, and if so, for what price. 
export const toSellOrNotToSell = (pottery) => {
    // Flags for heavy & cracked
    let heavy = pottery.weight >= 6;
    let cracked = pottery.cracked;

    // If item is not cracked, add a price based on weight, add updated object to potteryToSell array and return updated object, otherwise return original object
    if (!cracked) {
        let price = heavy ? 40 : 20;
        let pricedPiece = {...pottery, price: price}

        potteryToSell.push(pricedPiece)
        return pricedPiece
    } else {
        return pottery
    }

    
}

// Returns a copy of potteryToSell Array
export const usePottery = () => {
    return structuredClone(potteryToSell)
}