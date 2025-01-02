const isNonNegativeNumber = (value) => {
    return typeof value === "number" && value >= 0 && !isNaN(value);
}


export default isNonNegativeNumber;