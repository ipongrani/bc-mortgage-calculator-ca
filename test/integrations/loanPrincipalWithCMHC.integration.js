
import core from '../../core/index.js';
import utilities from '../../utils/index.js';
import sampleInput1 from '../samples/sampleInput1.json';
import sampleInput2 from '../samples/sampleInput2.json';
import sampleInput3 from '../samples/sampleInput3.json';


const {
    calculateLoanPrincipal,
    cmhcPremiumCalculator
} = core;



const {
    convertCurrencyToNumber
} = utilities;


const testCases = [
    sampleInput1,
    sampleInput2,
    sampleInput3
];



export const integrations_loanPrincipalWithCMHC = () => describe('Integrations: Calculate Loan Principal and CMHC rates', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test.each(testCases)('SAMPLE Property Price: $propertyPrice | Down Payment: $downPayment - Should correctly identify if CMHC is required or not', (sampleCase) => {
        
        const {
            propertyPrice,
            downPayment,
            loanPrincipal,
            downpaymentRate,
            downpaymentPercentage
        } = sampleCase;
    
        const cleanPropertPrice = convertCurrencyToNumber(propertyPrice);
        const cleanDownpayment = convertCurrencyToNumber(downPayment);
    
        const response = calculateLoanPrincipal(cleanPropertPrice, cleanDownpayment);

        expect(response).toEqual({
            loanPrincipal: loanPrincipal,
            downpaymentRate: downpaymentRate,
            downpaymentPercentage: downpaymentPercentage
        });

        const cmhcPremium = cmhcPremiumCalculator(loanPrincipal, downpaymentRate);

        if (downpaymentRate < 0.2) {
            expect(typeof cmhcPremium).toBe('object');
            expect(cmhcPremium).not.toBeNull();
            expect(Array.isArray(cmhcPremium)).toBe(false);
        } else {
            expect(cmhcPremium).toBeNull();
        }
    });

})
