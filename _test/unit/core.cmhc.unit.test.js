

import core from '../../core/index.js';
import utilities from '../../utils/dist/utilities.bundle.js';


const {
    cmhcPremiumCalculator,
} = core;


jest.mock('../../utils/dist/utilities.bundle.js', () => ({
    isEmpty: jest.fn(),
    isNonNegativeNumber: jest.fn(),
    formatToDecimalPoint: jest.fn(),
}));

const {
    formatToDecimalPoint,
    isEmpty,
    isNonNegativeNumber
} = utilities;



describe('Core: Calculate CMHC', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });


    test('should return error if loan principal is empty', () => {
        isEmpty.mockReturnValueOnce(true);

        const response = cmhcPremiumCalculator(null, .1);
     
        expect(isEmpty).toHaveBeenCalledWith(null)
        expect(response).toEqual({ error: 'loan principal is not valid or not supplied' });
    });

    test('should return error if down payment is empty', () => {
        isEmpty.mockReturnValueOnce(false)
                .mockReturnValueOnce(true);

        const response = cmhcPremiumCalculator(400000, null);
     
        expect(isEmpty).toHaveBeenCalledWith(400000)
        expect(isEmpty).toHaveBeenCalledWith(null)
        expect(response).toEqual({ error: 'down payment is not nvalid or not supplied' });
    });

    test('should return error if loan principal is empty', () => {
        isEmpty.mockReturnValueOnce(false)
                .mockReturnValueOnce(false);

        isNonNegativeNumber.mockReturnValueOnce(false)

        const response = cmhcPremiumCalculator(-400000, .1);
     
        expect(isEmpty).toHaveBeenCalledWith(-400000);
        expect(isEmpty).toHaveBeenCalledWith(.1);
        expect(isNonNegativeNumber).toHaveBeenCalledWith(-400000);
        expect(response).toEqual({ error: 'loan principal is not a valid number' });
    });

    test('should return error if down payment is empty', () => {
        isEmpty.mockReturnValueOnce(false)
                .mockReturnValueOnce(false);

        isNonNegativeNumber.mockReturnValueOnce(true)
                            .mockReturnValueOnce(false);

        const response = cmhcPremiumCalculator(400000, -.1);
     
        expect(isEmpty).toHaveBeenCalledWith(400000);
        expect(isEmpty).toHaveBeenCalledWith(-.1);
        expect(isNonNegativeNumber).toHaveBeenCalledWith(400000);
        expect(isNonNegativeNumber).toHaveBeenCalledWith(-.1);
        expect(response).toEqual({ error: 'down payment is not a valid number' });
    });

    test('calculate CMHC rates correctly', () => {
        isEmpty.mockReturnValueOnce(false)
                .mockReturnValueOnce(false);

        isNonNegativeNumber.mockReturnValueOnce(true)
                            .mockReturnValueOnce(true);

        formatToDecimalPoint.mockReturnValueOnce(3.1);

        const response = cmhcPremiumCalculator(400000, .1);
        const { premiumRate, premiumPercent } = response;
        expect(isEmpty).toHaveBeenCalledWith(400000);
        expect(isEmpty).toHaveBeenCalledWith(.1);
        expect(isNonNegativeNumber).toHaveBeenCalledWith(400000);
        expect(isNonNegativeNumber).toHaveBeenCalledWith(.1);
        expect(premiumRate).toEqual(.031);
        expect(premiumPercent).toEqual("3.1%");
    });

})

