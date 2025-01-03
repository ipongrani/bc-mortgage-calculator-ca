const convertCurrencyToNumber = (val) => {
    const isString = typeof val === 'string';
    const isNumber = typeof val === 'number';

    if (isNumber) return val;

    if (isString) {
        const strippedString = val.replace(/[$,]/g, '');

        const isValidFloat = !isNaN(Number(strippedString)) && Number(strippedString) >= 0;

        if (isValidFloat) {
            return parseFloat(strippedString);
        }
    }

    return null;
};


export default convertCurrencyToNumber