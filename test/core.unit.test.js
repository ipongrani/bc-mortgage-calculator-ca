
import core from '../core/dist/core.bundle.js';

const {
    calculateLoanPrincipal
} = core;

describe('Core Functionality', () => {



    it('should expect calculateLoanPrincipal to return a positve number', async () => {
        const response = calculateLoanPrincipal(10, 5);
        expect(response).toBe(5);
    });


})