import utilities from "../../utils/dist/utilities.bundle.js";

const {
    isEmpty,
    isNonNegativeNumber,
    formatToDecimalPoint
} = utilities;



/** 
 * @preserve
 * Calculates Morgage based on:
 * 
 * x = r*((1+r)**n)
 * y = ((1+r)**n)-1
 * M = P*(x/y)
 * 
 * @param {number} P - Loan Principal. The loan amount after subtracting the down payment.
 * @param {number} r - The annual interest rate divided by the number of payments per year (periodicInterest).
 * @param {number} n - The total number of payments over the amortization period.
 *
 * @returns {number} The calculated amount per payment period.
 * 
 */


export default (P, r, n) => {

    if (isEmpty(P)) return ({error: 'loan amount is not valid or not supplied'});
    if (isEmpty(r)) return ({error: 'annual interest is not valid or not supplied'});
    if (isEmpty(n)) return ({error: 'payment schedule is not valid or not supplied'});

    if (!isNonNegativeNumber(P)) return ({error: 'loan amount is not a valid number'});
    if (!isNonNegativeNumber(r)) return ({error: 'annual interest is not a valid number'});
    if (!isNonNegativeNumber(n)) return ({error: 'payment schedule is not a valid number'});


    const x = r*((1+r)**n);
    const y = ((1+r)**n)-1;
    const _M = P*(x/y);
    const mortgagePaymentPerPeriod = formatToDecimalPoint(_M, 2);

    return mortgagePaymentPerPeriod;
}