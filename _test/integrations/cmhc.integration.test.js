
import core from '../../core/index.js';
import utilities from '../../utils/index.js';
import sampleInput1 from '../samples/sampleInput1.json';


const {
    calculateLoanPrincipal,
    cmhcPremiumCalculator
} = core;



const {
    propertyPrice,
    downPayment,
    loanPrincipal,
    annualInterestRate,
    paymentSchedule,
    ammortizationPeriod,
    totalPayments,
    periodicInterestRate,
    paymentPerSchedule
} = sampleInput1;

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


const testCases = [
    sampleInput1
];



describe('Integrations: Calculate CMHC with Loan Principal', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test.each(testCases)('SAMPLE Property Price: $propertyPrice | Down Payment: $downPayment', (sampleCase) => {
        const {
            propertyPrice,
            downPayment
        } = sampleCase;

        console.log('B integrations: ', sampleCase);
    });

})

