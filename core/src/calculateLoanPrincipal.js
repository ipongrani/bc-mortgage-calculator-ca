import utilities from "../../utilities/dist/utilities.bundle.js";

const {
    isEmpty,
    isNonNegativeNumber
} = utilities;

/** 
 * @preserve
 * Calculates the loan principal amount.
 * 
 * @param {number} propertyPrice - The amount paid monthly.
 * @param {number} downPayment - The annual interest rate (in decimal form, e.g., 0.05 for 5%).
 *
 * @returns {number} The calculated loan principal.
 * 
 */

export default (propertyPrice, downPayment) => {

    
    if (isEmpty(propertyPrice)) return ({error: 'property price is not invalid or not supplied'});
    if (isEmpty(downPayment)) return ({error: 'down payment is not invalid or not supplied'});
    if (!isNonNegativeNumber(propertyPrice)) return ({error: 'property price is not a number'});
    if (!isNonNegativeNumber(downPayment)) return ({error: 'down payment is not a number'});
    if (downPayment > propertyPrice) return ({error: 'down payment is over property price'});

    const loanPrincipal = propertyPrice - downPayment;
    
    return loanPrincipal;
}