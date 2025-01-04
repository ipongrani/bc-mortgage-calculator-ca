const isNonNegativeNumber = (value) => {
    const validNumber = typeof value === "number" 
                            && Number.isFinite(value)
                            && value >= 0
                            && !isNaN(value);
    return validNumber;
}


export default isNonNegativeNumber;