const isNonNegativeNumber = (value) => {
    const validNumber = typeof value === "number" && value >= 0 && !isNaN(value);
    return validNumber;
}


export default isNonNegativeNumber;