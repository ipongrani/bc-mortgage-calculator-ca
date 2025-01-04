import core from '../core/dist/core.bundle.js';



const {
    calculateLoanPrincipal,
    calculatePeriodicInterest,
    calculateTotalNumberOfPayments,
    calculateMortage
} = core;



describe('Core Functionality', () => {

    it('should return a positve number (400,000) for property price of 500,000 and down payment of 100,000', async () => {
        const { loanPrincipal } = calculateLoanPrincipal(500000, 100000);
        expect(loanPrincipal).toBe(400000);
    });

    it('should return a positive float for 0.05 annual interest and monthly payment schedule', async () => {
        const { periodicInterestRate } = calculatePeriodicInterest(0.05, 'monthly');
        expect(periodicInterestRate).toBe(0.004167);
    });

    it('should return a formatted percentage for 0.05 annual interest and monthly payment schedule', async () => {
        const { formattedPeriodicInterest } = calculatePeriodicInterest(0.05, 'monthly');
        expect(formattedPeriodicInterest).toBe("0.42%");
    });

    it('should return a positive integer for total payments for 25 years ammortization and monthly payment schedule', async () => {
        const response = calculateTotalNumberOfPayments(25, 'monthly');
        expect(response).toBe(300);
    });

    it('should return a positive integer for P = 400,000 | r = 0.004167 | n = 300', async () => {
        const response = calculateMortage(400000, 0.004167, 300);
        expect(response).toBe(2338.45);
    });
})

