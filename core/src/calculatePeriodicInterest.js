import utilities from "../../utils/dist/utilities.bundle.js";

const {
    isEmpty,
    isNonNegativeNumber,
    formatToDecimalPoint,
    validatePaymentSchedule
} = utilities;



/** 
 * @preserve
 * Determine the Periodic Interest Rate.
 * 
 * @param {number} annualInterestRate - The interest rate yearly. The annual interest rate (in decimal form, e.g., 0.05 for 5%)
 * @param {number} paymentSchedule - accelerated-bi-weekly, bi-weekly, monthly
 *
 * @returns {number} The calculated periodic interest.
 * 
 */


export default (annualInterestRate, paymentSchedule) => {
    
    if (isEmpty(annualInterestRate)) return ({error: 'annual interest is not valid or not supplied'});
    if (isEmpty(paymentSchedule)) return ({error: 'payment schedule is not valid or not supplied'});
    if (!isNonNegativeNumber(annualInterestRate)) return ({error: 'property price is not a number'});

   
    const selectedPaymentSchedule = validatePaymentSchedule(paymentSchedule);
    if (!selectedPaymentSchedule) return ({error: 'payment schedule is not valid or not supplied'});  

    const periodicInterest = formatToDecimalPoint((annualInterestRate / selectedPaymentSchedule), 6);
    const formattedPeriodicInterest = formatToDecimalPoint((periodicInterest*100), 2);
    
    return {
        periodicInterest,
        formattedPeriodicInterest: `${formattedPeriodicInterest}%`
    };
}