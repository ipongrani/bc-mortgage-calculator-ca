

import core from '../../core/index.js';
import utilities from '../../utils/dist/utilities.bundle.js';



const {
    calculateMortage,
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



export const core_calculateMortgage = () => describe('Core: Calculate Mortgage', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });


    test('should return error if P is empty', () => {
        isEmpty.mockReturnValueOnce(true);

        const response = calculateMortage(null, 0.004167, 300);
     
        expect(isEmpty).toHaveBeenCalledWith(null)
        expect(response).toEqual({ error: 'loan amount is not valid or not supplied' });
    });

    
    test('should return error if r is empty', () => {
        isEmpty.mockReturnValueOnce(false)
               .mockReturnValueOnce(true);

        const response = calculateMortage(400000, null, 300);

        expect(isEmpty).toHaveBeenCalledWith(400000);
        expect(isEmpty).toHaveBeenCalledWith(null);
        expect(response).toEqual({ error: 'annual interest is not valid or not supplied' });
    }); 


    test('should return error if n is empty', () => {
        isEmpty.mockReturnValueOnce(false)
                .mockReturnValueOnce(false)
                .mockReturnValueOnce(true);
       

        const response = calculateMortage(400000, 0.004167, null);

        expect(isEmpty).toHaveBeenCalledWith(400000);
        expect(isEmpty).toHaveBeenCalledWith(0.004167);
        expect(isEmpty).toHaveBeenCalledWith(null);
        expect(response).toEqual({ error: 'payment schedule is not valid or not supplied' });
    });


    test('should return error if P is not a non-negative number', () => {
        isEmpty.mockReturnValueOnce(false)
                .mockReturnValueOnce(false)
                .mockReturnValueOnce(false);
       
        isNonNegativeNumber.mockReturnValueOnce(false);

        const response = calculateMortage(-400000, 0.004167, 300);

        expect(isEmpty).toHaveBeenCalledWith(-400000);
    
        expect(isEmpty).toHaveBeenCalledWith(0.004167);
        expect(isEmpty).toHaveBeenCalledWith(300);

        expect(isNonNegativeNumber).toHaveBeenCalledWith(-400000);
        expect(response).toEqual({ error: 'loan amount is not a valid number' });
    });


    test('should return error if r is not a non-negative number', () => {
        isEmpty.mockReturnValueOnce(false)
                .mockReturnValueOnce(false)
                .mockReturnValueOnce(false);
       
        isNonNegativeNumber.mockReturnValueOnce(true)
                            .mockReturnValueOnce(false);

        const response = calculateMortage(400000, -0.004167, 300);

        expect(isEmpty).toHaveBeenCalledWith(400000);
        expect(isEmpty).toHaveBeenCalledWith(-0.004167);
        expect(isEmpty).toHaveBeenCalledWith(300);
        expect(isNonNegativeNumber).toHaveBeenCalledWith(400000);
        expect(isNonNegativeNumber).toHaveBeenCalledWith(-0.004167);
        expect(response).toEqual({ error: 'annual interest is not a valid number' });
    });


    test('should return error if n is not a non-negative number', () => {
        isEmpty.mockReturnValueOnce(false)
                .mockReturnValueOnce(false)
                .mockReturnValueOnce(false);
       
        isNonNegativeNumber.mockReturnValueOnce(true)
                            .mockReturnValueOnce(true)
                            .mockReturnValueOnce(false);

        const response = calculateMortage(400000, 0.004167, -300);

        expect(isEmpty).toHaveBeenCalledWith(400000);
        expect(isEmpty).toHaveBeenCalledWith(0.004167);
        expect(isEmpty).toHaveBeenCalledWith(-300);
        expect(isNonNegativeNumber).toHaveBeenCalledWith(400000);
        expect(isNonNegativeNumber).toHaveBeenCalledWith(0.004167);
        expect(isNonNegativeNumber).toHaveBeenCalledWith(-300);
        expect(response).toEqual({ error: 'payment schedule is not a valid number' });
    });


    test('should calculate mortgage payment correctly', () => {
        isEmpty.mockReturnValue(false);
        isNonNegativeNumber.mockReturnValue(true);
        formatToDecimalPoint.mockReturnValue(2338.45);

        const P = 400000; 
        const r = 0.004167; 
        const n = 300; 

        const result = calculateMortage(P, r, n);

        const x = r*((1+r)**n);
        const y = ((1+r)**n)-1;
        const _M = P*(x/y);

        expect(result).toBe(2338.45);
        expect(formatToDecimalPoint).toHaveBeenCalledWith(_M, 2);
    });
    
})

