import utilities from "../../utils";


const {
    formatToDecimalPoint,
    isEmpty,
    isNonNegativeNumber,
    convertCurrencyToNumber,
    validAmmortizationPeriod
} = utilities;



describe('Utilities: convertCurrencyToNumber', () => {

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


describe('Utilities: formatToDecimalPoint', () => {

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


describe('Utilities: isEmpty', () => {

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


describe('Utilities: isNonNegativeNumber', () => {

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


describe('Utilities: validAmmortizationPeriod', () => {

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