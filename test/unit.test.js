import { core_calculateMortgage } from './unit/core.calculateMortgage.unit.js';
import { core_loanPrincipal } from './unit/core.loanPrincipal.unit.js';
import { core_cmhc } from './unit/core.cmhc.unit.js';
import {
    util_convertCurrencyToNumber,
    util_formatToDecimalPoint,
    util_isEmpty,
    util_isNonNegativeNumber,
    util_validAmmortizationPeriod,
    util_convertToNumeric,
    util_validatePaymentSchedule
} from './unit/utils.unit.js';






describe('Utilities Functionality Unit Testing', () => {
    util_validatePaymentSchedule();
    util_convertToNumeric();
    util_convertCurrencyToNumber();
    util_formatToDecimalPoint();
    util_isEmpty();
    util_isNonNegativeNumber();
    util_validAmmortizationPeriod();
})

describe('Core Functionality Unit Testing', () => {
    core_loanPrincipal();
    core_cmhc();
    core_calculateMortgage();
})
