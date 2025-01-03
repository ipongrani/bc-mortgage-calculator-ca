import isNonNegativeNumber from "./src/isNonNegativeNumber.js";
import isEmpty from "./src/isEmpty.js";
import formatToDecimalPoint from "./src/formatToDecimal.js";
import validAmmortizationPeriod from './src/validateAmmortizationPeriod.js';
import validatePaymentSchedule from "./src/validatePaymentSchedule.js";
import convertCurrencyToNumber from "./src/convertCurrencyToNumber.js";


const utilities = {
    isNonNegativeNumber,
    isEmpty,
    formatToDecimalPoint,
    validAmmortizationPeriod,
    validatePaymentSchedule,
    convertCurrencyToNumber
};

export default utilities;