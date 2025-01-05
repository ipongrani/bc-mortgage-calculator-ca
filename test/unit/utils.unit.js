import utilities from "../../utils";


const {
    formatToDecimalPoint,
    isEmpty,
    isNonNegativeNumber,
    convertCurrencyToNumber,
    validAmmortizationPeriod,
    convertToNumeric,
    validatePaymentSchedule,
    validateDownpayment
} = utilities;



export const util_convertCurrencyToNumber = () => describe('Utilities: convertCurrencyToNumber', () => {

    it('should return null for random string', async () => {
        const response = convertCurrencyToNumber('xzcdsfffvxc');
        expect(response).toBe(null);
    });

    it('should successfully convert $100,000', async () => {
        const response = convertCurrencyToNumber('$100,000');
        expect(response).toBe(100000);
    });

    it('should successfully convert $100,000.42', async () => {
        const response = convertCurrencyToNumber('$100,000.42');
        expect(response).toBe(100000.42);
    });

    it('should return back original if negative', async () => {
        const response = convertCurrencyToNumber(-100000);
        expect(response).toBe(-100000);
    });

    it('should return back original if already acceptable number', async () => {
        const response = convertCurrencyToNumber(100000);
        expect(response).toBe(100000);
    });
})

export const util_validatePaymentSchedule = () => describe('Utilities: validatePaymentSchedule', () => {

    const validSchedules = {
        'accelerated-bi-weekly': 26,
        'bi-weekly': 24,
        'monthly': 12,
    };

    it('should return 26 for "accelerated-bi-weekly"', () => {
        const result = validatePaymentSchedule('accelerated-bi-weekly');
        expect(result).toBe(26);
    });

    it('should return 24 for "bi-weekly"', () => {
        const result = validatePaymentSchedule('bi-weekly');
        expect(result).toBe(24);
    });

    it('should return 12 for "monthly"', () => {
        const result = validatePaymentSchedule('monthly');
        expect(result).toBe(12);
    });

    it('should return false for an invalid schedule', () => {
        const result = validatePaymentSchedule('weekly');
        expect(result).toBe(false);
    });

    it('should return false for an empty string', () => {
        const result = validatePaymentSchedule('');
        expect(result).toBe(false);
    });

    it('should return false for null input', () => {
        const result = validatePaymentSchedule(null);
        expect(result).toBe(false);
    });

    it('should return false for undefined input', () => {
        const result = validatePaymentSchedule(undefined);
        expect(result).toBe(false);
    });

    it('should return false for a number input', () => {
        const result = validatePaymentSchedule(12);
        expect(result).toBe(false);
    });

    it('should return false for a boolean input', () => {
        const result = validatePaymentSchedule(true);
        expect(result).toBe(false);
    });

    it('should return false for an object input', () => {
        const result = validatePaymentSchedule({ schedule: 'monthly' });
        expect(result).toBe(false);
    });

    it('should return false for an array input', () => {
        const result = validatePaymentSchedule(['monthly']);
        expect(result).toBe(false);
    });

    it('should return the correct value for case-sensitive inputs', () => {
        const result = validatePaymentSchedule('Monthly');
        expect(result).toBe(false); // Should fail because it's case-sensitive
    });

    it('should correctly validate all allowed schedules', () => {
        Object.keys(validSchedules).forEach((schedule) => {
            const result = validatePaymentSchedule(schedule);
            expect(result).toBe(validSchedules[schedule]);
        });
    });
})




export const util_validateDownpayment = () => describe('Utilities: validateDownpayment', () => {
    test('should return true for valid downpayment of at least 5% of loanPrincipal', () => {
        expect(validateDownpayment(100000, 5000)).toBe(true);
        expect(validateDownpayment(200000, 10000)).toBe(true);
        expect(validateDownpayment(500000, 25000)).toBe(true);
    });

    test('should return false for downpayment less than 5% of loanPrincipal', () => {
        expect(validateDownpayment(100000, 4999)).toBe(false);
        expect(validateDownpayment(200000, 9999)).toBe(false);
        expect(validateDownpayment(500000, 24999)).toBe(false);
    });

    test('should return false for negative downpayment or loanPrincipal', () => {
        expect(validateDownpayment(-100000, 5000)).toBe(false);
        expect(validateDownpayment(100000, -5000)).toBe(false);
        expect(validateDownpayment(-100000, -5000)).toBe(false);
    });

    test('should return false for zero or negative loanPrincipal', () => {
        expect(validateDownpayment(0, 5000)).toBe(false);
        expect(validateDownpayment(-100000, 5000)).toBe(false);
    });

    test('should return false for non-number inputs', () => {
        expect(validateDownpayment('100000', 5000)).toBe(false);
        expect(validateDownpayment(100000, '5000')).toBe(false);
        expect(validateDownpayment('100000', '5000')).toBe(false);
        expect(validateDownpayment(null, 5000)).toBe(false);
        expect(validateDownpayment(100000, undefined)).toBe(false);
    });

    test('should handle edge cases', () => {
        expect(validateDownpayment(100000, 5000)).toBe(true); // Exactly 5%
        expect(validateDownpayment(100000, 5001)).toBe(true); // Slightly above 5%
        expect(validateDownpayment(100000, 4999)).toBe(false); // Slightly below 5%
        expect(validateDownpayment(100000, 0)).toBe(false); // Downpayment of 0
    });

    test('should handle very large numbers', () => {
        expect(validateDownpayment(1e9, 5e7)).toBe(true); // Large valid input
        expect(validateDownpayment(1e9, 4.9e7)).toBe(false); // Slightly below the threshold
    });

    test('should handle small numbers and edge cases', () => {
        expect(validateDownpayment(100, 5)).toBe(true); // Exactly 5%
        expect(validateDownpayment(100, 4.99)).toBe(false); // Below 5%
    });
});


export const util_convertToNumeric = () => describe('Utilities: convertToNumeric', () => {

    it('should return null for boolean true', () => {
        const response = convertToNumeric(true);
        expect(response).toBe(null);
    });

    it('should return null for boolean false', () => {
        const response = convertToNumeric(false);
        expect(response).toBe(null);
    });

    it('should handle large numbers as valid', () => {
        const response = convertToNumeric(1e10);
        expect(response).toBe(1e10);
    });

    it('should return null for negative infinity', () => {
        const response = convertToNumeric(-Infinity);
        expect(response).toBe(null);
    });

    it('should return null for positive infinity', () => {
        const response = convertToNumeric(Infinity);
        expect(response).toBe(null);
    });

    it('should return null for a string with whitespace', () => {
        const response = convertToNumeric("   ");
        expect(response).toBe(null);
    });

    it('should return the parsed float for a string with leading or trailing spaces', () => {
        const response = convertToNumeric("  10.25  ");
        expect(response).toBe(10.25);
    });

    it('should return the original value for zero', () => {
        const response = convertToNumeric(0);
        expect(response).toBe(0);
    });

    it('should return the parsed float for a valid non-negative string number', () => {
        const response = convertToNumeric("100");
        expect(response).toBe(100);
    });

    it('should return the parsed float for a valid decimal string number', () => {
        const response = convertToNumeric("50.5");
        expect(response).toBe(50.5);
    });

    it('should return the parsed float for a valid decimal number', () => {
        const response = convertToNumeric(0.05);
        expect(response).toBe(0.05);
    });

    it('should return the parsed float for a string representation of zero', () => {
        const response = convertToNumeric("0");
        expect(response).toBe(0);
    });
})


export const util_formatToDecimalPoint = () => describe('Utilities: formatToDecimalPoint', () => {

    it('should return null for invalid number supplied', async () => {
        const response = formatToDecimalPoint('xzcdsfffvxc', 2);
        expect(response).toBe(null);
    });

    it('should return null for invalid decimal point', async () => {
        const response = formatToDecimalPoint(100.42336, 0.2);
        expect(response).toBe(null);
    });


    it('should successfully format to the correct precision', async () => {
        const response1 = formatToDecimalPoint(100.42336, 2);
        expect(response1).toBe(100.42);

        const response2 = formatToDecimalPoint(100.42336, 4);
        expect(response2).toBe(100.4234);

        const response3 = formatToDecimalPoint(100.42256, 3);
        expect(response3).toBe(100.423);

        const response4 = formatToDecimalPoint(42000, 2);
        expect(response4).toBe(42000);

        const response5 = formatToDecimalPoint(40000, 2);
        expect(response5).toBe(40000);
    });
})


export const util_isEmpty = () => describe('Utilities: isEmpty', () => {

    it('should return true for ""', async () => {
        const response = isEmpty('');
        expect(response).toBe(true);
    });

    it('should return true for null', async () => {
        const response = isEmpty(null);
        expect(response).toBe(true);
    });

    it('should return true for undefined', async () => {
        const response = isEmpty(undefined);
        expect(response).toBe(true);
    });

    it('should return true for false', async () => {
        const response = isEmpty(false);
        expect(response).toBe(true);
    });

    it('should return false for " "', async () => {
        const response = isEmpty(' ');
        expect(response).toBe(false);
    });

    it('should return false if exist', async () => {
        const response1 = isEmpty(true);
        expect(response1).toBe(false);

        const response2 = isEmpty(123);
        expect(response2).toBe(false);

        const response3 = isEmpty('123');
        expect(response3).toBe(false);
    });
})


export const util_isNonNegativeNumber = () =>  describe('Utilities: isNonNegativeNumber', () => {

    it('should return false for string type', async () => {
        const response = isNonNegativeNumber('100');
        expect(response).toBe(false);
    });

    it('should return false for negative integer', async () => {
        const response = isNonNegativeNumber(-100);
        expect(response).toBe(false);
    });

    it('should return true if valid positve integer', async () => {
        const response = isNonNegativeNumber(100);
        expect(response).toBe(true);
    });

    it('should return false for negative float', async () => {
        const response = isNonNegativeNumber(-100.42);
        expect(response).toBe(false);
    });

    it('should return true if valid positve float', async () => {
        const response = isNonNegativeNumber(100.42);
        expect(response).toBe(true);
    });
})


export const util_validAmmortizationPeriod = () => describe('Utilities: validAmmortizationPeriod', () => {

    it('should return false if less than 5 years', async () => {
        const response = validAmmortizationPeriod('100');
        expect(response).toBe(false);
    });

    it('should return false if greater than 30 years', async () => {
        const response = validAmmortizationPeriod(100);
        expect(response).toBe(false);
    });

    it('should return false if not in increments of 5', async () => {
        const response = validAmmortizationPeriod(18);
        expect(response).toBe(false);
    });

    it('should return false if in string type', async () => {
        const response = validAmmortizationPeriod(18);
        expect(response).toBe(false);
    });

    it('should return true if valid', async () => {
        const response1 = validAmmortizationPeriod(30);
        expect(response1).toBe(true);

        const response2 = validAmmortizationPeriod(25);
        expect(response2).toBe(true);

        const response3 = validAmmortizationPeriod(15);
        expect(response3).toBe(true);

        const response4 = validAmmortizationPeriod(5);
        expect(response4).toBe(true);
    });

})