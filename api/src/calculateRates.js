import core from '../../core/dist/core.bundle.js';


const {
    calculateLoanPrincipal,
    cmhcPremiumCalculator,
    calculatePeriodicInterest,
    calculateTotalNumberOfPayments,
    calculateMortage
} = core;


export default function calculateRates(
    paymentSchedule,
    cleanPropertPrice,
    cleanDownpayment,
    cleanAnnualInterestRate,
    cleanAmmortizationPeriod
) {
    const {
        loanPrincipal,
        downpaymentRate,
    } = calculateLoanPrincipal(cleanPropertPrice, cleanDownpayment);
    const calculatedCmhcPremium = cmhcPremiumCalculator(loanPrincipal, downpaymentRate);
    const usePrincipal = calculatedCmhcPremium ? calculatedCmhcPremium.principalWithPremium : loanPrincipal;
    const { periodicInterestRate } = calculatePeriodicInterest(cleanAnnualInterestRate, paymentSchedule);
    const totalNumberOfPayments = calculateTotalNumberOfPayments(cleanAmmortizationPeriod, paymentSchedule);
    const computedPaymentPerSchedule = calculateMortage(usePrincipal, periodicInterestRate, totalNumberOfPayments);

    const response = {
        loanPrincipal,
        cmhcAdjustedLoanPrincipal: usePrincipal,
        annualInterestRate: cleanAnnualInterestRate,
        ammortizationPeriod: cleanAmmortizationPeriod,
        paymentSchedule,
        periodicInterestRate,
        totalPaymentCount: totalNumberOfPayments,
        paymentPerSchedule: computedPaymentPerSchedule,
        cmhc: calculatedCmhcPremium || 'not_required'
    }

    return response;
}