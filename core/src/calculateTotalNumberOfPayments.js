import utilities from "../../utils/dist/utilities.bundle.js";

const {
    isEmpty,
    isNonNegativeNumber,
    validAmmortizationPeriod,
    validatePaymentSchedule
} = utilities;





/** 
 * @preserve
 * Calculate total number of payments per year.
 * 
 * @param {number} ammortizationPeriod - ammortization period ex. 25, 30, 40 (years).
 * @param {number} paymentSchedule - accelerated-bi-weekly, bi-weekly, monthly
 *
 * @returns {number} The calculated total count of payments.
 * 
 */



export default (ammortizationPeriod, paymentSchedule) => {
    
    if (isEmpty(ammortizationPeriod)) return ({error: 'ammortization period is not valid or not supplied'});
    if (!validAmmortizationPeriod(ammortizationPeriod)) return ({error: 'ammortization period is not valid'});
    if (!isNonNegativeNumber(ammortizationPeriod)) return ({error: 'ammortization period is not a number'});
    if (isEmpty(paymentSchedule)) return ({error: 'payment schedule is not valid or not supplied'});


    const selectedPaymentSchedule = validatePaymentSchedule(paymentSchedule);
    if (!selectedPaymentSchedule) return ({error: 'payment schedule is not valid or not supplied'});  

    const totalPaymentCount = selectedPaymentSchedule * ammortizationPeriod;
    
    return totalPaymentCount;
}