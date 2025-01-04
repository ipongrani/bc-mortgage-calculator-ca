import utilities from "../../utils/dist/utilities.bundle.js";

const {
    isEmpty,
    isNonNegativeNumber,
    formatToDecimalPoint
} = utilities;


const mapRates = (downpaymentRate) => {
    
    const downPaymentPercentage = downpaymentRate * 100;

    // Determine the CMHC Premium Rate
    if (downPaymentPercentage >= 20) {
        return 0; // 20% or higher
    } 
    
    if (downPaymentPercentage >= 15) {
        return .0280; // 15% - 19.99%
    } 
    
    if (downPaymentPercentage >= 10) {
        return .0310; // 10% - 14.99%
    }


    return .0400; // 5% - 9.99%

};



/** 
 * @preserve
 * Calculate insurance premium.
 * 
 * @param {number} loanPrincipal - original loan principal.
 * @param {number} downpaymentRate - downpayment rate for the property
 *
 * @returns {object} returns premiumRate, premiumPercent, premiumAmount, principalWithPremium.
 * 
 */



export default (loanPrincipal, downpaymentRate) => {

   
    if (isEmpty(loanPrincipal)) return ({error: 'loan principal is not valid or not supplied'});
    if (isEmpty(downpaymentRate)) return ({error: 'down payment is not nvalid or not supplied'});
    if (!isNonNegativeNumber(loanPrincipal)) return ({error: 'loan principal is not a valid number'});
    if (!isNonNegativeNumber(downpaymentRate)) return ({error: 'down payment is not a valid number'});
    
    const cmhcThreshold = .2;
    if (downpaymentRate >= cmhcThreshold) {
       return null;
    }


    const premiumRate = mapRates(downpaymentRate);
    const premiumPercent = formatToDecimalPoint((premiumRate*100), 2);
    const premiumAmount = loanPrincipal * premiumRate;
    const principalWithPremium = loanPrincipal+premiumAmount;
    
    
    return {
        premiumRate,
        premiumPercent: `${premiumPercent}%`,
        premiumAmount,
        principalWithPremium
    };
}