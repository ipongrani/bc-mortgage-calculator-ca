const convertToNumeric = (value) => {
    if (typeof value === "number" && Number.isFinite(value) && value >= 0) {
        return value; 
    }

    if (typeof value === "string") {
        const trimmedValue = value.replace(/ /g,''); 
        if (trimmedValue !== "" && !isNaN(trimmedValue) && (parseFloat(trimmedValue) >= 0.00)) {
            const newValue =  parseFloat(trimmedValue);
            return newValue;
        }
    }

    return null; 
};

export default convertToNumeric;
