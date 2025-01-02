const isNonNegativeNumber = (value) => {
    return typeof value === "number" && value >= 0 && !isNaN(value);
}

const isEmpty = (value) => {
    return !value;
}


const formatToTwoDecimals = (num) => {
    const formattedNum = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(num);
    return parseFloat(formattedNum);
};


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

const payment_schedules = {
    'accelerated-bi-weekly': 26,
    'bi-weekly': 24,
    'monthly': 12
};

export default (annualInterestRate, paymentSchedule) => {
    
    if (isEmpty(annualInterestRate)) return ({error: 'annual interest is not valid or not supplied'});
    if (isEmpty(paymentSchedule)) return ({error: 'payment schedule is not valid or not supplied'});
    if (!isNonNegativeNumber(annualInterestRate)) return ({error: 'property price is not a number'});

    const allowed_schedules = Object.keys(payment_schedules);
    if (!allowed_schedules.includes(paymentSchedule)) return ({error: 'payment schedule is not valid or not supplied'});
    

    const selectedPaymentSchedule = payment_schedules[paymentSchedule];
    const periodicInterest = formatToTwoDecimals(((annualInterestRate / selectedPaymentSchedule)*100));
    
    return periodicInterest
}