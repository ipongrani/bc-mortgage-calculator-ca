
import core from '../../core/index.js';
import utilities from '../../utils/index.js';
import sampleInput1 from '../samples/sampleInput1.json';
import sampleInput2 from '../samples/sampleInput2.json';
import sampleInput3 from '../samples/sampleInput3.json';


const {
    calculateLoanPrincipal,
    calculatePeriodicInterest,
    calculateTotalNumberOfPayments,
    calculateMortage
} = core;



const {
    convertCurrencyToNumber
} = utilities;


const testCases = [
    sampleInput1,
    sampleInput2,
    sampleInput3
];



export const integrations_loanPrincipalWithMortgage = () => describe('Integrations: Calculate Loan Principal and Mortgage', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test.each(testCases)('SAMPLE Property Price: $propertyPrice | Down Payment: $downPayment - Should correctly calculate payment per schedule', (sampleCase) => {
        
        const {
            propertyPrice,
            downPayment,
            loanPrincipal,
            downpaymentRate,
            downpaymentPercentage,
            annualInterestRate,
            paymentSchedule,
            ammortizationPeriod,
            totalCountPayments,
            paymentPerSchedule
        } = sampleCase;
    
        const cleanPropertPrice = convertCurrencyToNumber(propertyPrice);
        const cleanDownpayment = convertCurrencyToNumber(downPayment);
    
        const response = calculateLoanPrincipal(cleanPropertPrice, cleanDownpayment);

        expect(response).toEqual({
            loanPrincipal: loanPrincipal,
            downpaymentRate: downpaymentRate,
            downpaymentPercentage: downpaymentPercentage
        });

        const { periodicInterestRate } = calculatePeriodicInterest(annualInterestRate, paymentSchedule);
        expect(periodicInterestRate).toBeGreaterThan(0);

        const totalNumberOfPayments = calculateTotalNumberOfPayments(ammortizationPeriod, paymentSchedule);
        expect(totalNumberOfPayments).toEqual(totalCountPayments);

        const computedPaymentPerSchedule = calculateMortage(loanPrincipal, periodicInterestRate, totalNumberOfPayments);
        expect(computedPaymentPerSchedule).toEqual(paymentPerSchedule);
    });

})

