import utilities from "../../utils/dist/utilities.bundle.js";

const {
    isEmpty,
    isNonNegativeNumber
} = utilities;





/** 
 * @preserve
 * Calculate total number of payments per year.
 * 
 * @param {number} ammortizationPeriod - ammortization period ex. 25, 30, 40 (years).
 * @param {number} paymentSchedule - accelerated-bi-weekly, bi-weekly, monthly
 *
 * @returns {number} The calculated total number of payments.
 * 
 */

const payment_schedules = {
    'accelerated-bi-weekly': 26,
    'bi-weekly': 24,
    'monthly': 12
};

export default (ammortizationPeriod, paymentSchedule) => {
    
    if (isEmpty(ammortizationPeriod)) return ({error: 'ammortization period is not valid or not supplied'});
    if (isEmpty(paymentSchedule)) return ({error: 'payment schedule is not valid or not supplied'});
    if (!isNonNegativeNumber(ammortizationPeriod)) return ({error: 'ammortization period is not a number'});

    const allowed_schedules = Object.keys(payment_schedules);
    if (!allowed_schedules.includes(paymentSchedule)) return ({error: 'payment schedule is not valid or not supplied'});
    

    const selectedPaymentSchedule = payment_schedules[paymentSchedule];
    const totalPaymentNumber = selectedPaymentSchedule * ammortizationPeriod;
    
    return totalPaymentNumber;
}