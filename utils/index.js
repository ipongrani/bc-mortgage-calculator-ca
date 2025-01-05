import isNonNegativeNumber from "./src/isNonNegativeNumber.js";
import isEmpty from "./src/isEmpty.js";
import formatToDecimalPoint from "./src/formatToDecimal.js";
import validAmmortizationPeriod from './src/validateAmmortizationPeriod.js';
import validatePaymentSchedule from "./src/validatePaymentSchedule.js";
import convertCurrencyToNumber from "./src/convertCurrencyToNumber.js";
import convertToNumeric from "./src/convertToNumeric.js";
import validateDownpayment from "./src/validateDownpayment.js";


const utilities = {
    isNonNegativeNumber,
    isEmpty,
    formatToDecimalPoint,
    validAmmortizationPeriod,
    validatePaymentSchedule,
    convertCurrencyToNumber,
    convertToNumeric,
    validateDownpayment
};

export default utilities;