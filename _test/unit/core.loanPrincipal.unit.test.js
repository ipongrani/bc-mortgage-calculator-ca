

import core from '../../core/index.js';
import utilities from '../../utils/dist/utilities.bundle.js';


const {
    calculateLoanPrincipal,
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



describe('Core: Calculate Loan Principal', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });


    test('should return error if propertyPrice is empty', () => {
        isEmpty.mockReturnValueOnce(true);

        const response = calculateLoanPrincipal(null, 100000);
     
        expect(isEmpty).toHaveBeenCalledWith(null)
        expect(response).toEqual({ error: 'property price is not invalid or not supplied' });
    });

    
    test('should return error if downPayment is empty', () => {
        isEmpty.mockReturnValueOnce(false)
               .mockReturnValueOnce(true);

        const response = calculateLoanPrincipal(200000, null);

        expect(isEmpty).toHaveBeenCalledWith(200000);
        expect(isEmpty).toHaveBeenCalledWith(null);
        expect(response).toEqual({ error: 'down payment is not invalid or not supplied' });
    }); 


    test('should return error if propertyPrice is not a non-negative number', () => {
        isEmpty.mockReturnValueOnce(false)
                .mockReturnValueOnce(false);
        isNonNegativeNumber.mockReturnValueOnce(false);

        const response = calculateLoanPrincipal(-200000, 20000);

        expect(response).toEqual({ error: 'property price is not a valid number' });
        expect(isNonNegativeNumber).toHaveBeenCalledWith(-200000);
    });


    test('should return error if downPayment is not a non-negative number', () => {
        isEmpty.mockReturnValueOnce(false)
                .mockReturnValueOnce(false);
        isNonNegativeNumber.mockReturnValueOnce(true)
                            .mockReturnValueOnce(false);

        const response = calculateLoanPrincipal(200000, -5000);

        expect(response).toEqual({ error: 'down payment is not a valid number' });
        expect(isNonNegativeNumber).toHaveBeenCalledWith(-5000);
    });


    test('should return error if downPayment is greater than propertyPrice', () => {
        isEmpty.mockReturnValueOnce(false)
                .mockReturnValueOnce(false);
        isNonNegativeNumber.mockReturnValueOnce(true)
                            .mockReturnValueOnce(true);

        const response = calculateLoanPrincipal(200000, 250000);

        expect(response).toEqual({ error: 'down payment is over property price' });
    });


    test('should calculate loan details correctly', () => {
        isEmpty.mockReturnValueOnce(false)
                .mockReturnValueOnce(false);
        isNonNegativeNumber.mockReturnValueOnce(true)
                            .mockReturnValueOnce(true);
        formatToDecimalPoint
            .mockReturnValueOnce(0.2) 
            .mockReturnValueOnce(20.0); 

        const response = calculateLoanPrincipal(10, 2);

        expect(response).toEqual({
            loanPrincipal: 8,
            downpaymentRate: 0.2,
            downpaymentPercentage: '20%'
        });
        expect(formatToDecimalPoint).toHaveBeenCalledWith(0.2, 6);
        expect(formatToDecimalPoint).toHaveBeenCalledWith(20.0, 2);
    });
})

