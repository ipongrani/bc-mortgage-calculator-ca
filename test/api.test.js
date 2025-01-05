import calculateRates from '../api/src/calculateRates';
import sampleInpu2 from './samples/sampleInput2.json';




describe('API Function Tests', () => {


    it('should calculate rates correctly', () => {
        const rates = calculateRates("monthly", 750000, 120000, 0.05, 25);
        const { cmhc: { premiumRate }, periodicInterestRate } = rates;
        expect(periodicInterestRate).toBe(sampleInpu2.periodicInterestRate);
        expect(premiumRate).toBe(sampleInpu2.cmhc.premiumRate);
    });

   
    it('should return error when an argument is missing', () => {
        const rates = calculateRates("monthly", 750000, 120000, 25);
        const hasError = Object.entries(rates).some(
            ([key, value]) => value && typeof value === 'object' && 'error' in value
          );
      
        expect(hasError).toBe(true);
    });

    it('should return error when an argument is not correctly formatted', () => {
        const rates = calculateRates("monthly", 750000, "120000", 0.05, 25)
        const hasError = Object.entries(rates).some(
            ([key, value]) => value && typeof value === 'object' && 'error' in value
          );
      
        expect(hasError).toBe(true);
    });

})