let primaryKey = 0;

// Returns an object with the passed in values and an incremental ID. 
export const makePottery = (shape, weight, height) => {
    
    return {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey += 1
    }
}