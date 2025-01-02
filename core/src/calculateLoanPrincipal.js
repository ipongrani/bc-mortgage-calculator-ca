const isNonNegativeNumber = (value) => {
    return typeof value === "number" && value >= 0 && !isNaN(value);
}

const isEmpty = (value) => {
    return !value;
}

export default (propertyPrice, downPayment) => {
    
    if (isEmpty(propertyPrice)) return ({error: 'property price is not invalid or not supplied'});
    if (isEmpty(downPayment)) return ({error: 'down payment is not invalid or not supplied'});
    if (!isNonNegativeNumber(propertyPrice)) return ({error: 'property price is not a number'});
    if (!isNonNegativeNumber(downPayment)) return ({error: 'down payment is not a number'});
    if (downPayment > propertyPrice) return ({error: 'down payment is over property price'});

    const loanPrincipal = propertyPrice - downPayment;
    
    return loanPrincipal;
}