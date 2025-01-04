
import core from '../../core/index.js';
import utilities from '../../utils/index.js';
import sampleInput1 from '../samples/sampleInput1.json';
import sampleInput2 from '../samples/sampleInput2.json';
import sampleInput3 from '../samples/sampleInput3.json';


const {
    calculateLoanPrincipal,
    cmhcPremiumCalculator,
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

const cmhcThreshold = 0.2;

export const integrations_mortgageWithCMHC = () => describe('Integrations: Calculate Mortgage and CMHC rates', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test.each(testCases)('SAMPLE Property Price: $propertyPrice | Down Payment: $downPayment - Mortgage payment per schedule with CMHC should be greater than initial amount', (sampleCase) => {
        
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

        const calculatedCmhcPremium = cmhcPremiumCalculator(loanPrincipal, downpaymentRate);


        if (downpaymentRate < cmhcThreshold) {
            expect(typeof calculatedCmhcPremium).toBe('object');
            expect(calculatedCmhcPremium).not.toBeNull();
            expect(Array.isArray(calculatedCmhcPremium)).toBe(false);
            const { premiumRate, premiumAmount } = calculatedCmhcPremium;
            expect(premiumRate).toBeGreaterThan(0);
            expect(premiumAmount).toBeGreaterThan(0);
            const { cmhcPremium } = sampleCase;
            expect(calculatedCmhcPremium).toEqual(cmhcPremium);
        } else {
            expect(calculatedCmhcPremium).toBeNull();
        }

        const usePrincipal = calculatedCmhcPremium ? calculatedCmhcPremium.principalWithPremium : loanPrincipal;

        const { periodicInterestRate } = calculatePeriodicInterest(annualInterestRate, paymentSchedule);
        expect(periodicInterestRate).toBeGreaterThan(0);

        const totalNumberOfPayments = calculateTotalNumberOfPayments(ammortizationPeriod, paymentSchedule);
        expect(totalNumberOfPayments).toEqual(totalCountPayments);

        const computedPaymentPerSchedule = calculateMortage(usePrincipal, periodicInterestRate, totalNumberOfPayments);
        expect(computedPaymentPerSchedule).toBeGreaterThan(0);
        
        if (downpaymentRate < cmhcThreshold) {
            expect(computedPaymentPerSchedule).toBeGreaterThan(paymentPerSchedule);
        } else {
            const { paymentPerSchedule } = sampleCase;
            expect(computedPaymentPerSchedule).toEqual(paymentPerSchedule);
        }
    });

})

