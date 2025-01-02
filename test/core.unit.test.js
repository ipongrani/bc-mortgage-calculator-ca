
import core from '../core/dist/core.bundle.js';

const {
    calculateLoanPrincipal,
    calculatePeriodicInterest
} = core;

describe('Core Functionality', () => {



    it('should return a positve number (5) for property price of 10 and down payment of 5', async () => {
        const response = calculateLoanPrincipal(10, 5);
        expect(response).toBe(5);
    });

    it('should return a positive float for 0.05 annual interest and monthly payment schedule', async () => {
        const response = calculatePeriodicInterest(0.05, 'monthly');
        expect(response).toBe(0.42);
    });
})